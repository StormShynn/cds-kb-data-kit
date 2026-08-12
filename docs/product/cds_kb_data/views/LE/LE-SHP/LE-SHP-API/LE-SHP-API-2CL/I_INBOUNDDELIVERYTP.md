---
name: I_INBOUNDDELIVERYTP
description: "Inbound DeliveryTP"
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-API
  - interface-view
  - transactional-processing
  - delivery
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# I_INBOUNDDELIVERYTP

**Inbound DeliveryTP**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InboundDelivery` | ✓ | |  |  |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `DeliveryDocumentType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `GoodsReceivingPoint` |  | |  |  |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `DeliveryDocumentBySupplier` |  | |  |  |  |  |
| `DeliveryIsInPlant` |  | |  |  |  |  |
| `DeliveryVersion` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `ExternalIdentificationType` |  | |  |  |  |  |
| `GoodsMovementSlipNumber` |  | |  |  |  |  |
| `HeaderGrossWeight` |  | |  |  |  |  |
| `HeaderNetWeight` |  | |  |  |  |  |
| `HeaderVolume` |  | |  |  |  |  |
| `HeaderVolumeUnit` |  | |  |  |  |  |
| `HeaderWeightUnit` |  | |  |  |  |  |
| `IsExportDelivery` |  | |  |  |  |  |
| `MeansOfTransportRefMaterial` |  | |  |  |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |  |  |
| `ReceivingPlant` |  | |  |  |  |  |
| `SpecialProcessingCode` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Warehouse` |  | |  |  |  |  |
| `WarehouseGate` |  | |  |  |  |  |
| `WarehouseStagingArea` |  | |  |  |  |  |
| `TotalNumberOfPackage` |  | |  |  |  |  |
| `LoadingDate` |  | |  |  |  |  |
| `LoadingTime` |  | |  |  |  |  |
| `BillOfLading` |  | |  |  |  |  |
| `HandlingUnitInStock` |  | |  |  |  |  |
| `DeliveryDate` |  | |  |  |  |  |
| `DeliveryTime` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `ShipmentBlockReason` |  | |  |  |  |  |
| `TransportationPlanningDate` |  | |  |  |  |  |
| `TransportationPlanningTime` |  | |  |  |  |  |
| `RouteSchedule` |  | |  |  |  |  |
| `PlannedGoodsMovementDate` |  | |  |  |  |  |
| `PlannedGoodsMovementTime` |  | |  |  |  |  |
| `ActualGoodsMovementDate` |  | |  |  |  |  |
| `ActualGoodsMovementTime` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `ExternalTransportSystem` |  | |  |  |  |  |
| `TransportationGroup` |  | |  |  |  |  |
| `MeansOfTransport` |  | |  |  |  |  |
| `MeansOfTransportType` |  | |  |  |  |  |
| `ProofOfDeliveryDate` |  | |  |  |  |  |
| `ProofOfDeliveryTime` |  | |  |  |  |  |
| `FactoryCalendarByCustomer` |  | |  |  |  |  |
| `ShippingLocationTimeZone` |  | |  |  |  |  |
| `ReceivingLocationTimeZone` |  | |  |  |  |  |
| `IntercompanyBillingDate` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `InternalFinancialDocument` |  | |  |  |  |  |
| `PaymentGuaranteeProcedure` |  | |  |  |  |  |
| `DepreciationInPercent` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `StatisticsCurrency` |  | |  |  |  |  |
| `OverallIntcoBillingStatus` |  | |  |  |  |  |
| `OverallDeliveryProcessStatus` |  | |  |  |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
| `OverallDelivConfStatus` |  | |  |  |  |  |
| `TransportationPlanningStatus` |  | |  |  |  |  |
| `OverallPutawayConfStatus` |  | |  |  |  |  |
| `OverallPutawayStatus` |  | |  |  |  |  |
| `OverallPackingStatus` |  | |  |  |  |  |
| `OverallWarehouseActivityStatus` |  | |  |  |  |  |
| `DistrStatusByDecentralizedWrhs` |  | |  |  |  |  |
| `OverallGoodsMovementStatus` |  | |  |  |  |  |
| `OverallDelivReltdBillgStatus` |  | |  |  |  |  |
| `OverallProofOfDeliveryStatus` |  | |  |  |  |  |
| `HdrGeneralIncompletionStatus` |  | |  |  |  |  |
| `HeaderDelivIncompletionStatus` |  | |  |  |  |  |
| `HeaderPutawayIncompltnStatus` |  | |  |  |  |  |
| `HeaderPackingIncompletionSts` |  | |  |  |  |  |
| `HdrGoodsMvtIncompletionStatus` |  | |  |  |  |  |
| `HeaderBillgIncompletionStatus` |  | |  |  |  |  |
| `OvrlItmDelivIncompletionSts` |  | |  |  |  |  |
| `OvrlItmGdsMvtIncompletionSts` |  | |  |  |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |  |  |
| `OvrlItmPackingIncompletionSts` |  | |  |  |  |  |
| `OvrlItmPutawayIncompletionSts` |  | |  |  |  |  |
| `TotalCreditCheckStatus` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Inbound Delivery - TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #B,
        sizeCategory:   #L
    },
    sapObjectNodeType.name: 'InboundDelivery',
    semanticKey: ['InboundDelivery'],
    representativeKey: 'InboundDelivery'
}
@Metadata.ignorePropagatedAnnotations: true
define root view entity I_InboundDeliveryTP
  provider contract transactional_interface
  as projection on R_InboundDeliveryTP as InboundDelivery
{
       // Key
  key InboundDelivery,

      // Category
      SDDocumentCategory,
      DeliveryDocumentType,

      // Admin
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemTime.createdAt: true
      CreationTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      // Organization
      GoodsReceivingPoint,

      // Delivery
      @Semantics.booleanIndicator: true
      CompleteDeliveryIsDefined,
      DeliveryPriority,
      DeliveryBlockReason,
      DeliveryDocumentBySupplier,
      @Semantics.booleanIndicator: true
      DeliveryIsInPlant,
      DeliveryVersion,
      DocumentDate,
      ExternalIdentificationType,
      GoodsMovementSlipNumber,
      @Semantics.quantity.unitOfMeasure: 'HeaderWeightUnit'
      HeaderGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'HeaderWeightUnit'
      HeaderNetWeight,
      @Semantics.quantity.unitOfMeasure: 'HeaderVolumeUnit'
      HeaderVolume,
      HeaderVolumeUnit,
      HeaderWeightUnit,
      @Semantics.booleanIndicator: true
      IsExportDelivery,
      
      MeansOfTransportRefMaterial,
      @Semantics.booleanIndicator: true
      OrderCombinationIsAllowed,
      ReceivingPlant,
      SpecialProcessingCode,
      Supplier,
      Warehouse,
      WarehouseGate,
      WarehouseStagingArea,

      // Pick Pack Load
      TotalNumberOfPackage,
      LoadingDate,
      LoadingTime,
      BillOfLading,
      HandlingUnitInStock,

      // Shipping
      DeliveryDate,
      DeliveryTime,
      ShippingCondition,
      ShippingType,
      ShipmentBlockReason,
      TransportationPlanningDate,
      TransportationPlanningTime,
      RouteSchedule,
      PlannedGoodsMovementDate,
      PlannedGoodsMovementTime,
      ActualGoodsMovementDate,
      ActualGoodsMovementTime,
      IncotermsClassification,
      IncotermsTransferLocation,
      ExternalTransportSystem,
      TransportationGroup,
      MeansOfTransport,
      MeansOfTransportType,
      ProofOfDeliveryDate,
      ProofOfDeliveryTime,
      FactoryCalendarByCustomer,
      ShippingLocationTimeZone,
      ReceivingLocationTimeZone,

      // Billing
      IntercompanyBillingDate,
      BillingDocumentDate,
      HeaderBillingBlockReason,
      InternalFinancialDocument,
      PaymentGuaranteeProcedure,
      DepreciationInPercent,

      // Sales
      CustomerGroup,
      TransactionCurrency,
      StatisticsCurrency,

      // Status
      OverallIntcoBillingStatus,
      OverallDeliveryProcessStatus,
      TotalBlockStatus,
      OverallDelivConfStatus,
      TransportationPlanningStatus,
      OverallPutawayConfStatus,
      OverallPutawayStatus,
      OverallPackingStatus,
      OverallWarehouseActivityStatus,
      DistrStatusByDecentralizedWrhs,
      OverallGoodsMovementStatus,
      OverallDelivReltdBillgStatus,
      OverallProofOfDeliveryStatus,
      HdrGeneralIncompletionStatus,
      HeaderDelivIncompletionStatus,
      HeaderPutawayIncompltnStatus,
      HeaderPackingIncompletionSts,
      HdrGoodsMvtIncompletionStatus,
      HeaderBillgIncompletionStatus,
      OvrlItmDelivIncompletionSts,
      OvrlItmGdsMvtIncompletionSts,
      OvrlItmGeneralIncompletionSts,
      OvrlItmPackingIncompletionSts,
      OvrlItmPutawayIncompletionSts,
      TotalCreditCheckStatus,
      
      /* Compositions */
      _Item : redirected to composition child I_InboundDeliveryItemTP,
      _Partner : redirected to composition child I_InbDeliveryPartnerTP,
      _Text : redirected to composition child I_InboundDeliveryTextTP
}
```
