---
name: I_FINSTMNTITMHIERDIRT
description: "Financial Statement Item Hierarchy Directory - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIRT')/$value
semantic_en: "Financial Statement Item Hierarchy Directory - Text"
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
# I_FINSTMNTITMHIERDIRT

**Financial Statement Item Hierarchy Directory - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIRT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItemHier` |  | |  |  | `CHAR(10)` | Item Hierarchy |
| `AdditionalMasterDataHierarchy` |  | |  |  | `CHAR(40)` | Consolidation Hierarchy ID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `FinancialStatementItemHierTxt` |  | |  |  | `CHAR(50)` | Hierarchy description |
