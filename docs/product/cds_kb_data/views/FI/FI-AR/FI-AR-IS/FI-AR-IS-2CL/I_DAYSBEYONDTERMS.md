---
name: I_DAYSBEYONDTERMS
description: "This CDS view provides you with an insight into the payment history of your customers and indicates how effectively your company collects payments. The result aggregates the weighted payment amount per account (company code and customer). This CDS view provides you with the information you need to answer the following business questions: How long does it take to collect payments? If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSBEYONDTERMS')/$value
semantic_en: "This CDS view provides you with an insight into the payment history of your customers and indicates how effectively your company collects payments. The result aggregates the weighted payment amount per account (company code and customer). This CDS view provides you with the information you need to answer the following business questions: How long does it take to collect payments? If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful."
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
  - payment
  - metadata-only
---
# I_DAYSBEYONDTERMS

**This CDS view provides you with an insight into the payment history of your customers and indicates how effectively your company collects payments. The result aggregates the weighted payment amount per account (company code and customer). This CDS view provides you with the information you need to answer the following business questions: How long does it take to collect payments? If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DAYSBEYONDTERMS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `YearMonth` |  | |  |  | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `DurationUnit` |  | |  |  | `UNIT(3)` |  |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Customer Basic Authorization Group |
| `CustomerFinsAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `WeightedClearedAmountInDspCrcy` |  | |  |  | `CURR(31)` |  |
| `ClearedAmountInDisplayCurrency` |  | |  |  | `CURR(25)` |  |
| `WgtdPaidWthnTermsAmtInDspCrcy` |  | |  |  | `CURR(31)` |  |
| `WgtdPaidOutOfTermsAmtInDspCrcy` |  | |  |  | `CURR(31)` |  |
