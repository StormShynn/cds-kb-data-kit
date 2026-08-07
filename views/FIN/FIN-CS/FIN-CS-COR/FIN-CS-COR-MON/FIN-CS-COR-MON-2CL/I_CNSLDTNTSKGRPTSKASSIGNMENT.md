---
name: I_CNSLDTNTSKGRPTSKASSIGNMENT
description: Cnsldtntskgrptskassignment
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
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# I_CNSLDTNTSKGRPTSKASSIGNMENT

**Cnsldtntskgrptskassignment**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConsolidationTaskGroup` | ✓ | |  | `cast( acgr as fincs_taskgroup preserving type )` |
| `ConsolidationTask` | ✓ | |  | `cast( cacti as fincs_tsk preserving type )` |
| `CnsldtnTskIsBlkdAutomatically` |  | |  | `cast( lockind as fincs_task_blockauto preserving type )` |
| `ConsolidationTaskIsMilestone` |  | |  | `cast( mstoneind as fincs_task_milestone preserving type )` |
| `ConsolidationTaskSequenceValue` |  | |  | `cast( seqnr as fincs_task_sequence preserving type )` |
| `_CnsldtnTaskGroup` | | ✓ | | |
| `_CnsldtnTask` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnTaskGroup` | `I_CnsldtnTaskGroup` | [1..1] |
| `_CnsldtnTask` | `I_CnsldtnTask` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSTSKGRPTSK',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S},
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE 
                          ],
  sapObjectNodeType.name: 'CnsldtnTaskGroupTaskAssignment'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Task Group Task Assignment'
define view I_CnsldtnTskGrpTskAssignment as 
  select from tf532
  
    association [1..1] to I_CnsldtnTaskGroup  as _CnsldtnTaskGroup    on $projection.ConsolidationTaskGroup = _CnsldtnTaskGroup.ConsolidationTaskGroup
    association [1..1] to I_CnsldtnTask       as _CnsldtnTask         on $projection.ConsolidationTask = _CnsldtnTask.ConsolidationTask
{
      @ObjectModel.foreignKey.association: '_CnsldtnTaskGroup'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationTaskGroup'
  key cast( acgr as fincs_taskgroup preserving type )             as ConsolidationTaskGroup,
  
      @ObjectModel.foreignKey.association: '_CnsldtnTask'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationTask'
  key cast( cacti as fincs_tsk preserving type )                  as ConsolidationTask,
  
      cast( lockind as fincs_task_blockauto preserving type )     as CnsldtnTskIsBlkdAutomatically,
  
      cast( mstoneind as fincs_task_milestone preserving type )   as ConsolidationTaskIsMilestone,
  
      cast( seqnr as fincs_task_sequence preserving type )        as ConsolidationTaskSequenceValue,
  
      _CnsldtnTaskGroup,
      _CnsldtnTask
}
where dimen = 'Y1'
```
