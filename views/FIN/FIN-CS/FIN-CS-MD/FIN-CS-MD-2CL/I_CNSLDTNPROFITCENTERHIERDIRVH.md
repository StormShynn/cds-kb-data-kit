---
name: I_CNSLDTNPROFITCENTERHIERDIRVH
description: This CDS view provides access to a value help for the hierarchy of the profit center. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of profit center do exist and in which interval of fiscal year and period are they defined? What is the controlling area of the profit center?
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERDIRVH')/$value
semantic_en: This CDS view provides access to a value help for the hierarchy of the profit center. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of profit center do exist and in which interval of fiscal year and period are they defined? What is the controlling area of the profit center?
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
# I_CNSLDTNPROFITCENTERHIERDIRVH

**This CDS view provides access to a value help for the hierarchy of the profit center. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of profit center do exist and in which interval of fiscal year and period are they defined? What is the controlling area of the profit center?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNPROFITCENTERHIERDIRVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AdditionalMasterDataHierarchy` |  | |  |  | `CHAR(40)` | Profit Center Hierarchy |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
