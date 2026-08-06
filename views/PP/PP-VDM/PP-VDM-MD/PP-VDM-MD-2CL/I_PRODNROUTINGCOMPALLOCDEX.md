---
name: I_PRODNROUTINGCOMPALLOCDEX
description: Prodn Routing Component Allocation
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGCOMPALLOCDEX')/$value
semantic_en: Prodn Routing Component Allocation
tags:
  - PP
  - bo:purchaseorder
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - metadata-only
---
# I_PRODNROUTINGCOMPALLOCDEX

**Prodn Routing Component Allocation**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGCOMPALLOCDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BillOfOperationsType` | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | `CHAR(8)` | Key for Task List Group |
| `ProdnRtgOpBOMItemInternalID` | `NUMC(8)` | No. for material comp. allocation to task list |
| `ProdnRtgOpBOMItemIntVersion` | `NUMC(8)` | Internal counter |
| `ProductionRouting` | `CHAR(2)` | Group Counter |
| `ProductionRoutingSequence` | `CHAR(6)` | Sequence |
| `ProductionRoutingOpIntID` | `NUMC(8)` | Task list node number for operation |
| `BillOfOperationsVersion` | `CHAR(4)` | Routing Version |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | `DATS(8)` | Valid-to date |
| `CreationDate` | `DATS(8)` | Date Record Created On |
| `CreatedByUser` | `CHAR(12)` | Created By User |
| `LastChangeDate` | `DATS(8)` | Change Date Without Document Update |
| `LastChangedByUser` | `CHAR(12)` | Last Changed By User |
| `IsDeleted` | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` | `CHAR(1)` | Deletion Indicator |
| `ChangeNumber` | `CHAR(12)` | Change Number |
| `GoodsRecipientName` | `CHAR(12)` | Goods Recipient |
| `UnloadingPointName` | `CHAR(25)` | Unloading Point |
| `BillOfMaterialCategory` | `CHAR(1)` | BOM category |
| `BillOfMaterial` | `CHAR(8)` | Bill of Material |
| `BillOfMaterialVariant` | `CHAR(2)` | Alternative BOM |
| `BillOfMaterialItemNodeNumber` | `NUMC(8)` | Node Number |
| `BillOfMaterialRootCategory` | `CHAR(1)` | BOM category |
| `BillOfMaterialRoot` | `CHAR(8)` | Bill Of Material |
| `BillOfMaterialRootVariant` | `CHAR(2)` | Alternative BOM |
| `BillOfMaterialEdgeNumber` | `NUMC(6)` | Path in exploded BOM tree |
| `MatlCompIsMarkedForBackflush` | `CHAR(1)` | Indicator: Backflush |
| `BillOfMaterialItemQuantity` | `QUAN(13)` | Component Quantity |
| `BillOfMaterialItemUnit` | `UNIT(3)` | Component Unit of Measure |
