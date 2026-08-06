---
name: C_GLJRNLENTRYITEMTOBEVERIFIED
description: LI in Inbox View of GL JE to be verified
app_component: FI-FIO-GL-TRA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRYITEMTOBEVERIFIED')/$value
semantic_en: LI in Inbox View of GL JE to be verified
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-GL-TRA-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-TRA
  - FI-FIO-GL-TRA-2CL
  - lob:finance
  - metadata-only
---
# C_GLJRNLENTRYITEMTOBEVERIFIED

**LI in Inbox View of GL JE to be verified**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-TRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLJRNLENTRYITEMTOBEVERIFIED')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AccountingDocumentItem` | `NUMC(6)` | Six-figure number of line item |
| `SourceCompanyCode` | `CHAR(4)` | Source Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `AccountingDocumentCategory` | `CHAR(1)` | Document Status |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `GLAccountName` | `CHAR(20)` | G/L Account Short Text |
| `DocumentItemText` | `CHAR(50)` | Item Text |
| `DebitCreditCode` | `CHAR(1)` | Debit/Credit Code |
| `DebitCreditCodeName` | `CHAR(60)` | Debit/Credit Code Name |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` | `CURR(28)` |  |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
| `AmountInCompanyCodeCurrency` | `CURR(28)` |  |
| `GlobalCurrency` | `CUKY(5)` | Additional Currency 1 |
| `AmountInGlobalCurrency` | `CURR(28)` |  |
| `FunctionalCurrency` | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` | `CURR(28)` |  |
| `FreeDefinedCurrency1` | `CUKY(5)` | Additional Currency 2 |
| `AmountInFreeDefinedCurrency1` | `CURR(28)` |  |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `GLAccountGroup` | `CHAR(4)` | G/L Account Group |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `LedgerGroup` | `CHAR(4)` | Ledger Group |
