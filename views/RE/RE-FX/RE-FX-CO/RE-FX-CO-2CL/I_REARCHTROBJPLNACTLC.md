---
name: I_REARCHTROBJPLNACTLC
description: RE Architecture CO Obj Plan Act - Cube
app_component: RE-FX-CO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REARCHTROBJPLNACTLC')/$value
semantic_en: RE Architecture CO Obj Plan Act - Cube
tags:
  - RE
  - component:RE-FX-CO-2CL
  - interface-view
  - plan
  - RE-FX
  - RE-FX-CO
  - RE-FX-CO-2CL
  - metadata-only
---
# I_REARCHTROBJPLNACTLC

**RE Architecture CO Obj Plan Act - Cube**

| Property | Value |
|---|---|
| App Component | `RE-FX-CO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REARCHTROBJPLNACTLC')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` | `CHAR(12)` | Actual Plan Journal Entry Item |
| `REArchitectureObjectNumberSite` | `CHAR(20)` | Architecture Object Number of Site |
| `REArchitectureObjectParentUUID` | `RAW(16)` | UUID for Real Estate Architecture Object |
| `REArchtrObjectNumberBldngLand` | `CHAR(20)` | Architecture Object Number of Building/Land |
| `REArchitectureObjectUUID` | `RAW(16)` | UUID for Real Estate Architecture Object |
| `REGnrcRentalObjPortfolioID` | `CHAR(10)` | Generic Rental Object Portfolio ID |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `CostSourceUnit` | `UNIT(3)` | Cost Source Unit |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `OrderID` | `CHAR(12)` | Order ID |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `ProjectExternalID` | `CHAR(24)` | Project External ID |
| `PostingDate` | `DATS(8)` | Posting Date in the Document |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `WBSElementExternalID` | `CHAR(24)` | WBS Element External ID |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `IsStatisticalOrder` | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `WBSIsStatisticalWBSElement` | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `ActualAmountInCompanyCodeCrcy` | `CURR(23)` | Actual Amount in Company Code Currency |
| `ActualAmountInTransactionCrcy` | `CURR(23)` | Actual Amount in Transaction Currency |
| `ActualAmountInGlobalCurrency` | `CURR(23)` | Actual Amount in Global Currency |
| `PlanAmountInCompanyCodeCrcy` | `CURR(23)` | Plan Amount in Company Code Currency |
| `PlanAmountInTransactionCrcy` | `CURR(23)` | Plan Amount in Transaction Currency |
| `PlanAmountInGlobalCurrency` | `CURR(23)` | Plan Amount in Global Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `ValuationQuantity` | `QUAN(23)` | Valuation Quantity |
| `ActualValuationQuantity` | `QUAN(23)` | Actual Valuation Quantity |
| `PlanValuationQuantity` | `QUAN(23)` | Plan Valuation Quantity |
