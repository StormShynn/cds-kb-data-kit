---
name: D_CNSLDTNUNTTSKRUNEXECTTSKUNTP
description: "D Cnsldtnunttskrunexecttskuntp"
semantic_vi: "Chứa dữ liệu thực thi cho các nhiệm vụ đơn vị tổng hợp trong ngữ cảnh tài chính, hữu ích cho việc theo dõi và phân tích việc thực thi nhiệm vụ."
keywords:
  - "consolidation unit"
  - "financial context"
  - "task execution"
  - "đơn vị tổng hợp"
  - "ngữ cảnh tài chính"
  - "nhiệm vụ thực thi"
  - "sap financials"
  - "fin-cs-cor-mon-2cl"
semantic_en: "Exposes execution data for consolidation unit tasks in a financial context, useful for monitoring and analyzing task execution."
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
  - transactional-processing
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# D_CNSLDTNUNTTSKRUNEXECTTSKUNTP

**D Cnsldtnunttskrunexecttskuntp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationUnit` |  | |  | `fincs_consolidationunit` |  |  |
| `_ExecuteTask` | | ✓ | | | | |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@EndUserText.label: 'Cnsldtn Unit Task Run Exec Unit Param'
define abstract entity D_CnsldtnUntTskRunExectTskUntP
{
  ConsolidationUnit                     : fincs_consolidationunit;
  _ExecuteTask                          : association to parent D_CnsldtnUnitTskRunExectTaskP;
}
```
