---
name: D_PURSCHEDGAGRMTCHANGED
description: "D Purschedgagrmtchanged"
semantic_vi: "View này hiển thị các thay đổi trong thỏa thuận mua hàng, có liên quan khi phân tích hoặc báo cáo các thay đổi trong thỏa thuận mua hàng theo thời gian."
keywords:
  - "purchasing agreement"
  - "thỏa thuận mua hàng"
  - "purchase order"
  - "đơn mua hàng"
  - "agreement change"
  - "thay đổi thỏa thuận"
  - "purchasing document"
  - "đơn mua"
  - "mm-pur"
  - "mm-pur-oa"
  - "sourcing & procurement"
  - "thuê mua"
semantic_en: "This view exposes purchasing document agreement changes, which are relevant when analyzing or reporting on changes to purchasing agreements over time."
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
# D_PURSCHEDGAGRMTCHANGED

**D Purschedgagrmtchanged**

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
@EndUserText.label: 'Event for Purchase Scheduling Agreement Change'
define abstract entity D_PurSchedgAgrmtChanged
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
