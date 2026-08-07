---
name: I_CNSLDTNFINSTMNTITEMTEXT
description: Financial Statement Item - Text
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMTEXT')/$value
semantic_en: Financial Statement Item - Text
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
# I_CNSLDTNFINSTMNTITEMTEXT

**Financial Statement Item - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEMTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `FinancialStatementItemText` |  | |  |  | `CHAR(15)` | Name |
| `FinancialStatementItemMdmText` |  | |  |  | `CHAR(50)` | Description |
| `FinancialStatementItemLongText` |  | |  |  | `CHAR(250)` | Long Description |
