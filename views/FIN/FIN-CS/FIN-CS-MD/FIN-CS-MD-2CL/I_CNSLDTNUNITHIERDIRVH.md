---
name: I_CNSLDTNUNITHIERDIRVH
description: This CDS view Provides access to a value help for the hierarchy of the consolidation unit. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of consolidation unit do exist and in which interval of fiscal year and period are they defined?
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERDIRVH')/$value
semantic_en: This CDS view Provides access to a value help for the hierarchy of the consolidation unit. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of consolidation unit do exist and in which interval of fiscal year and period are they defined?
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNUNITHIERDIRVH

**This CDS view Provides access to a value help for the hierarchy of the consolidation unit. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of consolidation unit do exist and in which interval of fiscal year and period are they defined?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNUNITHIERDIRVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationUnitHierarchy` |  | |  |  | `CHAR(42)` | Hierarchy ID |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
