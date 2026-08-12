---
name: I_CNSLDTNTASKGROUPTEXT
description: "Cnsldtntaskgrouptext"
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - text-view
  - text
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# I_CNSLDTNTASKGROUPTEXT

**Cnsldtntaskgrouptext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationTaskGroup` | ✓ | |  | `cast( acgr as fincs_taskgroup preserving type )` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `ConsolidationTaskGroupText` |  | |  | `cast(txt as fincs_taskgroup_txt preserving type )` |  |  |
| `_CnsldtnTaskGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnTaskGroup` | `I_CnsldtnTaskGroup` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSTSKGRPT',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S},
  representativeKey: 'ConsolidationTaskGroup',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Task Group - Text'
define view I_CnsldtnTaskGroupText as
  select from tf531 
  
    association [1..1] to I_CnsldtnTaskGroup    as _CnsldtnTaskGroup        on $projection.ConsolidationTaskGroup = _CnsldtnTaskGroup.ConsolidationTaskGroup
    association [1..1] to I_Language            as _Language                on $projection.Language = _Language.Language
{ 
      @ObjectModel.foreignKey.association: '_CnsldtnTaskGroup'
  key cast( acgr as fincs_taskgroup preserving type )           as ConsolidationTaskGroup,
  
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                     as Language,
  
      @Search:{
            defaultSearchElement: true,
            ranking: #LOW,
            fuzzinessThreshold: 0.8
            }
      @Semantics.text
      cast(txt as fincs_taskgroup_txt preserving type )         as ConsolidationTaskGroupText,
      
      _Language,
      _CnsldtnTaskGroup
}
where dimen = 'Y1'
```
