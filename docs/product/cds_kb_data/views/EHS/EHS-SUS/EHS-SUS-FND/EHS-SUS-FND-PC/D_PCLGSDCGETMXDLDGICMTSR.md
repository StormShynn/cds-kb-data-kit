---
name: D_PCLGSDCGETMXDLDGICMTSR
description: "D Pclgsdcgetmxdldgicmtsr"
semantic_vi: "Chỉ ra các thông báo không tương thích khi tải sản phẩm trong các kịch bản tải hỗn hợp, thường được sử dụng để khắc phục các vấn đề khi tải sản phẩm."
keywords:
  - "mixed loading"
  - "product loading"
  - "incompatibility message"
  - "tải hỗn hợp"
  - "sản phẩm tải"
  - "thông báo không tương thích"
  - "sap ehs"
  - "sap ehs sus"
  - "sap ehs sus fnd pc"
semantic_en: "Exposes product loading incompatibility messages for mixed loading scenarios, typically used to troubleshoot issues with product loading."
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETMXDLDGICMTSR

**D Pclgsdcgetmxdldgicmtsr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` |  | |  | `matnr` |  |  |
| `MxdLoadingIncompatibleProduct` |  | |  | `mxdloadingincompatibleproduct` |  |  |
| `PackingInstructionNumber` |  | |  | `ehfnd_pi_id` |  |  |
| `MxdLoadgIncompatiblePaInsnNmbr` |  | |  | `mxdloadingincompatibleppainstr` |  |  |
| `SystemMessageType` |  | |  | `msgty` |  |  |
| `SystemMessageNumber` |  | |  | `msgnr` |  |  |
| `SystemMessageIdentification` |  | |  | `msgid` |  |  |
| `MixedLoadingMessageSeverity` |  | |  | `mixedloadingmessageseverity` |  |  |
| `SystemMessageVariable1` |  | |  | `ehfnd_vdm_msgv1` |  |  |
| `SystemMessageVariable2` |  | |  | `ehfnd_vdm_msgv2` |  |  |
| `SystemMessageVariable3` |  | |  | `ehfnd_vdm_msgv3` |  |  |
| `SystemMessageVariable4` |  | |  | `ehfnd_vdm_msgv4` |  |  |
| `Language` |  | |  | `langu` |  |  |

## Source Code

```abap
@EndUserText.label: 'Get Mixed Loading Incompatibilities R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define root abstract entity D_PCLgsDcGetMxdLdgIcmtsR
{
  Product                             : matnr; //  Material Number
  MxdLoadingIncompatibleProduct       : mxdloadingincompatibleproduct; // Incompatible Product
  PackingInstructionNumber            : ehfnd_pi_id; // Packing Instruction Number 
  MxdLoadgIncompatiblePaInsnNmbr      : mxdloadingincompatibleppainstr; // Incompatible Packing Instruction Number
  SystemMessageType                   : msgty; // char(1)  ABAP System Field: Message Type
  SystemMessageNumber                 : msgnr; // numc(3)  ABAP System Field: Message Number
  SystemMessageIdentification         : msgid; //char(20)  ABAP System Field: Message ID
  MixedLoadingMessageSeverity         : mixedloadingmessageseverity; //int1(3)  Severity of a Mixed Loading Message
  SystemMessageVariable1              : ehfnd_vdm_msgv1; // char(50)  ABAP System Field: Message Variable
  SystemMessageVariable2              : ehfnd_vdm_msgv2; // char(50)  ABAP System Field: Message Variable
  SystemMessageVariable3              : ehfnd_vdm_msgv3; // char(50)  ABAP System Field: Message Variable
  SystemMessageVariable4              : ehfnd_vdm_msgv4; //char(50)  ABAP System Field: Message Variable
  Language                            : langu; //  lang(1)  Language Key

}
```
