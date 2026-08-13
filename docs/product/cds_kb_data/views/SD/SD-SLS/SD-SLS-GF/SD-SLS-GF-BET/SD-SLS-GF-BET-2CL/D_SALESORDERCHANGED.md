---
name: D_SALESORDERCHANGED
description: "D Sales OrderCHANGED"
semantic_vi: "View này hiển thị các sự kiện thay đổi đơn hàng bán hàng, cung cấp dữ liệu thời gian thực khi và cách đơn hàng bán hàng được chỉnh sửa. Nó có thể được sử dụng để theo dõi các thay đổi của đơn hàng bán hàng và phân tích tác động của các thay đổi này lên hoạt động kinh doanh."
keywords:
  - "sales order"
  - "đơn hàng bán hàng"
  - "sự kiện thay đổi"
  - "thời gian thực"
  - "sự kiện"
  - "thay đổi"
  - "sales order change"
  - "sales order event"
  - "sales order tracking"
  - "sales order analysis"
semantic_en: "This view exposes sales order change events, providing real-time data on when and how sales orders are modified. It can be used to track changes to sales orders and analyze the impact of these changes on business operations."
app_component: SD-SLS-GF-BET-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - sales-order
  - component:SD-SLS-GF-BET-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# D_SALESORDERCHANGED

**D Sales OrderCHANGED**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-BET-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `SalesOrderType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'SalesOrder'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions: true

define abstract entity D_SalesOrderChanged
{

  @Event.raisedAt.dateTime: true
  EventRaisedDateTime  : vdm_lastchangedon;

  SalesOrderType       : auart_unv;

  SalesOrganization    : vkorg;

  DistributionChannel  : vtweg;

  OrganizationDivision : spart;

  SoldToParty          : kunnr;

}
```
