---
name: D_RFQCREATEFROMPURREQNP
description: "D Rfqcreatefrompurreqnp"
semantic_vi: "View D_RFQCREATEFROMPURREQNP hiển thị các loại tài liệu mua hàng và các mục tạo RFQ từ yêu cầu mua hàng, thường được sử dụng khi tạo RFQ từ yêu cầu mua hàng."
keywords:
  - "purchase requisition"
  - "đơn mua hàng"
  - "rfq"
  - "tạo rfq"
  - "purchasing document type"
  - "loại tài liệu mua hàng"
  - "mm-pur-rfq"
  - "sourcing & procurement"
  - "ekko"
  - "purchase order"
semantic_en: "The D_RFQCREATEFROMPURREQNP CDS view exposes purchasing document types and their corresponding RFQ creation from purchase requisition items, typically used when creating RFQs from purchase requisitions."
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
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# D_RFQCREATEFROMPURREQNP

**D Rfqcreatefrompurreqnp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentType` |  | |  | `esart` |  |  |
| `D_RFQCreateFromPurReqnItemP` |  | |  | `_Items : composition[0..*] of D_RFQCreateFromPurReqnItemP` |  |  |

## Source Code

```abap
@EndUserText.label: 'RFQ from Purchase Requisition Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_RFQCreateFromPurReqnP {
  
   PurchasingDocumentType : esart;
   _Items  : composition[0..*] of D_RFQCreateFromPurReqnItemP ;
   
}
```
