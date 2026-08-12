---
name: D_PURSCHEDGAGRMTRELEASED
description: "D Purschedgagrmtreleased"
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - lease
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# D_PURSCHEDGAGRMTRELEASED

**D Purschedgagrmtreleased**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` |  | |  | `md_supplier` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `ManufacturerMaterial` |  | |  | `ematnr` |  |  |
| `SupplierMaterialNumber` |  | |  | `idnlf` |  |  |
| `MaterialGroup` |  | |  | `matkl` |  |  |
| `Plant` |  | |  | `ewerk` |  |  |
| `SchedulingAgreementReleaseType` |  | |  | `meabart` |  |  |
| `SchedulingAgreementRelease` |  | |  | `meabruf` |  |  |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'PurchaseSchedulingAgreementItm'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Event for Purchase Scheduling Agreement Release'
define abstract entity D_PurSchedgAgrmtReleased
{

  Supplier                       : md_supplier;
  Material                       : matnr;
  ManufacturerMaterial           : ematnr;
  SupplierMaterialNumber         : idnlf;
  MaterialGroup                  : matkl;
  Plant                          : ewerk;
  SchedulingAgreementReleaseType : meabart;
  SchedulingAgreementRelease     : meabruf;
}
```
