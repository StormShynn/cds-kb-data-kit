---
name: I_PUBSECBDGTACTLITEMCUBE
description: "Budget Commitment and Actual Items - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTACTLITEMCUBE')/$value
semantic_en: "Budget Commitment and Actual Items - Cube"
tags:
  - PSM
  - budget
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
  - metadata-only
---
# I_PUBSECBDGTACTLITEMCUBE

**Budget Commitment and Actual Items - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTACTLITEMCUBE')/$value) |

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
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `WorkPackage` |  | |  |  | `CHAR(50)` | Plan Item |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order (Deprecated) |
| `PartnerOrder_2` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `CostCenterHierarchy` |  | |  |  | `CHAR(42)` | Cost Center Hierarchy |
| `FundHierarchy` |  | |  |  | `CHAR(42)` | Fund Hierarchy |
| `GrantHierarchyNode` |  | |  |  | `CHAR(50)` | Grant Hierarchy Node |
| `FunctionalAreaHierarchy` |  | |  |  | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` |  | |  |  | `CHAR(42)` | Budget Account Hierarchy |
| `CtrlObjForFund` |  | |  |  | `CHAR(50)` | Control Object for a Fund |
| `HierarchyIDForFund` |  | |  |  | `CHAR(42)` | Hierarchy ID for Fund |
| `CtrlObjForFunctionalArea` |  | |  |  | `CHAR(50)` | Control Object for a Functional Area |
| `HierarchyIDForFunctionalArea` |  | |  |  | `CHAR(42)` | Hierarchy ID for Functional Area |
| `CtrlObjForBudgetPeriod` |  | |  |  | `CHAR(50)` | Control Object for a Budget Period |
| `HierarchyIDForBudgetPeriod` |  | |  |  | `CHAR(42)` | Hierarchy ID for Budget Period |
| `CtrlObjForCostCenter` |  | |  |  | `CHAR(50)` | Control Object for a Cost Center |
| `HierarchyIDForCostCenter` |  | |  |  | `CHAR(42)` | Hierarchy ID for Cost Center |
| `CtrlObjForWBSElement` |  | |  |  | `CHAR(50)` | Control Object for a WBS Element |
| `HierarchyIDForWBSElement` |  | |  |  | `CHAR(42)` | Hierarchy ID for WBS Element |
| `CtrlObjForBudgetAccount` |  | |  |  | `CHAR(50)` | Control Object for a Budget Account |
| `HierarchyIDForBudgetAccount` |  | |  |  | `CHAR(42)` | Hierarchy ID for Budget Account Element |
| `CtrlObjForGrant` |  | |  |  | `CHAR(50)` | Control Object for a Grant |
| `GrantHierarchy` |  | |  |  | `CHAR(42)` | Grant Hierarchy |
| `CtrlObjForSponsoredClass` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Class |
| `SponsoredClassHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Class Hierarchy |
| `CtrlObjForSponsoredProgram` |  | |  |  | `CHAR(50)` | Control Object for a Sponsored Program |
| `SponsoredProgramHierarchy` |  | |  |  | `CHAR(42)` | Sponsored Program Hierarchy |
| `CtrlObjForBdgtValidityNmbr` |  | |  |  | `CHAR(23)` | Control Object for a Budget Validity Number |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PlanningCategoryUsage` |  | |  |  | `NUMC(3)` | Category Usage |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | CO Debit/Credit Indicator |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Supplier Corporate Group |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `OrderItem` |  | |  |  | `NUMC(4)` | Number of Order Item |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetDocWorkFlowStatus` |  | |  |  | `CHAR(1)` | Workflow Status for a Budget Document |
| `AvailabilityControlProfile` |  | |  |  | `CHAR(6)` | Budget Availability Control Profile for Public Sector Mgmt |
| `BudgetDocument` |  | |  |  | `CHAR(10)` | Budget Document Number |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Document Number for Earmarked Funds |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `ActualAmountInTransactionCrcy` |  | |  |  | `CURR(23)` | Actual Amount in Transaction Currency |
| `ActualAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Actual Amount in Company Code Currency |
| `ActualAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Actual Amount in Global Currency |
| `ActualValuationQuantity` |  | |  |  | `QUAN(23)` | Actual Valuation Quantity |
| `PlanAmountInTransactionCrcy` |  | |  |  | `CURR(23)` | Plan Amount in Transaction Currency |
| `PlanAmountInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Plan Amount in Company Code Currency |
| `PlanAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Plan Amount in Global Currency |
| `PlanValuationQuantity` |  | |  |  | `QUAN(23)` | Plan Valuation Quantity |
| `PlanPriceInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Price in Company Code Currency |
| `PlanPriceInTransactionCurrency` |  | |  |  | `CURR(23)` | Price in Transaction Currency |
| `PlanPriceInGlobalCurrency` |  | |  |  | `CURR(23)` | Price in Global Currency |
| `ActlPlnDiffAmtInTransCrcy` |  | |  |  | `CURR(23)` | Actual plan difference in transaction currency |
| `ActlPlnDiffAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Actual plan difference in company code currency |
| `ActlPlnDiffAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Actual plan difference in global currency |
| `ActlPanDiffValuationQuantity` |  | |  |  | `QUAN(23)` | Actual Plan Difference Valuation Quantity |
| `PubSecExpnBdgtAmtInTransCrcy` |  | |  |  | `CURR(25)` | Budget Expense Amount in Transaction Currency |
| `PubSecExpnCmtmtAmtInTransCrcy` |  | |  |  | `CURR(25)` | Commitment Expense Amount in Transaction Currency |
| `PubSecExpnActlAmtInTransCrcy` |  | |  |  | `CURR(25)` | Actual Expense Amount in Transaction Currency |
| `PubSecRevnBdgtAmtInTransCrcy` |  | |  |  | `CURR(25)` | Budget Revenue Amount in Transaction Currency |
| `PubSecRevnCmtmtAmtInTransCrcy` |  | |  |  | `CURR(25)` | Commitment Revenue Amount in Transaction Currency |
| `PubSecRevnActlAmtInTransCrcy` |  | |  |  | `CURR(25)` | Actual Revenue Amount in Transaction Currency |
| `PubSecExpnBdgtAmtInCoCodeCrcy` |  | |  |  | `CURR(25)` | Budget Expense Amount in Company Code Currency |
| `PubSecExpnCmtmtAmtInCoCodeCrcy` |  | |  |  | `CURR(25)` | Commitment Expense Amount in Company Code Currency |
| `PubSecExpnActlAmtInCoCodeCrcy` |  | |  |  | `CURR(25)` | Actual Expense Amount in Company Code Currency |
| `PubSecRevnBdgtAmtInCoCodeCrcy` |  | |  |  | `CURR(25)` | Budget Revenue Amount in Company Code Currency |
| `PubSecRevnCmtmtAmtInCoCodeCrcy` |  | |  |  | `CURR(25)` | Commitment Revenue Amount in Company Code Currency |
| `PubSecRevnActlAmtInCoCodeCrcy` |  | |  |  | `CURR(25)` | Actual Revenue Amount in Company Code Currency |
| `PubSecExpnBdgtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Budget Expense Amount in Global Currency |
| `PubSecExpnCmtmtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Commitment Expense Amount in Global Currency |
| `PubSecExpnActlAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Actual Expense Amount in Global Currency |
| `PubSecRevnBdgtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Budget Revenue Amount in Global Currency |
| `PubSecRevnCmtmtAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Commitment Revenue Amount in Global Currency |
| `PubSecRevnActlAmtInGlobalCrcy` |  | |  |  | `CURR(25)` | Actual Revenue Amount in Global Currency |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `PubSecIsConsumableBudget` |  | |  |  | `CHAR(1)` | Include Consumable Budget (AVC) |
