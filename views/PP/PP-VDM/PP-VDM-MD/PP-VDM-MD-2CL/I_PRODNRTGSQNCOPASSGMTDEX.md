---
name: I_PRODNRTGSQNCOPASSGMTDEX
description: Prodn Rtg Sequence Operation Assignment
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGSQNCOPASSGMTDEX')/$value
semantic_en: Prodn Rtg Sequence Operation Assignment
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - metadata-only
---
# I_PRODNRTGSQNCOPASSGMTDEX

**Prodn Rtg Sequence Operation Assignment**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGSQNCOPASSGMTDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BillOfOperationsType` | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | `CHAR(8)` | Key for Task List Group |
| `ProductionRouting` | `CHAR(2)` | Group Counter |
| `ProductionRoutingSequence` | `CHAR(6)` | Sequence |
| `ProductionRoutingOpIntID` | `NUMC(8)` | Number of the Task List Node |
| `ProdnRtgSqncOpAssgmtIntVers` | `NUMC(8)` | Internal counter |
| `ValidityStartDate` | `DATS(8)` | Validity Start Date |
| `ValidityEndDate` | `DATS(8)` | Validity End Date |
| `IsDeleted` | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` | `CHAR(1)` | Deletion Indicator |
| `ChangeNumber` | `CHAR(12)` | Change Number |
| `CreationDate` | `DATS(8)` | Created On |
| `CreatedByUser` | `CHAR(12)` | Created By User |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `LastChangedByUser` | `CHAR(12)` | Last Changed By User |
| `BillOfOperationsVersion` | `CHAR(4)` | Routing Version |
