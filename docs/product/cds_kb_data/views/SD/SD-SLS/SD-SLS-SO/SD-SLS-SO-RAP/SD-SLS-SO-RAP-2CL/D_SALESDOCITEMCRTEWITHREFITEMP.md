---
name: D_SALESDOCITEMCRTEWITHREFITEMP
description: "D Salesdocitemcrtewithrefitemp"
semantic_vi: "View D_SALESDOCITEMCRTEWITHREFITEMP CDS hiển thị dữ liệu tạo đơn hàng bán hàng với các mục tham khảo, có ích cho việc tạo mới đơn hàng bán hàng hoặc cập nhật các đơn hàng hiện có với chi tiết mục hàng."
keywords:
  - "sales document"
  - "đơn hàng bán hàng"
  - "item creation"
  - "tạo mục"
  - "reference item"
  - "mục tham khảo"
  - "sap sales"
  - "sales order"
  - "đơn đặt hàng bán hàng"
  - "sd-sls-so-rap-2cl"
semantic_en: "The D_SALESDOCITEMCRTEWITHREFITEMP CDS view exposes sales document item creation data with reference items, useful for creating new sales documents or updating existing ones with item-level details."
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
  - item-level
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
---
# D_SALESDOCITEMCRTEWITHREFITEMP

**D Salesdocitemcrtewithrefitemp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceSDDocument` |  | |  | `vgbel` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sls Doc Item Create with Ref actn param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_SalesDocItemCrteWithRefItemP
{

  ReferenceSDDocument      : vgbel;

  _ReferenceSDDocumentItems : association [0..*] to D_SalesDocCreateWithRefItemP on 1 = 0; //reuse

}
```
