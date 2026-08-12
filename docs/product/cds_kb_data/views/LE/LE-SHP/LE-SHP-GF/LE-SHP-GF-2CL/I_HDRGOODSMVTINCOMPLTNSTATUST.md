---
name: I_HDRGOODSMVTINCOMPLTNSTATUST
description: "Hdrgoodsmvtincompltnstatust"
app_component: LE-SHP-GF-2CL
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
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - status
  - header-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_HDRGOODSMVTINCOMPLTNSTATUST

**Hdrgoodsmvtincompltnstatust**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
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
| `HdrGoodsMvtIncompletionStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `HdrGoodsMvtIncompltnStatusDesc` |  | |  | `bezei` |  |  |
| `_HdrGoodsMvtIncompletionStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HdrGoodsMvtIncompletionStatus` | `I_HdrGoodsMvtIncompltnStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'HdrGoodsMvtIncompletionStatus',
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S },
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                           #SEARCHABLE_ENTITY ] }
@EndUserText.label: 'Header Goods Mvt Incompletion Sts - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDHDGMVINCSTST'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_HdrGoodsMvtIncompltnStatusT
  as select from tvbst

  association [0..1] to I_HdrGoodsMvtIncompltnStatus as _HdrGoodsMvtIncompletionStatus on $projection.HdrGoodsMvtIncompletionStatus = _HdrGoodsMvtIncompletionStatus.HdrGoodsMvtIncompletionStatus
  association [0..1] to I_Language                   as _Language                      on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_HdrGoodsMvtIncompletionStatus'
      @ObjectModel.text.element: ['HdrGoodsMvtIncompltnStatusDesc']
  key statu as HdrGoodsMvtIncompletionStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      bezei as HdrGoodsMvtIncompltnStatusDesc,

      //Associations
      _HdrGoodsMvtIncompletionStatus,
      _Language
}
where
      tvbst.tbnam = 'LIKP'
  and tvbst.fdnam = 'UVWAK'
```
