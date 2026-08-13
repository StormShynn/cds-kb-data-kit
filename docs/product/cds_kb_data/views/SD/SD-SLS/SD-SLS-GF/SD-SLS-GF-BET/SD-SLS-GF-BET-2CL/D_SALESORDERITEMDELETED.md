---
name: D_SALESORDERITEMDELETED
description: "D Sales OrderITEMDELETED"
semantic_vi: "View D_SALESORDERITEMDELETED hiển thị các mặt hàng đơn đặt hàng đã xóa và dữ liệu liên quan, thường được sử dụng khi phân tích hoặc kiểm toán việc xóa mặt hàng đơn đặt hàng."
keywords:
  - "sales order item"
  - "đơn đặt hàng"
  - "xóa"
  - "mặt hàng"
  - "metadata"
  - "sales order"
  - "cds view"
  - "view"
  - "sap"
  - "sd-sls-gf-bet-2cl"
  - "sales & distribution"
semantic_en: "The D_SALESORDERITEMDELETED CDS view exposes deleted sales order items and their associated metadata, typically used when analyzing or auditing sales order item deletions."
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
# D_SALESORDERITEMDELETED

**D Sales OrderITEMDELETED**

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
@EndUserText.label: 'Sales Order Item Deleted'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions: true

define abstract entity D_SalesOrderItemDeleted
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
