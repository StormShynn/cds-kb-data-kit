---
name: C_FUNCTIONALLOCATIONDEX
description: Functional Location Data
app_component: PM-EQM-FL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNCTIONALLOCATIONDEX')/$value
semantic_en: Functional Location Data
tags:
  - PM
  - component:PM-EQM-FL-2CL
  - consumption-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-FL
  - PM-EQM-FL-2CL
  - metadata-only
---
# C_FUNCTIONALLOCATIONDEX

**Functional Location Data**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNCTIONALLOCATIONDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FunctionalLocation` | `CHAR(30)` | Functional Location |
| `MaintObjectLocAcctAssgmtNmbr` | `CHAR(12)` | Location and account assignment for technical object |
| `ABCIndicator` | `CHAR(1)` | ABC Indicator for Technical Object |
| `AddressID` | `CHAR(10)` | Address Number |
| `MasterFixedAsset` | `CHAR(12)` | Main Asset Number |
| `ConstructionMaterial` | `CHAR(40)` | Construction type material of the object |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `OperationStartDate` | `DATS(8)` | Start-up Date of the Technical Object |
| `TechnicalObjectType` | `CHAR(10)` | Type of Technical Object |
| `AssetLocation` | `CHAR(10)` | Location of maintenance object |
| `MaintenancePlant` | `CHAR(4)` | Maintenance Plant |
| `AssetRoom` | `CHAR(8)` | Room |
| `MaintenancePlanningPlant` | `CHAR(4)` | Maintenance Planning Plant |
| `PlantSection` | `CHAR(3)` | Plant Section |
| `MaintenancePlannerGroup` | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `FunctionalLocationCategory` | `CHAR(1)` | Functional location category |
| `MainWorkCenter` | `CHAR(8)` | Main work center for maintenance tasks |
| `MainWorkCenterPlant` | `CHAR(4)` | Plant |
| `SettlementOrder` | `CHAR(12)` | Settlement order |
| `WorkCenter` | `CHAR(8)` | Work Center |
| `WorkCenterPlant` | `CHAR(4)` | Plant |
| `MainWorkCenterInternalID` | `NUMC(8)` | Object ID of the Work Center |
| `WorkCenterInternalID` | `NUMC(8)` | Object ID of PP work center |
| `WorkCenterTypeCode` | `CHAR(2)` | Object types of the CIM resource |
| `SuperiorFunctionalLocation` | `CHAR(30)` | Functional Location |
| `CreationDate` | `DATS(8)` | Date on which the object was created |
| `LastChangeDate` | `DATS(8)` | Date on which the object was last changed |
| `AuthorizationGroup` | `CHAR(4)` | Technical Object Authorization Group |
| `LastChangeDateTime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `FunctionalLocationEndOfUseDate` | `DATS(8)` | End-of-Use Date of the Technical Object |
| `MaintObjectInternalID` | `CHAR(22)` | Object Number |
| `FuncnlLocIsMarkedForDeletion` | `CHAR(1)` | Object is deleted |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `LinearDataStartPoint` | `CHAR(18)` | Start Point |
| `LinearDataEndPoint` | `CHAR(18)` | End Point |
| `LinearDataLength` | `FLTP(16)` | Length in SI Unit |
| `LinearDataUnitOfMeasure` | `UNIT(3)` | Unit of Measurement for Linear Data |
