---
name: C_EQUIPMENTDATADEX
description: Equipment DEX
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EQUIPMENTDATADEX')/$value
semantic_en: Equipment DEX
tags:
  - PM
  - component:PM-EQM-EQ-2CL
  - consumption-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
  - metadata-only
---
# C_EQUIPMENTDATADEX

**Equipment DEX**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EQUIPMENTDATADEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid To Date |
| `EquipUsagePeriodSequenceNumber` |  | |  |  | `NUMC(3)` | Consecutive numbering of EquipUsagePeriods on same day |
| `ABCIndicator` |  | |  |  | `CHAR(1)` | ABC Indicator for Technical Object |
| `AcquisitionValue` |  | |  |  | `CURR(13)` | Acquisition Value |
| `AddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Main Asset Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `OperationStartDate` |  | |  |  | `DATS(8)` | Start-up Date of the Technical Object |
| `TechnicalObjectType` |  | |  |  | `CHAR(10)` | Type of Technical Object |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `InventoryNumber` |  | |  |  | `CHAR(25)` | Inventory number |
| `AssetLocation` |  | |  |  | `CHAR(10)` | Location of maintenance object |
| `MaintenancePlant` |  | |  |  | `CHAR(4)` | Maintenance Plant |
| `AssetRoom` |  | |  |  | `CHAR(8)` | Room |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `PlantSection` |  | |  |  | `CHAR(3)` | Plant Section |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `EquipmentCategory` |  | |  |  | `CHAR(1)` | Equipment category |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `MainWorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the Work Center |
| `MainWorkCenter` |  | |  |  | `CHAR(8)` | Main work center for maintenance tasks |
| `MainWorkCenterPlant` |  | |  |  | `CHAR(4)` | Plant associated with main work center |
| `SettlementOrder` |  | |  |  | `CHAR(12)` | Settlement order |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of PP work center |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `WorkCenterPlant` |  | |  |  | `CHAR(4)` | Plant |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EquipmentIsMarkedForDeletion` |  | |  |  | `CHAR(1)` | Object is deleted |
| `NextEquipUsagePeriodSqncNmbr` |  | |  |  | `NUMC(3)` | Number of next EquipUsagePeriod on same day |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  | `CHAR(12)` | Location and account assignment for technical object |
| `WorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object Type of CIM Resources for Work Center |
| `CatalogProfile` |  | |  |  | `CHAR(9)` | Catalog Profile |
| `SuperordinateEquipment` |  | |  |  | `CHAR(18)` | Superordinate Equipment |
| `TechnicalObjectSortCode` |  | |  |  | `CHAR(25)` | Technical identification number |
| `ConstructionMaterial` |  | |  |  | `CHAR(40)` | Construction type material of the object |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndTime` |  | |  |  | `TIMS(6)` | Equipment usage period time stamp |
| `EquipmentManufacturerPrtNmbr` |  | |  |  | `CHAR(30)` | Manufacturer part number |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `AssetManufacturerName` |  | |  |  | `CHAR(30)` | Manufacturer of Asset |
| `ManufacturerPartTypeName` |  | |  |  | `CHAR(20)` | Manufacturer model number |
| `ManufacturerCountry` |  | |  |  | `CHAR(3)` | Country/Region of Manufacture |
| `ConstructionYear` |  | |  |  | `CHAR(4)` | Year of construction |
| `ConstructionMonth` |  | |  |  | `CHAR(2)` | Month of construction |
| `AcquisitionDate` |  | |  |  | `DATS(8)` | Acquisition date |
| `MaintObjectInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer to Whom Serial Number was Delivered |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Technical Object Authorization Group |
| `GrossWeight` |  | |  |  | `QUAN(13)` | Weight of object |
| `GrossWeightUnit` |  | |  |  | `UNIT(3)` | Unit of weight |
| `SizeOrDimensionText` |  | |  |  | `CHAR(18)` | Size/dimension |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Vendor number |
| `EquipmentEndOfUseDate` |  | |  |  | `DATS(8)` | End-of-Use Date of the Technical Object |
| `MaintObjectFreeDefinedAttrib` |  | |  |  | `CHAR(30)` | Sort Field |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `LinearDataStartPoint` |  | |  |  | `CHAR(18)` | Start Point |
| `LinearDataEndPoint` |  | |  |  | `CHAR(18)` | End Point |
| `LinearDataLength` |  | |  |  | `FLTP(16)` | Length in SI Unit |
| `LinearDataUnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measurement for Linear Data |
