---
name: D_PURSCHEDGAGRMTRELEASED
description: "D Purschedgagrmtreleased"
semantic_vi: "View D_PURSCHEDGAGRMTRELEASED hiển thị các bản phát hành thỏa thuận đặt hàng theo lịch đã được phát hành cho vật liệu và nhà cung cấp, được sử dụng để quản lý quy trình mua hàng."
keywords:
  - "scheduling agreement"
  - "thỏa thuận đặt hàng theo lịch"
  - "released"
  - "procurement"
  - "quy trình mua hàng"
  - "material"
  - "vật liệu"
  - "supplier"
  - "nhà cung cấp"
  - "sap mm"
  - "mm pur oa"
  - "lease"
semantic_en: "The D_PURSCHEDGAGRMTRELEASED view exposes released scheduling agreement releases for materials and suppliers, used to manage procurement processes."
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
