---
name: D_CHGMSTRASSIGNALTVDATEIDP
description: "D Chgmstrassignaltvdateidp"
semantic_vi: "View D_CHGMSTRASSIGNALTVDATEIDP CDS hiển thị ID thay thế ngày thay đổi trong quản lý thay đổi của sản phẩm. Nó được sử dụng trong thành phần PLM-WUI-OBJ-ECN-2CL cho mục đích quản lý thay đổi."
keywords:
  - "change management"
  - "change master assignment"
  - "alternative date id"
  - "plm"
  - "plm-wui-obj-ecn-2cl"
  - "product lifecycle"
  - "thay đổi"
  - "quản lý thay đổi"
  - "sản phẩm"
  - "đổi ngày"
semantic_en: "The D_CHGMSTRASSIGNALTVDATEIDP CDS view exposes change master assignment alternative date IDs, which are used to manage changes in a product's lifecycle. It is used in the PLM-WUI-OBJ-ECN-2CL component for change management purposes."
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-WUI
  - PLM-WUI-OBJ
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# D_CHGMSTRASSIGNALTVDATEIDP

**D Chgmstrassignaltvdateidp**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChgNmbrAlternativeDateID` |  | |  | `cc_aedtn` |  |  |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Change Master Alternative Date ID'
define root abstract entity D_ChgMstrAssignAltvDateIDP
{
  ChgNmbrAlternativeDateID : cc_aedtn;
}
```
