---
name: C_DAYSBEYONDTERMS
description: This CDS view provides you with an insight into the payment history of your customers and it indicates how effectively your company collects payments. The result calculates the Days Beyond Terms and the ratio of payments in term and out of term per account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect payments? For more information on the calculation of the measures please see: Calculation of Ratio of Payments Within Terms and Beyond Terms, Calculation of Days Beyond Terms and Calculation of Days in Arrears. If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful.
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DAYSBEYONDTERMS')/$value
semantic_en: This CDS view provides you with an insight into the payment history of your customers and it indicates how effectively your company collects payments. The result calculates the Days Beyond Terms and the ratio of payments in term and out of term per account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect payments? For more information on the calculation of the measures please see: Calculation of Ratio of Payments Within Terms and Beyond Terms, Calculation of Days Beyond Terms and Calculation of Days in Arrears. If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful.
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - consumption-view
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
  - payment
  - metadata-only
---
# C_DAYSBEYONDTERMS

**This CDS view provides you with an insight into the payment history of your customers and it indicates how effectively your company collects payments. The result calculates the Days Beyond Terms and the ratio of payments in term and out of term per account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How long does it take to collect payments? For more information on the calculation of the measures please see: Calculation of Ratio of Payments Within Terms and Beyond Terms, Calculation of Days Beyond Terms and Calculation of Days in Arrears. If you have just started a new business, you may find the Days Sales Outstanding Cube more helpful.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DAYSBEYONDTERMS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `YearMonth` |  | |  |  | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `DurationUnit` |  | |  |  | `UNIT(3)` |  |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `CustomerCountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `CustomerRegionName` |  | |  |  | `CHAR(20)` | Description |
| `AccountingClerkName` |  | |  |  | `CHAR(30)` | Name of Accounting Clerk |
| `ReconciliationAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerAccountGroupName` |  | |  |  | `CHAR(30)` | Account Group Name |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `CustomerClassificationDesc` |  | |  |  | `CHAR(20)` | Customer Classification Description |
| `TotalAmountInDisplayCrcy` |  | |  |  | `INT1(3)` |  |
| `BeyondTermDays` |  | |  |  | `INT1(3)` |  |
| `PaymentsInTermPercent` |  | |  |  | `INT1(3)` |  |
| `PaymentsOutOfTermPercent` |  | |  |  | `INT1(3)` |  |
