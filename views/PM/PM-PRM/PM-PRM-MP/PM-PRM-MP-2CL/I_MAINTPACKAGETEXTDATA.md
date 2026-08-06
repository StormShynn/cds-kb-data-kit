---
name: I_MAINTPACKAGETEXTDATA
description: This CDS view provides the prerequisites for answering the following business questions: What is the description of the maintenance package in all languages? What is the description of the maintenance package hierarchy in all languages? What is the description of the maintenance package cycle in all languages? What is the description of the start offset for maintenance package in all languages?
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTPACKAGETEXTDATA')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What is the description of the maintenance package in all languages? What is the description of the maintenance package hierarchy in all languages? What is the description of the maintenance package cycle in all languages? What is the description of the start offset for maintenance package in all languages?
tags:
  - PM
  - bo:plant
  - component:PM-PRM-MP-2CL
  - interface-view
  - lob:plant maintenance
  - PM-PRM
  - PM-PRM-MP
  - PM-PRM-MP-2CL
  - metadata-only
---
# I_MAINTPACKAGETEXTDATA

**This CDS view provides the prerequisites for answering the following business questions: What is the description of the maintenance package in all languages? What is the description of the maintenance package hierarchy in all languages? What is the description of the maintenance package cycle in all languages? What is the description of the start offset for maintenance package in all languages?**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTPACKAGETEXTDATA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Language` | `LANG(1)` | Language Key |
| `MaintenanceStrategy` | `CHAR(6)` | Maintenance Strategy |
| `MaintenancePackage` | `NUMC(2)` | Maintenance Package Number |
| `MaintenancePackageText` | `CHAR(30)` | Text for maintenance package/cycle (time/performance) |
| `MaintPackageHierarchyShortText` | `CHAR(2)` | Short text of the maintenance package hierarchy |
| `MaintenanceCycleShortText` | `CHAR(2)` | Short text for the maintenance cycle (time/performance) |
| `StartOffsetShortText` | `CHAR(2)` | Short text for the start offset (time/performance) |
