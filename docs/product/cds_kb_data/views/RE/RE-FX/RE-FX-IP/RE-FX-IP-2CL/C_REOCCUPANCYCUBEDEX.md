---
name: C_REOCCUPANCYCUBEDEX
description: "Real Estate Occupancy for Data Extraction"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REOCCUPANCYCUBEDEX')/$value
semantic_en: "Real Estate Occupancy for Data Extraction"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - consumption-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
  - metadata-only
---
# C_REOCCUPANCYCUBEDEX

**Real Estate Occupancy for Data Extraction**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_REOCCUPANCYCUBEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REIntegObjectInternalNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `REInternalNumberForOccupancy` |  | |  |  | `CHAR(13)` |  |
| `REInternalNumberForUseEnable` |  | |  |  | `CHAR(13)` |  |
| `REMeasurementType` |  | |  |  | `CHAR(4)` | Measurement Type |
| `ValidityEndDate` |  | |  |  | `DATS(8)` |  |
| `ValidityStartDate` |  | |  |  | `DATS(8)` |  |
| `ValidityStartEndDateValue` |  | |  |  | `CHAR(16)` | Date from to (RAP Key) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `REIntegrationObjectNumber` |  | |  |  | `CHAR(20)` | Integration Object Number of Space |
| `RealEstateExternalID` |  | |  |  | `CHAR(45)` | Integration Object Space - External Identification |
| `REIntegrationObjectName` |  | |  |  | `CHAR(30)` | Object Name (Short) |
| `REIntegObjectLongName` |  | |  |  | `CHAR(250)` | Object Name (Long) |
| `REIntegrationObjectOccpcyName` |  | |  |  | `CHAR(30)` | Object Name (Short) |
| `REInternalNumberForSite` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `REInternalNumberForBuilding` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `REInternalNumberForLand` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `REInternalNumberForFloor` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `RealEstateExternalIDSite` |  | |  |  | `CHAR(45)` | Integration Object Site - External Identification |
| `RealEstateExternalIDBldng` |  | |  |  | `CHAR(45)` | Integration Object Building - External Identification |
| `RealEstateExternalIDLand` |  | |  |  | `CHAR(45)` | Integration Object Site - External Identification |
| `RealEstateExternalIDFloor` |  | |  |  | `CHAR(45)` | Integration Object Floor - External Identification |
| `REIntegrationObjectNumberSite` |  | |  |  | `CHAR(20)` | Integration Object Number of Site |
| `REIntegrationObjectNumberBldng` |  | |  |  | `CHAR(20)` | Integration Object Number of Building |
| `REIntegrationObjectNumberLand` |  | |  |  | `CHAR(20)` | Integration Object Number of Land |
| `REIntegrationObjectNumberFloor` |  | |  |  | `CHAR(20)` | Integration Object Number of Floor |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `REAuthorizationGroup` |  | |  |  | `CHAR(40)` | Authorization Group |
| `REIntegrationObjectType` |  | |  |  | `CHAR(4)` | Object Type |
| `REIntegObjectUsageClfn` |  | |  |  | `CHAR(1)` | Usage Classification |
| `REIntegObjectUsageType` |  | |  |  | `CHAR(4)` | Object Usage Type |
| `RESpaceGrpEnableUseType` |  | |  |  | `CHAR(4)` | Usage Enablement Type |
| `REIntegObjSpaceGroupType` |  | |  |  | `CHAR(4)` | Group Type |
| `RESpaceGroupUsageType` |  | |  |  | `CHAR(4)` | Group Usage Type |
| `REIntegrationObjectIsGrouped` |  | |  |  | `CHAR(1)` | Integration Object: Is Grouped |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REIntegrationObjectIsOccupied` |  | |  |  | `CHAR(1)` | Integration Object: Is Active |
| `REContractIsActive` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
| `REMeasurementUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `REMeasurementQuantity` |  | |  |  | `QUAN(17)` |  |
