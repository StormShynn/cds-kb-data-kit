---
name: D_LGLDOCCREATEFILEFROMVRTLDOCP
description: "D Lgldoccreatefilefromvrtldocp"
semantic_vi: "View này hiển thị dữ liệu tạo tài liệu từ xử lý tài liệu ảo, cho phép các nhà phát triển truy cập và thao tác thông tin tạo tài liệu."
keywords:
  - "document creation"
  - "virtual document processing"
  - "cm-doc-2cl"
  - "lob other"
  - "sap cds view"
  - "tạo tài liệu"
  - "xử lý tài liệu ảo"
  - "cm-doc"
  - "component cm-doc-2cl"
semantic_en: "This view exposes document creation data from virtual document processing, allowing developers to access and manipulate document creation information."
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
# D_LGLDOCCREATEFILEFROMVRTLDOCP

**D Lgldoccreatefilefromvrtldocp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMDocFileFrmt` |  | |  | `lcm_doc_dms_file_format` |  |  |

## Source Code

```abap
@EndUserText.label: 'Legal Doc Create File From Virtual Doc'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglDocCreateFileFromVrtlDocP
{
  LglCntntMDocFileFrmt : lcm_doc_dms_file_format;
}
```
