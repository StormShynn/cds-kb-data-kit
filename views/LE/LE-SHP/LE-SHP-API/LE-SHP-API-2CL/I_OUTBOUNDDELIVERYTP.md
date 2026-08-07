---
name: I_OUTBOUNDDELIVERYTP
description: Outbound DeliveryTP
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
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
# I_OUTBOUNDDELIVERYTP

**Outbound DeliveryTP**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OutboundDelivery` | ✓ | |  |  |
| `ShipToParty` |  | |  |  |
| `SoldToParty` |  | |  |  |
| `Supplier` |  | |  |  |
| `ReceivingPlant` |  | |  |  |
| `CustomerGroup` |  | |  |  |
| `Warehouse` |  | |  |  |
| `WarehouseGate` |  | |  |  |
| `WarehouseStagingArea` |  | |  |  |
| `HandlingUnitInStock` |  | |  |  |
| `TotalNumberOfPackage` |  | |  |  |
| `RouteSchedule` |  | |  |  |
| `IncotermsClassification` |  | |  |  |
| `IncotermsTransferLocation` |  | |  |  |
| `BillOfLading` |  | |  |  |
| `GoodsMovementSlipNumber` |  | |  |  |
| `TransportationGroup` |  | |  |  |
| `ShipmentBlockReason` |  | |  |  |
| `ShippingCondition` |  | |  |  |
| `ShippingType` |  | |  |  |
| `SpecialProcessingCode` |  | |  |  |
| `MeansOfTransport` |  | |  |  |
| `MeansOfTransportType` |  | |  |  |
| `MeansOfTransportRefMaterial` |  | |  |  |
| `ExternalTransportSystem` |  | |  |  |
| `FactoryCalendarByCustomer` |  | |  |  |
| `HeaderGrossWeight` |  | |  |  |
| `HeaderNetWeight` |  | |  |  |
| `HeaderWeightUnit` |  | |  |  |
| `HeaderVolume` |  | |  |  |
| `HeaderVolumeUnit` |  | |  |  |
| `IsExportDelivery` |  | |  |  |
| `HeaderBillingBlockReason` |  | |  |  |
| `InternalFinancialDocument` |  | |  |  |
| `DepreciationInPercent` |  | |  |  |
| `PaymentGuaranteeProcedure` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `StatisticsCurrency` |  | |  |  |
| `DeliveryDocumentBySupplier` |  | |  |  |
| `ExternalIdentificationType` |  | |  |  |
| `ShippingPoint` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `SalesDistrict` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreationTime` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `DeliveryVersion` |  | |  |  |
| `DeliveryPriority` |  | |  |  |
| `DeliveryBlockReason` |  | |  |  |
| `DeliveryDocumentType` |  | |  |  |
| `SDDocumentCategory` |  | |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |
| `DocumentDate` |  | |  |  |
| `PickDate` |  | |  |  |
| `PickTime` |  | |  |  |
| `TransportationPlanningDate` |  | |  |  |
| `TransportationPlanningTime` |  | |  |  |
| `LoadingDate` |  | |  |  |
| `LoadingTime` |  | |  |  |
| `PlannedGoodsMovementDate` |  | |  |  |
| `PlannedGoodsMovementTime` |  | |  |  |
| `DeliveryDate` |  | |  |  |
| `DeliveryTime` |  | |  |  |
| `BillingDocumentDate` |  | |  |  |
| `IntercompanyBillingDate` |  | |  |  |
| `ActualGoodsMovementDate` |  | |  |  |
| `ActualGoodsMovementTime` |  | |  |  |
| `ProofOfDeliveryDate` |  | |  |  |
| `ProofOfDeliveryTime` |  | |  |  |
| `ShippingLocationTimeZone` |  | |  |  |
| `ReceivingLocationTimeZone` |  | |  |  |
| `OverallPickStatus` |  | |  |  |
| `OverallWarehouseActivityStatus` |  | |  |  |
| `OverallPickConfStatus` |  | |  |  |
| `OverallPackingStatus` |  | |  |  |
| `OverallGoodsMovementStatus` |  | |  |  |
| `OverallDelivReltdBillgStatus` |  | |  |  |
| `TransportationPlanningStatus` |  | |  |  |
| `DistrStatusByDecentralizedWrhs` |  | |  |  |
| `OverallProofOfDeliveryStatus` |  | |  |  |
| `OverallIntcoBillingStatus` |  | |  |  |
| `TotalCreditCheckStatus` |  | |  |  |
| `OverallDeliveryProcessStatus` |  | |  |  |
| `TotalBlockStatus` |  | |  |  |
| `OverallDelivConfStatus` |  | |  |  |
| `HdrGeneralIncompletionStatus` |  | |  |  |
| `HeaderDelivIncompletionStatus` |  | |  |  |
| `HeaderPickIncompletionStatus` |  | |  |  |
| `HeaderPackingIncompletionSts` |  | |  |  |
| `HdrGoodsMvtIncompletionStatus` |  | |  |  |
| `HeaderBillgIncompletionStatus` |  | |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |
| `OvrlItmPackingIncompletionSts` |  | |  |  |
| `OvrlItmPickIncompletionSts` |  | |  |  |
| `OvrlItmDelivIncompletionSts` |  | |  |  |
| `OvrlItmGdsMvtIncompletionSts` |  | |  |  |
| `DeliveryIsInPlant` |  | |  |  |
| `_Item` | | ✓ | | |
| `_Partner` | | ✓ | | |
| `_Text` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Outbound Delivery - TP'
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
    sapObjectNodeType.name: 'OutboundDelivery',
    semanticKey: ['OutboundDelivery'],
    representativeKey: 'OutboundDelivery'
}
@Metadata.ignorePropagatedAnnotations: true
define root view entity I_OutboundDeliveryTP
  provider contract transactional_interface
  as projection on R_OutboundDeliveryTP as _OutboundDeliveryTP
{
      // Key fields
  key OutboundDelivery,

      // Partner
      ShipToParty,
      SoldToParty,
      Supplier,
      ReceivingPlant,
      CustomerGroup,

      // Warehouse
      Warehouse,
      WarehouseGate,
      WarehouseStagingArea,
      HandlingUnitInStock,
      TotalNumberOfPackage,

      // Shipment
      RouteSchedule,
      IncotermsClassification,
      IncotermsTransferLocation,
      BillOfLading,
      GoodsMovementSlipNumber,
      TransportationGroup,
      ShipmentBlockReason,
      ShippingCondition,
      ShippingType,
      SpecialProcessingCode,
      MeansOfTransport,
      MeansOfTransportType,
      MeansOfTransportRefMaterial,
      ExternalTransportSystem,
      FactoryCalendarByCustomer,

      // Weight and Volume
      @Semantics.quantity.unitOfMeasure: 'HeaderWeightUnit'
      HeaderGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'HeaderWeightUnit'
      HeaderNetWeight,
      HeaderWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'HeaderVolumeUnit'
      HeaderVolume,
      HeaderVolumeUnit,

      // International Trade
      @Semantics.booleanIndicator: true
      IsExportDelivery,

      // Financial Processing
      HeaderBillingBlockReason,
      InternalFinancialDocument,
      DepreciationInPercent,
      PaymentGuaranteeProcedure,
      TransactionCurrency,
      StatisticsCurrency,

      // Organization
      DeliveryDocumentBySupplier,
      ExternalIdentificationType,
      ShippingPoint,
      SalesOrganization,
      SalesOffice,
      SalesDistrict,

      // Document Editing
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemTime.createdAt: true
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      DeliveryVersion,

      // Control
      DeliveryPriority,
      DeliveryBlockReason,
      DeliveryDocumentType,
      SDDocumentCategory,
      CompleteDeliveryIsDefined,
      OrderCombinationIsAllowed,

      // Dates
      DocumentDate,
      PickDate,
      PickTime,
      TransportationPlanningDate,
      TransportationPlanningTime,
      LoadingDate,
      LoadingTime,
      PlannedGoodsMovementDate,
      PlannedGoodsMovementTime,
      DeliveryDate,
      DeliveryTime,
      BillingDocumentDate,
      IntercompanyBillingDate,
      ActualGoodsMovementDate,
      ActualGoodsMovementTime,
      ProofOfDeliveryDate,
      ProofOfDeliveryTime,
      ShippingLocationTimeZone,
      ReceivingLocationTimeZone,

      // StatusA
      OverallPickStatus,
      OverallWarehouseActivityStatus,
      OverallPickConfStatus,
      OverallPackingStatus,
      OverallGoodsMovementStatus,
      OverallDelivReltdBillgStatus,
      TransportationPlanningStatus,
      DistrStatusByDecentralizedWrhs,
      OverallProofOfDeliveryStatus,
      OverallIntcoBillingStatus,
      TotalCreditCheckStatus,
      OverallDeliveryProcessStatus,
      TotalBlockStatus,
      OverallDelivConfStatus,
      HdrGeneralIncompletionStatus,
      HeaderDelivIncompletionStatus,
      HeaderPickIncompletionStatus,
      HeaderPackingIncompletionSts,
      HdrGoodsMvtIncompletionStatus,
      HeaderBillgIncompletionStatus,
      OvrlItmGeneralIncompletionSts,
      OvrlItmPackingIncompletionSts,
      OvrlItmPickIncompletionSts,
      OvrlItmDelivIncompletionSts,
      OvrlItmGdsMvtIncompletionSts,
      DeliveryIsInPlant,

      /* Associations */
      _Item    : redirected to composition child I_OutboundDeliveryItemTP,
      _Partner : redirected to composition child I_OutboundDeliveryPartnerTP,
      _Text    : redirected to composition child I_OutboundDeliveryTextTP
}
```
