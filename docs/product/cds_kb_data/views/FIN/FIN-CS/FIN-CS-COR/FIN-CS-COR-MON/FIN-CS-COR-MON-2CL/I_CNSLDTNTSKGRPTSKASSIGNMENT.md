---
name: I_CNSLDTNTSKGRPTSKASSIGNMENT
description: "Cnsldtntskgrptskassignment"
app_component: FIN-CS-COR-MON-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationTaskGroup` | ✓ | |  | `cast( acgr as fincs_taskgroup preserving type )` |  |  |
| `ConsolidationTask` | ✓ | |  | `cast( cacti as fincs_tsk preserving type )` |  |  |
| `CnsldtnTskIsBlkdAutomatically` |  | |  | `cast( lockind as fincs_task_blockauto preserving type )` |  |  |
| `ConsolidationTaskIsMilestone` |  | |  | `cast( mstoneind as fincs_task_milestone preserving type )` |  |  |
| `ConsolidationTaskSequenceValue` |  | |  | `cast( seqnr as fincs_task_sequence preserving type )` |  |  |
| `_CnsldtnTaskGroup` | | ✓ | | | | |
| `_CnsldtnTask` | | ✓ | | | | |

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
