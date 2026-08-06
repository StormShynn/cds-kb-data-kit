---
name: ZC_ORDER000.DDLS
description: ZC_ORDER000.DDLS
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/SAP-samples/abap-platform-rap-transactional-outbox-with-bgpf/blob/8cd3f64340db119e1e8ae0c30e0da650c584fd9c/src/zc_order000.ddls.asddls
semantic_en: ZC_ORDER000.DDLS — CDS view.
semantic_vi: ZC_ORDER000.DDLS — CDS view dựa trên ZC_ORDER000.DDLS.
keywords:
  - order000.ddls
  - order
  - date
  - customer
  - name
  - local
  - created
tags:
  - order
---
# ZC_ORDER000.DDLS

**ZC_ORDER000.DDLS**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/SAP-samples/abap-platform-rap-transactional-outbox-with-bgpf/blob/8cd3f64340db119e1e8ae0c30e0da650c584fd9c/src/zc_order000.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `UUID` | `UUID` |
| `OrderID` | `OrderID` |
| `OrderDate` | `OrderDate` |
| `CustomerName` | `CustomerName` |
| `LocalCreatedBy` | `LocalCreatedBy` |
| `LocalCreatedAt` | `LocalCreatedAt` |
| `LocalLastChangedBy` | `LocalLastChangedBy` |
| `LocalLastChangedAt` | `LocalLastChangedAt` |
| `LastChangedAt` | `LastChangedAt` |
| `Status` | `Status` |
| `_BaseEntity` | *Association* |
| `_OrderItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BaseEntity` | `ZR_ORDER000` | [1..1] |

## Source Code

*Source: [https://github.com/SAP-samples/abap-platform-rap-transactional-outbox-with-bgpf/blob/8cd3f64340db119e1e8ae0c30e0da650c584fd9c/src/zc_order000.ddls.asddls](https://github.com/SAP-samples/abap-platform-rap-transactional-outbox-with-bgpf/blob/8cd3f64340db119e1e8ae0c30e0da650c584fd9c/src/zc_order000.ddls.asddls)*

```abap
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText: {
  label: '###GENERATED Core Data Service Entity'
}
@ObjectModel: {
  sapObjectNodeType.name: 'ZOrder', 
  semanticKey: [ 'Orderid' ]
}
@AccessControl.authorizationCheck: #MANDATORY
define root view entity ZC_ORDER000
  provider contract transactional_query
  as projection on ZR_ORDER000
  association [1..1] to ZR_ORDER000 as _BaseEntity on $projection.UUID = _BaseEntity.UUID
{
  key UUID,
  OrderID,
  OrderDate,
  CustomerName,
  @Semantics: {
    user.createdBy: true
  }
  LocalCreatedBy,
  @Semantics: {
    systemDateTime.createdAt: true
  }
  LocalCreatedAt,
  @Semantics: {
    user.localInstanceLastChangedBy: true
  }
  LocalLastChangedBy,
  @Semantics: {
    systemDateTime.localInstanceLastChangedAt: true
  }
  LocalLastChangedAt,
  @Semantics: {
    systemDateTime.lastChangedAt: true
  }
  LastChangedAt,
  
  Status,
  
  _OrderItem : redirected to composition child ZC_ORDERITEM,
  _BaseEntity
}
```