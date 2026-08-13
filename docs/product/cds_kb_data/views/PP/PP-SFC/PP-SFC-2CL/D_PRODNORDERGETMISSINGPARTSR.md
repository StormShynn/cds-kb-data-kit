---
name: D_PRODNORDERGETMISSINGPARTSR
description: "D Prodnordergetmissingpartsr"
semantic_vi: "View này hiển thị dữ liệu bộ phận thiếu trong đơn đặt hàng sản xuất, có thể được sử dụng để xác định và quản lý các bộ phận thiếu trong đơn đặt hàng sản xuất."
keywords:
  - "production order"
  - "đơn đặt hàng sản xuất"
  - "missing parts"
  - "bộ phận thiếu"
  - "sap pp"
  - "sap pp-sfc"
  - "sap cds view"
  - "view dữ liệu"
  - "data view"
semantic_en: "This view exposes production order missing parts data, which can be used to identify and manage missing components in production orders."
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - component:PP-SFC-2CL
  - lob:Manufacturing
---
# D_PRODNORDERGETMISSINGPARTSR

**D Prodnordergetmissingpartsr**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionOrder` |  | |  | `aufnr` |  |  |
| `BillOfMaterialItemNumber` |  | |  | `vdm_sposn` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `Plant` |  | |  | `werks_d` |  |  |
| `StorageLocation` |  | |  | `lgort_d` |  |  |
| `Batch` |  | |  | `charg_d` |  |  |
| `ProductionOrderOperation` |  | |  | `vdm_vornr` |  |  |
| `RequirementDate` |  | |  | `bdter` |  |  |
| `CommittedAvailabilityDate` |  | |  | `dat05` |  |  |
| `BaseUnit` |  | |  | `ausme` |  |  |
| `RequiredQuantity` |  | |  | `bdmng` |  |  |
| `ConfirmedAvailableQuantity` |  | |  | `co_vmeng` |  |  |
| `ActualAvailableQuantity` |  | |  | `pp_atpmg` |  |  |

## Source Code

```abap
@EndUserText.label: 'Get Production Order Missing Parts Result'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_ProdnOrderGetMissingPartsR
{
  ProductionOrder            : aufnr;
  BillOfMaterialItemNumber   : vdm_sposn;
  Material                   : matnr;
  Plant                      : werks_d;
  StorageLocation            : lgort_d;
  Batch                      : charg_d;
  ProductionOrderOperation   : vdm_vornr;
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
