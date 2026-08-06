---
name: I_PLANLINEITEMSEMTAG
description: This CDS view provides the prerequisites for answering the following business questions: What are the plan KPI amounts for each plan entry item? What is my plan net cash amount in company code currency?
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANLINEITEMSEMTAG')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What are the plan KPI amounts for each plan entry item? What is my plan net cash amount in company code currency?
tags:
  - FI
  - bo:plant
  - component:FI-FIO-GL-HIE-2CL
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-HIE
  - FI-FIO-GL-HIE-2CL
  - interface-view
  - lob:finance
  - plan
  - metadata-only
---
# I_PLANLINEITEMSEMTAG

**This CDS view provides the prerequisites for answering the following business questions: What are the plan KPI amounts for each plan entry item? What is my plan net cash amount in company code currency?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANLINEITEMSEMTAG')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FinancialPlanningReqTransSqnc` | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | `NUMC(6)` | Financial Planning Data Packet Number |
| `FinancialPlanningEntryItem` | `INT4(10)` | Financial Planning Entry Item |
| `GLAccountHierarchy` | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ValidityStartDate` | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | `DATS(8)` | Valid To Date |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Ledger` | `CHAR(2)` | Ledger |
| `GLAccount` | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` | `CHAR(4)` | Chart of Accounts |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `Project` | `CHAR(24)` | Project |
| `ProjectInternalID` | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `PartnerProjectInternalID` | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `WBSElement` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `PartnerWBSElementInternalID` | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `FunctionalArea` | `CHAR(16)` | Functional Area |
| `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `CostCtrActivityType` | `CHAR(6)` | Activity Type |
| `CostAnalysisResource` | `CHAR(10)` | Cost Analysis Resource |
| `WorkPackage` | `CHAR(50)` | Plan Item |
| `WorkItem` | `CHAR(10)` | Work Item ID |
| `BillableControl` | `CHAR(2)` | Billable Control |
| `IsLotSizeIndependent` | `CHAR(1)` | Is Lot Size Independent |
| `PartnerCompanyCode` | `CHAR(4)` | Company Code of Partner |
| `OriginCostCtrActivityType` | `CHAR(6)` | Activity Type of the Origin Cost Center |
| `PartnerBusinessArea` | `CHAR(4)` | Partner Business Area |
| `PartnerSegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerProfitCenter` | `CHAR(10)` | Partner Profit Center |
| `PartnerCostCenter` | `CHAR(10)` | Partner Cost Center |
| `PartnerProject` | `CHAR(24)` | Partner Project |
| `PartnerWBSElement` | `CHAR(24)` | Partner WBS Element |
| `PartnerFunctionalArea` | `CHAR(16)` | Partner Functional Area |
| `PartnerCostCtrActivityType` | `CHAR(6)` | Partner Cost Center Activity Type |
| `OrderID` | `CHAR(12)` | Order ID |
| `PartnerOrder` | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` | `CHAR(12)` | Partner Order |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `ReferenceDocumentType` | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentContext` | `CHAR(10)` | Reference Document Context |
| `ReferenceDocument` | `CHAR(10)` | Reference Doc. Number |
| `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` | `CURR(23)` | Amount in Global Currency |
| `FreeDefinedCurrency1` | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FreeDefinedCurrency2` | `CUKY(5)` | Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `FreeDefinedCurrency3` | `CUKY(5)` | Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `FreeDefinedCurrency4` | `CUKY(5)` | Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `FreeDefinedCurrency5` | `CUKY(5)` | Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `FreeDefinedCurrency6` | `CUKY(5)` | Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `FreeDefinedCurrency7` | `CUKY(5)` | Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `FreeDefinedCurrency8` | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `ControllingObjectCurrency` | `CUKY(5)` | CO Object Currency |
| `AmountInObjectCurrency` | `CURR(23)` | Amount in CO Object Currency |
| `FixedAmountInGlobalCrcy` | `CURR(23)` | Fixed Amount in Global Currency |
| `CostSourceUnit` | `UNIT(3)` | Unit of Measure |
| `ValuationQuantity` | `QUAN(23)` | Valuation Quantity |
| `FiscalPeriod` | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `PostingDate` | `DATS(8)` | Posting Date |
| `SubLedgerAcctLineItemType` | `NUMC(5)` | Subledger-Specific Line Item Type |
| `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `SalesDocument` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | `NUMC(6)` | Sales Document Item |
| `Plant` | `CHAR(4)` | Plant |
| `Material` | `CHAR(40)` | Material Number |
| `Customer` | `CHAR(10)` | Customer Number |
| `PlanningCategory` | `CHAR(10)` | Plan Category |
| `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `ControllingDebitCreditCode` | `CHAR(1)` | CO Debit/Credit Indicator |
| `PersonnelNumber` | `NUMC(8)` | Personnel Number |
| `IsStatisticalOrder` | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` | `CHAR(1)` | Indicator: Sales Order Item is Statisticl Account Assignment |
| `WBSIsStatisticalWBSElement` | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `BillingDocumentType` | `CHAR(4)` | Billing Type |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `Division` | `CHAR(2)` | Division |
| `OrganizationDivision` | `CHAR(2)` | Organization Division |
| `SoldMaterial` | `CHAR(40)` | Sold Material |
| `SoldProduct` | `CHAR(40)` | Product Sold |
| `MaterialGroup` | `CHAR(9)` | Product Sold Group |
| `ProductGroup` | `CHAR(9)` | Material Group |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` | `CHAR(3)` | Country/Region of Customer or Supplier |
| `CustomerSupplierIndustry` | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` | `CHAR(10)` | Customer Supplier Corporate Group |
| `AssetDepreciationArea` | `NUMC(2)` | Depreciation Area Real or Derived |
| `MasterFixedAsset` | `CHAR(12)` | Main Asset Number |
| `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `AssetAcctTransClassfctn` | `CHAR(2)` | Transaction Type Category |
| `AssetClass` | `CHAR(8)` | Asset Class |
| `PlnRevenueAmountInCCCrcy` | `CURR(23)` | Plan Revenue Amount in Company Code Currency |
| `PlnGrossRevenueAmtInCCCrcy` | `CURR(23)` | Plan Gross Revenue Amount in Company Code Currency |
| `PlnRecognizedRevnAmtInCCCrcy` | `CURR(23)` | Plan Recognized Revenue Amount in Company Code Currency |
| `PlnRecgdRevenueAmtInGlobCrcy` | `CURR(23)` | Planned Recognized Revenue Amount In Global Currency |
| `PlnRevnAdjustmentAmtInCCCrcy` | `CURR(23)` | Plan Revenue Adjustment Amount in Company Code Currency |
| `PlnDeferredRevenueAmtInCCCrcy` | `CURR(23)` | Plan Deferred Revenue Amount in Company Code Currency |
| `PlnAccruedRevenueAmtInCCCrcy` | `CURR(23)` | Plan Accrued Revenue Amount in Company Code Currency |
| `PlnBilledRevenueAmtInCCCrcy` | `CURR(23)` | Plan Billed Revenue Amount In Company Code Currency |
| `PlnBilledRevenueAmtInGlobCrcy` | `CURR(23)` | Plan Billed Revenue Amount In Global Currency |
| `PlnRecognizedMargAmtInCCCrcy` | `CURR(23)` | Plan Recognized Margin Amount in Company Code Currency |
| `PlnCostAmtInCompanyCodeCrcy` | `CURR(23)` | Plan Cost Amount in Company Code Currency |
| `PlnRecognizedCOGSAmtInCCCrcy` | `CURR(23)` | Plan Recognized Cost Of Goods Sold Amount In CC Currency |
| `PlnCOGSAdjustmentAmtInCCCrcy` | `CURR(23)` | Plan Cost Of Goods Sold Adjustment Amount In CC Currency |
| `PlnDeferredCOGSAmtInCCCrcy` | `CURR(23)` | Plan Defferred Cost Of Goods Sold Amount In CC Currency |
| `PlnAccruedCOGSAmtInCCCrcy` | `CURR(23)` | Plan Accrued Cost Of Sold Goods Amount in CC currency |
| `PlnRecgblCostAmtInCCCrcy` | `CURR(23)` | Plan Recognizable Cost Amount in Company Code Currency |
| `PlnCostOfGdsSoldAmtInGlobCrcy` | `CURR(23)` | Planned Cost of Goods Sold Amount In Global Currency |
| `PlnImmntLossRsrvAmtInCCCrcy` | `CURR(23)` | Plan Reserves for Imminent Loss Amount in CC Currency |
| `PlnSalesDeductRsrvAmtInCCCrcy` | `CURR(23)` | Plan Reserve for Anticipated Sales Deductions Amt InCCCrcy |
| `PlnUnrlzdCostsRsrvAmtInCCCrcy` | `CURR(23)` | Plan Reserves for Unrealized Costs Amt in CompanyCode Crcy |
| `PlnSlsDeductionAmtInGlobCrcy` | `CURR(23)` | Plan Sales Deduction Amount In Global Currency |
| `PlnSlsDeductionAmtInCCCrcy` | `CURR(23)` | Planned Sales Deduction Amount In Company Currency |
| `PlnPrcDifferenceAmtInGlobCrcy` | `CURR(23)` | Plan Price Differences Amount In Global Currency |
| `PlnAdminOverheadAmtInGlobCrcy` | `CURR(23)` | Plan Administration Overhead Amount in Global Currency |
| `PlnSalesOverheadAmtInGlobCrcy` | `CURR(23)` | Plan Sales Overhead Amount in Global Currency |
| `PlnMarketingOvhdAmtInGlobCrcy` | `CURR(23)` | Plan Marketing Overhead Amount in Global Currency |
| `PlnRnDOverheadAmtInGlobCrcy` | `CURR(23)` | Plan Research and Development Overhead Amt in Global Crcy |
| `PlnLongTermInvmtAmtInCCCrcy` | `CURR(23)` | Plan Long-term Investments Amount in Company Code Currency |
| `PlnAcctsRblAmtInCCCrcy` | `CURR(23)` | Plan Accounts Receivable Amount in Company Code currency |
| `PlnAcctsOthRblAmtInCCCrcy` | `CURR(23)` | Plan Accounts Other Receivable Amt In CompanyCode Currency |
| `PlnAcctsPyblAmtInCCCrcy` | `CURR(23)` | Plan Accounts Payable Amount InCompanyCodeCurrency |
| `PlnAcctsOthPyblAmtInCCCrcy` | `CURR(23)` | Plan Accounts Other Payable Amount In CompanyCode Currency |
| `PlnProvisionAmtInCCCrcy` | `CURR(23)` | Plan Provision Amount In CompanyCode Currency |
| `PlnNotesReceivableAmtInCCCrcy` | `CURR(23)` | Plan Notes Receivable Amount In CompanyCode Currency |
| `PlnTangibleAstDeprAmtInCCCrcy` | `CURR(23)` | Plan Depreciation of Tangible Assets Amount In CC Currency |
| `PlnIntngblAstAmtznAmtInCCCrcy` | `CURR(23)` | Plan Intangible Assets Amortization Amt in Co Code Crcy |
| `PlnTangibleAstAmtInCCCrcy` | `CURR(23)` | Plan Tangible Asset Amount InCompanyCodeCurrency |
| `PlnIntangibleAstAmtInCCCrcy` | `CURR(23)` | Plan Intangible Asset Amount InCompanyCodeCurrency |
| `PlnFxdAstRtrmtAmtInCCCrcy` | `CURR(23)` | Plan Investing Fixed Asset Retirement Amt In CC Currency |
| `PlnInventoryAmtInCCCrcy` | `CURR(23)` | Plan Inventory Amount In CompanyCode Currency |
| `PlnCommonStockAmtInCCCrcy` | `CURR(23)` | Plan Common Stocks Amount in Company Code Currency |
| `PlnCshAndCshEqvlntAmtInCCCrcy` | `CURR(23)` | Plan Cash And Cash Equivalent Amount InCompanyCodeCurrency |
| `PlnAssetAmtInCCCrcy` | `CURR(23)` | Plan Asset Amount In CompanyCode Currency |
| `PlnLbltyEquityAmtInCCCrcy` | `CURR(23)` | Plan Liabilities and Equity Amount In Company Code Currency |
| `PlnNotAssignedAmtInCCCrcy` | `CURR(23)` | Plan Not Assigned Amount In Company Code Currency |
| `PlnNetRsltAmtInCCCrcy` | `CURR(23)` | Plan Net Result Amount In Company Code Currency |
| `PlnPnLResultAmtInCCCrcy` | `CURR(23)` | Plan P&L Result Amount In company code currency |
| `PlnGLAcctNetIncAmtInCCCrcy` | `CURR(23)` | Plan Net Income Amount In CompanyCode Currency |
| `PlnContrbnMarg2AmtInGlobCrcy` | `CURR(23)` | Plan Contribution Margin II In Global Currency |
| `PlnOpgActyCashAmtInCCCrcy` | `CURR(23)` | Plan Operating Activity Cash Amount InCompanyCodeCurrency |
| `PlnInvstgActyCashAmtInCCCrcy` | `CURR(23)` | Plan Investing Activity Cash Amount In CompanyCodeCurrency |
| `PlnFinActyCashAmtInCCCrcy` | `CURR(23)` | Plan Financing Activity Cash Amount InCompanyCodeCurrency |
| `PlnNetCashAmtInCCCrcy` | `CURR(23)` | Plan Net Cash Amount In CompanyCode Currency |
| `GLAccountAuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` | `CHAR(4)` | Authorization Group |
| `OrderType` | `CHAR(4)` | Order Type |
| `SalesOrderType` | `CHAR(4)` | Sales Document Type |
| `FunctionalCurrency` | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` | `CURR(23)` | Amount in Functional Currency |
