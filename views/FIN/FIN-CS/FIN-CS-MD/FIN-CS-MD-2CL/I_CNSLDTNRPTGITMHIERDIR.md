---
name: I_CNSLDTNRPTGITMHIERDIR
description: This CDS view provides access to the master data of the hierarchy of the consolidation reporting item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of reporting item do exist and in which consolidation chart of accounts are they defined? When was the latest change of a hierarchy and by which user?
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIR')/$value
semantic_en: This CDS view provides access to the master data of the hierarchy of the consolidation reporting item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of reporting item do exist and in which consolidation chart of accounts are they defined? When was the latest change of a hierarchy and by which user?
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
# I_CNSLDTNRPTGITMHIERDIR

**This CDS view provides access to the master data of the hierarchy of the consolidation reporting item. This CDS view provides the prerequisites for answering the following business questions: What hierarchies of reporting item do exist and in which consolidation chart of accounts are they defined? When was the latest change of a hierarchy and by which user?**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIR')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ConsolidationChartOfAccounts` | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItemHier` | `CHAR(10)` | Reporting Item Hierarchy |
| `AdditionalMasterDataHierarchy` | `CHAR(40)` | Consolidation Hierarchy ID |
| `LastChangedByUser` | `CHAR(12)` | Last Changed By |
| `LastChangeTime` | `DEC(15)` | Last Updated At (Timestamp) |
| `LastChangeDateTime` | `DEC(15)` | Last Updated At (Timestamp) |
