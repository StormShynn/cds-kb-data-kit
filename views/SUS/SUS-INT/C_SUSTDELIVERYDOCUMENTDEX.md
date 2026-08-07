---
name: C_SUSTDELIVERYDOCUMENTDEX
description: Delivery Documents Extractor
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTDELIVERYDOCUMENTDEX')/$value
semantic_en: Delivery Documents Extractor
tags:
  - SUS
  - component:SUS-INT
  - consumption-view
  - delivery
  - document
  - SUS-INT
  - metadata-only
---
# C_SUSTDELIVERYDOCUMENTDEX

**Delivery Documents Extractor**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTDELIVERYDOCUMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentType` |  | |  |  | `CHAR(4)` | Delivery Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `ShipToPartyAddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `ShipToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `ShipToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `SoldToPartyAddressID` |  | |  |  | `CHAR(10)` | Address |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ActualGoodsMovementDate` |  | |  |  | `DATS(8)` | Actual Goods Movement Date |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `OverallSDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `OverallGoodsMovementStatus` |  | |  |  | `CHAR(1)` | Goods Movement Status (All Items) |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Entry time |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `DeletionIndicator` |  | |  |  | `CHAR(1)` | Document deletion indicator |
