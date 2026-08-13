---
name: D_SRLNMBRCHANGESERIALNUMBERP
description: "D SRLNMBRCHANGESerial NumberP"
semantic_vi: "View này hiển thị các thay đổi số hiệu của một đơn đặt hàng vật tư, cho phép bạn theo dõi các bản cập nhật số hiệu của một vật tư trong đơn đặt hàng. Nó được sử dụng khi bạn cần quản lý số hiệu của vật tư trong đơn đặt hàng."
keywords:
  - "purchase order item"
  - "đơn đặt hàng vật tư"
  - "serial number change"
  - "số hiệu thay đổi"
  - "purchase order"
  - "đơn đặt hàng"
  - "item"
  - "vật tư"
  - "sap mm"
  - "mm-im-ekko"
semantic_en: "This view exposes serial number changes for a purchase order item, allowing you to track updates to the serial number of an item in a purchase order. It is used when you need to manage serial numbers for items in a purchase order."
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
  - serial-number
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# D_SRLNMBRCHANGESERIALNUMBERP

**D SRLNMBRCHANGESerial NumberP**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NewSerialNumber` |  | |  | `gernr` |  |  |

## Source Code

```abap
@EndUserText.label: 'New SerialNumber value for change action'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_SrlNmbrChangeSerialNumberP
{
  NewSerialNumber : gernr;
}
```
