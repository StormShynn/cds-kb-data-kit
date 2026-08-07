---
name: I_SEASONSTOCKTRANSFERPERIOD
description: Season Stock Transfer Period
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONSTOCKTRANSFERPERIOD')/$value
semantic_en: Season Stock Transfer Period
tags:
  - LO
  - bo:inventory
  - component:LO-RFM-CA-SE-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-CA
  - LO-RFM-CA-SE
  - LO-RFM-CA-SE-2CL
  - lob:cross_application components
  - lob:logistics general
  - stock
  - metadata-only
---
# I_SEASONSTOCKTRANSFERPERIOD

**Season Stock Transfer Period**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-SE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONSTOCKTRANSFERPERIOD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionRecord` |  | |  |  | `CHAR(10)` | Condition Record Number for Seasons |
| `ProductSeasonYear` |  | |  |  | `CHAR(4)` | Season Year |
| `ProductSeason` |  | |  |  | `CHAR(10)` | Season |
| `ProductCollection` |  | |  |  | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | |  |  | `CHAR(10)` | Fashion Theme |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `DeliveryStartDate` |  | |  |  | `DATS(8)` | Delivery Date From |
| `DeliveryEndDate` |  | |  |  | `DATS(8)` | Delivery Date To |
| `OrderStartDate` |  | |  |  | `DATS(8)` | Order Date From |
| `OrderEndDate` |  | |  |  | `DATS(8)` | Order Date To |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Who Created the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on Which the Object Was Created |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which the Object Was Created |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last User to Change the Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date on Which the Object Was Last Changed |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time at Which the Object Was Last Changed |
| `SupplyingPlant` |  | |  |  | `CHAR(4)` | Plant |
| `SeasonInternalIdentifier` |  | |  |  | `RAW(16)` | Season Internal Unique Identifier |
| `SeasonSalesPeriodUUID` |  | |  |  | `RAW(16)` | Unique Identifier of the Season Sales Periods |
| `SeasonPeriodType` |  | |  |  | `CHAR(2)` | Season period type like sales or stock tranfer |
