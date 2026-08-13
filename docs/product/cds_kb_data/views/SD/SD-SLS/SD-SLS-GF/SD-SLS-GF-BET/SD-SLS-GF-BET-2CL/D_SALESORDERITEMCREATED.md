---
name: D_SALESORDERITEMCREATED
description: "D Sales OrderITEMCREATED"
semantic_vi: "View D_SALESORDERITEMCREATED hiển thị dữ liệu tạo đơn hàng bán hàng chi tiết, có thể sử dụng khi theo dõi các thay đổi chi tiết của đơn hàng bán hàng."
keywords:
  - "sales order"
  - "đơn hàng bán hàng"
  - "item creation"
  - "tạo đơn hàng bán hàng"
  - "sales order item"
  - "đơn hàng bán hàng chi tiết"
  - "sap"
  - "sd-sls-gf-bet-2cl"
  - "sales & distribution"
  - "sales order type"
  - "loại đơn hàng bán hàng"
semantic_en: "The D_SALESORDERITEMCREATED view exposes sales order item creation data, which is useful when tracking item-level changes in sales orders."
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
# D_SALESORDERITEMCREATED

**D Sales OrderITEMCREATED**

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
@EndUserText.label: 'Sales Order Item Created'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions: true

define abstract entity D_SalesOrderItemCreated
{
      
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime      : vdm_lastchangedon;
      
      SalesOrderType           : auart_unv;

      SalesOrganization        : vkorg;

      DistributionChannel      : vtweg;

      OrganizationDivision     : spart;
      
      SoldToParty              : kunnr;
      
      SalesOrderItemCategory   : pstyv;
      
      Product                  : matnr;
}
```
