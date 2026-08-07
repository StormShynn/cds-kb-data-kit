---
name: I_GLACCOUNTLINEITEM
description: "GL AccountLINEITEM"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - gl-account
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_GLACCOUNTLINEITEM

**GL AccountLINEITEM**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |
| `LedgerGLLineItem` | ✓ | |  |  |  |  |
| `Ledger` | ✓ | |  |  |  |  |
| `LedgerFiscalYear` |  | |  |  |  |  |
| `GLRecordType` |  | |  |  |  |  |
| `JrnlEntrAltvFYConsecutiveID` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `FinancialTransactionType` |  | |  |  |  |  |
| `GLBusinessTransactionType` |  | |  |  |  |  |
| `BusinessTransactionCategory` |  | |  |  |  |  |
| `BusinessTransactionType` |  | |  |  |  |  |
| `FinancialClosingStep` |  | |  |  |  |  |
| `ControllingBusTransacType` |  | |  |  |  |  |
| `ReferenceDocumentType` |  | |  |  |  |  |
| `LogicalSystem` |  | |  |  |  |  |
| `ReferenceDocumentContext` |  | |  |  |  |  |
| `ReferenceDocument` |  | |  |  |  |  |
| `ReferenceDocumentItem` |  | |  |  |  |  |
| `ReferenceDocumentItemGroup` |  | |  |  |  |  |
| `TransactionSubitem` |  | |  |  |  |  |
| `OffsettingLedgerGLLineItem` |  | |  |  |  |  |
| `IsReversal` |  | |  |  |  |  |
| `IsReversed` |  | |  |  |  |  |
| `ReversalReferenceDocumentCntxt` |  | |  |  |  |  |
| `ReversalReferenceDocument` |  | |  |  |  |  |
| `ReversalTransactionSubitem` |  | |  |  |  |  |
| `IsSettlement` |  | |  |  |  |  |
| `IsSettled` |  | |  |  |  |  |
| `PredecessorReferenceDocType` |  | |  |  |  |  |
| `PredecessorReferenceDocCntxt` |  | |  |  |  |  |
| `PredecessorReferenceDocument` |  | |  |  |  |  |
| `PredecessorReferenceDocItem` |  | |  |  |  |  |
| `PrdcssrJournalEntryCompanyCode` |  | |  |  |  |  |
| `PrdcssrJournalEntryFiscalYear` |  | |  |  |  |  |
| `PredecessorJournalEntry` |  | |  |  |  |  |
| `PredecessorJournalEntryItem` |  | |  |  |  |  |
| `SourceReferenceDocumentType` |  | |  |  |  |  |
| `SourceLogicalSystem` |  | |  |  |  |  |
| `SourceReferenceDocumentCntxt` |  | |  |  |  |  |
| `SourceReferenceDocument` |  | |  |  |  |  |
| `SourceReferenceDocumentItem` |  | |  |  |  |  |
| `SourceReferenceDocSubitem` |  | |  |  |  |  |
| `IsCommitment` |  | |  |  |  |  |
| `JrnlEntryItemObsoleteReason` |  | |  |  |  |  |
| `JrnlPeriodEndClosingRunLogUUID` |  | |  |  |  |  |
| `OrganizationalChange` |  | |  |  |  |  |
| `AccountingNotificationUUID` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
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
| `BalanceTransactionCurrency` |  | |  |  |  |  |
| `AmountInBalanceTransacCrcy` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `AmountInTransactionCurrency` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |  |  |
| `GlobalCurrency` |  | |  |  |  |  |
| `AmountInGlobalCurrency` |  | |  |  |  |  |
| `FunctionalCurrency` |  | |  |  |  |  |
| `AmountInFunctionalCurrency` |  | |  |  |  |  |
| `FreeDefinedCurrency1` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency1` |  | |  |  |  |  |
| `FreeDefinedCurrency2` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency2` |  | |  |  |  |  |
| `FreeDefinedCurrency3` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency3` |  | |  |  |  |  |
| `FreeDefinedCurrency4` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency4` |  | |  |  |  |  |
| `FreeDefinedCurrency5` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency5` |  | |  |  |  |  |
| `FreeDefinedCurrency6` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency6` |  | |  |  |  |  |
| `FreeDefinedCurrency7` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency7` |  | |  |  |  |  |
| `FreeDefinedCurrency8` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency8` |  | |  |  |  |  |
| `FixedAmountInGlobalCrcy` |  | |  |  |  |  |
| `GrpValnFixedAmtInGlobCrcy` |  | |  |  |  |  |
| `PrftCtrValnFxdAmtInGlobCrcy` |  | |  |  |  |  |
| `TotalPriceVarcInGlobalCrcy` |  | |  |  |  |  |
| `GrpValnTotPrcVarcInGlobCrcy` |  | |  |  |  |  |
| `PrftCtrValnTotPrcVarcInGlbCrcy` |  | |  |  |  |  |
| `FixedPriceVarcInGlobalCrcy` |  | |  |  |  |  |
| `GrpValnFixedPrcVarcInGlobCrcy` |  | |  |  |  |  |
| `PrftCtrValnFxdPrcVarcInGlbCrcy` |  | |  |  |  |  |
| `FixedAmountInCoCodeCrcy` |  | |  |  |  |  |
| `FixedAmountInTransCrcy` |  | |  |  |  |  |
| `ControllingObjectCurrency` |  | |  |  |  |  |
| `AmountInObjectCurrency` |  | |  |  |  |  |
| `GrantCurrency` |  | |  |  |  |  |
| `AmountInGrantCurrency` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `FixedQuantity` |  | |  |  |  |  |
| `CostSourceUnit` |  | |  |  |  |  |
| `ValuationQuantity` |  | |  |  |  |  |
| `ValuationFixedQuantity` |  | |  |  |  |  |
| `ReferenceQuantityUnit` |  | |  |  |  |  |
| `ReferenceQuantity` |  | |  |  |  |  |
| `AdditionalQuantity1Unit` |  | |  |  |  |  |
| `AdditionalQuantity1` |  | |  |  |  |  |
| `AdditionalQuantity2Unit` |  | |  |  |  |  |
| `AdditionalQuantity2` |  | |  |  |  |  |
| `AdditionalQuantity3Unit` |  | |  |  |  |  |
| `AdditionalQuantity3` |  | |  |  |  |  |
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
| `JournalEntryItemCategory` |  | |  |  |  |  |
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
| `ItemIsSplit` |  | |  |  |  |  |
| `ConsolidationUnit` |  | |  |  |  |  |
| `PartnerConsolidationUnit` |  | |  |  |  |  |
| `Company` |  | |  |  |  |  |
| `ConsolidationChartOfAccounts` |  | |  |  |  |  |
| `CnsldtnFinancialStatementItem` |  | |  |  |  |  |
| `CnsldtnSubitemCategory` |  | |  |  |  |  |
| `CnsldtnSubitem` |  | |  |  |  |  |
| `InvoiceReference` |  | |  |  |  |  |
| `InvoiceReferenceFiscalYear` |  | |  |  |  |  |
| `FollowOnDocumentType` |  | |  |  |  |  |
| `InvoiceItemReference` |  | |  |  |  |  |
| `ReferencePurchaseOrderCategory` |  | |  |  |  |  |
| `PurchasingDocument` |  | |  |  |  |  |
| `PurchasingDocumentItem` |  | |  |  |  |  |
| `AccountAssignmentNumber` |  | |  |  |  |  |
| `DocumentItemText` |  | |  |  |  |  |
| `SalesOrder` |  | |  | `cast(I_GLAccountLineItemRawData.SalesDocument as vdm_sales_order preserving type )` |  |  |
| `SalesOrderItem` |  | |  | `cast(I_GLAccountLineItemRawData.SalesDocumentItem as sales_order_item preserving type )` |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `Material` |  | |  | `cast(I_GLAccountLineItemRawData.Product as matnr preserving type )` |  |  |
| `Product` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `ConditionContract` |  | |  |  |  |  |
| `ComponentBreakdown` |  | |  |  |  |  |
| `CompBreakdownScaleNumerator` |  | |  |  |  |  |
| `FinancialAccountType` |  | |  |  |  |  |
| `SpecialGLCode` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `TaxCountry` |  | |  |  |  |  |
| `HouseBank` |  | |  |  |  |  |
| `HouseBankAccount` |  | |  |  |  |  |
| `IsOpenItemManaged` |  | |  |  |  |  |
| `ClearingDate` |  | |  |  |  |  |
| `ClearingDocFiscalYear` |  | |  | `cast( I_GLAccountLineItemRawData.ClearingJournalEntryFiscalYear as fis_auggj_no_conv_depre preserving type )` |  |  |
| `ClearingAccountingDocument` |  | |  | `cast( I_GLAccountLineItemRawData.ClearingJournalEntry as fis_augbl_depre preserving type )` |  |  |
| `ClearingJournalEntryFiscalYear` |  | |  |  |  |  |
| `ClearingJournalEntry` |  | |  |  |  |  |
| `ValueDate` |  | |  |  |  |  |
| `GeneralLedgerAgingScope` |  | |  |  |  |  |
| `GeneralLedgerAgingIncrement` |  | |  |  |  |  |
| `AssetDepreciationArea` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `AssetValueDate` |  | |  |  |  |  |
| `AssetTransactionType` |  | |  |  |  |  |
| `AssetAcctTransClassfctn` |  | |  |  |  |  |
| `DepreciationFiscalPeriod` |  | |  |  |  |  |
| `GroupMasterFixedAsset` |  | |  |  |  |  |
| `GroupFixedAsset` |  | |  |  |  |  |
| `AssetClass` |  | |  |  |  |  |
| `PartnerMasterFixedAsset` |  | |  |  |  |  |
| `PartnerFixedAsset` |  | |  |  |  |  |
| `CostEstimate` |  | |  |  |  |  |
| `InventorySpecialStockValnType` |  | |  | `cast( I_GLAccountLineItemRawData.InventorySpecialStockValnType as fis_invtryspclstockvalntype_d preserving type )` |  |  |
| `InvtrySpecialStockValnType_2` |  | |  | `InventorySpecialStockValnType` |  |  |
| `IsSupplierStockValuation` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `InventorySpclStkSalesDocument` |  | |  |  |  |  |
| `InventorySpclStkSalesDocItm` |  | |  |  |  |  |
| `InvtrySpclStockWBSElmntIntID` |  | |  |  |  |  |
| `InventorySpclStockWBSElement` |  | |  | `cast( I_GLAccountLineItemRawData.InventorySpclStockWBSElement as fis_invspstock_wbs preserving type )` |  |  |
| `InventorySpecialStockSupplier` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `MaterialLedgerProcessType` |  | |  |  |  |  |
| `MaterialLedgerCategory` |  | |  |  |  |  |
| `SlsPriceAmountInCoCodeCrcy` |  | |  |  |  |  |
| `ProductPriceControl` |  | |  |  |  |  |
| `CurPlanProjSlsOrdValnStrategy` |  | |  |  |  |  |
| `SenderCompanyCode` |  | |  |  |  |  |
| `SenderGLAccount` |  | |  |  |  |  |
| `SenderAccountAssignment` |  | |  |  |  |  |
| `SenderAccountAssignmentType` |  | |  |  |  |  |
| `ControllingObject` |  | |  |  |  |  |
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
| `OriginProduct` |  | |  |  |  |  |
| `VarianceOriginGLAccount` |  | |  |  |  |  |
| `AccountAssignment` |  | |  |  |  |  |
| `AccountAssignmentType` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `PartnerWBSElementInternalID` |  | |  |  |  |  |
| `WBSElement` |  | |  | `cast( I_GLAccountLineItemRawData.WBSElement as fis_wbs preserving type )` |  |  |
| `ProjectInternalID` |  | |  |  |  |  |
| `PartnerProjectInternalID` |  | |  |  |  |  |
| `Project` |  | |  | `cast( I_GLAccountLineItemRawData.Project as fis_project preserving type )` |  |  |
| `OperatingConcern` |  | |  |  |  |  |
| `ProjectNetwork` |  | |  |  |  |  |
| `RelatedNetworkActivity` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `CostObject` |  | |  |  |  |  |
| `BillableControl` |  | |  |  |  |  |
| `CostAnalysisResource` |  | |  |  |  |  |
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
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `BusinessSolutionOrderItem` |  | |  |  |  |  |
| `ProviderContract` |  | |  |  |  |  |
| `ProviderContractItem` |  | |  |  |  |  |
| `RevenueAccountingContract` |  | |  |  |  |  |
| `PerformanceObligation` |  | |  |  |  |  |
| `TimeSheetOvertimeCategory` |  | |  |  |  |  |
| `PartnerAccountAssignment` |  | |  |  |  |  |
| `PartnerAccountAssignmentType` |  | |  |  |  |  |
| `WorkPackage` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `PartnerCostCtrActivityType` |  | |  |  |  |  |
| `PartnerOrder` |  | |  | `cast(I_GLAccountLineItemRawData.PartnerOrder as fis_par_aufnr_depre preserving type )` |  |  |
| `PartnerOrder_2` |  | |  | `cast(I_GLAccountLineItemRawData.PartnerOrder as fis_par_aufnr preserving type )` |  |  |
| `PartnerOrderCategory` |  | |  |  |  |  |
| `PartnerWBSElement` |  | |  | `cast( I_GLAccountLineItemRawData.PartnerWBSElement as fis_partner_wbs preserving type )` |  |  |
| `PartnerProject` |  | |  | `cast( I_GLAccountLineItemRawData.PartnerProject as fis_part_project preserving type )` |  |  |
| `PartnerSalesDocument` |  | |  |  |  |  |
| `PartnerSalesDocumentItem` |  | |  |  |  |  |
| `PartnerProjectNetwork` |  | |  |  |  |  |
| `PartnerProjectNetworkActivity` |  | |  |  |  |  |
| `PartnerBusinessProcess` |  | |  |  |  |  |
| `PartnerCostObject` |  | |  |  |  |  |
| `ControllingDocumentItem` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SoldMaterial` |  | |  | `cast(I_GLAccountLineItemRawData.SoldProduct as fis_sold_material preserving type )` |  |  |
| `SoldProduct` |  | |  |  |  |  |
| `MaterialGroup` |  | |  | `cast(I_GLAccountLineItemRawData.SoldProductGroup as fis_matkl_pa_depr preserving type )` |  |  |
| `SoldProductGroup` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `CustomerSupplierCountry` |  | |  |  |  |  |
| `CustomerSupplierIndustry` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `CustomerSupplierCorporateGroup` |  | |  |  |  |  |
| `CashLedgerCompanyCode` |  | |  |  |  |  |
| `CashLedgerAccount` |  | |  |  |  |  |
| `FinancialManagementArea` |  | |  |  |  |  |
| `CommitmentItem` |  | |  |  |  |  |
| `FundsCenter` |  | |  |  |  |  |
| `FundedProgram` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `BudgetPeriod` |  | |  |  |  |  |
| `PartnerFund` |  | |  |  |  |  |
| `PartnerGrant` |  | |  |  |  |  |
| `PartnerBudgetPeriod` |  | |  |  |  |  |
| `PubSecBudgetAccount` |  | |  |  |  |  |
| `PubSecBudgetAccountCoCode` |  | |  |  |  |  |
| `PubSecBudgetCnsmpnDate` |  | |  |  |  |  |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  |  |  |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  |  |  |
| `PubSecBudgetIsRelevant` |  | |  |  |  |  |
| `PubSecBudgetCnsmpnType` |  | |  |  |  |  |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  |  |  |
| `SponsoredProgram` |  | |  |  |  |  |
| `SponsoredClass` |  | |  |  |  |  |
| `GteeMBudgetValidityNumber` |  | |  |  |  |  |
| `EarmarkedFundsDocument` |  | |  |  |  |  |
| `EarmarkedFundsDocumentItem` |  | |  |  |  |  |
| `FinancialServicesProductGroup` |  | |  |  |  |  |
| `FinancialServicesBranch` |  | |  |  |  |  |
| `FinancialDataSource` |  | |  |  |  |  |
| `JointVenture` |  | |  |  |  |  |
| `JointVentureEquityGroup` |  | |  |  |  |  |
| `JointVentureCostRecoveryCode` |  | |  |  |  |  |
| `JointVenturePartner` |  | |  |  |  |  |
| `JointVentureBillingType` |  | |  |  |  |  |
| `JointVentureEquityType` |  | |  |  |  |  |
| `JointVentureProductionDate` |  | |  |  |  |  |
| `JointVentureBillingDate` |  | |  |  |  |  |
| `JointVentureOperationalDate` |  | |  |  |  |  |
| `CutbackRun` |  | |  |  |  |  |
| `JointVentureAccountingActivity` |  | |  |  |  |  |
| `PartnerVenture` |  | |  |  |  |  |
| `PartnerEquityGroup` |  | |  |  |  |  |
| `SenderCostRecoveryCode` |  | |  |  |  |  |
| `CutbackAccount` |  | |  |  |  |  |
| `CutbackCostObject` |  | |  |  |  |  |
| `REBusinessEntity` |  | |  |  |  |  |
| `RealEstateBuilding` |  | |  |  |  |  |
| `RealEstateProperty` |  | |  |  |  |  |
| `RERentalObject` |  | |  |  |  |  |
| `RealEstateContract` |  | |  |  |  |  |
| `REServiceChargeKey` |  | |  |  |  |  |
| `RESettlementUnitID` |  | |  |  |  |  |
| `SettlementReferenceDate` |  | |  |  |  |  |
| `REPartnerBusinessEntity` |  | |  |  |  |  |
| `RealEstatePartnerBuilding` |  | |  |  |  |  |
| `RealEstatePartnerProperty` |  | |  |  |  |  |
| `REPartnerRentalObject` |  | |  |  |  |  |
| `RealEstatePartnerContract` |  | |  |  |  |  |
| `REPartnerServiceChargeKey` |  | |  |  |  |  |
| `REPartnerSettlementUnitID` |  | |  |  |  |  |
| `PartnerSettlementReferenceDate` |  | |  |  |  |  |
| `AccrualObjectType` |  | |  |  |  |  |
| `AccrualObjectLogicalSystem` |  | |  |  |  |  |
| `AccrualObject` |  | |  |  |  |  |
| `AccrualSubobject` |  | |  |  |  |  |
| `AccrualItemType` |  | |  |  |  |  |
| `AccrualReferenceObject` |  | |  |  |  |  |
| `AccrualValueDate` |  | |  |  |  |  |
| `FinancialValuationObjectType` |  | |  |  |  |  |
| `FinancialValuationObject` |  | |  |  |  |  |
| `FinancialValuationSubobject` |  | |  |  |  |  |
| `NetDueDate` |  | |  |  |  |  |
| `CreditRiskClass` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `OrderOperation` |  | |  |  |  |  |
| `OrderItem` |  | |  |  |  |  |
| `PartnerOrderItem` |  | |  |  |  |  |
| `OrderSuboperation` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  |  |  |  |
| `Assembly` |  | |  |  |  |  |
| `MaintenanceActivityType` |  | |  |  |  |  |
| `MaintenanceOrderPlanningCode` |  | |  |  |  |  |
| `MaintPriorityType` |  | |  |  |  |  |
| `MaintPriority` |  | |  |  |  |  |
| `SuperiorOrder` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `MaintenanceOrderIsPlanned` |  | |  |  |  |  |
| `JrnlEntryItemMigrationSource` |  | |  |  |  |  |
| `DebitAmountInCoCodeCrcy` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInCompanyCodeCurrency as fis_dr_hsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_hsl preserving type) end` |  |  |
| `CreditAmountInCoCodeCrcy` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInCompanyCodeCurrency as fis_cr_hsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_hsl preserving type) end` |  |  |
| `DebitAmountInTransCrcy` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInTransactionCurrency as fis_dr_wsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_wsl preserving type) end` |  |  |
| `CreditAmountInTransCrcy` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInTransactionCurrency as fis_cr_wsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_wsl preserving type) end` |  |  |
| `DebitAmountInBalanceTransCrcy` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInBalanceTransacCrcy as fis_dr_tsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_tsl preserving type) end` |  |  |
| `CreditAmountInBalanceTransCrcy` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInBalanceTransacCrcy as fis_cr_tsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_tsl preserving type) end` |  |  |
| `DebitAmountInGlobalCrcy` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInGlobalCurrency as fis_dr_ksl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_ksl preserving type) end` |  |  |
| `CreditAmountInGlobalCrcy` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInGlobalCurrency as fis_cr_ksl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_ksl preserving type) end` |  |  |
| `DebitAmountInFunctionalCrcy` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInFunctionalCurrency as fis_dr_amt_funccrcy preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_amt_funccrcy preserving type) end` |  |  |
| `CreditAmountInFunctionalCrcy` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInFunctionalCurrency as fis_cr_amt_funccrcy preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_amt_funccrcy preserving type) end` |  |  |
| `DebitAmountInFreeDefinedCrcy1` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency1 as fis_dr_osl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_osl preserving type) end` |  |  |
| `CreditAmountInFreeDefinedCrcy1` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency1 as fis_cr_osl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_osl preserving type) end` |  |  |
| `DebitAmountInFreeDefinedCrcy2` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency2 as fis_dr_vsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_vsl preserving type) end` |  |  |
| `CreditAmountInFreeDefinedCrcy2` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency2 as fis_cr_vsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_vsl preserving type) end` |  |  |
| `DebitAmountInFreeDefinedCrcy3` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency3 as fis_dr_bsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_bsl preserving type) end` |  |  |
| `CreditAmountInFreeDefinedCrcy3` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency3 as fis_cr_bsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_bsl preserving type) end` |  |  |
| `DebitAmountInFreeDefinedCrcy4` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency4 as fis_dr_csl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_csl preserving type) end` |  |  |
| `CreditAmountInFreeDefinedCrcy4` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency4 as fis_cr_csl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_csl preserving type) end` |  |  |
| `DebitAmountInFreeDefinedCrcy5` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency5 as fis_dr_dsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_dsl preserving type) end` |  |  |
| `CreditAmountInFreeDefinedCrcy5` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency5 as fis_cr_dsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_dsl preserving type) end` |  |  |
| `DebitAmountInFreeDefinedCrcy6` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency6 as fis_dr_esl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_esl preserving type) end` |  |  |
| `CreditAmountInFreeDefinedCrcy6` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency6 as fis_cr_esl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_esl preserving type) end` |  |  |
| `DebitAmountInFreeDefinedCrcy7` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency7 as fis_dr_fsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_fsl preserving type) end` |  |  |
| `CreditAmountInFreeDefinedCrcy7` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency7 as fis_cr_fsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_fsl preserving type) end` |  |  |
| `DebitAmountInFreeDefinedCrcy8` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'S' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency8 as fis_dr_gsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_dr_gsl preserving type) end` |  |  |
| `CreditAmountInFreeDefinedCrcy8` |  | |  | `case I_GLAccountLineItemRawData.DebitCreditCode when 'H' then cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency8 as fis_cr_gsl preserving type) else cast( cast( '0' as abap.curr( 23,2)) as fis_cr_gsl preserving type) end` |  |  |
| `IsStatisticalOrder` |  | |  | `cast( ( case when ( I_GLAccountLineItemRawData.AccountAssignmentType != 'OR' and I_GLAccountLineItemRawData.AccountAssignmentType != 'OP' and I_GLAccountLineItemRawData.AccountAssignmentType != 'OV' ) and I_GLAccountLineItemRawData.OrderID != '' then 'X' else ' ' end ) as fins_xaufnr_stat preserving type )` |  |  |
| `IsStatisticalCostCenter` |  | |  | `cast( ( case when ( I_GLAccountLineItemRawData.AccountAssignmentType != 'KL' and I_GLAccountLineItemRawData.AccountAssignmentType != 'KS' ) and I_GLAccountLineItemRawData.CostCenter != '' then 'X' else ' ' end ) as fins_xkostl_stat preserving type )` |  |  |
| `IsStatisticalSalesDocument` |  | |  | `cast( ( case when I_GLAccountLineItemRawData.AccountAssignmentType != 'VB' and I_GLAccountLineItemRawData.SalesDocument != '' then 'X' else ' ' end ) as fis_xkdpos_stat preserving type )` |  |  |
| `WBSIsStatisticalWBSElement` |  | |  | `cast( ( case when ( I_GLAccountLineItemRawData.AccountAssignmentType != 'PR' ) and ( I_GLAccountLineItemRawData.WBSElementInternalID != '00000000' ) then 'X' else ' ' end ) as fins_xps_posid_stat preserving type )` |  |  |
| `CalendarYear` |  | |  |  |  |  |
| `CalendarQuarter` |  | |  |  |  |  |
| `CalendarYearQuarter` |  | |  | `YearQuarter` |  |  |
| `CalendarMonth` |  | |  |  |  |  |
| `CalendarYearMonth` |  | |  | `YearMonth` |  |  |
| `CalendarWeek` |  | |  |  |  |  |
| `CalendarYearWeek` |  | |  | `YearWeek` |  |  |
| `GLAccountAuthorizationGroup` |  | |  | `cast( '' as brgru)` |  |  |
| `SupplierBasicAuthorizationGrp` |  | |  | `cast( '' as brgru)` |  |  |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( '' as brgru)` |  |  |
| `AcctgDocTypeAuthorizationGroup` |  | |  | `cast( '' as brgru)` |  |  |
| `OrderType` |  | |  | `cast( '' as aufart)` |  |  |
| `SalesOrderType` |  | |  | `cast( '' as auart)` |  |  |
| `_JournalEntry` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CompanyCodeText` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_LedgerFiscalYear` | | ✓ | | | | |
| `_FiscalPeriod` | | ✓ | | | | |
| `_FiscalYearPeriod` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |
| `_FiscalPeriodForVariant` | | ✓ | | | | |
| `_FiscalYearPeriodForVariant` | | ✓ | | | | |
| `_FiscalCalendarDate` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |
| `_BalanceTransactionCurrency` | | ✓ | | | | |
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
| `_BaseUnit` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_AdditionalQuantity1Unit` | | ✓ | | | | |
| `_AdditionalQuantity2Unit` | | ✓ | | | | |
| `_AdditionalQuantity3Unit` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_SegmentText` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ProfitCenterText` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CostCenterText` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectText` | | ✓ | | | | |
| `_PartnerProject` | | ✓ | | | | |
| `_PartnerProjectText` | | ✓ | | | | |
| `_ProjectInternalID` | | ✓ | | | | |
| `_ProjectInternalIDText` | | ✓ | | | | |
| `_PartnerProjectInternalID` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_ProjectBasicDataText` | | ✓ | | | | |
| `_PartnerProjectBasicData` | | ✓ | | | | |
| `_PartnerProjectBasicDataText` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementText` | | ✓ | | | | |
| `_PartnerWBSElement` | | ✓ | | | | |
| `_PartnerWBSElementText` | | ✓ | | | | |
| `_InventorySpclStockWBSElement` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntText` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_WBSElementInternalIDText` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntIntID` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementBasicDataText` | | ✓ | | | | |
| `_PartnerWBSElementBasicData` | | ✓ | | | | |
| `_PartnerWBSElemntBasicDataText` | | ✓ | | | | |
| `_PartnerWBSElmntBasicDataText` | | ✓ | | | | |
| `_InvtrySpclStkWBSElmntBscData` | | ✓ | | | | |
| `_InvtrySpclStkWBSElmntBscDataT` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_FunctionalAreaText` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAcctInChartOfAccountsText` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_AccountingDocumentTypeText` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_FinancialAccountTypeText` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_DebitCreditCodeText` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_SourceLedgerText` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerText` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierText` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_SoldProductGroup_2` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ProductGroup_2` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_CostAnalysisResource` | | ✓ | | | | |
| `_CostAnalysisResourceText` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_BusinessTransactionTypeText` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_PredecessorReferenceDocType` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_PartnerBusinessAreaText` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_PartnerCompanyCode` | | ✓ | | | | |
| `_PartnerCompanyCodeText` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_PartnerSegmentText` | | ✓ | | | | |
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_SubLedgerAccLineItemType` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_EliminationProfitCenter` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_OffsettingAccountType` | | ✓ | | | | |
| `_OffsettingAccountTypeText` | | ✓ | | | | |
| `_AlternativeGLAccount` | | ✓ | | | | |
| `_AlternativeGLAccountText` | | ✓ | | | | |
| `_OffsettingAccount` | | ✓ | | | | |
| `_OffsettingAccountText` | | ✓ | | | | |
| `_OffsettingAccountWithBP` | | ✓ | | | | |
| `_OffsettingChartOfAccounts` | | ✓ | | | | |
| `_OffsettingChartOfAccountsText` | | ✓ | | | | |
| `_CountryChartOfAccounts` | | ✓ | | | | |
| `_CountryChartOfAccountsText` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_ClearingAccountingDocument` | | ✓ | | | | |
| `_ClearingJrnlEntryFiscalYear` | | ✓ | | | | |
| `_ClearingJournalEntry` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_GroupMasterFixedAsset` | | ✓ | | | | |
| `_GroupMasterFixedAssetText` | | ✓ | | | | |
| `_MasterFixedAssetText` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_GroupFixedAsset` | | ✓ | | | | |
| `_GroupFixedAssetText` | | ✓ | | | | |
| `_FixedAssetText` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_BusinessProcessText` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_PartnerOrder` | | ✓ | | | | |
| `_PartnerOrderText` | | ✓ | | | | |
| `_PartnerOrder_2` | | ✓ | | | | |
| `_PartnerOrderText_2` | | ✓ | | | | |
| `_PartnerOrderCategory` | | ✓ | | | | |
| `_PartnerSalesDocument` | | ✓ | | | | |
| `_PartnerSalesDocumentItem` | | ✓ | | | | |
| `_PartnerBusinessProcess` | | ✓ | | | | |
| `_PartnerBusinessProcessText` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SoldMaterial` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_SoldProductText` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_FundText` | | ✓ | | | | |
| `_PartnerFund` | | ✓ | | | | |
| `_PartnerFundText` | | ✓ | | | | |
| `_FundsCenter` | | ✓ | | | | |
| `_InventorySpecialStockValnType` | | ✓ | | | | |
| `_InventorySpclStockValnType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventorySpclStkSalesDocument` | | ✓ | | | | |
| `_InventorySpclStkSalesDocItm` | | ✓ | | | | |
| `_InventorySpecialStockSupplier` | | ✓ | | | | |
| `_InvtrySpclStockSupplierText` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_ControllingDebitCreditCode` | | ✓ | | | | |
| `_OriginSenderObject` | | ✓ | | | | |
| `_ControllingObjectClass` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_PartnerControllingObjectClass` | | ✓ | | | | |
| `_OriginCostCenter` | | ✓ | | | | |
| `_OriginProfitCenter` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_OriginCostCtrActivityType` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_MovementCategory` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_BudgetPeriodText` | | ✓ | | | | |
| `_CostOriginGroup` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_FinancialManagementAreaText` | | ✓ | | | | |
| `_HouseBankAccount` | | ✓ | | | | |
| `_HouseBankAccountText` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_OperatingConcern` | | ✓ | | | | |
| `_OperatingConcernText` | | ✓ | | | | |
| `_ProjectNetwork` | | ✓ | | | | |
| `_ProjectNetworkText` | | ✓ | | | | |
| `_PurReqValuationArea` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_BillableControl` | | ✓ | | | | |
| `_ConditionContract` | | ✓ | | | | |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_MaintenanceOrderOperation` | | ✓ | | | | |
| `_MaintenanceOrderSubOperation` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_EquipmentText` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_FunctionalLocationText` | | ✓ | | | | |
| `_Assembly` | | ✓ | | | | |
| `_AssemblyText` | | ✓ | | | | |
| `_MaintenanceActivityType` | | ✓ | | | | |
| `_MaintenanceActivityTypeText` | | ✓ | | | | |
| `_MaintOrdPlngDegreeCode` | | ✓ | | | | |
| `_PMNotificationPriorityType` | | ✓ | | | | |
| `_PMNotificationPriority` | | ✓ | | | | |
| `_SuperiorOrder` | | ✓ | | | | |
| `_GLAccountText` | | ✓ | | | | |
| `_GLAccountTxt` | | ✓ | | | | |
| `_WorkPackageText` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_WorkPackageWorkItem` | | ✓ | | | | |
| `_WorkPackageWorkItemText` | | ✓ | | | | |
| `_TimeSheetOvertimeCat` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |
| `_ServiceContractType` | | ✓ | | | | |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceContractItem` | | ✓ | | | | |
| `_PartnerServiceDocumentType` | | ✓ | | | | |
| `_PartnerServiceDocument` | | ✓ | | | | |
| `_PartnerServiceDocumentItem` | | ✓ | | | | |
| `_AccrualObjectType` | | ✓ | | | | |
| `_AccrualObject` | | ✓ | | | | |
| `_AccrualSubobject` | | ✓ | | | | |
| `_AccrualItemType` | | ✓ | | | | |
| `_CreditRiskClass` | | ✓ | | | | |
| `_FinValuationObjectType` | | ✓ | | | | |
| `_SemTagGLAccount` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_CompanyCodeText` | `I_CompanyCode` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_LedgerFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_FiscalPeriod` | `I_FiscalYearPeriodForCmpnyCode` | [0..1] |
| `_FiscalYearPeriod` | `I_FiscalCalYearPeriodForCoCode` | [0..1] |
| `_LedgerFiscalYearForVariant` | `I_FiscalYearForVariant` | [0..1] |
| `_FiscalPeriodForVariant` | `I_FiscalPeriodForVariant` | [0..1] |
| `_FiscalYearPeriodForVariant` | `I_FiscalYearPeriodForVariant` | [0..1] |
| `_FiscalCalendarDate` | `I_FiscalCalendarDate` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_BalanceTransactionCurrency` | `I_Currency` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency1` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency2` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency3` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency4` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency5` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency6` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency7` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency8` | `I_Currency` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CostSourceUnit` | `I_UnitOfMeasure` | [0..1] |
| `_AdditionalQuantity1Unit` | `I_UnitOfMeasure` | [0..1] |
| `_AdditionalQuantity2Unit` | `I_UnitOfMeasure` | [0..1] |
| `_AdditionalQuantity3Unit` | `I_UnitOfMeasure` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_SegmentText` | `I_SegmentText` | [0..*] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ProfitCenterText` | `I_ProfitCenterText` | [0..*] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CostCenterText` | `I_CostCenterText` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_Project` | `I_Project` | [0..1] |
| `_ProjectText` | `I_Project` | [0..1] |
| `_PartnerProject` | `I_Project` | [0..1] |
| `_PartnerProjectText` | `I_Project` | [0..1] |
| `_ProjectInternalID` | `I_ProjectByInternalKey` | [0..1] |
| `_ProjectInternalIDText` | `I_ProjectByInternalKey` | [0..1] |
| `_PartnerProjectInternalID` | `I_ProjectBasicData` | [0..1] |
| `_ProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_ProjectBasicDataText` | `I_ProjectBasicData` | [0..1] |
| `_PartnerProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_PartnerProjectBasicDataText` | `I_ProjectBasicData` | [0..1] |
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementText` | `I_WBSElement` | [0..1] |
| `_PartnerWBSElement` | `I_WBSElement` | [0..1] |
| `_PartnerWBSElementText` | `I_WBSElement` | [0..1] |
| `_InventorySpclStockWBSElement` | `I_WBSElement` | [0..1] |
| `_InvtrySpclStockWBSElmntText` | `I_WBSElement` | [0..1] |
| `_WBSElementInternalID` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElementInternalIDText` | `I_WBSElementByInternalKey` | [0..1] |
| `_InvtrySpclStockWBSElmntIntID` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasicDataText` | `I_WBSElementBasicData` | [0..1] |
| `_PartnerWBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_PartnerWBSElemntBasicDataText` | `I_WBSElementBasicData` | [0..1] |
| `_PartnerWBSElmntBasicDataText` | `I_WBSElementBasicData` | [0..1] |
| `_InvtrySpclStkWBSElmntBscData` | `I_WBSElementBasicData` | [0..1] |
| `_InvtrySpclStkWBSElmntBscDataT` | `I_WBSElementBasicData` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_FunctionalAreaText` | `I_FunctionalAreaText` | [0..*] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_GLAcctInChartOfAccountsText` | `I_GLAccountText` | [0..*] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_AccountingDocumentTypeText` | `I_AccountingDocumentTypeText` | [0..*] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_FinancialAccountTypeText` | `I_FinancialAccountTypeText` | [0..*] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_DebitCreditCodeText` | `I_DebitCreditCodeText` | [0..*] |
| `_Material` | `I_Material` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductText` | `I_ProductDescription` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_SourceLedger` | `I_Ledger` | [0..1] |
| `_SourceLedgerText` | `I_LedgerText` | [0..*] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerText` | `I_Customer` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierText` | `I_Supplier` | [0..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |
| `_SoldProductGroup` | `I_ProductGroup` | [0..1] |
| `_SoldProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_ProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_InternalOrder` | `I_InternalOrder` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_CostAnalysisResource` | `I_CostAnalysisResource` | [0..*] |
| `_CostAnalysisResourceText` | `I_CostAnalysisResourceText` | [0..*] |
| `_Employment` | `I_Employment` | [0..1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_FinancialTransactionType` | `I_FinancialTransactionType` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_BusinessTransactionTypeText` | `I_BusTransactionTypeText` | [0..*] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_PredecessorReferenceDocType` | `I_ReferenceDocumentType` | [0..1] |
| `_PartnerCostCenter` | `I_CostCenter` | [0..*] |
| `_PartnerProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerBusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_PartnerFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_PartnerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_PartnerCompanyCodeText` | `I_CompanyCode` | [0..1] |
| `_PartnerSegment` | `I_Segment` | [0..1] |
| `_PartnerSegmentText` | `I_SegmentText` | [0..*] |
| `_AccountingDocumentCategory` | `I_AccountingDocumentCategory` | [0..1] |
| `_PostingKey` | `I_PostingKey` | [0..1] |
| `_SubLedgerAccLineItemType` | `I_SubLedgerAccLineItemType` | [0..1] |
| `_User` | `I_User` | [0..1] |
| `_EliminationProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_GLAccountType` | `I_GLAccountType` | [0..1] |
| `_OffsettingAccountType` | `I_FinancialAccountType` | [0..1] |
| `_OffsettingAccountTypeText` | `I_FinancialAccountTypeText` | [0..*] |
| `_AlternativeGLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_AlternativeGLAccountText` | `I_GLAccountText` | [0..*] |
| `_OffsettingAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_OffsettingAccountText` | `I_OffsettingAccount` | [0..1] |
| `_OffsettingAccountWithBP` | `I_OffsettingAccount` | [0..1] |
| `_OffsettingChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_OffsettingChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_CountryChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CountryChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_PurchasingDocument` | `I_PurchasingDocument` | [0..1] |
| `_PurchasingDocumentItem` | `I_PurchasingDocumentItem` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_TaxCode` | `I_TaxCode` | [0..*] |
| `_HouseBank` | `I_Housebank` | [0..1] |
| `_ClearingAccountingDocument` | `I_AccountingDocument` | [1..1] |
| `_ClearingJrnlEntryFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ClearingJournalEntry` | `I_JournalEntry` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_GroupMasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_GroupMasterFixedAssetText` | `I_MasterFixedAsset` | [0..1] |
| `_MasterFixedAssetText` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_GroupFixedAsset` | `I_FixedAsset` | [0..1] |
| `_GroupFixedAssetText` | `I_FixedAsset` | [0..1] |
| `_FixedAssetText` | `I_FixedAsset` | [0..1] |
| `_BusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_BusinessProcessText` | `I_BusinessProcessText` | [0..*] |
| `_PartnerCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_PartnerOrder` | `I_InternalOrder` | [0..1] |
| `_PartnerOrderText` | `I_InternalOrder` | [0..1] |
| `_PartnerOrder_2` | `I_Order` | [0..1] |
| `_PartnerOrderText_2` | `I_Order` | [0..1] |
| `_PartnerOrderCategory` | `I_OrderCategory` | [0..1] |
| `_PartnerSalesDocument` | `I_SalesDocument` | [0..1] |
| `_PartnerSalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_PartnerBusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_PartnerBusinessProcessText` | `I_BusinessProcessText` | [0..*] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_SoldMaterial` | `I_Material` | [0..1] |
| `_SoldProduct` | `I_Product` | [0..1] |
| `_SoldProductText` | `I_ProductDescription` | [0..*] |
| `_Fund` | `I_Fund` | [0..1] |
| `_FundText` | `I_FundText` | [0..*] |
| `_PartnerFund` | `I_Fund` | [0..1] |
| `_PartnerFundText` | `I_FundText` | [0..*] |
| `_FundsCenter` | `I_FundsCenter` | [0..*] |
| `_InventorySpecialStockValnType` | `I_InventoryValuationType` | [0..1] |
| `_InventorySpclStockValnType` | `I_InvtrySpecialStockValnType` | [0..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_InventorySpclStkSalesDocument` | `I_SalesDocument` | [0..1] |
| `_InventorySpclStkSalesDocItm` | `I_SalesDocumentItem` | [0..1] |
| `_InventorySpecialStockSupplier` | `I_Supplier` | [0..1] |
| `_InvtrySpclStockSupplierText` | `I_Supplier` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_ControllingDebitCreditCode` | `I_ControllingDebitCreditCode` | [0..1] |
| `_OriginSenderObject` | `I_ControllingObject` | [0..1] |
| `_ControllingObjectClass` | `I_ControllingObjectClass` | [0..1] |
| `_PartnerCompany` | `I_Partnercompany` | [0..1] |
| `_PartnerControllingObjectClass` | `I_ControllingObjectClass` | [0..1] |
| `_OriginCostCenter` | `I_CostCenter` | [0..*] |
| `_OriginProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_OriginCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_OrderCategory` | `I_OrderCategory` | [0..1] |
| `_MovementCategory` | `I_MovementCategory` | [0..1] |
| `_AssetTransactionType` | `I_AssetTransactionType` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_BudgetPeriodText` | `I_BudgetPeriodText` | [0..*] |
| `_CostOriginGroup` | `I_CostOriginGroup` | [0..*] |
| `_CustomerSupplierCountry` | `I_Country` | [0..1] |
| `_CustomerSupplierIndustry` | `I_CustomerSupplierIndustry` | [0..1] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |
| `_FinancialManagementAreaText` | `I_FinancialManagementAreaText` | [0..*] |
| `_HouseBankAccount` | `I_HouseBankAccount` | [0..1] |
| `_HouseBankAccountText` | `I_HouseBankAccountText` | [0..*] |
| `_LogicalSystem` | `I_LogicalSystem` | [0..1] |
| `_OperatingConcern` | `I_OperatingConcern` | [0..1] |
| `_OperatingConcernText` | `I_OperatingConcernText` | [0..*] |
| `_ProjectNetwork` | `I_ProjectNetwork` | [0..1] |
| `_ProjectNetworkText` | `I_ProjectNetwork` | [0..1] |
| `_PurReqValuationArea` | `I_Purreqvaluationarea` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_BillableControl` | `I_BillableControl` | [0..1] |
| `_ConditionContract` | `I_ConditionContract` | [0..1] |
| `_MaintenanceOrder` | `I_MaintenanceOrder` | [0..1] |
| `_MaintenanceOrderOperation` | `I_MaintenanceOrderOperation` | [0..1] |
| `_MaintenanceOrderSubOperation` | `I_MaintenanceOrderSubOperation` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_EquipmentText` | `I_EquipmentText` | [0..*] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_FunctionalLocationText` | `I_FunctionalLocationText` | [0..*] |
| `_Assembly` | `I_Product` | [0..1] |
| `_AssemblyText` | `I_ProductDescription` | [0..*] |
| `_MaintenanceActivityType` | `I_MaintenanceActivityType` | [0..1] |
| `_MaintenanceActivityTypeText` | `I_MaintenanceActivityTypeText` | [0..*] |
| `_MaintOrdPlngDegreeCode` | `I_MaintOrdPlngDegreeCode` | [0..1] |
| `_PMNotificationPriorityType` | `I_PMNotificationPriorityType` | [0..1] |
| `_PMNotificationPriority` | `I_PMNotificationPriority` | [0..1] |
| `_SuperiorOrder` | `I_LogisticsOrder` | [0..1] |
| `_GLAccountText` | `I_GLAccountText` | [0..*] |
| `_GLAccountTxt` | `I_GLAccountText` | [0..*] |
| `_WorkPackageText` | `I_WorkPackage` | [0..1] |
| `_WorkPackage` | `I_WorkPackage` | [0..1] |
| `_WorkPackageWorkItem` | `I_WorkPackageWorkItem` | [0..1] |
| `_WorkPackageWorkItemText` | `I_WorkPackageWorkItem` | [0..1] |
| `_TimeSheetOvertimeCat` | `I_TimeSheetOvertimeCat` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_ServiceContractType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceContract` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceContractItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_PartnerServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_PartnerServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_PartnerServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_AccrualObjectType` | `I_AccrualObjectType` | [0..1] |
| `_AccrualObject` | `I_AccrualObject` | [0..1] |
| `_AccrualSubobject` | `I_AccrualSubObject` | [0..1] |
| `_AccrualItemType` | `I_AccrualItemType` | [0..1] |
| `_CreditRiskClass` | `I_CreditRiskClass` | [0..1] |
| `_FinValuationObjectType` | `I_FinValuationObjectType` | [0..1] |
| `_SemTagGLAccount` | `I_SemTagGLAccount` | [0..*] |
| `_SponsoredClass` | `I_SponsoredClassCore` | [0..1] |
| `_SponsoredProgram` | `I_SponsoredProgramCore` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@AccessControl: { authorizationCheck: #CHECK,
                 personalData.blocking: #REQUIRED,
                 privilegedAssociations: ['_PurReqValuationArea','_User','_AccountingDocumentTypeText','_BudgetPeriodText','_BusinessTransactionTypeText','_BusinessAreaText',
                                       '_PartnerBusinessAreaText','_BusinessProcessText','_PartnerBusinessProcessText','_ChartOfAccountsText','_CountryChartOfAccountsText',
                                       '_OffsettingChartOfAccountsText','_PartnerCompanyCodeText','_ControllingAreaText','_CostAnalysisResourceText','_CustomerText','_EquipmentText',
                                       '_FinancialManagementAreaText','_FinancialAccountTypeText','_OffsettingAccountTypeText','_FixedAssetText','_GroupFixedAssetText',
                                       '_FunctionalLocationText','_FundText','_PartnerFundText','_AlternativeGLAccountText','_GLAcctInChartOfAccountsText','_HouseBankAccountText',
                                       '_PartnerOrderText','_PartnerOrderText_2','_LedgerText','_SourceLedgerText','_MaintenanceActivityTypeText','_GroupMasterFixedAssetText','_MasterFixedAssetText',
                                       '_OperatingConcernText','_AssemblyText','_ProductText','_SoldProductText','_ProjectInternalIDText','_ProjectNetworkText',
                                       '_PartnerProjectText','_ProjectText','_PartnerSegmentText','_SegmentText','_InvtrySpclStockSupplierText','_SupplierText',
                                       '_InvtrySpclStockWBSElmntText','_PartnerWBSElementText','_WBSElementText','_WBSElementInternalIDText','_WorkPackageText' ] }
@Analytics.dataCategory: #CUBE
@Analytics.technicalName: 'IFIGLACCTLIT'
@EndUserText.label: 'General Ledger Account Line Item'
@ObjectModel: { representativeKey: 'LedgerGLLineItem',
                usageType: { sizeCategory: #XXL,
                             dataClass:  #MIXED,
                             serviceQuality: #D },
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions:true }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AccessControl.auditFilter: #ENABLED
@Environment.sql.passValueForClient: true


define view entity I_GLAccountLineItem
  as select from I_GLAccountLineItemRawData as I_GLAccountLineItemRawData
  //    inner join   I_LedgerSourceLedger on I_GLAccountLineItemRawData.SourceLedger = I_LedgerSourceLedger.SourceLedger
  /* changed as it will project source ledger to extension ledgers for company codes where the extension ledger doesn't exist */
    inner join   I_CoCodeLedgerSourceLedger on  I_GLAccountLineItemRawData.SourceLedger = I_CoCodeLedgerSourceLedger.SourceLedger
                                            and I_GLAccountLineItemRawData.CompanyCode  = I_CoCodeLedgerSourceLedger.CompanyCode
  /* *************************************************************
   *  association zur ID
   * *************************************************************
  */

  association [0..1]                                           to I_JournalEntry                 as _JournalEntry                  on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                                                                   and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                                                                   and $projection.AccountingDocument = _JournalEntry.AccountingDocument
  association [1..1]                                           to I_CompanyCode                  as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1]                                           to I_CompanyCode                  as _CompanyCodeText               on  $projection.CompanyCode = _CompanyCodeText.CompanyCode
  association [1..1]                                           to I_FiscalYearVariant            as _FiscalYearVariant             on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [0..1]                                           to I_FiscalYearForCompanyCode     as _FiscalYear                    on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                                                                   and $projection.CompanyCode = _FiscalYear.CompanyCode
  // begin DO NOT USE these associations. Use Associations ForVariant instead
  association [0..1]                                           to I_FiscalYearForCompanyCode     as _LedgerFiscalYear              on  $projection.LedgerFiscalYear = _LedgerFiscalYear.FiscalYear
                                                                                                                                   and $projection.CompanyCode      = _LedgerFiscalYear.CompanyCode
  association [0..1]                                           to I_FiscalYearPeriodForCmpnyCode as _FiscalPeriod                  on  $projection.LedgerFiscalYear = _FiscalPeriod.FiscalYear
                                                                                                                                   and $projection.FiscalPeriod     = _FiscalPeriod.FiscalPeriod
                                                                                                                                   and $projection.CompanyCode      = _FiscalPeriod.CompanyCode
  association [0..1]                                           to I_FiscalCalYearPeriodForCoCode as _FiscalYearPeriod              on  $projection.FiscalYearPeriod = _FiscalYearPeriod.FiscalYearPeriod
                                                                                                                                   and $projection.CompanyCode      = _FiscalYearPeriod.CompanyCode
  //end
  //   Definition of _FiscalYear unchenaged and already defined in P_ACDOCA_CUBE. Therefore not required here
  association [0..1]                                           to I_FiscalYearForVariant         as _LedgerFiscalYearForVariant    on  $projection.LedgerFiscalYear  = _LedgerFiscalYearForVariant.FiscalYear
                                                                                                                                   and $projection.FiscalYearVariant = _LedgerFiscalYearForVariant.FiscalYearVariant
  association [0..1]                                           to I_FiscalPeriodForVariant       as _FiscalPeriodForVariant        on  $projection.LedgerFiscalYear  = _FiscalPeriodForVariant.FiscalYear
                                                                                                                                   and $projection.FiscalPeriod      = _FiscalPeriodForVariant.FiscalPeriod
                                                                                                                                   and $projection.FiscalYearVariant = _FiscalPeriodForVariant.FiscalYearVariant
  association [0..1]                                           to I_FiscalYearPeriodForVariant   as _FiscalYearPeriodForVariant    on  $projection.FiscalYearPeriod  = _FiscalYearPeriodForVariant.FiscalYearPeriod
                                                                                                                                   and $projection.FiscalYearVariant = _FiscalYearPeriodForVariant.FiscalYearVariant

  //  association [0..1] to I_CalendarDate                 as _CalendarDate                  on  $projection.PostingDate = _CalendarDate.CalendarDate
  association [0..1]                                           to I_FiscalCalendarDate           as _FiscalCalendarDate            on  $projection.PostingDate       = _FiscalCalendarDate.CalendarDate
                                                                                                                                   and $projection.FiscalYearVariant = _FiscalCalendarDate.FiscalYearVariant
  association [0..1]                                           to I_ControllingArea              as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1]                                           to I_ControllingArea              as _ControllingAreaText           on  $projection.ControllingArea = _ControllingAreaText.ControllingArea

  association [0..1]                                           to I_Currency                     as _BalanceTransactionCurrency    on  $projection.BalanceTransactionCurrency = _BalanceTransactionCurrency.Currency
  association [0..1]                                           to I_Currency                     as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1]                                           to I_Currency                     as _CompanyCodeCurrency           on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency

  association [0..1]                                           to I_Currency                     as _GlobalCurrency                on  $projection.GlobalCurrency = _GlobalCurrency.Currency
  association [0..1]                                           to I_Currency                     as _FreeDefinedCurrency1          on  $projection.FreeDefinedCurrency1 = _FreeDefinedCurrency1.Currency
  association [0..1]                                           to I_Currency                     as _FreeDefinedCurrency2          on  $projection.FreeDefinedCurrency2 = _FreeDefinedCurrency2.Currency
  association [0..1]                                           to I_Currency                     as _FreeDefinedCurrency3          on  $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency3.Currency
  association [0..1]                                           to I_Currency                     as _FreeDefinedCurrency4          on  $projection.FreeDefinedCurrency4 = _FreeDefinedCurrency4.Currency
  association [0..1]                                           to I_Currency                     as _FreeDefinedCurrency5          on  $projection.FreeDefinedCurrency5 = _FreeDefinedCurrency5.Currency
  association [0..1]                                           to I_Currency                     as _FreeDefinedCurrency6          on  $projection.FreeDefinedCurrency6 = _FreeDefinedCurrency6.Currency
  association [0..1]                                           to I_Currency                     as _FreeDefinedCurrency7          on  $projection.FreeDefinedCurrency7 = _FreeDefinedCurrency7.Currency
  association [0..1]                                           to I_Currency                     as _FreeDefinedCurrency8          on  $projection.FreeDefinedCurrency8 = _FreeDefinedCurrency8.Currency

  association [0..1]                                           to I_UnitOfMeasure                as _BaseUnit                      on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1]                                           to I_UnitOfMeasure                as _CostSourceUnit                on  $projection.CostSourceUnit = _CostSourceUnit.UnitOfMeasure
  association [0..1]                                           to I_UnitOfMeasure                as _AdditionalQuantity1Unit       on  $projection.AdditionalQuantity1Unit = _AdditionalQuantity1Unit.UnitOfMeasure
  association [0..1]                                           to I_UnitOfMeasure                as _AdditionalQuantity2Unit       on  $projection.AdditionalQuantity2Unit = _AdditionalQuantity2Unit.UnitOfMeasure
  association [0..1]                                           to I_UnitOfMeasure                as _AdditionalQuantity3Unit       on  $projection.AdditionalQuantity3Unit = _AdditionalQuantity3Unit.UnitOfMeasure

  association [0..1]                                           to I_Segment                      as _Segment                       on  $projection.Segment = _Segment.Segment
  association [0..*]                                           to I_SegmentText                  as _SegmentText                   on  $projection.Segment = _SegmentText.Segment
  association [0..*]                                           to I_ProfitCenter                 as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                                                                   and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..*]                                           to I_ProfitCenterText             as _ProfitCenterText              on  $projection.ControllingArea = _ProfitCenterText.ControllingArea
                                                                                                                                   and $projection.ProfitCenter    = _ProfitCenterText.ProfitCenter
  association [0..1]                                           to I_ProfitCenter                 as _CurrentProfitCenter           on  $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea
                                                                                                                                   and $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter
                                                                                                                                   and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
                                                                                                                                   and _CurrentProfitCenter.ValidityEndDate   >= $session.system_date
  association [0..*]                                           to I_CostCenter                   as _CostCenter                    on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                                                                   and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..*]                                           to I_CostCenterText               as _CostCenterText                on  $projection.ControllingArea = _CostCenterText.ControllingArea
                                                                                                                                   and $projection.CostCenter      = _CostCenterText.CostCenter
  association [0..1]                                           to I_CostCenter                   as _CurrentCostCenter             on  $projection.ControllingArea          = _CurrentCostCenter.ControllingArea
                                                                                                                                   and $projection.CostCenter               = _CurrentCostCenter.CostCenter
                                                                                                                                   and _CurrentCostCenter.ValidityStartDate <= $session.system_date
                                                                                                                                   and _CurrentCostCenter.ValidityEndDate   >= $session.system_date


  association [0..1]                                           to I_Project                      as _Project                       on  $projection.Project = _Project.Project /*do not use any longer*/
  association [0..1]                                           to I_Project                      as _ProjectText                   on  $projection.Project = _ProjectText.Project /*do not use any longer*/
  association [0..1]                                           to I_Project                      as _PartnerProject                on  $projection.PartnerProject = _PartnerProject.Project /*do not use any longer*/
  association [0..1]                                           to I_Project                      as _PartnerProjectText            on  $projection.PartnerProject = _PartnerProjectText.Project /*do not use any longer*/

  association [0..1]                                           to I_ProjectByInternalKey         as _ProjectInternalID             on  $projection.ProjectInternalID = _ProjectInternalID.ProjectInternalID /*do not use any longer*/
  association [0..1]                                           to I_ProjectByInternalKey         as _ProjectInternalIDText         on  $projection.ProjectInternalID = _ProjectInternalIDText.ProjectInternalID /*do not use any longer*/
  association [0..1]                                           to I_ProjectBasicData             as _PartnerProjectInternalID      on  $projection.PartnerProjectInternalID = _PartnerProjectInternalID.ProjectInternalID /*do not use any longer*/

  association [0..1]                                           to I_ProjectBasicData             as _ProjectBasicData              on  $projection.ProjectInternalID = _ProjectBasicData.ProjectInternalID
  association [0..1]                                           to I_ProjectBasicData             as _ProjectBasicDataText          on  $projection.ProjectInternalID = _ProjectBasicDataText.ProjectInternalID
  association [0..1]                                           to I_ProjectBasicData             as _PartnerProjectBasicData       on  $projection.PartnerProjectInternalID = _PartnerProjectBasicData.ProjectInternalID
  association [0..1]                                           to I_ProjectBasicData             as _PartnerProjectBasicDataText   on  $projection.PartnerProjectInternalID = _PartnerProjectBasicDataText.ProjectInternalID

  association [0..1]                                           to I_WBSElement                   as _WBSElement                    on  $projection.WBSElement = _WBSElement.WBSElement /*do not use any longer*/
  association [0..1]                                           to I_WBSElement                   as _WBSElementText                on  $projection.WBSElement = _WBSElementText.WBSElement /*do not use any longer*/
  association [0..1]                                           to I_WBSElement                   as _PartnerWBSElement             on  $projection.PartnerWBSElement = _PartnerWBSElement.WBSElement /*do not use any longer*/
  association [0..1]                                           to I_WBSElement                   as _PartnerWBSElementText         on  $projection.PartnerWBSElement = _PartnerWBSElementText.WBSElement /*do not use any longer*/
  association [0..1]                                           to I_WBSElement                   as _InventorySpclStockWBSElement  on  $projection.InventorySpclStockWBSElement = _InventorySpclStockWBSElement.WBSElement /*do not use any longer*/
  association [0..1]                                           to I_WBSElement                   as _InvtrySpclStockWBSElmntText   on  $projection.InventorySpclStockWBSElement = _InvtrySpclStockWBSElmntText.WBSElement /*do not use any longer*/

  association [0..1]                                           to I_WBSElementByInternalKey      as _WBSElementInternalID          on  $projection.WBSElementInternalID = _WBSElementInternalID.WBSElementInternalID /*do not use any longer*/
  association [0..1]                                           to I_WBSElementByInternalKey      as _WBSElementInternalIDText      on  $projection.WBSElementInternalID = _WBSElementInternalIDText.WBSElementInternalID /*do not use any longer*/
  association [0..1]                                           to I_WBSElementByInternalKey      as _InvtrySpclStockWBSElmntIntID  on  $projection.InvtrySpclStockWBSElmntIntID = _InvtrySpclStockWBSElmntIntID.WBSElementInternalID /*do not use any longer*/

  association [0..1]                                           to I_WBSElementBasicData          as _WBSElementBasicData           on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  association [0..1]                                           to I_WBSElementBasicData          as _WBSElementBasicDataText       on  $projection.WBSElementInternalID = _WBSElementBasicDataText.WBSElementInternalID
  association [0..1]                                           to I_WBSElementBasicData          as _PartnerWBSElementBasicData    on  $projection.PartnerWBSElementInternalID = _PartnerWBSElementBasicData.WBSElementInternalID
  association [0..1]                                           to I_WBSElementBasicData          as _PartnerWBSElemntBasicDataText on  $projection.PartnerWBSElementInternalID = _PartnerWBSElemntBasicDataText.WBSElementInternalID /* do not use */
  association [0..1]                                           to I_WBSElementBasicData          as _PartnerWBSElmntBasicDataText  on  $projection.PartnerWBSElementInternalID = _PartnerWBSElmntBasicDataText.WBSElementInternalID
  association [0..1]                                           to I_WBSElementBasicData          as _InvtrySpclStkWBSElmntBscData  on  $projection.InvtrySpclStockWBSElmntIntID = _InvtrySpclStkWBSElmntBscData.WBSElementInternalID
  association [0..1]                                           to I_WBSElementBasicData          as _InvtrySpclStkWBSElmntBscDataT on  $projection.InvtrySpclStockWBSElmntIntID = _InvtrySpclStkWBSElmntBscDataT.WBSElementInternalID


  association [0..1]                                           to I_BusinessArea                 as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..*]                                           to I_BusinessAreaText             as _BusinessAreaText              on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..1]                                           to I_FunctionalArea               as _FunctionalArea                on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..*]                                           to I_FunctionalAreaText           as _FunctionalAreaText            on  $projection.FunctionalArea = _FunctionalAreaText.FunctionalArea

  association [0..1]                                           to I_GLAccountInChartOfAccounts   as _GLAccountInChartOfAccounts    on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                                                                   and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [0..*]                                           to I_GLAccountText                as _GLAcctInChartOfAccountsText   on  $projection.ChartOfAccounts = _GLAcctInChartOfAccountsText.ChartOfAccounts
                                                                                                                                   and $projection.GLAccount       = _GLAcctInChartOfAccountsText.GLAccount
  association [0..1]                                           to I_GLAccountInCompanyCode       as _GLAccountInCompanyCode        on  $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode
                                                                                                                                   and $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
  association [0..1]                                           to I_ChartOfAccounts              as _ChartOfAccounts               on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..*]                                           to I_ChartOfAccountsText          as _ChartOfAccountsText           on  $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts

  association [0..1]                                           to I_AccountingDocumentType       as _AccountingDocumentType        on  $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType
  association [0..*]                                           to I_AccountingDocumentTypeText   as _AccountingDocumentTypeText    on  $projection.AccountingDocumentType = _AccountingDocumentTypeText.AccountingDocumentType
  association [0..1]                                           to I_FinancialAccountType         as _FinancialAccountType          on  $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
  association [0..*]                                           to I_FinancialAccountTypeText     as _FinancialAccountTypeText      on  $projection.FinancialAccountType = _FinancialAccountTypeText.FinancialAccountType
  association [0..1]                                           to I_DebitCreditCode              as _DebitCreditCode               on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [0..*]                                           to I_DebitCreditCodeText          as _DebitCreditCodeText           on  $projection.DebitCreditCode = _DebitCreditCodeText.DebitCreditCode

  /*do not use any longer, use _Product*/   association [0..1] to I_Material                     as _Material                      on  $projection.Material = _Material.Material
  association [0..1]                                           to I_Product                      as _Product                       on  $projection.Product = _Product.Product
  association [0..*]                                           to I_ProductDescription           as _ProductText                   on  $projection.Product = _ProductText.Product
  association [0..1]                                           to I_Plant                        as _Plant                         on  $projection.Plant = _Plant.Plant

  association [1..1]                                           to I_Ledger                       as _Ledger                        on  $projection.Ledger = _Ledger.Ledger
  association [0..*]                                           to I_LedgerText                   as _LedgerText                    on  $projection.Ledger = _LedgerText.Ledger
  association [0..1]                                           to I_Ledger                       as _SourceLedger                  on  $projection.SourceLedger = _SourceLedger.Ledger
  association [0..*]                                           to I_LedgerText                   as _SourceLedgerText              on  $projection.SourceLedger = _SourceLedgerText.Ledger

  association [0..1]                                           to I_Customer                     as _Customer                      on  $projection.Customer = _Customer.Customer
  association [0..1]                                           to I_Customer                     as _CustomerText                  on  $projection.Customer = _CustomerText.Customer
  association [0..1]                                           to I_CustomerGroup                as _CustomerGroup                 on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup

  association [0..1]                                           to I_Supplier                     as _Supplier                      on  $projection.Supplier = _Supplier.Supplier
  association [0..1]                                           to I_Supplier                     as _SupplierText                  on  $projection.Supplier = _SupplierText.Supplier

  association [0..1]                                           to I_MaterialGroup                as _MaterialGroup                 on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup       //do not use any longer, use _SoldProductGroup_2
  association [0..1]                                           to I_ProductGroup                 as _SoldProductGroup              on  $projection.SoldProductGroup = _SoldProductGroup.MaterialGroup //do not use any longer, use _SoldProductGroup_2
  association [0..1]                                           to I_ProductGroup_2               as _SoldProductGroup_2            on  $projection.SoldProductGroup = _SoldProductGroup_2.ProductGroup

  association [0..1]                                           to I_ProductGroup                 as _ProductGroup                  on  $projection.ProductGroup = _ProductGroup.MaterialGroup         //do not use any longer, use _ProductGroup_2
  association [0..1]                                           to I_ProductGroup_2               as _ProductGroup_2                on  $projection.ProductGroup = _ProductGroup_2.ProductGroup

  association [0..1]                                           to I_SalesOrder                   as _SalesOrder                    on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1]                                           to I_SalesOrderItem               as _SalesOrderItem                on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                                                                   and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1]                                           to I_SalesDocument                as _SalesDocument                 on  $projection.SalesDocument = _SalesDocument.SalesDocument
  association [0..1]                                           to I_SalesDocumentItem            as _SalesDocumentItem             on  $projection.SalesDocument     = _SalesDocumentItem.SalesDocument
                                                                                                                                   and $projection.SalesDocumentItem = _SalesDocumentItem.SalesDocumentItem
  // association[0..1] to I_Order                        as _Order                      on $projection.OrderID                         = _Order.OrderID
  association [0..1]                                           to I_InternalOrder                as _InternalOrder                 on  $projection.OrderID = _InternalOrder.InternalOrder
  association [0..1]                                           to I_Order                        as _Order                         on  $projection.OrderID = _Order.OrderID
  association [0..*]                                           to I_CostAnalysisResource         as _CostAnalysisResource          on  $projection.ControllingArea      = _CostAnalysisResource.ControllingArea
                                                                                                                                   and $projection.CostAnalysisResource = _CostAnalysisResource.CostAnalysisResource
  association [0..*]                                           to I_CostAnalysisResourceText     as _CostAnalysisResourceText      on  $projection.ControllingArea      = _CostAnalysisResourceText.ControllingArea
                                                                                                                                   and $projection.CostAnalysisResource = _CostAnalysisResourceText.CostAnalysisResource

  association [0..1]                                           to I_Employment                   as _Employment                    on  $projection.PersonnelNumber = _Employment.EmploymentInternalID
  association [0..1]                                           to I_PersonWorkAgreement_1        as _PersonWorkAgreement_1         on  $projection.PersonnelNumber = _PersonWorkAgreement_1.PersonWorkAgreement

  association [0..1]                                           to I_FinancialTransactionType     as _FinancialTransactionType      on  $projection.FinancialTransactionType = _FinancialTransactionType.FinancialTransactionType
  association [0..1]                                           to I_BusinessTransactionType      as _BusinessTransactionType       on  $projection.BusinessTransactionType = _BusinessTransactionType.BusinessTransactionType

  association [0..*]                                           to I_BusTransactionTypeText       as _BusinessTransactionTypeText   on  $projection.BusinessTransactionType = _BusinessTransactionTypeText.BusinessTransactionType

  association [0..1]                                           to I_ReferenceDocumentType        as _ReferenceDocumentType         on  $projection.ReferenceDocumentType = _ReferenceDocumentType.ReferenceDocumentType
  association [0..1]                                           to I_ReferenceDocumentType        as _PredecessorReferenceDocType   on  $projection.PredecessorReferenceDocType = _PredecessorReferenceDocType.ReferenceDocumentType

  association [0..*]                                           to I_CostCenter                   as _PartnerCostCenter             on  $projection.ControllingArea   = _PartnerCostCenter.ControllingArea
                                                                                                                                   and $projection.PartnerCostCenter = _PartnerCostCenter.CostCenter
  association [0..*]                                           to I_ProfitCenter                 as _PartnerProfitCenter           on  $projection.ControllingArea     = _PartnerProfitCenter.ControllingArea
                                                                                                                                   and $projection.PartnerProfitCenter = _PartnerProfitCenter.ProfitCenter
  association [0..1]                                           to I_BusinessArea                 as _PartnerBusinessArea           on  $projection.PartnerBusinessArea = _PartnerBusinessArea.BusinessArea
  association [0..*]                                           to I_BusinessAreaText             as _PartnerBusinessAreaText       on  $projection.PartnerBusinessArea = _PartnerBusinessAreaText.BusinessArea
  association [0..1]                                           to I_FunctionalArea               as _PartnerFunctionalArea         on  $projection.PartnerFunctionalArea = _PartnerFunctionalArea.FunctionalArea
  association [0..1]                                           to I_CompanyCode                  as _PartnerCompanyCode            on  $projection.PartnerCompanyCode = _PartnerCompanyCode.CompanyCode
  association [0..1]                                           to I_CompanyCode                  as _PartnerCompanyCodeText        on  $projection.PartnerCompanyCode = _PartnerCompanyCodeText.CompanyCode
  association [0..1]                                           to I_Segment                      as _PartnerSegment                on  $projection.PartnerSegment = _PartnerSegment.Segment
  association [0..*]                                           to I_SegmentText                  as _PartnerSegmentText            on  $projection.PartnerSegment = _PartnerSegmentText.Segment

  association [0..1]                                           to I_AccountingDocumentCategory   as _AccountingDocumentCategory    on  $projection.AccountingDocumentCategory = _AccountingDocumentCategory.AccountingDocumentCategory

  association [0..1]                                           to I_PostingKey                   as _PostingKey                    on  $projection.PostingKey = _PostingKey.PostingKey

  association [0..1]                                           to I_SubLedgerAccLineItemType     as _SubLedgerAccLineItemType      on  $projection.SubLedgerAcctLineItemType = _SubLedgerAccLineItemType.SubLedgerAcctLineItemType
  association [0..1]                                           to I_User                         as _User                          on  $projection.AccountingDocCreatedByUser = _User.UserID

  association [0..*]                                           to I_ProfitCenter                 as _EliminationProfitCenter       on  $projection.ControllingArea         = _EliminationProfitCenter.ControllingArea
                                                                                                                                   and $projection.EliminationProfitCenter = _EliminationProfitCenter.ProfitCenter

  //association[0..1] to I_ControllingObject            as _ControllingObject             on $projection.controllingobject              = _ControllingObject.ControllingObject
  //
  association [0..1]                                           to I_GLAccountType                as _GLAccountType                 on  $projection.GLAccountType = _GLAccountType.GLAccountType
  association [0..1]                                           to I_FinancialAccountType         as _OffsettingAccountType         on  $projection.OffsettingAccountType = _OffsettingAccountType.FinancialAccountType
  association [0..*]                                           to I_FinancialAccountTypeText     as _OffsettingAccountTypeText     on  $projection.OffsettingAccountType = _OffsettingAccountTypeText.FinancialAccountType
  association [0..1]                                           to I_GLAccountInChartOfAccounts   as _AlternativeGLAccount          on  $projection.CountryChartOfAccounts = _AlternativeGLAccount.ChartOfAccounts
                                                                                                                                   and $projection.AlternativeGLAccount   = _AlternativeGLAccount.GLAccount
  association [0..*]                                           to I_GLAccountText                as _AlternativeGLAccountText      on  $projection.CountryChartOfAccounts = _AlternativeGLAccountText.ChartOfAccounts
                                                                                                                                   and $projection.AlternativeGLAccount   = _AlternativeGLAccountText.GLAccount
  //association[0..1] to I_GLAccountInChartOfAccounts   as _SenderGLAccount               on $projection.ChartOfAccounts                = _SenderGLAccount.ChartOfAccounts and
  //                                                                                         $projection.SenderGLAccount                = _SenderGLAccount.GLAccount
  // old association kept for compatibility. DO NOT USE
  association [0..1]                                           to I_GLAccountInChartOfAccounts   as _OffsettingAccount             on  $projection.ChartOfAccounts   = _OffsettingAccount.ChartOfAccounts
                                                                                                                                   and $projection.OffsettingAccount = _OffsettingAccount.GLAccount
  association [0..1]                                           to I_OffsettingAccount            as _OffsettingAccountText         on  $projection.OffsettingChartOfAccounts = _OffsettingAccountText.ChartOfAccounts
                                                                                                                                   and $projection.OffsettingAccountType     = _OffsettingAccountText.OffsettingAccountType
                                                                                                                                   and $projection.OffsettingAccount         = _OffsettingAccountText.OffsettingAccount

  association [0..1]                                           to I_OffsettingAccount            as _OffsettingAccountWithBP       on  $projection.OffsettingChartOfAccounts = _OffsettingAccountWithBP.ChartOfAccounts
                                                                                                                                   and $projection.OffsettingAccountType     = _OffsettingAccountWithBP.OffsettingAccountType
                                                                                                                                   and $projection.OffsettingAccount         = _OffsettingAccountWithBP.OffsettingAccount

  association [0..1]                                           to I_ChartOfAccounts              as _OffsettingChartOfAccounts     on  $projection.OffsettingChartOfAccounts = _OffsettingChartOfAccounts.ChartOfAccounts
  association [0..*]                                           to I_ChartOfAccountsText          as _OffsettingChartOfAccountsText on  $projection.OffsettingChartOfAccounts = _OffsettingChartOfAccountsText.ChartOfAccounts
  association [0..1]                                           to I_ChartOfAccounts              as _CountryChartOfAccounts        on  $projection.CountryChartOfAccounts = _CountryChartOfAccounts.ChartOfAccounts
  association [0..*]                                           to I_ChartOfAccountsText          as _CountryChartOfAccountsText    on  $projection.CountryChartOfAccounts = _CountryChartOfAccountsText.ChartOfAccounts

  association [0..1]                                           to I_PurchasingDocument           as _PurchasingDocument            on  $projection.PurchasingDocument = _PurchasingDocument.PurchasingDocument
  association [0..1]                                           to I_PurchasingDocumentItem       as _PurchasingDocumentItem        on  $projection.PurchasingDocument     = _PurchasingDocumentItem.PurchasingDocument
                                                                                                                                   and $projection.PurchasingDocumentItem = _PurchasingDocumentItem.PurchasingDocumentItem
  association [0..1]                                           to I_SpecialGLCode                as _SpecialGLCode                 on  $projection.SpecialGLCode        = _SpecialGLCode.SpecialGLCode
                                                                                                                                   and $projection.FinancialAccountType = _SpecialGLCode.FinancialAccountType
  association [0..*]                                           to I_TaxCode                      as _TaxCode                       on  $projection.TaxCode = _TaxCode.TaxCode
  //above solution for association to I_TaxCode not supported. TaxCalculationProcedure required as additional key field to make TaxCode unique
  //association[0..1] to I_TaxCode                      as _TaxCode                       on $projection.TaxCode = _TaxCode.TaxCode and
  //                                                                                         $projection._Company_Country.TaxCalculationProcedure = _TaxCode.TaxCalculationProcedure

  association [0..1]                                           to I_Housebank                    as _HouseBank                     on  $projection.CompanyCode = _HouseBank.CompanyCode
                                                                                                                                   and $projection.HouseBank   = _HouseBank.HouseBank

  // the following association is wrong and will be deprecated
  association [1..1]                                           to I_AccountingDocument           as _ClearingAccountingDocument    on  $projection.CompanyCode                = _ClearingAccountingDocument.CompanyCode
                                                                                                                                   and $projection.FiscalYear                 = _ClearingAccountingDocument.FiscalYear
                                                                                                                                   and $projection.ClearingAccountingDocument = _ClearingAccountingDocument.AccountingDocument

  association [0..1]                                           to I_FiscalYearForCompanyCode     as _ClearingJrnlEntryFiscalYear   on  $projection.ClearingJournalEntryFiscalYear = _ClearingJrnlEntryFiscalYear.FiscalYear
                                                                                                                                   and $projection.CompanyCode                    = _ClearingJrnlEntryFiscalYear.CompanyCode
  association [0..1]                                           to I_JournalEntry                 as _ClearingJournalEntry          on  $projection.CompanyCode                    = _ClearingJournalEntry.CompanyCode
                                                                                                                                   and $projection.ClearingJournalEntryFiscalYear = _ClearingJournalEntry.FiscalYear
                                                                                                                                   and $projection.ClearingJournalEntry           = _ClearingJournalEntry.AccountingDocument

  association [0..1]                                           to I_MasterFixedAsset             as _MasterFixedAsset              on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                                                                   and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [0..1]                                           to I_MasterFixedAsset             as _GroupMasterFixedAsset         on  $projection.CompanyCode           = _GroupMasterFixedAsset.CompanyCode
                                                                                                                                   and $projection.GroupMasterFixedAsset = _GroupMasterFixedAsset.MasterFixedAsset
  association [0..1]                                           to I_MasterFixedAsset             as _GroupMasterFixedAssetText     on  $projection.CompanyCode           = _GroupMasterFixedAssetText.CompanyCode
                                                                                                                                   and $projection.GroupMasterFixedAsset = _GroupMasterFixedAssetText.MasterFixedAsset
  association [0..1]                                           to I_MasterFixedAsset             as _MasterFixedAssetText          on  $projection.CompanyCode      = _MasterFixedAssetText.CompanyCode
                                                                                                                                   and $projection.MasterFixedAsset = _MasterFixedAssetText.MasterFixedAsset
  association [0..1]                                           to I_FixedAsset                   as _FixedAsset                    on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                                                                                   and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                                                                   and $projection.FixedAsset       = _FixedAsset.FixedAsset
  association [0..1]                                           to I_FixedAsset                   as _GroupFixedAsset               on  $projection.CompanyCode           = _GroupFixedAsset.CompanyCode
                                                                                                                                   and $projection.GroupMasterFixedAsset = _GroupFixedAsset.MasterFixedAsset
                                                                                                                                   and $projection.GroupFixedAsset       = _GroupFixedAsset.FixedAsset
  association [0..1]                                           to I_FixedAsset                   as _GroupFixedAssetText           on  $projection.CompanyCode           = _GroupFixedAssetText.CompanyCode
                                                                                                                                   and $projection.GroupMasterFixedAsset = _GroupFixedAssetText.MasterFixedAsset
                                                                                                                                   and $projection.GroupFixedAsset       = _GroupFixedAssetText.FixedAsset
  association [0..1]                                           to I_FixedAsset                   as _FixedAssetText                on  $projection.CompanyCode      = _FixedAssetText.CompanyCode
                                                                                                                                   and $projection.MasterFixedAsset = _FixedAssetText.MasterFixedAsset
                                                                                                                                   and $projection.FixedAsset       = _FixedAssetText.FixedAsset
  association [0..1]                                           to I_BusinessProcess              as _BusinessProcess               on  $projection.ControllingArea = _BusinessProcess.ControllingArea
                                                                                                                                   and $projection.BusinessProcess = _BusinessProcess.BusinessProcess
  association [0..*]                                           to I_BusinessProcessText          as _BusinessProcessText           on  $projection.ControllingArea = _BusinessProcessText.ControllingArea
                                                                                                                                   and $projection.BusinessProcess = _BusinessProcessText.BusinessProcess
  //association[0..1] to I_ControllingObject            as _CostObject                    on $projection.CostObject                     = _CostObject.ControllingObject
  association [0..*]                                           to I_CostCenterActivityType       as _PartnerCostCtrActivityType    on  $projection.ControllingArea            = _PartnerCostCtrActivityType.ControllingArea
                                                                                                                                   and $projection.PartnerCostCtrActivityType = _PartnerCostCtrActivityType.CostCtrActivityType

  association [0..1]                                           to I_InternalOrder                as _PartnerOrder                  on  $projection.PartnerOrder = _PartnerOrder.InternalOrder
  association [0..1]                                           to I_InternalOrder                as _PartnerOrderText              on  $projection.PartnerOrder = _PartnerOrderText.InternalOrder
  association [0..1]                                           to I_Order                        as _PartnerOrder_2                on  $projection.PartnerOrder_2 = _PartnerOrder_2.OrderID
  association [0..1]                                           to I_Order                        as _PartnerOrderText_2            on  $projection.PartnerOrder_2 = _PartnerOrderText_2.OrderID

  association [0..1]                                           to I_OrderCategory                as _PartnerOrderCategory          on  $projection.PartnerOrderCategory = _PartnerOrderCategory.OrderCategory

  association [0..1]                                           to I_SalesDocument                as _PartnerSalesDocument          on  $projection.PartnerSalesDocument = _PartnerSalesDocument.SalesDocument
  association [0..1]                                           to I_SalesDocumentItem            as _PartnerSalesDocumentItem      on  $projection.PartnerSalesDocument     = _PartnerSalesDocumentItem.SalesDocument
                                                                                                                                   and $projection.PartnerSalesDocumentItem = _PartnerSalesDocumentItem.SalesDocumentItem
  association [0..1]                                           to I_BusinessProcess              as _PartnerBusinessProcess        on  $projection.ControllingArea        = _PartnerBusinessProcess.ControllingArea
                                                                                                                                   and $projection.PartnerBusinessProcess = _PartnerBusinessProcess.BusinessProcess
  association [0..*]                                           to I_BusinessProcessText          as _PartnerBusinessProcessText    on  $projection.ControllingArea        = _PartnerBusinessProcessText.ControllingArea
                                                                                                                                   and $projection.PartnerBusinessProcess = _PartnerBusinessProcessText.BusinessProcess
  association [0..1]                                           to I_BillingDocumentType          as _BillingDocumentType           on  $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

  association [0..1]                                           to I_SalesOrganization            as _SalesOrganization             on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1]                                           to I_DistributionChannel          as _DistributionChannel           on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1]                                           to I_Division                     as _Division                      on  $projection.OrganizationDivision = _Division.Division

  association [0..1]                                           to I_Material                     as _SoldMaterial                  on  $projection.SoldMaterial = _SoldMaterial.Material //do not use any longer, use _SoldProduct
  association [0..1]                                           to I_Product                      as _SoldProduct                   on  $projection.SoldProduct = _SoldProduct.Product
  association [0..*]                                           to I_ProductDescription           as _SoldProductText               on  $projection.SoldProduct = _SoldProductText.Product

  association [0..1]                                           to I_Fund                         as _Fund                          on  $projection.FinancialManagementArea = _Fund.FinancialManagementArea
                                                                                                                                   and $projection.Fund                    = _Fund.Fund
  association [0..*]                                           to I_FundText                     as _FundText                      on  $projection.FinancialManagementArea = _FundText.FinancialManagementArea
                                                                                                                                   and $projection.Fund                    = _FundText.Fund
  association [0..1]                                           to I_Fund                         as _PartnerFund                   on  $projection.FinancialManagementArea = _PartnerFund.FinancialManagementArea
                                                                                                                                   and $projection.PartnerFund             = _PartnerFund.Fund
  association [0..*]                                           to I_FundText                     as _PartnerFundText               on  $projection.FinancialManagementArea = _PartnerFundText.FinancialManagementArea
                                                                                                                                   and $projection.PartnerFund             = _PartnerFundText.Fund
  association [0..*]                                           to I_FundsCenter                  as _FundsCenter                   on  $projection.FinancialManagementArea = _FundsCenter.FinancialManagementArea
                                                                                                                                   and $projection.FundsCenter             = _FundsCenter.FundsCenter

  association [0..1]                                           to I_InventoryValuationType       as _InventorySpecialStockValnType on  $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventoryValuationType
  association [0..1]                                           to I_InvtrySpecialStockValnType   as _InventorySpclStockValnType    on  $projection.InvtrySpecialStockValnType_2 = _InventorySpclStockValnType.InventorySpecialStockValnType
  association [0..1]                                           to I_InventorySpecialStockType    as _InventorySpecialStockType     on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType

  association [0..1]                                           to I_SalesDocument                as _InventorySpclStkSalesDocument on  $projection.InventorySpclStkSalesDocument = _InventorySpclStkSalesDocument.SalesDocument

  association [0..1]                                           to I_SalesDocumentItem            as _InventorySpclStkSalesDocItm   on  $projection.InventorySpclStkSalesDocument = _InventorySpclStkSalesDocItm.SalesDocument
                                                                                                                                   and $projection.InventorySpclStkSalesDocItm   = _InventorySpclStkSalesDocItm.SalesDocumentItem

  association [0..1]                                           to I_Supplier                     as _InventorySpecialStockSupplier on  $projection.InventorySpecialStockSupplier = _InventorySpecialStockSupplier.Supplier
  association [0..1]                                           to I_Supplier                     as _InvtrySpclStockSupplierText   on  $projection.InventorySpecialStockSupplier = _InvtrySpclStockSupplierText.Supplier

  association [0..1]                                           to I_InventoryValuationType       as _InventoryValuationType        on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType

  association [0..1]                                           to I_ControllingDebitCreditCode   as _ControllingDebitCreditCode    on  $projection.ControllingDebitCreditCode = _ControllingDebitCreditCode.ControllingDebitCreditCode
  association [0..1]                                           to I_ControllingObject            as _OriginSenderObject            on  $projection.OriginSenderObject = _OriginSenderObject.ControllingObject

  association [0..1]                                           to I_ControllingObjectClass       as _ControllingObjectClass        on  $projection.ControllingObjectClass = _ControllingObjectClass.ControllingObjectClass

  association [0..1]                                           to I_Partnercompany               as _PartnerCompany                on  $projection.PartnerCompany = _PartnerCompany.PartnerCompany

  association [0..1]                                           to I_ControllingObjectClass       as _PartnerControllingObjectClass on  $projection.PartnerControllingObjectClass = _PartnerControllingObjectClass.ControllingObjectClass

  association [0..*]                                           to I_CostCenter                   as _OriginCostCenter              on  $projection.ControllingArea  = _OriginCostCenter.ControllingArea
                                                                                                                                   and $projection.OriginCostCenter = _OriginCostCenter.CostCenter

  association [0..*]                                           to I_ProfitCenter                 as _OriginProfitCenter            on  $projection.ControllingArea    = _OriginProfitCenter.ControllingArea
                                                                                                                                   and $projection.OriginProfitCenter = _OriginProfitCenter.ProfitCenter
  association [0..*]                                           to I_CostCenterActivityType       as _CostCtrActivityType           on  $projection.ControllingArea     = _CostCtrActivityType.ControllingArea
                                                                                                                                   and $projection.CostCtrActivityType = _CostCtrActivityType.CostCtrActivityType

  association [0..*]                                           to I_CostCenterActivityType       as _OriginCostCtrActivityType     on  $projection.ControllingArea           = _OriginCostCtrActivityType.ControllingArea
                                                                                                                                   and $projection.OriginCostCtrActivityType = _OriginCostCtrActivityType.CostCtrActivityType

  association [0..1]                                           to I_OrderCategory                as _OrderCategory                 on  $projection.OrderCategory = _OrderCategory.OrderCategory

  //association[0..1] to I_NetworkActivity             as _RelatedNetworkActivity         on $projection.ProjectNetwork                =  _RelatedNetworkActivity.ProjectNetwork and
  //                                                                                          $projection.RelatedNetworkActivity        =  _RelatedNetworkActivity.NetworkActivity

  //association[0..1] to I_NetworkActivity             as _PartnerProjectNetworkActivity  on $projection.PartnerProjectNetwork         =  _PartnerProjectNetworkActivity.ProjectNetwork and
  //                                                                                          $projection.PartnerProjectNetworkActivity =  _PartnerProjectNetworkActivity.NetworkActivity


  association [0..1]                                           to I_MovementCategory             as _MovementCategory              on  $projection.AssetAcctTransClassfctn = _MovementCategory.AssetAcctTransClassfctn
  association [0..1]                                           to I_AssetTransactionType         as _AssetTransactionType          on  $projection.AssetTransactionType = _AssetTransactionType.AssetTransactionType

  association [0..1]                                           to I_BudgetPeriod                 as _BudgetPeriod                  on  $projection.BudgetPeriod = _BudgetPeriod.BudgetPeriod
  association [0..*]                                           to I_BudgetPeriodText             as _BudgetPeriodText              on  $projection.BudgetPeriod = _BudgetPeriodText.BudgetPeriod
  association [0..*]                                           to I_CostOriginGroup              as _CostOriginGroup               on  $projection.ControllingArea = _CostOriginGroup.ControllingArea
                                                                                                                                   and
                                                                                                                                       // not contained in view                                                                  $projection.CostOriginType                = _CostOriginGroup.CostOriginType and
                                                                                                                                       $projection.CostOriginGroup = _CostOriginGroup.CostOriginGroup
  association [0..1]                                           to I_Country                      as _CustomerSupplierCountry       on  $projection.CustomerSupplierCountry = _CustomerSupplierCountry.Country
  association [0..1]                                           to I_CustomerSupplierIndustry     as _CustomerSupplierIndustry      on  $projection.CustomerSupplierIndustry = _CustomerSupplierIndustry.Industry
  association [0..1]                                           to I_SalesDistrict                as _SalesDistrict                 on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  association [0..1]                                           to I_Customer                     as _BillToParty                   on  $projection.BillToParty = _BillToParty.Customer
  association [0..1]                                           to I_Customer                     as _ShipToParty                   on  $projection.ShipToParty = _ShipToParty.Customer
  association [0..1]                                           to I_FinancialManagementArea      as _FinancialManagementArea       on  $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea
  association [0..*]                                           to I_FinancialManagementAreaText  as _FinancialManagementAreaText   on  $projection.FinancialManagementArea = _FinancialManagementAreaText.FinancialManagementArea
  //association[0..1] to I_FundedProgram                as _FundedProgram                  on $projection.FinancialManagementArea       = _FundedProgram.FinancialManagementArea and
  //                                                                                          $projection.FundedProgram                 = _FundedProgram.FundedProgram

  association [0..1]                                           to I_HouseBankAccount             as _HouseBankAccount              on  $projection.CompanyCode      = _HouseBankAccount.CompanyCode
                                                                                                                                   and $projection.HouseBank        = _HouseBankAccount.HouseBank
                                                                                                                                   and $projection.HouseBankAccount = _HouseBankAccount.HouseBankAccount
  association [0..*]                                           to I_HouseBankAccountText         as _HouseBankAccountText          on  $projection.CompanyCode      = _HouseBankAccountText.CompanyCode
                                                                                                                                   and $projection.HouseBank        = _HouseBankAccountText.HouseBank
                                                                                                                                   and $projection.HouseBankAccount = _HouseBankAccountText.HouseBankAccount

  association [0..1]                                           to I_LogicalSystem                as _LogicalSystem                 on  $projection.LogicalSystem = _LogicalSystem.LogicalSystem

  association [0..1]                                           to I_OperatingConcern             as _OperatingConcern              on  $projection.OperatingConcern = _OperatingConcern.OperatingConcern
  association [0..*]                                           to I_OperatingConcernText         as _OperatingConcernText          on  $projection.OperatingConcern = _OperatingConcernText.OperatingConcern

  association [0..1]                                           to I_ProjectNetwork               as _ProjectNetwork                on  $projection.ProjectNetwork = _ProjectNetwork.ProjectNetwork
  association [0..1]                                           to I_ProjectNetwork               as _ProjectNetworkText            on  $projection.ProjectNetwork = _ProjectNetworkText.ProjectNetwork

  association [0..1]                                           to I_Purreqvaluationarea          as _PurReqValuationArea           on  $projection.ValuationArea = _PurReqValuationArea.ValuationArea

  association [0..1]                                           to I_WorkCenter                   as _WorkCenter                    on  $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
                                                                                                                                   and _WorkCenter.WorkCenterTypeCode   = 'A'

  association [0..1]                                           to I_BillableControl              as _BillableControl               on  $projection.BillableControl = _BillableControl.BillableControl

  association [0..1]                                           to I_ConditionContract            as _ConditionContract             on  $projection.ConditionContract = _ConditionContract.ConditionContract

  association [0..1]                                           to I_MaintenanceOrder             as _MaintenanceOrder              on  $projection.OrderID       = _MaintenanceOrder.MaintenanceOrder
                                                                                                                                   and $projection.OrderCategory = '30'
  association [0..1]                                           to I_MaintenanceOrderOperation    as _MaintenanceOrderOperation     on  $projection.OrderID        = _MaintenanceOrderOperation.MaintenanceOrder
                                                                                                                                   and $projection.OrderOperation = _MaintenanceOrderOperation.MaintenanceOrderOperation
                                                                                                                                   and $projection.OrderCategory  = '30'
  association [0..1]                                           to I_MaintenanceOrderSubOperation as _MaintenanceOrderSubOperation  on  $projection.OrderID           = _MaintenanceOrderSubOperation.MaintenanceOrder
                                                                                                                                   and $projection.OrderOperation    = _MaintenanceOrderSubOperation.MaintenanceOrderOperation
                                                                                                                                   and $projection.OrderSuboperation = _MaintenanceOrderSubOperation.MaintenanceOrderSubOperation

  association [0..1]                                           to I_Equipment                    as _Equipment                     on  $projection.Equipment = _Equipment.Equipment
  association [0..*]                                           to I_EquipmentText                as _EquipmentText                 on  $projection.Equipment = _EquipmentText.Equipment

  association [0..1]                                           to I_FunctionalLocation           as _FunctionalLocation            on  $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation
  association [0..*]                                           to I_FunctionalLocationText       as _FunctionalLocationText        on  $projection.FunctionalLocation = _FunctionalLocationText.FunctionalLocation

  association [0..1]                                           to I_Product                      as _Assembly                      on  $projection.Assembly = _Assembly.Product
  association [0..*]                                           to I_ProductDescription           as _AssemblyText                  on  $projection.Assembly = _AssemblyText.Product

  association [0..1]                                           to I_MaintenanceActivityType      as _MaintenanceActivityType       on  $projection.MaintenanceActivityType = _MaintenanceActivityType.MaintenanceActivityType
  association [0..*]                                           to I_MaintenanceActivityTypeText  as _MaintenanceActivityTypeText   on  $projection.MaintenanceActivityType = _MaintenanceActivityTypeText.MaintenanceActivityType

  association [0..1]                                           to I_MaintOrdPlngDegreeCode       as _MaintOrdPlngDegreeCode        on  $projection.MaintenanceOrderPlanningCode = _MaintOrdPlngDegreeCode.MaintenanceOrderPlanningCode

  association [0..1]                                           to I_PMNotificationPriorityType   as _PMNotificationPriorityType    on  $projection.MaintPriorityType = _PMNotificationPriorityType.MaintPriorityType

  association [0..1]                                           to I_PMNotificationPriority       as _PMNotificationPriority        on  $projection.MaintPriority     = _PMNotificationPriority.MaintPriority
                                                                                                                                   and $projection.MaintPriorityType = _PMNotificationPriority.MaintPriorityType

  association [0..1]                                           to I_LogisticsOrder               as _SuperiorOrder                 on  $projection.SuperiorOrder = _SuperiorOrder.OrderID

  // Do NOT use _GLAccountText  (it is wrong) ;;  use _GLAccountTxt
  association [0..*]                                           to I_GLAccountText                as _GLAccountText                 on  $projection.GLAccount = _GLAccountText.GLAccount

  association [0..*]                                           to I_GLAccountText                as _GLAccountTxt                  on  $projection.ChartOfAccounts = _GLAccountTxt.ChartOfAccounts
                                                                                                                                   and $projection.GLAccount       = _GLAccountTxt.GLAccount

  association [0..1]                                           to I_WorkPackage                  as _WorkPackageText               on  $projection.WorkPackage = _WorkPackageText.WorkPackage
  association [0..1]                                           to I_WorkPackage                  as _WorkPackage                   on  $projection.WorkPackage = _WorkPackage.WorkPackage
  association [0..1]                                           to I_WorkPackageWorkItem          as _WorkPackageWorkItem           on  $projection.WorkItem    = _WorkPackageWorkItem.WorkItem
                                                                                                                                   and $projection.WorkPackage = _WorkPackageWorkItem.WorkPackage
  association [0..1]                                           to I_WorkPackageWorkItem          as _WorkPackageWorkItemText       on  $projection.WorkItem    = _WorkPackageWorkItemText.WorkItem
                                                                                                                                   and $projection.WorkPackage = _WorkPackageWorkItemText.WorkPackage

  association [0..1]                                           to I_TimeSheetOvertimeCat         as _TimeSheetOvertimeCat          on  $projection.TimeSheetOvertimeCategory = _TimeSheetOvertimeCat.TimeSheetOvertimeCategory
  association [0..1]                                           to I_ServiceDocumentType          as _ServiceDocumentType           on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType

  association [0..1]                                           to I_SrvcDocByDocumentType        as _ServiceDocument               on  $projection.ServiceDocumentType = _ServiceDocument.ServiceDocumentType
                                                                                                                                   and $projection.ServiceDocument     = _ServiceDocument.ServiceDocument

  association [0..1]                                           to I_SrvcDocItemByDocumentType    as _ServiceDocumentItem           on  $projection.ServiceDocumentType = _ServiceDocumentItem.ServiceDocumentType
                                                                                                                                   and $projection.ServiceDocument     = _ServiceDocumentItem.ServiceDocument
                                                                                                                                   and $projection.ServiceDocumentItem = _ServiceDocumentItem.ServiceDocumentItem

  association [0..1]                                           to I_ServiceDocumentType          as _ServiceContractType           on  $projection.ServiceContractType = _ServiceContractType.ServiceDocumentType

  association [0..1]                                           to I_SrvcDocByDocumentType        as _ServiceContract               on  $projection.ServiceContractType = _ServiceContract.ServiceDocumentType
                                                                                                                                   and $projection.ServiceContract     = _ServiceContract.ServiceDocument

  association [0..1]                                           to I_SrvcDocItemByDocumentType    as _ServiceContractItem           on  $projection.ServiceContractType = _ServiceContractItem.ServiceDocumentType
                                                                                                                                   and $projection.ServiceContract     = _ServiceContractItem.ServiceDocument
                                                                                                                                   and $projection.ServiceContractItem = _ServiceContractItem.ServiceDocumentItem

  association [0..1]                                           to I_ServiceDocumentType          as _PartnerServiceDocumentType    on  $projection.PartnerServiceDocumentType = _PartnerServiceDocumentType.ServiceDocumentType

  association [0..1]                                           to I_SrvcDocByDocumentType        as _PartnerServiceDocument        on  $projection.PartnerServiceDocumentType = _PartnerServiceDocument.ServiceDocumentType
                                                                                                                                   and $projection.PartnerServiceDocument     = _PartnerServiceDocument.ServiceDocument

  association [0..1]                                           to I_SrvcDocItemByDocumentType    as _PartnerServiceDocumentItem    on  $projection.PartnerServiceDocumentType = _PartnerServiceDocumentItem.ServiceDocumentType
                                                                                                                                   and $projection.PartnerServiceDocument     = _PartnerServiceDocumentItem.ServiceDocument
                                                                                                                                   and $projection.PartnerServiceDocumentItem = _PartnerServiceDocumentItem.ServiceDocumentItem

  association [0..1]                                           to I_AccrualObjectType            as _AccrualObjectType             on  $projection.AccrualObjectType = _AccrualObjectType.AccrualObjectType

  association [0..1]                                           to I_AccrualObject                as _AccrualObject                 on  $projection.AccrualObjectType             = _AccrualObject.AccrualObjectType
                                                                                                                                   and _AccrualObject.AccrualObjectLogicalSystem = ''
                                                                                                                                   and $projection.CompanyCode                   = _AccrualObject.CompanyCode
                                                                                                                                   and $projection.AccrualObject                 = _AccrualObject.AccrualObject

  association [0..1]                                           to I_AccrualSubObject             as _AccrualSubobject              on  $projection.AccrualObjectType                = _AccrualSubobject.AccrualObjectType
                                                                                                                                   and _AccrualSubobject.AccrualObjectLogicalSystem = ''
                                                                                                                                   and $projection.CompanyCode                      = _AccrualSubobject.CompanyCode
                                                                                                                                   and $projection.AccrualObject                    = _AccrualSubobject.AccrualObject
                                                                                                                                   and $projection.AccrualSubobject                 = _AccrualSubobject.AccrualSubobject

  association [0..1]                                           to I_AccrualItemType              as _AccrualItemType               on  $projection.AccrualObjectType = _AccrualItemType.AccrualObjectType
                                                                                                                                   and $projection.AccrualItemType   = _AccrualItemType.AccrualItemType

  association [0..1]                                           to I_CreditRiskClass              as _CreditRiskClass               on  $projection.CreditRiskClass = _CreditRiskClass.CreditRiskClass

  association [0..1]                                           to I_FinValuationObjectType       as _FinValuationObjectType        on  $projection.FinancialValuationObjectType = _FinValuationObjectType.FinancialValuationObjectType

  association [0..*]                                           to I_SemTagGLAccount              as _SemTagGLAccount               on  $projection.GLAccount       = _SemTagGLAccount.GLAccount
                                                                                                                                   and $projection.ChartOfAccounts = _SemTagGLAccount.ChartOfAccounts

  association [0..1]                                           to I_SponsoredClassCore           as _SponsoredClass                on  $projection.SponsoredClass = _SponsoredClass.SponsoredClass

  association [0..1]                                           to I_SponsoredProgramCore         as _SponsoredProgram              on  $projection.SponsoredProgram = _SponsoredProgram.SponsoredProgram

  association of exact one to exact one                           E_JournalEntryItem             as _Extension                     on  $projection.SourceLedger       = _Extension.SourceLedger
                                                                                                                                   and $projection.CompanyCode        = _Extension.CompanyCode
                                                                                                                                   and $projection.FiscalYear         = _Extension.FiscalYear
                                                                                                                                   and $projection.AccountingDocument = _Extension.AccountingDocument
                                                                                                                                   and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem

{
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key I_GLAccountLineItemRawData.SourceLedger,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key I_GLAccountLineItemRawData.CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key I_GLAccountLineItemRawData.FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key I_GLAccountLineItemRawData.AccountingDocument,
  key I_GLAccountLineItemRawData.LedgerGLLineItem,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_LedgerStdVH',
                     element: 'Ledger' }
        }]
      @ObjectModel.foreignKey.association: '_Ledger'
  key I_CoCodeLedgerSourceLedger.Ledger,

      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      @Semantics.fiscal.year: true
      I_GLAccountLineItemRawData.LedgerFiscalYear,
      I_GLAccountLineItemRawData.GLRecordType,
      I_GLAccountLineItemRawData.JrnlEntrAltvFYConsecutiveID,

      // Test workaround
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      I_GLAccountLineItemRawData.ChartOfAccounts,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      I_GLAccountLineItemRawData.ControllingArea,

      ///////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
      ///////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      I_GLAccountLineItemRawData.FinancialTransactionType,
      I_GLAccountLineItemRawData.GLBusinessTransactionType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      I_GLAccountLineItemRawData.BusinessTransactionCategory,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      I_GLAccountLineItemRawData.BusinessTransactionType,
      I_GLAccountLineItemRawData.FinancialClosingStep,
      I_GLAccountLineItemRawData.ControllingBusTransacType,
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      I_GLAccountLineItemRawData.ReferenceDocumentType,
      @ObjectModel.foreignKey.association: '_LogicalSystem'
      I_GLAccountLineItemRawData.LogicalSystem,
      I_GLAccountLineItemRawData.ReferenceDocumentContext,
      I_GLAccountLineItemRawData.ReferenceDocument,
      I_GLAccountLineItemRawData.ReferenceDocumentItem,
      I_GLAccountLineItemRawData.ReferenceDocumentItemGroup,
      I_GLAccountLineItemRawData.TransactionSubitem,
      I_GLAccountLineItemRawData.OffsettingLedgerGLLineItem,
      I_GLAccountLineItemRawData.IsReversal,
      I_GLAccountLineItemRawData.IsReversed,
      //XTRUEREV,
      //AWTYP_REV,
      I_GLAccountLineItemRawData.ReversalReferenceDocumentCntxt,
      I_GLAccountLineItemRawData.ReversalReferenceDocument,
      I_GLAccountLineItemRawData.ReversalTransactionSubitem,
      I_GLAccountLineItemRawData.IsSettlement,
      I_GLAccountLineItemRawData.IsSettled,
      @ObjectModel.foreignKey.association: '_PredecessorReferenceDocType'
      I_GLAccountLineItemRawData.PredecessorReferenceDocType,
      I_GLAccountLineItemRawData.PredecessorReferenceDocCntxt,
      I_GLAccountLineItemRawData.PredecessorReferenceDocument,
      I_GLAccountLineItemRawData.PredecessorReferenceDocItem,
      //PREC_SUBTA,
      I_GLAccountLineItemRawData.PrdcssrJournalEntryCompanyCode,
      I_GLAccountLineItemRawData.PrdcssrJournalEntryFiscalYear,
      I_GLAccountLineItemRawData.PredecessorJournalEntry,
      I_GLAccountLineItemRawData.PredecessorJournalEntryItem,

      I_GLAccountLineItemRawData.SourceReferenceDocumentType,
      I_GLAccountLineItemRawData.SourceLogicalSystem,
      I_GLAccountLineItemRawData.SourceReferenceDocumentCntxt,
      I_GLAccountLineItemRawData.SourceReferenceDocument,
      I_GLAccountLineItemRawData.SourceReferenceDocumentItem,
      I_GLAccountLineItemRawData.SourceReferenceDocSubitem,
      I_GLAccountLineItemRawData.IsCommitment,
      I_GLAccountLineItemRawData.JrnlEntryItemObsoleteReason,
      I_GLAccountLineItemRawData.JrnlPeriodEndClosingRunLogUUID,
      I_GLAccountLineItemRawData.OrganizationalChange,
      I_GLAccountLineItemRawData.AccountingNotificationUUID,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_GLAccountStdVH',
                     element: 'GLAccount' }
        }]
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      I_GLAccountLineItemRawData.GLAccount,


      ////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' }
        }]
      @ObjectModel.foreignKey.association: '_CostCenter'
      I_GLAccountLineItemRawData.CostCenter,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProfitCenterStdVH',
                     element: 'ProfitCenter' }
        }]
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      I_GLAccountLineItemRawData.ProfitCenter,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FunctionalArea',
                     element: 'FunctionalArea' }
        }]
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      I_GLAccountLineItemRawData.FunctionalArea,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      I_GLAccountLineItemRawData.BusinessArea,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SegmentStdVH',
                     element: 'Segment' }
        }]
      @ObjectModel.foreignKey.association: '_Segment'
      I_GLAccountLineItemRawData.Segment,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' }
        }]
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      I_GLAccountLineItemRawData.PartnerCostCenter,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProfitCenterStdVH',
                     element: 'ProfitCenter' }
        }]
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      I_GLAccountLineItemRawData.PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      I_GLAccountLineItemRawData.PartnerFunctionalArea,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      I_GLAccountLineItemRawData.PartnerBusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      I_GLAccountLineItemRawData.PartnerCompany,
      I_GLAccountLineItemRawData.PartnerSegment,


      /////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_VALUE_DATA Unified Journal Entry: Value Fields
      /////////////////////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
      I_GLAccountLineItemRawData.BalanceTransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      I_GLAccountLineItemRawData.AmountInBalanceTransacCrcy,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      I_GLAccountLineItemRawData.TransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_GLAccountLineItemRawData.AmountInTransactionCurrency,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      I_GLAccountLineItemRawData.CompanyCodeCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItemRawData.AmountInCompanyCodeCurrency,

      ////////////////////////////////////
      // NEW
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      I_GLAccountLineItemRawData.GlobalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItemRawData.AmountInGlobalCurrency,

      // Functional Currency
      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      I_GLAccountLineItemRawData.FunctionalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      I_GLAccountLineItemRawData.AmountInFunctionalCurrency,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      I_GLAccountLineItemRawData.FreeDefinedCurrency1,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency1,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      I_GLAccountLineItemRawData.FreeDefinedCurrency2,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency2,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      I_GLAccountLineItemRawData.FreeDefinedCurrency3,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency3,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      I_GLAccountLineItemRawData.FreeDefinedCurrency4,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency4,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      I_GLAccountLineItemRawData.FreeDefinedCurrency5,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency5,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      I_GLAccountLineItemRawData.FreeDefinedCurrency6,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency6,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      I_GLAccountLineItemRawData.FreeDefinedCurrency7,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency7,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      I_GLAccountLineItemRawData.FreeDefinedCurrency8,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency8,
      ////////////////////////////////////

      ////////////////////////////////////
      // NEW
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItemRawData.FixedAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItemRawData.GrpValnFixedAmtInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItemRawData.PrftCtrValnFxdAmtInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItemRawData.TotalPriceVarcInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItemRawData.GrpValnTotPrcVarcInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItemRawData.PrftCtrValnTotPrcVarcInGlbCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItemRawData.FixedPriceVarcInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItemRawData.GrpValnFixedPrcVarcInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItemRawData.PrftCtrValnFxdPrcVarcInGlbCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItemRawData.FixedAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_GLAccountLineItemRawData.FixedAmountInTransCrcy,

      ////////////////////////////////////


      I_GLAccountLineItemRawData.ControllingObjectCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      I_GLAccountLineItemRawData.AmountInObjectCurrency,

      I_GLAccountLineItemRawData.GrantCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GrantCurrency'} }
      I_GLAccountLineItemRawData.AmountInGrantCurrency,


      @ObjectModel.foreignKey.association: '_BaseUnit'
      I_GLAccountLineItemRawData.BaseUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      I_GLAccountLineItemRawData.Quantity,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      I_GLAccountLineItemRawData.FixedQuantity,

      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      I_GLAccountLineItemRawData.CostSourceUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      I_GLAccountLineItemRawData.ValuationQuantity,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      I_GLAccountLineItemRawData.ValuationFixedQuantity,

      @ObjectModel.foreignKey.association: '_ReferenceQuantityUnit'
      I_GLAccountLineItemRawData.ReferenceQuantityUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
      I_GLAccountLineItemRawData.ReferenceQuantity,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
      I_GLAccountLineItemRawData.AdditionalQuantity1Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }
      I_GLAccountLineItemRawData.AdditionalQuantity1,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
      I_GLAccountLineItemRawData.AdditionalQuantity2Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} }
      I_GLAccountLineItemRawData.AdditionalQuantity2,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
      I_GLAccountLineItemRawData.AdditionalQuantity3Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }
      I_GLAccountLineItemRawData.AdditionalQuantity3,


      /////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      I_GLAccountLineItemRawData.DebitCreditCode,
      @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
      @Semantics.fiscal.period: true
      I_GLAccountLineItemRawData.FiscalPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      I_GLAccountLineItemRawData.FiscalYearVariant,
      @ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant'
      @Semantics.fiscal.yearPeriod: true
      I_GLAccountLineItemRawData.FiscalYearPeriod,
      I_GLAccountLineItemRawData.PostingDate,
      I_GLAccountLineItemRawData.DocumentDate,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      I_GLAccountLineItemRawData.AccountingDocumentType,
      I_GLAccountLineItemRawData.AccountingDocumentItem,
      I_GLAccountLineItemRawData.AssignmentReference,
      @ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
      I_GLAccountLineItemRawData.AccountingDocumentCategory,
      I_GLAccountLineItemRawData.JournalEntryItemCategory,
      @ObjectModel.foreignKey.association: '_PostingKey'
      I_GLAccountLineItemRawData.PostingKey,
      I_GLAccountLineItemRawData.TransactionTypeDetermination,
      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      I_GLAccountLineItemRawData.SubLedgerAcctLineItemType,
      //      @ObjectModel.foreignKey.association: '_User'
      I_GLAccountLineItemRawData.AccountingDocCreatedByUser,
      I_GLAccountLineItemRawData.LastChangeDateTime,
      I_GLAccountLineItemRawData.CreationDateTime,
      -- cast(div(timestamp, 1000000) as FIS_TIMESTAMP) as CreationDate,
      I_GLAccountLineItemRawData.CreationDate,
      @ObjectModel.foreignKey.association: '_EliminationProfitCenter'
      I_GLAccountLineItemRawData.EliminationProfitCenter,
      I_GLAccountLineItemRawData.OriginObjectType,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      I_GLAccountLineItemRawData.GLAccountType,
      @ObjectModel.foreignKey.association: '_AlternativeGLAccount'
      I_GLAccountLineItemRawData.AlternativeGLAccount,
      @ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
      I_GLAccountLineItemRawData.CountryChartOfAccounts,

      I_GLAccountLineItemRawData.ItemIsSplit,


      /////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FINCS   Universal Journal Entry: Fields for Group Reporting
      ////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_ConsolidationUnit'
      I_GLAccountLineItemRawData.ConsolidationUnit,
      @ObjectModel.foreignKey.association: '_PartnerConsolidationUnit'
      I_GLAccountLineItemRawData.PartnerConsolidationUnit,
      @ObjectModel.foreignKey.association: '_Company'
      I_GLAccountLineItemRawData.Company,
      @ObjectModel.foreignKey.association: '_ConsolidationChartOfAccounts'
      I_GLAccountLineItemRawData.ConsolidationChartOfAccounts,
      @ObjectModel.foreignKey.association: '_CnsldtnFinancialStatementItem'
      I_GLAccountLineItemRawData.CnsldtnFinancialStatementItem,
      @ObjectModel.foreignKey.association: '_CnsldtnSubitemCategory'
      I_GLAccountLineItemRawData.CnsldtnSubitemCategory,
      @ObjectModel.foreignKey.association: '_CnsldtnSubitem'
      I_GLAccountLineItemRawData.CnsldtnSubitem,


      ///////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_GEN  Unified Journal Entry: Fields for several subledgers
      //////////////////////////////////////////////////////////////////////////
      I_GLAccountLineItemRawData.InvoiceReference,
      I_GLAccountLineItemRawData.InvoiceReferenceFiscalYear,
      I_GLAccountLineItemRawData.FollowOnDocumentType,
      I_GLAccountLineItemRawData.InvoiceItemReference,
      I_GLAccountLineItemRawData.ReferencePurchaseOrderCategory,
      @ObjectModel.foreignKey.association: '_PurchasingDocument'
      I_GLAccountLineItemRawData.PurchasingDocument,
      @ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
      I_GLAccountLineItemRawData.PurchasingDocumentItem,
      I_GLAccountLineItemRawData.AccountAssignmentNumber,
      I_GLAccountLineItemRawData.DocumentItemText,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SalesDocument'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SalesDocument'
      @ObjectModel.foreignKey.association: '_SalesOrder'
      cast(I_GLAccountLineItemRawData.SalesDocument as vdm_sales_order preserving type )                                as SalesOrder,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SalesDocumentItem'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SalesDocumentItem'
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      cast(I_GLAccountLineItemRawData.SalesDocumentItem as sales_order_item preserving type )                           as SalesOrderItem,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDocumentStdVH',
                     element: 'SalesDocument' }
        }]
      @ObjectModel.foreignKey.association: '_SalesDocument'
      I_GLAccountLineItemRawData.SalesDocument,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDocumentItemStdVH',
                     element: 'SalesDocumentItem' }
        }]
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      I_GLAccountLineItemRawData.SalesDocumentItem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      @ObjectModel.foreignKey.association: '_Material'
      cast(I_GLAccountLineItemRawData.Product as matnr preserving type )                                                as Material,
      @ObjectModel.foreignKey.association: '_Product'
      I_GLAccountLineItemRawData.Product,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_PlantStdVH',
                     element: 'Plant' }
        }]
      @ObjectModel.foreignKey.association: '_Plant'
      I_GLAccountLineItemRawData.Plant,
      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_Supplier_VH',
               element: 'Supplier' }
      }]
      @ObjectModel.foreignKey.association: '_Supplier'
      I_GLAccountLineItemRawData.Supplier,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_Customer'
      I_GLAccountLineItemRawData.Customer,
      I_GLAccountLineItemRawData.ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_ConditionContract'
      I_GLAccountLineItemRawData.ConditionContract,
      
      I_GLAccountLineItemRawData.ComponentBreakdown,
      I_GLAccountLineItemRawData.CompBreakdownScaleNumerator,

      /////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FI  Unified Journal Entry: Fields for FI subledgers
      /////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      I_GLAccountLineItemRawData.FinancialAccountType,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      I_GLAccountLineItemRawData.SpecialGLCode,
      //      @ObjectModel.foreignKey.association: '_TaxCode'
      I_GLAccountLineItemRawData.TaxCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_TaxCountry'
      I_GLAccountLineItemRawData.TaxCountry,
      @ObjectModel.foreignKey.association: '_HouseBank'
      I_GLAccountLineItemRawData.HouseBank,
      @ObjectModel.foreignKey.association: '_HouseBankAccount'
      I_GLAccountLineItemRawData.HouseBankAccount,
      //      @Semantics.booleanIndicator
      I_GLAccountLineItemRawData.IsOpenItemManaged,
      I_GLAccountLineItemRawData.ClearingDate,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntryFiscalYear'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
      cast( I_GLAccountLineItemRawData.ClearingJournalEntryFiscalYear as fis_auggj_no_conv_depre preserving type )      as ClearingDocFiscalYear,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_AccountingDocumentStdVH',
                     element: 'AccountingDocument' },
          additionalBinding: [{ localElement: 'CompanyCode',
                                element: 'CompanyCode' },
                              { localElement: 'FiscalYear',
                                element: 'FiscalYear' }]
        }]
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntry'
      @ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
      cast( I_GLAccountLineItemRawData.ClearingJournalEntry as fis_augbl_depre preserving type )                        as ClearingAccountingDocument,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJrnlEntryFiscalYear'
      I_GLAccountLineItemRawData.ClearingJournalEntryFiscalYear,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_JournalEntryStdVH',
                     element: 'AccountingDocument' },
          additionalBinding: [{ localElement: 'CompanyCode',
                                element: 'CompanyCode' },
                              { localElement: 'ClearingJournalEntryFiscalYear',
                                element: 'FiscalYear' }]
        }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJournalEntry'
      I_GLAccountLineItemRawData.ClearingJournalEntry,

      I_GLAccountLineItemRawData.ValueDate,
      I_GLAccountLineItemRawData.GeneralLedgerAgingScope,
      I_GLAccountLineItemRawData.GeneralLedgerAgingIncrement,

      /////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
      /////////////////////////////////////////////////////////////////////////
      I_GLAccountLineItemRawData.AssetDepreciationArea,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      I_GLAccountLineItemRawData.MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
      I_GLAccountLineItemRawData.FixedAsset,
      I_GLAccountLineItemRawData.AssetValueDate,
      @ObjectModel.foreignKey.association: '_AssetTransactionType'
      I_GLAccountLineItemRawData.AssetTransactionType,
      @ObjectModel.foreignKey.association: '_MovementCategory'
      I_GLAccountLineItemRawData.AssetAcctTransClassfctn,
      I_GLAccountLineItemRawData.DepreciationFiscalPeriod,
      @ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'
      I_GLAccountLineItemRawData.GroupMasterFixedAsset,
      @ObjectModel.foreignKey.association: '_GroupFixedAsset'
      I_GLAccountLineItemRawData.GroupFixedAsset,
      I_GLAccountLineItemRawData.AssetClass,
      @ObjectModel.foreignKey.association: '_PartnerMasterFixedAsset'
      I_GLAccountLineItemRawData.PartnerMasterFixedAsset,
      @ObjectModel.foreignKey.association: '_PartnerFixedAsset'
      I_GLAccountLineItemRawData.PartnerFixedAsset,


      //////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_ML Unified Journal Entry: Fields for Material Ledger
      //////////////////////////////////////////////////////////////////////////
      I_GLAccountLineItemRawData.CostEstimate,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'InvtrySpecialStockValnType_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      cast( I_GLAccountLineItemRawData.InventorySpecialStockValnType as fis_invtryspclstockvalntype_d preserving type ) as InventorySpecialStockValnType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_InventorySpclStockValnType'
      I_GLAccountLineItemRawData.InventorySpecialStockValnType                                                          as InvtrySpecialStockValnType_2,

      I_GLAccountLineItemRawData.IsSupplierStockValuation,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      I_GLAccountLineItemRawData.InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'
      I_GLAccountLineItemRawData.InventorySpclStkSalesDocument, //  as InventorySpecialStockSalesDocument,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
      I_GLAccountLineItemRawData.InventorySpclStkSalesDocItm, //  as InventorySpecialStockSalesDocumentItem,
      @ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntIntID'
      I_GLAccountLineItemRawData.InvtrySpclStockWBSElmntIntID,
      @ObjectModel.foreignKey.association: '_InventorySpclStockWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'InvtrySpclStockWBSElmntIntID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntIntID'
      cast( I_GLAccountLineItemRawData.InventorySpclStockWBSElement as fis_invspstock_wbs preserving type )             as InventorySpclStockWBSElement, //  as InventorySpecialStockWBSElement,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockSupplier'
      I_GLAccountLineItemRawData.InventorySpecialStockSupplier,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      I_GLAccountLineItemRawData.InventoryValuationType,
      @ObjectModel.foreignKey.association: '_Purreqvaluationarea'
      I_GLAccountLineItemRawData.ValuationArea,

      I_GLAccountLineItemRawData.MaterialLedgerProcessType,
      I_GLAccountLineItemRawData.MaterialLedgerCategory,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItemRawData.SlsPriceAmountInCoCodeCrcy,
      I_GLAccountLineItemRawData.ProductPriceControl,
      I_GLAccountLineItemRawData.CurPlanProjSlsOrdValnStrategy,

      ////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_CFIN   Unified Journal Entry: Fields for Central Finance
      //////////////////////////////////////////////////////////////////////////////
      I_GLAccountLineItemRawData.SenderCompanyCode,
      //@ObjectModel.foreignKey.association: '_SenderGLAccount'
      I_GLAccountLineItemRawData.SenderGLAccount,
      I_GLAccountLineItemRawData.SenderAccountAssignment,
      I_GLAccountLineItemRawData.SenderAccountAssignmentType,


      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
      ///////////////////////////////////////////////////////////////////////////
      I_GLAccountLineItemRawData.ControllingObject,
      //      @ObjectModel.foreignKey.association: '_CostOriginGroup'
      I_GLAccountLineItemRawData.CostOriginGroup,
      @ObjectModel.foreignKey.association: '_OriginSenderObject'
      I_GLAccountLineItemRawData.OriginSenderObject,
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      I_GLAccountLineItemRawData.ControllingDebitCreditCode,
      I_GLAccountLineItemRawData.ControllingObjectDebitType,
      I_GLAccountLineItemRawData.QuantityIsIncomplete,
      @ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
      I_GLAccountLineItemRawData.OffsettingAccount,
      @ObjectModel.foreignKey.association: '_OffsettingAccountType'
      I_GLAccountLineItemRawData.OffsettingAccountType,
      @ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
      I_GLAccountLineItemRawData.OffsettingChartOfAccounts,
      I_GLAccountLineItemRawData.LineItemIsCompleted,
      I_GLAccountLineItemRawData.PersonnelNumber,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      I_GLAccountLineItemRawData.ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      I_GLAccountLineItemRawData.PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerControllingObjectClass'
      I_GLAccountLineItemRawData.PartnerControllingObjectClass,
      @ObjectModel.foreignKey.association: '_OriginCostCenter'
      I_GLAccountLineItemRawData.OriginCostCenter,
      @ObjectModel.foreignKey.association: '_OriginProfitCenter'
      I_GLAccountLineItemRawData.OriginProfitCenter,
      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      I_GLAccountLineItemRawData.OriginCostCtrActivityType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OriginProduct'
      I_GLAccountLineItemRawData.OriginProduct,
      I_GLAccountLineItemRawData.VarianceOriginGLAccount,

      I_GLAccountLineItemRawData.AccountAssignment,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      I_GLAccountLineItemRawData.AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      I_GLAccountLineItemRawData.CostCtrActivityType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_Order',
                           element: 'OrderID' }
              }]
      @ObjectModel.foreignKey.association: '_Order'
      I_GLAccountLineItemRawData.OrderID,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      I_GLAccountLineItemRawData.OrderCategory,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_WBSElementBasicDataStdVH',
                           element: 'WBSElementInternalID' }
              }]
      @ObjectModel.foreignKey.association: '_WBSElementInternalID'
      I_GLAccountLineItemRawData.WBSElementInternalID,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_WBSElementBasicDataStdVH',
                           element: 'WBSElementInternalID' }
              }]
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      I_GLAccountLineItemRawData.PartnerWBSElementInternalID,
      @ObjectModel.foreignKey.association: '_WBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'WBSElementInternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementInternalID'
      cast( I_GLAccountLineItemRawData.WBSElement as fis_wbs preserving type )                                          as WBSElement,
      @ObjectModel.foreignKey.association: '_ProjectInternalID'
      I_GLAccountLineItemRawData.ProjectInternalID,
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      I_GLAccountLineItemRawData.PartnerProjectInternalID,
      @ObjectModel.foreignKey.association: '_Project'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'ProjectInternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ProjectInternalID'
      cast( I_GLAccountLineItemRawData.Project as fis_project preserving type )                                         as Project,
      @ObjectModel.foreignKey.association: '_OperatingConcern'
      I_GLAccountLineItemRawData.OperatingConcern,
      @ObjectModel.foreignKey.association: '_ProjectNetwork'
      I_GLAccountLineItemRawData.ProjectNetwork,
      //      @ObjectModel.foreignKey.association: '_RelatedNetworkActivity'
      I_GLAccountLineItemRawData.RelatedNetworkActivity,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_BusinessProcessStdVH',
                           element: 'BusinessProcess' }
              }]
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      I_GLAccountLineItemRawData.BusinessProcess,
      I_GLAccountLineItemRawData.CostObject,
      @ObjectModel.foreignKey.association: '_BillableControl'
      I_GLAccountLineItemRawData.BillableControl,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      I_GLAccountLineItemRawData.CostAnalysisResource,
      I_GLAccountLineItemRawData.CustomerServiceNotification,

      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                           element: 'ServiceDocumentType' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      I_GLAccountLineItemRawData.ServiceDocumentType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentVH',
                           element: 'ServiceDocument' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocument'
      I_GLAccountLineItemRawData.ServiceDocument,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                           element: 'ServiceDocumentItem' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      I_GLAccountLineItemRawData.ServiceDocumentItem,

      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                           element: 'ServiceDocumentType' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerServiceDocumentType'
      I_GLAccountLineItemRawData.PartnerServiceDocumentType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentVH',
                           element: 'ServiceDocument' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerServiceDocument'
      I_GLAccountLineItemRawData.PartnerServiceDocument,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                           element: 'ServiceDocumentItem' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerServiceDocumentItem'
      I_GLAccountLineItemRawData.PartnerServiceDocumentItem,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_ServiceContractTypeStdVH',
                           element: 'ServiceDocumentType' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractType'
      I_GLAccountLineItemRawData.ServiceContractType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceContractVH',
                           element: 'ServiceContract' }
              }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContract'
      I_GLAccountLineItemRawData.ServiceContract,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractItem'
      I_GLAccountLineItemRawData.ServiceContractItem,

      I_GLAccountLineItemRawData.BusinessSolutionOrder,
      I_GLAccountLineItemRawData.BusinessSolutionOrderItem,

      @ObjectModel.foreignKey.association: '_ProviderContract'
      I_GLAccountLineItemRawData.ProviderContract,
      @ObjectModel.foreignKey.association: '_ProviderContractItem'
      I_GLAccountLineItemRawData.ProviderContractItem,

      I_GLAccountLineItemRawData.RevenueAccountingContract,
      I_GLAccountLineItemRawData.PerformanceObligation,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
      I_GLAccountLineItemRawData.TimeSheetOvertimeCategory,
      I_GLAccountLineItemRawData.PartnerAccountAssignment,
      I_GLAccountLineItemRawData.PartnerAccountAssignmentType,
      I_GLAccountLineItemRawData.WorkPackage,
      I_GLAccountLineItemRawData.WorkItem,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      I_GLAccountLineItemRawData.PartnerCostCtrActivityType,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerOrder_2'
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      cast(I_GLAccountLineItemRawData.PartnerOrder as fis_par_aufnr_depre preserving type )                             as PartnerOrder,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      cast(I_GLAccountLineItemRawData.PartnerOrder as fis_par_aufnr preserving type )                                   as PartnerOrder_2,

      @ObjectModel.foreignKey.association: '_PartnerOrderCategory'
      I_GLAccountLineItemRawData.PartnerOrderCategory,
      @ObjectModel.foreignKey.association: '_PartnerWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerWBSElementInternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerWBSElementInternalID'
      cast( I_GLAccountLineItemRawData.PartnerWBSElement as fis_partner_wbs preserving type )                           as PartnerWBSElement,
      @ObjectModel.foreignKey.association: '_PartnerProject'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerProjectInternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerProjectInternalID'
      cast( I_GLAccountLineItemRawData.PartnerProject as fis_part_project preserving type )                             as PartnerProject,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocument'
      I_GLAccountLineItemRawData.PartnerSalesDocument,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocumentItem'
      I_GLAccountLineItemRawData.PartnerSalesDocumentItem,
      I_GLAccountLineItemRawData.PartnerProjectNetwork,
      //      @ObjectModel.foreignKey.association: '_PartnerProjectNetworkActivity'
      I_GLAccountLineItemRawData.PartnerProjectNetworkActivity,
      @ObjectModel.foreignKey.association: '_PartnerBusinessProcess'
      I_GLAccountLineItemRawData.PartnerBusinessProcess,
      I_GLAccountLineItemRawData.PartnerCostObject,
      I_GLAccountLineItemRawData.ControllingDocumentItem,


      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
      //////////////////////////////////////////////////////////////////////
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'C_BillingDocumentTypeVH',
                     element: 'BillingDocumentType' }
        }]
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      I_GLAccountLineItemRawData.BillingDocumentType,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesOrganization',
                     element: 'SalesOrganization' }
        }]
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      I_GLAccountLineItemRawData.SalesOrganization,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_DistributionChannel',
                     element: 'DistributionChannel' }
        }]
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      I_GLAccountLineItemRawData.DistributionChannel,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Division',
                     element: 'Division' }
        }]
      @ObjectModel.foreignKey.association: '_Division'
      @Analytics.internalName:#LOCAL
      I_GLAccountLineItemRawData.OrganizationDivision,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SoldProduct'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProduct'
      @ObjectModel.foreignKey.association: '_SoldMaterial'
      cast(I_GLAccountLineItemRawData.SoldProduct as fis_sold_material preserving type )                                as SoldMaterial,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductVH',
                     element: 'Product' }
        }]
      @ObjectModel.foreignKey.association: '_SoldProduct'
      I_GLAccountLineItemRawData.SoldProduct,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'SoldProductGroup'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'SoldProductGroup'
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      cast(I_GLAccountLineItemRawData.SoldProductGroup as fis_matkl_pa_depr preserving type )                           as MaterialGroup,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductGroupVH',
                     element: 'ProductGroup' }
        }]
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      I_GLAccountLineItemRawData.SoldProductGroup,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CustomerGroup',
                     element: 'CustomerGroup' }
        }]
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      I_GLAccountLineItemRawData.CustomerGroup,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CountryVH',
                     element: 'Country' }
        }]
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      @Analytics.internalName:#LOCAL
      I_GLAccountLineItemRawData.CustomerSupplierCountry,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CustomerSupplierIndustry',
                     element: 'Industry' }
        }]
      @ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
      @Analytics.internalName:#LOCAL
      I_GLAccountLineItemRawData.CustomerSupplierIndustry,
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_SalesDistrict',
                    element: 'SalesDistrict' }
       }]
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      @Analytics.internalName:#LOCAL
      I_GLAccountLineItemRawData.SalesDistrict,
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_Customer_VH',
                    element: 'Customer' }
       }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BillToParty'
      I_GLAccountLineItemRawData.BillToParty,
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_Customer_VH',
                    element: 'Customer' }
       }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ShipToParty'
      I_GLAccountLineItemRawData.ShipToParty,

      I_GLAccountLineItemRawData.CustomerSupplierCorporateGroup,


      //////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
      /////////////////////////////////////////////////////////////////////
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
      I_GLAccountLineItemRawData.CashLedgerCompanyCode,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CashLedgerAccount'
      I_GLAccountLineItemRawData.CashLedgerAccount,

      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      I_GLAccountLineItemRawData.FinancialManagementArea,

      I_GLAccountLineItemRawData.CommitmentItem,

      @ObjectModel.foreignKey.association: '_FundsCenter'
      I_GLAccountLineItemRawData.FundsCenter,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FundedProgram'
      I_GLAccountLineItemRawData.FundedProgram,

      @ObjectModel.foreignKey.association: '_Fund'
      I_GLAccountLineItemRawData.Fund,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
      I_GLAccountLineItemRawData.GrantID,

      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      I_GLAccountLineItemRawData.BudgetPeriod,

      @ObjectModel.foreignKey.association: '_PartnerFund'
      I_GLAccountLineItemRawData.PartnerFund,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerGrant'
      I_GLAccountLineItemRawData.PartnerGrant,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
      I_GLAccountLineItemRawData.PartnerBudgetPeriod,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
      I_GLAccountLineItemRawData.PubSecBudgetAccount,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
      I_GLAccountLineItemRawData.PubSecBudgetAccountCoCode,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnDate'
      I_GLAccountLineItemRawData.PubSecBudgetCnsmpnDate,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclPeriod'
      I_GLAccountLineItemRawData.PubSecBudgetCnsmpnFsclPeriod,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclYear'
      I_GLAccountLineItemRawData.PubSecBudgetCnsmpnFsclYear,

      @Analytics.internalName: #LOCAL
      I_GLAccountLineItemRawData.PubSecBudgetIsRelevant,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnType'
      I_GLAccountLineItemRawData.PubSecBudgetCnsmpnType,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnAmtType'
      I_GLAccountLineItemRawData.PubSecBudgetCnsmpnAmtType,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredProgram'
      I_GLAccountLineItemRawData.SponsoredProgram,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredClass'
      I_GLAccountLineItemRawData.SponsoredClass,

      @Analytics.internalName: #LOCAL
      I_GLAccountLineItemRawData.GteeMBudgetValidityNumber,

      I_GLAccountLineItemRawData.EarmarkedFundsDocument,
      I_GLAccountLineItemRawData.EarmarkedFundsDocumentItem,


      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_JVA  Universal Journal Entry: Fields for Financial Services
      ///////////////////////////////////////////////////////////////////////
      I_GLAccountLineItemRawData.FinancialServicesProductGroup,
      I_GLAccountLineItemRawData.FinancialServicesBranch,
      I_GLAccountLineItemRawData.FinancialDataSource,


      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
      ///////////////////////////////////////////////////////////////////////
      I_GLAccountLineItemRawData.JointVenture,
      I_GLAccountLineItemRawData.JointVentureEquityGroup,
      I_GLAccountLineItemRawData.JointVentureCostRecoveryCode,
      I_GLAccountLineItemRawData.JointVenturePartner,
      I_GLAccountLineItemRawData.JointVentureBillingType,
      I_GLAccountLineItemRawData.JointVentureEquityType,
      I_GLAccountLineItemRawData.JointVentureProductionDate,
      I_GLAccountLineItemRawData.JointVentureBillingDate,
      I_GLAccountLineItemRawData.JointVentureOperationalDate,
      I_GLAccountLineItemRawData.CutbackRun,
      I_GLAccountLineItemRawData.JointVentureAccountingActivity,
      I_GLAccountLineItemRawData.PartnerVenture,
      I_GLAccountLineItemRawData.PartnerEquityGroup,
      I_GLAccountLineItemRawData.SenderCostRecoveryCode,
      I_GLAccountLineItemRawData.CutbackAccount,
      I_GLAccountLineItemRawData.CutbackCostObject,

      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_RE STRU  0 0 Unified Journal Entry: Fields for Real Estate
      ///////////////////////////////////////////////////////////////////////
      I_GLAccountLineItemRawData.REBusinessEntity,
      I_GLAccountLineItemRawData.RealEstateBuilding,
      I_GLAccountLineItemRawData.RealEstateProperty,
      I_GLAccountLineItemRawData.RERentalObject,
      I_GLAccountLineItemRawData.RealEstateContract,
      I_GLAccountLineItemRawData.REServiceChargeKey,
      I_GLAccountLineItemRawData.RESettlementUnitID,
      I_GLAccountLineItemRawData.SettlementReferenceDate,
      I_GLAccountLineItemRawData.REPartnerBusinessEntity,
      I_GLAccountLineItemRawData.RealEstatePartnerBuilding,
      I_GLAccountLineItemRawData.RealEstatePartnerProperty,
      I_GLAccountLineItemRawData.REPartnerRentalObject,
      I_GLAccountLineItemRawData.RealEstatePartnerContract,
      I_GLAccountLineItemRawData.REPartnerServiceChargeKey,
      I_GLAccountLineItemRawData.REPartnerSettlementUnitID,
      I_GLAccountLineItemRawData.PartnerSettlementReferenceDate,


      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_ACR STRU  0 0 Universal Journal Entry: Fields for Accrual object
      ///////////////////////////////////////////////////////////////////////
      //   AccrualObject      --(1:N)-->  AccrualSubobject  --(1:N)-->  Accrual(Subobject)Item (this field is not stored in ACDOCA)
      //   AccrualObjectType                                            AccrualItemType  are the corresponding types
      //@ObjectModel.foreignKey.association: '_AccrualObjectType'
      I_GLAccountLineItemRawData.AccrualObjectType,
      I_GLAccountLineItemRawData.AccrualObjectLogicalSystem,
      //@ObjectModel.foreignKey.association: '_AccrualObject'
      I_GLAccountLineItemRawData.AccrualObject,
      //@ObjectModel.foreignKey.association: '_AccrualSubobject'
      I_GLAccountLineItemRawData.AccrualSubobject,
      //@ObjectModel.foreignKey.association: '_AccrualItemType'
      I_GLAccountLineItemRawData.AccrualItemType,
      I_GLAccountLineItemRawData.AccrualReferenceObject,
      I_GLAccountLineItemRawData.AccrualValueDate,


      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_VAL STRU  0 0 Universal Journal Entry: Fields for Fin. Valuation Object
      ///////////////////////////////////////////////////////////////////////
      I_GLAccountLineItemRawData.FinancialValuationObjectType,
      I_GLAccountLineItemRawData.FinancialValuationObject,
      I_GLAccountLineItemRawData.FinancialValuationSubobject,
      I_GLAccountLineItemRawData.NetDueDate,
      I_GLAccountLineItemRawData.CreditRiskClass,

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_LOG  Universal Journal Entry: Fields for Logistics
      //////////////////////////////////////////////////////////////////////

      I_GLAccountLineItemRawData.WorkCenterInternalID,
      I_GLAccountLineItemRawData.OrderOperation,
      I_GLAccountLineItemRawData.OrderItem,
      I_GLAccountLineItemRawData.PartnerOrderItem,

      //////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_LOG_ACT:  New Fields  PM  //
      //////////////////////////////////////////////////
      //  @ObjectModel.foreignKey.association: '_MaintenanceOrderSubOperation'      // Triangle Condition
      I_GLAccountLineItemRawData.OrderSuboperation,
      @ObjectModel.foreignKey.association: '_Equipment'
      I_GLAccountLineItemRawData.Equipment,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      I_GLAccountLineItemRawData.FunctionalLocation,
      @ObjectModel.foreignKey.association: '_Assembly'
      I_GLAccountLineItemRawData.Assembly,
      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      I_GLAccountLineItemRawData.MaintenanceActivityType,
      @ObjectModel.foreignKey.association: '_MaintOrdPlngDegreeCode'
      I_GLAccountLineItemRawData.MaintenanceOrderPlanningCode,
      @ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
      I_GLAccountLineItemRawData.MaintPriorityType,
      @ObjectModel.foreignKey.association: '_PMNotificationPriority'
      I_GLAccountLineItemRawData.MaintPriority,
      @ObjectModel.foreignKey.association: '_SuperiorOrder'
      I_GLAccountLineItemRawData.SuperiorOrder,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      I_GLAccountLineItemRawData.ProductGroup,
      I_GLAccountLineItemRawData.MaintenanceOrderIsPlanned,


      //////////////////////////////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_TECH:  Universal Journal Entry: Technical Fields  //
      //////////////////////////////////////////////////////////////////////////
      I_GLAccountLineItemRawData.JrnlEntryItemMigrationSource,


      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInCompanyCodeCurrency as fis_dr_hsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_hsl preserving type)
      end                                                                                                               as DebitAmountInCoCodeCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInCompanyCodeCurrency as fis_cr_hsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_hsl preserving type)
      end                                                                                                               as CreditAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInTransactionCurrency as fis_dr_wsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_wsl preserving type)
      end                                                                                                               as DebitAmountInTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInTransactionCurrency as fis_cr_wsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_wsl preserving type)
      end                                                                                                               as CreditAmountInTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInBalanceTransacCrcy as fis_dr_tsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_tsl preserving type)
      end                                                                                                               as DebitAmountInBalanceTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInBalanceTransacCrcy as fis_cr_tsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_tsl preserving type)
      end                                                                                                               as CreditAmountInBalanceTransCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInGlobalCurrency as fis_dr_ksl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_ksl preserving type)
      end                                                                                                               as DebitAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInGlobalCurrency as fis_cr_ksl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_ksl preserving type)
      end                                                                                                               as CreditAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInFunctionalCurrency as fis_dr_amt_funccrcy preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_amt_funccrcy preserving type)
      end                                                                                                               as DebitAmountInFunctionalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInFunctionalCurrency as fis_cr_amt_funccrcy preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_amt_funccrcy preserving type)
      end                                                                                                               as CreditAmountInFunctionalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency1 as fis_dr_osl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_osl preserving type)
      end                                                                                                               as DebitAmountInFreeDefinedCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency1 as fis_cr_osl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_osl preserving type)
      end                                                                                                               as CreditAmountInFreeDefinedCrcy1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency2 as fis_dr_vsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_vsl preserving type)
      end                                                                                                               as DebitAmountInFreeDefinedCrcy2,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency2 as fis_cr_vsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_vsl preserving type)
      end                                                                                                               as CreditAmountInFreeDefinedCrcy2,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency3 as fis_dr_bsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_bsl preserving type)
      end                                                                                                               as DebitAmountInFreeDefinedCrcy3,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency3 as fis_cr_bsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_bsl preserving type)
      end                                                                                                               as CreditAmountInFreeDefinedCrcy3,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency4 as fis_dr_csl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_csl preserving type)
      end                                                                                                               as DebitAmountInFreeDefinedCrcy4,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency4 as fis_cr_csl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_csl preserving type)
      end                                                                                                               as CreditAmountInFreeDefinedCrcy4,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency5 as fis_dr_dsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_dsl preserving type)
      end                                                                                                               as DebitAmountInFreeDefinedCrcy5,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency5 as fis_cr_dsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_dsl preserving type)
      end                                                                                                               as CreditAmountInFreeDefinedCrcy5,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency6 as fis_dr_esl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_esl preserving type)
      end                                                                                                               as DebitAmountInFreeDefinedCrcy6,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency6 as fis_cr_esl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_esl preserving type)
      end                                                                                                               as CreditAmountInFreeDefinedCrcy6,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency7 as fis_dr_fsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_fsl preserving type)
      end                                                                                                               as DebitAmountInFreeDefinedCrcy7,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency7 as fis_cr_fsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_fsl preserving type)
      end                                                                                                               as CreditAmountInFreeDefinedCrcy7,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'S' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency8 as fis_dr_gsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_gsl preserving type)
      end                                                                                                               as DebitAmountInFreeDefinedCrcy8,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      case I_GLAccountLineItemRawData.DebitCreditCode  when 'H' then  cast( I_GLAccountLineItemRawData.AmountInFreeDefinedCurrency8 as fis_cr_gsl preserving type)
                           else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_gsl preserving type)
      end                                                                                                               as CreditAmountInFreeDefinedCrcy8,

      //@Semantics.booleanIndicator
      cast( ( case when ( I_GLAccountLineItemRawData.AccountAssignmentType != 'OR' and I_GLAccountLineItemRawData.AccountAssignmentType != 'OP' and I_GLAccountLineItemRawData.AccountAssignmentType != 'OV' ) and I_GLAccountLineItemRawData.OrderID != ''
                   then 'X'
                   else ' '
              end )
      as fins_xaufnr_stat preserving type )                                                                             as IsStatisticalOrder,

      //@Semantics.booleanIndicator
      cast( ( case when ( I_GLAccountLineItemRawData.AccountAssignmentType != 'KL' and I_GLAccountLineItemRawData.AccountAssignmentType != 'KS' ) and I_GLAccountLineItemRawData.CostCenter != ''
                   then 'X'
                   else ' '
              end )
      as fins_xkostl_stat preserving type )                                                                             as IsStatisticalCostCenter,

      //@Semantics.booleanIndicator
      cast( ( case when I_GLAccountLineItemRawData.AccountAssignmentType != 'VB' and I_GLAccountLineItemRawData.SalesDocument != ''
                   then 'X'
                   else ' '
              end )
      as fis_xkdpos_stat preserving type )                                                                              as IsStatisticalSalesDocument,

      //@Semantics.booleanIndicator
      cast( ( case when ( I_GLAccountLineItemRawData.AccountAssignmentType != 'PR' ) and ( I_GLAccountLineItemRawData.WBSElementInternalID != '00000000' )
                   then 'X'
                   else ' '
              end )
      as fins_xps_posid_stat preserving type )                                                                          as WBSIsStatisticalWBSElement,


      ///////////////////////////////////////////////////////////////////////////////
      // Fields from associations
      ///////////////////////////////////////////////////////////////////////////////

      I_GLAccountLineItemRawData._CalendarDate.CalendarYear                                                             as CalendarYear,
      I_GLAccountLineItemRawData._CalendarDate.CalendarQuarter                                                          as CalendarQuarter,
      I_GLAccountLineItemRawData._CalendarDate.YearQuarter                                                              as CalendarYearQuarter,
      I_GLAccountLineItemRawData._CalendarDate.CalendarMonth                                                            as CalendarMonth,
      I_GLAccountLineItemRawData._CalendarDate.YearMonth                                                                as CalendarYearMonth,
      I_GLAccountLineItemRawData._CalendarDate.CalendarWeek                                                             as CalendarWeek,
      I_GLAccountLineItemRawData._CalendarDate.YearWeek                                                                 as CalendarYearWeek,

      ///////////////////////////////////////////////////////////////////////////////
      // Associations
      ///////////////////////////////////////////////////////////////////////////////

      _JournalEntry,
      _CompanyCode,
      @UI.hidden: true
      _CompanyCodeText,
      _FiscalYear,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_FiscalPeriodForVariant'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalPeriodForVariant'
      _FiscalPeriod,
      _FiscalPeriodForVariant,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_LedgerFiscalYearForVariant'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_LedgerFiscalYearForVariant'
      _LedgerFiscalYear,
      _LedgerFiscalYearForVariant,
      _FiscalYearVariant,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_FiscalYearPeriodForVariant'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalYearPeriodForVariant'
      _FiscalYearPeriod,
      _FiscalYearPeriodForVariant,
      I_GLAccountLineItemRawData._CalendarDate,
      _FiscalCalendarDate,
      _ControllingArea,
      @UI.hidden: true
      _ControllingAreaText,
      _BalanceTransactionCurrency,
      _TransactionCurrency,
      _CompanyCodeCurrency,
      _GlobalCurrency,
      I_GLAccountLineItemRawData._FunctionalCurrency,
      _FreeDefinedCurrency1,
      _FreeDefinedCurrency2,
      _FreeDefinedCurrency3,
      _FreeDefinedCurrency4,
      _FreeDefinedCurrency5,
      _FreeDefinedCurrency6,
      _FreeDefinedCurrency7,
      _FreeDefinedCurrency8,
      _BaseUnit,
      _CostSourceUnit,
      _AdditionalQuantity1Unit,
      _AdditionalQuantity2Unit,
      _AdditionalQuantity3Unit,
      I_GLAccountLineItemRawData._ReferenceQuantityUnit,
      _Segment,
      @UI.hidden: true
      _SegmentText,
      _ProfitCenter,
      @UI.hidden: true
      _ProfitCenterText,
      _CurrentProfitCenter,
      _CostCenter,
      _CostCenterText,
      @UI.hidden: true
      _CurrentCostCenter,
      _CostAnalysisResource,
      @UI.hidden: true
      _CostAnalysisResourceText,
      I_GLAccountLineItemRawData._AccountAssignmentType,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_ProjectBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectBasicData'
      _Project,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_ProjectBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectBasicDataText'
      @UI.hidden: true
      _ProjectText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerProjectBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerProjectBasicData'
      _PartnerProject,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerProjectBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerProjectBasicDataText'
      @Consumption.hidden: true
      _PartnerProjectText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ProjectBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectBasicData'
      _ProjectInternalID,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_ProjectBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProjectBasicDataText'
      @UI.hidden: true
      _ProjectInternalIDText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerProjectBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerProjectBasicData'
      _PartnerProjectInternalID,

      _ProjectBasicData,
      @UI.hidden: true
      _ProjectBasicDataText,
      _PartnerProjectBasicData,
      @UI.hidden: true
      _PartnerProjectBasicDataText,


      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_WBSElementBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData'
      _WBSElement,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_WBSElementBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicDataText'
      @UI.hidden: true
      _WBSElementText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerWBSElementBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerWBSElementBasicData'
      _PartnerWBSElement,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerWBSElmntBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerWBSElmntBasicDataText'
      @UI.hidden: true
      _PartnerWBSElementText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerWBSElmntBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerWBSElmntBasicDataText'
      @UI.hidden: true
      _PartnerWBSElemntBasicDataText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InvtrySpclStkWBSElmntBscData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor:  '_InvtrySpclStkWBSElmntBscData'
      _InventorySpclStockWBSElement,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InvtrySpclStkWBSElmntBscDataT'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor:  '_InvtrySpclStkWBSElmntBscDataT'
      @UI.hidden: true
      _InvtrySpclStockWBSElmntText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_WBSElementBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData'
      _WBSElementInternalID,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_WBSElementBasicDataText'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicDataText'
      @UI.hidden: true
      _WBSElementInternalIDText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InvtrySpclStkWBSElmntBscData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor:  '_InvtrySpclStkWBSElmntBscData'
      _InvtrySpclStockWBSElmntIntID,

      _WBSElementBasicData,
      @UI.hidden: true
      _WBSElementBasicDataText,
      _PartnerWBSElementBasicData,
      @UI.hidden: true
      _PartnerWBSElmntBasicDataText,
      _InvtrySpclStkWBSElmntBscData,
      @UI.hidden: true
      _InvtrySpclStkWBSElmntBscDataT,

      _BusinessArea,
      @UI.hidden: true
      _BusinessAreaText,
      _FunctionalArea,
      @UI.hidden: true
      _FunctionalAreaText,
      _GLAccountInChartOfAccounts,
      @UI.hidden: true
      _GLAcctInChartOfAccountsText,

      @UI.hidden: true
      _GLAccountTxt,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_GLAccountTxt'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_GLAccountTxt'
      @UI.hidden: true
      _GLAccountText,

      _GLAccountInCompanyCode,
      _ChartOfAccounts,
      @UI.hidden: true
      _ChartOfAccountsText,
      _AccountingDocumentType,
      @UI.hidden: true
      _AccountingDocumentTypeText,
      _FinancialAccountType,
      @UI.hidden: true
      _FinancialAccountTypeText,
      _DebitCreditCode,
      @UI.hidden: true
      _DebitCreditCodeText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_Product'
      _Material,
      _Product,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SoldProduct'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProduct'
      _SoldMaterial,
      _SoldProduct,

      I_GLAccountLineItemRawData._OriginProduct,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SoldProductGroup_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProductGroup_2'
      _MaterialGroup,
      //@API.element.releaseState: #DEPRECATED                // not allowed
      //@API.element.successor:    '_SoldProductGroup_2'      // not allowed
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SoldProductGroup_2'
      _SoldProductGroup,
      _SoldProductGroup_2,

      //@API.element.releaseState: #DEPRECATED               // not allowed
      //@API.element.successor:    '_ProductGroup_2'         // not allowed
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ProductGroup_2'
      _ProductGroup,
      _ProductGroup_2,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SalesDocument'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SalesDocument'
      _SalesOrder,
      _SalesDocument,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_SalesDocumentItem'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_SalesDocumentItem'
      _SalesOrderItem,
      _SalesDocumentItem,

      @UI.hidden: true
      _ProductText,
      _Plant,
      _Ledger,
      @UI.hidden: true
      _LedgerText,
      _SourceLedger,
      @UI.hidden: true
      _SourceLedgerText,

      _Customer,
      I_GLAccountLineItemRawData._CustomerCompany,
      @UI.hidden: true
      _CustomerText,
      _CustomerGroup,

      _Supplier,
      I_GLAccountLineItemRawData._SupplierCompany,
      @UI.hidden: true
      _SupplierText,

      // _Order,
      _InternalOrder,
      _Order,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PersonWorkAgreement_1'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PersonWorkAgreement_1'
      _Employment,
      _PersonWorkAgreement_1,

      _FinancialTransactionType,
      I_GLAccountLineItemRawData._BusinessTransactionCategory,
      _BusinessTransactionType,
      @UI.hidden: true
      _BusinessTransactionTypeText,
      _ReferenceDocumentType,
      @UI.hidden: true
      _PredecessorReferenceDocType,

      _PartnerCostCenter,
      _PartnerProfitCenter,
      _PartnerBusinessArea,
      @UI.hidden: true
      _PartnerBusinessAreaText,
      _PartnerFunctionalArea,
      _PartnerCompanyCode,
      @UI.hidden: true
      _PartnerCompanyCodeText,
      _PartnerSegment,
      @UI.hidden: true
      _PartnerSegmentText,

      _AccountingDocumentCategory,

      _PostingKey,
      _SubLedgerAccLineItemType,
      _User,

      _EliminationProfitCenter,

      //_ControllingObject,

      _GLAccountType,
      _OffsettingAccountType,
      @UI.hidden: true
      _OffsettingAccountTypeText,
      _OffsettingChartOfAccounts,
      @UI.hidden: true
      _OffsettingChartOfAccountsText,
      _OffsettingAccount,
      @UI.hidden: true
      _OffsettingAccountText,
      _OffsettingAccountWithBP,
      _AlternativeGLAccount,
      @UI.hidden: true
      _AlternativeGLAccountText,
      //_SenderGLAccount,
      _CountryChartOfAccounts,
      @UI.hidden: true
      _CountryChartOfAccountsText,

      _PurchasingDocument,
      _PurchasingDocumentItem,

      _SpecialGLCode,
      _TaxCode,
      I_GLAccountLineItemRawData._TaxCountry,
      _HouseBank,

      _ClearingJrnlEntryFiscalYear,
      _ClearingJournalEntry,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ClearingJournalEntry'
      _ClearingAccountingDocument,

      _MasterFixedAsset,
      @UI.hidden: true
      _MasterFixedAssetText,
      _GroupMasterFixedAsset,
      I_GLAccountLineItemRawData._PartnerMasterFixedAsset,
      @UI.hidden: true
      _GroupMasterFixedAssetText,
      _FixedAsset,
      @UI.hidden: true
      _FixedAssetText,
      _GroupFixedAsset,
      I_GLAccountLineItemRawData._PartnerFixedAsset,
      @UI.hidden: true
      _GroupFixedAssetText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InventorySpclStockValnType'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_InventorySpclStockValnType'
      _InventorySpecialStockValnType,
      _InventorySpclStockValnType,

      _InventorySpecialStockType,
      _InventorySpclStkSalesDocument,
      _InventorySpclStkSalesDocItm,

      _InventorySpecialStockSupplier,
      @UI.hidden: true
      _InvtrySpclStockSupplierText,
      _InventoryValuationType,
      _ControllingDebitCreditCode,
      _OriginSenderObject,
      _ControllingObjectClass,
      _PartnerControllingObjectClass,
      _OriginCostCenter,
      _OriginProfitCenter,
      _CostCtrActivityType,
      _OriginCostCtrActivityType,
      _OrderCategory,
      //_RelatedNetworkActivity,
      //_PartnerProjectNetworkActivity,

      _BusinessProcess,
      @UI.hidden: true
      _BusinessProcessText,
      _PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerOrder_2'
      _PartnerOrder,
      _PartnerOrder_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerOrderText_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerOrderText_2'
      @UI.hidden: true
      _PartnerOrderText,
      @UI.hidden: true
      _PartnerOrderText_2,
      _PartnerOrderCategory,
      _PartnerSalesDocument,
      _PartnerSalesDocumentItem,
      _PartnerBusinessProcess,
      @UI.hidden: true
      _PartnerBusinessProcessText,

      _BillingDocumentType,

      _SalesOrganization,
      _DistributionChannel,
      _Division,

      @UI.hidden: true
      _SoldProductText,

      @UI.hidden: true
      _FundText,
      @UI.hidden: true
      _PartnerFundText,

      _MovementCategory,
      _AssetTransactionType,

      @UI.hidden: true
      _BudgetPeriodText,

      _CostOriginGroup,

      _CustomerSupplierCountry,
      _CustomerSupplierIndustry,
      _SalesDistrict,
      _BillToParty,
      _ShipToParty,

      @UI.hidden: true
      _FinancialManagementAreaText,
      //_FundedProgram

      _HouseBankAccount,
      @UI.hidden: true
      _HouseBankAccountText,

      _LogicalSystem,

      _OperatingConcern,
      @UI.hidden: true
      _OperatingConcernText,

      _PartnerCompany,

      _ProjectNetwork,
      @UI.hidden: true
      _ProjectNetworkText,

      _PurReqValuationArea,
      _WorkCenter,
      _BillableControl,
      _ServiceDocumentType,
      _ServiceDocument,
      _ServiceDocumentItem,
      _ServiceContract,
      _ServiceContractItem,
      _ServiceContractType,
      _PartnerServiceDocumentType,
      _PartnerServiceDocument,
      _PartnerServiceDocumentItem,
      _ConditionContract,
      _Equipment,
      @UI.hidden: true
      _EquipmentText,
      _FunctionalLocation,
      @UI.hidden: true
      _FunctionalLocationText,
      _MaintenanceActivityType,
      @UI.hidden: true
      _MaintenanceActivityTypeText,
      _MaintOrdPlngDegreeCode,
      _PMNotificationPriorityType,
      _PMNotificationPriority,
      _MaintenanceOrder,
      _MaintenanceOrderOperation,
      _MaintenanceOrderSubOperation,
      _Assembly,
      @UI.hidden: true
      _AssemblyText,
      _SuperiorOrder,
      _WorkPackage,
      _WorkPackageWorkItem,
      _TimeSheetOvertimeCat,
      @UI.hidden: true
      _WorkPackageText,
      @UI.hidden: true
      _WorkPackageWorkItemText,

      _AccrualObjectType,
      _AccrualObject,
      _AccrualSubobject,
      _AccrualItemType,

      _CreditRiskClass,
      _FinValuationObjectType,

      _SemTagGLAccount,

      I_GLAccountLineItemRawData._CashLedgerCompanyCode,
      I_GLAccountLineItemRawData._CashLedgerAccount,
      _FinancialManagementArea,
      _FundsCenter,
      I_GLAccountLineItemRawData._FundedProgram,
      _Fund,
      I_GLAccountLineItemRawData._Grant,
      _BudgetPeriod,
      _PartnerFund,
      I_GLAccountLineItemRawData._PartnerGrant,
      I_GLAccountLineItemRawData._PartnerBudgetPeriod,
      I_GLAccountLineItemRawData._PubSecBudgetAccountCoCode,
      I_GLAccountLineItemRawData._PubSecBudgetAccount,
      I_GLAccountLineItemRawData._PubSecBudgetCnsmpnDate,
      I_GLAccountLineItemRawData._PubSecBudgetCnsmpnFsclPeriod,
      I_GLAccountLineItemRawData._PubSecBudgetCnsmpnFsclYear,
      I_GLAccountLineItemRawData._PubSecBudgetCnsmpnType,
      I_GLAccountLineItemRawData._PubSecBudgetCnsmpnAmtType,
      _SponsoredProgram,
      _SponsoredClass,

      I_GLAccountLineItemRawData._ConsolidationUnit,
      I_GLAccountLineItemRawData._PartnerConsolidationUnit,
      I_GLAccountLineItemRawData._Company,
      I_GLAccountLineItemRawData._ConsolidationChartOfAccounts,
      I_GLAccountLineItemRawData._CnsldtnFinancialStatementItem,
      I_GLAccountLineItemRawData._CnsldtnSubitemCategory,
      I_GLAccountLineItemRawData._CnsldtnSubitem,

      I_GLAccountLineItemRawData._ProviderContract,
      I_GLAccountLineItemRawData._ProviderContractItem,

      // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      cast( '' as brgru)                                                                                                as GLAccountAuthorizationGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      cast( '' as brgru)                                                                                                as SupplierBasicAuthorizationGrp,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      cast( '' as brgru)                                                                                                as CustomerBasicAuthorizationGrp,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      cast( '' as brgru)                                                                                                as AcctgDocTypeAuthorizationGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      cast( '' as aufart)                                                                                               as OrderType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  ''
      cast( '' as auart)                                                                                                as SalesOrderType

      //_Extension  Extensions must be local

}
```
