---
name: I_ETOPROJMARGOVWCUBE
description: ETO Project Margin - Cube
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ETOPROJMARGOVWCUBE')/$value
semantic_en: ETO Project Margin - Cube
tags:
  - CO
  - bo:project
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - project
  - metadata-only
---
# I_ETOPROJMARGOVWCUBE

**ETO Project Margin - Cube**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ETOPROJMARGOVWCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | `CHAR(2)` | Source Ledger |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningReqTransSqnc` | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | `NUMC(6)` | Financial Planning Data Packet Number |
| `FinancialPlanningEntryItem` | `INT4(10)` | Financial Planning Entry Item |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `CurrencyField` | `CHAR(4)` | Currency Role Field |
| `LineIsSemTagCalculated` | `CHAR(1)` | Indicator: Calculated by Semantic Tag |
| `ActualPlanCode` | `CHAR(1)` | Actual Plan Code |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `PostingDate` | `DATS(8)` | Posting Date |
| `EvtBsdRevnRecgnLastEvalDate` | `DATS(8)` | Last re-evaluation date for event based revenue rec. |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `OriginProfitCenter` | `CHAR(10)` | Origin Profit Center |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `SoldProductGroup` | `CHAR(9)` | Product Sold Group |
| `Customer` | `CHAR(10)` | Customer Number |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `CustomerSupplierCountry` | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `BusinessTransactionType` | `CHAR(4)` | Business Transaction Type |
| `SubLedgerAcctLineItemType` | `NUMC(5)` | Subledger-Specific Line Item Type |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Division |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `ProcessingStatus` | `CHAR(2)` | Object Processing Status |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `BillingWBSElementInternalID` | `NUMC(8)` |  |
| `BillingWBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProjectManagerUUID` | `RAW(16)` | Business Partner GUID |
| `ProjectManager` | `CHAR(10)` | Business Partner Number |
| `PersonWorkAgreement` | `NUMC(8)` | Personnel Number |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `Plant` | `CHAR(4)` | Plant |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `ServiceContract` | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` | `NUMC(6)` | Solution Order Item |
| `ProviderContract` | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` | `NUMC(6)` | Provider Contract Item |
| `ServiceContractType` | `CHAR(4)` | Service Contract Type |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `Project` | `CHAR(24)` | Project (external ID) |
| `ProjectInternalID` | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `OrderID` | `CHAR(12)` | Order ID |
| `Supplier` | `CHAR(10)` | Supplier |
| `AccountingDocumentType` | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` | `CHAR(1)` | Account Type |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `ValuationArea` | `CHAR(4)` | Valuation Area |
| `BillableControl` | `CHAR(2)` | Billable Control |
| `Product` | `CHAR(40)` | Product |
| `ServicesRenderedDate` | `DATS(8)` | Date on which services are rendered |
| `CostAnalysisResource` | `CHAR(10)` | Cost Analysis Resource |
| `TimeSheetOvertimeCategory` | `CHAR(4)` | Overtime Category |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `OriginCostCtrActivityType` | `CHAR(6)` | Origin Cost Center Activity Type |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `IsCommitment` | `CHAR(1)` | Indicator: Is Commitment |
| `ControllingDebitCreditCode` | `CHAR(1)` | CO Debit/Credit Indicator |
| `Currency` | `CUKY(5)` | Currency Key |
| `AmountInDisplayCurrency` | `DEC(23)` |  |
| `BilledRevenueAmtInDspCrcy` | `CURR(23)` | Billed Revenue |
| `ActualSalesDdctdInDspCrcy` | `CURR(23)` | Sales Deduction |
| `ActualCostAmtInDspCrcy` | `CURR(23)` | Actual Cost |
| `ActlFixedCostInDspCrcy` | `CURR(23)` | Actual Fixed Cost |
| `RecognizedRevnAmtInDspCrcy` | `CURR(23)` | Recognized Revenue Amount in Display Currency |
| `RecognizedCOGSAmtInDspCrcy` | `CURR(23)` | Recognized COS |
| `RevenueAdjustmentAmtInDspCrcy` | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInDspCrcy` | `CURR(23)` | COS Adjustment |
| `DeferredRevenueAmtInDspCrcy` | `CURR(23)` | Deferred Revenue |
| `DeferredCOGSAmtInDspCrcy` | `CURR(23)` | Deferred COS |
| `AccruedRevenueAmtInDspCrcy` | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInDspCrcy` | `CURR(23)` | Accrued COS |
| `RecognizedMargAmtInDisplayCrcy` | `CURR(23)` | Recognized Margin |
| `FxdCOGSAmtInDspCrcy` | `CURR(23)` | Cost of Goods Sold - Fixed |
| `AdminOverheadAmtInDspCrcy` | `CURR(23)` | Administration Overhead |
| `SalesOverheadAmtInDspCrcy` | `CURR(23)` | Sales Overhead |
| `MarketingOvhdAmtInDspCrcy` | `CURR(23)` | Marketing Overhead |
| `RnDOverheadAmtInDspCrcy` | `CURR(23)` | Research and Development Overhead |
| `PlannedCosAmtInDspCrcy` | `CURR(23)` | Inverted Amount in Company Code Currency |
| `PlannedRevenueAmtInDspCrcy` | `CURR(23)` | Inverted Amount in Company Code Currency |
| `UnbilledRevnInDspCrcy` | `CURR(23)` | Unbilled Revenue |
| `MnlContrAccrBalShtAmtInDspCrcy` | `CURR(23)` | Manual Contract Accruals Balance Sheet in Display Currency |
| `WIPProjAmtInDspCrcy` | `CURR(23)` | WIP - Project |
| `MatlStkAmtInDspCrcy` | `CURR(23)` | Material Stock |
| `WIPProdnAmtInDspCrcy` | `CURR(23)` | WIP - Production |
| `DownPaymentAmountInDspCrcy` | `CURR(23)` | Open Down Payment Amount in Display Currency |
| `MnlContrAccrIncStatAmtInDC` | `CURR(23)` | Manual Contract Accrual (I/S) |
| `ImminentLossRsrvAdjAmtInDC` | `CURR(23)` | Imminent Loss Reserves Adj. |
| `ImmntLossRsrvBalShtAmtInDC` | `CURR(23)` | Imminent Loss Reserves (B/S) |
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `ProjectUUID` | `RAW(16)` | Entity Guid |
