---
name: D_SALESORDERITEMCHANGED
description: "D Sales OrderITEMCHANGED"
semantic_vi: "View D_SALESORDERITEMCHANGED hiển thị các sự kiện thay đổi đơn hàng bán hàng, cung cấp dữ liệu về khi và cách đơn hàng bán hàng được cập nhật. Nó có thể được sử dụng để theo dõi các thay đổi của đơn hàng bán hàng trong thời gian thực."
keywords:
  - "sales order"
  - "đơn hàng bán hàng"
  - "event"
  - "thay đổi"
  - "sales order item"
  - "đơn hàng bán hàng chi tiết"
  - "sap"
  - "sd-sls-gf-bet-2cl"
  - "sales & distribution"
  - "sales order type"
  - "logevent"
semantic_en: "The D_SALESORDERITEMCHANGED view exposes sales order item change events, providing data on when and how sales order items are updated. It can be used to track changes to sales orders in real-time."
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
  - item-level
  - component:SD-SLS-GF-BET-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# D_SALESORDERITEMCHANGED

**D Sales OrderITEMCHANGED**

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
| `SalesOrderItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Order Item Changed'    
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]                      
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions: true

define abstract entity D_SalesOrderItemChanged
{
 
      @Event.raisedAt.dateTime: true    
      EventRaisedDateTime           : vdm_lastchangedon;

      SalesOrderType                : auart_unv;

      SalesOrganization             : vkorg;

      DistributionChannel           : vtweg;

      OrganizationDivision          : spart;
      
      SoldToParty                   : kunnr;
      
      SalesOrderItemCategory        : pstyv;
      
      Product                       : matnr;      
  
}
```
