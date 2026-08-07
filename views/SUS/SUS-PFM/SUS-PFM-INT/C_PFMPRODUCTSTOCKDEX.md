---
name: C_PFMPRODUCTSTOCKDEX
description: "This CDS view is used by Product Footprint Management for the data extraction of stock inventory. This view provides the necessary detail data based on stock inventory."
app_component: SUS-PFM-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PFMPRODUCTSTOCKDEX')/$value
semantic_en: "This CDS view is used by Product Footprint Management for the data extraction of stock inventory. This view provides the necessary detail data based on stock inventory."
tags:
  - SUS
  - bo:inventory
  - component:SUS-PFM-INT
  - consumption-view
  - inventory
  - product
  - stock
  - SUS-PFM
  - SUS-PFM-INT
  - metadata-only
---
# C_PFMPRODUCTSTOCKDEX

**This CDS view is used by Product Footprint Management for the data extraction of stock inventory. This view provides the necessary detail data based on stock inventory.**

| Property | Value |
|---|---|
| App Component | `SUS-PFM-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PFMPRODUCTSTOCKDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentKey1` |  | |  |  | `RAW(4)` | Key field 1 |
| `MaterialDocumentKey2` |  | |  |  | `RAW(4)` | Key field 2 |
| `MaterialDocumentKey3` |  | |  |  | `RAW(5)` | Key field 3 |
| `MaterialDocumentKey4` |  | |  |  | `RAW(1)` | Key field 4 |
| `MaterialDocumentKey5` |  | |  |  | `RAW(1)` | Key field 5 |
| `MaterialDocumentKey6` |  | |  |  | `RAW(1)` | Key field 6 |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Material` |  | |  |  | `CHAR(40)` | Material for Stock Mamangement |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location (Stock Identifier) |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier for Special Stock |
| `Customer` |  | |  |  | `CHAR(10)` | Customer for Special Stock |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Month (1 - 12) |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialType` |  | |  |  | `CHAR(4)` | Material Type |
| `MatlWrhsStkQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` | Stock Quantity |
