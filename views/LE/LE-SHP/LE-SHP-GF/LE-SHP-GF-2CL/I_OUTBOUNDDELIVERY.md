---
name: I_OUTBOUNDDELIVERY
description: Outbound Delivery
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - delivery
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_OUTBOUNDDELIVERY

**Outbound Delivery**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutboundDelivery` | ✓ | |  | `cast(DeliveryDocument as outbound_delivery)` |  |  |
| `DeliveryDocument` |  | |  |  |  |  |
| `DeliveryDocumentType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `DeliveryDocumentBySupplier` |  | |  |  |  |  |
| `DeliveryIsInPlant` |  | |  |  |  |  |
| `ReceivingPlant` |  | |  |  |  |  |
| `Warehouse` |  | |  |  |  |  |
| `IsExportDelivery` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `HeaderGrossWeight` |  | |  |  |  |  |
| `HeaderNetWeight` |  | |  |  |  |  |
| `HeaderWeightUnit` |  | |  |  |  |  |
| `HeaderVolume` |  | |  |  |  |  |
| `HeaderVolumeUnit` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `ReadyForWarehouseExecStatus` |  | |  |  |  |  |
| `DelivAdvncdShipgRcvgRlvnce` |  | |  |  |  |  |
| `PickingDate` |  | |  |  |  |  |
| `PickingTime` |  | |  |  |  |  |
| `TotalNumberOfPackage` |  | |  |  |  |  |
| `LoadingPoint` |  | |  |  |  |  |
| `LoadingDate` |  | |  |  |  |  |
| `LoadingTime` |  | |  |  |  |  |
| `BillOfLading` |  | |  |  |  |  |
| `HandlingUnitInStock` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `DeliveryDate` |  | |  |  |  |  |
| `DeliveryTime` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `ShipmentBlockReason` |  | |  |  |  |  |
| `TransportationPlanningDate` |  | |  |  |  |  |
| `TransportationPlanningTime` |  | |  |  |  |  |
| `ProposedDeliveryRoute` |  | |  |  |  |  |
| `ActualDeliveryRoute` |  | |  |  |  |  |
| `RouteSchedule` |  | |  |  |  |  |
| `PlannedGoodsIssueDate` |  | |  |  |  |  |
| `GoodsIssueTime` |  | |  |  |  |  |
| `ActualGoodsMovementDate` |  | |  |  |  |  |
| `ActualGoodsMovementTime` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `ExternalTransportSystem` |  | |  |  |  |  |
| `TransportationGroup` |  | |  |  |  |  |
| `MeansOfTransport` |  | |  |  |  |  |
| `MeansOfTransportType` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `ProofOfDeliveryDate` |  | |  |  |  |  |
| `ConfirmationTime` |  | |  |  |  |  |
| `FactoryCalendarByCustomer` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `OverallIntcoBillingStatus` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
| `OverallDelivConfStatus` |  | |  |  |  |  |
| `TransportationPlanningStatus` |  | |  |  |  |  |
| `OverallPickingConfStatus` |  | |  |  |  |  |
| `OverallPickingStatus` |  | |  |  |  |  |
| `OverallPackingStatus` |  | |  |  |  |  |
| `OverallWarehouseActivityStatus` |  | |  |  |  |  |
| `DistrStatusByDecentralizedWrhs` |  | |  |  |  |  |
| `OverallGoodsMovementStatus` |  | |  |  |  |  |
| `OverallDelivReltdBillgStatus` |  | |  |  |  |  |
| `OverallProofOfDeliveryStatus` |  | |  |  |  |  |
| `HdrGeneralIncompletionStatus` |  | |  |  |  |  |
| `HeaderDelivIncompletionStatus` |  | |  |  |  |  |
| `HeaderPickgIncompletionStatus` |  | |  |  |  |  |
| `HeaderPackingIncompletionSts` |  | |  |  |  |  |
| `HdrGoodsMvtIncompletionStatus` |  | |  |  |  |  |
| `HeaderBillgIncompletionStatus` |  | |  |  |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |  |  |
| `OvrlItmPackingIncompletionSts` |  | |  |  |  |  |
| `OvrlItmPickingIncompletionSts` |  | |  |  |  |  |
| `OvrlItmDelivIncompletionSts` |  | |  |  |  |  |
| `OvrlItmGdsMvtIncompletionSts` |  | |  |  |  |  |
| `TotalCreditCheckStatus` |  | |  |  |  |  |
| `FinDocCreditCheckStatus` |  | |  |  |  |  |
| `PaytAuthsnCreditCheckSts` |  | |  |  |  |  |
| `CentralCreditCheckStatus` |  | |  |  |  |  |
| `ExprtInsurCreditCheckStatus` |  | |  |  |  |  |
| `OverallChmlCmplncStatus` |  | |  |  |  |  |
| `OverallDangerousGoodsStatus` |  | |  |  |  |  |
| `OverallSafetyDataSheetStatus` |  | |  |  |  |  |
| `OverallTrdCmplncEmbargoSts` |  | |  |  |  |  |
| `OvrlTrdCmplncSnctndListChkSts` |  | |  |  |  |  |
| `OvrlTrdCmplncLegalCtrlChkSts` |  | |  |  |  |  |
| `ShippingGroupNumber` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `SalesOrgForIntcoBilling` |  | |  |  |  |  |
| `DistrChnlForIntcoBilling` |  | |  |  |  |  |
| `DivisionForIntcoBilling` |  | |  |  |  |  |
| `IntercompanyBillingType` |  | |  |  |  |  |
| `FactoryCalendarForIntcoBilling` |  | |  |  |  |  |
| `IntercompanyBillingCustomer` |  | |  |  |  |  |
| `DeliveryDocumentCondition` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `ReferenceDocumentNumber` |  | |  |  |  |  |
| `DeletionIndicator` |  | |  |  |  |  |
| `EU_DeliveryARCStatus` |  | |  |  |  |  |
| `IntcoExtActlTransfOfCtrlDteTme` |  | |  |  |  |  |
| `IntcoExtPlndTransfOfCtrlDteTme` |  | |  |  |  |  |
| `IntcoExtTransfOfCtrlDteTmeTmzn` |  | |  |  |  |  |
| `IntcoIntActlTransfOfCtrlDteTme` |  | |  |  |  |  |
| `IntcoIntPlndTransfOfCtrlDteTme` |  | |  |  |  |  |
| `IntcoIntTransfOfCtrlDteTmeTmzn` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_DeliveryDocumentType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_DeliveryPriority` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_ReceivingPlant` | | ✓ | | | | |
| `_Warehouse` | | ✓ | | | | |
| `_OrderID` | | ✓ | | | | |
| `_HeaderWeightUnit` | | ✓ | | | | |
| `_HeaderVolumeUnit` | | ✓ | | | | |
| `_LoadingPoint` | | ✓ | | | | |
| `_HandlingUnitInStock` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_ShippingType` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_ShipmentBlockReason` | | ✓ | | | | |
| `_ProposedDeliveryRoute` | | ✓ | | | | |
| `_ActualDeliveryRoute` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_TransportationGroup` | | ✓ | | | | |
| `_MeansOfTransportType` | | ✓ | | | | |
| `_HeaderBillingBlockReason` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_OverallSDProcessStatus` | | ✓ | | | | |
| `_TotalBlockStatus` | | ✓ | | | | |
| `_OverallDelivConfStatus` | | ✓ | | | | |
| `_TransportationPlanningSts` | | ✓ | | | | |
| `_OverallPickingConfStatus` | | ✓ | | | | |
| `_OverallPickingStatus` | | ✓ | | | | |
| `_OverallPackingStatus` | | ✓ | | | | |
| `_OvrlWarehouseActyStatus` | | ✓ | | | | |
| `_DistrStatusByDectrlzdWrhs` | | ✓ | | | | |
| `_OverallGoodsMovementStatus` | | ✓ | | | | |
| `_OverallDelivReltdBillgStatus` | | ✓ | | | | |
| `_OverallProofOfDeliveryStatus` | | ✓ | | | | |
| `_HdrGeneralIncompletionStatus` | | ✓ | | | | |
| `_HeaderDelivIncompletionStatus` | | ✓ | | | | |
| `_HeaderPickgIncompletionStatus` | | ✓ | | | | |
| `_HeaderPackingIncompletionSts` | | ✓ | | | | |
| `_HdrGoodsMvtIncompletionStatus` | | ✓ | | | | |
| `_HeaderBillgIncompletionStatus` | | ✓ | | | | |
| `_OvrlItmGeneralIncompletionSts` | | ✓ | | | | |
| `_OvrlItmPackingIncompletionSts` | | ✓ | | | | |
| `_OvrlItmPickingIncompletionSts` | | ✓ | | | | |
| `_OvrlItmDelivIncompletionSts` | | ✓ | | | | |
| `_OvrlItmGdsMvtIncompletionSts` | | ✓ | | | | |
| `_TotalCreditCheckStatus` | | ✓ | | | | |
| `_FinDocCreditCheckStatus` | | ✓ | | | | |
| `_PaytAuthsnCreditCheckSts` | | ✓ | | | | |
| `_CentralCreditCheckStatus` | | ✓ | | | | |
| `_ExprtInsurCreditCheckStatus` | | ✓ | | | | |
| `_OverallChmlCmplncStatus` | | ✓ | | | | |
| `_OverallDangerousGoodsStatus` | | ✓ | | | | |
| `_OvrlSftyDataSheetSts` | | ✓ | | | | |
| `_OverallTrdCmplncEmbargoSts` | | ✓ | | | | |
| `_OvrlTrdCmplncSnctndListChkSts` | | ✓ | | | | |
| `_OvrlTrdCmplncLegalCtrlChkSts` | | ✓ | | | | |
| `_ExternalTCOTimezone` | | ✓ | | | | |
| `_InternalTCOTimezone` | | ✓ | | | | |
| `_ExciseTaxStatus` | | ✓ | | | | |
| `_WarehouseExecutionStatus` | | ✓ | | | | |
| `_DelivAdvncdShipgRcvgRlvnce` | | ✓ | | | | |
| `_MaterialDocumentHeader_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_OutboundDeliveryItem` | [0..*] |
| `_Partner` | `I_SDDocumentPartner` | [1..*] |
| `_Extension` | `E_DeliveryDocument` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'OutboundDelivery'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'OutboundDelivery'
//Commented by VDM CDS Suite Plugin:@ObjectModel.compositionRoot: true
@EndUserText.label: 'Outbound Delivery Document'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.mapping: [{
                               role: #MAIN,
                               table: 'LIKP',
                               tableElement: ['VBELN'],
                               viewElement: ['OutboundDelivery']
                             }]
                            }
@Metadata.allowExtensions: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
//@AccessControl.privilegedAssociations:  [ '_E_Extension' ]
@AbapCatalog.sqlViewName: 'ILEOUTBDELIV'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name:'OutboundDelivery'

define view I_OutboundDelivery
  as select from I_DeliveryDocument
  //Associations
  association [0..*] to I_OutboundDeliveryItem as _Item      on $projection.OutboundDelivery = _Item.OutboundDelivery

  //The following shall be removed when the cast bug is fixed.
  association [1..*] to I_SDDocumentPartner    as _Partner   on $projection.OutboundDelivery = _Partner.SDDocument

  association [0..1] to E_DeliveryDocument     as _Extension on $projection.OutboundDelivery = _Extension.DeliveryDocument

{
      //key
  key cast(DeliveryDocument as outbound_delivery) as OutboundDelivery,

      @Consumption.hidden: true
      DeliveryDocument, // Required for association to _MaterialDocumentHeader_2

      //category
      @ObjectModel.foreignKey.association: '_DeliveryDocumentType'
      DeliveryDocumentType,

      //admin
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      //Organization
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ShippingPointStdVH', element: 'ShippingPoint' } } ]
      ShippingPoint,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,

      //delivery
      CompleteDeliveryIsDefined,
      OrderCombinationIsAllowed,
      @ObjectModel.foreignKey.association: '_DeliveryPriority'
      DeliveryPriority,
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
      DeliveryBlockReason,
      @ObjectModel.foreignKey.association: '_Supplier'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Supplier_VH', element: 'Supplier' } } ]
      Supplier,
      DeliveryDocumentBySupplier,
      DeliveryIsInPlant,
      @ObjectModel.foreignKey.association: '_ReceivingPlant'
      ReceivingPlant,
      @ObjectModel.foreignKey.association: '_Warehouse'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WarehouseStdVH', element: 'Warehouse' } } ]
      Warehouse,
      IsExportDelivery,
      @ObjectModel.foreignKey.association: '_OrderID'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      OrderID,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeaderWeightUnit'
      HeaderGrossWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeaderWeightUnit'
      HeaderNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_HeaderWeightUnit'
      HeaderWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeaderVolumeUnit'
      HeaderVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_HeaderVolumeUnit'
      HeaderVolumeUnit,
      DocumentDate,

      @ObjectModel.foreignKey.association: '_WarehouseExecutionStatus'
      ReadyForWarehouseExecStatus,

      @ObjectModel.foreignKey.association: '_DelivAdvncdShipgRcvgRlvnce'
      DelivAdvncdShipgRcvgRlvnce,

      //Pick Pack Load
      PickingDate,
      PickingTime,
      TotalNumberOfPackage,
      @ObjectModel.foreignKey.association: '_LoadingPoint'
      LoadingPoint,
      LoadingDate,
      LoadingTime,
      BillOfLading,
      @ObjectModel.foreignKey.association: '_HandlingUnitInStock'
      HandlingUnitInStock,

      //shipping
      @ObjectModel.foreignKey.association: '_ShipToParty'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      ShipToParty,
      @ObjectModel.foreignKey.association: '_ShippingType'
      ShippingType,
      DeliveryDate,
      DeliveryTime,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      ShippingCondition,
      @ObjectModel.foreignKey.association: '_ShipmentBlockReason'
      ShipmentBlockReason,
      TransportationPlanningDate,
      TransportationPlanningTime,
      @ObjectModel.foreignKey.association: '_ProposedDeliveryRoute'
      ProposedDeliveryRoute,
      @ObjectModel.foreignKey.association: '_ActualDeliveryRoute'
      ActualDeliveryRoute,
      RouteSchedule,
      PlannedGoodsIssueDate,
      GoodsIssueTime,
      ActualGoodsMovementDate,
      ActualGoodsMovementTime,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      ExternalTransportSystem,
      @ObjectModel.foreignKey.association: '_TransportationGroup'
      TransportationGroup,
      MeansOfTransport,
      @ObjectModel.foreignKey.association: '_MeansOfTransportType'
      MeansOfTransportType,
      UnloadingPointName,
      ProofOfDeliveryDate,
      ConfirmationTime,
      FactoryCalendarByCustomer,

      //Billing
      BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_HeaderBillingBlockReason'
      HeaderBillingBlockReason,

      //Sales
      @ObjectModel.foreignKey.association: '_SoldToParty'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      SoldToParty,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,

      //Status
      OverallIntcoBillingStatus,
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      OverallSDProcessStatus,
      @ObjectModel.foreignKey.association: '_TotalBlockStatus'
      TotalBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallDelivConfStatus'
      OverallDelivConfStatus,
      @ObjectModel.foreignKey.association: '_TransportationPlanningSts'
      TransportationPlanningStatus,
      @ObjectModel.foreignKey.association: '_OverallPickingConfStatus'
      OverallPickingConfStatus,
      @ObjectModel.foreignKey.association: '_OverallPickingStatus'
      OverallPickingStatus,
      @ObjectModel.foreignKey.association: '_OverallPackingStatus'
      OverallPackingStatus,
      @ObjectModel.foreignKey.association: '_OvrlWarehouseActyStatus'
      OverallWarehouseActivityStatus,
      @ObjectModel.foreignKey.association: '_DistrStatusByDectrlzdWrhs'
      DistrStatusByDecentralizedWrhs,
      @ObjectModel.foreignKey.association: '_OverallGoodsMovementStatus'
      OverallGoodsMovementStatus,
      @ObjectModel.foreignKey.association: '_OverallDelivReltdBillgStatus'
      OverallDelivReltdBillgStatus,
      @ObjectModel.foreignKey.association: '_OverallProofOfDeliveryStatus'
      OverallProofOfDeliveryStatus,
      @ObjectModel.foreignKey.association: '_HdrGeneralIncompletionStatus'
      HdrGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderDelivIncompletionStatus'
      HeaderDelivIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderPickgIncompletionStatus'
      HeaderPickgIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderPackingIncompletionSts'
      HeaderPackingIncompletionSts,
      @ObjectModel.foreignKey.association: '_HdrGoodsMvtIncompletionStatus'
      HdrGoodsMvtIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderBillgIncompletionStatus'
      HeaderBillgIncompletionStatus,
      @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
      OvrlItmGeneralIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmPackingIncompletionSts'
      OvrlItmPackingIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmPickingIncompletionSts'
      OvrlItmPickingIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmDelivIncompletionSts'
      OvrlItmDelivIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmGdsMvtIncompletionSts'
      OvrlItmGdsMvtIncompletionSts,
      @ObjectModel.foreignKey.association: '_TotalCreditCheckStatus'
      TotalCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_FinDocCreditCheckStatus'
      FinDocCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_PaytAuthsnCreditCheckSts'
      PaytAuthsnCreditCheckSts,
      @ObjectModel.foreignKey.association: '_CentralCreditCheckStatus'
      CentralCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_ExprtInsurCreditCheckStatus'
      ExprtInsurCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_OverallChmlCmplncStatus'
      OverallChmlCmplncStatus,
      @ObjectModel.foreignKey.association: '_OverallDangerousGoodsStatus'
      OverallDangerousGoodsStatus,
      @ObjectModel.foreignKey.association: '_OvrlSftyDataSheetSts'
      OverallSafetyDataSheetStatus,
      //Customs Compliance Status
      @ObjectModel.foreignKey.association: '_OverallTrdCmplncEmbargoSts'
      OverallTrdCmplncEmbargoSts,
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncSnctndListChkSts'
      OvrlTrdCmplncSnctndListChkSts,
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncLegalCtrlChkSts'
      OvrlTrdCmplncLegalCtrlChkSts,
      // Fashion Management
      ShippingGroupNumber,

      //Vistex Integration
      PricingDocument,
      SalesOrgForIntcoBilling,
      DistrChnlForIntcoBilling,
      DivisionForIntcoBilling,
      IntercompanyBillingType,
      FactoryCalendarForIntcoBilling,
      IntercompanyBillingCustomer,
      DeliveryDocumentCondition,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,
      ReferenceDocumentNumber,
      DeletionIndicator,

      //EMCS Integration - Excise Tax
      @ObjectModel.foreignKey.association: '_ExciseTaxStatus'
      EU_DeliveryARCStatus,

      //Intercompany - Transfer of Control Dates
      IntcoExtActlTransfOfCtrlDteTme,
      IntcoExtPlndTransfOfCtrlDteTme,
      @ObjectModel.foreignKey.association: '_ExternalTCOTimezone'
      IntcoExtTransfOfCtrlDteTmeTmzn,
      IntcoIntActlTransfOfCtrlDteTme,
      IntcoIntPlndTransfOfCtrlDteTme,
      @ObjectModel.foreignKey.association: '_InternalTCOTimezone'
      IntcoIntTransfOfCtrlDteTmeTmzn,

      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Item,
      _Partner,
      //  Category
      _DeliveryDocumentType,
      //  Admin
      _CreatedByUser,
      _LastChangedByUser,
      //  Organization
      _ShippingPoint,
      _SalesOrganization,
      _SalesOffice,
      //  Delivery
      _DeliveryPriority,
      _DeliveryBlockReason,
      _Supplier,
      _ReceivingPlant,
      _Warehouse,
      _OrderID,
      _HeaderWeightUnit,
      _HeaderVolumeUnit,
      //  Pick Pack Load
      _LoadingPoint,
      _HandlingUnitInStock,
      //  Shipping
      _ShipToParty,
      _ShippingType,
      _ShippingCondition,
      _ShipmentBlockReason,
      _ProposedDeliveryRoute,
      _ActualDeliveryRoute,
      _IncotermsVersion,
      _IncotermsClassification,
      _TransportationGroup,
      _MeansOfTransportType,
      //  Billing
      _HeaderBillingBlockReason,
      //  Sales
      _SoldToParty,
      _CustomerGroup,
      _SalesDistrict,
      _TransactionCurrency,
      //  Status
      _OverallSDProcessStatus,
      _TotalBlockStatus,
      _OverallDelivConfStatus,
      _TransportationPlanningSts,
      _OverallPickingConfStatus,
      _OverallPickingStatus,
      _OverallPackingStatus,
      _OvrlWarehouseActyStatus,
      _DistrStatusByDectrlzdWrhs,
      _OverallGoodsMovementStatus,
      _OverallDelivReltdBillgStatus,
      _OverallProofOfDeliveryStatus,
      _HdrGeneralIncompletionStatus,
      _HeaderDelivIncompletionStatus,
      _HeaderPickgIncompletionStatus,
      _HeaderPackingIncompletionSts,
      _HdrGoodsMvtIncompletionStatus,
      _HeaderBillgIncompletionStatus,
      _OvrlItmGeneralIncompletionSts,
      _OvrlItmPackingIncompletionSts,
      _OvrlItmPickingIncompletionSts,
      _OvrlItmDelivIncompletionSts,
      _OvrlItmGdsMvtIncompletionSts,
      _TotalCreditCheckStatus,
      _FinDocCreditCheckStatus,
      _PaytAuthsnCreditCheckSts,
      _CentralCreditCheckStatus,
      _ExprtInsurCreditCheckStatus,

      _OverallChmlCmplncStatus,
      _OverallDangerousGoodsStatus,
      _OvrlSftyDataSheetSts,

      _OverallTrdCmplncEmbargoSts,
      _OvrlTrdCmplncSnctndListChkSts,
      _OvrlTrdCmplncLegalCtrlChkSts,

      _ExternalTCOTimezone,
      _InternalTCOTimezone,

      _ExciseTaxStatus,
      _WarehouseExecutionStatus,
      _DelivAdvncdShipgRcvgRlvnce,
      _MaterialDocumentHeader_2

}
where
  SDDocumentCategory = 'J';
```
