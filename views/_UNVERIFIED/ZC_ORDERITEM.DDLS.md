---
name: ZC_ORDERITEM.DDLS
description: "ZC_ORDERITEM.DDLS"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/SAP-samples/abap-platform-rap-transactional-outbox-with-bgpf/blob/8cd3f64340db119e1e8ae0c30e0da650c584fd9c/src/zc_orderitem.ddls.asddls
semantic_en: "ZC_ORDERITEM.DDLS — CDS view."
semantic_vi: "ZC_ORDERITEM.DDLS — CDS view dựa trên ZC_ORDERITEM.DDLS."
keywords:
  - "orderitem.ddls"
  - "parent"
  - "order"
  - "item"
  - "product"
  - "name"
  - "quantity"
tags:
  - order
---
# ZC_ORDERITEM.DDLS

**ZC_ORDERITEM.DDLS**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/SAP-samples/abap-platform-rap-transactional-outbox-with-bgpf/blob/8cd3f64340db119e1e8ae0c30e0da650c584fd9c/src/zc_orderitem.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UUID` | ✓ | |  |  |  |  |
| `ParentUUID` |  | |  |  |  |  |
| `OrderItemID` |  | |  |  |  |  |
| `ProductName` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `UnitPrice` |  | |  |  |  |  |
| `QuantityUOM` |  | |  |  |  |  |
| `CurrencyCode` |  | |  |  |  |  |
| `_BaseEntity` | | ✓ | | | | |
| `_Order000` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BaseEntity` | `ZR_ORDERITEM` | [1..1] |

## Source Code

*Source: [https://github.com/SAP-samples/abap-platform-rap-transactional-outbox-with-bgpf/blob/8cd3f64340db119e1e8ae0c30e0da650c584fd9c/src/zc_orderitem.ddls.asddls](https://github.com/SAP-samples/abap-platform-rap-transactional-outbox-with-bgpf/blob/8cd3f64340db119e1e8ae0c30e0da650c584fd9c/src/zc_orderitem.ddls.asddls)*

```abap
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Endusertext: {
  Label: '###GENERATED Core Data Service Entity'
}
@Objectmodel: {
  Semantickey: [ 'Orderitemid' ]
}
@AccessControl.authorizationCheck: #MANDATORY
define view entity ZC_ORDERITEM
  as projection on ZR_ORDERITEM
  association [1..1] to ZR_ORDERITEM as _BaseEntity on $projection.UUID = _BaseEntity.UUID
{
  key UUID,
  ParentUUID,
  OrderItemID,
  ProductName,
  @Semantics: {
    Quantity.Unitofmeasure: 'QuantityUOM'
  }
  Quantity,
  @Semantics: {
    Amount.Currencycode: 'CurrencyCode'
  }
  UnitPrice,
  @Consumption: {
    Valuehelpdefinition: [ {
      Entity.Element: 'UnitOfMeasure', 
      Entity.Name: 'I_UnitOfMeasureStdVH', 
      Useforvalidation: true
    } ]
  }
  QuantityUOM,
  @Consumption: {
    Valuehelpdefinition: [ {
      Entity.Element: 'Currency', 
      Entity.Name: 'I_CurrencyStdVH', 
      Useforvalidation: true
    } ]
  }
  CurrencyCode,
  _Order000 : redirected to parent ZC_ORDER000,
  _BaseEntity
}
```
