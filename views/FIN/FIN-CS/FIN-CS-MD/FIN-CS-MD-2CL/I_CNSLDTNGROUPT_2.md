---
name: I_CNSLDTNGROUPT_2
description: Cnsldtngroupt 2
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
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
