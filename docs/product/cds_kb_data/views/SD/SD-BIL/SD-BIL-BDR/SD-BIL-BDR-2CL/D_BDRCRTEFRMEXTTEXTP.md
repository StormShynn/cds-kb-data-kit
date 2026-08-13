---
name: D_BDRCRTEFRMEXTTEXTP
description: "D Bdrcrtefrmexttextp"
semantic_vi: "View D_BDRCRTEFRMEXTTEXTP CDS exposing dữ liệu kinh doanh liên quan đến các bản ghi văn bản bên ngoài trong thành phần Sales và Distribution. Nó được sử dụng để lấy và quản lý các bản ghi văn bản bên ngoài liên quan đến các tài liệu kinh doanh."
keywords:
  - "sales and distribution"
  - "external text records"
  - "dữ liệu kinh doanh"
  - "bản ghi văn bản bên ngoài"
  - "cds view"
  - "sap"
  - "sd-bil-bdr-2cl"
semantic_en: "The D_BDRCRTEFRMEXTTEXTP CDS view exposes business data related to external text records in the Sales and Distribution component. It is used to retrieve and manage external text records associated with business documents."
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - transactional-processing
  - text
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# D_BDRCRTEFRMEXTTEXTP

**D Bdrcrtefrmexttextp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LongTextID` |  | |  | `tdid` |  |  |
| `Language` |  | |  | `spras` |  |  |
| `LongText` |  | |  | `systring` |  |  |

## Source Code

```abap
@EndUserText.label: 'Create BDR from Ext Data - Text Param'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BDRCrteFrmExtTextP { 

  LongTextID  : tdid;
  Language    : spras;
  LongText    : systring;

}
```
