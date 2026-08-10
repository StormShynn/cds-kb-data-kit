---
name: I_CNSLDTNUNIT
description: "This CDS view provides access to the master data of a consolidation unit. A consolidation unit is the smallest entity of the corporate group structure that can be used as the basis for performing a consolidation. This CDS view provides the prerequisites for answering the following business questions: What is the hierarchy level of a certain unit within a hierarchy of consolidation units?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNIT')/$value
semantic_en: "This CDS view provides access to the master data of a consolidation unit. A consolidation unit is the smallest entity of the corporate group structure that can be used as the basis for performing a consolidation. This CDS view provides the prerequisites for answering the following business questions: What is the hierarchy level of a certain unit within a hierarchy of consolidation units?"
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
# I_CNSLDTNUNIT

**This CDS view provides access to the master data of a consolidation unit. A consolidation unit is the smallest entity of the corporate group structure that can be used as the basis for performing a consolidation. This CDS view provides the prerequisites for answering the following business questions: What is the hierarchy level of a certain unit within a hierarchy of consolidation units?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNIT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `DocumentEntryIsInGroupCurrency` |  | |  |  | `CHAR(1)` | Entry in Group Currency |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
