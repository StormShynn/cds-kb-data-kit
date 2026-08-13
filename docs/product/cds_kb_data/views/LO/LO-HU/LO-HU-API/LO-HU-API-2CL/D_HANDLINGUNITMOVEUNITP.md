---
name: D_HANDLINGUNITMOVEUNITP
description: "D Handlingunitmoveunitp"
semantic_vi: "View D_HANDLINGUNITMOVEUNITP CDS hiển thị dữ liệu di chuyển đơn vị xử lý, có liên quan đến hoạt động logistics, đặc biệt là trong việc nhận và lưu trữ hàng hóa."
keywords:
  - "handling unit"
  - "logistics"
  - "handling unit move"
  - "lo"
  - "lo-hu"
  - "lo-hu-api"
  - "transactional processing"
  - "receiving plant"
  - "receiving storage location"
  - "receiving storage bin"
  - "đơn vị xử lý"
  - "dữ liệu logistics"
semantic_en: "The D_HANDLINGUNITMOVEUNITP CDS view exposes handling unit move unit data, which is relevant for logistics operations, particularly in receiving and storing goods."
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
  - transactional-processing
  - component:LO-HU-API-2CL
  - lob:Logistics General
---
# D_HANDLINGUNITMOVEUNITP

**D Handlingunitmoveunitp**

| Property | Value |
|---|---|
| App Component | `LO-HU-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HandlingUnitExternalID` |  | |  | `exidv` |  |  |
| `HandlingUnitGoodsMovementEvent` |  | |  | `huwbevent` |  |  |
| `ReceivingPlant` |  | |  | `umwrk` |  |  |
| `ReceivingStorageLocation` |  | |  | `umlgo` |  |  |
| `ReceivingStorageBin` |  | |  | `/scwm/lgpla` |  |  |

## Source Code

```abap
@EndUserText.label: 'Move of Handling Units'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define root abstract entity D_HandlingUnitMoveUnitP
{
  HandlingUnitExternalID         : exidv;
  HandlingUnitGoodsMovementEvent      : huwbevent;
  ReceivingPlant            : umwrk;
  ReceivingStorageLocation  : umlgo; 
  ReceivingStorageBin       : /scwm/lgpla;
}
```
