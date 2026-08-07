---
name: ZR_ORDER000.DDLS
description: ###GENERATED Core Data Service Entity
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/SAP-samples/abap-platform-rap-transactional-outbox-with-bgpf/blob/8cd3f64340db119e1e8ae0c30e0da650c584fd9c/src/zr_order000.ddls.asddls
semantic_en: ###GENERATED Core Data Service Entity — CDS view based on zorder.
semantic_vi: ###GENERATED Core Data Service Entity — CDS view dựa trên zorder.
keywords:
  - ###generated
  - core
  - data
  - service
  - entity
  - order
  - date
  - customer
  - name
  - local
  - created
tags:
  - CO
  - component:CO
  - lob:controlling
---
# ZR_ORDER000.DDLS

**###GENERATED Core Data Service Entity**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/SAP-samples/abap-platform-rap-transactional-outbox-with-bgpf/blob/8cd3f64340db119e1e8ae0c30e0da650c584fd9c/src/zr_order000.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UUID` | ✓ | |  | `uuid` |  |  |
| `OrderID` |  | |  | `order_id` |  |  |
| `OrderDate` |  | |  | `order_date` |  |  |
| `CustomerName` |  | |  | `customer_name` |  |  |
| `LocalCreatedBy` |  | |  | `local_created_by` |  |  |
| `LocalCreatedAt` |  | |  | `local_created_at` |  |  |
| `LocalLastChangedBy` |  | |  | `local_last_changed_by` |  |  |
| `LocalLastChangedAt` |  | |  | `local_last_changed_at` |  |  |
| `LastChangedAt` |  | |  | `last_changed_at` |  |  |
| `Status` |  | |  | `status` |  |  |
| `_OrderItem` | | ✓ | | | | |

## Source Code

*Source: [https://github.com/SAP-samples/abap-platform-rap-transactional-outbox-with-bgpf/blob/8cd3f64340db119e1e8ae0c30e0da650c584fd9c/src/zr_order000.ddls.asddls](https://github.com/SAP-samples/abap-platform-rap-transactional-outbox-with-bgpf/blob/8cd3f64340db119e1e8ae0c30e0da650c584fd9c/src/zr_order000.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.allowExtensions: true
@ObjectModel.sapObjectNodeType.name: 'ZOrder'
@EndUserText.label: '###GENERATED Core Data Service Entity'
@ObjectModel.semanticKey: [ 'Orderid' ]
define root view entity ZR_ORDER000
  as select from zorder as Order000
  composition [1..*] of ZR_ORDERITEM as _OrderItem
{
  key uuid                  as UUID,
      order_id              as OrderID,
      order_date            as OrderDate,
      customer_name         as CustomerName,
      @Semantics.user.createdBy: true
      local_created_by      as LocalCreatedBy,
      @Semantics.systemDateTime.createdAt: true
      local_created_at      as LocalCreatedAt,
      @Semantics.user.localInstanceLastChangedBy: true
      local_last_changed_by as LocalLastChangedBy,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      local_last_changed_at as LocalLastChangedAt,
      @Semantics.systemDateTime.lastChangedAt: true
      last_changed_at       as LastChangedAt,

      status                as Status,

      _OrderItem
}
```
