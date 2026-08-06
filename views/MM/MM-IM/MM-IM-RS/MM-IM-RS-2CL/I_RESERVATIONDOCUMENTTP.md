---
name: I_RESERVATIONDOCUMENTTP
description: Reservationdocumenttp
app_component: MM-IM-RS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-RS
  - interface-view
  - transactional-processing
  - document
  - component:MM-IM-RS-2CL
  - lob:Sourcing & Procurement
---
# I_RESERVATIONDOCUMENTTP

**Reservationdocumenttp**

| Property | Value |
|---|---|
| App Component | `MM-IM-RS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Reservation` | `Reservation` |
| `ResvnVerificationCompanyCode` | `ResvnVerificationCompanyCode` |
| `ReservationDate` | `ReservationDate` |
| `UserID` | `UserID` |
| `GoodsMovementType` | `GoodsMovementType` |
| `CostCenter` | `CostCenter` |
| `AssetNumber` | `AssetNumber` |
| `AssetSubNumber` | `AssetSubNumber` |
| `OrderID` | `OrderID` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `,useAsTemplate: true } ] SalesOrderItem` |
| `SalesOrderScheduleLine` | `SalesOrderScheduleLine` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `IssuingOrReceivingPlant` | `IssuingOrReceivingPlant` |
| `IssuingOrReceivingStorageLoc` | `} ] IssuingOrReceivingStorageLoc` |
| `IsCheckedAgainstFactoryCal` | `IsCheckedAgainstFactoryCal` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `ControllingArea` | `ControllingArea` |
| `_CreatedByUser` | *Association* |
| `_LastChangedByUser` | *Association* |
| `_GoodsMovementType` | *Association* |
| `_VerificationCompanyCode` | *Association* |
| `_Order` | *Association* |
| `_CostCenter` | *Association* |
| `_WBSElementBasicData` | *Association* |
| `_IssuingOrReceivingPlant` | *Association* |
| `_IssuingOrReceivingStorageLoc` | *Association* |
| `_ReservationDocumentItemTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Reservation Document Interface - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel:{
  usageType: {
              serviceQuality: #C,
              sizeCategory  : #L,
              dataClass     : #TRANSACTIONAL },
              supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
              modelingPattern: #TRANSACTIONAL_INTERFACE
              }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name : 'ReservationDocument'
@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['_ReservationDocument'],
  elementSuffix: 'RDH',
  quota: {
    maximumFields: 404,
    maximumBytes: 24080
  }
}


define root view entity I_ReservationDocumentTP
  provider contract transactional_interface
  as projection on R_ReservationDocumentHeaderTP as _ReservationDocument
{
  key   Reservation, //Readonly
        @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }, useAsTemplate: true  } ]
        ResvnVerificationCompanyCode,
        @Semantics.businessDate.at: true
        ReservationDate,
        @Semantics.user.createdBy: true
        UserID, //Readonly
        GoodsMovementType,
        @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' }, useAsTemplate: true } ]
        CostCenter,
        AssetNumber,
        AssetSubNumber,
        OrderID,
        @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' },useAsTemplate: true } ]
        SalesOrder,
        @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderItemStdVH', element: 'SalesOrderItem' }, additionalBinding: [{ localElement: 'SalesOrder', element: 'SalesOrder' }],useAsTemplate: true } ]
        SalesOrderItem,
        SalesOrderScheduleLine,
        WBSElementInternalID,
         @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true } ]
        IssuingOrReceivingPlant,
        @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' }, useAsTemplate: true,
            additionalBinding: [{ element: 'Plant', localElement: 'IssuingOrReceivingPlant' }]
        } ]
        IssuingOrReceivingStorageLoc,
        IsCheckedAgainstFactoryCal,
        @Semantics.systemDateTime.createdAt: true
        CreationDateTime,
        @Semantics.user.lastChangedBy: true
        LastChangedByUser,
        @Semantics.systemDateTime.lastChangedAt: true
        LastChangeDateTime,
        
        @Feature: 'MM_IM_MATDOC_PAAS_ENHANCE'
        ControllingArea,
        //Associations
        _CreatedByUser,
        _LastChangedByUser,
        _GoodsMovementType,
        _VerificationCompanyCode,
        _Order,
        @Consumption.filter.businessDate.at: true        
        _CostCenter,
        _WBSElementBasicData,
        _IssuingOrReceivingPlant,
        _IssuingOrReceivingStorageLoc,

        _ReservationDocumentItemTP : redirected to composition child I_ReservationDocumentItemTP
}
//  where
//  RequirementType              = 'MR'
//   and(
//       ReservationItemCreationCode =    'M'
//    or ReservationItemCreationCode =    'B' //for compatibility as MRP enabled < 2402
//  )
//  and  ReservationCreationCode     <>   '0010' // Disable IRES
//  and  ReservationCreationCode     <>   '0020' // Disable IRES
//  and
//        ReservationOrigin            = ''
//  and
//  (
//       GoodsMovementType           = '201' // Consumption for cost center from warehouse(GI for cost center)
//    or GoodsMovementType           = '202' // Consumption for cost center from warehouse – reversal(RE for cost center)
//    or GoodsMovementType           = '221' // Consumption for project from warehouse(GI for project)
//    or GoodsMovementType           = '222' // Consumption for project from warehouse - reversal(RE for project)
//    or GoodsMovementType           = '231' // Consumption for sales order from warehouse(GI for sales order)
//    or GoodsMovementType           = '232' // Consumption for sales order from warehouse - reversal(RE for sales order)
//    or GoodsMovementType           = '241' // Consumption for asset from warehouse(GI for asset)
//    or GoodsMovementType           = '242' // Consumption for asset from warehouse - reversal(RE for asset)
//    or GoodsMovementType           = '251' // Consumption for sales from warehouse(GI for sales)
//    or GoodsMovementType           = '252' // Consumption for sales from warehouse - reversal(RE for sales)
//    or GoodsMovementType           = '261' // Consumption for order from warehouse(GI for order)
//    or GoodsMovementType           = '262' // Consumption for order from warehouse - reversal(RE for order)
//    or GoodsMovementType           = '301' // Transfer posting plant to plant (one-step)(TF trfr plnt to plnt)
//    or GoodsMovementType           = '302' // Transfer posting plant to plant (one-step) - reversal(TR trfr plnt to plnt)
//    or GoodsMovementType           = '311' // Transfer posting storage location (one-step)(TF trfr within plant)
//    or GoodsMovementType           = '312' // Transfer posting storage location (one-step) - reversal(TR transfer in plant)
//    or GoodsMovementType           = '501' // Receipt w/o purchase order into warehouse(Receipt w/o PO)
//    or GoodsMovementType           = '502' // Receipt w/o purchase order into warehouse – reversal(RE receipt w/o PO)
//    or GoodsMovementType           = '503' // Receipt w/o purchase order into warehouse(Receipt to QI)
//    or GoodsMovementType           = '504' // Receipt w/o purchase order into warehouse – reversal(RE receipt to QI)
//    or GoodsMovementType           = '505' // Receipt w/o purchase order into warehouse(Receipt to blocked)
//    or GoodsMovementType           = '506' // Receipt w/o purchase order into warehouse - reversal(RE receipt to blockd)
//    or GoodsMovementType           = '521' // Receipt from production to unrestricted-use(Receipt w/o order)
//    or GoodsMovementType           = '522' // Receipt from production to unrestricted-use - reversal(RE receipt w/o prOrd)
//    or GoodsMovementType           = '523' // Receipt from production to quality inspection(Rcpt QI w/o prOrder)
//    or GoodsMovementType           = '524' // Receipt from production to quality inspection - reversal(RE quality w/o prOrd(
//    or GoodsMovementType           = '525' // Receipt from production to blocked stock(Rcpt blkd w/o pr.ord)
//    or GoodsMovementType           = '526' // Receipt from production to blocked stock - reversal(RE blocked w/o PrOrd)
//    or GoodsMovementType           = '541'  // Trfr pstng to stock with subcontractor from unrestr.-use st. ->MRP
//    or GoodsMovementType           like '9%'
//    or GoodsMovementType           like 'X%'
//    or GoodsMovementType           like 'Y%'
//    or GoodsMovementType           like 'Z%'
//  )
```
