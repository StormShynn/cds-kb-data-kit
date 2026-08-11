---
name: I_PLANLINEITEMSEMTAG
description: "This CDS view provides the prerequisites for answering the following business questions: What are the plan KPI amounts for each plan entry item? What is my plan net cash amount in company code currency?"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANLINEITEMSEMTAG')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the plan KPI amounts for each plan entry item? What is my plan net cash amount in company code currency?"
semantic_vi: "Plan Line Item with Semantic Tag — CDS view giao diện dựa trên P_PlanLineItemSemTag."
keywords:
  - "plan"
  - "line"
  - "item"
  - "with"
  - "semantic"
  - "tag"
  - "financial"
  - "planning"
  - "trans"
  - "sqnc"
  - "data"
  - "packet"
  - "entry"
  - "account"
  - "hierarchy"
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
---
# I_PLANLINEITEMSEMTAG

**This CDS view provides the prerequisites for answering the following business questions: What are the plan KPI amounts for each plan entry item? What is my plan net cash amount in company code currency?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANLINEITEMSEMTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `FinancialPlanningEntryItem` | ✓ | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `GLAccountHierarchy` | ✓ | |  |  | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` | ✓ | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ValidityStartDate` | ✓ | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalQuarter` |  | | `_FiscalCalendarDate` | `FiscalQuarter` | `NUMC(1)` | Fiscal Quarter |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Project` |  | |  |  | `CHAR(24)` | Project |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | | `_ProjectBasicData` | `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | | `_ProjectBasicData` | `ProjectExternalID` | `CHAR(24)` | Project Number (External) Edited |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | | `_WBSElementBasicData` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | | `_WBSElementBasicData` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `IsLotSizeIndependent` |  | |  |  | `CHAR(1)` | Is Lot Size Independent |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of Partner |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type of the Origin Cost Center |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProject` |  | |  |  | `CHAR(24)` | Partner Project |
| `PartnerWBSElement` |  | |  |  | `CHAR(24)` | Partner WBS Element |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `ControllingObjectCurrency` |  | |  |  | `CUKY(5)` | CO Object Currency |
| `AmountInObjectCurrency` |  | |  |  | `CURR(23)` | Amount in CO Object Currency |
| `FixedAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Global Currency |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `GLAccountType` |  | | `_GLAccountInChartOfAccounts` | `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Indicator: Sales Order Item is Statisticl Account Assignment |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `SoldMaterial` |  | |  |  | `CHAR(40)` | Sold Material |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Country/Region of Customer or Supplier |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Supplier Corporate Group |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Depreciation Area Real or Derived |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Main Asset Number |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `PlnRevenueAmountInCCCrcy` |  | |  |  | `CURR(23)` | Plan Revenue Amount in Company Code Currency |
| `PlnGrossRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Gross Revenue Amount in Company Code Currency |
| `PlnRecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Recognized Revenue Amount in Company Code Currency |
| `PlnRecgdRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Planned Recognized Revenue Amount In Global Currency |
| `PlnRevnAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Revenue Adjustment Amount in Company Code Currency |
| `PlnDeferredRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Deferred Revenue Amount in Company Code Currency |
| `PlnAccruedRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Accrued Revenue Amount in Company Code Currency |
| `PlnBilledRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Billed Revenue Amount In Company Code Currency |
| `PlnBilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Billed Revenue Amount In Global Currency |
| `PlnRecognizedMargAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Recognized Margin Amount in Company Code Currency |
| `PlnCostAmtInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Plan Cost Amount in Company Code Currency |
| `PlnRecognizedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Recognized Cost Of Goods Sold Amount In CC Currency |
| `PlnCOGSAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Cost Of Goods Sold Adjustment Amount In CC Currency |
| `PlnDeferredCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Defferred Cost Of Goods Sold Amount In CC Currency |
| `PlnAccruedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Accrued Cost Of Sold Goods Amount in CC currency |
| `PlnRecgblCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Recognizable Cost Amount in Company Code Currency |
| `PlnCostOfGdsSoldAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Planned Cost of Goods Sold Amount In Global Currency |
| `PlnImmntLossRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Reserves for Imminent Loss Amount in CC Currency |
| `PlnSalesDeductRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Reserve for Anticipated Sales Deductions Amt InCCCrcy |
| `PlnUnrlzdCostsRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Reserves for Unrealized Costs Amt in CompanyCode Crcy |
| `PlnSlsDeductionAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Sales Deduction Amount In Global Currency |
| `PlnSlsDeductionAmtInCCCrcy` |  | |  |  | `CURR(23)` | Planned Sales Deduction Amount In Company Currency |
| `PlnPrcDifferenceAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Price Differences Amount In Global Currency |
| `PlnAdminOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Administration Overhead Amount in Global Currency |
| `PlnSalesOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Sales Overhead Amount in Global Currency |
| `PlnMarketingOvhdAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Marketing Overhead Amount in Global Currency |
| `PlnRnDOverheadAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Plan Research and Development Overhead Amt in Global Crcy |
| `PlnLongTermInvmtAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Long-term Investments Amount in Company Code Currency |
| `PlnAcctsRblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Accounts Receivable Amount in Company Code currency |
| `PlnAcctsOthRblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Accounts Other Receivable Amt In CompanyCode Currency |
| `PlnAcctsPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Accounts Payable Amount InCompanyCodeCurrency |
| `PlnAcctsOthPyblAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Accounts Other Payable Amount In CompanyCode Currency |
| `PlnProvisionAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Provision Amount In CompanyCode Currency |
| `PlnNotesReceivableAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Notes Receivable Amount In CompanyCode Currency |
| `PlnTangibleAstDeprAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Depreciation of Tangible Assets Amount In CC Currency |
| `PlnIntngblAstAmtznAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Intangible Assets Amortization Amt in Co Code Crcy |
| `PlnTangibleAstAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Tangible Asset Amount InCompanyCodeCurrency |
| `PlnIntangibleAstAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Intangible Asset Amount InCompanyCodeCurrency |
| `PlnFxdAstRtrmtAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Investing Fixed Asset Retirement Amt In CC Currency |
| `PlnInventoryAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Inventory Amount In CompanyCode Currency |
| `PlnCommonStockAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Common Stocks Amount in Company Code Currency |
| `PlnCshAndCshEqvlntAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Cash And Cash Equivalent Amount InCompanyCodeCurrency |
| `PlnAssetAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Asset Amount In CompanyCode Currency |
| `PlnLbltyEquityAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Liabilities and Equity Amount In Company Code Currency |
| `PlnNotAssignedAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Not Assigned Amount In Company Code Currency |
| `PlnNetRsltAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Net Result Amount In Company Code Currency |
| `PlnPnLResultAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan P&L Result Amount In company code currency |
| `PlnGLAcctNetIncAmtInCCCrcy` |  | |  |  | `CURR(23)` | Plan Net Income Amount In CompanyCode Currency |
| `PlnContrbnMarg2AmtInGlobCrcy` |  | |  | `cast ( ( PlnBilledRevenueAmtInGlobCrcy + PlnSlsDeductionAmtInGlobCrcy + PlnRevnAdjustmentAmtInCCCrcy + PlnCostOfGdsSoldAmtInGlobCrcy + PlnPrcDifferenceAmtInGlobCrcy ) as fis_contrbn_margin_ii_ksl_p)` | `CURR(23)` | Plan Contribution Margin II In Global Currency |
| `PlnOpgActyCashAmtInCCCrcy` |  | |  | `cast ( PlnGLAcctNetIncAmtInCCCrcy - PlnTangibleAstDeprAmtInCCCrcy - PlnIntngblAstAmtznAmtInCCCrcy - PlnFxdAstRtrmtAmtInCCCrcy - PlnProvisionAmtInCCCrcy - PlnInventoryAmtInCCCrcy - PlnAcctsRblAmtInCCCrcy - PlnAcctsOthRblAmtInCCCrcy + PlnAcctsPyblAmtInCCCrcy + PlnAcctsOthPyblAmtInCCCrcy as fis_cfs_cashopg_hsl_p)` | `CURR(23)` | Plan Operating Activity Cash Amount InCompanyCodeCurrency |
| `PlnInvstgActyCashAmtInCCCrcy` |  | |  | `cast ( - PlnTangibleAstAmtInCCCrcy + PlnTangibleAstDeprAmtInCCCrcy - PlnIntangibleAstAmtInCCCrcy + PlnIntngblAstAmtznAmtInCCCrcy + PlnFxdAstRtrmtAmtInCCCrcy - PlnLongTermInvmtAmtInCCCrcy as fis_cfs_cashinvtg_hsl_p)` | `CURR(23)` | Plan Investing Activity Cash Amount In CompanyCodeCurrency |
| `PlnFinActyCashAmtInCCCrcy` |  | |  | `cast ( PlnCommonStockAmtInCCCrcy + PlnNotesReceivableAmtInCCCrcy as fis_cfs_cashfin_hsl_p)` | `CURR(23)` | Plan Financing Activity Cash Amount InCompanyCodeCurrency |
| `PlnNetCashAmtInCCCrcy` |  | |  | `cast ( ( PlnGLAcctNetIncAmtInCCCrcy - PlnTangibleAstDeprAmtInCCCrcy - PlnIntngblAstAmtznAmtInCCCrcy - PlnFxdAstRtrmtAmtInCCCrcy - PlnProvisionAmtInCCCrcy - PlnInventoryAmtInCCCrcy - PlnAcctsRblAmtInCCCrcy - PlnAcctsOthRblAmtInCCCrcy + PlnAcctsPyblAmtInCCCrcy + PlnAcctsOthPyblAmtInCCCrcy) + ( - PlnTangibleAstAmtInCCCrcy + PlnTangibleAstDeprAmtInCCCrcy - PlnIntangibleAstAmtInCCCrcy + PlnIntngblAstAmtznAmtInCCCrcy + PlnFxdAstRtrmtAmtInCCCrcy - PlnLongTermInvmtAmtInCCCrcy) + ( PlnCommonStockAmtInCCCrcy + PlnNotesReceivableAmtInCCCrcy) as fis_cfs_netcash_hsl_p)` | `CURR(23)` | Plan Net Cash Amount In CompanyCode Currency |
| `GLAccountAuthorizationGroup` |  | |  | `cast( '' as brgru)` | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( '' as brgru)` | `CHAR(4)` | Authorization Group |
| `OrderType` |  | |  | `cast( '' as aufart)` | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  | `cast( '' as auart)` | `CHAR(4)` | Sales Document Type |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_WBSElementExternalIDText` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElemntExtrnalIDText` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_PartnerProjctExtrnalIDText` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_ProjectExternalIDText` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_LedgerFiscalYear` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |
| `_FiscalPeriod` | | ✓ | | | | |
| `_FiscalPeriodForVariant` | | ✓ | | | | |
| `_SubLedgerAccLineItemType` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_FiscalCalendarDate` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_FreeDefinedCurrency1` | | ✓ | | | | |
| `_FreeDefinedCurrency2` | | ✓ | | | | |
| `_FreeDefinedCurrency3` | | ✓ | | | | |
| `_FreeDefinedCurrency4` | | ✓ | | | | |
| `_FreeDefinedCurrency5` | | ✓ | | | | |
| `_FreeDefinedCurrency6` | | ✓ | | | | |
| `_FreeDefinedCurrency7` | | ✓ | | | | |
| `_FreeDefinedCurrency8` | | ✓ | | | | |
| `_ControllingObjectCurrency` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementByInternalKey` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_PartnerWBSElementBasicData` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_PartnerProjectBasicData` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_CostAnalysisResource` | | ✓ | | | | |
| `_WorkPackageWorkItem` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_PartnerCompanyCode` | | ✓ | | | | |
| `_OriginCostCtrActivityType` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_PartnerWBSElement` | | ✓ | | | | |
| `_PartnerProject` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_PartnerOrder` | | ✓ | | | | |
| `_PartnerOrder_2` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ControllingDebitCreditCode` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SoldMaterial` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_PlanningCategory` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_WBSElementExternalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElemntExtrnalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjctExtrnalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectExternalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANLINEITEMSEMTAG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANLINEITEMSEMTAG')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIPLGLACCTLITST'
@EndUserText.label: 'Plan Line Item with Semantic Tag'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@Analytics.dataCategory: #CUBE
//@ObjectModel.representativeKey: 'LedgerGLLineItem'
@AbapCatalog.preserveKey:true
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@Consumption.dbHints: ['USE_HEX_PLAN','NO_JOIN_THRU_AGGR']
define view I_PlanLineItemSemTag
  as select from P_PlanLineItemSemTag

  association [0..1] to I_WBSElementByExternalID as _WBSElementExternalID          on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID as _WBSElementExternalIDText      on  $projection.WBSElementExternalID = _WBSElementExternalIDText.WBSElementExternalID


  association [0..1] to I_WBSElementByExternalID as _PartnerWBSElementExternalID   on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID as _PartnerWBSElemntExtrnalIDText on  $projection.PartnerWBSElementExternalID = _PartnerWBSElemntExtrnalIDText.WBSElementExternalID
  //
  association [0..1] to I_ProjectByExternalID    as _PartnerProjectExternalID      on  $projection.PartnerProjectExternalID = _PartnerProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID    as _PartnerProjctExtrnalIDText    on  $projection.PartnerProjectExternalID = _PartnerProjctExtrnalIDText.ProjectExternalID

  association [0..1] to I_ProjectByExternalID    as _ProjectExternalID             on  $projection.ProjectExternalID = _ProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID    as _ProjectExternalIDText         on  $projection.ProjectExternalID = _ProjectExternalIDText.ProjectExternalID
  association [0..1] to I_MasterFixedAsset       as _MasterFixedAsset              on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                   and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [0..1] to I_FixedAsset             as _FixedAsset                    on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                                   and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                   and $projection.FixedAsset       = _FixedAsset.FixedAsset
{

  key FinancialPlanningReqTransSqnc,
  key FinancialPlanningDataPacket,
  key FinancialPlanningEntryItem,
      ///////////////////////////////////////////////////////////////////////
      // I_SemTagFuncArea
      ///////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key GLAccountHierarchy,
      @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
      @Semantics.businessDate.from: true
  key ValidityStartDate,
      @Semantics.businessDate.to: true
  key ValidityEndDate,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_Ledger'
      Ledger,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_FiscalYear'
      FiscalYear,
      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant' // '_LedgerFiscalYear'
      @Semantics.fiscal.year: true
      LedgerFiscalYear,
      _FiscalCalendarDate.FiscalQuarter         as FiscalQuarter,

      ////////////////////////////////////////////////////////////////////////////////////
      // G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      @ObjectModel.foreignKey.association: '_Project'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'ProjectInternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ProjectInternalID'
      Project,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectBasicData'
      ProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      _ProjectBasicData.ProjectExternalID       as ProjectExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      PartnerProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      _ProjectBasicData.ProjectExternalID       as PartnerProjectExternalID,
      @ObjectModel.foreignKey.association: '_WBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'WBSElementInternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementInternalID'
      WBSElement,
      //      @ObjectModel.foreignKey.association: '_WBSElementByInternalKey'
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      _WBSElementBasicData.WBSElementExternalID as WBSElementExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      PartnerWBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      _WBSElementBasicData.WBSElementExternalID as PartnerWBSElementExternalID,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      CostAnalysisResource,
      @ObjectModel.foreignKey.association: '_WorkPackage'
      WorkPackage,
      @ObjectModel.foreignKey.association: '_WorkPackageWorkItem'
      WorkItem,
      BillableControl,
      IsLotSizeIndependent,

      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      OriginCostCtrActivityType,
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      PartnerBusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      PartnerSegment,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerProject'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerProjectInternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerProjectInternalID'
      PartnerProject,
      @ObjectModel.foreignKey.association: '_PartnerWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerWBSElementInternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerWBSElementInternalID'
      PartnerWBSElement,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      PartnerCostCtrActivityType,
      @ObjectModel.foreignKey.association: '_Order'
      OrderID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerOrder_2'
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      PartnerOrder,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      PartnerOrder_2,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      PartnerCompany,

      ////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_00 Universal Journal Entry: Transaction
      ////////////////////////////////////////////////////////////////////////////////////

      ReferenceDocumentType,
      ReferenceDocumentContext,
      ReferenceDocument,

      /////////////////////////////////////////////////////////////////////////////////////
      // Value Fields
      /////////////////////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AmountInTransactionCurrency,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode:true
      CompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,

      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      @Semantics.currencyCode:true
      GlobalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      AmountInGlobalCurrency,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      @Semantics.currencyCode:true
      FreeDefinedCurrency1,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      AmountInFreeDefinedCurrency1,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      @Semantics.currencyCode:true
      FreeDefinedCurrency2,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      AmountInFreeDefinedCurrency2,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      @Semantics.currencyCode:true
      FreeDefinedCurrency3,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      AmountInFreeDefinedCurrency3,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      @Semantics.currencyCode:true
      FreeDefinedCurrency4,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      AmountInFreeDefinedCurrency4,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      @Semantics.currencyCode:true
      FreeDefinedCurrency5,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      AmountInFreeDefinedCurrency5,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      @Semantics.currencyCode:true
      FreeDefinedCurrency6,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      AmountInFreeDefinedCurrency6,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      @Semantics.currencyCode:true
      FreeDefinedCurrency7,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      AmountInFreeDefinedCurrency7,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      @Semantics.currencyCode:true
      FreeDefinedCurrency8,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      AmountInFreeDefinedCurrency8,

      @ObjectModel.foreignKey.association: '_ControllingObjectCurrency'
      @Semantics.currencyCode:true
      ControllingObjectCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      AmountInObjectCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      FixedAmountInGlobalCrcy,

      //@ObjectModel.foreignKey.association: '_BaseUnit'
      //@Semantics.unitOfMeasure:true
      //runit as BaseUnit,

      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      @Semantics.unitOfMeasure:true
      CostSourceUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      ValuationQuantity,

      /////////////////////////////////////////////////////////////////////////////
      // Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////

      @Analytics.internalName: #LOCAL
      @Semantics.fiscal.period: true
      @ObjectModel.foreignKey.association: '_FiscalPeriod'
      FiscalPeriod,
      FiscalYearPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      FiscalYearVariant,
      PostingDate,
      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      SubLedgerAcctLineItemType,
      _GLAccountInChartOfAccounts.GLAccountType as GLAccountType,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_GEN  Fields for several subledgers
      ///////////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_Material'
      Material,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
      ///////////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_PlanningCategory'
      PlanningCategory,
      AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      ControllingDebitCreditCode,
      @ObjectModel.foreignKey.association: '_Employment'
      PersonnelNumber,

      //////////////////////////////////

      IsStatisticalOrder,
      IsStatisticalCostCenter,
      IsStatisticalSalesDocument,
      WBSIsStatisticalWBSElement,

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
      //////////////////////////////////////////////////////////////////////


      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      //@ObjectModel.foreignKey.association: '_Division'
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SoldMaterial'
      SoldMaterial,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      ProductGroup,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      CustomerSupplierCountry,
      CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      CustomerSupplierCorporateGroup,

      AssetDepreciationArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      MasterFixedAsset,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FixedAsset'
      FixedAsset,
      AssetAcctTransClassfctn,

      AssetClass,

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Key Figures
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      ////////////////////
      // Revenue
      ////////////////////

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnRevenueAmountInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnGrossRevenueAmtInCCCrcy, //GrossRevenue,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnRecognizedRevnAmtInCCCrcy, //GrossRevenue,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnRecgdRevenueAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnRevnAdjustmentAmtInCCCrcy, //GrossRevenueAdjusted,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnDeferredRevenueAmtInCCCrcy, //GrossRevenueDeferred,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAccruedRevenueAmtInCCCrcy, //GrossRevenueAccrued,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnBilledRevenueAmtInCCCrcy, //GrossRevenueActual,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnBilledRevenueAmtInGlobCrcy, //GrossRevenueActual,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnRecognizedMargAmtInCCCrcy, //GrossProfit,

      ////////////////////
      // Cost
      ////////////////////

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnCostAmtInCompanyCodeCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnRecognizedCOGSAmtInCCCrcy, //CostofGoodsSold,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnCOGSAdjustmentAmtInCCCrcy, //CostofGoodsSoldAdjusted,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnDeferredCOGSAmtInCCCrcy, //CostofGoodsSoldDeferred,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAccruedCOGSAmtInCCCrcy, //CostofGoodsSoldAccrued,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnRecgblCostAmtInCCCrcy, //CostofGoodsSoldActual,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnCostOfGdsSoldAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnImmntLossRsrvAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnSalesDeductRsrvAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnUnrlzdCostsRsrvAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnSlsDeductionAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnSlsDeductionAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnPrcDifferenceAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnAdminOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnSalesOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnMarketingOvhdAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PlnRnDOverheadAmtInGlobCrcy,

      ///////////////////////////////////////////////////////////////////////
      // Cash Flow Statement (IFRS)
      ///////////////////////////////////////////////////////////////////////

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnLongTermInvmtAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAcctsRblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAcctsOthRblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAcctsPyblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAcctsOthPyblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnProvisionAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnNotesReceivableAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnTangibleAstDeprAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnIntngblAstAmtznAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnTangibleAstAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnIntangibleAstAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnFxdAstRtrmtAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnInventoryAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnCommonStockAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnCshAndCshEqvlntAmtInCCCrcy,

      /////////////////////////////////////////////////////////////////////////////
      // Fixed Semantic Tags
      /////////////////////////////////////////////////////////////////////////////
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnAssetAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnLbltyEquityAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnNotAssignedAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnNetRsltAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnPnLResultAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PlnGLAcctNetIncAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast ( (
        PlnBilledRevenueAmtInGlobCrcy + PlnSlsDeductionAmtInGlobCrcy + PlnRevnAdjustmentAmtInCCCrcy + PlnCostOfGdsSoldAmtInGlobCrcy +
        PlnPrcDifferenceAmtInGlobCrcy )
      as fis_contrbn_margin_ii_ksl_p)           as PlnContrbnMarg2AmtInGlobCrcy,


      // Cash Flow Statement (IFRS)
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      cast (
        PlnGLAcctNetIncAmtInCCCrcy - PlnTangibleAstDeprAmtInCCCrcy - PlnIntngblAstAmtznAmtInCCCrcy - PlnFxdAstRtrmtAmtInCCCrcy
        - PlnProvisionAmtInCCCrcy - PlnInventoryAmtInCCCrcy
        - PlnAcctsRblAmtInCCCrcy - PlnAcctsOthRblAmtInCCCrcy + PlnAcctsPyblAmtInCCCrcy + PlnAcctsOthPyblAmtInCCCrcy
      as fis_cfs_cashopg_hsl_p)                 as PlnOpgActyCashAmtInCCCrcy,


      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      cast (
        - PlnTangibleAstAmtInCCCrcy + PlnTangibleAstDeprAmtInCCCrcy - PlnIntangibleAstAmtInCCCrcy + PlnIntngblAstAmtznAmtInCCCrcy
        + PlnFxdAstRtrmtAmtInCCCrcy - PlnLongTermInvmtAmtInCCCrcy
      as fis_cfs_cashinvtg_hsl_p)               as PlnInvstgActyCashAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      cast (
        PlnCommonStockAmtInCCCrcy + PlnNotesReceivableAmtInCCCrcy
      as fis_cfs_cashfin_hsl_p)                 as PlnFinActyCashAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      // OperatingActyCashAmtInCCCrcy + InvestingActyCashAmtInCCCrcy + FinancingActyCashAmtInCCCrcy
      cast ( (
        PlnGLAcctNetIncAmtInCCCrcy - PlnTangibleAstDeprAmtInCCCrcy - PlnIntngblAstAmtznAmtInCCCrcy - PlnFxdAstRtrmtAmtInCCCrcy
        - PlnProvisionAmtInCCCrcy - PlnInventoryAmtInCCCrcy
        - PlnAcctsRblAmtInCCCrcy - PlnAcctsOthRblAmtInCCCrcy + PlnAcctsPyblAmtInCCCrcy + PlnAcctsOthPyblAmtInCCCrcy) + (
        - PlnTangibleAstAmtInCCCrcy + PlnTangibleAstDeprAmtInCCCrcy - PlnIntangibleAstAmtInCCCrcy + PlnIntngblAstAmtznAmtInCCCrcy
        + PlnFxdAstRtrmtAmtInCCCrcy - PlnLongTermInvmtAmtInCCCrcy) + (
        PlnCommonStockAmtInCCCrcy + PlnNotesReceivableAmtInCCCrcy)
      as fis_cfs_netcash_hsl_p)                 as PlnNetCashAmtInCCCrcy,

      ///////////////////////////////////////////////////////////////////////
      // Associations
      ///////////////////////////////////////////////////////////////////////

      _Ledger,
      _CompanyCode,
      _FiscalYear,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_LedgerFiscalYearForVariant'
      _LedgerFiscalYear,
      _LedgerFiscalYearForVariant,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalPeriodForVariant'
      _FiscalPeriod,
      _FiscalPeriodForVariant,
      _SubLedgerAccLineItemType,
      _FiscalYearVariant,
      _CalendarDate,
      _FiscalCalendarDate,
      _ControllingArea,
      _GLAccountInCompanyCode,
      _GLAccountInChartOfAccounts,
      _TransactionCurrency,
      _CompanyCodeCurrency,
      _GlobalCurrency,
      _FreeDefinedCurrency1,
      _FreeDefinedCurrency2,
      _FreeDefinedCurrency3,
      _FreeDefinedCurrency4,
      _FreeDefinedCurrency5,
      _FreeDefinedCurrency6,
      _FreeDefinedCurrency7,
      _FreeDefinedCurrency8,
      _ControllingObjectCurrency,     
      //_BaseUnit,
      _CostSourceUnit,
      _Segment,
      _ProfitCenter,
      _CurrentProfitCenter,
      _CostCenter,
      _CurrentCostCenter,
      _BusinessArea,
      _FunctionalArea,
      _WBSElement,
      _WBSElementByInternalKey,
      _WBSElementBasicData,
      _WBSElementExternalID,
      _WBSElementExternalIDText,
      _PartnerWBSElementBasicData,
      _PartnerWBSElementExternalID,
      _PartnerWBSElemntExtrnalIDText,
      _Project,
      _ProjectBasicData,
      _ProjectExternalID,
      _ProjectExternalIDText,
      _PartnerProjectBasicData,
      _PartnerProjectExternalID,
      _PartnerProjctExtrnalIDText,
      _CostCtrActivityType,
      _CostAnalysisResource,
      _WorkPackageWorkItem,
      _WorkPackage,
      _InternalOrder,
      _Order,
      _SalesOrder,
      _SalesOrderItem,
      _SalesDocument,
      _SalesDocumentItem,
      _PartnerCompany,
      _PartnerCompanyCode,
      _OriginCostCtrActivityType,
      _PartnerSegment,
      _PartnerProfitCenter,
      _PartnerCostCenter,
      _PartnerBusinessArea,
      _PartnerFunctionalArea,
      _PartnerWBSElement,
      _PartnerProject,
      _PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerOrder_2'
      _PartnerOrder,
      _PartnerOrder_2,
      _ChartOfAccounts,
      _ControllingDebitCreditCode,
      _Employment,
      _Customer,
      _CustomerGroup,
      _Material,
      _MaterialGroup,
      _ProductGroup,
      _Plant,
      _BillingDocumentType,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SoldMaterial,
      _SoldProduct,
      _CustomerSupplierCountry,
      _SalesDistrict,
      _BillToParty,
      _ShipToParty,

      _PlanningCategory,

      _SemanticTag,
      _Hierarchy,

      _MasterFixedAsset,
      _FixedAsset,

      // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
      cast( '' as brgru)                        as GLAccountAuthorizationGroup,
      cast( '' as brgru)                        as CustomerBasicAuthorizationGrp,
      cast( '' as aufart)                       as OrderType,
      cast( '' as auart)                        as SalesOrderType,
      
      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      @Semantics.currencyCode:true
      FunctionalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      AmountInFunctionalCurrency,
      
      _FunctionalCurrency

}
where
  (
        ValidityStartDate                         <= $session.system_date
    and ValidityEndDate                           >= $session.system_date
  )
```
