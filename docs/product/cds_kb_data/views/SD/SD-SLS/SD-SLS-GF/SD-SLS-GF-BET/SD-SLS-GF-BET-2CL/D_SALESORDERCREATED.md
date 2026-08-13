---
name: D_SALESORDERCREATED
description: "D Sales OrderCREATED"
semantic_vi: "View D_SALESORDERCREATED hiển thị các sự kiện tạo đơn hàng bán, cung cấp dữ liệu về thời điểm và cách tạo đơn hàng bán trong hệ thống. Nó có thể được sử dụng để phân tích và theo dõi quá trình tạo đơn hàng bán."
keywords:
  - "sales order"
  - "đơn hàng bán"
  - "event raised"
  - "tạo đơn hàng"
  - "sales order creation"
  - "tạo đơn hàng bán"
  - "sap sales"
  - "sales distribution"
  - "sales order type"
  - "sales organization"
  - "distribution channel"
  - "organization division"
semantic_en: "The D_SALESORDERCREATED view exposes sales order creation events, providing data on when and how sales orders are created in the system. It can be used to analyze and track sales order creation processes."
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
# D_SALESORDERCREATED

**D Sales OrderCREATED**

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
@EndUserText.label: 'Sales Order Created'
@ObjectModel.sapObjectNodeType.name: 'SalesOrder'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions: true

define abstract entity D_SalesOrderCreated  {
    
        @Event.raisedAt.dateTime: true
        EventRaisedDateTime               : vdm_lastchangedon;
      
        SalesOrderType                    : auart_unv;

        SalesOrganization                 : vkorg;

        DistributionChannel               : vtweg;

        OrganizationDivision              : spart; 

        SoldToParty                       : kunnr;  
    
}
```
