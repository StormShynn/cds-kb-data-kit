---
name: D_CUSTRETITMCRTEWTHREFDOCP
description: "D Custretitmcrtewthrefdocp"
semantic_vi: "Chứa dữ liệu chính của mặt hàng trả lại khách hàng để xử lý trả hàng và hoàn tiền, bao gồm các hoạt động theo dõi và kết quả kiểm tra vật liệu."
keywords:
  - "customer return"
  - "returns processing"
  - "refund"
  - "follow-up activity"
  - "material inspection"
  - "returns management"
  - "sddocumentitem"
  - "sdslsre"
  - "sales and distribution"
  - "đơn trả hàng"
  - "xử lý trả hàng"
  - "hoàn tiền"
semantic_en: "Exposes customer return item master data for processing returns and refunds, including follow-up activities and material inspection results."
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
# D_CUSTRETITMCRTEWTHREFDOCP

**D Custretitmcrtewthrefdocp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceSDDocumentItem` |  | |  | `vgpos` |  |  |
| `RequestedQuantity` |  | |  | `reqd_qty` |  |  |
| `RequestedQuantityUnit` |  | |  | `reqd_qty_unit` |  |  |
| `CustRetItmFollowUpActivity` |  | |  | `msr_fu_code` |  |  |
| `ReturnsRefundType` |  | |  | `msr_refund_type` |  |  |
| `ReturnsRefundProcgMode` |  | |  | `msr_refund_control` |  |  |
| `ReturnReason` |  | |  | `msr_returns_reason` |  |  |
| `RetMatlInspResultCode` |  | |  | `msr_inspection_code` |  |  |
| `RetsMgmtProcessingBlock` |  | |  | `msr_approval_block` |  |  |
| `ReturnsMaterialHasBeenReceived` |  | |  | `msr_material_received` |  |  |
| `ProductIsInspectedAtCustSite` |  | |  | `msr_at_customer_site` |  |  |
| `NextPlantForFollowUpActivity` |  | |  | `msr_next_plant` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Action Parameter: Create with Ref Item'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define root abstract entity D_CustRetItmCrteWthRefDocP
{
  ReferenceSDDocumentItem        : vgpos;
  @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
  @Semantics.valueRange.minimum  : '0'
  RequestedQuantity              : reqd_qty;
  RequestedQuantityUnit          : reqd_qty_unit;
  CustRetItmFollowUpActivity     : msr_fu_code;
  ReturnsRefundType              : msr_refund_type;
  ReturnsRefundProcgMode         : msr_refund_control;
  ReturnReason                   : msr_returns_reason;
  RetMatlInspResultCode          : msr_inspection_code;
  RetsMgmtProcessingBlock        : msr_approval_block;
  ReturnsMaterialHasBeenReceived : msr_material_received;
  ProductIsInspectedAtCustSite   : msr_at_customer_site;
  NextPlantForFollowUpActivity   : msr_next_plant;
  Supplier                       : lifnr;
}
```
