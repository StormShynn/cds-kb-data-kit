---
name: I_SUPPLIERQUOTATIONITEMTP
description: Supplierquotationitemtp
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
  - transactional-processing
  - supplier
  - item-level
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERQUOTATIONITEMTP

**Supplierquotationitemtp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SupplierQuotation` | ✓ | |  |  |
| `SupplierQuotationItem` | ✓ | |  |  |
| `PurchasingDocumentCategory` |  | |  |  |
| `PurchasingDocumentItemText` |  | |  |  |
| `Material` |  | |  |  |
| `ProductTypeCode` |  | |  |  |
| `ManufacturerMaterial` |  | |  |  |
| `SupplierMaterialNumber` |  | |  |  |
| `ManufacturerPartNmbr` |  | |  |  |
| `Manufacturer` |  | |  |  |
| `MaterialGroup` |  | |  |  |
| `Plant` |  | |  |  |
| `ManualDeliveryAddressID` |  | |  |  |
| `ReferenceDeliveryAddressID` |  | |  |  |
| `AddressID` |  | |  |  |
| `ItemDeliveryAddressID` |  | |  |  |
| `IncotermsClassification` |  | |  |  |
| `IncotermsTransferLocation` |  | |  |  |
| `IncotermsLocation1` |  | |  |  |
| `IncotermsLocation2` |  | |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |
| `AwardedQuantity` |  | |  |  |
| `PerformancePeriodStartDate` |  | |  |  |
| `PerformancePeriodEndDate` |  | |  |  |
| `OrderPriceUnit` |  | |  |  |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  |
| `OrderQuantityUnit` |  | |  |  |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  |  |
| `OrderItemQtyToBaseQtyDnmntr` |  | |  |  |
| `PurgDocPriceDate` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `NetAmount` |  | |  |  |
| `GrossAmount` |  | |  |  |
| `EffectiveAmount` |  | |  |  |
| `NetPriceAmount` |  | |  |  |
| `NetPriceQuantity` |  | |  |  |
| `DocumentCurrency` |  | |  |  |
| `PurchaseRequisition` |  | |  |  |
| `PurchaseRequisitionItem` |  | |  |  |
| `RequestForQuotation` |  | |  |  |
| `RequestForQuotationItem` |  | |  |  |
| `PurchasingInfoRecordUpdateCode` |  | |  |  |
| `PurchasingInfoRecord` |  | |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_QTNPricingElement` | | ✓ | | |
| `_SupplierQuotation` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Supplier Quotation Item - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['SupplierQuotationItem']
@ObjectModel.representativeKey: 'SupplierQuotationItem'

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_SupplierQuotationItemTP
  as projection on R_SupplierQuotationItemTP as _SupplierQuotationItem

{
      @ObjectModel.foreignKey.association: '_SupplierQuotation'
  key SupplierQuotation,
  key SupplierQuotationItem,
      PurchasingDocumentCategory,
      PurchasingDocumentItemText,
      Material,
      ProductTypeCode,
      ManufacturerMaterial,
      SupplierMaterialNumber,
      ManufacturerPartNmbr,
      Manufacturer,
      MaterialGroup,
      Plant,
      ManualDeliveryAddressID,
      ReferenceDeliveryAddressID,
      AddressID,
      ItemDeliveryAddressID,
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      ScheduleLineDeliveryDate,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOrderQuantity,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      AwardedQuantity,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
      OrderPriceUnit,
      OrderPriceUnitToOrderUnitNmrtr,
      OrdPriceUnitToOrderUnitDnmntr,
      OrderQuantityUnit,
      OrderItemQtyToBaseQtyNmrtr,
      OrderItemQtyToBaseQtyDnmntr,
      PurgDocPriceDate,
      BaseUnit,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetAmount,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      GrossAmount,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      EffectiveAmount,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      NetPriceQuantity,
      DocumentCurrency,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      RequestForQuotation,
      RequestForQuotationItem,
      PurchasingInfoRecordUpdateCode,
      PurchasingInfoRecord,
      PurchasingDocumentItemCategory,
      LastChangeDateTime,
      /* Associations */
      _QTNPricingElement : redirected to composition child I_SupplierQuotationPrcElmntTP,
      _SupplierQuotation : redirected to parent I_SupplierQuotationTP

}
```
