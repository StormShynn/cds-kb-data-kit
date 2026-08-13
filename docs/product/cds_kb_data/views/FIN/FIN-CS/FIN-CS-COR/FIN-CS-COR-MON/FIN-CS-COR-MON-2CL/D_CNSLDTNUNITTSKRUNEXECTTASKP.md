---
name: D_CNSLDTNUNITTSKRUNEXECTTASKP
description: "D Cnsldtnunittskrunexecttaskp"
semantic_vi: "Chứa dữ liệu thực hiện đơn vị công tác hợp nhất cho một khoảng thời gian và nhiệm vụ nhất định, được sử dụng để phân tích và quản lý công tác hợp nhất."
keywords:
  - "consolidation"
  - "unit task execution"
  - "fiscal period"
  - "consolidation task"
  - "sap cds view"
  - "fin-cs-cor-mon-2cl"
  - "đơn vị công tác hợp nhất"
  - "thời kỳ kế toán"
  - "nhiệm vụ hợp nhất"
semantic_en: "Exposes consolidation unit task execution unit data for a specific fiscal period and task, used to analyze and manage consolidation tasks."
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# D_CNSLDTNUNITTSKRUNEXECTTASKP

**D Cnsldtnunittskrunexecttaskp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` |  | |  | `fincs_conschartofaccounts` |  |  |
| `ConsolidationVersion` |  | |  | `fincs_consolidationversion` |  |  |
| `FiscalYear` |  | |  | `fincs_fiscalyear` |  |  |
| `FiscalPeriod` |  | |  | `fincs_period` |  |  |
| `ConsolidationTask` |  | |  | `fincs_tsk` |  |  |
| `ConsolidationGroup` |  | |  | `fincs_congr` |  |  |
| `D_CnsldtnUntTskRunExectTskUntP` |  | |  | `_ConsolidationUnit : composition [0..*] of D_CnsldtnUntTskRunExectTskUntP` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@EndUserText.label: 'Cnsldtn Unit Task Run Execute Parameter'
define root abstract entity D_CnsldtnUnitTskRunExectTaskP
{ 
      ConsolidationChartOfAccounts          : fincs_conschartofaccounts;
      ConsolidationVersion                  : fincs_consolidationversion;
      FiscalYear                            : fincs_fiscalyear;
      FiscalPeriod                          : fincs_period;
      ConsolidationTask                     : fincs_tsk;
      ConsolidationGroup                    : fincs_congr;
      _ConsolidationUnit                    : composition [0..*] of D_CnsldtnUntTskRunExectTskUntP; 
}
```
