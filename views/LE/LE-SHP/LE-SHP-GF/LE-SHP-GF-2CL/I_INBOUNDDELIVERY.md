---
name: I_INBOUNDDELIVERY
description: Inbound Delivery
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
# I_INBOUNDDELIVERY

**Inbound Delivery**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InboundDelivery` | ✓ | |  | `DeliveryDocument` |
| `SDDocumentCategory` |  | |  |  |
| `DeliveryDocumentType` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreationTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `ShippingPoint` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |
| `DeliveryPriority` |  | |  |  |
| `DeliveryBlockReason` |  | |  |  |
| `Supplier` |  | |  |  |
| `DeliveryDocumentBySupplier` |  | |  |  |
| `DeliveryIsInPlant` |  | |  |  |
| `ReceivingPlant` |  | |  |  |
| `Warehouse` |  | |  |  |
| `IsExportDelivery` |  | |  |  |
| `OrderID` |  | |  |  |
| `HeaderGrossWeight` |  | |  |  |
| `HeaderNetWeight` |  | |  |  |
| `HeaderWeightUnit` |  | |  |  |
| `HeaderVolume` |  | |  |  |
| `HeaderVolumeUnit` |  | |  |  |
| `DocumentDate` |  | |  |  |
| `ReadyForWarehouseExecStatus` |  | |  |  |
| `DelivAdvncdShipgRcvgRlvnce` |  | |  |  |
| `DelivIsQtyCrrtnAdvncShipgRcvg` |  | |  |  |
| `PickingDate` |  | |  |  |
| `PickingTime` |  | |  |  |
| `TotalNumberOfPackage` |  | |  |  |
| `LoadingPoint` |  | |  |  |
| `LoadingDate` |  | |  |  |
| `LoadingTime` |  | |  |  |
| `BillOfLading` |  | |  |  |
| `HandlingUnitInStock` |  | |  |  |
| `ShipToParty` |  | |  |  |
| `ShippingType` |  | |  |  |
| `DeliveryDate` |  | |  |  |
| `DeliveryTime` |  | |  |  |
| `ShippingCondition` |  | |  |  |
| `ShipmentBlockReason` |  | |  |  |
| `TransportationPlanningDate` |  | |  |  |
| `TransportationPlanningTime` |  | |  |  |
| `ProposedDeliveryRoute` |  | |  |  |
| `ActualDeliveryRoute` |  | |  |  |
| `RouteSchedule` |  | |  |  |
| `PlannedGoodsIssueDate` |  | |  |  |
| `GoodsIssueTime` |  | |  |  |
| `ActualGoodsMovementDate` |  | |  |  |
| `ActualGoodsMovementTime` |  | |  |  |
| `IncotermsVersion` |  | |  |  |
| `IncotermsClassification` |  | |  |  |
| `IncotermsTransferLocation` |  | |  |  |
| `IncotermsLocation1` |  | |  |  |
| `IncotermsLocation2` |  | |  |  |
| `ExternalTransportSystem` |  | |  |  |
| `TransportationGroup` |  | |  |  |
| `MeansOfTransport` |  | |  |  |
| `MeansOfTransportType` |  | |  |  |
| `UnloadingPointName` |  | |  |  |
| `ProofOfDeliveryDate` |  | |  |  |
| `ConfirmationTime` |  | |  |  |
| `FactoryCalendarByCustomer` |  | |  |  |
| `BillingDocumentDate` |  | |  |  |
| `HeaderBillingBlockReason` |  | |  |  |
| `SoldToParty` |  | |  |  |
| `CustomerGroup` |  | |  |  |
| `SalesDistrict` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `OverallIntcoBillingStatus` |  | |  |  |
| `OverallSDProcessStatus` |  | |  |  |
| `TotalBlockStatus` |  | |  |  |
| `OverallDelivConfStatus` |  | |  |  |
| `TransportationPlanningStatus` |  | |  |  |
| `OverallPickingConfStatus` |  | |  |  |
| `OverallPickingStatus` |  | |  |  |
| `OverallPutawayStatus` |  | |  | `OverallPickingStatus` |
| `OverallPackingStatus` |  | |  |  |
| `OverallWarehouseActivityStatus` |  | |  |  |
| `DistrStatusByDecentralizedWrhs` |  | |  |  |
| `OverallGoodsMovementStatus` |  | |  |  |
| `OverallDelivReltdBillgStatus` |  | |  |  |
| `OverallProofOfDeliveryStatus` |  | |  |  |
| `HdrGeneralIncompletionStatus` |  | |  |  |
| `HeaderDelivIncompletionStatus` |  | |  |  |
| `HeaderPickgIncompletionStatus` |  | |  |  |
| `HeaderPackingIncompletionSts` |  | |  |  |
| `HdrGoodsMvtIncompletionStatus` |  | |  |  |
| `HeaderBillgIncompletionStatus` |  | |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  |  |
| `OvrlItmPackingIncompletionSts` |  | |  |  |
| `OvrlItmPickingIncompletionSts` |  | |  |  |
| `OvrlItmDelivIncompletionSts` |  | |  |  |
| `OvrlItmGdsMvtIncompletionSts` |  | |  |  |
| `TotalCreditCheckStatus` |  | |  |  |
| `OverallTrdCmplncEmbargoSts` |  | |  |  |
| `OvrlTrdCmplncSnctndListChkSts` |  | |  |  |
| `OvrlTrdCmplncLegalCtrlChkSts` |  | |  |  |
| `PricingDocument` |  | |  |  |
| `SalesOrgForIntcoBilling` |  | |  |  |
| `DistrChnlForIntcoBilling` |  | |  |  |
| `DivisionForIntcoBilling` |  | |  |  |
| `IntercompanyBillingType` |  | |  |  |
| `FactoryCalendarForIntcoBilling` |  | |  |  |
| `IntercompanyBillingCustomer` |  | |  |  |
| `DeliveryDocumentCondition` |  | |  |  |
| `TotalNetAmount` |  | |  |  |
| `ReferenceDocumentNumber` |  | |  |  |
| `DeletionIndicator` |  | |  |  |
| `_Item` | | ✓ | | |
| `_OverallPutawayStatus` | | ✓ | | |
| `_Partner` | | ✓ | | |
| `_SDDocumentCategory` | | ✓ | | |
| `_DeliveryDocumentType` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_LastChangedByUser` | | ✓ | | |
| `_ShippingPoint` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_SalesOffice` | | ✓ | | |
| `_DeliveryPriority` | | ✓ | | |
| `_DeliveryBlockReason` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_ReceivingPlant` | | ✓ | | |
| `_Warehouse` | | ✓ | | |
| `_OrderID` | | ✓ | | |
| `_HeaderWeightUnit` | | ✓ | | |
| `_HeaderVolumeUnit` | | ✓ | | |
| `_LoadingPoint` | | ✓ | | |
| `_HandlingUnitInStock` | | ✓ | | |
| `_ShipToParty` | | ✓ | | |
| `_ShippingType` | | ✓ | | |
| `_ShippingCondition` | | ✓ | | |
| `_ShipmentBlockReason` | | ✓ | | |
| `_ProposedDeliveryRoute` | | ✓ | | |
| `_ActualDeliveryRoute` | | ✓ | | |
| `_IncotermsVersion` | | ✓ | | |
| `_IncotermsClassification` | | ✓ | | |
| `_TransportationGroup` | | ✓ | | |
| `_MeansOfTransportType` | | ✓ | | |
| `_HeaderBillingBlockReason` | | ✓ | | |
| `_SoldToParty` | | ✓ | | |
| `_CustomerGroup` | | ✓ | | |
| `_SalesDistrict` | | ✓ | | |
| `_TransactionCurrency` | | ✓ | | |
| `_OverallSDProcessStatus` | | ✓ | | |
| `_TotalBlockStatus` | | ✓ | | |
| `_OverallDelivConfStatus` | | ✓ | | |
| `_TransportationPlanningSts` | | ✓ | | |
| `_OverallPickingConfStatus` | | ✓ | | |
| `_OverallPickingStatus` | | ✓ | | |
| `_OverallPackingStatus` | | ✓ | | |
| `_OvrlWarehouseActyStatus` | | ✓ | | |
| `_DistrStatusByDectrlzdWrhs` | | ✓ | | |
| `_OverallGoodsMovementStatus` | | ✓ | | |
| `_OverallDelivReltdBillgStatus` | | ✓ | | |
| `_OverallProofOfDeliveryStatus` | | ✓ | | |
| `_HdrGeneralIncompletionStatus` | | ✓ | | |
| `_HeaderDelivIncompletionStatus` | | ✓ | | |
| `_HeaderPickgIncompletionStatus` | | ✓ | | |
| `_HeaderPackingIncompletionSts` | | ✓ | | |
| `_HdrGoodsMvtIncompletionStatus` | | ✓ | | |
| `_HeaderBillgIncompletionStatus` | | ✓ | | |
| `_OvrlItmGeneralIncompletionSts` | | ✓ | | |
| `_OvrlItmPackingIncompletionSts` | | ✓ | | |
| `_OvrlItmPickingIncompletionSts` | | ✓ | | |
| `_OvrlItmDelivIncompletionSts` | | ✓ | | |
| `_OvrlItmGdsMvtIncompletionSts` | | ✓ | | |
| `_TotalCreditCheckStatus` | | ✓ | | |
| `_MaterialDocumentHeader` | | ✓ | | |
| `_MaterialDocumentHeader_2` | | ✓ | | |
| `_WarehouseExecutionStatus` | | ✓ | | |
| `_DelivAdvncdShipgRcvgRlvnce` | | ✓ | | |
| `_OverallTrdCmplncEmbargoSts` | | ✓ | | |
| `_OvrlTrdCmplncSnctndListChkSts` | | ✓ | | |
| `_OvrlTrdCmplncLegalCtrlChkSts` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `I_InboundDeliveryItem` | [0..*] |
| `_OverallPutawayStatus` | `I_PutawayStatus` | [0..1] |
| `_Partner` | `I_SDDocumentPartner` | [1..*] |
| `_Extension` | `E_DeliveryDocument` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'InboundDelivery'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'OutboundDelivery'
//Commented by VDM CDS Suite Plugin:@ObjectModel.compositionRoot: true
@EndUserText.label: 'Inbound Delivery'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.mapping: [{
                               role: #MAIN,
                               table: 'LIKP',
                               tableElement: ['VBELN'],
                               viewElement: ['InboundDelivery']
                             }]
                            }
@Metadata.allowExtensions: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
//@AccessControl.privilegedAssociations:  [ '_Extension' ]
@AbapCatalog.sqlViewName: 'ILEINBDELIV'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name:'InboundDelivery'

define view I_InboundDelivery
  as select from I_DeliveryDocument
  //Associations
  association [0..*] to I_InboundDeliveryItem as _Item                 on $projection.InboundDelivery = _Item.InboundDelivery
  association [0..1] to I_PutawayStatus       as _OverallPutawayStatus on $projection.OverallPutawayStatus = _OverallPutawayStatus.PutawayStatus

  //The following shall be removed when the cast bug is fixed.
  association [1..*] to I_SDDocumentPartner   as _Partner              on $projection.InboundDelivery = _Partner.SDDocument

  association [0..1] to E_DeliveryDocument    as _Extension            on $projection.InboundDelivery = _Extension.DeliveryDocument

{
      //key
  key DeliveryDocument     as InboundDelivery,

      //category
      SDDocumentCategory,
      //documenttype
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
      Supplier,
      DeliveryDocumentBySupplier,
      DeliveryIsInPlant,
      @ObjectModel.foreignKey.association: '_ReceivingPlant'
      ReceivingPlant,
      @ObjectModel.foreignKey.association: '_Warehouse'
      Warehouse,
      IsExportDelivery,
      @ObjectModel.foreignKey.association: '_OrderID'
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

      @Semantics.booleanIndicator
      DelivIsQtyCrrtnAdvncShipgRcvg,

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
      SoldToParty,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @Semantics.currencyCode: true
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
      @ObjectModel.foreignKey.association: '_OverallPutawayStatus'
      OverallPickingStatus as OverallPutawayStatus,
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
      //Customs Compliance Status
      @ObjectModel.foreignKey.association: '_OverallTrdCmplncEmbargoSts'
      OverallTrdCmplncEmbargoSts,
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncSnctndListChkSts'
      OvrlTrdCmplncSnctndListChkSts,
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncLegalCtrlChkSts'
      OvrlTrdCmplncLegalCtrlChkSts,

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

      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Item,
      _Partner,
      //  Category
      _SDDocumentCategory,
      //documenttype
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
      _OverallPutawayStatus,
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
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaterialDocumentHeader_2'      
      _MaterialDocumentHeader,
      _MaterialDocumentHeader_2,      
      _WarehouseExecutionStatus,
      _DelivAdvncdShipgRcvgRlvnce,
      _OverallTrdCmplncEmbargoSts,
      _OvrlTrdCmplncSnctndListChkSts,
      _OvrlTrdCmplncLegalCtrlChkSts

}
where
  SDDocumentCategory = '7'; // and DeliveryDocumentType='EL';
```
