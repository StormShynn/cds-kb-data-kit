---
name: I_COSTANALYSISRESOURCETEXT
description: "Costanalysisresourcetext"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_COSTANALYSISRESOURCETEXT

**Costanalysisresourcetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostAnalysisResource` | ✓ | |  | `cast( cskv.resrc as fis_co_resource preserving type )` |  |  |
| `ControllingArea` | ✓ | |  | `cast( cskv.kokrs as fis_kokrs preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast( cskv.datbi as fis_datbi preserving type )` |  |  |
| `ValidityStartDate` |  | |  | `cast( _md.datab as fis_datab preserving type )` |  |  |
| `CostAnalysisResourceName` |  | |  | `cast( cskv.ktext as fis_co_resrc_name preserving type )` |  |  |
| `CostAnalysisResourceDesc` |  | |  | `cast( cskv.ltext as fis_co_resrc_desc preserving type )` |  |  |
| `_ControllingArea` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @EndUserText.label: 'Cost Analysis Resource - Text'
@Analytics: {dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'CostAnalysisResource',
                usageType.sizeCategory: #M,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }
@Analytics.technicalName: 'IFICOANLYSRESRCT'                   
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view entity I_CostAnalysisResourceText
  as select from cskv
  left outer to one join cskr as _md on cskv.resrc = _md.resrc
                                     and cskv.kokrs = _md.kokrs
                                     and cskv.datbi = _md.datbi
  association [0..1] to I_ControllingArea as _ControllingArea on $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: ['CostAnalysisResourceDesc', 'CostAnalysisResourceName']
  key cast( cskv.resrc as fis_co_resource preserving type ) as CostAnalysisResource,

      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cast( cskv.kokrs as fis_kokrs preserving type )       as ControllingArea,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cskv.spras                                                 as Language,

      @Semantics.businessDate.to: true
  key cast( cskv.datbi as fis_datbi preserving type )       as ValidityEndDate,

      @Semantics.businessDate.from: true
      cast( _md.datab as fis_datab preserving type )            as ValidityStartDate,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast( cskv.ktext as fis_co_resrc_name preserving type )    as CostAnalysisResourceName,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast( cskv.ltext as fis_co_resrc_desc preserving type )    as CostAnalysisResourceDesc,

      _ControllingArea,
      _Language
}
```
