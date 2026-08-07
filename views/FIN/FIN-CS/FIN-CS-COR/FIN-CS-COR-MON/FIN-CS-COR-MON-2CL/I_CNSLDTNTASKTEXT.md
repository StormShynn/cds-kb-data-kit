---
name: I_CNSLDTNTASKTEXT
description: Cnsldtntasktext
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
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
# I_CNSLDTNTASKTEXT

**Cnsldtntasktext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConsolidationTask` | ✓ | |  | `cast( cacti as fincs_tsk preserving type )` |
| `Language` | ✓ | |  | `langu` |
| `ConsolidationTaskText` |  | |  | `cast(txt as fincs_task_txt preserving type )` |
| `_CnsldtnTask` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnTask` | `I_CnsldtnTask` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICNSLDTNTSKT',
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
  representativeKey: 'ConsolidationTask',
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
@EndUserText.label: 'Consolidation Task - Text'
define view I_CnsldtnTaskText as
  select from tf541 
  
    association [1..1] to I_CnsldtnTask         as _CnsldtnTask        on $projection.ConsolidationTask = _CnsldtnTask.ConsolidationTask
    association [1..1] to I_Language            as _Language           on $projection.Language = _Language.Language
{ 
      @ObjectModel.foreignKey.association: '_CnsldtnTask'
  key cast( cacti as fincs_tsk preserving type )            as ConsolidationTask,
  
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                 as Language,
  
      @Search:{
            defaultSearchElement: true,
            ranking: #LOW,
            fuzzinessThreshold: 0.8
            }
      @Semantics.text
      cast(txt as fincs_task_txt preserving type )          as ConsolidationTaskText,
      
      _Language,
      _CnsldtnTask
}
where dimen = 'Y1'
```
