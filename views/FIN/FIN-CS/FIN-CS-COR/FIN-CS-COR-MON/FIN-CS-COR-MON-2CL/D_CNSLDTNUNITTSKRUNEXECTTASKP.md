---
name: D_CNSLDTNUNITTSKRUNEXECTTASKP
description: D Cnsldtnunittskrunexecttaskp
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

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ConsolidationChartOfAccounts` |  | |  | `fincs_conschartofaccounts` |
| `ConsolidationVersion` |  | |  | `fincs_consolidationversion` |
| `FiscalYear` |  | |  | `fincs_fiscalyear` |
| `FiscalPeriod` |  | |  | `fincs_period` |
| `ConsolidationTask` |  | |  | `fincs_tsk` |
| `ConsolidationGroup` |  | |  | `fincs_congr` |
| `D_CnsldtnUntTskRunExectTskUntP` |  | |  | `_ConsolidationUnit : composition [0..*] of D_CnsldtnUntTskRunExectTskUntP` |

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
