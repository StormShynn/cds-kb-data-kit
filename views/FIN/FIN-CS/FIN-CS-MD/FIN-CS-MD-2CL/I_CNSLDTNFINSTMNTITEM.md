---
name: I_CNSLDTNFINSTMNTITEM
description: This CDS view provides access to the master data for financial statement (FS) items in group reporting. The CDS view provides the prerequisites for answering the following business questions: What is the consolidation chart of accounts for my FS items? Is a certain FS item an income or expense items in P&amp;L statements, an asset or liabilities and equity item in balance sheets, a statistical item, or a reporting item used in reporting? What's the breakdown category for my FS items? Is a certain FS item a consolidation item or not? Is posting/data entry allowed for a certain FS item? For more information about the master data for FS items, see Financial Statement Items.
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEM')/$value
semantic_en: This CDS view provides access to the master data for financial statement (FS) items in group reporting. The CDS view provides the prerequisites for answering the following business questions: What is the consolidation chart of accounts for my FS items? Is a certain FS item an income or expense items in P&amp;L statements, an asset or liabilities and equity item in balance sheets, a statistical item, or a reporting item used in reporting? What's the breakdown category for my FS items? Is a certain FS item a consolidation item or not? Is posting/data entry allowed for a certain FS item? For more information about the master data for FS items, see Financial Statement Items.
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
# I_CNSLDTNFINSTMNTITEM

**This CDS view provides access to the master data for financial statement (FS) items in group reporting. The CDS view provides the prerequisites for answering the following business questions: What is the consolidation chart of accounts for my FS items? Is a certain FS item an income or expense items in P&amp;L statements, an asset or liabilities and equity item in balance sheets, a statistical item, or a reporting item used in reporting? What's the breakdown category for my FS items? Is a certain FS item a consolidation item or not? Is posting/data entry allowed for a certain FS item? For more information about the master data for FS items, see Financial Statement Items.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFINSTMNTITEM')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ConsolidationChartOfAccounts` | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` | `CHAR(10)` | Financial Statement Item |
| `FinancialStatementItemType` | `CHAR(10)` | Financial Statement Item Type |
| `BreakdownCategory` | `CHAR(4)` | Breakdown Category |
| `IsConsolidationItem` | `CHAR(1)` | Is Consolidation Item |
| `FinancialStatementItemIsBlkd` | `CHAR(1)` | Blocked for Posting |
| `NetBalanceIsCarriedForward` | `CHAR(1)` | Carry Forward Balances |
| `FSItemLink` | `CHAR(1333)` | URL |
| `FSItemLinkLabel` | `CHAR(255)` | Label for Link |
| `ETag` | `CHAR(32)` | Financial Statement Item ETag |
| `FinancialStatementItemGroup` | `CHAR(1)` | Financial Statement Item Type |
| `DebitCreditCode` | `CHAR(1)` | Debit/credit sign (+/-) |
| `FinancialStatementItemClass` | `CHAR(10)` | Financial Statement Item Type |
| `FinancialStatementItemCategory` | `CHAR(1)` | FS Item Category |
| `SignOfBalanceIsChecked` | `CHAR(1)` | Check the Sign of Balance |
| `IsAppropriationItem` | `CHAR(1)` | Appropriation Item |
| `NetBalanceIsCarryForward` | `CHAR(1)` | Carry Forward the Net Balance |
| `TotalItemIsRecorded` | `CHAR(1)` | Totals Item May Be Entered/Posted to |
