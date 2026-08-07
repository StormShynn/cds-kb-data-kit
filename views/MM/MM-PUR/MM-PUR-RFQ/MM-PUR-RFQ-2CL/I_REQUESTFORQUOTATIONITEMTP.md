---
name: I_REQUESTFORQUOTATIONITEMTP
description: Requestforquotationitemtp
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
  - item-level
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_REQUESTFORQUOTATIONITEMTP

**Requestforquotationitemtp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RequestForQuotation` | ✓ | |  |  |
| `RequestForQuotationItem` | ✓ | |  |  |
| `PurchasingDocumentCategory` |  | |  |  |
| `PurchasingDocumentItemText` |  | |  |  |
| `Material` |  | |  |  |
| `ProductTypeCode` |  | |  |  |
| `ManufacturerMaterial` |  | |  |  |
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
| `PerformancePeriodStartDate` |  | |  |  |
| `PerformancePeriodEndDate` |  | |  |  |
| `OrderQuantityUnit` |  | |  |  |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  |  |
| `OrderItemQtyToBaseQtyDnmntr` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `PurchaseRequisition` |  | |  |  |
| `PurchaseRequisitionItem` |  | |  |  |
| `PurchasingInfoRecordUpdateCode` |  | |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_RequestForQuotation` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Request For Quotation Item - TP'

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'RequestForQuotation', 'RequestForQuotationItem' ]
@ObjectModel.representativeKey: 'RequestForQuotationItem'

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_RequestForQuotationItemTP
  as projection on R_RequestForQuotationItemTP as _RequestForQuotationItem
{
      @ObjectModel.foreignKey.association: '_RequestForQuotation'
  key RequestForQuotation,
  key RequestForQuotationItem,
      PurchasingDocumentCategory,
      PurchasingDocumentItemText,
      Material,
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
      ScheduleLineDeliveryDate,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOrderQuantity,
      PerformancePeriodStartDate,
      PerformancePeriodEndDate,
      OrderQuantityUnit,
      OrderItemQtyToBaseQtyNmrtr,
      OrderItemQtyToBaseQtyDnmntr,
      BaseUnit,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      PurchasingInfoRecordUpdateCode,
      PurchasingDocumentItemCategory,
      LastChangeDateTime,
      /* Associations */
      //      _OrderQuantityUnit,
      _RequestForQuotation : redirected to parent I_RequestForQuotationTP

}
```
