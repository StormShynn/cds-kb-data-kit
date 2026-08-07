---
name: ZI_ORDER_962.DDLS
description: Order view
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Tomomi-H011/ZDEMO962_Ver2/blob/8e57c7c924830bc1adabeaa678c0c6c489e2ad29/src/zi_order_962.ddls.asddls
semantic_en: Order view — CDS view based on zorder_tbl.
semantic_vi: Order view — CDS view dựa trên zorder_tbl.
keywords:
  - order
  - model
  - grade
  - year
tags:
  - order
---
# ZI_ORDER_962.DDLS

**Order view**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Tomomi-H011/ZDEMO962_Ver2/blob/8e57c7c924830bc1adabeaa678c0c6c489e2ad29/src/zi_order_962.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderID` | ✓ | |  | `order_id` |  |  |
| `OemID` | ✓ | |  | `oem_id` |  |  |
| `Model` | ✓ | |  | `model` |  |  |
| `Grade` | ✓ | |  | `grade` |  |  |
| `ModelYear` | ✓ | |  | `model_year` |  |  |
| `Color` | ✓ | |  | `color` |  |  |
| `OrderDate` |  | |  | `order_date` |  |  |
| `CustomerID` |  | |  | `customer_id` |  |  |
| `Price` |  | |  | `price` |  |  |
| `CurrencyCode` |  | |  | `currency_code` |  |  |
| `DeliveryDate` |  | |  | `delivery_date` |  |  |
| `CreatedBy` |  | |  | `created_by` |  |  |
| `LastChangedBy` |  | |  | `last_changed_by` |  |  |
| `LastChangedAt` |  | |  | `local_last_changed_at` |  |  |
| `_Oem` | | ✓ | | | | |
| `_Models` | | ✓ | | | | |
| `_Inventory` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Oem` | `ZI_OEM_962` | [1..1] |
| `_Models` | `ZI_MODELS_962` | [1..1] |
| `_Inventory` | `ZI_INVENTORY_962` | [0..*] |
| `_Customer` | `ZI_CUSTOMER_962` | [1..1] |

## Source Code

*Source: [https://github.com/Tomomi-H011/ZDEMO962_Ver2/blob/8e57c7c924830bc1adabeaa678c0c6c489e2ad29/src/zi_order_962.ddls.asddls](https://github.com/Tomomi-H011/ZDEMO962_Ver2/blob/8e57c7c924830bc1adabeaa678c0c6c489e2ad29/src/zi_order_962.ddls.asddls)*

```abap

@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Order view'
@Metadata.allowExtensions: true


define root view entity ZI_ORDER_962 
    as select from zorder_tbl as SalesOrder
    association [1..1] to ZI_OEM_962 as _Oem 
        on $projection.OemID = _Oem.OemID
    association [1..1] to ZI_MODELS_962 as _Models 
        on $projection.OemID = _Models.OemID
        and $projection.Model = _Models.Model
        and $projection.Grade = _Models.Grade
        and $projection.ModelYear = _Models.ModelYear
        and $projection.Color = _Models.Color
    association [0..*] to ZI_INVENTORY_962 as _Inventory 
        on $projection.OemID = _Inventory.OemID    
        and $projection.Grade = _Inventory.Grade
        and $projection.ModelYear = _Inventory.ModelYear
    association [1..1] to ZI_CUSTOMER_962 as _Customer
        on $projection.CustomerID = _Customer.CustomerID
{
  key SalesOrder.order_id as OrderID,
  key SalesOrder.oem_id as OemID,
  key SalesOrder.model as Model,
  key SalesOrder.grade as Grade,
  key SalesOrder.model_year as ModelYear,
  key SalesOrder.color as Color,
  SalesOrder.order_date as OrderDate,
  SalesOrder.customer_id as CustomerID,
  @Semantics.amount.currencyCode : 'CurrencyCode'
  SalesOrder.price as Price,
  SalesOrder.currency_code as CurrencyCode,
  SalesOrder.delivery_date as DeliveryDate,
  SalesOrder.created_by as CreatedBy,
  SalesOrder.last_changed_by as LastChangedBy,
  @Semantics.systemDateTime.localInstanceLastChangedAt: true
  SalesOrder.local_last_changed_at as LastChangedAt,
  _Oem,
  _Models,
  _Inventory,
  _Customer
}
```
