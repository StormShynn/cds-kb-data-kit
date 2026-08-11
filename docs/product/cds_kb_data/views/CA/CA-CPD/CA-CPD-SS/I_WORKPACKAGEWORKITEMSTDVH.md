---
name: I_WORKPACKAGEWORKITEMSTDVH
description: "This view provides value help for work item. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Work Package Work Item instead."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEMSTDVH')/$value
semantic_en: "This view provides value help for work item. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Work Package Work Item instead."
tags:
  - CA
  - bo:purchaseorder
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_WORKPACKAGEWORKITEMSTDVH

**This view provides value help for work item. This view should be used for value help purposes only. If you intend to select the entire business data, use the view Work Package Work Item instead.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKPACKAGEWORKITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `WorkItemName` |  | |  |  | `CHAR(40)` | Work Item Name |
| `EngagementProjFinPlanUUID` |  | |  |  | `RAW(16)` | Financial Plan UUID |
