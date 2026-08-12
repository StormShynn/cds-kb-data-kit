---
name: I_CNSLDTNGROUPT_2
description: "Cnsldtngroupt 2"
app_component: FIN-CS-MD-2CL
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
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGROUPT_2

**Cnsldtngroupt 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
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
| `Language` | ✓ | | `_tf181` | `langu` |  |  |
| `ConsolidationGroup` | ✓ | |  | `cast( _tf181.congr as fincs_md_congr preserving type )` |  |  |
| `ConsolidationGroupText` |  | |  | `cast ( _tf181.txtsh as fincs_congr_short_text preserving type )` |  |  |
| `ConsolidationGroupMediumText` |  | |  | `cast ( _tf181.txtmi as fincs_congr_medium_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ICCGROUPT2',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S },
  representativeKey: 'ConsolidationGroup',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'ConsolidationGroupText'                        
  }
@Search.searchable: true
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Group - Text'

define view I_CnsldtnGroupT_2
  as select from tf181            as _tf181
    inner join   I_CnsldtnGroup_3 as _CnsldtnGroup_3 on _tf181.congr = _CnsldtnGroup_3.ConsolidationGroup

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _tf181.langu                                                     as Language,

  key cast( _tf181.congr as fincs_md_congr preserving type )           as ConsolidationGroup,

      @Semantics.text
      @Search:{ defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      cast ( _tf181.txtsh as fincs_congr_short_text preserving type )  as ConsolidationGroupText,

      @Semantics.text
      cast ( _tf181.txtmi as fincs_congr_medium_text preserving type ) as ConsolidationGroupMediumText,


      _Language
}
where
  _tf181.dimen = 'Y1';
```
