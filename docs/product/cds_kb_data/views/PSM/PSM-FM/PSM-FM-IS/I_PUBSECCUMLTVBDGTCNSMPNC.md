---
name: I_PUBSECCUMLTVBDGTCNSMPNC
description: "Cumulative bdgt cnsmpn values - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCUMLTVBDGTCNSMPNC')/$value
semantic_en: "Cumulative bdgt cnsmpn values - Cube"
tags:
  - PSM
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
  - metadata-only
---
# I_PUBSECCUMLTVBDGTCNSMPNC

**Cumulative bdgt cnsmpn values - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCUMLTVBDGTCNSMPNC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` |  | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` |  | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` |  | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BudgetAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `ConsumedAmountInCCCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AvailableAmountInCCCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BdgtConsumableAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BdgtConsumedAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `BdgtAvailableAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
