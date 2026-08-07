---
name: I_CNSLDTNUNITTASKRUNTP
description: Cnsldtnunittaskruntp
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
  - transactional-processing
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# I_CNSLDTNUNITTASKRUNTP

**Cnsldtnunittaskruntp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  |  |
| `ConsolidationVersion` | ✓ | |  |  |
| `FiscalYear` | ✓ | |  |  |
| `FiscalPeriod` | ✓ | |  |  |
| `ConsolidationTask` | ✓ | |  |  |
| `ConsolidationUnit` | ✓ | |  |  |
| `CnsldtnTskRunNmbrOfErrMessages` |  | |  |  |
| `CnsldtnTskRunNmbrOfWrngMsgs` |  | |  |  |
| `CnsldtnTaskRunChangedByUser` |  | |  |  |
| `CnsldtnTaskRunChangedDate` |  | |  |  |
| `CnsldtnTaskRunChangedTime` |  | |  |  |
| `ConsolidationTaskRunStatus` |  | |  |  |
| `_CnsldtnChartOfAccounts` | | ✓ | | |
| `_CnsldtnVersion` | | ✓ | | |
| `_CnsldtnTask` | | ✓ | | |
| `_CnsldtnUnit` | | ✓ | | |
| `_CnsldtnTaskRunStatus` | | ✓ | | |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED,
  personalData.blockingIndicator: ['CnsldtnTaskRunChangedByUser']
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  sapObjectNodeType:{
    name: 'ConsolidationUnitTaskRun'
  },
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Unit Task Run - TP'
define root view entity I_CnsldtnUnitTaskRunTP
  provider contract transactional_interface
  as projection on R_CnsldtnUnitTaskRunTP
{     
      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts'
  key ConsolidationChartOfAccounts,
      
      @ObjectModel.foreignKey.association: '_CnsldtnVersion'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationVersion'
  key ConsolidationVersion,
      
      @Semantics.fiscal.year: true
  key FiscalYear,
      
      @Semantics.fiscal.period: true
  key FiscalPeriod,
      
      @ObjectModel.foreignKey.association: '_CnsldtnTask'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationTask'
  key ConsolidationTask,
      
      @ObjectModel.foreignKey.association: '_CnsldtnUnit'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationUnit'
  key ConsolidationUnit,
      
      CnsldtnTskRunNmbrOfErrMessages,
      
      CnsldtnTskRunNmbrOfWrngMsgs,
      
      @Semantics.user.lastChangedBy: true
      CnsldtnTaskRunChangedByUser,
      
      CnsldtnTaskRunChangedDate,
      
      @Semantics.time: true
      CnsldtnTaskRunChangedTime,
      
      @ObjectModel.foreignKey.association: '_CnsldtnTaskRunStatus'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationTaskRunStatus'
      ConsolidationTaskRunStatus,
      
      _CnsldtnChartOfAccounts,
      _CnsldtnVersion,
      _CnsldtnTask,
      _CnsldtnUnit,
      _CnsldtnTaskRunStatus
}
```
