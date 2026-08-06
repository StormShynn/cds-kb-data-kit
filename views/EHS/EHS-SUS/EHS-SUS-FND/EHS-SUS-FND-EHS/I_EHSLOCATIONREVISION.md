---
name: I_EHSLOCATIONREVISION
description: Environment and Health and Safety Location Revision
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISION')/$value
semantic_en: Environment and Health and Safety Location Revision
tags:
  - EHS
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
  - metadata-only
---
# I_EHSLOCATIONREVISION

**Environment and Health and Safety Location Revision**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONREVISION')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EHSLocationUUID` | `RAW(16)` | Location |
| `RevisionEndDate` | `DATS(8)` | Revision End Date |
| `RevisionStartDate` | `DATS(8)` | Revision Start Date |
| `EHSLocationRevisionUUID` | `RAW(16)` | EHS Location - Revision UUID |
| `CreationDateTime` | `DEC(21)` | Created On |
| `CreatedByUser` | `CHAR(12)` | Created By |
| `LastChangeDateTime` | `DEC(21)` | Last Changed On |
| `LastChangedByUser` | `CHAR(12)` | Last Change By |
| `Latitude` | `DEC(15)` | Geographic Latitude |
| `Longitude` | `DEC(15)` | Geographic Longitude |
| `EHSLocationType` | `CHAR(21)` | Location Type |
| `EHSLocationStatus` | `CHAR(2)` | Location Status |
| `Plant` | `CHAR(4)` | Plant ID |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `OrganizationalUnit` | `NUMC(8)` | Organizational Unit ID |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `EHSLocationAuthorizationGroup` | `CHAR(21)` | Location Authorization Group |
| `Country` | `CHAR(3)` | Country/Region |
| `Region` | `CHAR(3)` | Region |
| `CityName` | `CHAR(40)` | City |
| `StreetName` | `CHAR(60)` | Street Address |
| `PostalCode` | `CHAR(10)` | City Postal Code |
| `EHSLocationPhone` | `CHAR(30)` | Telephone Number |
| `Equipment` | `CHAR(18)` | Equipment |
| `FunctionalLocation` | `CHAR(40)` | Functional Location ID |
