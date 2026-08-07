---
name: C_APFLEXIBLEAGING
description: This CDS view provides you with an overview of the payables in an aging grid. The result aggregates the amount per net due interval in the aging grid and per account (that is, per company code or supplier). This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier?
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APFLEXIBLEAGING')/$value
semantic_en: This CDS view provides you with an overview of the payables in an aging grid. The result aggregates the amount per net due interval in the aging grid and per account (that is, per company code or supplier). This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier?
tags:
  - FI
  - account
  - bo:plant
  - component:FI-AP-IS-2CL
  - consumption-view
  - FI-AP
  - FI-AP-IS
  - FI-AP-IS-2CL
  - lob:finance
  - supplier
  - metadata-only
---
# C_APFLEXIBLEAGING

**This CDS view provides you with an overview of the payables in an aging grid. The result aggregates the amount per net due interval in the aging grid and per account (that is, per company code or supplier). This CDS view provides the prerequisites for answering the following business questions: What suppliers are the payables for? What's the total payable amount to each supplier?**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APFLEXIBLEAGING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Document Status |
| `AgingGridText` |  | |  |  | `CHAR(20)` | Aging Grid Text |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `GLAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `AccountingDocumentCategoryName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `SpecialGLCodeName` |  | |  |  | `CHAR(30)` | Long Text for Special G/L Indicators |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ChartOfAccountsName` |  | |  |  | `CHAR(50)` | Chart of Accounts Description |
| `SupplierAccountGroup` |  | |  |  | `CHAR(4)` | Supplier Account Group |
| `SupplierAccountGroupName` |  | |  |  | `CHAR(30)` | Account Group Name |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `AmountInDisplayCurrency_E` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` |  | |  |  | `CURR(23)` | Not Overdue Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy_E` |  | |  |  | `CURR(23)` | Total Overdue Amount in Display Currency |
