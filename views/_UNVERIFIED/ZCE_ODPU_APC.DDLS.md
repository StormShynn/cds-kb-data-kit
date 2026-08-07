---
name: ZCE_ODPU_APC.DDLS
description: ZCE_ODPU_APC.DDLS
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/mariokernich/odapu-abap/blob/d0034f1c930ecfaf8fa2e2195931abae6be28c93/src/zce_odpu_apc.ddls.asddls
semantic_en: ZCE_ODPU_APC.DDLS — CDS view.
semantic_vi: ZCE_ODPU_APC.DDLS — CDS view dựa trên ZCE_ODPU_APC.DDLS.
keywords:
  - zce
  - odpu
  - apc.ddls
  - application
  - version
  - apc_appl_path
  - seoclsname
  - apc_wsp_protocol_type_id
tags:
  - AP
  - component:AP
---
# ZCE_ODPU_APC.DDLS

**ZCE_ODPU_APC.DDLS**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/mariokernich/odapu-abap/blob/d0034f1c930ecfaf8fa2e2195931abae6be28c93/src/zce_odpu_apc.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `apc_application_id` |  | |  | `key ApplicationId : apc_application_id` |  |  |
| `r3state` |  | |  | `key Version : r3state` |  |  |
| `Path` |  | |  | `apc_appl_path` |  |  |
| `ClassName` |  | |  | `seoclsname` |  |  |
| `ProtocolTypeId` |  | |  | `apc_wsp_protocol_type_id` |  |  |
| `AmcMessageTypeId` |  | |  | `amc_message_type_id` |  |  |
| `Description` |  | |  | `ddtext` |  |  |

## Source Code

*Source: [https://github.com/mariokernich/odapu-abap/blob/d0034f1c930ecfaf8fa2e2195931abae6be28c93/src/zce_odpu_apc.ddls.asddls](https://github.com/mariokernich/odapu-abap/blob/d0034f1c930ecfaf8fa2e2195931abae6be28c93/src/zce_odpu_apc.ddls.asddls)*

```abap
@ObjectModel.query.implementedBy: 'ABAP:ZCL_ODPU_PROXY_APC'
define custom entity ZCE_ODPU_APC
{
  key ApplicationId    : apc_application_id;
  key Version          : r3state;
      Path             : apc_appl_path;
      ClassName        : seoclsname;
      ProtocolTypeId   : apc_wsp_protocol_type_id;
      AmcMessageTypeId : amc_message_type_id;
      Description      : ddtext;
}
```
