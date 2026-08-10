---
name: I_EQUIPMENTTIMESEG
description: "This CDS view is designed to provide detailed information about equipment time segments, including their validity periods, associated work centers, maintenance planning details, and related technical and construction materials. It serves as a foundational data source for analyzing equipment usage and planning maintenance activities. This CDS view provides the data to answer the following business questions: What are the validity periods for specific equipment usage segments? Which work centers are associated with particular equipment during specific time segments? What are the maintenance planning details for equipment during its usage periods? How is equipment hierarchically structured, including superordinate equipment relationships? What construction materials are associated with specific equipment segments? What are the technical object sort codes and manufacturer part numbers for equipment during specific periods? How can changes in equipment time segments be tracked over time? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTTIMESEG')/$value
semantic_en: "This CDS view is designed to provide detailed information about equipment time segments, including their validity periods, associated work centers, maintenance planning details, and related technical and construction materials. It serves as a foundational data source for analyzing equipment usage and planning maintenance activities. This CDS view provides the data to answer the following business questions: What are the validity periods for specific equipment usage segments? Which work centers are associated with particular equipment during specific time segments? What are the maintenance planning details for equipment during its usage periods? How is equipment hierarchically structured, including superordinate equipment relationships? What construction materials are associated with specific equipment segments? What are the technical object sort codes and manufacturer part numbers for equipment during specific periods? How can changes in equipment time segments be tracked over time? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - PM
  - bo:companycode
  - component:PM-EQM-EQ-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - material
  - plan
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
  - metadata-only
---
# I_EQUIPMENTTIMESEG

**This CDS view is designed to provide detailed information about equipment time segments, including their validity periods, associated work centers, maintenance planning details, and related technical and construction materials. It serves as a foundational data source for analyzing equipment usage and planning maintenance activities. This CDS view provides the data to answer the following business questions: What are the validity periods for specific equipment usage segments? Which work centers are associated with particular equipment during specific time segments? What are the maintenance planning details for equipment during its usage periods? How is equipment hierarchically structured, including superordinate equipment relationships? What construction materials are associated with specific equipment segments? What are the technical object sort codes and manufacturer part numbers for equipment during specific periods? How can changes in equipment time segments be tracked over time? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
