---
name: I_MAINTTASKLISTOPPRTCUBE
description: Maint Task List Operation PRT - Cube
app_component: PM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTTASKLISTOPPRTCUBE')/$value
semantic_en: Maint Task List Operation PRT - Cube
tags:
  - PM
  - component:PM-2CL
  - interface-view
  - lob:plant maintenance
  - PM-2CL
  - task
  - metadata-only
---
# I_MAINTTASKLISTOPPRTCUBE

**Maint Task List Operation PRT - Cube**

| Property | Value |
|---|---|
| App Component | `PM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTTASKLISTOPPRTCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `TaskListType` | `CHAR(1)` | Task List Type |
| `TaskListGroup` | `CHAR(8)` | Key for Task List Group |
| `TaskListGroupCounter` | `CHAR(2)` | Group Counter |
| `TaskListSequence` | `CHAR(6)` | Sequence |
| `TaskListOperationInternalId` | `NUMC(8)` | Number of the Task List Node |
| `TaskListOpPRTIntID` | `NUMC(8)` | Item Counter for Production Resources/Tools |
| `TaskListOpPRTIntVersCounter` | `NUMC(8)` | Internal counter |
| `ProdnRsceToolItemNumber` | `NUMC(4)` | Item Number for Production Resource/Tool |
| `ProdnRsceToolStandardWorkQty` | `QUAN(9)` | Standard Value for Quantity of Production Resources/Tools |
| `ProdnRsceToolStdWorkQtyUnit` | `UNIT(3)` | Unit for Quantity of Production Resources/Tools |
| `ProdnRsceToolUsageQuantity` | `QUAN(9)` | Standard Usage Value for Production Resources/Tools |
| `ProdnRsceToolUsageQuantityUnit` | `UNIT(3)` | Usage Value Unit of the Production Resource/Tool |
| `ProductionResourceType` | `CHAR(2)` | Object types of the CIM resource |
| `ProductionResourceInternalID` | `NUMC(8)` | Object ID of the resource |
| `ProdnRsceToolText` | `CHAR(40)` | First Line of Text for Production Resources/Tools |
| `IsDeleted` | `CHAR(1)` | Deletion Indicator |
