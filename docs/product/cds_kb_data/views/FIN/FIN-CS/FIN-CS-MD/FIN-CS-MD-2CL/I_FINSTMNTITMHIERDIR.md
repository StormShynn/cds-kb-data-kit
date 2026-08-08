---
name: I_FINSTMNTITMHIERDIR
description: "This CDS view provides access to the master data of the hierarchy of the financial statement item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies on financial statement item do exist and in which consolidation chart of accounts are they defined? When was the hierarchy changed and by which user?"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIR')/$value
semantic_en: "This CDS view provides access to the master data of the hierarchy of the financial statement item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies on financial statement item do exist and in which consolidation chart of accounts are they defined? When was the hierarchy changed and by which user?"
tags:
  - FIN
  - account
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
# I_FINSTMNTITMHIERDIR

**This CDS view provides access to the master data of the hierarchy of the financial statement item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies on financial statement item do exist and in which consolidation chart of accounts are they defined? When was the hierarchy changed and by which user?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItemHier` |  | |  |  | `CHAR(10)` | Item Hierarchy |
| `AdditionalMasterDataHierarchy` |  | |  |  | `CHAR(40)` | Consolidation Hierarchy ID |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `LastChangeTime` |  | |  |  | `DEC(15)` | Last Updated At (Timestamp) |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Updated At (Timestamp) |
| `HierarchyType` |  | |  |  | `CHAR(4)` | Hierarchy Type |
