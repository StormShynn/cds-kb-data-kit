---
name: D_PURSCHEDGAGRMTCREATED
description: "D Purschedgagrmtcreated"
semantic_vi: "View D_PURSCHEDGAGRMTCREATED hiển thị các thỏa thuận lịch trình mua hàng được tạo trong SAP, cung cấp chi tiết như loại tài liệu mua hàng, nhà cung cấp và ngày hiệu lực. Nó được sử dụng để lấy thông tin về các thỏa thuận lịch trình mua hàng đã được tạo."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "schedule agreement"
  - "thỏa thuận lịch trình mua hàng"
  - "sap mm"
  - "mm-pur"
  - "purchasing"
  - "mua hàng"
  - "ekko"
semantic_en: "The D_PURSCHEDGAGRMTCREATED view exposes purchasing schedule agreements created in SAP, providing details such as purchasing document type, supplier, and validity dates. It is used to retrieve information about schedule agreements that have been created."
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# D_PURSCHEDGAGRMTCREATED

**D Purschedgagrmtcreated**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocumentType` |  | |  | `esart` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `PurchasingGroup` |  | |  | `bkgrp` |  |  |
| `Supplier` |  | |  | `md_supplier` |  |  |
| `ValidityStartDate` |  | |  | `kdatb` |  |  |
| `ValidityEndDate` |  | |  | `kdate` |  |  |

## Source Code

```abap
@Event.sapObjectNodeType: 'PurchaseSchedulingAgreement'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Event for Purchase Scheduling Agreement Create'
define abstract entity D_PurSchedgAgrmtCreated
{

  PurchasingDocumentType : esart;
  CompanyCode            : bukrs;
  PurchasingOrganization : ekorg;
  PurchasingGroup        : bkgrp;
  Supplier               : md_supplier;
  ValidityStartDate      : kdatb;
  ValidityEndDate        : kdate;



}
```
