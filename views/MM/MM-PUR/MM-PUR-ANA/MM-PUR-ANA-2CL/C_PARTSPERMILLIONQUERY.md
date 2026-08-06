---
name: C_PARTSPERMILLIONQUERY
description: Parts Per Million Query View
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PARTSPERMILLIONQUERY')/$value
semantic_en: Parts Per Million Query View
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - metadata-only
---
# C_PARTSPERMILLIONQUERY

**Parts Per Million Query View**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PARTSPERMILLIONQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `MaterialDocument` | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentItem` | `NUMC(4)` | Material Document Item |
| `MaterialDocumentYear` | `NUMC(4)` | Material Document Year |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchasing Document |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `Material` | `CHAR(40)` | Material Number |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `Plant` | `CHAR(4)` | Plant |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `Country` | `CHAR(3)` | Country/Region Key |
| `PurchasingCategory` | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` | `CHAR(60)` | Name of Purchasing Category |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `OrderQuantityUnit` | `UNIT(3)` | Purchase Order Unit of Measure |
| `GoodsMovementType` | `CHAR(3)` | Movement Type (Inventory Management) |
| `PostingDate` | `DATS(8)` | Posting Date in the Document |
| `GoodsReceiptQtyInOrderUnit` | `QUAN(13)` | Goods Reciepts Quantity in Order Unit |
| `NotificationComplaintQuantity` | `QUAN(13)` | Complaint Quantity |
| `NmbrOfReturnedPartsSecondMsr` | `DEC(13)` |  |
| `NmbrOfReturnedPartsMainMeasure` | `DEC(13)` |  |
| `NmbrOfReceivedPartsMainMeasure` | `DEC(13)` |  |
| `RjctdGdsRatioFor2ndMsrInPPM` | `DEC(15)` | Parts Per Million |
| `RejectedGoodsRatioInPPM` | `DEC(15)` | Parts Per Million |
