---
name: D_PROCESSORDERGETMISSINGPARTSR
description: "D Processordergetmissingpartsr"
app_component: PP-PI-POR-2CL
software_component: SAPSCORE
release_state: released
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
