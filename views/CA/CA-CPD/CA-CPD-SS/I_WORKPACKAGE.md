---
name: I_WORKPACKAGE
description: This CDS view provides the prerequisites for answering the following business questions: Which work packages are assigned to which sales orders? When and by whom was a work package changed? Which work packages are assigned to a project’s financial plan?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: Which work packages are assigned to which sales orders? When and by whom was a work package changed? Which work packages are assigned to a project’s financial plan?
keywords:
  - Work Package
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - order
  - plan
  - project
  - sales-order
  - metadata-only
---
# I_WORKPACKAGE

**This CDS view provides the prerequisites for answering the following business questions: Which work packages are assigned to which sales orders? When and by whom was a work package changed? Which work packages are assigned to a project’s financial plan?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `WorkPackageUUID` |  | |  |  | `RAW(16)` | Work Package UUID |
| `EngagementProjFinPlanUUID` |  | |  |  | `RAW(16)` | Financial Plan UUID |
| `WorkPackageName` |  | |  |  | `CHAR(60)` | Plan Item Description |
| `WorkPackageStartDate` |  | |  |  | `DATS(8)` | Start Date |
| `WorkPackageEndDate` |  | |  |  | `DATS(8)` | End Date |
| `WBSElementObject` |  | |  |  | `CHAR(50)` | Object ID |
| `WBSDescription` |  | |  |  | `CHAR(80)` | Object Name |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Changed By |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Commercial Project Last Changed On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On |
| `WorkPackageType` |  | |  |  | `CHAR(1)` | Work Package Type |
