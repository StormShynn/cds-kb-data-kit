---
name: I_ENGAGEMENTPROJECTITEM
description: This CDS view provides the prerequisites for answering the following business questions: What is the sales order for a customer project?
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTITEM')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What is the sales order for a customer project?
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - order
  - project
  - sales-order
  - metadata-only
---
# I_ENGAGEMENTPROJECTITEM

**This CDS view provides the prerequisites for answering the following business questions: What is the sales order for a customer project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProject` |  | |  |  | `CHAR(40)` | Commercial Project ID |
| `EngagementProjectItemType` |  | |  |  | `CHAR(5)` | Master Project: Related Object Link |
| `EngagementProjectItem` |  | |  |  | `CHAR(40)` | Item Key (Master Project) |
| `EngagementProjectUUID` |  | |  |  | `RAW(16)` | Engagement Project UUID |
