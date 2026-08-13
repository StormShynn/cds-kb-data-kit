---
name: D_CUSTRETCRTEWTHREFDOCP
description: "D Custretcrtewthrefdocp"
semantic_vi: "Chỉ ra các loại tài liệu kinh doanh bán hàng và tài liệu tham chiếu tương ứng, có ích cho quá trình xử lý đơn đặt hàng bán hàng và quản lý tài liệu."
keywords:
  - "sales document"
  - "đơn đặt hàng bán hàng"
  - "sales document type"
  - "tài liệu kinh doanh bán hàng"
  - "reference sales document"
  - "tài liệu tham chiếu"
  - "sales order processing"
  - "quá trình xử lý đơn đặt hàng bán hàng"
  - "document management"
  - "quản lý tài liệu"
  - "sap sales"
  - "sales distribution"
semantic_en: "Exposes sales document types and their corresponding reference sales documents, useful for sales order processing and document management."
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
---
# D_CUSTRETCRTEWTHREFDOCP

**D Custretcrtewthrefdocp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
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
@EndUserText.label: 'Action Parameter: Create with Ref Header'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_CustRetCrteWthRefDocP
{

  SalesDocumentType        : auart;
  ReferenceSDDocument      : vgbel;

  _ReferenceSDDocumentItems : association [0..*] to D_CustRetItmCrteWthRefDocP on 1 = 0;
  
}
```
