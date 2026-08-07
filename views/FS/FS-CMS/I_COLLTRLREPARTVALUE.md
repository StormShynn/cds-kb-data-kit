---
name: I_COLLTRLREPARTVALUE
description: Value Details for Collateral RE Part
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTVALUE')/$value
semantic_en: Value Details for Collateral RE Part
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLTRLREPARTVALUE

**Value Details for Collateral RE Part**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTVALUE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlRealEstatePartValueUUID` |  | |  |  | `RAW(16)` | GUID for part value |
| `CollateralRealEstatePartUUID` |  | |  |  | `RAW(16)` | GUID for Object part |
| `CollateralRealEstatePartID` |  | |  |  | `NUMC(10)` | Part ID for the Object |
| `CollateralRealEstateValueType` |  | |  |  | `CHAR(10)` | Value Calculation Method |
| `ColltrlREValueCalculatedAmount` |  | |  |  | `CURR(17)` | Calculated Value |
| `ColltrlREValCalculatedCurrency` |  | |  |  | `CUKY(5)` | Calculated value Currency |
| `ColltrlREValueEnteredAmount` |  | |  |  | `CURR(17)` | Entered Value |
| `ColltrlREValueEnteredCurrency` |  | |  |  | `CUKY(5)` | Entered value Currency |
| `ColltrlREValueValidFromDate` |  | |  |  | `DATS(8)` | Date from which Real Estate Value stands Valid |
| `ColltrlREValueValidToDate` |  | |  |  | `DATS(8)` | Date unitl which Real Estate Value stands Valid |
| `ColltrlRealEstateValuationDate` |  | |  |  | `DATS(8)` | Date on which Real Estate Valuation was Performed |
| `ColltrlRealEstateValueOrigin` |  | |  |  | `CHAR(6)` | Origin of Value |
| `CollateralRealEstateEnteredBy` |  | |  |  | `CHAR(12)` | Real Estate Add-On User |
| `ColltrlRealEstateEnteredDate` |  | |  |  | `DATS(8)` | Created On |
| `ColltrlRealEstateEnteredTime` |  | |  |  | `TIMS(6)` | Created At |
| `ColltrlRealEstateLastChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `ColltrlRELastChangedDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `ColltrlRELastChangedTime` |  | |  |  | `TIMS(6)` | Last Changed At |
