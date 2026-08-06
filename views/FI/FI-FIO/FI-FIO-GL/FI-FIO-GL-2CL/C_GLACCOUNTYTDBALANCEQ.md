---
name: C_GLACCOUNTYTDBALANCEQ
description: Year-to-Date Balances
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTYTDBALANCEQ')/$value
semantic_en: Year-to-Date Balances
keywords:
  - Year-To-Date Balances
  - Year-To-Date Balances
  - Year-To-Date Balances
tags:
  - FI
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
  - metadata-only
---
# C_GLACCOUNTYTDBALANCEQ

**Year-to-Date Balances**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTYTDBALANCEQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `ProjectExternalID` | `CHAR(24)` | Project External ID |
| `OrderID` | `CHAR(12)` | Order ID |
| `OrderCategory` | `NUMC(2)` | Order Category |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `ProjectNetwork` | `CHAR(12)` | Network Number for Account Assignment |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `AccountAssignmentNumber` | `NUMC(2)` | Account Assignment Number |
| `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `Plant` | `CHAR(4)` | Plant |
| `Customer` | `CHAR(10)` | Customer Number |
| `Supplier` | `CHAR(10)` | Supplier |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `PostingDate` | `DATS(8)` | Posting Date |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `PostingKey` | `CHAR(2)` | Posting Key |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `DebitAmountInCoCodeCrcy` | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` | `CURR(23)` | Credit Amount in Company Code Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `DebitAmountInGlobalCrcy` | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` | `CURR(23)` | Credit Amount in Global Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `DebitAmountInFunctionalCrcy` | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` | `CURR(23)` | Credit Amount in Functional Currency |
| `AmountInFunctionalCurrency` | `CURR(23)` | Amount in Functional Currency |
| `FunctionalCurrency` | `CUKY(5)` | Functional Currency |
| `BalanceTransactionCurrency` | `CUKY(5)` | Balance Transaction Currency |
| `DebitAmountInBalanceTransCrcy` | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` | `CURR(23)` | Amount in Balance Transaction Currency |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `DebitAmountInTransCrcy` | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` | `CURR(23)` | Credit Amount in Transaction Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `FreeDefinedCurrency1` | `CUKY(5)` | Freely Defined Currency 1 |
| `DebitAmountInFreeDfndCrcy1` | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDfndCrcy1` | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FreeDefinedCurrency2` | `CUKY(5)` | Freely Defined Currency 2 |
| `DebitAmountInFreeDfndCrcy2` | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDfndCrcy2` | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `FreeDefinedCurrency3` | `CUKY(5)` | Freely Defined Currency 3 |
| `DebitAmountInFreeDfndCrcy3` | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDfndCrcy3` | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `FreeDefinedCurrency4` | `CUKY(5)` | Freely Defined Currency 4 |
| `DebitAmountInFreeDfndCrcy4` | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDfndCrcy4` | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `FreeDefinedCurrency5` | `CUKY(5)` | Freely Defined Currency 5 |
| `DebitAmountInFreeDfndCrcy5` | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDfndCrcy5` | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `FreeDefinedCurrency6` | `CUKY(5)` | Freely Defined Currency 6 |
| `DebitAmountInFreeDfndCrcy6` | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDfndCrcy6` | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `FreeDefinedCurrency7` | `CUKY(5)` | Freely Defined Currency 7 |
| `DebitAmountInFreeDfndCrcy7` | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDfndCrcy7` | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `FreeDefinedCurrency8` | `CUKY(5)` | Freely Defined Currency 8 |
| `DebitAmountInFreeDfndCrcy8` | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDfndCrcy8` | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
