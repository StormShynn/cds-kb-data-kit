---
name: C_RESERVATIONDOCUMENTITEMDEX
description: Data extraction for Reservation Document
app_component: MM-IM-VDM-RSV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESERVATIONDOCUMENTITEMDEX')/$value
semantic_en: Data extraction for Reservation Document
keywords:
  - Data extraction for Reservation Document
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
  - metadata-only
---
# C_RESERVATIONDOCUMENTITEMDEX

**Data extraction for Reservation Document**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-RSV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESERVATIONDOCUMENTITEMDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Reservation` | `NUMC(10)` | Number of reservation/dependent requirements |
| `ReservationItem` | `NUMC(4)` | Item Number of Reservation / Dependent Requirements |
| `RecordType` | `CHAR(1)` | Record type |
| `Plant` | `CHAR(4)` | Plant |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `Product` | `CHAR(40)` | Material Number |
| `Batch` | `CHAR(10)` | Batch Number |
| `GoodsMovementType` | `CHAR(3)` | Movement Type (Inventory Management) |
| `ReservationItemCreationCode` | `CHAR(1)` | Reservation Creation Type |
| `MatlCompRequirementDate` | `DATS(8)` | Requirements date for the component |
| `GoodsMovementIsAllowed` | `CHAR(1)` | Goods Movement for Reservation Allowed |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `GLAccount` | `CHAR(10)` | G/L Account Number |
| `ResvnAccountIsEnteredManually` | `CHAR(1)` | GL Account Entered Manually |
| `EntryUnit` | `UNIT(3)` | Unit of entry |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
| `IssuingOrReceivingPlant` | `CHAR(4)` | Receiving plant/issuing plant |
| `IssuingOrReceivingStorageLoc` | `CHAR(4)` | Receiving/issuing storage location |
| `ResvnItmRequiredQtyInBaseUnit` | `QUAN(13)` | Requirement Quantity |
| `ConfdQtyForATPInBaseUoM` | `QUAN(15)` | Confirmed quantity for availability check in SKU |
| `ReservationItemIsFinallyIssued` | `CHAR(1)` | Final Issue for Reservation |
| `ReservationItmIsMarkedForDeltn` | `CHAR(1)` | Item is deleted |
| `ResvnItmRequiredQtyInEntryUnit` | `QUAN(13)` | Quantity in unit of entry |
| `ResvnItmWithdrawnQtyInBaseUnit` | `QUAN(13)` | Quantity withdrawn |
| `ResvnItmWithdrawnAmtInCCCrcy` | `CURR(13)` | Value Withdrawn |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `GoodsRecipientName` | `CHAR(12)` | Goods Recipient |
| `UnloadingPointName` | `CHAR(25)` | Unloading Point |
| `ReservationItemText` | `CHAR(50)` | Item Text |
| `RecipientLocationCode` | `CHAR(15)` | Recipient location code |
| `OrderID` | `CHAR(12)` | Order Number |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ProfitabilitySegment` | `CHAR(10)` | Profitability Segment |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `SalesOrder` | `CHAR(10)` | Sales Order Number |
| `SalesOrderItem` | `NUMC(6)` | Item Number in Sales Order |
| `SalesOrderScheduleLine` | `NUMC(4)` | Delivery schedule for sales order |
| `AssetNumber` | `CHAR(12)` | Asset Number |
| `AssetSubNumber` | `CHAR(4)` | Asset Sub-Number |
| `NetworkNumberForAcctAssgmt` | `CHAR(12)` | Network Number for Account Assignment |
| `ResvnVerificationCompanyCode` | `CHAR(4)` | Clearing company code |
