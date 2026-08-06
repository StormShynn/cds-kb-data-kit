---
name: I_CNTRLREQFORQUOTATIONITEMTP_2
description: Cntrlreqforquotationitemtp 2
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
# I_CNTRLREQFORQUOTATIONITEMTP_2

**Cntrlreqforquotationitemtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CentralRequestForQuotation` | `CentralRequestForQuotation` |
| key `CentralRequestForQuotationItem` | `CentralRequestForQuotationItem` |
| `PurchasingDocumentCategory` | `PurchasingDocumentCategory` |
| `PurchasingDocumentItemText` | `PurchasingDocumentItemText` |
| `ProductTypeCode` | `ProductTypeCode` |
| `ManufacturerMaterial` | `ManufacturerMaterial` |
| `ManufacturerPartNmbr` | `ManufacturerPartNmbr` |
| `Manufacturer` | `Manufacturer` |
| `MaterialGroup` | `MaterialGroup` |
| `Plant` | `Plant` |
| `ManualDeliveryAddressID` | `ManualDeliveryAddressID` |
| `ReferenceDeliveryAddressID` | `ReferenceDeliveryAddressID` |
| `AddressID` | `AddressID` |
| `ItemDeliveryAddressID` | `ItemDeliveryAddressID` |
| `IncotermsClassification` | `IncotermsClassification` |
| `IncotermsTransferLocation` | `IncotermsTransferLocation` |
| `IncotermsLocation1` | `IncotermsLocation1` |
| `IncotermsLocation2` | `IncotermsLocation2` |
| `ScheduleLineOrderQuantity` | `ScheduleLineOrderQuantity` |
| `ScheduleLineDeliveryDate` | `ScheduleLineDeliveryDate` |
| `PerformancePeriodStartDate` | `PerformancePeriodStartDate` |
| `PerformancePeriodEndDate` | `PerformancePeriodEndDate` |
| `OrderQuantityUnit` | `OrderQuantityUnit` |
| `OrderItemQtyToBaseQtyNmrtr` | `OrderItemQtyToBaseQtyNmrtr` |
| `OrderItemQtyToBaseQtyDnmntr` | `OrderItemQtyToBaseQtyDnmntr` |
| `OrderPriceUnitToOrderUnitNmrtr` | `OrderPriceUnitToOrderUnitNmrtr` |
| `OrdPriceUnitToOrderUnitDnmntr` | `OrdPriceUnitToOrderUnitDnmntr` |
| `BaseUnit` | `BaseUnit` |
| `PurchaseRequisition` | `PurchaseRequisition` |
| `PurchaseRequisitionItem` | `PurchaseRequisitionItem` |
| `RequirementTracking` | `RequirementTracking` |
| `PurchasingCentralMaterial` | `PurchasingCentralMaterial` |
| `PurchasingDocumentItemCategory` | `PurchasingDocumentItemCategory` |
| `DocumentCurrency` | `DocumentCurrency` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_CentralRequestForQuotation` | *Association* |
| `_CentralRFQItemDistribution` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Cntrl Req for Quotation Item'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralRequestForQuotation', 'CentralRequestForQuotationItem' ]
@ObjectModel.representativeKey: 'CentralRequestForQuotationItem'
@ObjectModel:{
               usageType.dataClass: #MIXED,
               usageType.serviceQuality: #C,
               usageType.sizeCategory: #L
             }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_CntrlReqForQuotationItemTP_2
  as projection on R_CentralReqForQuotationItemTP as _CentralReqForQuotationItem
{
    @ObjectModel.foreignKey.association: '_CentralRequestForQuotation'
  key CentralRequestForQuotation,
  key CentralRequestForQuotationItem,
      PurchasingDocumentCategory,
      PurchasingDocumentItemText,
      //      ProductType,
      ProductTypeCode,
      ManufacturerMaterial,
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
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOrderQuantity,
      ScheduleLineDeliveryDate,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
      OrderQuantityUnit,
      OrderItemQtyToBaseQtyNmrtr,
      OrderItemQtyToBaseQtyDnmntr,
      OrderPriceUnitToOrderUnitNmrtr,
      OrdPriceUnitToOrderUnitDnmntr,
      BaseUnit,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      RequirementTracking,
      PurchasingCentralMaterial,
      PurchasingDocumentItemCategory,

//      @Semantics.amount.currencyCode: 'DocumentCurrency'
//      NetPriceAmount,
      DocumentCurrency,
      LastChangeDateTime,

      /* Associations */

      _CentralRequestForQuotation : redirected to parent I_CntrlRequestForQuotationTP_2,
      @Semantics.valueRange.maximum: '1'
      _CentralRFQItemDistribution : redirected to composition child I_CntrlRFQItemDistributionTP_2

}
```
