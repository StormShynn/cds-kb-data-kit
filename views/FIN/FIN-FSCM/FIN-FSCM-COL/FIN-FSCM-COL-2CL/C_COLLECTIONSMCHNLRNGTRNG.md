---
name: C_COLLECTIONSMCHNLRNGTRNG
description: Collections Machine Learning Training
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONSMCHNLRNGTRNG')/$value
semantic_en: Collections Machine Learning Training
tags:
  - FIN
  - component:FIN-FSCM-COL-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# C_COLLECTIONSMCHNLRNGTRNG

**Collections Machine Learning Training**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_COLLECTIONSMCHNLRNGTRNG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `SourceCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment |
| `NetDueDteToSplitDteDurnInDays` |  | |  |  | `INT4(10)` | Number of Days Until or Since Net Due Date |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `DunningLevel` |  | |  |  | `NUMC(1)` | Dunning Level |
| `NetDueDateWeekDay` |  | |  |  | `NUMC(1)` | Weekday of Net Due Date |
| `NetDueDateCalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year of Net Due Date |
| `NetDueDateCalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month of Net Due Date |
| `NetDueDateDayOfMonth` |  | |  |  | `NUMC(2)` | Calendar Day of Net Due Date |
| `NetDueDateCalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week of Net Due Date |
| `DueCalcBaseDateWeekDay` |  | |  |  | `NUMC(1)` | Weekday of Baseline Date |
| `DueCalcBaseDateCalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year of Baseline Date |
| `DueCalcBaseDateCalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month of Baseline Date |
| `DueCalcBaseDateDayOfMonth` |  | |  |  | `NUMC(2)` | Calendar Day of Baseline Date |
| `DueCalcBaseDateCalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week of Baseline Date |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `TargetCurrency` |  | |  |  | `CUKY(5)` | Target Currency (USD) |
| `AmountInTargetCurrency` |  | |  |  | `CURR(23)` | Invoice Amount in Target Currency (USD) |
| `DueCalcBaseToNetDueDurnInDays` |  | |  |  | `INT4(10)` | Days Between Invoice Creation and Net Due Date of Invoice |
| `NetDueDatePositionInMonthValue` |  | |  |  | `CHAR(1)` | Net Due Date Position within the Month |
| `ClrgDelayInDaysIsOverThreshold` |  | |  |  | `NUMC(1)` | Clearing Delay is Over Threshold |
| `ClearingDatePosInMonthValue` |  | |  |  | `CHAR(1)` | Average Clearing Date Position within the Month |
| `NrOfOvrdAcctgDocItems` |  | |  |  | `INT4(10)` | Total No. of Overdue Invoices for Customer |
| `NumberOfDunnedAcctgDocItems` |  | |  |  | `INT8(19)` | Total No. of Dunned Invoices for Customer |
| `AverageOverdueDays` |  | |  |  | `DEC(15)` | Average Days Overdue |
| `OverdueAmountInTargetCurrency` |  | |  |  | `CURR(31)` | Amount of Overdue Invoices for Customer in USD |
| `NrOfDundAcctgDocItms12MnthsAgo` |  | |  |  | `INT4(10)` | Number of Dunned Invoices for Customer (Last 12 Months) |
| `AvgClrgDelay12MonthsAgoInDays` |  | |  |  | `DEC(12)` | Average Clearing Delay for Customer (Last 12 Months) |
| `NumberOfPayments12MonthsAgo` |  | |  |  | `INT4(10)` | Number of Cleared Invoices for Customer (Last 12 Months) |
| `ClrgDelay12MonthsAgoPercent` |  | |  |  | `DEC(8)` | Percentage of Clearing Delay Over 30 Days (Last 12 Months) |
| `AvgClrgAmtInTgtCrcy12MonthsAgo` |  | |  |  | `CURR(23)` | Average Clearing Amount (Last 12 Months) |
| `NrOfDundAcctgDocItms24MnthsAgo` |  | |  |  | `INT4(10)` | Number of Dunned Invoices for Customer (Last 24 Months) |
| `AvgClrgDelay24MonthsAgoInDays` |  | |  |  | `DEC(12)` | Average Clearing Delay for Customer (Last 24 Months) |
| `NumberOfPayments24MonthsAgo` |  | |  |  | `INT4(10)` | Number of Cleared Invoices for Customer (Last 24 Months) |
| `ClrgDelay24MonthsAgoPercent` |  | |  |  | `DEC(8)` | Percentage of Clearing Delay Over 30 Days (Last 24 Months) |
| `AvgClrgAmtInTgtCrcy24MonthsAgo` |  | |  |  | `CURR(23)` | Average Clearing Amount (Last 24 Months) |
