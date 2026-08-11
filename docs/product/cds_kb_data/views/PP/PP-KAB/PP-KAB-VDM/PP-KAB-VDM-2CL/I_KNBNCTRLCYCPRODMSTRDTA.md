---
name: I_KNBNCTRLCYCPRODMSTRDTA
description: "Product Master Data for Kanban Control Cycle"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_KNBNCTRLCYCPRODMSTRDTA')/$value
semantic_en: "Product Master Data for Kanban Control Cycle"
tags:
  - PP
  - bo:businesspartner
  - component:PP-KAB-VDM-2CL
  - interface-view
  - lob:manufacturing
  - master-data
  - PP-KAB
  - PP-KAB-VDM
  - PP-KAB-VDM-2CL
  - product
  - metadata-only
---
# I_KNBNCTRLCYCPRODMSTRDTA

**Product Master Data for Kanban Control Cycle**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_KNBNCTRLCYCPRODMSTRDTA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanControlCycle` |  | |  |  | `CHAR(7)` | Kanban Control Cycle |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `SourceStorageLocation` |  | |  |  | `CHAR(4)` | Source Storage Location |
| `SupplySourcePlant` |  | |  |  | `CHAR(4)` | Plant of Supply Source |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
