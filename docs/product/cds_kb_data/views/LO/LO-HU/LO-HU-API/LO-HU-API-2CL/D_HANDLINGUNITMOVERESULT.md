---
name: D_HANDLINGUNITMOVERESULT
description: "D Handlingunitmoveresult"
semantic_vi: "View D_HANDLINGUNITMOVERESULT cung cấp thông tin về chuyển động đơn vị xử lý, bao gồm kho, đặc điểm đơn vị xử lý và chi tiết bao bì. Nó được sử dụng để theo dõi và quản lý chuyển động đơn vị xử lý trong hoạt động logistics."
keywords:
  - "handling unit move"
  - "chuyển động đơn vị xử lý"
  - "logistics"
  - "lo"
  - "lo-hu"
  - "lo-hu-api"
  - "warehouse"
  - "handling unit"
  - "packaging material"
  - "gross weight"
semantic_en: "The D_HANDLINGUNITMOVERESULT view provides information about handling unit moves, including the warehouse, handling unit characteristics, and packaging details. It is used to track and manage handling unit movements in logistics operations."
app_component: LO-HU-API-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-HU
  - LO-HU-API
  - component:LO-HU-API-2CL
  - lob:Logistics General
---
# D_HANDLINGUNITMOVERESULT

**D Handlingunitmoveresult**

| Property | Value |
|---|---|
| App Component | `LO-HU-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `exidv` |  | |  | `key HandlingUnitExternalID : exidv` |  |  |
| `Warehouse` |  | |  | `lgnum` |  |  |
| `HandlingUnitCharUUID` |  | |  | `lo_hu_uuid_char32` |  |  |
| `PackagingMaterial` |  | |  | `vhilm` |  |  |
| `PackagingMaterialType` |  | |  | `vhart` |  |  |
| `HandlingUnitReferenceDocument` |  | |  | `vpobjkey` |  |  |
| `ParentHandlingUnitNumber` |  | |  | `ewm_de_hu_no_conv` |  |  |
| `HandlingUnitInternalStatus` |  | |  | `hu_status` |  |  |
| `GrossWeight` |  | |  | `brgew_vekp` |  |  |
| `WeightUnit` |  | |  | `gewei` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDateTime` |  | |  | `vdm_creationdatetime` |  |  |
| `Plant` |  | |  | `hum_werks` |  |  |
| `ReceivingStorageLocation` |  | |  | `umlgo` |  |  |
| `ReceivingStorageBin` |  | |  | `/scwm/lgpla` |  |  |

## Source Code

```abap
@EndUserText.label: 'Move of Handling Units Result'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define abstract entity D_HandlingUnitMoveResult
{

  key HandlingUnitExternalID        : exidv;
      Warehouse                     : lgnum;
      HandlingUnitCharUUID          : lo_hu_uuid_char32;
      PackagingMaterial             : vhilm;
      PackagingMaterialType         : vhart;
      HandlingUnitReferenceDocument : vpobjkey;
      ParentHandlingUnitNumber      : ewm_de_hu_no_conv; // /scwm/de_huident has BADI in conversion exit that not allowed in RAP
      HandlingUnitInternalStatus    : hu_status;
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      GrossWeight                   : brgew_vekp;
      WeightUnit                    : gewei;
      CreatedByUser                 : ernam;
      CreationDateTime              : vdm_creationdatetime;
      Plant                         : hum_werks;
      ReceivingStorageLocation      : umlgo;
      ReceivingStorageBin           : /scwm/lgpla;

}
```
