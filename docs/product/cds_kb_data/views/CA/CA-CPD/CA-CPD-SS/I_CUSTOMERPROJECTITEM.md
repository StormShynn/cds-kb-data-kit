---
name: I_CUSTOMERPROJECTITEM
description: "This CDS view provides the prerequisites for answering the following business questions: What is the sales order for a project?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERPROJECTITEM')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the sales order for a project?"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - order
  - project
  - sales-order
  - metadata-only
---
# I_CUSTOMERPROJECTITEM

**This CDS view provides the prerequisites for answering the following business questions: What is the sales order for a project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERPROJECTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerProject` |  | |  |  | `CHAR(40)` | Commercial Project ID |
| `CustomerProjectItemType` |  | |  |  | `CHAR(5)` | Customer Project Item Type |
| `CustomerProjectItem` |  | |  |  | `CHAR(40)` | Customer Project Item |
| `CustomerProjectUUID` |  | |  |  | `RAW(16)` | Customer Project UUID |
