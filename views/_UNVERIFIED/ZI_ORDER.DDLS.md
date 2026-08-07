---
name: ZI_ORDER.DDLS
description: BIV order
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Lnaj/Grp_sap/blob/9139d3999578866205fc6c74b4e7d967b86f97a8/src/zi_order.ddls.asddls
semantic_en: BIV order — CDS view based on zorder.
semantic_vi: BIV order — CDS view dựa trên zorder.
keywords:
  - biv
  - order
  - customer
  - address
  - date
  - status
tags:
  - order
---
# ZI_ORDER.DDLS

**BIV order**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Lnaj/Grp_sap/blob/9139d3999578866205fc6c74b4e7d967b86f97a8/src/zi_order.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderId` | ✓ | |  | `order_id` |  |  |
| `CustomerId` | ✓ | |  | `customer_id` |  |  |
| `AddressID` | ✓ | |  | `address_id` |  |  |
| `OrderDate` |  | |  | `order_date` |  |  |
| `OrderStatus` |  | |  | `order_status` |  |  |
| `Quantiy` |  | |  | `quantity` |  |  |
| `BillingAdress` |  | |  | `billing_adress` |  |  |
| `DeliveryAdress` |  | |  | `delivery_adress` |  |  |
| `ItemCount` |  | |  | `item_count` |  |  |
| `Currency` |  | |  | `currency` |  |  |
| `TotalPrice` |  | |  | `total_price` |  |  |
| `LocalCreatedBy` |  | |  | `local_created_by` |  |  |
| `LocalCreatedAt` |  | |  | `local_created_at` |  |  |
| `LocalLastChangedBy` |  | |  | `local_last_changed_by` |  |  |
| `LocalLastChangedAt` |  | |  | `local_last_changed_at` |  |  |

## Source Code

*Source: [https://github.com/Lnaj/Grp_sap/blob/9139d3999578866205fc6c74b4e7d967b86f97a8/src/zi_order.ddls.asddls](https://github.com/Lnaj/Grp_sap/blob/9139d3999578866205fc6c74b4e7d967b86f97a8/src/zi_order.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BIV order'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity zi_order
  as select from zorder
{

  key order_id              as OrderId,
  key customer_id           as CustomerId,
  key   address_id            as AddressID,
      order_date            as OrderDate,
      order_status          as OrderStatus,
    quantity as Quantiy,
      billing_adress        as BillingAdress,
      delivery_adress       as DeliveryAdress,
      item_count            as ItemCount,
      currency              as Currency,
      total_price           as TotalPrice,
      local_created_by      as LocalCreatedBy,
      local_created_at      as LocalCreatedAt,
      local_last_changed_by as LocalLastChangedBy,
      local_last_changed_at as LocalLastChangedAt
}
```
