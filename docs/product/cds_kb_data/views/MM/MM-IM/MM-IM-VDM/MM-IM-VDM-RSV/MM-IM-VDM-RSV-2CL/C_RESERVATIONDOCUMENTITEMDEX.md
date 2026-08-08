---
name: C_RESERVATIONDOCUMENTITEMDEX
description: "Data extraction for Reservation Document"
app_component: MM-IM-VDM-RSV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESERVATIONDOCUMENTITEMDEX')/$value
semantic_en: "Data extraction for Reservation Document"
semantic_vi: "Data extraction for Reservation Document — CDS view tiêu dùng (transactional data) dựa trên I_ReservationDocumentItem."
keywords:
  - "Data extraction for Reservation Document"
  - "data"
  - "extraction"
  - "for"
  - "reservation"
  - "document"
  - "item"
  - "record"
  - "type"
  - "plant"
  - "storage"
  - "location"
tags:
  - MM
  - component:MM-IM-VDM-RSV-2CL
  - consumption-view
  - document
  - lob:sourcing & procurement
  - MM-IM
  - MM-IM-VDM
  - MM-IM-VDM-RSV
  - MM-IM-VDM-RSV-2CL
---
# C_RESERVATIONDOCUMENTITEMDEX

**Data extraction for Reservation Document**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-RSV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESERVATIONDOCUMENTITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Reservation` | ✓ | |  |  | `NUMC(10)` | Number of reservation/dependent requirements |
| `ReservationItem` | ✓ | |  |  | `NUMC(4)` | Item Number of Reservation / Dependent Requirements |
| `RecordType` | ✓ | |  |  | `CHAR(1)` | Record type |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `ReservationItemCreationCode` |  | |  | `cast ( ReservationItemCreationCode as reservationcreationtype preserving type )` | `CHAR(1)` | Reservation Creation Type |
| `MatlCompRequirementDate` |  | |  |  | `DATS(8)` | Requirements date for the component |
| `GoodsMovementIsAllowed` |  | |  |  | `CHAR(1)` | Goods Movement for Reservation Allowed |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `ResvnAccountIsEnteredManually` |  | |  | `cast ( ResvnAccountIsEnteredManually as resvnglaccenteredmanually preserving type )` | `CHAR(1)` | GL Account Entered Manually |
| `EntryUnit` |  | |  |  | `UNIT(3)` | Unit of entry |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `IssuingOrReceivingPlant` |  | |  |  | `CHAR(4)` | Receiving plant/issuing plant |
| `IssuingOrReceivingStorageLoc` |  | |  |  | `CHAR(4)` | Receiving/issuing storage location |
| `ResvnItmRequiredQtyInBaseUnit` |  | |  |  | `QUAN(13)` | Requirement Quantity |
| `ConfdQtyForATPInBaseUoM` |  | |  |  | `QUAN(15)` | Confirmed quantity for availability check in SKU |
| `ReservationItemIsFinallyIssued` |  | |  |  | `CHAR(1)` | Final Issue for Reservation |
| `ReservationItmIsMarkedForDeltn` |  | |  |  | `CHAR(1)` | Item is deleted |
| `ResvnItmRequiredQtyInEntryUnit` |  | |  |  | `QUAN(13)` | Quantity in unit of entry |
| `ResvnItmWithdrawnQtyInBaseUnit` |  | |  |  | `QUAN(13)` | Quantity withdrawn |
| `ResvnItmWithdrawnAmtInCCCrcy` |  | |  |  | `CURR(13)` | Value Withdrawn |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `GoodsRecipientName` |  | |  |  | `CHAR(12)` | Goods Recipient |
| `UnloadingPointName` |  | |  |  | `CHAR(25)` | Unloading Point |
| `ReservationItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `RecipientLocationCode` |  | |  |  | `CHAR(15)` | Recipient location code |
| `OrderID` |  | | `_ReservationDocumentHeader` | `OrderID` | `CHAR(12)` | Order Number |
| `CostCenter` |  | | `_ReservationDocumentHeader` | `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | | `_ReservationDocumentHeader` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ProfitabilitySegment` |  | | `_ReservationDocumentHeader` | `ProfitabilitySegment_2` | `CHAR(10)` | Profitability Segment |
| `ControllingArea` |  | | `_ReservationDocumentHeader` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `WBSElementInternalID` |  | |  | `cast ( _ReservationDocumentHeader.WBSElementInternalID as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `SalesOrder` |  | | `_ReservationDocumentHeader` | `SalesOrder` | `CHAR(10)` | Sales Order Number |
| `SalesOrderItem` |  | | `_ReservationDocumentHeader` | `SalesOrderItem` | `NUMC(6)` | Item Number in Sales Order |
| `SalesOrderScheduleLine` |  | | `_ReservationDocumentHeader` | `SalesOrderScheduleLine` | `NUMC(4)` | Delivery schedule for sales order |
| `AssetNumber` |  | |  | `cast ( _ReservationDocumentHeader.AssetNumber as reservationassetnumber preserving type )` | `CHAR(12)` | Asset Number |
| `AssetSubNumber` |  | |  | `cast ( _ReservationDocumentHeader.AssetSubNumber as reservationassetsubnumber preserving type )` | `CHAR(4)` | Asset Sub-Number |
| `NetworkNumberForAcctAssgmt` |  | | `_ReservationDocumentHeader` | `NetworkNumberForAcctAssgmt` | `CHAR(12)` | Network Number for Account Assignment |
| `ResvnVerificationCompanyCode` |  | | `_ReservationDocumentHeader` | `ResvnVerificationCompanyCode` | `CHAR(4)` | Clearing company code |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReservationDocumentItemExtn` | `E_ReservationDocumentItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESERVATIONDOCUMENTITEMDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESERVATIONDOCUMENTITEMDEX')/$value)*

```abap
//@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Data extraction for Reservation Document'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
                sapObjectNodeType.name : 'ReservationDocument',
                semanticKey: ['Reservation', 'ReservationItem'],
                usageType: {
                             serviceQuality: #D,
                             sizeCategory: #L,
                             dataClass:#TRANSACTIONAL },
                supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_FACT
              }
@VDM: {
        viewType: #CONSUMPTION,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics:{
//  dataCategory: #FACT, // Annotation not required, because no direct usage of view in analytical engine
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping:
      [{ table: 'resb',
         role: #MAIN,
         viewElement: ['Reservation', 'ReservationItem', 'RecordType'],
         tableElement: ['rsnum', 'rspos', 'rsart'] }
      ]
    }
  }
}
define view entity C_ReservationDocumentItemDEX
  as select from I_ReservationDocumentItem

  //Extension
//  association [1..1] to E_ReservationDocument     as _ReservationDocumentExtension on  $projection.Reservation = _ReservationDocumentExtension.Reservation
  association [1..1] to E_ReservationDocumentItem as _ReservationDocumentItemExtn  on  $projection.Reservation     = _ReservationDocumentItemExtn.Reservation
                                                                                   and $projection.ReservationItem = _ReservationDocumentItemExtn.ReservationItem
                                                                                   and $projection.RecordType      = _ReservationDocumentItemExtn.RecordType


{
  key Reservation,
  key ReservationItem,
  key RecordType,
      Plant,
      StorageLocation,
      Product,
      Batch,
      GoodsMovementType,
      cast ( ReservationItemCreationCode as reservationcreationtype preserving type ) as ReservationItemCreationCode,
      MatlCompRequirementDate,
      GoodsMovementIsAllowed,
      BaseUnit,
      GLAccount,
      @Semantics.booleanIndicator: true
      cast ( ResvnAccountIsEnteredManually as resvnglaccenteredmanually preserving type ) as ResvnAccountIsEnteredManually,
      EntryUnit,
      CompanyCodeCurrency,
      IssuingOrReceivingPlant,
      IssuingOrReceivingStorageLoc,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ResvnItmRequiredQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ConfdQtyForATPInBaseUoM,
      ReservationItemIsFinallyIssued,
      ReservationItmIsMarkedForDeltn,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      ResvnItmRequiredQtyInEntryUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ResvnItmWithdrawnQtyInBaseUnit,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      ResvnItmWithdrawnAmtInCCCrcy,
      Supplier,
      GoodsRecipientName,
      UnloadingPointName,
      ReservationItemText,
      RecipientLocationCode,

      // Header fields
      _ReservationDocumentHeader.OrderID,
      _ReservationDocumentHeader.CostCenter,
      _ReservationDocumentHeader.ProfitCenter,
      _ReservationDocumentHeader.ProfitabilitySegment_2                                       as ProfitabilitySegment,
      _ReservationDocumentHeader.ControllingArea,
      cast ( _ReservationDocumentHeader.WBSElementInternalID as ps_s4_pspnr preserving type ) as WBSElementInternalID,
      _ReservationDocumentHeader.SalesOrder,
      _ReservationDocumentHeader.SalesOrderItem,
      _ReservationDocumentHeader.SalesOrderScheduleLine,
      cast ( _ReservationDocumentHeader.AssetNumber as reservationassetnumber preserving type ) as AssetNumber,
      cast ( _ReservationDocumentHeader.AssetSubNumber as reservationassetsubnumber preserving type ) as AssetSubNumber,
      _ReservationDocumentHeader.NetworkNumberForAcctAssgmt,
      _ReservationDocumentHeader.ResvnVerificationCompanyCode
}

where
       RecordType                                         = ''
  and  RequirementType                                    = 'MR'
  and(
       ReservationItemCreationCode                        = 'M'
    or ReservationItemCreationCode                        = 'B'
  )
  and  _ReservationDocumentHeader.ReservationOrigin       = ''
  and(
       _ReservationDocumentHeader.ReservationCreationCode = ''
    or _ReservationDocumentHeader.ReservationCreationCode = '0030'
  )
```
