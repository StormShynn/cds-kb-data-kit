---
name: I_SEASONSALESPERIOD_2
description: Season Sales Period
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONSALESPERIOD_2')/$value
semantic_en: Season Sales Period
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-CA-SE-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-CA
  - LO-RFM-CA-SE
  - LO-RFM-CA-SE-2CL
  - lob:cross_application components
  - lob:logistics general
  - metadata-only
---
# I_SEASONSALESPERIOD_2

**Season Sales Period**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-SE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONSALESPERIOD_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ConditionRecord` | `CHAR(10)` | Condition Record Number for Seasons |
| `ProductSeasonYear` | `CHAR(4)` | Season Year |
| `ProductSeason` | `CHAR(10)` | Season |
| `ProductCollection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` | `CHAR(10)` | Fashion Theme |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Country` | `CHAR(3)` | Country/Region Key |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `SoldToParty` | `CHAR(10)` | Customer Number |
| `DeliveryStartDate` | `DATS(8)` | Delivery Date From |
| `DeliveryEndDate` | `DATS(8)` | Delivery Date To |
| `OrderStartDate` | `DATS(8)` | Order Date From |
| `OrderEndDate` | `DATS(8)` | Order Date To |
| `CreatedByUser` | `CHAR(12)` | User Who Created the Object |
| `CreationDate` | `DATS(8)` | Date on Which the Object Was Created |
| `CreationTime` | `TIMS(6)` | Time at Which the Object Was Created |
| `LastChangedByUser` | `CHAR(12)` | Last User to Change the Object |
| `LastChangeDate` | `DATS(8)` | Date on Which the Object Was Last Changed |
| `LastChangeTime` | `TIMS(6)` | Time at Which the Object Was Last Changed |
| `SeasonInternalIdentifier` | `RAW(16)` | Season Internal Unique Identifier |
| `SeasonSalesPeriodUUID` | `RAW(16)` | Unique Identifier of the Season Sales Periods |
| `SeasonPeriodType` | `CHAR(2)` | Season period type like sales or stock tranfer |
