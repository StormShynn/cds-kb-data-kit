---
name: I_PUBSECCMTMTACTLITEMCUBE
description: "Pubseccmtmtactlitemcube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-IS
  - interface-view
  - analytical
  - item-level
  - component:PSM-FM-IS
  - lob:Other
---
# I_PUBSECCMTMTACTLITEMCUBE

**Pubseccmtmtactlitemcube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  |  |  |
| `SourceLedger` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |
| `LedgerGLLineItem` | ✓ | |  |  |  |  |
| `LedgerFiscalYear` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `FinancialTransactionType` |  | |  |  |  |  |
| `BusinessTransactionType` |  | |  |  |  |  |
| `ReferenceDocumentType` |  | |  |  |  |  |
| `LogicalSystem` |  | |  |  |  |  |
| `ReferenceDocumentContext` |  | |  |  |  |  |
| `ReferenceDocument` |  | |  |  |  |  |
| `ReferenceDocumentItem` |  | |  |  |  |  |
| `ReferenceDocumentItemGroup` |  | |  |  |  |  |
| `IsReversal` |  | |  |  |  |  |
| `IsReversed` |  | |  |  |  |  |
| `ReversalReferenceDocumentCntxt` |  | |  |  |  |  |
| `ReversalReferenceDocument` |  | |  |  |  |  |
| `IsSettlement` |  | |  |  |  |  |
| `IsSettled` |  | |  |  |  |  |
| `PredecessorReferenceDocType` |  | |  |  |  |  |
| `PredecessorReferenceDocCntxt` |  | |  |  |  |  |
| `PredecessorReferenceDocument` |  | |  |  |  |  |
| `PredecessorReferenceDocItem` |  | |  |  |  |  |
| `SourceReferenceDocumentType` |  | |  |  |  |  |
| `SourceLogicalSystem` |  | |  |  |  |  |
| `SourceReferenceDocumentCntxt` |  | |  |  |  |  |
| `SourceReferenceDocument` |  | |  |  |  |  |
| `SourceReferenceDocumentItem` |  | |  |  |  |  |
| `SourceReferenceDocSubitem` |  | |  |  |  |  |
| `IsCommitment` |  | |  |  |  |  |
| `JrnlEntryItemObsoleteReason` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `CostCenterHierarchy` |  | |  | `cast( AcItem.CostCenter as fis_cctr_hryid_42)` |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `Segment` |  | |  |  |  |  |
| `PartnerCostCenter` |  | |  |  |  |  |
| `PartnerProfitCenter` |  | |  |  |  |  |
| `PartnerFunctionalArea` |  | |  |  |  |  |
| `PartnerBusinessArea` |  | |  |  |  |  |
| `PartnerCompany` |  | |  |  |  |  |
| `PartnerSegment` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `AmountInTransactionCurrency` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |  |  |
| `GlobalCurrency` |  | |  |  |  |  |
| `AmountInGlobalCurrency` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `CostSourceUnit` |  | |  |  |  |  |
| `FundHierarchy` |  | |  | `cast( AcItem.Fund as fmis_hryid_fund )` |  |  |
| `GrantHierarchy` |  | |  | `cast (AcItem.GrantID as gm_hryid_grant)` |  |  |
| `FunctionalAreaHierarchy` |  | |  | `cast( AcItem.FunctionalArea as fis_hryid_functionalarea_42)` |  |  |
| `BudgetAccountHierarchy` |  | |  | `cast (PubSecBudgetAccount as psm_hryid_budgetaccount )` |  |  |
| `PubSecExpnCmtmtAmtInTransCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.IsCommitment = 'X' then cast( AcItem.AmountInTransactionCurrency as psm_amt_expn_cmtmt_trans_curr ) else cast( '0' as psm_amt_expn_cmtmt_trans_curr ) end` |  |  |
| `PubSecExpnActlAmtInTransCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.IsCommitment <> 'X' then cast( AcItem.AmountInTransactionCurrency as psm_amt_expn_actl_trans_curr ) else cast( '0' as psm_amt_expn_actl_trans_curr ) end` |  |  |
| `PubSecRevnCmtmtAmtInTransCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.IsCommitment = 'X' then cast( AcItem.AmountInTransactionCurrency as psm_amt_revn_cmtmt_trans_curr ) else cast( '0' as psm_amt_revn_cmtmt_trans_curr ) end` |  |  |
| `PubSecRevnActlAmtInTransCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.IsCommitment <> 'X' then cast( AcItem.AmountInTransactionCurrency as psm_amt_revn_actl_trans_curr ) else cast( '0' as psm_amt_revn_actl_trans_curr ) end` |  |  |
| `PubSecExpnCmtmtAmtInCoCodeCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.IsCommitment = 'X' then cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_expn_cmtmt_cc_curr ) else cast( '0' as psm_amt_expn_cmtmt_cc_curr ) end` |  |  |
| `PubSecExpnActlAmtInCoCodeCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.IsCommitment <> 'X' then cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_expn_actl_cc_curr ) else cast( '0' as psm_amt_expn_actl_cc_curr ) end` |  |  |
| `PubSecRevnCmtmtAmtInCoCodeCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.IsCommitment = 'X' then cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_revn_cmtmt_cc_curr ) else cast( '0' as psm_amt_revn_cmtmt_cc_curr ) end` |  |  |
| `PubSecRevnActlAmtInCoCodeCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.IsCommitment <> 'X' then cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_revn_actl_cc_curr ) else cast( '0' as psm_amt_revn_actl_cc_curr ) end` |  |  |
| `PubSecExpnCmtmtAmtInGlobalCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.IsCommitment = 'X' then cast( AcItem.AmountInGlobalCurrency as psm_amt_expn_cmtmt_grp_curr ) else cast( '0' as psm_amt_expn_cmtmt_grp_curr ) end` |  |  |
| `PubSecExpnActlAmtInGlobalCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and AcItem.IsCommitment <> 'X' then cast( AcItem.AmountInGlobalCurrency as psm_amt_expn_actl_grp_curr ) else cast( '0' as psm_amt_expn_actl_grp_curr ) end` |  |  |
| `PubSecRevnCmtmtAmtInGlobalCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.IsCommitment = 'X' then cast( AcItem.AmountInGlobalCurrency as psm_amt_revn_cmtmt_grp_curr ) else cast( '0' as psm_amt_revn_cmtmt_grp_curr ) end` |  |  |
| `PubSecRevnActlAmtInGlobalCrcy` |  | |  | `case when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and AcItem.IsCommitment <> 'X' then cast( AcItem.AmountInGlobalCurrency as psm_amt_revn_actl_grp_curr ) else cast( '0' as psm_amt_revn_actl_grp_curr ) end` |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `AccountingDocumentType` |  | |  |  |  |  |
| `AccountingDocumentItem` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `AccountingDocumentCategory` |  | |  |  |  |  |
| `PostingKey` |  | |  |  |  |  |
| `TransactionTypeDetermination` |  | |  |  |  |  |
| `SubLedgerAcctLineItemType` |  | |  |  |  |  |
| `AccountingDocCreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `EliminationProfitCenter` |  | |  |  |  |  |
| `OriginObjectType` |  | |  |  |  |  |
| `GLAccountType` |  | |  |  |  |  |
| `AlternativeGLAccount` |  | |  |  |  |  |
| `CountryChartOfAccounts` |  | |  |  |  |  |
| `InvoiceReference` |  | |  |  |  |  |
| `InvoiceReferenceFiscalYear` |  | |  |  |  |  |
| `FollowOnDocumentType` |  | |  |  |  |  |
| `InvoiceItemReference` |  | |  |  |  |  |
| `ReferencePurchaseOrderCategory` |  | |  |  |  |  |
| `PurchasingDocument` |  | |  |  |  |  |
| `PurchasingDocumentItem` |  | |  |  |  |  |
| `AccountAssignmentNumber` |  | |  |  |  |  |
| `DocumentItemText` |  | |  |  |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `ConditionContract` |  | |  |  |  |  |
| `FinancialAccountType` |  | |  |  |  |  |
| `SpecialGLCode` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `IsOpenItemManaged` |  | |  |  |  |  |
| `ClearingDate` |  | |  |  |  |  |
| `ClearingAccountingDocument` |  | |  |  |  |  |
| `ClearingDocFiscalYear` |  | |  |  |  |  |
| `IsBalanceSheetAccount` |  | |  |  |  |  |
| `AssetDepreciationArea` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `AssetValueDate` |  | |  |  |  |  |
| `AssetTransactionType` |  | |  |  |  |  |
| `DepreciationFiscalPeriod` |  | |  |  |  |  |
| `GroupMasterFixedAsset` |  | |  |  |  |  |
| `GroupFixedAsset` |  | |  |  |  |  |
| `AssetClass` |  | |  |  |  |  |
| `CostEstimate` |  | |  |  |  |  |
| `InventorySpecialStockValnType` |  | |  |  |  |  |
| `InvtrySpecialStockValnType_2` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `InventorySpclStkSalesDocument` |  | |  |  |  |  |
| `InventorySpclStkSalesDocItm` |  | |  |  |  |  |
| `InventorySpecialStockSupplier` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `SenderGLAccount` |  | |  |  |  |  |
| `SenderAccountAssignment` |  | |  |  |  |  |
| `SenderAccountAssignmentType` |  | |  |  |  |  |
| `CostOriginGroup` |  | |  |  |  |  |
| `OriginSenderObject` |  | |  |  |  |  |
| `ControllingDebitCreditCode` |  | |  |  |  |  |
| `ControllingObjectDebitType` |  | |  |  |  |  |
| `QuantityIsIncomplete` |  | |  |  |  |  |
| `OffsettingAccount` |  | |  |  |  |  |
| `OffsettingAccountType` |  | |  |  |  |  |
| `OffsettingChartOfAccounts` |  | |  |  |  |  |
| `LineItemIsCompleted` |  | |  |  |  |  |
| `PersonnelNumber` |  | |  |  |  |  |
| `ControllingObjectClass` |  | |  |  |  |  |
| `PartnerCompanyCode` |  | |  |  |  |  |
| `PartnerControllingObjectClass` |  | |  |  |  |  |
| `OriginCostCenter` |  | |  |  |  |  |
| `OriginProfitCenter` |  | |  |  |  |  |
| `OriginCostCtrActivityType` |  | |  |  |  |  |
| `AccountAssignment` |  | |  |  |  |  |
| `AccountAssignmentType` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  | `cast( AcItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type )` |  |  |
| `PartnerWBSElementInternalID` |  | |  |  |  |  |
| `PartnerWBSElementExternalID` |  | |  | `cast( AcItem._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type )` |  |  |
| `ProjectInternalID` |  | |  |  |  |  |
| `ProjectExternalID` |  | |  | `cast( _ProjectBasicData.ProjectExternalID as fis_projectext_no_conv preserving type )` |  |  |
| `PartnerProjectInternalID` |  | |  |  |  |  |
| `PartnerProjectExternalID` |  | |  | `cast( _PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv preserving type )` |  |  |
| `OperatingConcern` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `CostObject` |  | |  |  |  |  |
| `CostAnalysisResource` |  | |  |  |  |  |
| `WorkPackage` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `CustomerServiceNotification` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceDocument` |  | |  |  |  |  |
| `ServiceDocumentItem` |  | |  |  |  |  |
| `PartnerServiceDocumentType` |  | |  |  |  |  |
| `PartnerServiceDocument` |  | |  |  |  |  |
| `PartnerServiceDocumentItem` |  | |  |  |  |  |
| `ServiceContractType` |  | |  |  |  |  |
| `ServiceContract` |  | |  |  |  |  |
| `ServiceContractItem` |  | |  |  |  |  |
| `PartnerAccountAssignment` |  | |  |  |  |  |
| `PartnerAccountAssignmentType` |  | |  |  |  |  |
| `PartnerCostCtrActivityType` |  | |  |  |  |  |
| `PartnerOrder` |  | |  |  |  |  |
| `PartnerOrder_2` |  | |  |  |  |  |
| `PartnerOrderCategory` |  | |  |  |  |  |
| `PartnerSalesDocument` |  | |  |  |  |  |
| `PartnerSalesDocumentItem` |  | |  |  |  |  |
| `PartnerBusinessProcess` |  | |  |  |  |  |
| `PartnerCostObject` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SoldProduct` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `CustomerSupplierCountry` |  | |  |  |  |  |
| `CustomerSupplierIndustry` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `CustomerSupplierCorporateGroup` |  | |  |  |  |  |
| `FinancialManagementArea` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `FundName` |  | |  | `_Fund._Text[1:Language = $session.system_language].FundName` |  |  |
| `GrantID` |  | |  |  |  |  |
| `GranteeMgmtSponsor` |  | |  |  |  |  |
| `BudgetPeriod` |  | |  |  |  |  |
| `PartnerFund` |  | |  |  |  |  |
| `PartnerGrant` |  | |  |  |  |  |
| `PartnerBudgetPeriod` |  | |  |  |  |  |
| `FundsCenter` |  | |  |  |  |  |
| `FundedProgram` |  | |  |  |  |  |
| `CashLedgerAccount` |  | |  |  |  |  |
| `CashLedgerCompanyCode` |  | |  |  |  |  |
| `PubSecBudgetAccount` |  | |  |  |  |  |
| `PubSecBudgetAccountCoCode` |  | |  |  |  |  |
| `PubSecBudgetCnsmpnDate` |  | |  |  |  |  |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  |  |  |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  |  |  |
| `PubSecBudgetCnsmpnType` |  | |  |  |  |  |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  |  |  |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  |  |  |
| `PubSecBudgetIsRelevant` |  | |  |  |  |  |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  |  |  |
| `FundType` |  | |  |  |  |  |
| `GranteeMgmtFundType` |  | |  |  |  |  |
| `SponsoredClass` |  | |  |  |  |  |
| `SponsoredProgram` |  | |  |  |  |  |
| `GteeMBudgetValidityNumber` |  | |  |  |  |  |
| `PurchaseOrder` |  | |  | `cast( case when AcItem.SourceReferenceDocumentType = 'PORD' and AcItem.SourceLedger = '0E' then AcItem.SourceReferenceDocument when AcItem.SourceLedger = '0L' and AcItem.PurchasingDocument is not initial then AcItem.PurchasingDocument else '' end as vdm_purchaseorder preserving type )` |  |  |
| `PurchaseRequisition` |  | |  | `cast( case when AcItem.SourceReferenceDocumentType = 'PREQ' then AcItem.SourceReferenceDocument else '' end as vdm_purchaserequisition preserving type )` |  |  |
| `EarmarkedFundsDocument` |  | |  | `cast( case when AcItem.SourceReferenceDocumentType = 'FMRES' then AcItem.SourceReferenceDocument else '' end as fmis_earmarkedfundsdoc preserving type )` |  |  |
| `DebitAmountInCoCodeCrcy` |  | |  |  |  |  |
| `CreditAmountInCoCodeCrcy` |  | |  |  |  |  |
| `DebitAmountInTransCrcy` |  | |  |  |  |  |
| `CreditAmountInTransCrcy` |  | |  |  |  |  |
| `IsStatisticalOrder` |  | |  |  |  |  |
| `IsStatisticalCostCenter` |  | |  |  |  |  |
| `IsStatisticalSalesDocument` |  | |  |  |  |  |
| `WBSIsStatisticalWBSElement` |  | |  |  |  |  |
| `CalendarYear` |  | |  |  |  |  |
| `CalendarQuarter` |  | |  |  |  |  |
| `CalendarYearQuarter` |  | |  |  |  |  |
| `CalendarMonth` |  | |  |  |  |  |
| `CalendarYearMonth` |  | |  |  |  |  |
| `CalendarWeek` |  | |  |  |  |  |
| `CalendarYearWeek` |  | |  |  |  |  |
| `GLAccountAuthorizationGroup` |  | |  |  |  |  |
| `SupplierBasicAuthorizationGrp` |  | |  |  |  |  |
| `CustomerBasicAuthorizationGrp` |  | |  |  |  |  |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  |  |  |
| `OrderType` |  | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `_PubSecBdgtCnsmpnFsclYear` |  | |  | `_PubSecBudgetCnsmpnFsclYear` |  |  |
| `_PubSecBdgtCnsmpnFsclPeriod` |  | |  | `_PubSecBudgetCnsmpnFsclPeriod` |  |  |
| `_PubSecBdgtCnsmpnType` |  | |  | `_PubSecBudgetCnsmpnType` |  |  |
| `_PubSecBudgetCnsmpnTypeGroup` |  | |  |  |  |  |
| `_PubSecBdgtCnsmpnAmtType` |  | |  | `_PubSecBudgetCnsmpnAmtType` |  |  |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_WBSElementExternalIDText` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_ProjectExternalIDText` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_CalendarMonth` | | ✓ | | | | |
| `_CalendarQuarter` | | ✓ | | | | |
| `_CalendarYearMonth` | | ✓ | | | | |
| `_PubSecBdgtAcctRevnExpnCode` | | ✓ | | | | |
| `_FundType` | | ✓ | | | | |
| `_BudgetAccountInChtAccts` | | ✓ | | | | |
| `_SourceReferenceDocumentType` | | ✓ | | | | |
| `_GranteeMgmtFundType` | | ✓ | | | | |
| `_FundHierarchy` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_GrantHierarchy` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_BudgetAccountInChtAcctsHier` | | ✓ | | | | |
| `_FunctionalAreaHierarchy` | | ✓ | | | | |
| `_CostCenterHierarchy` | | ✓ | | | | |
| `_DocumentStore` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_WBSElementExternalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectExternalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_CalendarQuarter` | `I_CalendarQuarter` | [1..1] |
| `_CalendarYearMonth` | `I_YearMonth` | [1..1] |
| `_PubSecBdgtAcctRevnExpnCode` | `I_PubSecBdgtAcctRevnExpnCode` | [0..1] |
| `_FundType` | `I_FundType` | [0..1] |
| `_BudgetAccountInChtAccts` | `I_BudgetAccountInChtAccts` | [0..1] |
| `_SourceReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_GranteeMgmtFundType` | `I_GranteeMgmtFundType` | [0..1] |
| `_FundHierarchy` | `I_Fund` | [0..1] |
| `_Fund` | `I_Fund` | [0..1] |
| `_GrantHierarchy` | `I_Grant` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_BudgetAccountInChtAcctsHier` | `I_BudgetAccountInChtAccts` | [0..1] |
| `_FunctionalAreaHierarchy` | `I_FunctionalArea` | [0..1] |
| `_CostCenterHierarchy` | `I_CostCenter` | [0..*] |
| `_DocumentStore` | `I_PubSecCmtmtActlItemDSt` | [0..1] |

## Source Code

```abap
// This is a migrated cube (cube view to cube view entity)
@Analytics.technicalName: 'IPSMS4CCOMACTANC'
//@ClientHandling.algorithm: #SESSION_VARIABLE
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
//@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Commitment and Actual Items - Cube'

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

define view entity I_PubSecCmtmtActlItemCube
  as select from I_GLAccountLineItem as AcItem
  association [0..1] to I_WBSElementByExternalID     as _WBSElementExternalID        on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _WBSElementExternalIDText    on  $projection.WBSElementExternalID = _WBSElementExternalIDText.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID     as _PartnerWBSElementExternalID on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
  association [0..1] to I_ProjectByExternalID        as _ProjectExternalID           on  $projection.ProjectExternalID = _ProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID        as _ProjectExternalIDText       on  $projection.ProjectExternalID = _ProjectExternalIDText.ProjectExternalID
  association [0..1] to I_ProjectByExternalID        as _PartnerProjectExternalID    on  $projection.PartnerProjectExternalID = _PartnerProjectExternalID.ProjectExternalID
  association [1..1] to I_CalendarMonth              as _CalendarMonth               on  $projection.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1] to I_CalendarQuarter            as _CalendarQuarter             on  $projection.CalendarQuarter = _CalendarQuarter.CalendarQuarter
  association [1..1] to I_YearMonth                  as _CalendarYearMonth           on  $projection.CalendarYearMonth = _CalendarYearMonth.YearMonth
  association [0..1] to I_PubSecBdgtAcctRevnExpnCode as _PubSecBdgtAcctRevnExpnCode  on  $projection.PubSecBdgtAcctRevnExpnCode = _PubSecBdgtAcctRevnExpnCode.PubSecBdgtAcctRevnExpnCode
  association [0..1] to I_FundType                   as _FundType                    on  $projection.FinancialManagementArea = _FundType.FinancialManagementArea
                                                                                     and $projection.FundType                = _FundType.FundType
  association [0..1] to I_BudgetAccountInChtAccts    as _BudgetAccountInChtAccts     on  $projection.ChartOfAccounts     = _BudgetAccountInChtAccts.ChartOfAccounts
                                                                                     and $projection.PubSecBudgetAccount = _BudgetAccountInChtAccts.PubSecBudgetAccount
  association [0..1] to I_ReferenceDocumentType      as _SourceReferenceDocumentType on  $projection.SourceReferenceDocumentType = _SourceReferenceDocumentType.ReferenceDocumentType
  association [0..1] to I_GranteeMgmtFundType        as _GranteeMgmtFundType         on  $projection.GranteeMgmtFundType = _GranteeMgmtFundType.GranteeMgmtFundType

  association [0..1] to I_Fund                       as _FundHierarchy               on  $projection.FinancialManagementArea = _FundHierarchy.FinancialManagementArea
                                                                                     and $projection.FundHierarchy           = _FundHierarchy.Fund

  association [0..1] to I_Fund                       as _Fund                        on  $projection.FinancialManagementArea = _Fund.FinancialManagementArea
                                                                                     and $projection.Fund                    = _Fund.Fund

  association [0..1] to I_Grant                      as _GrantHierarchy              on  $projection.GrantHierarchy = _GrantHierarchy.GrantID
  association [0..1] to I_Grant                      as _Grant                       on  $projection.GrantID = _Grant.GrantID
  association [0..1] to I_BudgetAccountInChtAccts    as _BudgetAccountInChtAcctsHier on  $projection.ChartOfAccounts        = _BudgetAccountInChtAcctsHier.ChartOfAccounts
                                                                                     and $projection.BudgetAccountHierarchy = _BudgetAccountInChtAcctsHier.PubSecBudgetAccount

  association [0..1] to I_FunctionalArea             as _FunctionalAreaHierarchy     on  $projection.FunctionalAreaHierarchy = _FunctionalAreaHierarchy.FunctionalArea

  association [0..*] to I_CostCenter                 as _CostCenterHierarchy         on  $projection.ControllingArea     = _CostCenterHierarchy.ControllingArea

                                                                                     and $projection.CostCenterHierarchy = _CostCenterHierarchy.CostCenter
  association [0..1] to I_PubSecCmtmtActlItemDSt   as _DocumentStore               on  _DocumentStore.tra_ledger   = $projection.Ledger
                                                                                     and _DocumentStore.tra_sourceledger   = $projection.SourceLedger
                                                                                     and _DocumentStore.tra_companycode   = $projection.CompanyCode
                                                                                     and _DocumentStore.tra_fiscalyear   = $projection.FiscalYear
                                                                                     and _DocumentStore.tra_00113   = $projection.AccountingDocument
                                                                                     and _DocumentStore.tra_00098   = $projection.LedgerGLLineItem
                                                                                                                                                                       

{

      @ObjectModel.foreignKey.association: '_Ledger'
  key AcItem.Ledger,
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key AcItem.SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key AcItem.CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key AcItem.FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AcItem.AccountingDocument,
  key AcItem.LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      AcItem.LedgerFiscalYear,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      AcItem.ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      AcItem.ControllingArea,

      // Transaction, Currencies, Units
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      AcItem.FinancialTransactionType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      AcItem.BusinessTransactionType,
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      AcItem.ReferenceDocumentType,
      AcItem.LogicalSystem,
      AcItem.ReferenceDocumentContext,
      AcItem.ReferenceDocument,
      AcItem.ReferenceDocumentItem,
      AcItem.ReferenceDocumentItemGroup,
      AcItem.IsReversal,
      AcItem.IsReversed,
      AcItem.ReversalReferenceDocumentCntxt,
      AcItem.ReversalReferenceDocument,
      AcItem.IsSettlement,
      AcItem.IsSettled,
      @ObjectModel.foreignKey.association: '_PredecessorReferenceDocType'
      AcItem.PredecessorReferenceDocType,
      AcItem.PredecessorReferenceDocCntxt,
      AcItem.PredecessorReferenceDocument,
      AcItem.PredecessorReferenceDocItem,
      @ObjectModel.foreignKey.association: '_SourceReferenceDocumentType'
      AcItem.SourceReferenceDocumentType,
      AcItem.SourceLogicalSystem,
      AcItem.SourceReferenceDocumentCntxt,
      AcItem.SourceReferenceDocument,
      AcItem.SourceReferenceDocumentItem,
      AcItem.SourceReferenceDocSubitem,
      AcItem.IsCommitment,
      AcItem.JrnlEntryItemObsoleteReason,

      // Master Data - account assignments
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      AcItem.GLAccount,
      @Analytics.internalName: #LOCAL

      @ObjectModel.foreignKey.association: '_CostCenterHierarchy'
      cast( AcItem.CostCenter as fis_cctr_hryid_42)                                                                 as CostCenterHierarchy,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _CostCenterHierarchy,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CostCenter'
      AcItem.CostCenter,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      AcItem.ProfitCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      AcItem.FunctionalArea,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      AcItem.BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
      AcItem.Segment,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      AcItem.PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      AcItem.PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      AcItem.PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      AcItem.PartnerBusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      AcItem.PartnerCompany,
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      AcItem.PartnerSegment,

      // Amounts/Units
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      //@Semantics.currencyCode:true
      AcItem.TransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AcItem.AmountInTransactionCurrency,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      //@Semantics.currencyCode:true
      AcItem.CompanyCodeCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AcItem.AmountInCompanyCodeCurrency,
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      //@Semantics.currencyCode:true
      AcItem.GlobalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      AcItem.AmountInGlobalCurrency,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      //@Semantics.unitOfMeasure:true
      AcItem.BaseUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      AcItem.Quantity,
      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      //@Semantics.unitOfMeasure:true
      AcItem.CostSourceUnit,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FundHierarchy'
      cast( AcItem.Fund as fmis_hryid_fund )                                                                        as FundHierarchy,
      _FundHierarchy,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantHierarchy'
      cast (AcItem.GrantID as gm_hryid_grant)                                                                       as GrantHierarchy,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _GrantHierarchy,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FunctionalAreaHierarchy'
      cast( AcItem.FunctionalArea as fis_hryid_functionalarea_42)                                                   as FunctionalAreaHierarchy,
      _FunctionalAreaHierarchy,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BudgetAccountInChtAcctsHier'
      cast (PubSecBudgetAccount as psm_hryid_budgetaccount  )                                                       as BudgetAccountHierarchy,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _BudgetAccountInChtAcctsHier,

      // Define PSM specific amount fields to transaction currency
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
             AcItem.IsCommitment = 'X' then
         cast( AcItem.AmountInTransactionCurrency as psm_amt_expn_cmtmt_trans_curr )
        else
          cast( '0' as psm_amt_expn_cmtmt_trans_curr )
      end                                                                                                           as PubSecExpnCmtmtAmtInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
             AcItem.IsCommitment <> 'X' then
          cast( AcItem.AmountInTransactionCurrency as psm_amt_expn_actl_trans_curr )
        else
          cast( '0' as psm_amt_expn_actl_trans_curr )
      end                                                                                                           as PubSecExpnActlAmtInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
             AcItem.IsCommitment = 'X' then
         cast( AcItem.AmountInTransactionCurrency as psm_amt_revn_cmtmt_trans_curr )
        else
          cast( '0' as psm_amt_revn_cmtmt_trans_curr )
      end                                                                                                           as PubSecRevnCmtmtAmtInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
             AcItem.IsCommitment <> 'X' then
          cast( AcItem.AmountInTransactionCurrency as psm_amt_revn_actl_trans_curr )
        else
          cast( '0' as psm_amt_revn_actl_trans_curr )
      end                                                                                                           as PubSecRevnActlAmtInTransCrcy,

      // Define PSM specific amount fields to company code currency
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
             AcItem.IsCommitment = 'X' then
          cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_expn_cmtmt_cc_curr )
        else
          cast( '0' as psm_amt_expn_cmtmt_cc_curr )
      end                                                                                                           as PubSecExpnCmtmtAmtInCoCodeCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
             AcItem.IsCommitment <> 'X' then
          cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_expn_actl_cc_curr )
        else
          cast( '0' as psm_amt_expn_actl_cc_curr )
      end                                                                                                           as PubSecExpnActlAmtInCoCodeCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
             AcItem.IsCommitment = 'X' then
          cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_revn_cmtmt_cc_curr )
        else
          cast( '0' as psm_amt_revn_cmtmt_cc_curr )
      end                                                                                                           as PubSecRevnCmtmtAmtInCoCodeCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
             AcItem.IsCommitment <> 'X' then
          cast( AcItem.AmountInCompanyCodeCurrency as psm_amt_revn_actl_cc_curr )
        else
          cast( '0' as psm_amt_revn_actl_cc_curr )
      end                                                                                                           as PubSecRevnActlAmtInCoCodeCrcy,

      // Define PSM specific amount fields to Global currency
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
             AcItem.IsCommitment = 'X' then
          cast( AcItem.AmountInGlobalCurrency as psm_amt_expn_cmtmt_grp_curr )
        else
          cast( '0' as psm_amt_expn_cmtmt_grp_curr )
      end                                                                                                           as PubSecExpnCmtmtAmtInGlobalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'E' and
             AcItem.IsCommitment <> 'X' then
          cast( AcItem.AmountInGlobalCurrency as psm_amt_expn_actl_grp_curr )
        else
          cast( '0' as psm_amt_expn_actl_grp_curr )
      end                                                                                                           as PubSecExpnActlAmtInGlobalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
             AcItem.IsCommitment = 'X' then
          cast( AcItem.AmountInGlobalCurrency as psm_amt_revn_cmtmt_grp_curr )
        else
          cast( '0' as psm_amt_revn_cmtmt_grp_curr )
      end                                                                                                           as PubSecRevnCmtmtAmtInGlobalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      case
        when _PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode = 'R' and
             AcItem.IsCommitment <> 'X' then
          cast( AcItem.AmountInGlobalCurrency as psm_amt_revn_actl_grp_curr )
        else
          cast( '0' as psm_amt_revn_actl_grp_curr )
      end                                                                                                           as PubSecRevnActlAmtInGlobalCrcy,

      // Mandatory field for G/L in AC
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      AcItem.DebitCreditCode,
      //MS: Marked as obsolete @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
      @Semantics.fiscal.period: true
      AcItem.FiscalPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      AcItem.FiscalYearVariant,
      @ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant'
      //MS: Marked as error
      @Semantics.fiscal.yearPeriod: true
      AcItem.FiscalYearPeriod,
      AcItem.PostingDate,
      AcItem.DocumentDate,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AcItem.AccountingDocumentType,
      AcItem.AccountingDocumentItem,
      AcItem.AssignmentReference,
      @ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
      AcItem.AccountingDocumentCategory,
      @ObjectModel.foreignKey.association: '_PostingKey'
      AcItem.PostingKey,
      AcItem.TransactionTypeDetermination,
      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      AcItem.SubLedgerAcctLineItemType,
      AcItem.AccountingDocCreatedByUser,
      AcItem.LastChangeDateTime,
      AcItem.CreationDateTime,
      AcItem.CreationDate,
      @ObjectModel.foreignKey.association: '_EliminationProfitCenter'
      AcItem.EliminationProfitCenter,
      AcItem.OriginObjectType,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      AcItem.GLAccountType,
      @ObjectModel.foreignKey.association: '_AlternativeGLAccount'
      AcItem.AlternativeGLAccount,
      @ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
      AcItem.CountryChartOfAccounts,
      AcItem.InvoiceReference,
      AcItem.InvoiceReferenceFiscalYear,
      AcItem.FollowOnDocumentType,

      // Fields of subledgers for universal journal
      AcItem.InvoiceItemReference,
      AcItem.ReferencePurchaseOrderCategory,
      AcItem.PurchasingDocument,
      AcItem.PurchasingDocumentItem,
      AcItem.AccountAssignmentNumber,
      @Semantics.text: true
      AcItem.DocumentItemText,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      AcItem.SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      AcItem.SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_Product'
      AcItem.Product,
      @ObjectModel.foreignKey.association: '_Plant'
      AcItem.Plant,
      @ObjectModel.foreignKey.association: '_Supplier'
      AcItem.Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      AcItem.Customer,
      AcItem.ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_ConditionContract'
      AcItem.ConditionContract,

      // Fields of FI subledger in universal journal
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      AcItem.FinancialAccountType,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      AcItem.SpecialGLCode,
      AcItem.TaxCode,
      AcItem.IsOpenItemManaged,
      AcItem.ClearingDate,
      @ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
      AcItem.ClearingAccountingDocument,
      AcItem.ClearingDocFiscalYear,
      AcItem._GLAccountInChartOfAccounts.IsBalanceSheetAccount,

      // Fields for Asset Accounting in universal journal
      AcItem.AssetDepreciationArea,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      AcItem.MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
      AcItem.FixedAsset,
      AcItem.AssetValueDate,
      AcItem.AssetTransactionType,
      AcItem.DepreciationFiscalPeriod,
      @ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'
      AcItem.GroupMasterFixedAsset,
      @ObjectModel.foreignKey.association: '_GroupFixedAsset'
      AcItem.GroupFixedAsset,
      AcItem.AssetClass,

      // Fields for  Ledger in universal journal
      AcItem.CostEstimate,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'InvtrySpecialStockValnType_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      AcItem.InventorySpecialStockValnType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_InventorySpclStockValnType'
      AcItem.InvtrySpecialStockValnType_2,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      AcItem.InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'
      AcItem.InventorySpclStkSalesDocument,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
      AcItem.InventorySpclStkSalesDocItm,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockSupplier'
      AcItem.InventorySpecialStockSupplier,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      AcItem.InventoryValuationType,
      AcItem.ValuationArea,

      // Fields for Central Finance
      AcItem.SenderGLAccount,
      AcItem.SenderAccountAssignment,
      AcItem.SenderAccountAssignmentType,

      // Fields for CO
      AcItem.CostOriginGroup,
      @ObjectModel.foreignKey.association: '_OriginSenderObject'
      AcItem.OriginSenderObject,
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      AcItem.ControllingDebitCreditCode,
      AcItem.ControllingObjectDebitType,
      AcItem.QuantityIsIncomplete,
      @ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
      AcItem.OffsettingAccount,
      @ObjectModel.foreignKey.association: '_OffsettingAccountType'
      AcItem.OffsettingAccountType,
      @ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
      AcItem.OffsettingChartOfAccounts,
      AcItem.LineItemIsCompleted,
      AcItem.PersonnelNumber,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      AcItem.ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      AcItem.PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerControllingObjectClass'
      AcItem.PartnerControllingObjectClass,
      @ObjectModel.foreignKey.association: '_OriginCostCenter'
      AcItem.OriginCostCenter,
      @ObjectModel.foreignKey.association: '_OriginProfitCenter'
      AcItem.OriginProfitCenter,
      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      AcItem.OriginCostCtrActivityType,
      AcItem.AccountAssignment,
      AcItem.AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      AcItem.CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_Order'
      AcItem.OrderID,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      AcItem.OrderCategory,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      AcItem.WBSElementInternalID,
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_WBSElementByExternalID',
                      element: 'WBSElementExternalID' }
         }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      cast( AcItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv preserving type )                as WBSElementExternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      AcItem.PartnerWBSElementInternalID,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_WBSElementByExternalID',
                     element: 'WBSElementExternalID' }
        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      cast( AcItem._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv preserving type ) as PartnerWBSElementExternalID,
      //MS      @Analytics.internalName: #LOCAL
      //MS      @ObjectModel.foreignKey.association: '_ProjectBasicData'
      AcItem.ProjectInternalID,
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_ProjectByExternalID',
                      element: 'ProjectExternalID' }
         }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      cast( _ProjectBasicData.ProjectExternalID as fis_projectext_no_conv preserving type )                         as ProjectExternalID,
      //MS      @Analytics.internalName: #LOCAL
      //MS      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      AcItem.PartnerProjectInternalID,
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_ProjectByExternalID',
                      element: 'ProjectExternalID' }
         }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      cast( _PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv preserving type )             as PartnerProjectExternalID,

      @ObjectModel.foreignKey.association: '_OperatingConcern'
      AcItem.OperatingConcern,
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      AcItem.BusinessProcess,
      AcItem.CostObject,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      AcItem.CostAnalysisResource,
      @ObjectModel.foreignKey.association: '_WorkPackage'
      AcItem.WorkPackage,
      @ObjectModel.foreignKey.association: '_WorkPackageWorkItem'
      AcItem.WorkItem,
      AcItem.CustomerServiceNotification,
      //      VH-Info:
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
      //                     element: 'ServiceDocumentType' }
      //        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      AcItem.ServiceDocumentType,
      //      VH-Info:
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_AcctgServiceDocumentVH',
      //                     element: 'ServiceDocument' }
      //        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocument'
      AcItem.ServiceDocument,
      //      VH-Info:
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_AcctgServiceDocumentItemVH',
      //                     element: 'ServiceDocumentItem' }
      //        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      AcItem.ServiceDocumentItem,
      //      VH-Info:
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
      //                     element: 'ServiceDocumentType' }
      //        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerServiceDocumentType'
      AcItem.PartnerServiceDocumentType,
      //      VH-Info:
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_AcctgServiceDocumentVH',
      //                     element: 'ServiceDocument' }
      //        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerServiceDocument'
      AcItem.PartnerServiceDocument,
      //      VH-Info:
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_AcctgServiceDocumentItemVH',
      //                     element: 'ServiceDocumentItem' }
      //        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerServiceDocumentItem'
      AcItem.PartnerServiceDocumentItem,
      //      VH-Info:
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_ServiceContractTypeStdVH',
      //                     element: 'ServiceDocumentType' }
      //        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractType'
      AcItem.ServiceContractType,
      //      VH-Info:
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_AcctgServiceContractVH',
      //                     element: 'ServiceContract' }
      //        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContract'
      AcItem.ServiceContract,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractItem'
      AcItem.ServiceContractItem,
      AcItem.PartnerAccountAssignment,
      AcItem.PartnerAccountAssignmentType,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      AcItem.PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'PartnerOrder_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'PartnerOrder_2'
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      PartnerOrder,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      PartnerOrder_2,
      @ObjectModel.foreignKey.association: '_PartnerOrderCategory'
      AcItem.PartnerOrderCategory,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocument'
      AcItem.PartnerSalesDocument,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocumentItem'
      AcItem.PartnerSalesDocumentItem,
      @ObjectModel.foreignKey.association: '_PartnerBusinessProcess'
      AcItem.PartnerBusinessProcess,
      AcItem.PartnerCostObject,

      // Fields for CO-PA
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      AcItem.BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      AcItem.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      AcItem.DistributionChannel,
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

      // Fields for Public Sector
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FinMgmtAreaStdVH',
                     element: 'FinancialManagementArea' }
        }]
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      AcItem.FinancialManagementArea,
      //      VH-Info:
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_FundStdVH',
      //                     element: 'Fund' },
      //          additionalBinding: [{ localElement: 'FinancialManagementArea',
      //                                element: 'FinancialManagementArea' }]
      //        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Fund'
      AcItem.Fund,
      _Fund._Text[1:Language = $session.system_language].FundName                                                   as FundName,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
      AcItem.GrantID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Sponsor'
      AcItem._Grant.GranteeMgmtSponsor,
      //      VH-Info:
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_BudgetPeriodStdVH',
      //                     element: 'BudgetPeriod' }
      //        }]
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      AcItem.BudgetPeriod,
      //      VH-Info:
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_FundStdVH',
      //                     element: 'Fund' },
      //          additionalBinding: [{ localElement: 'FinancialManagementArea',
      //                                element: 'FinancialManagementArea' }]
      //        }]
      @ObjectModel.foreignKey.association: '_PartnerFund'
      AcItem.PartnerFund,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerGrant'
      AcItem.PartnerGrant,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
      AcItem.PartnerBudgetPeriod,
      @Consumption.hidden: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      AcItem.FundsCenter,
      @Consumption.hidden: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      AcItem.FundedProgram,

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
      //MS: association worked only partially but did not lead to Runtime error: @ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
      AcItem.PubSecBudgetAccount,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
      AcItem.PubSecBudgetAccountCoCode,
      @Analytics.internalName: #LOCAL
      AcItem.PubSecBudgetCnsmpnDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnFsclPeriod'
      //MS: Marked as error  @Semantics.fiscal.period: true
      AcItem.PubSecBudgetCnsmpnFsclPeriod,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnFsclYear'
      //MS: Marked as error  @Semantics.fiscal.year: true
      AcItem.PubSecBudgetCnsmpnFsclYear,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnType'
      AcItem.PubSecBudgetCnsmpnType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnAmtType'
      AcItem.PubSecBudgetCnsmpnAmtType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnTypeGroup'
      AcItem._PubSecBudgetCnsmpnType.PubSecBudgetCnsmpnTypeGroup                                                    as PubSecBudgetCnsmpnTypeGroup,
      @Analytics.internalName: #LOCAL
      AcItem.PubSecBudgetIsRelevant,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBdgtAcctRevnExpnCode'
      AcItem._PubSecBudgetAccount.PubSecBdgtAcctRevnExpnCode                                                        as PubSecBdgtAcctRevnExpnCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FundType'
      AcItem._Fund.FundType                                                                                         as FundType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GranteeMgmtFundType'
      AcItem._Fund._FundType.GranteeMgmtFundType                                                                    as GranteeMgmtFundType,

      // Specific grantee management fields
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredClass'
      AcItem.SponsoredClass,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredProgram'
      AcItem.SponsoredProgram,
      @Analytics.internalName: #LOCAL
      AcItem.GteeMBudgetValidityNumber,
      // End PSM_S4C technical fields

      // Original documents for semantic navigation
      @Analytics.internalName: #LOCAL
      cast(
        case
          when AcItem.SourceReferenceDocumentType = 'PORD' and
               AcItem.SourceLedger = '0E'
            then AcItem.SourceReferenceDocument
          when AcItem.SourceLedger = '0L' and
               AcItem.PurchasingDocument is not initial
            then AcItem.PurchasingDocument
          else ''
        end as vdm_purchaseorder preserving type )                                                                  as PurchaseOrder,

      @Analytics.internalName: #LOCAL
      cast(
        case
          when AcItem.SourceReferenceDocumentType = 'PREQ'
            then AcItem.SourceReferenceDocument
          else ''
        end as vdm_purchaserequisition preserving type )                                                            as PurchaseRequisition,

      @Analytics.internalName: #LOCAL
      cast(
        case
          when AcItem.SourceReferenceDocumentType = 'FMRES'
            then AcItem.SourceReferenceDocument
          else ''
        end as fmis_earmarkedfundsdoc preserving type )                                                             as EarmarkedFundsDocument,

      // Removed fields for Joint Venture, Real estate, Logistics, Plant Maintenance

      // New fields
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AcItem.DebitAmountInCoCodeCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AcItem.CreditAmountInCoCodeCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AcItem.DebitAmountInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AcItem.CreditAmountInTransCrcy,
      AcItem.IsStatisticalOrder,
      AcItem.IsStatisticalCostCenter,
      AcItem.IsStatisticalSalesDocument,
      AcItem.WBSIsStatisticalWBSElement,
      AcItem.CalendarYear,
      @ObjectModel.foreignKey.association: '_CalendarQuarter'
      AcItem.CalendarQuarter,
      AcItem.CalendarYearQuarter,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
      AcItem.CalendarMonth,
      @ObjectModel.foreignKey.association: '_CalendarYearMonth'
      AcItem.CalendarYearMonth,
      AcItem.CalendarWeek,
      AcItem.CalendarYearWeek,
      AcItem.GLAccountAuthorizationGroup,
      AcItem.SupplierBasicAuthorizationGrp,
      AcItem.CustomerBasicAuthorizationGrp,
      AcItem.AcctgDocTypeAuthorizationGroup,
      AcItem.OrderType,
      AcItem.SalesOrderType,

      // Associations
      _CalendarMonth,
      _CalendarQuarter,
      _CalendarYearMonth,
      AcItem._CashLedgerAccount,
      AcItem._CashLedgerCompanyCode,
      _BudgetAccountInChtAccts, //MS: Add association including hierarchy
      AcItem._PubSecBudgetAccount,
      _PubSecBdgtAcctRevnExpnCode,
      AcItem._PubSecBudgetAccountCoCode,
      AcItem._PubSecBudgetCnsmpnFsclYear                                                                            as _PubSecBdgtCnsmpnFsclYear,
      AcItem._PubSecBudgetCnsmpnFsclPeriod                                                                          as _PubSecBdgtCnsmpnFsclPeriod,
      AcItem._PubSecBudgetCnsmpnType                                                                                as _PubSecBdgtCnsmpnType,
      AcItem._PubSecBudgetCnsmpnType._PubSecBudgetCnsmpnTypeGroup                                                   as _PubSecBudgetCnsmpnTypeGroup,
      AcItem._PubSecBudgetCnsmpnAmtType                                                                             as _PubSecBdgtCnsmpnAmtType,
      AcItem._PubSecBudgetCnsmpnDate,
      AcItem._AccountingDocumentCategory,
      AcItem._AccountingDocumentType,
      AcItem._AccountingDocumentTypeText,
      AcItem._AlternativeGLAccount,
      AcItem._AlternativeGLAccountText,
      AcItem._AssetTransactionType,
      AcItem._BaseUnit,
      AcItem._BillingDocumentType,
      AcItem._BillToParty,
      AcItem._BudgetPeriod,
      AcItem._BudgetPeriodText,
      AcItem._BusinessArea,
      AcItem._BusinessAreaText,
      AcItem._BusinessProcess,
      AcItem._BusinessProcessText,
      AcItem._BusinessTransactionType,
      AcItem._BusinessTransactionTypeText,
      AcItem._CalendarDate,
      AcItem._ChartOfAccounts,
      AcItem._ChartOfAccountsText,
      AcItem._ClearingAccountingDocument,
      AcItem._CompanyCode,
      AcItem._CompanyCodeCurrency,
      AcItem._CompanyCodeText,
      AcItem._ConditionContract,
      AcItem._ControllingArea,
      AcItem._ControllingAreaText,
      AcItem._ControllingDebitCreditCode,
      AcItem._ControllingObjectClass,
      AcItem._CostAnalysisResource,
      AcItem._CostAnalysisResourceText,
      AcItem._CostCenter,
      AcItem._CostCenterText,
      AcItem._CostCtrActivityType,
      AcItem._CostOriginGroup,
      AcItem._CostSourceUnit,
      AcItem._CountryChartOfAccounts,
      AcItem._CountryChartOfAccountsText,
      AcItem._CurrentCostCenter,
      AcItem._CurrentProfitCenter,
      AcItem._Customer,
      AcItem._CustomerGroup,
      AcItem._CustomerSupplierCountry,
      AcItem._CustomerText,
      AcItem._DebitCreditCode,
      AcItem._DebitCreditCodeText,
      AcItem._DistributionChannel,
      AcItem._EliminationProfitCenter,
      AcItem._Employment,
      AcItem._FinancialAccountType,
      AcItem._FinancialAccountTypeText,
      AcItem._FinancialManagementArea,
      AcItem._FinancialManagementAreaText,
      AcItem._FinancialTransactionType,
      AcItem._FiscalCalendarDate,
      AcItem._FiscalPeriodForVariant,
      AcItem._FiscalYear,
      AcItem._FiscalYearPeriodForVariant,
      AcItem._FiscalYearVariant,
      AcItem._FixedAsset,
      AcItem._FixedAssetText,
      AcItem._FunctionalArea,
      AcItem._FunctionalAreaText,
      _Fund,
      _FundType,
      _GranteeMgmtFundType,
      @Consumption.hidden: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      AcItem._FundsCenter,
      AcItem._FundText,
      _Grant,
      AcItem._Grant._Sponsor,
      AcItem._SponsoredClass,
      AcItem._SponsoredProgram,
      _PartnerGrant,
      AcItem._GLAccountInChartOfAccounts,
      AcItem._GLAccountInCompanyCode,
      AcItem._GLAccountTxt,
      AcItem._GLAccountType,
      AcItem._GLAcctInChartOfAccountsText,
      AcItem._GlobalCurrency,
      AcItem._GroupFixedAsset,
      AcItem._GroupFixedAssetText,
      AcItem._GroupMasterFixedAsset,
      AcItem._GroupMasterFixedAssetText,
      AcItem._InternalOrder,
      AcItem._InventorySpclStkSalesDocItm,
      AcItem._InventorySpclStkSalesDocument,
      AcItem._InventorySpecialStockSupplier,
      AcItem._InventorySpecialStockType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InventorySpclStockValnType'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_InventorySpclStockValnType'
      AcItem._InventorySpecialStockValnType,
      AcItem._InventorySpclStockValnType,
      AcItem._InventoryValuationType,
      AcItem._InvtrySpclStockSupplierText,
      AcItem._JournalEntry,
      AcItem._Ledger,
      AcItem._LedgerFiscalYearForVariant,
      AcItem._LedgerText,
      AcItem._MaintenanceOrder,
      AcItem._MasterFixedAsset,
      AcItem._MasterFixedAssetText,
      AcItem._OffsettingAccount,
      AcItem._OffsettingAccountText,
      AcItem._OffsettingAccountType,
      AcItem._OffsettingAccountTypeText,
      AcItem._OffsettingAccountWithBP,
      AcItem._OffsettingChartOfAccounts,
      AcItem._OffsettingChartOfAccountsText,
      AcItem._OperatingConcern,
      AcItem._OperatingConcernText,
      AcItem._Order,
      AcItem._OrderCategory,
      AcItem._OriginCostCenter,
      AcItem._OriginCostCtrActivityType,
      AcItem._OriginProfitCenter,
      AcItem._OriginSenderObject,
      AcItem._PartnerBudgetPeriod,
      AcItem._PartnerBusinessArea,
      AcItem._PartnerBusinessAreaText,
      AcItem._PartnerBusinessProcess,
      AcItem._PartnerBusinessProcessText,
      AcItem._PartnerCompany,
      AcItem._PartnerCompanyCode,
      AcItem._PartnerCompanyCodeText,
      AcItem._PartnerControllingObjectClass,
      AcItem._PartnerCostCenter,
      AcItem._PartnerCostCtrActivityType,
      AcItem._PartnerFunctionalArea,
      AcItem._PartnerFund,
      AcItem._PartnerFundText,
      AcItem._PartnerOrder,
      AcItem._PartnerOrder_2,
      AcItem._PartnerOrderCategory,
      AcItem._PartnerOrderText,
      AcItem._PartnerProfitCenter,
      AcItem._PartnerProjectBasicData,
      @UI.hidden: true
      AcItem._PartnerProjectBasicDataText,
      _PartnerProjectExternalID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerProjectBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerProjectBasicData'
      AcItem._PartnerProjectInternalID,
      AcItem._PartnerSalesDocument,
      AcItem._PartnerSalesDocumentItem,
      AcItem._PartnerSegment,
      AcItem._PartnerSegmentText,
      AcItem._PartnerServiceDocument,
      AcItem._PartnerServiceDocumentItem,
      AcItem._PartnerServiceDocumentType,
      AcItem._Plant,
      AcItem._PostingKey,
      AcItem._PredecessorReferenceDocType,
      AcItem._Product,
      AcItem._ProductText,
      AcItem._ProfitCenter,
      @UI.hidden: true
      AcItem._ProfitCenterText,
      AcItem._ProjectBasicData,
      @UI.hidden: true
      AcItem._ProjectBasicDataText,
      _ProjectExternalID,
      @UI.hidden: true
      _ProjectExternalIDText,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ProjectBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectBasicData'
      AcItem._ProjectInternalID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_ProjectBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectBasicDataText'
      @UI.hidden: true
      AcItem._ProjectInternalIDText,
      AcItem._PurchasingDocument,
      AcItem._PurchasingDocumentItem,
      AcItem._ReferenceDocumentType,
      AcItem._SalesDistrict,
      AcItem._SalesDocument,
      AcItem._SalesDocumentItem,
      AcItem._SalesOrganization,
      AcItem._Segment,
      AcItem._SegmentText,
      AcItem._SemTagGLAccount,
      AcItem._ServiceContract,
      AcItem._ServiceContractItem,
      AcItem._ServiceContractType,
      AcItem._ServiceDocument,
      AcItem._ServiceDocumentItem,
      AcItem._ServiceDocumentType,
      AcItem._ShipToParty,
      AcItem._SoldProduct,
      AcItem._SoldProductText,
      AcItem._SourceLedger,
      AcItem._SourceLedgerText,
      _SourceReferenceDocumentType,
      AcItem._SpecialGLCode,
      AcItem._SubLedgerAccLineItemType,
      AcItem._Supplier,
      AcItem._SupplierText,
      AcItem._TaxCode,
      AcItem._TransactionCurrency,
      AcItem._WBSElementBasicData,
      @UI.hidden: true
      AcItem._WBSElementBasicDataText,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_WBSElementBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData'
      AcItem._WBSElementInternalID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_WBSElementBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicDataText'
      @UI.hidden: true
      AcItem._WBSElementInternalIDText,
      _WBSElementExternalID,
      @UI.hidden: true
      _WBSElementExternalIDText,
      AcItem._PartnerWBSElementBasicData,
      _PartnerWBSElementExternalID,

      AcItem._WorkPackage,
      AcItem._WorkPackageWorkItem,
      
      @Analytics.association.toDocumentStorage: true
      _DocumentStore 
      
      // Select Commitment/Actuals specific from base and extension ledger
}
where
  (
    (
          AcItem.Ledger                                                 = '0L'
      and AcItem.SourceLedger                                           = '0L'
    )
    or(
          AcItem.Ledger                                                 = '0E'
      and AcItem.SourceLedger                                           = '0E'
    )
  )
  and(
         ( AcItem._PubSecBudgetCnsmpnType.PubSecBdgtCnsmpnTypeIsBdgtRlvt = 'X' )
          
          or (
               AcItem._PubSecBudgetCnsmpnType.PubSecBdgtCnsmpnTypeIsBdgtRlvt = ''
           and AcItem._PubSecBudgetCnsmpnType.PubSecBudgetCnsmpnType = '83'
          )
  )
```
