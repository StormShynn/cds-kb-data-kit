---
name: I_TIMEDEPENDENTSTOCKLEVEL
description: Time Dependent Stock Level
app_component: PP-DD-BLM-BAS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TIMEDEPENDENTSTOCKLEVEL')/$value
semantic_en: Time Dependent Stock Level
tags:
  - PP
  - bo:inventory
  - component:PP-DD-BLM-BAS-2CL
  - interface-view
  - lob:manufacturing
  - PP-DD
  - PP-DD-BLM
  - PP-DD-BLM-BAS
  - PP-DD-BLM-BAS-2CL
  - stock
  - metadata-only
---
# I_TIMEDEPENDENTSTOCKLEVEL

**Time Dependent Stock Level**

| Property | Value |
|---|---|
| App Component | `PP-DD-BLM-BAS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TIMEDEPENDENTSTOCKLEVEL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `MRPArea` |  | |  |  | `CHAR(10)` | MRP Area |
| `StockLevelValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `StockLevelValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date |
| `ProductSafetyStockLvlQuantity` |  | |  |  | `QUAN(13)` | Safety Stock |
| `ReorderThresholdQuantity` |  | |  |  | `QUAN(13)` | Reorder Point |
| `ProductMaxStockLevelQuantity` |  | |  |  | `QUAN(13)` | Maximum Stock Level |
| `ProductTargetStockLvlQuantity` |  | |  |  | `QUAN(13)` | Target Stock Level |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `TargetSupplyDurationInDays` |  | |  |  | `DEC(6)` | Target Days of Supply in Workdays |
| `MaxSupplyDurationInDays` |  | |  |  | `DEC(6)` | Maximum Days of Supply in Workdays |
| `SafetySupplyDurationInDays` |  | |  |  | `DEC(6)` | Safety Days of Supply in Workdays |
| `ChangeMode` |  | |  |  | `CHAR(1)` | Mode of change |
| `StockLevelProposalID` |  | |  |  | `CHAR(75)` | Proposal Id |
| `ProposalVersion` |  | |  |  | `NUMC(8)` | Proposal Version |
| `ProposalStartDate` |  | |  |  | `DATS(8)` | Proposal Validity From Date |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `CreationDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
