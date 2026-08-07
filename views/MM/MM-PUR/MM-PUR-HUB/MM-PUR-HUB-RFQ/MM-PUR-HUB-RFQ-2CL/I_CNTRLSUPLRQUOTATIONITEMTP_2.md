---
name: I_CNTRLSUPLRQUOTATIONITEMTP_2
description: Cntrlsuplrquotationitemtp 2
app_component: MM-PUR-HUB-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - item-level
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLSUPLRQUOTATIONITEMTP_2

**Cntrlsuplrquotationitemtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralSupplierQuotation` | ✓ | |  |  |  |  |
| `CentralSupplierQuotationItem` | ✓ | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentItemText` |  | |  |  |  |  |
| `PurchasingCentralMaterial` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `SupplierMaterialNumber` |  | |  |  |  |  |
| `ManufacturerPartNmbr` |  | |  |  |  |  |
| `Manufacturer` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ManualDeliveryAddressID` |  | |  |  |  |  |
| `ReferenceDeliveryAddressID` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `RequirementTracking` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  |  |  |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |  |  |
| `PerformancePeriodStartDate` |  | |  |  |  |  |
| `PerformancePeriodEndDate` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `PurgDocPriceDate` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `GrossAmount` |  | |  |  |  |  |
| `EffectiveAmount` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `ItemDeliveryAddressID` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `CentralRequestForQuotation` |  | |  |  |  |  |
| `CentralRequestForQuotationItem` |  | |  |  |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_CentralSupplierQuotation` | | ✓ | | | | |
| `_CntrlSupplierQtanItemPricing` | | ✓ | | | | |
| `_CntrlSuplrQuotationItemDistr` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Central Supplier Quotation Item'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['CentralSupplierQuotation','CentralSupplierQuotationItem']
@ObjectModel.representativeKey: 'CentralSupplierQuotationItem'
@ObjectModel:{
               usageType.dataClass: #MIXED,
               usageType.serviceQuality: #C,
               usageType.sizeCategory: #L
             }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_CntrlSuplrQuotationItemTP_2
  as projection on R_CntrlSupplierQuotationItemTP as _CntrlSupplierQuotationItem
{
      @ObjectModel: { foreignKey.association: '_CentralSupplierQuotation' }
  key CentralSupplierQuotation,
  key CentralSupplierQuotationItem,
      PurchasingDocumentCategory,
      PurchasingDocumentItemText,
      PurchasingCentralMaterial,
      ProductTypeCode,
      ManufacturerMaterial,
      SupplierMaterialNumber,
      ManufacturerPartNmbr,
      Manufacturer,
      MaterialGroup,
      Plant,
      ManualDeliveryAddressID,
      ReferenceDeliveryAddressID,
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      RequirementTracking,
      OrderPriceUnit,
      OrderPriceUnitToOrderUnitNmrtr,
      OrdPriceUnitToOrderUnitDnmntr,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOrderQuantity,
      ScheduleLineDeliveryDate,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
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
      GrossAmount,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      EffectiveAmount,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      NetPriceQuantity,
      AddressID,
      ItemDeliveryAddressID,
      DocumentCurrency,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      CentralRequestForQuotation,
      CentralRequestForQuotationItem,
      PurchasingDocumentItemCategory,
      LastChangeDateTime,
      /* Associations */
      _CentralSupplierQuotation     : redirected to parent I_CentralSupplierQuotationTP_2,
      _CntrlSupplierQtanItemPricing : redirected to composition child I_CntrlSuplrQtnItemPricingTP_2,
      _CntrlSuplrQuotationItemDistr : redirected to composition child I_CntrlSuplrQtnItemDistrTP_2
}
```
