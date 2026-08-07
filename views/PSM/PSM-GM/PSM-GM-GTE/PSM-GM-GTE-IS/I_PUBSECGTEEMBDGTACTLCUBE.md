---
name: I_PUBSECGTEEMBDGTACTLCUBE
description: Grant Budget Actual Items - Cube
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMBDGTACTLCUBE')/$value
semantic_en: Grant Budget Actual Items - Cube
tags:
  - PSM
  - budget
  - component:PSM-GM-GTE-IS
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
  - metadata-only
---
# I_PUBSECGTEEMBDGTACTLCUBE

**Grant Budget Actual Items - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECGTEEMBDGTACTLCUBE')/$value) |

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
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `GrantStatus` |  | |  |  | `CHAR(5)` | Grant Status |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `BusPartEmplrIndstryCode` |  | |  |  | `CHAR(10)` | Industry |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-from Date |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CityName` |  | |  |  | `CHAR(40)` | City |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `GrantIsNotRelevantGrant` |  | |  |  | `CHAR(1)` | Identify the Not Relevant Grant |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `GrantAuthznGrp` |  | |  |  | `CHAR(10)` | Grants Management: Authorization Groups |
| `GrantLfcycStatusForAuthzn` |  | |  |  | `CHAR(5)` | GM Lifecycle Status for Auth Grp |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
