---
name: D_PRODNVERSSETLOCKP
description: "D Prodnverssetlockp"
semantic_vi: "View D_PRODNVERSSETLOCKP cung cấp thông tin khóa phiên bản sản xuất, được sử dụng để quản lý khóa phiên bản sản xuất trong quá trình sản xuất."
keywords:
  - "production version"
  - "lock"
  - "manufacturing"
  - "sản xuất"
  - "phiên bản"
  - "khóa"
  - "pp-vdm"
  - "pp-vdm-md-2cl"
semantic_en: "The D_PRODNVERSSETLOCKP view provides production version lock information, which is used to manage production version locking in manufacturing processes."
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# D_PRODNVERSSETLOCKP

**D Prodnverssetlockp**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionVersionLock` |  | |  | `mksp` |  |  |

## Source Code

```abap
@EndUserText.label: 'Set Lock Status in Prodn Vers BO'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[ #TRANSACTIONAL_PROVIDER ]
define abstract entity D_ProdnVersSetLockP
{
  //  @ObjectModel.mandatory: true
  ProductionVersionLock : mksp;
}
```
