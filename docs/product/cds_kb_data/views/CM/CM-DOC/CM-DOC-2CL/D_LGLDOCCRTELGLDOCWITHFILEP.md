---
name: D_LGLDOCCRTELGLDOCWITHFILEP
description: "D Lgldoccrtelgldocwithfilep"
semantic_vi: "View này hiển thị các đối tượng liên kết nội dung tài liệu với thông tin tệp, thường được sử dụng khi quản lý và truy cập nội dung tài liệu trong thành phần CM-DOC-2CL."
keywords:
  - "document content"
  - "file information"
  - "cm-doc-2cl"
  - "lob other"
  - "sap cm"
  - "document linked object"
  - "tài liệu liên kết"
  - "thông tin tệp"
  - "nội dung tài liệu"
semantic_en: "This view exposes document content linked objects with file information, typically used when managing and accessing document content in the CM-DOC-2CL component."
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
# D_LGLDOCCRTELGLDOCWITHFILEP

**D Lgldoccrtelgldocwithfilep**

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
| `FileName` |  | |  | `abap.char(255)` |  |  |
| `LglCntntMLanguage` |  | |  | `lcm_language` |  |  |
| `LglCntntMDocAccessLvl` |  | |  | `lcm_access_lvl` |  |  |
| `LglCntntMDocPaperType` |  | |  | `lcm_doc_paper_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Create Legal Doc With File Action Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_LglDocCrteLglDocWithFileP
{
  LglCntntMDocumentLinkedObjKey : lcm_uuid_c32;
  DocumentDescription           : lcm_description;
  FileName                      : abap.char(255);
  LglCntntMLanguage             : lcm_language;
  LglCntntMDocAccessLvl         : lcm_access_lvl;
  LglCntntMDocPaperType         : lcm_doc_paper_type;
}
```
