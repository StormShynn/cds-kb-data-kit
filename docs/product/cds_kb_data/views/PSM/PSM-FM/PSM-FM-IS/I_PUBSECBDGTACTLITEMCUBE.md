---
name: I_PUBSECBDGTACTLITEMCUBE
description: "Budget Cmtmt and Actual Items - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTACTLITEMCUBE')/$value
semantic_en: "Budget Cmtmt and Actual Items - Cube"
semantic_vi: "Budget Cmtmt and Actual Items - Cube — CDS view giao diện dựa trên I_PubSecBdgtActlItemBasic."
keywords:
  - "budget"
  - "cmtmt"
  - "and"
  - "actual"
  - "items"
  - "cube"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - PSM
  - budget
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_PUBSECBDGTACTLITEMCUBE

**Budget Cmtmt and Actual Items - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTACTLITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` | ✓ | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `PlanningCategory` | ✓ | |  |  | `CHAR(10)` | Plan Category |
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
| `CostCenterHierarchy` |  | |  | `cast( AcItem.CostCenter as fis_cctr_hryid_42)` | `CHAR(42)` | Cost Center Hierarchy |
| `FundHierarchy` |  | |  | `cast(AcItem._Fund.Fund as fmis_hryid_fund )` | `CHAR(42)` | Fund Hierarchy |
| `GrantHierarchyNode` |  | |  | `cast (AcItem.GrantID as gm_hrynid_grant)` | `CHAR(50)` | Grant Hierarchy Node |
| `FunctionalAreaHierarchy` |  | |  | `cast( AcItem.FunctionalArea as fis_hryid_functionalarea_42)` | `CHAR(42)` | Functional Area Hierarchy |
| `BudgetAccountHierarchy` |  | |  | `cast (AcItem.PubSecBudgetAccount as psm_hryid_budgetaccount )` | `CHAR(42)` | Budget Account Hierarchy |
| `CtrlObjForFund` |  | |  | `cast( coalesce( _CtrlObjFundMap.CtrlObjForFund, '' ) as psm_s4c_fm_avc_ctrl_obj_fu preserving type )` | `CHAR(50)` | Control Object for a Fund |
| `HierarchyIDForFund` |  | |  | `cast( coalesce( _CtrlObjFundMap.HierarchyIDForFund, '' ) as psm_s4c_fm_avc_hier_id_fu preserving type )` | `CHAR(42)` | Hierarchy ID for Fund |
| `CtrlObjForFunctionalArea` |  | |  | `cast( coalesce( _CtrlObjFuncAreaMap.CtrlObjForFunctionalArea, '' ) as psm_s4c_fm_avc_ctrl_obj_fa preserving type )` | `CHAR(50)` | Control Object for a Functional Area |
| `HierarchyIDForFunctionalArea` |  | |  | `cast( coalesce( _CtrlObjFuncAreaMap.HierarchyIDForFunctionalArea, '' ) as psm_s4c_fm_avc_hier_id_fa preserving type )` | `CHAR(42)` | Hierarchy ID for Functional Area |
| `CtrlObjForBudgetPeriod` |  | |  | `cast( coalesce( _CtrlObjBdgtPeriodMap.CtrlObjForBudgetPeriod, '' ) as psm_s4c_fm_avc_ctrl_obj_bp preserving type )` | `CHAR(50)` | Control Object for a Budget Period |
| `HierarchyIDForBudgetPeriod` |  | |  | `cast( coalesce( _CtrlObjBdgtPeriodMap.HierarchyIDForBudgetPeriod, '' ) as psm_s4c_fm_avc_hier_id_bp preserving type )` | `CHAR(42)` | Hierarchy ID for Budget Period |
| `CtrlObjForCostCenter` |  | |  | `cast( coalesce( _CtrlObjCostCenterMap.CtrlObjForCostCenter, '' ) as psm_s4c_fm_avc_ctrl_obj_cc preserving type )` | `CHAR(50)` | Control Object for a Cost Center |
| `HierarchyIDForCostCenter` |  | |  | `cast( coalesce( _CtrlObjCostCenterMap.HierarchyIDForCostCenter, '' ) as psm_s4c_fm_avc_hier_id_cc preserving type )` | `CHAR(42)` | Hierarchy ID for Cost Center |
| `CtrlObjForWBSElement` |  | |  | `cast( coalesce( _CtrlObjWBSElementMap.CtrlObjForWBSElement, '' ) as psm_s4c_fm_avc_ctrl_obj_wb preserving type )` | `CHAR(50)` | Control Object for a WBS Element |
| `HierarchyIDForWBSElement` |  | |  | `cast( coalesce( _CtrlObjWBSElementMap.HierarchyIDForWBSElement, '' ) as psm_s4c_fm_avc_hier_id_wb preserving type )` | `CHAR(42)` | Hierarchy ID for WBS Element |
| `CtrlObjForBudgetAccount` |  | |  | `cast( coalesce( _CtrlObjBdgtAccountMap.CtrlObjForBudgetAccount, '' ) as psm_s4c_fm_avc_ctrl_obj_ba preserving type )` | `CHAR(50)` | Control Object for a Budget Account |
| `HierarchyIDForBudgetAccount` |  | |  | `cast( coalesce( _CtrlObjBdgtAccountMap.HierarchyIDForBudgetAccount, '' ) as psm_s4c_fm_avc_hier_id_ba preserving type )` | `CHAR(42)` | Hierarchy ID for Budget Account Element |
| `CtrlObjForGrant` |  | |  | `cast( coalesce( _CtrlObjGrantMap.CtrlObjForGrant, '' ) as psm_s4c_fm_avc_ctrl_obj_gr preserving type )` | `CHAR(50)` | Control Object for a Grant |
| `GrantHierarchy` |  | |  | `cast( coalesce( _CtrlObjGrantMap.GrantHierarchy, '' ) as gm_hryid_grant preserving type )` | `CHAR(42)` | Grant Hierarchy |
| `CtrlObjForSponsoredClass` |  | |  | `cast( coalesce( _CtrlObjSpnsrdClassMap.CtrlObjForSponsoredClass, '' ) as psm_s4c_fm_avc_ctrl_obj_sc preserving type )` | `CHAR(50)` | Control Object for a Sponsored Class |
| `SponsoredClassHierarchy` |  | |  | `cast( coalesce( _CtrlObjSpnsrdClassMap.SponsoredClassHierarchy, '' ) as gmis_hryid_sponsoredclass preserving type )` | `CHAR(42)` | Sponsored Class Hierarchy |
| `CtrlObjForSponsoredProgram` |  | |  | `cast( coalesce( _CtrlObjSpnsrdProgMap.CtrlObjForSponsoredProgram, '' ) as psm_s4c_fm_avc_ctrl_obj_sp preserving type )` | `CHAR(50)` | Control Object for a Sponsored Program |
| `SponsoredProgramHierarchy` |  | |  | `cast( coalesce( _CtrlObjSpnsrdProgMap.SponsoredProgramHierarchy, '' ) as gmis_hryid_sponsoredprog preserving type )` | `CHAR(42)` | Sponsored Program Hierarchy |
| `CtrlObjForBdgtValidityNmbr` |  | |  | `cast( concat(AcItem.GrantID,AcItem.GteeMBudgetValidityNumber) as psm_s4c_fm_avc_ctrl_obj_bvn preserving type )` | `CHAR(23)` | Control Object for a Budget Validity Number |
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
| `PubSecBdgtAcctRevnExpnCode` |  | | `_PubSecBudgetAccount` | `PubSecBdgtAcctRevnExpnCode` | `CHAR(1)` | Expense or Revenue on Budget Account |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `BudgetProcess` |  | |  |  | `CHAR(4)` | Budget Process Type |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `BudgetDocWorkFlowStatus` |  | |  |  | `CHAR(1)` | Workflow Status for a Budget Document |
| `AvailabilityControlProfile` |  | | `_CtrlObjProfile` | `AvailabilityControlProfile` | `CHAR(6)` | Budget Availability Control Profile for Public Sector Mgmt |
| `BudgetDocument` |  | |  | `cast( case when (AcItem.ReferenceDocumentType = 'FPL04' or AcItem.ReferenceDocumentType = 'FPL00') and AcItem.ActualPlanCode = 'P' then AcItem.ReferenceDocument else '' end as psm_bdgt_docnr preserving type )` | `CHAR(10)` | Budget Document Number |
| `PurchaseOrder` |  | |  | `cast( case when AcItem.SourceReferenceDocumentType = 'PORD' then AcItem.SourceReferenceDocument else '' end as vdm_purchaseorder preserving type )` | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` |  | |  | `cast( case when AcItem.SourceReferenceDocumentType = 'PREQ' then AcItem.SourceReferenceDocument else '' end as vdm_purchaserequisition preserving type )` | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  | `cast( case when AcItem.SourceReferenceDocumentType = 'FMRES' then AcItem.SourceReferenceDocument else '' end as fmis_earmarkedfundsdoc preserving type )` | `CHAR(10)` | Document Number for Earmarked Funds |
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
| `PubSecExpnBdgtAmtInTransCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.ActualPlanCode = 'P' then cast( AcItem.AmountInTransactionCurrency as psm_amt_expn_bdgt_trans_curr ) else cast( '0' as psm_amt_expn_bdgt_trans_curr ) end` | `CURR(25)` | Budget Expense Amount in Transaction Currency |
| `PubSecExpnCmtmtAmtInTransCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.ActualPlanCode = 'A' and AcItem.IsCommitment = 'X' then cast( AcItem.AmountInTransactionCurrency as psm_amt_expn_cmtmt_trans_curr ) else cast( '0' as psm_amt_expn_cmtmt_trans_curr ) end` | `CURR(25)` | Commitment Expense Amount in Transaction Currency |
| `PubSecExpnActlAmtInTransCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.ActualPlanCode = 'A' and AcItem.IsCommitment <> 'X' then cast( AcItem.AmountInTransactionCurrency as psm_amt_expn_actl_trans_curr ) else cast( '0' as psm_amt_expn_actl_trans_curr ) end` | `CURR(25)` | Actual Expense Amount in Transaction Currency |
| `PubSecRevnBdgtAmtInTransCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.ActualPlanCode = 'P' then cast( AcItem.AmountInTransactionCurrency as psm_amt_revn_bdgt_trans_curr ) else cast( '0' as psm_amt_revn_bdgt_trans_curr ) end` | `CURR(25)` | Budget Revenue Amount in Transaction Currency |
| `PubSecRevnCmtmtAmtInTransCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.ActualPlanCode = 'A' and AcItem.IsCommitment = 'X' then cast( AcItem.AmountInTransactionCurrency as psm_amt_revn_cmtmt_trans_curr ) else cast( '0' as psm_amt_revn_cmtmt_trans_curr ) end` | `CURR(25)` | Commitment Revenue Amount in Transaction Currency |
| `PubSecRevnActlAmtInTransCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.ActualPlanCode = 'A' and AcItem.IsCommitment <> 'X' then cast( AcItem.AmountInTransactionCurrency as psm_amt_revn_actl_trans_curr ) else cast( '0' as psm_amt_revn_actl_trans_curr ) end` | `CURR(25)` | Actual Revenue Amount in Transaction Currency |
| `PubSecExpnBdgtAmtInCoCodeCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.ActualPlanCode = 'P' then cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_expn_bdgt_cc_curr ) else cast( '0' as psm_amt_expn_bdgt_cc_curr ) end` | `CURR(25)` | Budget Expense Amount in Company Code Currency |
| `PubSecExpnCmtmtAmtInCoCodeCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.ActualPlanCode = 'A' and AcItem.IsCommitment = 'X' then cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_expn_cmtmt_cc_curr ) else cast( '0' as psm_amt_expn_cmtmt_cc_curr ) end` | `CURR(25)` | Commitment Expense Amount in Company Code Currency |
| `PubSecExpnActlAmtInCoCodeCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.ActualPlanCode = 'A' and AcItem.IsCommitment <> 'X' then cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_expn_actl_cc_curr ) else cast( '0' as psm_amt_expn_actl_cc_curr ) end` | `CURR(25)` | Actual Expense Amount in Company Code Currency |
| `PubSecRevnBdgtAmtInCoCodeCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.ActualPlanCode = 'P' then cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_revn_bdgt_cc_curr ) else cast( '0' as psm_amt_revn_bdgt_cc_curr ) end` | `CURR(25)` | Budget Revenue Amount in Company Code Currency |
| `PubSecRevnCmtmtAmtInCoCodeCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.ActualPlanCode = 'A' and AcItem.IsCommitment = 'X' then cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_revn_cmtmt_cc_curr ) else cast( '0' as psm_amt_revn_cmtmt_cc_curr ) end` | `CURR(25)` | Commitment Revenue Amount in Company Code Currency |
| `PubSecRevnActlAmtInCoCodeCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.ActualPlanCode = 'A' and AcItem.IsCommitment <> 'X' then cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_revn_actl_cc_curr ) else cast( '0' as psm_amt_revn_actl_cc_curr ) end` | `CURR(25)` | Actual Revenue Amount in Company Code Currency |
| `PubSecExpnBdgtAmtInGlobalCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.ActualPlanCode = 'P' then cast( AcItem.AmountInGlobalCurrency as psm_amt_expn_bdgt_grp_curr ) else cast( '0' as psm_amt_expn_bdgt_grp_curr ) end` | `CURR(25)` | Budget Expense Amount in Global Currency |
| `PubSecExpnCmtmtAmtInGlobalCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.ActualPlanCode = 'A' and AcItem.IsCommitment = 'X' then cast( AcItem.AmountInGlobalCurrency as psm_amt_expn_cmtmt_grp_curr ) else cast( '0' as psm_amt_expn_cmtmt_grp_curr ) end` | `CURR(25)` | Commitment Expense Amount in Global Currency |
| `PubSecExpnActlAmtInGlobalCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.ActualPlanCode = 'A' and AcItem.IsCommitment <> 'X' then cast( AcItem.AmountInGlobalCurrency as psm_amt_expn_actl_grp_curr ) else cast( '0' as psm_amt_expn_actl_grp_curr ) end` | `CURR(25)` | Actual Expense Amount in Global Currency |
| `PubSecRevnBdgtAmtInGlobalCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.ActualPlanCode = 'P' then cast( AcItem.AmountInGlobalCurrency as psm_amt_revn_bdgt_grp_curr ) else cast( '0' as psm_amt_revn_bdgt_grp_curr ) end` | `CURR(25)` | Budget Revenue Amount in Global Currency |
| `PubSecRevnCmtmtAmtInGlobalCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.ActualPlanCode = 'A' and AcItem.IsCommitment = 'X' then cast( AcItem.AmountInGlobalCurrency as psm_amt_revn_cmtmt_grp_curr ) else cast( '0' as psm_amt_revn_cmtmt_grp_curr ) end` | `CURR(25)` | Commitment Revenue Amount in Global Currency |
| `PubSecRevnActlAmtInGlobalCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.ActualPlanCode = 'A' and AcItem.IsCommitment <> 'X' then cast( AcItem.AmountInGlobalCurrency as psm_amt_revn_actl_grp_curr ) else cast( '0' as psm_amt_revn_actl_grp_curr ) end` | `CURR(25)` | Actual Revenue Amount in Global Currency |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `PubSecIsConsumableBudget` |  | |  |  | `CHAR(1)` | Include Consumable Budget (AVC) |
| `_PubSecBudgetCnsmpnTypeGroup` |  | |  |  |  |  |
| `_PubSecBudgetAccount` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnDate` | | ✓ | | | | |
| `_PubSecBdgtCnsmpnFsclYear` | | ✓ | | | | |
| `_PubSecBdgtCnsmpnFsclPeriod` | | ✓ | | | | |
| `_CtrlObjFund` | | ✓ | | | | |
| `_CtrlObjFuncArea` | | ✓ | | | | |
| `_CtrlObjBdgtPeriod` | | ✓ | | | | |
| `_CtrlObjCostCenter` | | ✓ | | | | |
| `_CtrlObjWBSElement` | | ✓ | | | | |
| `_CtrlObjBdgtAccount` | | ✓ | | | | |
| `_CtrlObjGrant` | | ✓ | | | | |
| `_CtrlObjSpnsrdClass` | | ✓ | | | | |
| `_CtrlObjSpnsrdProg` | | ✓ | | | | |
| `_PubSecFundHier` | | ✓ | | | | |
| `_PubSecFunctionalAreaHier` | | ✓ | | | | |
| `_PubSecBudgetPeriodHier` | | ✓ | | | | |
| `_PubSecCostCenterHier` | | ✓ | | | | |
| `_PubSecWBSElementHier` | | ✓ | | | | |
| `_PubSecBudgetAccountHier` | | ✓ | | | | |
| `_PubSecGrantHier` | | ✓ | | | | |
| `_PubSecSpnsrdClassHier` | | ✓ | | | | |
| `_PubSecSpnsrdProgHier` | | ✓ | | | | |
| `_PubSecBdgtAcctRevnExpnCode` | | ✓ | | | | |
| `_FundType` | | ✓ | | | | |
| `_BudgetAccountInChtAccts` | | ✓ | | | | |
| `_PubSecAvailyCtrlProfile` | | ✓ | | | | |
| `_GranteeMgmtFundType` | | ✓ | | | | |
| `_FundHierarchy` | | ✓ | | | | |
| `_GrantHierarchy` | | ✓ | | | | |
| `_CostCenterHierarchy` | | ✓ | | | | |
| `_BudgetAccountInChtAcctsHier` | | ✓ | | | | |
| `_FunctionalAreaHierarchy` | | ✓ | | | | |
| `_BudgetDocWorkFlowStatus` | | ✓ | | | | |
| `_PubSecPlanningCategory` | | ✓ | | | | |
| `_PubSecIsConsumableBudget` | | ✓ | | | | |
| `_DocumentStore` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PubSecBudgetAccount` | `I_PubSecBudgetAccount` | [0..1] |
| `_PubSecBudgetAccountCoCode` | `I_CompanyCode` | [0..1] |
| `_PubSecBudgetCnsmpnDate` | `I_FiscCalendarDateForCompCode` | [0..1] |
| `_PubSecBdgtCnsmpnFsclYear` | `I_FiscalYearForVariant` | [0..1] |
| `_PubSecBdgtCnsmpnFsclPeriod` | `I_FiscalPeriodForVariant` | [0..1] |
| `_CtrlObjFundMap` | `I_PubSecCtrlObjFundMap` | [0..1] |
| `_CtrlObjFund` | `I_PubSecCtrlObjFund` | [0..1] |
| `_CtrlObjFuncAreaMap` | `I_PubSecCtrlObjFuncAreaMap` | [0..1] |
| `_CtrlObjFuncArea` | `I_PubSecCtrlObjFuncArea` | [0..1] |
| `_CtrlObjBdgtPeriodMap` | `I_PubSecCtrlObjBdgtPeriodMap` | [0..1] |
| `_CtrlObjBdgtPeriod` | `I_PubSecCtrlObjBdgtPeriod` | [0..1] |
| `_CtrlObjCostCenterMap` | `I_PubSecCtrlObjCostCenterMap` | [0..1] |
| `_CtrlObjCostCenter` | `I_PubSecCtrlObjCostCenter` | [0..1] |
| `_CtrlObjWBSElementMap` | `I_PubSecCtrlObjWBSElementMap` | [0..1] |
| `_CtrlObjWBSElement` | `I_PubSecCtrlObjWBSElement` | [0..1] |
| `_CtrlObjBdgtAccountMap` | `I_PubSecCtrlObjBdgtAccountMap` | [0..1] |
| `_CtrlObjBdgtAccount` | `I_PubSecCtrlObjBdgtAccount` | [0..1] |
| `_CtrlObjGrant` | `I_PubSecCtrlObjGrant` | [0..1] |
| `_CtrlObjGrantMap` | `I_PubSecCtrlObjGrantMap` | [0..1] |
| `_CtrlObjSpnsrdClass` | `I_PubSecCtrlObjSpnsrdClass` | [0..1] |
| `_CtrlObjSpnsrdClassMap` | `I_PubSecCtrlObjSpnsrdClassMap` | [0..1] |
| `_CtrlObjSpnsrdProg` | `I_PubSecCtrlObjSpnsrdProg` | [0..1] |
| `_CtrlObjSpnsrdProgMap` | `I_PubSecCtrlObjSpnsrdProgMap` | [0..1] |
| `_PubSecFundHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecFunctionalAreaHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecBudgetPeriodHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecCostCenterHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecWBSElementHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecBudgetAccountHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecGrantHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecSpnsrdClassHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecSpnsrdProgHier` | `I_PubSecHierarchy` | [0..1] |
| `_PubSecBdgtAcctRevnExpnCode` | `I_PubSecBdgtAcctRevnExpnCode` | [0..1] |
| `_FundType` | `I_FundType` | [0..1] |
| `_BudgetAccountInChtAccts` | `I_BudgetAccountInChtAccts` | [0..1] |
| `_PubSecAvailyCtrlProfile` | `I_PubSecAvailyCtrlProfile` | [0..1] |
| `_GranteeMgmtFundType` | `I_GranteeMgmtFundType` | [0..1] |
| `_FundHierarchy` | `I_Fund` | [0..1] |
| `_GrantHierarchy` | `I_Grant` | [0..1] |
| `_CostCenterHierarchy` | `I_CostCenter` | [0..*] |
| `_BudgetAccountInChtAcctsHier` | `I_BudgetAccountInChtAccts` | [0..1] |
| `_FunctionalAreaHierarchy` | `I_FunctionalArea` | [0..1] |
| `_BudgetDocWorkFlowStatus` | `I_BudgetDocWorkFlowStatus` | [0..1] |
| `_PubSecPlanningCategory` | `I_PubSecPlanningCategory` | [0..1] |
| `_PubSecIsConsumableBudget` | `I_PubSecIsConsumableBudget` | [0..1] |
| `_DocumentStore` | `I_PubSecBdgtActlItemDSt` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTACTLITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECBDGTACTLITEMCUBE')/$value)*

```abap
// This is a migrated cube (cube view to cube view entity)
@Analytics.technicalName: 'IPSMS4CBDACTANC'
//@ClientHandling.algorithm: #SESSION_VARIABLE
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
//@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Budget Cmtmt and Actual Items - Cube'

@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,

         sizeCategory: #XXL
     },

     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
}

define view entity I_PubSecBdgtActlItemCube
  as select from            I_PubSecBdgtActlItemBasic     as AcItem
    left outer to many join I_PubSecCtrlObjProfileCurDate as _CtrlObjProfile on _CtrlObjProfile.CompanyCode = AcItem.CompanyCode
  association [0..1] to I_PubSecBudgetAccount         as _PubSecBudgetAccount         on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccount.PubSecBudgetAccountCoCode
                                                                                      and $projection.PubSecBudgetAccount       = _PubSecBudgetAccount.PubSecBudgetAccount
  association [0..1] to I_CompanyCode                 as _PubSecBudgetAccountCoCode   on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccountCoCode.CompanyCode
  association [0..1] to I_FiscCalendarDateForCompCode as _PubSecBudgetCnsmpnDate      on  $projection.PubSecBudgetCnsmpnDate    = _PubSecBudgetCnsmpnDate.CalendarDate
                                                                                      and $projection.PubSecBudgetAccountCoCode = _PubSecBudgetCnsmpnDate.CompanyCode
  association [0..1] to I_FiscalYearForVariant        as _PubSecBdgtCnsmpnFsclYear    on  $projection.PubSecBudgetCnsmpnFsclYear = _PubSecBdgtCnsmpnFsclYear.FiscalYear
                                                                                      and $projection.FiscalYearVariant          = _PubSecBdgtCnsmpnFsclYear.FiscalYearVariant
  association [0..1] to I_FiscalPeriodForVariant      as _PubSecBdgtCnsmpnFsclPeriod  on  $projection.PubSecBudgetCnsmpnFsclYear   = _PubSecBdgtCnsmpnFsclPeriod.FiscalYear
                                                                                      and $projection.PubSecBudgetCnsmpnFsclPeriod = _PubSecBdgtCnsmpnFsclPeriod.FiscalPeriod
                                                                                      and $projection.FiscalYearVariant            = _PubSecBdgtCnsmpnFsclPeriod.FiscalYearVariant
  association [0..1] to I_PubSecCtrlObjFundMap        as _CtrlObjFundMap              on  $projection.CompanyCode                    = _CtrlObjFundMap.CompanyCode
                                                                                      and $projection.Fund                           = _CtrlObjFundMap.Fund
                                                                                      and _CtrlObjFundMap.AvailabilityControlProfile = _CtrlObjProfile.AvailabilityControlProfile
  association [0..1] to I_PubSecCtrlObjFund           as _CtrlObjFund                 on  $projection.CtrlObjForFund     = _CtrlObjFund.CtrlObjForFund
                                                                                      and $projection.HierarchyIDForFund = _CtrlObjFund.HierarchyIDForFund
  association [0..1] to I_PubSecCtrlObjFuncAreaMap    as _CtrlObjFuncAreaMap          on  $projection.CompanyCode                        = _CtrlObjFuncAreaMap.CompanyCode
                                                                                      and $projection.FunctionalArea                     = _CtrlObjFuncAreaMap.FunctionalArea
                                                                                      and _CtrlObjFuncAreaMap.AvailabilityControlProfile = _CtrlObjProfile.AvailabilityControlProfile
  association [0..1] to I_PubSecCtrlObjFuncArea       as _CtrlObjFuncArea             on  $projection.CtrlObjForFunctionalArea     = _CtrlObjFuncArea.CtrlObjForFunctionalArea
                                                                                      and $projection.HierarchyIDForFunctionalArea = _CtrlObjFuncArea.HierarchyIDForFunctionalArea
  association [0..1] to I_PubSecCtrlObjBdgtPeriodMap  as _CtrlObjBdgtPeriodMap        on  $projection.CompanyCode                          = _CtrlObjBdgtPeriodMap.CompanyCode
                                                                                      and $projection.BudgetPeriod                         = _CtrlObjBdgtPeriodMap.BudgetPeriod
                                                                                      and _CtrlObjBdgtPeriodMap.AvailabilityControlProfile = _CtrlObjProfile.AvailabilityControlProfile
  association [0..1] to I_PubSecCtrlObjBdgtPeriod     as _CtrlObjBdgtPeriod           on  $projection.CtrlObjForBudgetPeriod     = _CtrlObjBdgtPeriod.CtrlObjForBudgetPeriod
                                                                                      and $projection.HierarchyIDForBudgetPeriod = _CtrlObjBdgtPeriod.HierarchyIDForBudgetPeriod
  association [0..1] to I_PubSecCtrlObjCostCenterMap  as _CtrlObjCostCenterMap        on  $projection.CompanyCode                          = _CtrlObjCostCenterMap.CompanyCode
                                                                                      and $projection.CostCenter                           = _CtrlObjCostCenterMap.CostCenter
                                                                                      and _CtrlObjCostCenterMap.AvailabilityControlProfile = _CtrlObjProfile.AvailabilityControlProfile
  association [0..1] to I_PubSecCtrlObjCostCenter     as _CtrlObjCostCenter           on  $projection.CtrlObjForCostCenter     = _CtrlObjCostCenter.CtrlObjForCostCenter
                                                                                      and $projection.HierarchyIDForCostCenter = _CtrlObjCostCenter.HierarchyIDForCostCenter
  association [0..1] to I_PubSecCtrlObjWBSElementMap  as _CtrlObjWBSElementMap        on  $projection.CompanyCode                          = _CtrlObjWBSElementMap.CompanyCode
                                                                                      and $projection.WBSElementExternalID                 = _CtrlObjWBSElementMap.WBSElement
                                                                                      and _CtrlObjWBSElementMap.AvailabilityControlProfile = _CtrlObjProfile.AvailabilityControlProfile
  association [0..1] to I_PubSecCtrlObjWBSElement     as _CtrlObjWBSElement           on  $projection.CtrlObjForWBSElement     = _CtrlObjWBSElement.CtrlObjForWBSElement
                                                                                      and $projection.HierarchyIDForWBSElement = _CtrlObjWBSElement.HierarchyIDForWBSElement
  association [0..1] to I_PubSecCtrlObjBdgtAccountMap as _CtrlObjBdgtAccountMap       on  $projection.CompanyCode                           = _CtrlObjBdgtAccountMap.CompanyCode
                                                                                      and $projection.PubSecBudgetAccount                   = _CtrlObjBdgtAccountMap.PubSecBudgetAccount
                                                                                      and _CtrlObjBdgtAccountMap.AvailabilityControlProfile = _CtrlObjProfile.AvailabilityControlProfile
  association [0..1] to I_PubSecCtrlObjBdgtAccount    as _CtrlObjBdgtAccount          on  $projection.CtrlObjForBudgetAccount     = _CtrlObjBdgtAccount.CtrlObjForBudgetAccount
                                                                                      and $projection.HierarchyIDForBudgetAccount = _CtrlObjBdgtAccount.HierarchyIDForBudgetAccount
  association [0..1] to I_PubSecCtrlObjGrant          as _CtrlObjGrant                on  $projection.CtrlObjForGrant = _CtrlObjGrant.CtrlObjForGrant
                                                                                      and $projection.GrantHierarchy  = _CtrlObjGrant.GrantHierarchy
  association [0..1] to I_PubSecCtrlObjGrantMap       as _CtrlObjGrantMap             on  $projection.CompanyCode                     = _CtrlObjGrantMap.CompanyCode
                                                                                      and $projection.GrantID                         = _CtrlObjGrantMap.GrantID
                                                                                      and _CtrlObjGrantMap.AvailabilityControlProfile = _CtrlObjProfile.AvailabilityControlProfile
  association [0..1] to I_PubSecCtrlObjSpnsrdClass    as _CtrlObjSpnsrdClass          on  $projection.CtrlObjForSponsoredClass = _CtrlObjSpnsrdClass.CtrlObjForSponsoredClass
                                                                                      and $projection.SponsoredClassHierarchy  = _CtrlObjSpnsrdClass.SponsoredClassHierarchy
  association [0..1] to I_PubSecCtrlObjSpnsrdClassMap as _CtrlObjSpnsrdClassMap       on  $projection.CompanyCode                           = _CtrlObjSpnsrdClassMap.CompanyCode
                                                                                      and $projection.SponsoredClass                        = _CtrlObjSpnsrdClassMap.SponsoredClass
                                                                                      and _CtrlObjSpnsrdClassMap.AvailabilityControlProfile = _CtrlObjProfile.AvailabilityControlProfile
  association [0..1] to I_PubSecCtrlObjSpnsrdProg     as _CtrlObjSpnsrdProg           on  $projection.CtrlObjForSponsoredProgram = _CtrlObjSpnsrdProg.CtrlObjForSponsoredProgram
                                                                                      and $projection.SponsoredProgramHierarchy  = _CtrlObjSpnsrdProg.SponsoredProgramHierarchy
  association [0..1] to I_PubSecCtrlObjSpnsrdProgMap  as _CtrlObjSpnsrdProgMap        on  $projection.CompanyCode                          = _CtrlObjSpnsrdProgMap.CompanyCode
                                                                                      and $projection.SponsoredProgram                     = _CtrlObjSpnsrdProgMap.SponsoredProgram
                                                                                      and _CtrlObjSpnsrdProgMap.AvailabilityControlProfile = _CtrlObjProfile.AvailabilityControlProfile
  association [0..1] to I_PubSecHierarchy             as _PubSecFundHier              on  $projection.HierarchyIDForFund = _PubSecFundHier.HierarchyID
  association [0..1] to I_PubSecHierarchy             as _PubSecFunctionalAreaHier    on  $projection.HierarchyIDForFunctionalArea = _PubSecFunctionalAreaHier.HierarchyID
  association [0..1] to I_PubSecHierarchy             as _PubSecBudgetPeriodHier      on  $projection.HierarchyIDForBudgetPeriod = _PubSecBudgetPeriodHier.HierarchyID
  association [0..1] to I_PubSecHierarchy             as _PubSecCostCenterHier        on  $projection.HierarchyIDForCostCenter = _PubSecCostCenterHier.HierarchyID
  association [0..1] to I_PubSecHierarchy             as _PubSecWBSElementHier        on  $projection.HierarchyIDForWBSElement = _PubSecWBSElementHier.HierarchyID
  association [0..1] to I_PubSecHierarchy             as _PubSecBudgetAccountHier     on  $projection.HierarchyIDForBudgetAccount = _PubSecBudgetAccountHier.HierarchyID
  association [0..1] to I_PubSecHierarchy             as _PubSecGrantHier             on  $projection.GrantHierarchy = _PubSecGrantHier.HierarchyID
  association [0..1] to I_PubSecHierarchy             as _PubSecSpnsrdClassHier       on  $projection.SponsoredClassHierarchy = _PubSecSpnsrdClassHier.HierarchyID
  association [0..1] to I_PubSecHierarchy             as _PubSecSpnsrdProgHier        on  $projection.SponsoredProgramHierarchy = _PubSecSpnsrdProgHier.HierarchyID
  association [0..1] to I_PubSecBdgtAcctRevnExpnCode  as _PubSecBdgtAcctRevnExpnCode  on  $projection.PubSecBdgtAcctRevnExpnCode = _PubSecBdgtAcctRevnExpnCode.PubSecBdgtAcctRevnExpnCode
  association [0..1] to I_FundType                    as _FundType                    on  $projection.FinancialManagementArea = _FundType.FinancialManagementArea
                                                                                      and $projection.FundType                = _FundType.FundType
  association [0..1] to I_BudgetAccountInChtAccts     as _BudgetAccountInChtAccts     on  $projection.ChartOfAccounts     = _BudgetAccountInChtAccts.ChartOfAccounts
                                                                                      and $projection.PubSecBudgetAccount = _BudgetAccountInChtAccts.PubSecBudgetAccount
  association [0..1] to I_PubSecAvailyCtrlProfile     as _PubSecAvailyCtrlProfile     on  $projection.AvailabilityControlProfile = _PubSecAvailyCtrlProfile.AvailabilityControlProfile
  association [0..1] to I_GranteeMgmtFundType         as _GranteeMgmtFundType         on  $projection.GranteeMgmtFundType = _GranteeMgmtFundType.GranteeMgmtFundType

  association [0..1] to I_Fund                        as _FundHierarchy               on  $projection.FinancialManagementArea = _FundHierarchy.FinancialManagementArea
                                                                                      and $projection.FundHierarchy           = _FundHierarchy.Fund

  //association[0..1] to I_Fund as _Funds   on  $projection.FinancialManagementArea = _Funds.FinancialManagementArea
  //                                                  and $projection.fund             = _Funds.Fund

  association [0..1] to I_Grant                       as _GrantHierarchy              on  $projection.GrantHierarchyNode = _GrantHierarchy.GrantID

  association [0..*] to I_CostCenter                  as _CostCenterHierarchy         on  $projection.ControllingArea     = _CostCenterHierarchy.ControllingArea
                                                                                      and $projection.CostCenterHierarchy = _CostCenterHierarchy.CostCenter
  association [0..1] to I_BudgetAccountInChtAccts     as _BudgetAccountInChtAcctsHier on  $projection.ChartOfAccounts        = _BudgetAccountInChtAcctsHier.ChartOfAccounts
                                                                                      and $projection.BudgetAccountHierarchy = _BudgetAccountInChtAcctsHier.PubSecBudgetAccount

  association [0..1] to I_FunctionalArea              as _FunctionalAreaHierarchy     on  $projection.FunctionalAreaHierarchy = _FunctionalAreaHierarchy.FunctionalArea
  association [0..1] to I_BudgetDocWorkFlowStatus     as _BudgetDocWorkFlowStatus     on  $projection.BudgetDocWorkFlowStatus = _BudgetDocWorkFlowStatus.BudgetDocWorkFlowStatus
  association [0..1] to I_PubSecPlanningCategory      as _PubSecPlanningCategory      on  $projection.PlanningCategory = _PubSecPlanningCategory.PlanningCategory
  association [0..1] to I_PubSecIsConsumableBudget    as _PubSecIsConsumableBudget    on  $projection.PubSecIsConsumableBudget = _PubSecIsConsumableBudget.PubSecIsConsumableBudget
  association [0..1] to I_PubSecBdgtActlItemDSt       as _DocumentStore               on  _DocumentStore.tra_sourceledger = $projection.SourceLedger
                                                                                      and _DocumentStore.tra_ledger       = $projection.Ledger
                                                                                      and _DocumentStore.tra_companycode  = $projection.CompanyCode
                                                                                      and _DocumentStore.tra_fiscalyear   = $projection.FiscalYear
                                                                                      and _DocumentStore.tra_00038        = $projection.AccountingDocument
                                                                                      and _DocumentStore.tra_00088        = $projection.FinancialPlanningReqTransSqnc
                                                                                      and _DocumentStore.tra_00114        = $projection.FinancialPlanningDataPacket
                                                                                      and _DocumentStore.tra_00068        = $projection.ActualPlanJournalEntryItem
{
       @ObjectModel.foreignKey.association: '_SourceLedger'
  key  AcItem.SourceLedger,
       @ObjectModel.foreignKey.association: '_Ledger'
  key  AcItem.Ledger,
       @ObjectModel.foreignKey.association: '_CompanyCode'
  key  AcItem.CompanyCode,
       @ObjectModel.foreignKey.association: '_FiscalYear'
  key  AcItem.FiscalYear,
       @ObjectModel.foreignKey.association: '_JournalEntry'
  key  AcItem.AccountingDocument,
  key  AcItem.FinancialPlanningReqTransSqnc,
  key  AcItem.FinancialPlanningDataPacket,
  key  AcItem.ActualPlanJournalEntryItem,
       @ObjectModel.foreignKey.association: '_PubSecPlanningCategory'
  key  AcItem.PlanningCategory,
       AcItem.LedgerGLLineItem,
       @Aggregation.default: #NONE
       AcItem.FinancialPlanningEntryItem,
       @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
       AcItem.LedgerFiscalYear,
       @ObjectModel.foreignKey.association: '_ControllingArea'
       AcItem.ControllingArea,


       //    Account assignments
       @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
       AcItem.GLAccount,
       @ObjectModel.foreignKey.association: '_ChartOfAccounts'
       AcItem.ChartOfAccounts,
       AcItem.ActualPlanCode,
       @ObjectModel.foreignKey.association: '_BusinessArea'
       AcItem.BusinessArea,
       @ObjectModel.foreignKey.association: '_ProfitCenter'
       AcItem.ProfitCenter,
       @ObjectModel.foreignKey.association: '_CostCenter'
       AcItem.CostCenter,
       //MS: _ProjectBasicData creates runtime error
       //MS: @ObjectModel.foreignKey.association: '_ProjectBasicData'
       AcItem.ProjectInternalID,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_ProjectExternalID'
       AcItem.ProjectExternalID,
       //MS: _PartnerProjectBasicData creates runtime error
       //MS: @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
       AcItem.PartnerProjectInternalID,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
       AcItem.PartnerProjectExternalID,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_WBSElementBasicData'
       AcItem.WBSElementInternalID,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_WBSElementExternalID'
       AcItem.WBSElementExternalID,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
       AcItem.PartnerWBSElementInternalID,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
       AcItem.PartnerWBSElementExternalID,
       @ObjectModel.foreignKey.association: '_FunctionalArea'
       AcItem.FunctionalArea,
       @ObjectModel.foreignKey.association: '_Segment'
       AcItem.Segment,
       @ObjectModel.foreignKey.association: '_CostCtrActivityType'
       AcItem.CostCtrActivityType,
       @ObjectModel.foreignKey.association: '_CostAnalysisResource'
       AcItem.CostAnalysisResource,
       @ObjectModel.foreignKey.association: '_Order'
       AcItem.OrderID,
       @ObjectModel.foreignKey.association: '_WorkPackage'
       AcItem.WorkPackage,
       @ObjectModel.foreignKey.association: '_WorkPackageWorkItem'
       AcItem.WorkItem,
       AcItem.PartnerAccountAssignmentType,
       @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
       AcItem.PartnerCompanyCode,
       @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
       AcItem.PartnerBusinessArea,
       @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
       AcItem.PartnerProfitCenter,
       @ObjectModel.foreignKey.association: '_PartnerCostCenter'
       AcItem.PartnerCostCenter,
       @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
       AcItem.PartnerFunctionalArea,
       @ObjectModel.foreignKey.association: '_PartnerSegment'
       AcItem.PartnerSegment,
       @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
       AcItem.PartnerCostCtrActivityType,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor:   'PartnerOrder_2'
       @VDM.lifecycle.status:    #DEPRECATED
       @VDM.lifecycle.successor: 'PartnerOrder_2'
       @ObjectModel.foreignKey.association: '_PartnerOrder'
       AcItem.PartnerOrder,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PartnerOrder_2'
       AcItem.PartnerOrder_2,
       @ObjectModel.foreignKey.association: '_PartnerCompany'
       AcItem.PartnerCompany,
       @ObjectModel.foreignKey.association: '_OriginProfitCenter'
       AcItem.OriginProfitCenter,
       @ObjectModel.foreignKey.association: '_OriginCostCenter'
       AcItem.OriginCostCenter,
       @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
       AcItem.OriginCostCtrActivityType,

       @ObjectModel.foreignKey.association: '_CostCenterHierarchy'
       cast( AcItem.CostCenter as fis_cctr_hryid_42)                  as CostCenterHierarchy,
       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
       _CostCenterHierarchy,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_FundHierarchy'
       cast(AcItem._Fund.Fund as fmis_hryid_fund )                    as FundHierarchy,
       //AcItem.Fund  as FundHierarchy,
       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
       _FundHierarchy,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_GrantHierarchy'
       cast (AcItem.GrantID as gm_hrynid_grant)                       as GrantHierarchyNode,

       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
       _GrantHierarchy,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_FunctionalAreaHierarchy'
       cast( AcItem.FunctionalArea as fis_hryid_functionalarea_42)    as FunctionalAreaHierarchy,
       _FunctionalAreaHierarchy,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_BudgetAccountInChtAcctsHier'
       cast (AcItem.PubSecBudgetAccount as psm_hryid_budgetaccount  ) as BudgetAccountHierarchy,
       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
       _BudgetAccountInChtAcctsHier,

       // Control Objects
       @ObjectModel.foreignKey.association: '_CtrlObjFund'
       cast( coalesce( _CtrlObjFundMap.CtrlObjForFund, '' )
             as psm_s4c_fm_avc_ctrl_obj_fu preserving type )          as CtrlObjForFund,
       @ObjectModel.foreignKey.association: '_PubSecFundHier'
       cast( coalesce( _CtrlObjFundMap.HierarchyIDForFund, '' )
             as psm_s4c_fm_avc_hier_id_fu preserving type )           as HierarchyIDForFund,
       @ObjectModel.foreignKey.association: '_CtrlObjFuncArea'
       cast( coalesce( _CtrlObjFuncAreaMap.CtrlObjForFunctionalArea, '' )
             as psm_s4c_fm_avc_ctrl_obj_fa preserving type )          as CtrlObjForFunctionalArea,
       @ObjectModel.foreignKey.association: '_PubSecFunctionalAreaHier'
       cast( coalesce( _CtrlObjFuncAreaMap.HierarchyIDForFunctionalArea, '' )
             as psm_s4c_fm_avc_hier_id_fa preserving type )           as HierarchyIDForFunctionalArea,
       @ObjectModel.foreignKey.association: '_CtrlObjBdgtPeriod'
       cast( coalesce( _CtrlObjBdgtPeriodMap.CtrlObjForBudgetPeriod, '' )
             as psm_s4c_fm_avc_ctrl_obj_bp preserving type )          as CtrlObjForBudgetPeriod,
       @ObjectModel.foreignKey.association: '_PubSecBudgetPeriodHier'
       cast( coalesce( _CtrlObjBdgtPeriodMap.HierarchyIDForBudgetPeriod, '' )
             as psm_s4c_fm_avc_hier_id_bp preserving type )           as HierarchyIDForBudgetPeriod,
       @ObjectModel.foreignKey.association: '_CtrlObjCostCenter'
       cast( coalesce( _CtrlObjCostCenterMap.CtrlObjForCostCenter, '' )
             as psm_s4c_fm_avc_ctrl_obj_cc preserving type )          as CtrlObjForCostCenter,
       @ObjectModel.foreignKey.association: '_PubSecCostCenterHier'
       cast( coalesce( _CtrlObjCostCenterMap.HierarchyIDForCostCenter, '' )
             as psm_s4c_fm_avc_hier_id_cc preserving type )           as HierarchyIDForCostCenter,
       @ObjectModel.foreignKey.association: '_CtrlObjWBSElement'
       cast( coalesce( _CtrlObjWBSElementMap.CtrlObjForWBSElement, '' )
             as psm_s4c_fm_avc_ctrl_obj_wb preserving type )          as CtrlObjForWBSElement,
       @ObjectModel.foreignKey.association: '_PubSecWBSElementHier'
       cast( coalesce( _CtrlObjWBSElementMap.HierarchyIDForWBSElement, '' )
             as psm_s4c_fm_avc_hier_id_wb preserving type )           as HierarchyIDForWBSElement,
       @ObjectModel.foreignKey.association: '_CtrlObjBdgtAccount'
       cast( coalesce( _CtrlObjBdgtAccountMap.CtrlObjForBudgetAccount, '' )
             as psm_s4c_fm_avc_ctrl_obj_ba preserving type )          as CtrlObjForBudgetAccount,
       @ObjectModel.foreignKey.association: '_PubSecBudgetAccountHier'
       cast( coalesce( _CtrlObjBdgtAccountMap.HierarchyIDForBudgetAccount, '' )
             as psm_s4c_fm_avc_hier_id_ba preserving type )           as HierarchyIDForBudgetAccount,
       cast( coalesce( _CtrlObjGrantMap.CtrlObjForGrant, '' )
             as psm_s4c_fm_avc_ctrl_obj_gr preserving type )          as CtrlObjForGrant,
       @ObjectModel.foreignKey.association: '_PubSecGrantHier'
       cast( coalesce( _CtrlObjGrantMap.GrantHierarchy, '' )
             as gm_hryid_grant preserving type )                      as GrantHierarchy,
       @ObjectModel.foreignKey.association: '_CtrlObjSpnsrdClass'
       cast( coalesce( _CtrlObjSpnsrdClassMap.CtrlObjForSponsoredClass, '' )
             as psm_s4c_fm_avc_ctrl_obj_sc preserving type )          as CtrlObjForSponsoredClass,
       @ObjectModel.foreignKey.association: '_PubSecSpnsrdClassHier'
       cast( coalesce( _CtrlObjSpnsrdClassMap.SponsoredClassHierarchy, '' )
             as gmis_hryid_sponsoredclass preserving type )           as SponsoredClassHierarchy,
       @ObjectModel.foreignKey.association: '_CtrlObjSpnsrdProg'
       cast( coalesce( _CtrlObjSpnsrdProgMap.CtrlObjForSponsoredProgram, '' )
             as psm_s4c_fm_avc_ctrl_obj_sp preserving type )          as CtrlObjForSponsoredProgram,
       @ObjectModel.foreignKey.association: '_PubSecSpnsrdProgHier'
       cast( coalesce( _CtrlObjSpnsrdProgMap.SponsoredProgramHierarchy, '' )
             as gmis_hryid_sponsoredprog preserving type )            as SponsoredProgramHierarchy,
       cast( concat(AcItem.GrantID,AcItem.GteeMBudgetValidityNumber)
             as psm_s4c_fm_avc_ctrl_obj_bvn preserving type )         as CtrlObjForBdgtValidityNmbr,

       // Transaction data
       AcItem.ReferenceDocumentType,
       AcItem.ReferenceDocumentContext,
       AcItem.ReferenceDocument,
       @ObjectModel.foreignKey.association: '_BusinessTransactionType'
       AcItem.BusinessTransactionType,
       @ObjectModel.foreignKey.association: '_FinancialTransactionType'
       AcItem.FinancialTransactionType,
       @ObjectModel.foreignKey.association: '_AccountingDocumentType'
       AcItem.AccountingDocumentType,
       @ObjectModel.foreignKey.association: '_FinancialAccountType'
       AcItem.FinancialAccountType,
       AcItem.PostingDate,
       //MS: Marked as obsolete @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
       @Semantics.fiscal.period: true
       AcItem.FiscalPeriod,
       @ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant'
       @Semantics.fiscal.yearPeriod: true
       AcItem.FiscalYearPeriod,
       @ObjectModel.foreignKey.association: '_FiscalYearVariant'
       @Semantics.fiscal.yearVariant: true
       AcItem.FiscalYearVariant,
       AcItem.PlanningCategoryUsage,
       AcItem.ServicesRenderedDate,
       @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
       AcItem.ControllingDebitCreditCode,
       AcItem.AccountAssignmentType,
       AcItem.PersonnelNumber,
       AcItem.ValuationArea,
       @ObjectModel.foreignKey.association: '_Plant'
       AcItem.Plant,
       @ObjectModel.foreignKey.association: '_Product'
       AcItem.Product,
       @ObjectModel.foreignKey.association: '_Customer'
       AcItem.Customer,
       @ObjectModel.foreignKey.association: '_Supplier'
       AcItem.Supplier,
       @ObjectModel.foreignKey.association: '_SalesDocument'
       AcItem.SalesDocument,
       @ObjectModel.foreignKey.association: '_SalesDocumentItem'
       AcItem.SalesDocumentItem,
       @ObjectModel.foreignKey.association: '_ServiceDocument'
       AcItem.ServiceDocument,
       @ObjectModel.foreignKey.association: '_ServiceDocumentType'
       //@Consumption.valueHelpDefinition: [{ entity : { name: 'C_ServiceDocumentTypeVH',
       // element: 'ServiceDocumentType' }}]
       AcItem.ServiceDocumentType,
       @ObjectModel.foreignKey.association: '_ServiceDocumentItem'
       AcItem.ServiceDocumentItem,
       @ObjectModel.foreignKey.association: '_ServiceContractType'
       AcItem.ServiceContractType,
       @ObjectModel.foreignKey.association: '_ServiceContract'
       AcItem.ServiceContract,
       @ObjectModel.foreignKey.association: '_ServiceContractItem'
       AcItem.ServiceContractItem,

       @ObjectModel.foreignKey.association: '_BillingDocumentType'
       AcItem.BillingDocumentType,
       @ObjectModel.foreignKey.association: '_SalesOrganization'
       AcItem.SalesOrganization,
       @ObjectModel.foreignKey.association: '_DistributionChannel'
       AcItem.DistributionChannel,
       @ObjectModel.foreignKey.association: '_OrganizationDivision'
       AcItem.OrganizationDivision,
       @ObjectModel.foreignKey.association: '_SoldProduct'
       AcItem.SoldProduct,
       @ObjectModel.foreignKey.association: '_CustomerGroup'
       AcItem.CustomerGroup,
       @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
       AcItem.CustomerSupplierCountry,
       AcItem.CustomerSupplierIndustry,
       @ObjectModel.foreignKey.association: '_SalesDistrict'
       AcItem.SalesDistrict,
       @ObjectModel.foreignKey.association: '_BillToParty'
       AcItem.BillToParty,
       @ObjectModel.foreignKey.association: '_ShipToParty'
       AcItem.ShipToParty,
       AcItem.CustomerSupplierCorporateGroup,
       AcItem.IsStatisticalOrder,
       AcItem.IsStatisticalCostCenter,
       AcItem.IsStatisticalSalesDocument,
       AcItem.WBSIsStatisticalWBSElement,
       AcItem.WorkCenterInternalID,
       AcItem.OrderOperation,
       AcItem.OrderItem,
       AcItem.SourceReferenceDocumentType,
       AcItem.SourceLogicalSystem,
       AcItem.SourceReferenceDocumentCntxt,
       AcItem.SourceReferenceDocument,
       AcItem.SourceReferenceDocumentItem,
       AcItem.SourceReferenceDocSubitem,
       AcItem.IsCommitment,
       @ObjectModel.foreignKey.association: '_FinancialManagementArea'
       AcItem.FinancialManagementArea,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_Fund'
       AcItem.Fund,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PartnerFund'
       AcItem.PartnerFund,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_Grant'
       AcItem.GrantID,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_Sponsor'
       AcItem._Grant.GranteeMgmtSponsor,
       AcItem.SponsoredClass,
       AcItem.SponsoredProgram,
       AcItem.GteeMBudgetValidityNumber,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PartnerGrant'
       AcItem.PartnerGrant,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_BudgetPeriod'
       AcItem.BudgetPeriod,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
       AcItem.PartnerBudgetPeriod,

       // Add Cash Ledger Account fields
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_CashLedgerAccount'
       AcItem.CashLedgerAccount,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
       AcItem.CashLedgerCompanyCode,
       // Add PSM_S4C technical fields
       @Analytics.internalName: #LOCAL
       //MS: Switch to _BudgetAccountInChtAccts to provide the hierarchy
       @ObjectModel.foreignKey.association: '_BudgetAccountInChtAccts'
       //MS: @ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
       AcItem.PubSecBudgetAccount,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
       AcItem.PubSecBudgetAccountCoCode,
       @Analytics.internalName: #LOCAL
       AcItem.PubSecBudgetCnsmpnDate,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnFsclPeriod'
       //MS: Marked as obsolete @Semantics.fiscal.period: true
       AcItem.PubSecBudgetCnsmpnFsclPeriod,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnFsclYear'
       @Semantics.fiscal.year: true
       AcItem.PubSecBudgetCnsmpnFsclYear,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnType'
       AcItem.PubSecBudgetCnsmpnType,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnTypeGroup'
       AcItem._PubSecBdgtCnsmpnType.PubSecBudgetCnsmpnTypeGroup       as PubSecBudgetCnsmpnTypeGroup,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnAmtType'
       AcItem.PubSecBudgetCnsmpnAmtType,
       AcItem.PubSecBudgetIsRelevant,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_PubSecBdgtAcctRevnExpnCode'
       _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode                as PubSecBdgtAcctRevnExpnCode,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_FundType'
       AcItem._Fund.FundType                                          as FundType,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_GranteeMgmtFundType'
       AcItem._Fund._FundType.GranteeMgmtFundType                     as GranteeMgmtFundType,

       // End PSM_S4C technical fields

       // Budget transaction fields
       @ObjectModel.foreignKey.association: '_BudgetProcess'
       AcItem.BudgetProcess,
       @ObjectModel.foreignKey.association: '_BudgetingType'
       AcItem.BudgetingType,
       @ObjectModel.foreignKey.association: '_BudgetDocWorkFlowStatus'
       AcItem.BudgetDocWorkFlowStatus,

       // Availability Control
       @ObjectModel.foreignKey.association: '_PubSecAvailyCtrlProfile'
       _CtrlObjProfile.AvailabilityControlProfile                     as AvailabilityControlProfile,

       // Original documents for semantic navigation
       @Analytics.internalName: #LOCAL
       cast(
         case
           when (AcItem.ReferenceDocumentType = 'FPL04' or AcItem.ReferenceDocumentType = 'FPL00') and
                AcItem.ActualPlanCode = 'P'
             then AcItem.ReferenceDocument
           else ''
         end as psm_bdgt_docnr preserving type )                      as BudgetDocument,
       @Analytics.internalName: #LOCAL
       cast(
         case
           when AcItem.SourceReferenceDocumentType = 'PORD'
             then AcItem.SourceReferenceDocument
           else ''
         end as vdm_purchaseorder preserving type )                   as PurchaseOrder,

       @Analytics.internalName: #LOCAL
       cast(
         case
           when AcItem.SourceReferenceDocumentType = 'PREQ'
             then AcItem.SourceReferenceDocument
           else ''
         end as vdm_purchaserequisition preserving type )             as PurchaseRequisition,

       @Analytics.internalName: #LOCAL
       cast(
         case
           when AcItem.SourceReferenceDocumentType = 'FMRES'
             then AcItem.SourceReferenceDocument
           else ''
         end as fmis_earmarkedfundsdoc preserving type )              as EarmarkedFundsDocument,

       // Amounts, Currencies, Units
       @ObjectModel.foreignKey.association: '_TransactionCurrency'
       //@Semantics.currencyCode:true
       AcItem.TransactionCurrency,
       @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
       //@Semantics.currencyCode:true
       AcItem.CompanyCodeCurrency,
       @ObjectModel.foreignKey.association: '_GlobalCurrency'
       //@Semantics.currencyCode:true
       AcItem.GlobalCurrency,
       @ObjectModel.foreignKey.association: '_CostSourceUnit'
       //@Semantics.unitOfMeasure:true
       AcItem.CostSourceUnit,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       AcItem.AmountInTransactionCurrency,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       AcItem.AmountInCompanyCodeCurrency,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       AcItem.AmountInGlobalCurrency,
       @Aggregation.default: #SUM
       @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
       AcItem.ValuationQuantity,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       AcItem.ActualAmountInTransactionCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       AcItem.ActualAmountInCompanyCodeCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       AcItem.ActualAmountInGlobalCurrency,
       @Aggregation.default: #SUM
       @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
       AcItem.ActualValuationQuantity,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       AcItem.PlanAmountInTransactionCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       AcItem.PlanAmountInCompanyCodeCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       AcItem.PlanAmountInGlobalCurrency,
       @Aggregation.default: #SUM
       @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
       AcItem.PlanValuationQuantity,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       AcItem.PlanPriceInCompanyCodeCurrency,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       AcItem.PlanPriceInTransactionCurrency,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       AcItem.PlanPriceInGlobalCurrency,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       AcItem.ActlPlnDiffAmtInTransCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       AcItem.ActlPlnDiffAmtInCoCodeCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       AcItem.ActlPlnDiffAmtInGlobalCrcy,
       @Aggregation.default: #SUM
       @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
       AcItem.ActlPanDiffValuationQuantity,

       // Define PSM specific amount fields to transaction currency
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
              AcItem.ActualPlanCode = 'P' then
           cast( AcItem.AmountInTransactionCurrency as psm_amt_expn_bdgt_trans_curr )
         else
           cast( '0' as psm_amt_expn_bdgt_trans_curr )
       end                                                            as PubSecExpnBdgtAmtInTransCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
              AcItem.ActualPlanCode = 'A' and
              AcItem.IsCommitment = 'X' then
           cast( AcItem.AmountInTransactionCurrency as psm_amt_expn_cmtmt_trans_curr )
         else
           cast( '0' as psm_amt_expn_cmtmt_trans_curr )
       end                                                            as PubSecExpnCmtmtAmtInTransCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
              AcItem.ActualPlanCode = 'A' and
              AcItem.IsCommitment <> 'X' then
           cast( AcItem.AmountInTransactionCurrency as psm_amt_expn_actl_trans_curr )
         else
           cast( '0' as psm_amt_expn_actl_trans_curr )
       end                                                            as PubSecExpnActlAmtInTransCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
              AcItem.ActualPlanCode = 'P' then
           cast( AcItem.AmountInTransactionCurrency as psm_amt_revn_bdgt_trans_curr )
         else
           cast( '0' as psm_amt_revn_bdgt_trans_curr )
       end                                                            as PubSecRevnBdgtAmtInTransCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
              AcItem.ActualPlanCode = 'A' and
              AcItem.IsCommitment = 'X' then
           cast( AcItem.AmountInTransactionCurrency as psm_amt_revn_cmtmt_trans_curr )
         else
           cast( '0' as psm_amt_revn_cmtmt_trans_curr )
       end                                                            as PubSecRevnCmtmtAmtInTransCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
              AcItem.ActualPlanCode = 'A' and
              AcItem.IsCommitment <> 'X' then
           cast( AcItem.AmountInTransactionCurrency as psm_amt_revn_actl_trans_curr )
         else
           cast( '0' as psm_amt_revn_actl_trans_curr )
       end                                                            as PubSecRevnActlAmtInTransCrcy,

       // Define PSM specific amount fields to company code currency
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
              AcItem.ActualPlanCode = 'P' then
           cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_expn_bdgt_cc_curr )
         else
           cast( '0' as psm_amt_expn_bdgt_cc_curr )
       end                                                            as PubSecExpnBdgtAmtInCoCodeCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
              AcItem.ActualPlanCode = 'A' and
              AcItem.IsCommitment = 'X' then
           cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_expn_cmtmt_cc_curr )
         else
           cast( '0' as psm_amt_expn_cmtmt_cc_curr )
       end                                                            as PubSecExpnCmtmtAmtInCoCodeCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
              AcItem.ActualPlanCode = 'A' and
              AcItem.IsCommitment <> 'X' then
           cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_expn_actl_cc_curr )
         else
           cast( '0' as psm_amt_expn_actl_cc_curr )
       end                                                            as PubSecExpnActlAmtInCoCodeCrcy,

       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
              AcItem.ActualPlanCode = 'P' then
           cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_revn_bdgt_cc_curr )
         else
           cast( '0' as psm_amt_revn_bdgt_cc_curr )
       end                                                            as PubSecRevnBdgtAmtInCoCodeCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
              AcItem.ActualPlanCode = 'A' and
              AcItem.IsCommitment = 'X' then
           cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_revn_cmtmt_cc_curr )
         else
           cast( '0' as psm_amt_revn_cmtmt_cc_curr )
       end                                                            as PubSecRevnCmtmtAmtInCoCodeCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
              AcItem.ActualPlanCode = 'A' and
              AcItem.IsCommitment <> 'X' then
           cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_revn_actl_cc_curr )
         else
           cast( '0' as psm_amt_revn_actl_cc_curr )
       end                                                            as PubSecRevnActlAmtInCoCodeCrcy,

       // Define PSM specific amount fields to global currency
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
              AcItem.ActualPlanCode = 'P' then
           cast( AcItem.AmountInGlobalCurrency as psm_amt_expn_bdgt_grp_curr )
         else
           cast( '0' as psm_amt_expn_bdgt_grp_curr )
       end                                                            as PubSecExpnBdgtAmtInGlobalCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
              AcItem.ActualPlanCode = 'A' and
              AcItem.IsCommitment = 'X' then
           cast( AcItem.AmountInGlobalCurrency as psm_amt_expn_cmtmt_grp_curr )
         else
           cast( '0' as psm_amt_expn_cmtmt_grp_curr )
       end                                                            as PubSecExpnCmtmtAmtInGlobalCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
              AcItem.ActualPlanCode = 'A' and
              AcItem.IsCommitment <> 'X' then
           cast( AcItem.AmountInGlobalCurrency as psm_amt_expn_actl_grp_curr )
         else
           cast( '0' as psm_amt_expn_actl_grp_curr )
       end                                                            as PubSecExpnActlAmtInGlobalCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
              AcItem.ActualPlanCode = 'P' then
           cast( AcItem.AmountInGlobalCurrency as psm_amt_revn_bdgt_grp_curr )
         else
           cast( '0' as psm_amt_revn_bdgt_grp_curr )
       end                                                            as PubSecRevnBdgtAmtInGlobalCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
              AcItem.ActualPlanCode = 'A' and
              AcItem.IsCommitment = 'X' then
           cast( AcItem.AmountInGlobalCurrency as psm_amt_revn_cmtmt_grp_curr )
         else
           cast( '0' as psm_amt_revn_cmtmt_grp_curr )
       end                                                            as PubSecRevnCmtmtAmtInGlobalCrcy,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       case
         when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
              AcItem.ActualPlanCode = 'A' and
              AcItem.IsCommitment <> 'X' then
           cast( AcItem.AmountInGlobalCurrency as psm_amt_revn_actl_grp_curr )
         else
           cast( '0' as psm_amt_revn_actl_grp_curr )
       end                                                            as PubSecRevnActlAmtInGlobalCrcy,


       // Additional fields only for authorization
       AcItem.GLAccountAuthorizationGroup,
       AcItem.SupplierBasicAuthorizationGrp,
       AcItem.CustomerBasicAuthorizationGrp,
       AcItem.AcctgDocTypeAuthorizationGroup,
       AcItem.OrderType,
       AcItem.SalesOrderType,
       AcItem.AssetClass,
       @ObjectModel.foreignKey.association: '_PubSecIsConsumableBudget'
       AcItem.PubSecIsConsumableBudget,
       // Associations
       _CtrlObjFund,
       _CtrlObjFuncArea,
       _CtrlObjBdgtPeriod,
       _CtrlObjCostCenter,
       _CtrlObjWBSElement,
       _CtrlObjBdgtAccount,
       _CtrlObjGrant,
       _CtrlObjSpnsrdClass,
       _CtrlObjSpnsrdProg,
       _PubSecFundHier,
       _PubSecFunctionalAreaHier,
       _PubSecBudgetPeriodHier,
       _PubSecCostCenterHier,
       _PubSecWBSElementHier,
       _PubSecBudgetAccountHier,
       _PubSecGrantHier,
       _PubSecSpnsrdClassHier,
       _PubSecSpnsrdProgHier,
       AcItem._CashLedgerAccount,
       AcItem._CashLedgerCompanyCode,
       _PubSecBudgetAccount,
       _BudgetAccountInChtAccts,
       _PubSecBudgetAccountCoCode,
       _PubSecBdgtAcctRevnExpnCode,
       _PubSecBdgtCnsmpnFsclYear,
       _PubSecBdgtCnsmpnFsclPeriod,
       AcItem._PubSecBdgtCnsmpnType,
       AcItem._PubSecBdgtCnsmpnAmtType,
       AcItem._PubSecBdgtCnsmpnType._PubSecBudgetCnsmpnTypeGroup      as _PubSecBudgetCnsmpnTypeGroup,
       _PubSecBudgetCnsmpnDate,
       _PubSecAvailyCtrlProfile,
       AcItem._AccountingDocumentType,
       AcItem._BillingDocumentType,
       AcItem._BillToParty,
       AcItem._BudgetingType,
       _BudgetDocWorkFlowStatus,
       AcItem._BudgetPeriod,
       AcItem._BudgetProcess,
       AcItem._BusinessArea,
       AcItem._BusinessTransactionType,
       AcItem._CalendarDate,
       AcItem._ChartOfAccounts,
       AcItem._CompanyCode,
       AcItem._CompanyCodeCurrency,
       AcItem._ControllingArea,
       AcItem._ControllingDebitCreditCode,
       AcItem._CostAnalysisResource,
       AcItem._CostCenter,
       AcItem._CostCtrActivityType,
       AcItem._CostSourceUnit,
       AcItem._CurrentCostCenter,
       AcItem._CurrentProfitCenter,
       AcItem._Customer,
       AcItem._CustomerGroup,
       AcItem._CustomerSupplierCountry,
       AcItem._CustomerSupplierIndustryText,
       AcItem._DistributionChannel,
       AcItem._Employment,
       AcItem._FinancialAccountType,
       AcItem._FinancialManagementArea,
       AcItem._FinancialTransactionType,
       AcItem._FiscalCalendarDate,
       AcItem._FiscalPeriodForVariant,
       AcItem._FiscalYear,
       AcItem._FiscalYearPeriodForVariant,
       AcItem._FiscalYearVariant,
       AcItem._FunctionalArea,
       AcItem._Fund,
       _FundType,
       _GranteeMgmtFundType,
       AcItem._GLAccountInChartOfAccounts,
       AcItem._GLAccountInCompanyCode,
       AcItem._GlobalCurrency,
       AcItem._Grant,
       AcItem._Grant._Sponsor,
       AcItem._InternalOrder,
       AcItem._JournalEntry,
       AcItem._Ledger,
       AcItem._LedgerFiscalYearForVariant,
       AcItem._Order,
       AcItem._OrganizationDivision,
       AcItem._OriginCostCenter,
       AcItem._OriginCostCtrActivityType,
       AcItem._OriginProfitCenter,
       AcItem._PartnerBudgetPeriod,
       AcItem._PartnerFund,
       AcItem._PartnerBusinessArea,
       AcItem._PartnerCompany,
       AcItem._PartnerCompanyCode,
       AcItem._PartnerCostCenter,
       AcItem._PartnerCostCtrActivityType,
       AcItem._PartnerFunctionalArea,
       AcItem._PartnerGrant,
       AcItem._PartnerOrder,
       AcItem._PartnerOrder_2,
       AcItem._PartnerProfitCenter,
       AcItem._PartnerProjectBasicData,
       AcItem._PartnerProjectExternalID,
       AcItem._PartnerSegment,
       AcItem._PartnerWBSElementBasicData,
       AcItem._PartnerWBSElementExternalID,
       //     AcItem._PlanningCategory,
       AcItem._Plant,
       AcItem._Product,
       AcItem._ProfitCenter,
       AcItem._ProjectBasicData,
       AcItem._ProjectExternalID,
       AcItem._ProjectExternalIDText,
       AcItem._SalesDistrict,
       AcItem._SalesDocument,
       AcItem._SalesDocumentItem,
       AcItem._ServiceDocument,
       AcItem._ServiceDocumentType,
       AcItem._ServiceDocumentItem,
       AcItem._ServiceContractType,
       AcItem._ServiceContract,
       AcItem._ServiceContractItem,
       AcItem._SalesOrganization,
       AcItem._Segment,
       AcItem._SemTagGLAccount,
       AcItem._ShipToParty,
       AcItem._SoldProduct,
       AcItem._SourceLedger,
       AcItem._Supplier,
       AcItem._TransactionCurrency,
       AcItem._WBSElementBasicData,
       AcItem._WBSElementExternalID,
       AcItem._WorkCenter,
       AcItem._WorkPackage,
       AcItem._WorkPackageWorkItem,
       _PubSecPlanningCategory,
       _PubSecIsConsumableBudget,

       @Analytics.association.toDocumentStorage: true
       _DocumentStore

}
where

  (
    (
      (
            AcItem.ActualPlanCode                       =  'P'
        and _PubSecBudgetAccount.PubSecBudgetIsRelevant =  'X'
      )
      or    // Budget data
      (
            AcItem.ActualPlanCode                       =  'A'
        and // Actual data only budget relevant
        (
            AcItem.PubSecBudgetIsRelevant               =  'X'
        )
      )
    )
  )
  and
  // Avc Profile not key field - hence only include ONE scenario per record
  (
    (
      (
            AcItem._Grant.GrantIsNotRelevantGrant       =  'X'
        or  AcItem.GrantID                              =  ''
      )
      and(
            _CtrlObjProfile.BudgetScenario              =  ''
        or  _CtrlObjProfile.BudgetScenario              is null
      )
    )
    or(
            AcItem._Grant.GrantIsNotRelevantGrant       <> 'X'
      and(
            AcItem._Fund._FundType.GranteeMgmtFundType  =  'I'
        or  AcItem._Fund._FundType.GranteeMgmtFundType  =  ''
        or  AcItem._Fund._FundType.GranteeMgmtFundType  is null
      )
      and   _CtrlObjProfile.BudgetScenario              =  'GMI'
    )
    or(
            AcItem._Grant.GrantIsNotRelevantGrant       <> 'X'
      and   AcItem._Fund._FundType.GranteeMgmtFundType  =  'E'
      and   _CtrlObjProfile.BudgetScenario              =  'GME'
    )
  )
```
