---
name: I_COLLATERALREALESTATEMASTER
description: "Collateral Real Estate Object Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEMASTER')/$value
semantic_en: "Collateral Real Estate Object Details"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLATERALREALESTATEMASTER

**Collateral Real Estate Object Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEMASTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRealEstateUUID` |  | |  |  | `RAW(16)` | GUID for Real Estate Object |
| `CollateralRealEstateIdentifier` |  | |  |  | `CHAR(20)` | Object ID |
| `CollateralRealEstateType` |  | |  |  | `CHAR(6)` | Real Estate Object Type ID |
| `CollateralRealEstateAddressID` |  | |  |  | `CHAR(10)` | Address ID |
| `ColltrlRealEstateDescription` |  | |  |  | `CHAR(30)` | Description of the Real Estate Object |
| `CollateralRealEstateParentUUID` |  | |  |  | `RAW(16)` | GUID for Real Estate Object |
| `ColltrlREExtReferenceNumber` |  | |  |  | `CHAR(32)` | External reference Number of an External System |
| `ColltrlREFixtureFittingType` |  | |  |  | `CHAR(6)` | Fixtures and Fittings Type ID |
| `CollateralRealEstateAreaUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Area |
| `CollateralRealEstateVolumeUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Volume of Real Estate |
| `ColltrlREObjectCurrency` |  | |  |  | `CUKY(5)` | Object Currency |
| `ColltrlRealEstateMacroLocation` |  | |  |  | `CHAR(6)` | Macro Location |
| `ColltrlRealEstateMicroLocation` |  | |  |  | `CHAR(6)` | Micro Location |
| `ColltrlRETransptConncn` |  | |  |  | `CHAR(6)` | Transport Connection |
| `ColltrlREEnvironmentalStatus` |  | |  |  | `CHAR(6)` | Enviromental Status |
| `ColltrlRealEstateIsFloodZone` |  | |  |  | `CHAR(1)` | Indicator for Flood Zone |
| `ColltrlREIsEarthquakeZone` |  | |  |  | `CHAR(1)` | Indicator : Eathquake Zone |
| `ColltrlREIsArchlConsvnArea` |  | |  |  | `CHAR(1)` | Indicator for Architectural Conservation Area |
| `ColltrlREIsHistoricalSite` |  | |  |  | `CHAR(1)` | Indicator for Historical Site |
| `ColltrlREHasFctrsImprngVal` |  | |  |  | `CHAR(1)` | Indicates existence of Factors Impairing Real Estate Value |
| `ColltrlREFctrsImprngValDesc` |  | |  |  | `CHAR(30)` | Description of the value imparing factor |
| `CollateralAdminOrgUnit` |  | |  |  | `CHAR(12)` | Administration Organizational Unit |
| `CollateralBankArea` |  | |  |  | `CHAR(4)` | Bank Area in Collateral Management |
| `CollateralRealEstateEnteredBy` |  | |  |  | `CHAR(12)` | Real Estate Add-On User |
| `ColltrlRealEstateEnteredDate` |  | |  |  | `DATS(8)` | Created On |
| `ColltrlRealEstateEnteredTime` |  | |  |  | `TIMS(6)` | Created At |
| `ColltrlRealEstateEnteredSource` |  | |  |  | `CHAR(32)` | Sorce of Initial entry |
| `ColltrlRealEstateLastChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `ColltrlRELastChangedDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `ColltrlRELastChangedTime` |  | |  |  | `TIMS(6)` | Last Changed At |
| `ColltrlRELastChangedSource` |  | |  |  | `CHAR(32)` | Processing Source |
