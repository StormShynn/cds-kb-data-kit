---
name: I_PRODNROUTINGSEQUENCEDEX
description: "Production Routing Sequence"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGSEQUENCEDEX')/$value
semantic_en: "Production Routing Sequence"
tags:
  - PP
  - bo:material
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - product
  - metadata-only
---
# I_PRODNROUTINGSEQUENCEDEX

**Production Routing Sequence**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGSEQUENCEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` |  | |  |  | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` |  | |  |  | `CHAR(8)` | Key for Task List Group |
| `ProductionRouting` |  | |  |  | `CHAR(2)` | Group Counter |
| `ProductionRoutingSequence` |  | |  |  | `CHAR(6)` | Sequence |
| `ProductionRoutingSqncIntVers` |  | |  |  | `NUMC(8)` | Internal counter |
| `BillOfOperationsVersion` |  | |  |  | `CHAR(4)` | Routing Version |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `BillOfOperationsSequenceCat` |  | |  |  | `CHAR(1)` | Sequence Category |
| `SequenceText` |  | |  |  | `CHAR(40)` | Sequence Description |
| `SequenceSchedulingAlignment` |  | |  |  | `CHAR(1)` | Alignment Key for Scheduling |
| `BillOfOperationsRefSequence` |  | |  |  | `CHAR(6)` | Reference Sequence |
| `BOOSqncBranchOpInternalID` |  | |  |  | `NUMC(8)` | Reference node for start of a sequence |
| `BOOSqncReturnOpInternalID` |  | |  |  | `NUMC(8)` | Finish reference node of a sequence |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-To Date |
| `CreationDate` |  | |  |  | `DATS(8)` | Date Record Created On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By User |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By User |
