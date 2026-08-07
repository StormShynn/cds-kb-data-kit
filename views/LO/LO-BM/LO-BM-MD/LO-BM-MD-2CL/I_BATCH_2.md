---
name: I_BATCH_2
description: Batch Information by Batch Key
app_component: LO-BM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCH_2')/$value
semantic_en: Batch Information by Batch Key
tags:
  - LO
  - component:LO-BM-MD-2CL
  - interface-view
  - LO-BM
  - LO-BM-MD
  - LO-BM-MD-2CL
  - lob:logistics general
  - metadata-only
---
# I_BATCH_2

**Batch Information by Batch Key**

| Property | Value |
|---|---|
| App Component | `LO-BM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BATCH_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `BatchIdentifyingPlant` |  | |  |  | `CHAR(4)` | Plant |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `BatchIsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Deletion Flag for All Data in a Batch |
| `MatlBatchIsInRstrcdUseStock` |  | |  |  | `CHAR(1)` | Batch in Restricted-Use Stock |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `BatchBySupplier` |  | |  |  | `CHAR(15)` | Supplier Batch Number |
| `CountryOfOrigin` |  | |  |  | `CHAR(3)` | Country/Region of Origin of Material (Non-Preferential Ori.) |
| `RegionOfOrigin` |  | |  |  | `CHAR(3)` | Region of Origin of Material (Non-Preferential Origin) |
| `MatlBatchAvailabilityDate` |  | |  |  | `DATS(8)` | Availability date |
| `ShelfLifeExpirationDate` |  | |  |  | `DATS(8)` | Shelf Life Expiration or Best-Before Date |
| `ManufactureDate` |  | |  |  | `DATS(8)` | Date of Manufacture |
| `NextInspectionDate` |  | |  |  | `DATS(8)` | Next Inspection Date |
| `LastGoodsReceiptDate` |  | |  |  | `DATS(8)` | Date of last goods receipt |
| `FreeDefinedDate1` |  | |  |  | `DATS(8)` | Date for Free Use 1 |
| `FreeDefinedDate2` |  | |  |  | `DATS(8)` | Date for Free Use 2 |
| `FreeDefinedDate3` |  | |  |  | `DATS(8)` | Date for Free Use 3 |
| `FreeDefinedDate4` |  | |  |  | `DATS(8)` | Date for Free Use 4 |
| `FreeDefinedDate5` |  | |  |  | `DATS(8)` | Date for Free Use 5 |
| `FreeDefinedDate6` |  | |  |  | `DATS(8)` | Date for Free Use 6 |
| `DefinitionOfBatchLevel` |  | |  |  | `CHAR(1)` | Indicator: definition of batch management level |
| `BatchCertificationDate` |  | |  |  | `DATS(8)` | Date of Certification |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On Timestamp |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Change Timestamp |
| `ClfnObjectInternalID` |  | |  |  | `NUMC(18)` | Internal object no.: Batch classification |
| `BatchExtWhseMgmtInternalId` |  | |  |  | `RAW(16)` | Batch ID |
| `StockSegment` |  | |  |  | `CHAR(40)` | Stock Segment |
| `ExportAndImportProductGroup` |  | |  |  | `CHAR(4)` | Material Group for Intrastat |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
