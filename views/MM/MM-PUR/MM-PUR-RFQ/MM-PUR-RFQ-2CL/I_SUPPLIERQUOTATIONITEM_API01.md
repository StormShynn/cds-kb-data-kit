---
name: I_SUPPLIERQUOTATIONITEM_API01
description: Supplierquotationitem Api 01
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - interface-view
  - supplier
  - item-level
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERQUOTATIONITEM_API01

**Supplierquotationitem Api 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SupplierQuotation` | `I_SupplierQuotationItem.SupplierQuotation` |
| key `SupplierQuotationItem` | `I_SupplierQuotationItem.SupplierQuotationItem` |
| `PurchasingDocumentCategory` | `I_SupplierQuotationItem.PurchasingDocumentCategory` |
| `PurchasingDocumentItemText` | `I_SupplierQuotationItem.PurchasingDocumentItemText` |
| `Material` | `I_SupplierQuotationItem.Material` |
| `ManufacturerMaterial` | `I_SupplierQuotationItem.ManufacturerMaterial` |
| `SupplierMaterialNumber` | `I_SupplierQuotationItem.SupplierMaterialNumber` |
| `ManufacturerPartNmbr` | `I_SupplierQuotationItem.ManufacturerPartNmbr` |
| `Manufacturer` | `I_SupplierQuotationItem.Manufacturer` |
| `MaterialGroup` | `I_SupplierQuotationItem.MaterialGroup` |
| `Plant` | `I_SupplierQuotationItem.Plant` |
| `IncotermsClassification` | `I_SupplierQuotationItem.IncotermsClassification` |
| `IncotermsTransferLocation` | `I_SupplierQuotationItem.IncotermsTransferLocation` |
| `IncotermsLocation1` | `I_SupplierQuotationItem.IncotermsLocation1` |
| `IncotermsLocation2` | `I_SupplierQuotationItem.IncotermsLocation2` |
| `OrderPriceUnit` | `OrderPriceUnit` |
| `OrderPriceUnitToOrderUnitNmrtr` | `OrderPriceUnitToOrderUnitNmrtr` |
| `OrdPriceUnitToOrderUnitDnmntr` | `OrdPriceUnitToOrderUnitDnmntr` |
| `OrderQuantityUnit` | `OrderQuantityUnit` |
| `OrderItemQtyToBaseQtyNmrtr` | `OrderItemQtyToBaseQtyNmrtr` |
| `OrderItemQtyToBaseQtyDnmntr` | `OrderItemQtyToBaseQtyDnmntr` |
| `OrderQuantity` | `OrderQuantity` |
| `PurgDocPriceDate` | `PurgDocPriceDate` |
| `BaseUnit` | `BaseUnit` |
| `NetAmount` | `NetAmount` |
| `NetPriceAmount` | `NetPriceAmount` |
| `NetPriceQuantity` | `NetPriceQuantity` |
| `DocumentCurrency` | `I_SupplierQuotationItem.DocumentCurrency` |
| `PurchaseRequisition` | `I_SupplierQuotationItem.PurchaseRequisition` |
| `PurchaseRequisitionItem` | `I_SupplierQuotationItem.PurchaseRequisitionItem` |
| `RequestForQuotation` | `I_SupplierQuotationItem.RequestForQuotation` |
| `RequestForQuotationItem` | `I_SupplierQuotationItem.RequestForQuotationItem` |
| `_SupplierQuotation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierQuotation` | `I_SupplierQuotation_Api01` | [1..1] |
| `_SupplierQuotationItmExtension` | `E_PurchasingDocumentItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMQTNITEMAPI01'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Item in Supplier Quotation'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE

define view I_SupplierQuotationItem_Api01
  as select from I_SupplierQuotationItem

  association [1..1] to I_SupplierQuotation_Api01 as _SupplierQuotation             on  $projection.SupplierQuotation = _SupplierQuotation.SupplierQuotation

  ----Extension Association
  association [1..1] to E_PurchasingDocumentItem  as _SupplierQuotationItmExtension on  $projection.SupplierQuotation     = _SupplierQuotationItmExtension.PurchasingDocument
                                                                                    and $projection.SupplierQuotationItem = _SupplierQuotationItmExtension.PurchasingDocumentItem

{
  key I_SupplierQuotationItem.SupplierQuotation,
  key I_SupplierQuotationItem.SupplierQuotationItem,
      I_SupplierQuotationItem.PurchasingDocumentCategory,
      I_SupplierQuotationItem.PurchasingDocumentItemText,
      I_SupplierQuotationItem.Material,
      I_SupplierQuotationItem.ManufacturerMaterial,
      I_SupplierQuotationItem.SupplierMaterialNumber,
      I_SupplierQuotationItem.ManufacturerPartNmbr,
      I_SupplierQuotationItem.Manufacturer,
      I_SupplierQuotationItem.MaterialGroup,
      I_SupplierQuotationItem.Plant,
      I_SupplierQuotationItem.IncotermsClassification,
      I_SupplierQuotationItem.IncotermsTransferLocation,
      I_SupplierQuotationItem.IncotermsLocation1,
      I_SupplierQuotationItem.IncotermsLocation2,
      OrderPriceUnit,
      OrderPriceUnitToOrderUnitNmrtr,
      OrdPriceUnitToOrderUnitDnmntr,
      OrderQuantityUnit,
      OrderItemQtyToBaseQtyNmrtr,
      OrderItemQtyToBaseQtyDnmntr,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OrderQuantity,
      PurgDocPriceDate,
      BaseUnit,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetAmount,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      NetPriceQuantity,
      I_SupplierQuotationItem.DocumentCurrency,
      I_SupplierQuotationItem.PurchaseRequisition,
      I_SupplierQuotationItem.PurchaseRequisitionItem,
      I_SupplierQuotationItem.RequestForQuotation,
      I_SupplierQuotationItem.RequestForQuotationItem,

      /*Association*/
      _SupplierQuotation
}
```
