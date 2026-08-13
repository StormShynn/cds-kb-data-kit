---
name: D_SALESDOCCREATEWITHREFDOCP
description: "D Salesdoccreatewithrefdocp"
semantic_vi: "Chứa dữ liệu tạo tài liệu bán hàng dựa trên tài liệu tham chiếu, được sử dụng khi tạo tài liệu bán hàng dựa trên tài liệu đã tồn tại."
keywords:
  - "sales document"
  - "tài liệu bán hàng"
  - "document creation"
  - "tạo tài liệu"
  - "reference document"
  - "tài liệu tham chiếu"
  - "sap sales"
  - "bán hàng sap"
  - "sd sales"
  - "sd bán hàng"
semantic_en: "Exposes sales document creation data with reference to a document, used when creating a sales document based on an existing document."
app_component: SD-SLS-SO-RAP-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
---
# D_SALESDOCCREATEWITHREFDOCP

**D Salesdoccreatewithrefdocp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocumentType` |  | |  | `auart` |  |  |
| `ReferenceSDDocument` |  | |  | `vgbel` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sls Doc Create with Ref action param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_SalesDocCreateWithRefDocP
{

  SalesDocumentType        : auart;
  ReferenceSDDocument      : vgbel;

  _ReferenceSDDocumentItems : association [0..*] to D_SalesDocCreateWithRefItemP on 1 = 0; //reuse
  
}
```
