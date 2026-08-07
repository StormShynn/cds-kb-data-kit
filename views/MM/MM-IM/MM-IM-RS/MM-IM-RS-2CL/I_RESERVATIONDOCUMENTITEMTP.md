---
name: I_RESERVATIONDOCUMENTITEMTP
description: "Reservationdocumentitemtp"
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
  - item-level
  - component:MM-IM-RS-2CL
  - lob:Sourcing & Procurement
---
# I_RESERVATIONDOCUMENTITEMTP

**Reservationdocumentitemtp**

| Property | Value |
|---|---|
| App Component | `MM-IM-RS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Reservation` | ✓ | |  |  |  |  |
| `ReservationItem` | ✓ | |  |  |  |  |
| `RecordType` | ✓ | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ValuationType` |  | |  |  |  |  |
| `EntryUnit` |  | |  |  |  |  |
| `ResvnItmRequiredQtyInEntryUnit` |  | |  |  |  |  |
| `MatlCompRequirementDate` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `ResvnAccountIsEnteredManually` |  | |  |  |  |  |
| `ReservationItemText` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `GoodsMovementIsAllowed` |  | |  |  |  |  |
| `ReservationItmIsMarkedForDeltn` |  | |  |  |  |  |
| `ReservationItemIsFinallyIssued` |  | |  |  |  |  |
| `GoodsMovementType` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `ResvnItmRequiredQtyInBaseUnit` |  | |  |  |  |  |
| `ResvnItmWithdrawnQtyInBaseUnit` |  | |  |  |  |  |
| `ConfdQtyForATPInBaseUoM` |  | |  |  |  |  |
| `RecipientLocationCode` |  | |  |  |  |  |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_GoodsMovementType` | | ✓ | | | | |
| `_RecipientLocationCode` | | ✓ | | | | |
| `_ReservationDocumentHeaderTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Reservation Document Item Interface - TP'
@AccessControl.authorizationCheck: #MANDATORY

@ObjectModel: {
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
@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['_ReservationDocumentItem'],
  elementSuffix: 'RES',
  quota: {
    maximumFields: 404,
    maximumBytes: 24080
  } }
define view entity I_ReservationDocumentItemTP
  as projection on R_ReservationDocumentItemTP as _ReservationDocumentItem
{
  key Reservation,     //Readonly
  key ReservationItem, //Readonly
  key RecordType,      //Readonly
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true } ]
      Product,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' }, useAsTemplate: true } ]
      Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' }, useAsTemplate: true } ]
      StorageLocation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' },
                                additionalBinding: [{ element: 'Material', localElement: 'Product' },
                                                    { element: 'Plant', localElement: 'Plant' } ], useAsTemplate: true } ]
      Batch,
      ValuationType,
      EntryUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      ResvnItmRequiredQtyInEntryUnit,

      MatlCompRequirementDate,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' }, useAsTemplate: true } ]
      GLAccount,
      @Semantics.booleanIndicator: true
      ResvnAccountIsEnteredManually,
      ReservationItemText,
      GoodsRecipientName,
      UnloadingPointName,
      GoodsMovementIsAllowed,
      ReservationItmIsMarkedForDeltn,
      ReservationItemIsFinallyIssued,
      // Read-Only
      GoodsMovementType,
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ResvnItmRequiredQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ResvnItmWithdrawnQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ConfdQtyForATPInBaseUoM,
      RecipientLocationCode,

      _Plant,
      _StorageLocation,
      _Product,
      _GoodsMovementType,
      _RecipientLocationCode,
      
      _ReservationDocumentHeaderTP : redirected to parent I_ReservationDocumentTP

}
//where
//      RequirementType = 'MR'
// and  RecordType                  = ''
//   and(
//       ReservationItemCreationCode =    'M'
//    or ReservationItemCreationCode =    'B' //for compatibility as MRP enabled < 2402
//  )
//  and
//   (
//       GoodsMovementType        = '201' // Consumption for cost center from warehouse(GI for cost center)
//    or GoodsMovementType        = '202' // Consumption for cost center from warehouse – reversal(RE for cost center)
//    or GoodsMovementType        = '221' // Consumption for project from warehouse(GI for project)
//    or GoodsMovementType        = '222' // Consumption for project from warehouse - reversal(RE for project)
//    or GoodsMovementType        = '231' // Consumption for sales order from warehouse(GI for sales order)
//    or GoodsMovementType        = '232' // Consumption for sales order from warehouse - reversal(RE for sales order)
//    or GoodsMovementType        = '241' // Consumption for asset from warehouse(GI for asset)
//    or GoodsMovementType        = '242' // Consumption for asset from warehouse - reversal(RE for asset)
//    or GoodsMovementType        = '251' // Consumption for sales from warehouse(GI for sales)
//    or GoodsMovementType        = '252' // Consumption for sales from warehouse - reversal(RE for sales)
//    or GoodsMovementType        = '261' // Consumption for order from warehouse(GI for order)
//    or GoodsMovementType        = '262' // Consumption for order from warehouse - reversal(RE for order)
//    or GoodsMovementType        = '301' // Transfer posting plant to plant (one-step)(TF trfr plnt to plnt)
//    or GoodsMovementType        = '302' // Transfer posting plant to plant (one-step) - reversal(TR trfr plnt to plnt)
//    or GoodsMovementType        = '311' // Transfer posting storage location (one-step)(TF trfr within plant)
//    or GoodsMovementType        = '312' // Transfer posting storage location (one-step) - reversal(TR transfer in plant)
//    or GoodsMovementType        = '501' // Receipt w/o purchase order into warehouse(Receipt w/o PO)
//    or GoodsMovementType        = '502' // Receipt w/o purchase order into warehouse – reversal(RE receipt w/o PO)
//    or GoodsMovementType        = '503' // Receipt w/o purchase order into warehouse(Receipt to QI)
//    or GoodsMovementType        = '504' // Receipt w/o purchase order into warehouse – reversal(RE receipt to QI)
//    or GoodsMovementType        = '505' // Receipt w/o purchase order into warehouse(Receipt to blocked)
//    or GoodsMovementType        = '506' // Receipt w/o purchase order into warehouse - reversal(RE receipt to blockd)
//    or GoodsMovementType        = '521' // Receipt from production to unrestricted-use(Receipt w/o order)
//    or GoodsMovementType        = '522' // Receipt from production to unrestricted-use - reversal(RE receipt w/o prOrd)
//    or GoodsMovementType        = '523' // Receipt from production to quality inspection(Rcpt QI w/o prOrder)
//    or GoodsMovementType        = '524' // Receipt from production to quality inspection - reversal(RE quality w/o prOrd(
//    or GoodsMovementType        = '525' // Receipt from production to blocked stock(Rcpt blkd w/o pr.ord)
//    or GoodsMovementType        = '526' // Receipt from production to blocked stock - reversal(RE blocked w/o PrOrd)
//    or GoodsMovementType        = '541'  // Trfr pstng to stock with subcontractor from unrestr.-use st. ->MRP
//    or GoodsMovementType        like '9%'
//    or GoodsMovementType        like 'X%'
//    or GoodsMovementType        like 'Y%'
//    or GoodsMovementType        like 'Z%'
//  )
```
