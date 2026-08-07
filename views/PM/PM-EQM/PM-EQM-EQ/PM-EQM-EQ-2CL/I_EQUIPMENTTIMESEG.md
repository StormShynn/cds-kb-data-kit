---
name: I_EQUIPMENTTIMESEG
description: "Equipment Time Segment"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTTIMESEG')/$value
semantic_en: "Equipment Time Segment"
tags:
  - PM
  - component:PM-EQM-EQ-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
  - metadata-only
---
# I_EQUIPMENTTIMESEG

**Equipment Time Segment**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTTIMESEG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `EquipUsagePeriodSequenceNumber` |  | |  |  | `NUMC(3)` | Consecutive numbering of EquipUsagePeriods on same day |
| `ValidityEndTime` |  | |  |  | `TIMS(6)` | Equipment usage period time stamp |
| `NextEquipUsagePeriodSqncNmbr` |  | |  |  | `NUMC(3)` | Number of next EquipUsagePeriod on same day |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  | `CHAR(12)` | Location and account assignment for technical object |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the Work Center |
| `WorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object Type of CIM Resources for Work Center |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `CatalogProfile` |  | |  |  | `CHAR(9)` | Catalog Profile |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `SuperordinateEquipment` |  | |  |  | `CHAR(18)` | Superordinate Equipment |
| `EquipInstallationPositionNmbr` |  | |  |  | `CHAR(4)` | Equipment position at InstallLoc (Superior Equip./FunctLoc) |
| `TechnicalObjectSortCode` |  | |  |  | `CHAR(25)` | Technical identification number |
| `ConstructionMaterial` |  | |  |  | `CHAR(40)` | Construction type material of the object |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `ManufacturerPartNmbr` |  | |  |  | `CHAR(30)` | Manufacturer part number |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
