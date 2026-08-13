---
name: D_PINVRECOUNTPHYSINVTRYDOCITMP
description: "D Pinvrecountphysinvtrydocitmp"
semantic_vi: "View D_PINVRECOUNTPHYSINVTRYDOCITMP hiển thị dữ liệu hồ sơ kiểm kê vật chất, bao gồm ngày dự kiến kiểm kê và số hồ sơ kiểm kê vật chất, có thể được sử dụng để theo dõi và quản lý số liệu kiểm kê vật chất."
keywords:
  - "physical inventory"
  - "hồ sơ kiểm kê vật chất"
  - "sap mm"
  - "mm-im"
  - "mm-im-pi"
  - "sourcing and procurement"
  - "đơn mua hàng"
  - "ekko"
  - "physical inventory count"
  - "kiểm kê vật chất"
semantic_en: "The D_PINVRECOUNTPHYSINVTRYDOCITMP view exposes physical inventory document data, including planned count dates and physical inventory numbers, which can be used to track and manage physical inventory counts."
app_component: MM-IM-PI-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-PI
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# D_PINVRECOUNTPHYSINVTRYDOCITMP

**D Pinvrecountphysinvtrydocitmp**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PhysInventoryPlannedCountDate` |  | |  | `gidat` |  |  |
| `DocumentDate` |  | |  | `bldat` |  |  |
| `PostingIsBlockedForPhysInvtry` |  | |  | `isper` |  |  |
| `PhysInvtryDocHasQtySnapshot` |  | |  | `pi_book_inventory_freeze` |  |  |
| `PhysicalInventoryNumber` |  | |  | `pi_number` |  |  |
| `PhysInventoryReferenceNumber` |  | |  | `pi_reference` |  |  |
| `PhysicalInventoryDocumentDesc` |  | |  | `im_pi_doc_description` |  |  |
| `D_PInvDocRecountItemKeysP` |  | |  | `_Items : composition [0..*] of D_PInvDocRecountItemKeysP` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Parameters for recount action of item'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_PInvRecountPhysInvtryDocItmP
{
  PhysInventoryPlannedCountDate : gidat;
  DocumentDate                  : bldat;
  PostingIsBlockedForPhysInvtry : isper;
  PhysInvtryDocHasQtySnapshot   : pi_book_inventory_freeze;
  PhysicalInventoryNumber       : pi_number;
  PhysInventoryReferenceNumber  : pi_reference;
  PhysicalInventoryDocumentDesc : im_pi_doc_description;

  _Items       : composition [0..*] of D_PInvDocRecountItemKeysP;
}
```
