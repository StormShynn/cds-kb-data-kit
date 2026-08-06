---
name: I_PRODNROUTINGMATLASSGMTDEX
description: Production Routing Material Assignment
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGMATLASSGMTDEX')/$value
semantic_en: Production Routing Material Assignment
tags:
  - PP
  - bo:material
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - material
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
  - product
  - metadata-only
---
# I_PRODNROUTINGMATLASSGMTDEX

**Production Routing Material Assignment**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNROUTINGMATLASSGMTDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Product` | `CHAR(40)` | Material Number |
| `Plant` | `CHAR(4)` | Plant |
| `BillOfOperationsType` | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | `CHAR(8)` | Key for Task List Group |
| `ProductionRouting` | `CHAR(2)` | Group Counter |
| `ProductionRoutingMatlAssgmt` | `NUMC(7)` | Counter for Additional Criteria |
| `ProductionRtgMatlAssgmtIntVers` | `NUMC(8)` | Internal counter |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | `DATS(8)` | Valid-to date |
| `ChangeNumber` | `CHAR(12)` | Change Number |
| `CreationDate` | `DATS(8)` | Date Record Created On |
| `CreatedByUser` | `CHAR(12)` | Created By User |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `LastChangedByUser` | `CHAR(12)` | Last Changed By User |
| `IsDeleted` | `CHAR(1)` | Deletion Indicator |
| `IsImplicitlyDeleted` | `CHAR(1)` | Deletion Indicator |
| `Supplier` | `CHAR(10)` | Supplier's Account Number |
| `Customer` | `CHAR(10)` | Account number of customer |
| `SalesOrder` | `CHAR(10)` | Sales Document |
| `SalesOrderItem` | `NUMC(6)` | Sales Document Item |
