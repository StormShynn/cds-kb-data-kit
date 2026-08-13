---
name: D_PROCESSORDERGETMISSINGPARTSR
description: "D Processordergetmissingpartsr"
semantic_vi: "View D_ProcessOrderGetMissingPartsR hiển thị dữ liệu liên quan đến đơn đặt hàng sản xuất thiếu bộ phận, có thể được sử dụng để xác định và quản lý các bộ phận thiếu trong quá trình sản xuất."
keywords:
  - "process order"
  - "đơn đặt hàng sản xuất"
  - "missing parts"
  - "bộ phận thiếu"
  - "production process"
  - "quá trình sản xuất"
  - "sap pp"
  - "pp-pi"
  - "pp-pi-por"
  - "component:pp-pi-por-2cl"
  - "lob:manufacturing"
semantic_en: "The D_ProcessOrderGetMissingPartsR view exposes process order data related to missing parts, which can be used to identify and manage missing components in production processes."
app_component: PP-PI-POR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PI
  - PP-PI-POR
  - component:PP-PI-POR-2CL
  - lob:Manufacturing
---
# D_PROCESSORDERGETMISSINGPARTSR

**D Processordergetmissingpartsr**

| Property | Value |
|---|---|
| App Component | `PP-PI-POR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessOrder` |  | |  | `aufnr` |  |  |
| `BillOfMaterialItemNumber` |  | |  | `vdm_sposn` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `Plant` |  | |  | `werks_d` |  |  |
| `StorageLocation` |  | |  | `lgort_d` |  |  |
| `Batch` |  | |  | `charg_d` |  |  |
| `ProcessOrderPhase` |  | |  | `vdm_vornr` |  |  |
| `RequirementDate` |  | |  | `bdter` |  |  |
| `CommittedAvailabilityDate` |  | |  | `dat05` |  |  |
| `BaseUnit` |  | |  | `ausme` |  |  |
| `RequiredQuantity` |  | |  | `bdmng` |  |  |
| `ConfirmedAvailableQuantity` |  | |  | `co_vmeng` |  |  |
| `ActualAvailableQuantity` |  | |  | `pp_atpmg` |  |  |

## Source Code

```abap
@EndUserText.label: 'Get Process Order Missing Parts Result'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_ProcessOrderGetMissingPartsR
{
  ProcessOrder               : aufnr;
  BillOfMaterialItemNumber   : vdm_sposn;
  Material                   : matnr;
  Plant                      : werks_d;
  StorageLocation            : lgort_d;
  Batch                      : charg_d;
  ProcessOrderPhase          : vdm_vornr;
  RequirementDate            : bdter;
  CommittedAvailabilityDate  : dat05;
  BaseUnit                   : ausme;
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  RequiredQuantity           : bdmng;
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  ConfirmedAvailableQuantity : co_vmeng;
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  ActualAvailableQuantity    : pp_atpmg;
}
```
