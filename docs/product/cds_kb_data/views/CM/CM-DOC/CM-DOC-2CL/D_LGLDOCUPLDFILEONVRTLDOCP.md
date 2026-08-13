---
name: D_LGLDOCUPLDFILEONVRTLDOCP
description: "D Lgldocupldfileonvrtldocp"
semantic_vi: "View này hiển thị lịch sử chuyển đổi tài liệu cho một đối tượng liên kết trong hệ thống quản lý nội dung, cung cấp thông tin về tài liệu được chuyển đổi và tên tệp gốc của nó. Nó được sử dụng để theo dõi các cuộc chuyển đổi tài liệu trong thành phần CM-DOC-2CL."
keywords:
  - "document conversion"
  - "content management"
  - "linked object"
  - "file name"
  - "cm-doc-2cl"
  - "sap cds view"
  - "tài liệu chuyển đổi"
  - "hệ thống quản lý nội dung"
  - "đối tượng liên kết"
  - "tên tệp"
semantic_en: "This view exposes document conversion history for a linked object in a content management system, providing information about the converted document and its original file name. It is used to track document conversions in the CM-DOC-2CL component."
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - component:CM-DOC-2CL
  - lob:Other
---
# D_LGLDOCUPLDFILEONVRTLDOCP

**D Lgldocupldfileonvrtldocp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocumentLinkedObjKey` |  | |  | `lcm_uuid_c32` |  |  |
| `DocumentDescription` |  | |  | `lcm_description` |  |  |
| `FileName` |  | |  | `abap.char(200)` |  |  |
| `LglCntntMDocPaperType` |  | |  | `lcm_doc_paper_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Legal Doc Upload File On Virtual Doc'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglDocUpldFileOnVrtlDocP
{
  LglCntntMDocumentLinkedObjKey : lcm_uuid_c32;
  DocumentDescription           : lcm_description;
  FileName                      : abap.char(200);
  LglCntntMDocPaperType         : lcm_doc_paper_type;
}
```
