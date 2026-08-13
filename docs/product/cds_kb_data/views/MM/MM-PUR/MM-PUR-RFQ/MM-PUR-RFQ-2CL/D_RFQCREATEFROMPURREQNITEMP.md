---
name: D_RFQCREATEFROMPURREQNITEMP
description: "D Rfqcreatefrompurreqnitemp"
semantic_vi: "View D_RFQCREATEFROMPURREQNITEMP hiển thị dữ liệu về mặt hàng yêu cầu mua hàng được sử dụng để tạo một yêu cầu giá mới. Nó được sử dụng khi tạo một yêu cầu giá mới từ một mặt hàng yêu cầu mua hàng hiện có."
keywords:
  - "purchase requisition"
  - "rfq"
  - "d_rfqcreatefrompurreqnitemp"
  - "purchase requisition item"
  - "sourcing & procurement"
  - "mm-pur-rfq-2cl"
  - "ekko"
  - "đơn mua hàng"
  - "yêu cầu giá"
  - "yêu cầu mua hàng"
semantic_en: "The D_RFQCREATEFROMPURREQNITEMP view exposes purchase requisition item data used to create a new RFQ. It is used when creating a new RFQ from an existing purchase requisition item."
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - item-level
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# D_RFQCREATEFROMPURREQNITEMP

**D Rfqcreatefrompurreqnitemp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseRequisition` |  | |  | `banfn` |  |  |
| `PurchaseRequisitionItem` |  | |  | `bnfpo` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'RFQ Create from Pur Reqn Item Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_RFQCreateFromPurReqnItemP  {
 
  PurchaseRequisition     : banfn;
  PurchaseRequisitionItem : bnfpo;
  
_DummyAssociation  :  association to parent D_RFQCreateFromPurReqnP;
//    _D_RFQCreateFromPurReqnP : association to parent D_RFQCreateFromPurReqnP;
}
```
