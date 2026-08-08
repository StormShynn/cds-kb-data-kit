---
name: I_CNSLDTNSEGMENTHIERDIRVH
description: "This CDS view provides access to a value help for the hierarchy of the segment. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of segment do exist and in which interval of fiscal year and period are they defined"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERDIRVH')/$value
semantic_en: "This CDS view provides access to a value help for the hierarchy of the segment. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of segment do exist and in which interval of fiscal year and period are they defined"
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
# I_CNSLDTNSEGMENTHIERDIRVH

**This CDS view provides access to a value help for the hierarchy of the segment. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of segment do exist and in which interval of fiscal year and period are they defined**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNSEGMENTHIERDIRVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationSegmentHierarchy` |  | |  |  | `CHAR(40)` | Segment Hierarchy |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
