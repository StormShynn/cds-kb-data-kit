---
name: I_WORKPACKAGEWORKITEM
description: This CDS view provides the prerequisites for answering the following business questions: What are the work items assigned to a work package and which of the work items are active or inactive? How many or which work packages use a particular work item?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEM')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the work items assigned to a work package and which of the work items are active or inactive? How many or which work packages use a particular work item?
tags:
  - CA
  - bo:plant
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WORKPACKAGEWORKITEM

**This CDS view provides the prerequisites for answering the following business questions: What are the work items assigned to a work package and which of the work items are active or inactive? How many or which work packages use a particular work item?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEM')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `WorkItem` | `CHAR(10)` | Work Item ID |
| `WorkPackage` | `CHAR(50)` | Plan Item |
| `EngagementProject` | `CHAR(40)` | Commercial Project ID |
| `WBSElementObject` | `CHAR(50)` | Object ID |
| `WorkPackageUUID` | `RAW(16)` | Work Package UUID |
| `WorkItemUUID` | `RAW(16)` | Work Item UUID |
| `EngagementProjFinPlanUUID` | `RAW(16)` | Financial Plan UUID |
| `WorkItemName` | `CHAR(40)` | Work Item Name |
| `WorkItemIsInactive` | `CHAR(1)` | Data Element for Work Item is Inactive |
