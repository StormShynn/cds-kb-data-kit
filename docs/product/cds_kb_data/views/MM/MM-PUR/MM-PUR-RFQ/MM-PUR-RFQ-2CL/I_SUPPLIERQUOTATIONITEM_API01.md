---
name: I_SUPPLIERQUOTATIONITEM_API01
description: "Supplierquotationitem Api 01"
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierQuotation` | ✓ | |  |  |  |  |
| `SupplierQuotationItem` | ✓ | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentItemText` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `SupplierMaterialNumber` |  | |  |  |  |  |
| `ManufacturerPartNmbr` |  | |  |  |  |  |
| `Manufacturer` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  |  |  |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `PurgDocPriceDate` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `RequestForQuotation` |  | |  |  |  |  |
| `RequestForQuotationItem` |  | |  |  |  |  |
| `_SupplierQuotation` | | ✓ | | | | |

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
