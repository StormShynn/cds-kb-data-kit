---
name: D_LGLCNTNTMDOCLINKOBJKEYCRTER
description: "D Lglcntntmdoclinkobjkeycrter"
semantic_vi: "View D_LGLCNTNTMDOCLINKOBJKEYCRTER hiển thị các khóa liên kết đối tượng cho tài liệu quản lý nội dung, có thể được sử dụng để lấy thông tin tài liệu liên quan."
keywords:
  - "sap cds view"
  - "content management"
  - "document link"
  - "object key"
  - "cm-int-2cl"
  - "lob other"
  - "cm"
  - "cm-int"
  - "document management"
  - "tài liệu quản lý nội dung"
  - "đối tượng liên kết"
  - "khóa đối tượng"
semantic_en: "The D_LGLCNTNTMDOCLINKOBJKEYCRTER view exposes linked object keys for content management documents, which can be used to retrieve related document information."
app_component: CM-INT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-INT
  - component:CM-INT-2CL
  - lob:Other
---
# D_LGLCNTNTMDOCLINKOBJKEYCRTER

**D Lglcntntmdoclinkobjkeycrter**

| Property | Value |
|---|---|
| App Component | `CM-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocumentLinkedObjKey` |  | |  | `lcm_uuid_c32` |  |  |

## Source Code

```abap
@EndUserText.label: 'Generate linked object key result'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglCntntMDocLinkObjKeyCrteR
{
    LglCntntMDocumentLinkedObjKey : lcm_uuid_c32;
    
}
```
