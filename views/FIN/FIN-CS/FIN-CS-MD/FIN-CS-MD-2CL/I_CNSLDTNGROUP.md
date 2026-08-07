---
name: I_CNSLDTNGROUP
description: "This CDS view provides access to the master data of a consolidation group. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension for my consolidation groups or subgroups? What is the hierarchy level of a certain group within a hierarchy of consolidation groups?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGROUP')/$value
semantic_en: "This CDS view provides access to the master data of a consolidation group. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension for my consolidation groups or subgroups? What is the hierarchy level of a certain group within a hierarchy of consolidation groups?"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - master-data
  - metadata-only
---
# I_CNSLDTNGROUP

**This CDS view provides access to the master data of a consolidation group. This CDS view provides the prerequisites for answering the following business questions: What is the consolidation dimension for my consolidation groups or subgroups? What is the hierarchy level of a certain group within a hierarchy of consolidation groups?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
