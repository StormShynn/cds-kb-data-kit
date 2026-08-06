---
name: I_DUNNINGENTRY
description: Dunning Entry
app_component: FI-AR-AR-C-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGENTRY')/$value
semantic_en: Dunning Entry
tags:
  - FI
  - component:FI-AR-AR-C-2CL
  - FI-AR
  - FI-AR-AR
  - FI-AR-AR-C
  - FI-AR-AR-C-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_DUNNINGENTRY

**Dunning Entry**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-C-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DUNNINGENTRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DunningRunDate` | `DATS(8)` | Dunning Run Date |
| `DunningRun` | `CHAR(6)` | Dunning Run Identification |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Customer` | `CHAR(10)` | Customer Number |
| `Supplier` | `CHAR(10)` | Supplier |
| `OneTimeAcctBankAccount` | `CHAR(18)` | Bank Account Number |
| `CustomerHeadOffice` | `CHAR(10)` | Head Office Account Number (in branch accounts) |
| `GroupingDunningArea` | `CHAR(2)` | Dunning Area |
| `GroupingDunningLevel` | `NUMC(1)` | Grouping Dunning Level |
| `DunningClerk` | `CHAR(2)` | Dunning Clerk |
| `DunningDate` | `DATS(8)` | Dunning Date |
| `DocIncldUpToPostgDate` | `DATS(8)` | Posting Date up to Which Documents Are Included |
| `DunningRecipient` | `CHAR(10)` | Account Number of the Dunning Recipient |
| `LegDunningProcedureOn` | `DATS(8)` | Date of the Legal Dunning Proceedings |
| `DunningProcedure` | `CHAR(4)` | Dunning Procedure |
| `DunningLevel` | `NUMC(1)` | Dunning Level |
| `InterestCalculationCode` | `CHAR(2)` | Interest Calculation Indicator |
| `DunningCurrency` | `CUKY(5)` | Dunning Currency |
| `DunAreaAcctBalanceDunCrcy` | `CURR(23)` | Dunning Area Account Balance in Dunning Currency |
| `DunAreaAcctBalanceCCCrcy` | `CURR(23)` | Dunning Area Balance in Company Code Currency |
| `DueItemsBlockedInDunCrcy` | `CURR(23)` | Total of Blocked Items in Dunning Currency |
| `NotDueItemsBlockedInDunCrcy` | `CURR(23)` | Total of Blocked Items Not Due in Dunning Currency |
| `DueLineItemsTotalInDunCrcy` | `CURR(23)` | Total Line Items Due in Dunning Currency |
| `DueLineItemsTotalInCCCrcy` | `CURR(23)` | Total of Due Items in Company Code Currency |
| `DunningNoticeIsToBeSent` | `CHAR(1)` | Indicator: Is Dunning Notice To Be Sent? |
| `DunningBlockingReason` | `CHAR(1)` | Dunning Block |
| `MaximumDunningLevel` | `NUMC(1)` | Highest Dunning Level of a Dunning Type |
| `InterestAmountInDunCrcy` | `CURR(23)` | Total Interest for Dunning Notice in Dunning Currency |
| `InterestAmountInCCCrcy` | `CURR(23)` | Total Interest for Dunning Notice in Company Code Currency |
| `InterestIsNotDisplayed` | `CHAR(1)` | Indicator: Do Not Display Interest in the Dunning Notice |
| `DunningNoticeGroup` | `CHAR(2)` | Key for Dunning Notice Grouping |
| `TreasuryContract` | `CHAR(13)` | Contract Number |
| `TreasuryContractType` | `CHAR(1)` | Contract Type |
| `RealEstateObject` | `CHAR(8)` | Internal Key for Real Estate Object |
| `DueItemDunLevelTotalInDunCrcy` | `CURR(23)` | Total of Due Items at Dunning Level in Dunning Currency |
| `DueItemDunLevelTotalInCCCrcy` | `CURR(23)` | Total due items in local currency from dunning level |
| `PostalCode` | `CHAR(10)` | City Postal Code |
| `CityName` | `CHAR(40)` | City |
| `StreetName` | `CHAR(35)` | Street and House Number |
| `POBox` | `CHAR(10)` | PO Box |
| `Country` | `CHAR(3)` | Country/Region Key |
| `PaymentAdvice` | `CHAR(16)` | Payment Advice Number |
| `BusTransEventApplication` | `CHAR(6)` | Application Indicator |
| `DunningChargeInCCCrcy` | `CURR(23)` | Dunning Charge in Company Code Currency |
| `DunningChargeInDunCrcy` | `CURR(23)` | Dunning Charge in Dunning Currency |
| `DunningPrintDate` | `DATS(8)` | Dunning Print Date |
| `LastDunningPrntDate` | `DATS(8)` | Print Date of Last Dunning Notice |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
