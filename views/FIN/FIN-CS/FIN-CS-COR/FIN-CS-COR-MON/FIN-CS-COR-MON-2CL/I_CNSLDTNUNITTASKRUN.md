---
name: I_CNSLDTNUNITTASKRUN
description: Cnsldtnunittaskrun
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
# I_CNSLDTNUNITTASKRUN

**Cnsldtnunittaskrun**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationChartOfAccounts` | `cast( tf261.itclg as fincs_conschartofaccounts preserving type )` |
| key `ConsolidationVersion` | `cast( tf261.rvers as fincs_consolidationversion preserving type )` |
| key `FiscalYear` | `cast( tf261.ryear as fincs_fiscalyear preserving type )` |
| key `FiscalPeriod` | `cast( tf261.perid as fincs_period preserving type )` |
| key `ConsolidationTask` | `cast( tf261.cacti as fincs_tsk preserving type )` |
| key `ConsolidationUnit` | `cast( tf261.bunit as fincs_consolidationunit preserving type )` |
| `CnsldtnTskRunNmbrOfErrMessages` | `cast( tf261.error as fincs_taskrun_err_no preserving type )` |
| `CnsldtnTskRunNmbrOfWrngMsgs` | `cast( tf261.warng as fincs_taskrun_warn_no preserving type )` |
| `CnsldtnTaskRunChangedByUser` | `cast( tf261.usr as fincs_taskrun_changeby preserving type )` |
| `CnsldtnTaskRunChangedDate` | `cast( tf261.datum as fincs_taskrun_changedat preserving type )` |
| `CnsldtnTaskRunChangedTime` | `cast( tf261.time as fincs_taskrun_changetime preserving type )` |
| `ConsolidationTaskRunStatus` | `cast( tf261.status as fincs_taskrun_status preserving type )` |
| `_CnsldtnChartOfAccounts` | *Association* |
| `_CnsldtnVersion` | *Association* |
| `_CnsldtnTask` | *Association* |
| `_CnsldtnUnit` | *Association* |
| `_CnsldtnTaskRunStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_CnsldtnVersion` | `I_CnsldtnVersion` | [1..1] |
| `_CnsldtnTask` | `I_CnsldtnTask` | [1..1] |
| `_CnsldtnUnit` | `I_CnsldtnUnit_4` | [1..1] |
| `_CnsldtnTaskRunStatus` | `I_CnsldtnTaskRunStatus` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSUNITTSKRUN',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED,
  personalData.blockingIndicator: ['CnsldtnTaskRunChangedByUser']
}
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  },
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE 
                          ],
  sapObjectNodeType.name: 'ConsolidationUnitTaskRun'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Unit Task Run'
define view I_CnsldtnUnitTaskRun as 
  select from tf261 as tf261
    
    join I_CnsldtnUnit_4 as CnsldtnUnit on tf261.bunit = CnsldtnUnit.ConsolidationUnit
  
    association [1..1] to I_CnsldtnChartOfAccounts  as _CnsldtnChartOfAccounts   on $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts
    association [1..1] to I_CnsldtnVersion          as _CnsldtnVersion           on $projection.ConsolidationVersion = _CnsldtnVersion.ConsolidationVersion
    association [1..1] to I_CnsldtnTask             as _CnsldtnTask              on $projection.ConsolidationTask = _CnsldtnTask.ConsolidationTask
    association [1..1] to I_CnsldtnUnit_4           as _CnsldtnUnit              on $projection.ConsolidationUnit = _CnsldtnUnit.ConsolidationUnit
    association [1..1] to I_CnsldtnTaskRunStatus    as _CnsldtnTaskRunStatus     on $projection.ConsolidationTaskRunStatus = _CnsldtnTaskRunStatus.ConsolidationTaskRunStatus
{ 
      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts'
  key cast( tf261.itclg as fincs_conschartofaccounts preserving type )           as ConsolidationChartOfAccounts, 
  
      @ObjectModel.foreignKey.association: '_CnsldtnVersion'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationVersion'
  key cast( tf261.rvers as fincs_consolidationversion preserving type )          as ConsolidationVersion,
      
      @Semantics.fiscal.year: true
  key cast( tf261.ryear as fincs_fiscalyear preserving type )                    as FiscalYear,
  
      @Semantics.fiscal.period: true
  key cast( tf261.perid as fincs_period preserving type )                        as FiscalPeriod,
  
      @ObjectModel.foreignKey.association: '_CnsldtnTask'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationTask'
  key cast( tf261.cacti as fincs_tsk preserving type )                           as ConsolidationTask,
      
      @ObjectModel.foreignKey.association: '_CnsldtnUnit'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationUnit'
  key cast( tf261.bunit as fincs_consolidationunit preserving type )             as ConsolidationUnit,
      
      cast( tf261.error as fincs_taskrun_err_no preserving type )                as CnsldtnTskRunNmbrOfErrMessages,
      
      cast( tf261.warng as fincs_taskrun_warn_no preserving type )               as CnsldtnTskRunNmbrOfWrngMsgs,
      
      @Semantics.user.lastChangedBy: true
      cast( tf261.usr as fincs_taskrun_changeby preserving type )                as CnsldtnTaskRunChangedByUser,

      cast( tf261.datum as fincs_taskrun_changedat preserving type )             as CnsldtnTaskRunChangedDate,
      
      @Semantics.time: true
      cast( tf261.time as fincs_taskrun_changetime preserving type )             as CnsldtnTaskRunChangedTime,
      
      @ObjectModel.foreignKey.association: '_CnsldtnTaskRunStatus'
      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationTaskRunStatus'
      cast( tf261.status as fincs_taskrun_status preserving type )               as ConsolidationTaskRunStatus,
      
      _CnsldtnChartOfAccounts,
      _CnsldtnVersion,
      _CnsldtnTask,
      _CnsldtnUnit,
      _CnsldtnTaskRunStatus
} 
  where tf261.dimen = 'Y1'
```
