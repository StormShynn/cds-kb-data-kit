---
name: I_WORKCENTERPOOLEDCAPALLOC
description: "Work Center Pooled Capacity Allocation"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERPOOLEDCAPALLOC')/$value
semantic_en: "Work Center Pooled Capacity Allocation"
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
# I_WORKCENTERPOOLEDCAPALLOC

**Work Center Pooled Capacity Allocation**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERPOOLEDCAPALLOC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `WorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object types of the CIM resource |
| `CapacityCategoryAllocation` |  | |  |  | `NUMC(4)` | Capacity Category Allocation |
| `CapacityInternalID` |  | |  |  | `NUMC(8)` | Capacity ID |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `WorkCenterCategoryCode` |  | |  |  | `CHAR(4)` | Work Center Category |
| `CapacityCategoryCode` |  | |  |  | `CHAR(3)` | Capacity Category |
| `Capacity` |  | |  |  | `CHAR(8)` | Capacity name |
| `SetupCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Setup Capacity Requirements |
| `ProcgCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Processing Capacity Requirements |
| `TeardownCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Teardown Capacity Requirements |
| `OtherCapRequirementFormula` |  | |  |  | `CHAR(6)` | Formula for Other Capacity Requirements |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | End Date |
| `WorkCenterLastChangeDateTime` |  | |  |  | `DEC(21)` | Date and Time of Last Change |
