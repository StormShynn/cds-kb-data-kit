---
name: I_FINSTMNTITMHIERDIRVH
description: This CDS view provides access to a value help for the hierarchy of the financial statement item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies on financial statement item do exist and in which consolidation chart of accounts are they defined?
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIRVH')/$value
semantic_en: This CDS view provides access to a value help for the hierarchy of the financial statement item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies on financial statement item do exist and in which consolidation chart of accounts are they defined?
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_FINSTMNTITMHIERDIRVH

**This CDS view provides access to a value help for the hierarchy of the financial statement item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies on financial statement item do exist and in which consolidation chart of accounts are they defined?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIRVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialStatementItemHier` |  | |  |  | `CHAR(10)` | Item Hierarchy |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `AdditionalMasterDataHierarchy` |  | |  |  | `CHAR(40)` | Consolidation Hierarchy ID |
