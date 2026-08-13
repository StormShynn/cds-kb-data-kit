---
name: D_PURCONTRVALDTYPERDCHANGED
description: "D Purcontrvaldtyperdchanged"
semantic_vi: "View này hiển thị dữ liệu về tính hợp lệ của hợp đồng mua hàng, bao gồm ngày bắt đầu và kết thúc cho các khoảng thời gian hợp lệ hiện tại và trước đó. Nó có thể được sử dụng để theo dõi các thay đổi về khoảng thời gian hợp lệ của hợp đồng mua hàng theo thời gian."
keywords:
  - "purchase contract"
  - "hợp đồng mua hàng"
  - "validity period"
  - "thời gian hợp lệ"
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "sap mm"
  - "mm-pur"
  - "mm-pur-oa"
semantic_en: "This view exposes purchase contract validity data, including start and end dates for current and previous validity periods. It can be used to track changes to purchase contract validity periods over time."
app_component: MM-PUR-OA-CON-2CL
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
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
---
# D_PURCONTRVALDTYPERDCHANGED

**D Purcontrvaldtyperdchanged**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurContrValidityStartDate` |  | |  | `kdatb` |  |  |
| `PurContrValidityEndDate` |  | |  | `kdate` |  |  |
| `PurContrPrevValidityStartDate` |  | |  | `kdatb` |  |  |
| `PurContrPrevValidityEndDate` |  | |  | `kdate` |  |  |

## Source Code

```abap
@Event.sapObjectNodeType: 'PurchaseContract'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Purchase Contract Validity Changed'
define abstract entity D_PurContrValdtyPerdChanged 
{
   @Event.previousValue.element:'PurContrPrevValidityStartDate'
   PurContrValidityStartDate : kdatb;
   
   @Event.previousValue.element:'PurContrPrevValidityEndDate'
   PurContrValidityEndDate : kdate;
   
   PurContrPrevValidityStartDate : kdatb;
   
   PurContrPrevValidityEndDate : kdate;

}
```
