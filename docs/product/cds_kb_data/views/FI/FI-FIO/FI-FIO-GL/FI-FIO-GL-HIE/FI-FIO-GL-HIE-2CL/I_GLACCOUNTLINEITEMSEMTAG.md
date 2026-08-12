---
name: I_GLACCOUNTLINEITEMSEMTAG
description: "GL AccountLINEITEMSEMTAG"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - gl-account
  - item-level
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_GLACCOUNTLINEITEMSEMTAG

**GL AccountLINEITEMSEMTAG**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
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
| `GLAccountHierarchy` | ✓ | |  |  |  |  |
| `SemanticTag` | ✓ | |  |  |  |  |
| `ValidityStartDate` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `LedgerFiscalYear` |  | |  |  |  |  |
| `GLRecordType` |  | |  |  |  |  |
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
| `ControllingObjectCurrency` |  | |  |  |  |  |
| `AmountInObjectCurrency` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `FixedQuantity` |  | |  |  |  |  |
| `CostSourceUnit` |  | |  |  |  |  |
| `ValuationQuantity` |  | |  |  |  |  |
| `ValuationFixedQuantity` |  | |  |  |  |  |
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
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
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
| `HouseBank` |  | |  |  |  |  |
| `HouseBankAccount` |  | |  |  |  |  |
| `IsOpenItemManaged` |  | |  |  |  |  |
| `ClearingDate` |  | |  |  |  |  |
| `ClearingAccountingDocument` |  | |  |  |  |  |
| `ClearingDocFiscalYear` |  | |  |  |  |  |
| `ClearingJournalEntry` |  | |  |  |  |  |
| `ClearingJournalEntryFiscalYear` |  | |  |  |  |  |
| `AssetDepreciationArea` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `AssetValueDate` |  | |  |  |  |  |
| `AssetTransactionType` |  | |  |  |  |  |
| `AssetAcctTransClassfctn` |  | |  |  |  |  |
| `DepreciationFiscalPeriod` |  | |  |  |  |  |
| `GroupMasterFixedAsset` |  | |  |  |  |  |
| `GroupFixedAsset` |  | |  |  |  |  |
| `CostEstimate` |  | |  |  |  |  |
| `InventorySpecialStockValnType` |  | |  |  |  |  |
| `InvtrySpecialStockValnType_2` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `InventorySpclStkSalesDocument` |  | |  |  |  |  |
| `InventorySpclStkSalesDocItm` |  | |  |  |  |  |
| `InvtrySpclStockWBSElmntIntID` |  | |  |  |  |  |
| `InvtrySpclStockWBSElmntExtID` |  | |  |  |  |  |
| `InventorySpclStockWBSElement` |  | |  |  |  |  |
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
| `WBSElementExternalID` |  | |  |  |  |  |
| `WBSElement` |  | |  |  |  |  |
| `PartnerWBSElementInternalID` |  | |  |  |  |  |
| `PartnerWBSElementExternalID` |  | |  |  |  |  |
| `ProjectInternalID` |  | |  |  |  |  |
| `ProjectExternalID` |  | |  |  |  |  |
| `Project` |  | |  |  |  |  |
| `PartnerProjectInternalID` |  | |  |  |  |  |
| `PartnerProjectExternalID` |  | |  |  |  |  |
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
| `ServiceContractType` |  | |  |  |  |  |
| `ServiceContract` |  | |  |  |  |  |
| `ServiceContractItem` |  | |  |  |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `BusinessSolutionOrderItem` |  | |  |  |  |  |
| `TimeSheetOvertimeCategory` |  | |  |  |  |  |
| `ProviderContract` |  | |  |  |  |  |
| `ProviderContractItem` |  | |  |  |  |  |
| `PartnerAccountAssignment` |  | |  |  |  |  |
| `PartnerAccountAssignmentType` |  | |  |  |  |  |
| `WorkPackage` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `PartnerCostCtrActivityType` |  | |  |  |  |  |
| `PartnerOrder` |  | |  |  |  |  |
| `PartnerOrder_2` |  | |  |  |  |  |
| `PartnerOrderCategory` |  | |  |  |  |  |
| `PartnerWBSElement` |  | |  |  |  |  |
| `PartnerProject` |  | |  |  |  |  |
| `PartnerSalesDocument` |  | |  |  |  |  |
| `PartnerSalesDocumentItem` |  | |  |  |  |  |
| `PartnerProjectNetwork` |  | |  |  |  |  |
| `PartnerProjectNetworkActivity` |  | |  |  |  |  |
| `PartnerBusinessProcess` |  | |  |  |  |  |
| `PartnerCostObject` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SoldMaterial` |  | |  |  |  |  |
| `SoldProduct` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `SoldProductGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `CustomerSupplierCountry` |  | |  |  |  |  |
| `CustomerSupplierIndustry` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `CustomerSupplierCorporateGroup` |  | |  |  |  |  |
| `FinancialManagementArea` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `BudgetPeriod` |  | |  |  |  |  |
| `PartnerFund` |  | |  |  |  |  |
| `PartnerGrant` |  | |  |  |  |  |
| `PartnerBudgetPeriod` |  | |  |  |  |  |
| `FundsCenter` |  | |  |  |  |  |
| `FundedProgram` |  | |  |  |  |  |
| `JointVenture` |  | |  |  |  |  |
| `JointVentureEquityGroup` |  | |  |  |  |  |
| `JointVentureCostRecoveryCode` |  | |  |  |  |  |
| `JointVentureEquityType` |  | |  |  |  |  |
| `SettlementReferenceDate` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `OrderOperation` |  | |  |  |  |  |
| `OrderItem` |  | |  |  |  |  |
| `OrderSuboperation` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  |  |  |  |
| `Assembly` |  | |  |  |  |  |
| `MaintenanceActivityType` |  | |  |  |  |  |
| `MaintenanceOrderPlanningCode` |  | |  |  |  |  |
| `MaintPriorityType` |  | |  |  |  |  |
| `MaintPriority` |  | |  |  |  |  |
| `SuperiorOrder` |  | |  |  |  |  |
| `MaintenanceOrderIsPlanned` |  | |  |  |  |  |
| `DebitAmountInCoCodeCrcy` |  | |  |  |  |  |
| `CreditAmountInCoCodeCrcy` |  | |  |  |  |  |
| `DebitAmountInTransCrcy` |  | |  |  |  |  |
| `CreditAmountInTransCrcy` |  | |  |  |  |  |
| `DebitAmountInBalanceTransCrcy` |  | |  |  |  |  |
| `CreditAmountInBalanceTransCrcy` |  | |  |  |  |  |
| `DebitAmountInGlobalCrcy` |  | |  |  |  |  |
| `CreditAmountInGlobalCrcy` |  | |  |  |  |  |
| `DebitAmountInFunctionalCrcy` |  | |  |  |  |  |
| `CreditAmountInFunctionalCrcy` |  | |  |  |  |  |
| `DebitAmountInFreeDefinedCrcy1` |  | |  |  |  |  |
| `CreditAmountInFreeDefinedCrcy1` |  | |  |  |  |  |
| `DebitAmountInFreeDefinedCrcy2` |  | |  |  |  |  |
| `CreditAmountInFreeDefinedCrcy2` |  | |  |  |  |  |
| `DebitAmountInFreeDefinedCrcy3` |  | |  |  |  |  |
| `CreditAmountInFreeDefinedCrcy3` |  | |  |  |  |  |
| `DebitAmountInFreeDefinedCrcy4` |  | |  |  |  |  |
| `CreditAmountInFreeDefinedCrcy4` |  | |  |  |  |  |
| `DebitAmountInFreeDefinedCrcy5` |  | |  |  |  |  |
| `CreditAmountInFreeDefinedCrcy5` |  | |  |  |  |  |
| `DebitAmountInFreeDefinedCrcy6` |  | |  |  |  |  |
| `CreditAmountInFreeDefinedCrcy6` |  | |  |  |  |  |
| `DebitAmountInFreeDefinedCrcy7` |  | |  |  |  |  |
| `CreditAmountInFreeDefinedCrcy7` |  | |  |  |  |  |
| `DebitAmountInFreeDefinedCrcy8` |  | |  |  |  |  |
| `CreditAmountInFreeDefinedCrcy8` |  | |  |  |  |  |
| `IsStatisticalOrder` |  | |  |  |  |  |
| `IsStatisticalCostCenter` |  | |  |  |  |  |
| `IsStatisticalSalesDocument` |  | |  |  |  |  |
| `WBSIsStatisticalWBSElement` |  | |  |  |  |  |
| `FiscalQuarter` |  | |  |  |  |  |
| `FiscalYearQuarter` |  | |  |  |  |  |
| `Employee` |  | |  |  |  |  |
| `EmployeeFullName` |  | |  |  |  |  |
| `AssetAccountingKeyFigure` |  | |  |  |  |  |
| `ProjAndSlsOrdStkAmtInCCCrcy` |  | |  |  |  |  |
| `ProjAndSlsOrdStkAmtInGlobCrcy` |  | |  |  |  |  |
| `RevenueAmountInCompanyCodeCrcy` |  | |  |  |  |  |
| `RevenueInGlobalCurrency` |  | |  |  |  |  |
| `GrossRevenueAmtInCCCrcy` |  | |  |  |  |  |
| `RecognizedRevnAmtInCCCrcy` |  | |  |  |  |  |
| `RecognizedRevnAmtInGlobCrcy` |  | |  |  |  |  |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  |  |  |  |
| `RevenueAdjustAmtInGlobCrcy` |  | |  |  |  |  |
| `DeferredRevenueAmtInCCCrcy` |  | |  |  |  |  |
| `AccruedRevenueAmtInCCCrcy` |  | |  |  |  |  |
| `RecognizableRevenueAmtInCCCrcy` |  | |  |  |  |  |
| `RecognizableRevnAmtInGlobCrcy` |  | |  |  |  |  |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  |  |  |
| `BilledRevenueAmtInGlobCrcy` |  | |  |  |  |  |
| `BilledValnQtyInCostSourceUnit` |  | |  |  |  |  |
| `UnbilledRevnInCoCodeCrcy` |  | |  |  |  |  |
| `RecognizedMarginAmtInCCCrcy` |  | |  |  |  |  |
| `MnlContrAccrPnLItmAmtInCCCrcy` |  | |  |  |  |  |
| `CostAmountInCompanyCodeCrcy` |  | |  |  |  |  |
| `CostOfGoodsSoldAmtInGlobCrcy` |  | |  |  |  |  |
| `COGSAmountInCoCodeCrcy` |  | |  |  |  |  |
| `FxdCOGSAmtInGlobCrcy` |  | |  |  |  |  |
| `FxdCOGSAmtInCCCrcy` |  | |  |  |  |  |
| `RecognizedCOGSAmtInCCCrcy` |  | |  |  |  |  |
| `COGSAdjustmentAmtInCCCrcy` |  | |  |  |  |  |
| `DeferredCOGSAmtInCCCrcy` |  | |  |  |  |  |
| `AccruedCOGSAmtInCCCrcy` |  | |  |  |  |  |
| `RecognizableCostAmtInCCCrcy` |  | |  |  |  |  |
| `ImminentLossRsrvAmtInCCCrcy` |  | |  |  |  |  |
| `SalesDeductReserveAmtInCCCrcy` |  | |  |  |  |  |
| `UnrlzdCostsReserveAmtInCCCrcy` |  | |  |  |  |  |
| `MnlContrAccrBalShtAmtInCCCrcy` |  | |  |  |  |  |
| `SalesDeductionAmountInGlobCrcy` |  | |  |  |  |  |
| `SalesDeductionAmtInCoCodeCrcy` |  | |  |  |  |  |
| `PriceDifferenceAmtInGlobCrcy` |  | |  |  |  |  |
| `PriceDifferenceAmtInCCCrcy` |  | |  |  |  |  |
| `AdminOverheadAmtInGlobCrcy` |  | |  |  |  |  |
| `AdminOverheadAmtInCoCodeCrcy` |  | |  |  |  |  |
| `SalesOverheadAmtInGlobCrcy` |  | |  |  |  |  |
| `SalesOverheadAmtInCoCodeCrcy` |  | |  |  |  |  |
| `MarketingOverheadAmtInGlobCrcy` |  | |  |  |  |  |
| `MarketingOvhdAmtInCoCodeCrcy` |  | |  |  |  |  |
| `RnDOverheadAmtInGlobCrcy` |  | |  |  |  |  |
| `RnDOverheadAmtInCCCrcy` |  | |  |  |  |  |
| `LongTermInvmtAmtInCCCrcy` |  | |  |  |  |  |
| `AcctsRblAmtInCCCrcy` |  | |  |  |  |  |
| `AcctsOthRblAmtInCCCrcy` |  | |  |  |  |  |
| `AcctsPyblAmtInCCCrcy` |  | |  |  |  |  |
| `AcctsOthPyblAmtInCCCrcy` |  | |  |  |  |  |
| `ProvisionAmtInCCCrcy` |  | |  |  |  |  |
| `NotesReceivableAmtInCCCrcy` |  | |  |  |  |  |
| `TangibleAstDeprAmtInCCCrcy` |  | |  |  |  |  |
| `IntngblAssetAmtznAmtInCCCrcy` |  | |  |  |  |  |
| `TangibleAstAmtInCCCrcy` |  | |  |  |  |  |
| `IntangibleAstAmtInCCCrcy` |  | |  |  |  |  |
| `FixedAssetRtrmtAmtInCCCrcy` |  | |  |  |  |  |
| `InventoryAmtInCCCrcy` |  | |  |  |  |  |
| `CommonStockAmtInCCCrcy` |  | |  |  |  |  |
| `CashAndCashEqvlntAmtInCCCrcy` |  | |  |  |  |  |
| `DownPaymentAmtInCCCrcy` |  | |  |  |  |  |
| `AssetAmtInCCCrcy` |  | |  |  |  |  |
| `LiabilityEquityAmtInCCCrcy` |  | |  |  |  |  |
| `NotAssignedAmtInCCCrcy` |  | |  |  |  |  |
| `NetResultAmtInCCCrcy` |  | |  |  |  |  |
| `PnLResultAmtInCCCrcy` |  | |  |  |  |  |
| `GLAcctNetIncomeAmtInCCCrcy` |  | |  |  |  |  |
| `AssetLiabilityAmtInCCCrcy` |  | |  | `cast ( DeferredCOGSAmtInCCCrcy + DeferredRevenueAmtInCCCrcy + AccruedRevenueAmtInCCCrcy + AccruedCOGSAmtInCCCrcy as fis_asset_lblty)` |  |  |
| `VarblCOGSAmtInGlobCrcy` |  | |  | `cast ( CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy as fins_cogs_variable)` |  |  |
| `VarblCOGSAmtInCCCrcy` |  | |  | `cast ( COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy as fins_cogs_variable)` |  |  |
| `ContrbnMargin1AmtInGlobCrcy` |  | |  | `cast ( BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + RevenueAdjustAmtInGlobCrcy + ( CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy ) as fins_contribution_margin_i)` |  |  |
| `ContrbnMargin1AmtInCoCodeCrcy` |  | |  | `cast ( BilledRevenueAmtInCoCodeCrcy + SalesDeductionAmtInCoCodeCrcy + RevenueAdjustmentAmtInCCCrcy + ( COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy ) as fins_contribution_margin_i)` |  |  |
| `ContrbnMargin2AmtInGlobCrcy` |  | |  | `cast ( ( BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + RevenueAdjustAmtInGlobCrcy + (CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy) ) + FxdCOGSAmtInGlobCrcy + PriceDifferenceAmtInGlobCrcy as fins_contribution_margin_ii)` |  |  |
| `ContrbnMargin2AmtInCoCodeCrcy` |  | |  | `cast ( ( BilledRevenueAmtInCoCodeCrcy + SalesDeductionAmtInCoCodeCrcy + RevenueAdjustmentAmtInCCCrcy + (COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy) ) + FxdCOGSAmtInCCCrcy + PriceDifferenceAmtInCCCrcy as fins_contribution_margin_ii)` |  |  |
| `ContrbnMargin3AmtInGlobCrcy` |  | |  | `cast ( ( ( BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + RevenueAdjustAmtInGlobCrcy + (CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy) ) + FxdCOGSAmtInGlobCrcy + PriceDifferenceAmtInGlobCrcy ) + AdminOverheadAmtInGlobCrcy + SalesOverheadAmtInGlobCrcy + MarketingOverheadAmtInGlobCrcy + RnDOverheadAmtInGlobCrcy as fins_contribution_margin_iii)` |  |  |
| `ContrbnMargin3AmtInCoCodeCrcy` |  | |  | `cast ( ( ( BilledRevenueAmtInCoCodeCrcy + SalesDeductionAmtInCoCodeCrcy + RevenueAdjustmentAmtInCCCrcy + (COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy) ) + FxdCOGSAmtInCCCrcy + PriceDifferenceAmtInCCCrcy ) + AdminOverheadAmtInCoCodeCrcy + SalesOverheadAmtInCoCodeCrcy + MarketingOvhdAmtInCoCodeCrcy + RnDOverheadAmtInCCCrcy as fins_contribution_margin_iii)` |  |  |
| `OperatingActyCashAmtInCCCrcy` |  | |  | `cast ( PnLResultAmtInCCCrcy - TangibleAstDeprAmtInCCCrcy - IntngblAssetAmtznAmtInCCCrcy - FixedAssetRtrmtAmtInCCCrcy - ProvisionAmtInCCCrcy - InventoryAmtInCCCrcy - AcctsRblAmtInCCCrcy - AcctsOthRblAmtInCCCrcy + AcctsPyblAmtInCCCrcy + AcctsOthPyblAmtInCCCrcy as fins_cfs_cashopg)` |  |  |
| `InvestingActyCashAmtInCCCrcy` |  | |  | `cast ( - TangibleAstAmtInCCCrcy + TangibleAstDeprAmtInCCCrcy - IntangibleAstAmtInCCCrcy + IntngblAssetAmtznAmtInCCCrcy + FixedAssetRtrmtAmtInCCCrcy - LongTermInvmtAmtInCCCrcy as fins_cfs_cashinvtg)` |  |  |
| `FinancingActyCashAmtInCCCrcy` |  | |  | `cast ( CommonStockAmtInCCCrcy + NotesReceivableAmtInCCCrcy as fins_cfs_cashfin)` |  |  |
| `NetCashAmtInCCCrcy` |  | |  | `cast ( ( PnLResultAmtInCCCrcy - TangibleAstDeprAmtInCCCrcy - IntngblAssetAmtznAmtInCCCrcy - FixedAssetRtrmtAmtInCCCrcy - ProvisionAmtInCCCrcy - InventoryAmtInCCCrcy - AcctsRblAmtInCCCrcy - AcctsOthRblAmtInCCCrcy + AcctsPyblAmtInCCCrcy + AcctsOthPyblAmtInCCCrcy) + ( - TangibleAstAmtInCCCrcy + TangibleAstDeprAmtInCCCrcy - IntangibleAstAmtInCCCrcy + IntngblAssetAmtznAmtInCCCrcy + FixedAssetRtrmtAmtInCCCrcy - LongTermInvmtAmtInCCCrcy) + (CommonStockAmtInCCCrcy + NotesReceivableAmtInCCCrcy) as fins_cfs_netcash)` |  |  |
| `GLAccountAuthorizationGroup` |  | |  |  |  |  |
| `SupplierBasicAuthorizationGrp` |  | |  |  |  |  |
| `CustomerBasicAuthorizationGrp` |  | |  |  |  |  |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  |  |  |
| `OrderType` |  | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `AssetClass` |  | |  |  |  |  |
| `_JournalEntry` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_FiscalPeriod` | | ✓ | | | | |
| `_FiscalPeriodForVariant` | | ✓ | | | | |
| `_LedgerFiscalYear` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_FiscalYearPeriod` | | ✓ | | | | |
| `_FiscalYearPeriodForVariant` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_FiscalCalendarDate` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_BalanceTransactionCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |
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
| `_ProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_CostAnalysisResource` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_PredecessorReferenceDocType` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_PartnerCompanyCode` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_SubLedgerAccLineItemType` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_EliminationProfitCenter` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_OffsettingAccountType` | | ✓ | | | | |
| `_OffsettingChartOfAccounts` | | ✓ | | | | |
| `_OffsettingAccount` | | ✓ | | | | |
| `_OffsettingAccountWithBP` | | ✓ | | | | |
| `_AlternativeGLAccount` | | ✓ | | | | |
| `_CountryChartOfAccounts` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_ClearingJrnlEntryFiscalYear` | | ✓ | | | | |
| `_ClearingJournalEntry` | | ✓ | | | | |
| `_ClearingAccountingDocument` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_GroupMasterFixedAsset` | | ✓ | | | | |
| `_GroupFixedAsset` | | ✓ | | | | |
| `_InventorySpecialStockValnType` | | ✓ | | | | |
| `_InventorySpclStockValnType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventorySpclStkSalesDocument` | | ✓ | | | | |
| `_InventorySpclStkSalesDocItm` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntIntID` | | ✓ | | | | |
| `_InventorySpclStockWBSElement` | | ✓ | | | | |
| `_InventorySpecialStockSupplier` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_ControllingDebitCreditCode` | | ✓ | | | | |
| `_OriginSenderObject` | | ✓ | | | | |
| `_ControllingObjectClass` | | ✓ | | | | |
| `_PartnerControllingObjectClass` | | ✓ | | | | |
| `_OriginCostCenter` | | ✓ | | | | |
| `_OriginProfitCenter` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_OriginCostCtrActivityType` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_PartnerOrder` | | ✓ | | | | |
| `_PartnerOrder_2` | | ✓ | | | | |
| `_PartnerOrderCategory` | | ✓ | | | | |
| `_PartnerWBSElement` | | ✓ | | | | |
| `_PartnerProject` | | ✓ | | | | |
| `_PartnerSalesDocument` | | ✓ | | | | |
| `_PartnerSalesDocumentItem` | | ✓ | | | | |
| `_PartnerBusinessProcess` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_WorkPackageWorkItem` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SoldMaterial` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_PartnerFund` | | ✓ | | | | |
| `_FundsCenter` | | ✓ | | | | |
| `_MovementCategory` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_CostOriginGroup` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_HouseBankAccount` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_OperatingConcern` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_ProjectNetwork` | | ✓ | | | | |
| `_PurReqValuationArea` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_GLAccountHierarchy` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_MaintenanceActivityType` | | ✓ | | | | |
| `_MaintOrdPlngDegreeCode` | | ✓ | | | | |
| `_PMNotificationPriorityType` | | ✓ | | | | |
| `_PMNotificationPriority` | | ✓ | | | | |
| `_MaintenanceOrderSubOperation` | | ✓ | | | | |
| `_Assembly` | | ✓ | | | | |
| `_SuperiorOrder` | | ✓ | | | | |
| `_ProjectInternalID` | | ✓ | | | | |
| `_ConditionContract` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceContractItem` | | ✓ | | | | |
| `_ServiceContractType` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementBasicDataText` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_ProjectBasicDataText` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_PartnerProjctExtrnalIDText` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElemntExtrnalIDText` | | ✓ | | | | |
| `_PartnerProjectBasicData` | | ✓ | | | | |
| `_PartnerProjectBasicDataText` | | ✓ | | | | |
| `_PartnerWBSElementBasicData` | | ✓ | | | | |
| `_PartnerWBSElemntBasicDataText` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntBD` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntExtID` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_ProviderContractItem` | | ✓ | | | | |
| `_TimeSheetOvertimeCat` | | ✓ | | | | |
| `_AssetKeyFigure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_JournalEntryItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIGLACCTLITST'
@EndUserText.label: 'G/L Line Item with Semantic Tag Including FA'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.auditFilter: #ENABLED
@Analytics.dataCategory: #CUBE
@ObjectModel.representativeKey: 'LedgerGLLineItem'
@AbapCatalog.preserveKey: true
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: ['USE_HEX_PLAN','NO_JOIN_THRU_AGGR']
define view I_GLAccountLineItemSemTag
  as select from P_GLAccountLineItemSemTag as P_GLAccountLineItemSemTag
  association [1..1] to E_JournalEntryItem as _Extension on  $projection.SourceLedger       = _Extension.SourceLedger
                                                         and $projection.CompanyCode        = _Extension.CompanyCode
                                                         and $projection.FiscalYear         = _Extension.FiscalYear
                                                         and $projection.AccountingDocument = _Extension.AccountingDocument
                                                         and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem

{
      @ObjectModel.foreignKey.association: '_Ledger'
      @Environment.sql.passValue: true
  key Ledger,
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Environment.sql.passValue: true
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
      @Environment.sql.passValue: true
  key FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AccountingDocument,
  key LedgerGLLineItem,

      ///////////////////////////////////////////////////////////////////////
      // I_SemTagGLAccount
      ///////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_Hierarchy'
      @Environment.sql.passValue: true
  key GLAccountHierarchy,
      @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
      @Semantics.businessDate.from: true
  key ValidityStartDate,
      @Semantics.businessDate.to: true
  key ValidityEndDate,

      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      //@Environment.sql.passValue: true
      @Semantics.fiscal.year: true
      LedgerFiscalYear,
      GLRecordType,

      // Test workaround
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,

      ///////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
      ///////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      FinancialTransactionType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      BusinessTransactionType,
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      ReferenceDocumentType,
      @ObjectModel.foreignKey.association: '_LogicalSystem'
      LogicalSystem,
      ReferenceDocumentContext,
      ReferenceDocument,
      ReferenceDocumentItem,
      ReferenceDocumentItemGroup,
      //SUBTA,
      IsReversal,
      IsReversed,
      //XTRUEREV,
      //AWTYP_REV,
      ReversalReferenceDocumentCntxt,
      ReversalReferenceDocument,
      //SUBTA_REV,
      IsSettlement,
      IsSettled,
      @ObjectModel.foreignKey.association: '_PredecessorReferenceDocType'
      PredecessorReferenceDocType,
      PredecessorReferenceDocCntxt,
      PredecessorReferenceDocument,
      PredecessorReferenceDocItem,
      //PREC_SUBTA,

      SourceReferenceDocumentType,
      SourceLogicalSystem,
      SourceReferenceDocumentCntxt,
      SourceReferenceDocument,
      SourceReferenceDocumentItem,
      SourceReferenceDocSubitem,
      IsCommitment,
      JrnlEntryItemObsoleteReason,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,


      ////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      PartnerBusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      PartnerCompany,
      PartnerSegment,


      /////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_VALUE_DATA Unified Journal Entry: Value Fields
      /////////////////////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
      @Semantics.currencyCode:true
      BalanceTransactionCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      AmountInBalanceTransacCrcy,

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

      ////////////////////////////////////
      // NEW
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      @Semantics.currencyCode:true
      GlobalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      AmountInGlobalCurrency,

      // Functional Currency
      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      @Semantics.currencyCode:true
      FunctionalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      AmountInFunctionalCurrency,

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
      ////////////////////////////////////

      ////////////////////////////////////
      // NEW
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      FixedAmountInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      GrpValnFixedAmtInGlobCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      PrftCtrValnFxdAmtInGlobCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      TotalPriceVarcInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      GrpValnTotPrcVarcInGlobCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      PrftCtrValnTotPrcVarcInGlbCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      FixedPriceVarcInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      GrpValnFixedPrcVarcInGlobCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      PrftCtrValnFxdPrcVarcInGlbCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      FixedAmountInCoCodeCrcy,

      ////////////////////////////////////


      @Semantics.currencyCode:true
      ControllingObjectCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      AmountInObjectCurrency,


      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure:true
      BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      Quantity,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      FixedQuantity,

      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      @Semantics.unitOfMeasure:true
      CostSourceUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      ValuationQuantity,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      ValuationFixedQuantity,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
      @Semantics.unitOfMeasure:true
      AdditionalQuantity1Unit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }
      AdditionalQuantity1,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
      @Semantics.unitOfMeasure:true
      AdditionalQuantity2Unit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} }
      AdditionalQuantity2,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
      @Semantics.unitOfMeasure:true
      AdditionalQuantity3Unit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }
      AdditionalQuantity3,


      /////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      DebitCreditCode,
      //      @ObjectModel.foreignKey.association: '_FiscalPeriod'
      FiscalPeriod,
      @Analytics.internalName: #LOCAL
      @Semantics.fiscal.yearVariant: true
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      P_GLAccountLineItemSemTag.FiscalYearVariant,
      @Semantics.fiscal.yearPeriod: true
      FiscalYearPeriod,
      PostingDate,
      DocumentDate,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      AccountingDocumentType,
      AccountingDocumentItem,
      AssignmentReference,
      @ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
      AccountingDocumentCategory,
      @ObjectModel.foreignKey.association: '_PostingKey'
      PostingKey,
      TransactionTypeDetermination,
      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      SubLedgerAcctLineItemType,
      //      @ObjectModel.foreignKey.association: '_User'
      AccountingDocCreatedByUser,
      LastChangeDateTime,
      CreationDateTime,
      CreationDate,
      @ObjectModel.foreignKey.association: '_EliminationProfitCenter'
      EliminationProfitCenter,
      OriginObjectType,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      GLAccountType,
      @ObjectModel.foreignKey.association: '_AlternativeGLAccount'
      AlternativeGLAccount,
      @ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
      CountryChartOfAccounts,


      ///////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_GEN  Unified Journal Entry: Fields for several subledgers
      //////////////////////////////////////////////////////////////////////////
      InvoiceReference,
      InvoiceReferenceFiscalYear,
      FollowOnDocumentType,
      InvoiceItemReference,
      ReferencePurchaseOrderCategory,
      @ObjectModel.foreignKey.association: '_PurchasingDocument'
      PurchasingDocument,
      @ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
      PurchasingDocumentItem,
      AccountAssignmentNumber,
      DocumentItemText,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_Material'
      Material,
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,

      ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_ConditionContract'
      ConditionContract,
      
      ComponentBreakdown,
      CompBreakdownScaleNumerator,

      /////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FI  Unified Journal Entry: Fields for FI subledgers
      /////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      FinancialAccountType,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      SpecialGLCode,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_TaxCodeStdVH',
                         element: 'TaxCode' }
            }]
      //      @ObjectModel.foreignKey.association: '_TaxCode'
      TaxCode,
      @ObjectModel.foreignKey.association: '_HouseBank'
      HouseBank,
      @ObjectModel.foreignKey.association: '_HouseBankAccount'
      HouseBankAccount,
      IsOpenItemManaged,
      ClearingDate,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntry'
      @ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
      ClearingAccountingDocument,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntryFiscalYear'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
      ClearingDocFiscalYear,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJournalEntry'
      ClearingJournalEntry,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJrnlEntryFiscalYear'
      ClearingJournalEntryFiscalYear,


      /////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
      /////////////////////////////////////////////////////////////////////////
      AssetDepreciationArea,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
      FixedAsset,
      AssetValueDate,
      @ObjectModel.foreignKey.association: '_AssetTransactionType'
      AssetTransactionType,
      @ObjectModel.foreignKey.association: '_MovementCategory'
      AssetAcctTransClassfctn,
      DepreciationFiscalPeriod,
      @ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'
      GroupMasterFixedAsset,
      @ObjectModel.foreignKey.association: '_GroupFixedAsset'
      GroupFixedAsset,


      //////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_ML Unified Journal Entry: Fields for Material Ledger
      //////////////////////////////////////////////////////////////////////////
      CostEstimate,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'InvtrySpecialStockValnType_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'
      @ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
      InventorySpecialStockValnType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_InventorySpclStockValnType'
      InvtrySpecialStockValnType_2,
      //xobew,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'
      InventorySpclStkSalesDocument, //  as InventorySpecialStockSalesDocument,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
      InventorySpclStkSalesDocItm, //  as InventorySpecialStockSalesDocumentItem,
      @ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntIntID'
      InvtrySpclStockWBSElmntIntID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntExtID'
      InvtrySpclStockWBSElmntExtID,
      @ObjectModel.foreignKey.association: '_InventorySpclStockWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'InvtrySpclStockWBSElmntIntID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntIntID'
      InventorySpclStockWBSElement, //  as InventorySpecialStockWBSElement,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockSupplier'
      InventorySpecialStockSupplier,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      InventoryValuationType,
      @ObjectModel.foreignKey.association: '_Purreqvaluationarea'
      ValuationArea,


      ////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_CFIN   Unified Journal Entry: Fields for Central Finance
      //////////////////////////////////////////////////////////////////////////////
      //@ObjectModel.foreignKey.association: '_SenderGLAccount'
      SenderGLAccount,
      SenderAccountAssignment,
      SenderAccountAssignmentType,


      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
      ///////////////////////////////////////////////////////////////////////////
      //      @ObjectModel.foreignKey.association: '_CostOriginGroup'
      CostOriginGroup,
      @ObjectModel.foreignKey.association: '_OriginSenderObject'
      OriginSenderObject,
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      ControllingDebitCreditCode,
      ControllingObjectDebitType,
      QuantityIsIncomplete,
      @ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
      OffsettingAccount,
      @ObjectModel.foreignKey.association: '_OffsettingAccountType'
      OffsettingAccountType,
      @ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
      OffsettingChartOfAccounts,
      LineItemIsCompleted,
      PersonnelNumber,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerControllingObjectClass'
      PartnerControllingObjectClass,
      @ObjectModel.foreignKey.association: '_OriginCostCenter'
      OriginCostCenter,
      @ObjectModel.foreignKey.association: '_OriginProfitCenter'
      OriginProfitCenter,
      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      OriginCostCtrActivityType,
      AccountAssignment,
      AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_Order'
      OrderID,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      OrderCategory,
      @ObjectModel.foreignKey.association: '_WBSElementInternalID'
      WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      WBSElementExternalID,
      @ObjectModel.foreignKey.association: '_WBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'WBSElementInternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementInternalID'
      WBSElement,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      PartnerWBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      PartnerWBSElementExternalID,
      @ObjectModel.foreignKey.association: '_ProjectInternalID'
      ProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      ProjectExternalID,
      @ObjectModel.foreignKey.association: '_Project'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'ProjectInternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ProjectInternalID'
      Project,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      PartnerProjectInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      PartnerProjectExternalID,
      @ObjectModel.foreignKey.association: '_OperatingConcern'
      OperatingConcern,
      @ObjectModel.foreignKey.association: '_ProjectNetwork'
      ProjectNetwork,
      //      @ObjectModel.foreignKey.association: '_RelatedNetworkActivity'
      RelatedNetworkActivity,
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      BusinessProcess,
      CostObject,
      BillableControl,
      //bemot,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      CostAnalysisResource,
      CustomerServiceNotification,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                         element: 'ServiceDocumentType' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AcctgServiceDocumentVH',
                         element: 'ServiceDocument' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocument'
      ServiceDocument,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                         element: 'ServiceDocumentItem' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      ServiceDocumentItem,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_ServiceContractTypeStdVH',
                         element: 'ServiceContractType' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractType'
      ServiceContractType,
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AcctgServiceContractVH',
                         element: 'ServiceContract' }
            }]
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContract'
      ServiceContract,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ServiceContractItem'
      ServiceContractItem,

      BusinessSolutionOrder,
      BusinessSolutionOrderItem,

      @ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
      TimeSheetOvertimeCategory,

      @ObjectModel.foreignKey.association: '_ProviderContract'
      ProviderContract,
      @ObjectModel.foreignKey.association: '_ProviderContractItem'
      ProviderContractItem,

      //      @ObjectModel.foreignKey.association: '_CAProviderContract'
      //      CAProviderContract,
      //      //      @ObjectModel.foreignKey.association: '_CAProviderContractItemNumber'
      //      CAProviderContractItemNumber,

      PartnerAccountAssignment,
      PartnerAccountAssignmentType,
      WorkPackage,
      WorkItem,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerOrder_2'
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      PartnerOrder,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      PartnerOrder_2,
      @ObjectModel.foreignKey.association: '_PartnerOrderCategory'
      PartnerOrderCategory,
      @ObjectModel.foreignKey.association: '_PartnerWBSElement'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerWBSElementInternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerWBSElementInternalID'
      PartnerWBSElement,
      @ObjectModel.foreignKey.association: '_PartnerProject'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'PartnerProjectInternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'PartnerProjectInternalID'
      PartnerProject,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocument'
      PartnerSalesDocument,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocumentItem'
      PartnerSalesDocumentItem,
      PartnerProjectNetwork,
      //      @ObjectModel.foreignKey.association: '_PartnerProjectNetworkActivity'
      PartnerProjectNetworkActivity,
      @ObjectModel.foreignKey.association: '_PartnerBusinessProcess'
      PartnerBusinessProcess,
      PartnerCostObject,

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
      @Analytics.internalName:#LOCAL
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SoldMaterial'
      SoldMaterial,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      SoldProductGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      ProductGroup,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      CustomerSupplierCountry,
      @ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
      @Analytics.internalName:#LOCAL
      CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      CustomerSupplierCorporateGroup,


      //////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
      /////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_Fund'
      Fund,
      GrantID,
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      BudgetPeriod,
      @ObjectModel.foreignKey.association: '_PartnerFund'
      PartnerFund,
      PartnerGrant,
      PartnerBudgetPeriod,
      @ObjectModel.foreignKey.association: '_FundsCenter'
      FundsCenter,
      FundedProgram,

      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
      ///////////////////////////////////////////////////////////////////////
      JointVenture,
      JointVentureEquityGroup,
      JointVentureCostRecoveryCode,
      //vptnr,
      //btype,
      JointVentureEquityType,
      //prodper,

      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_RE STRU  0 0 Unified Journal Entry: Fields for Real Estate
      ///////////////////////////////////////////////////////////////////////
      //swenr,
      //sgenr,
      //sgrnr,
      //smenr,
      //recnnr,
      //snksl,
      //sempsl,
      SettlementReferenceDate,
      //pswenr,
      //psgenr,
      //psgrnr,
      //psmenr,
      //precnnr,
      //psnksl,
      //psempsl,
      //pdabrz
      WorkCenterInternalID,
      OrderOperation,
      OrderItem,

      //////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_LOG_ACT:  New Fields  PM  //
      //////////////////////////////////////////////////
      //@ObjectModel.foreignKey.association: '_MaintenanceOrderSubOperation'
      OrderSuboperation,
      @ObjectModel.foreignKey.association: '_Equipment'
      Equipment,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      FunctionalLocation,
      @ObjectModel.foreignKey.association: '_Assembly'
      Assembly,
      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      MaintenanceActivityType,
      @ObjectModel.foreignKey.association: '_MaintOrdPlngDegreeCode'
      MaintenanceOrderPlanningCode,
      @ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
      MaintPriorityType,
      @ObjectModel.foreignKey.association: '_PMNotificationPriority'
      MaintPriority,
      @ObjectModel.foreignKey.association: '_SuperiorOrder'
      SuperiorOrder,
      MaintenanceOrderIsPlanned,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      DebitAmountInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      CreditAmountInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      DebitAmountInTransCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      CreditAmountInTransCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      DebitAmountInBalanceTransCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      CreditAmountInBalanceTransCrcy,

      ////////////////////////////////////
      // NEW
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      DebitAmountInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      CreditAmountInGlobalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      DebitAmountInFunctionalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      CreditAmountInFunctionalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      DebitAmountInFreeDefinedCrcy1,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      CreditAmountInFreeDefinedCrcy1,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      DebitAmountInFreeDefinedCrcy2,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      CreditAmountInFreeDefinedCrcy2,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      DebitAmountInFreeDefinedCrcy3,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      CreditAmountInFreeDefinedCrcy3,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      DebitAmountInFreeDefinedCrcy4,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      CreditAmountInFreeDefinedCrcy4,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      DebitAmountInFreeDefinedCrcy5,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      CreditAmountInFreeDefinedCrcy5,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      DebitAmountInFreeDefinedCrcy6,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      CreditAmountInFreeDefinedCrcy6,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      DebitAmountInFreeDefinedCrcy7,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      CreditAmountInFreeDefinedCrcy7,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      DebitAmountInFreeDefinedCrcy8,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      CreditAmountInFreeDefinedCrcy8,
      //////////////////////////////////


      IsStatisticalOrder,
      IsStatisticalCostCenter,
      IsStatisticalSalesDocument,
      WBSIsStatisticalWBSElement,

      ///////////////////////////////////////////////////////////////////////
      // Additional requested fields
      ///////////////////////////////////////////////////////////////////////
      //      @ObjectModel.foreignKey.association: '_FiscalQuarter'
      FiscalQuarter,
      FiscalYearQuarter,
      Employee,
      EmployeeFullName,
      @ObjectModel.foreignKey.association: '_AssetKeyFigure'
      AssetAccountingKeyFigure,


      ///////////////////////////////////////////////////////////////////////
      // Restricted Key Figures
      ///////////////////////////////////////////////////////////////////////
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ProjAndSlsOrdStkAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      ProjAndSlsOrdStkAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RevenueAmountInCompanyCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      RevenueInGlobalCurrency,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      GrossRevenueAmtInCCCrcy, //GrossRevenue,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RecognizedRevnAmtInCCCrcy, //GrossRevenue,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      RecognizedRevnAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RevenueAdjustmentAmtInCCCrcy, //GrossRevenueAdjusted,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      RevenueAdjustAmtInGlobCrcy, //GrossRevenueAdjusted,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      DeferredRevenueAmtInCCCrcy, //GrossRevenueDeferred,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AccruedRevenueAmtInCCCrcy, //GrossRevenueAccrued,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RecognizableRevenueAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      RecognizableRevnAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      BilledRevenueAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      BilledRevenueAmtInGlobCrcy,

      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      @DefaultAggregation: #SUM
      BilledValnQtyInCostSourceUnit,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      UnbilledRevnInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RecognizedMarginAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      MnlContrAccrPnLItmAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      CostAmountInCompanyCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      CostOfGoodsSoldAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      COGSAmountInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      FxdCOGSAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      FxdCOGSAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RecognizedCOGSAmtInCCCrcy, //CostofGoodsSold,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      COGSAdjustmentAmtInCCCrcy, //CostofGoodsSoldAdjusted,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      DeferredCOGSAmtInCCCrcy, //CostofGoodsSoldDeferred,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AccruedCOGSAmtInCCCrcy, //CostofGoodsSoldAccrued,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RecognizableCostAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ImminentLossRsrvAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      SalesDeductReserveAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      UnrlzdCostsReserveAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      MnlContrAccrBalShtAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      SalesDeductionAmountInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      SalesDeductionAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      PriceDifferenceAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PriceDifferenceAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      AdminOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AdminOverheadAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      SalesOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      SalesOverheadAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      MarketingOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      MarketingOvhdAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      RnDOverheadAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      RnDOverheadAmtInCCCrcy,

      // Cash Flow Statement (IFRS)
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      LongTermInvmtAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AcctsRblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AcctsOthRblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AcctsPyblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AcctsOthPyblAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      ProvisionAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      NotesReceivableAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      TangibleAstDeprAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      IntngblAssetAmtznAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      TangibleAstAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      IntangibleAstAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      FixedAssetRtrmtAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      InventoryAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      CommonStockAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      CashAndCashEqvlntAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      DownPaymentAmtInCCCrcy,
      /////////////////////////////////////////////////////////////////////////////
      //New added SemanticTag
      /////////////////////////////////////////////////////////////////////////////
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      AssetAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      LiabilityEquityAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      NotAssignedAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      NetResultAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      PnLResultAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      GLAcctNetIncomeAmtInCCCrcy,

      ///////////////////////////////////////////////////////////////////////
      // Calculated Restricted Key Figures
      ///////////////////////////////////////////////////////////////////////

      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #SUM
      //      //GrossProfit + OperatingExpenses
      //      RecognizedMarginAmount + OperatingExpenses                                                      as EBITA,
      //
      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #SUM
      //      //GrossProfit + OperatingExpenses + Depreciation
      //      RecognizedMarginAmount + OperatingExpenses + Depreciation                                       as EBIT,
      //
      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #SUM
      //      //GrossProfit + OperatingExpenses + Depreciation + Interest
      //      RecognizedMarginAmount + OperatingExpenses + Depreciation + Interest                            as EBT,

      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      @DefaultAggregation: #SUM
      //      PeriodProfit + NetCashOperatingActivities,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      cast (
        DeferredCOGSAmtInCCCrcy + DeferredRevenueAmtInCCCrcy + AccruedRevenueAmtInCCCrcy + AccruedCOGSAmtInCCCrcy
      as fis_asset_lblty)              as AssetLiabilityAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      cast (
        CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy
      as fins_cogs_variable)           as VarblCOGSAmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      cast (
        COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy
      as fins_cogs_variable)           as VarblCOGSAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      // BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + VarblCOGSAmtInGlobCrcy
      cast (
        BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + RevenueAdjustAmtInGlobCrcy + (
        CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy )
      as fins_contribution_margin_i)   as ContrbnMargin1AmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      // BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + VarblCOGSAmtInGlobCrcy
      cast (
        BilledRevenueAmtInCoCodeCrcy + SalesDeductionAmtInCoCodeCrcy + RevenueAdjustmentAmtInCCCrcy + (
        COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy )
      as fins_contribution_margin_i)   as ContrbnMargin1AmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      // ContrbnMargin1AmtInGlobCrcy + FxdCOGSAmtInGlobCrcy + PriceDifferenceAmtInGlobCrcy
      cast ( (
        BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + RevenueAdjustAmtInGlobCrcy + (CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy) ) +
        FxdCOGSAmtInGlobCrcy + PriceDifferenceAmtInGlobCrcy
      as fins_contribution_margin_ii)  as ContrbnMargin2AmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      // ContrbnMargin1AmtInGlobCrcy + FxdCOGSAmtInGlobCrcy + PriceDifferenceAmtInGlobCrcy
      cast ( (
        BilledRevenueAmtInCoCodeCrcy + SalesDeductionAmtInCoCodeCrcy + RevenueAdjustmentAmtInCCCrcy + (COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy) ) +
        FxdCOGSAmtInCCCrcy + PriceDifferenceAmtInCCCrcy
      as fins_contribution_margin_ii)  as ContrbnMargin2AmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @DefaultAggregation: #SUM
      // ContrbnMargin2AmtInGlobCrcy + AdminOverheadAmtInGlobCrcy + SalesOverheadAmtInGlobCrcy + MarketingOverheadAmtInGlobCrcy + ResearchAndDevOveAmtInGlobCrcy
      cast ( ( (
        BilledRevenueAmtInGlobCrcy + SalesDeductionAmountInGlobCrcy + RevenueAdjustAmtInGlobCrcy + (CostOfGoodsSoldAmtInGlobCrcy - FxdCOGSAmtInGlobCrcy) ) +
        FxdCOGSAmtInGlobCrcy + PriceDifferenceAmtInGlobCrcy ) +
        AdminOverheadAmtInGlobCrcy + SalesOverheadAmtInGlobCrcy + MarketingOverheadAmtInGlobCrcy + RnDOverheadAmtInGlobCrcy
      as fins_contribution_margin_iii) as ContrbnMargin3AmtInGlobCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      // ContrbnMargin2AmtInGlobCrcy + AdminOverheadAmtInGlobCrcy + SalesOverheadAmtInGlobCrcy + MarketingOverheadAmtInGlobCrcy + ResearchAndDevOveAmtInGlobCrcy
      cast ( ( (
        BilledRevenueAmtInCoCodeCrcy + SalesDeductionAmtInCoCodeCrcy + RevenueAdjustmentAmtInCCCrcy + (COGSAmountInCoCodeCrcy - FxdCOGSAmtInCCCrcy) ) +
        FxdCOGSAmtInCCCrcy + PriceDifferenceAmtInCCCrcy ) +
        AdminOverheadAmtInCoCodeCrcy + SalesOverheadAmtInCoCodeCrcy + MarketingOvhdAmtInCoCodeCrcy + RnDOverheadAmtInCCCrcy
      as fins_contribution_margin_iii) as ContrbnMargin3AmtInCoCodeCrcy,

      // Cash Flow Statement (IFRS)
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      //      cast (
      //        GLAcctNetIncomeAmtInCCCrcy - TangibleAstDeprAmtInCCCrcy - IntngblAssetAmtznAmtInCCCrcy - FixedAssetRtrmtAmtInCCCrcy
      //        - ProvisionAmtInCCCrcy - InventoryAmtInCCCrcy
      //        - AcctsRblAmtInCCCrcy - AcctsOthRblAmtInCCCrcy + AcctsPyblAmtInCCCrcy + AcctsOthPyblAmtInCCCrcy
      //      as fins_cfs_cashopg)                                                                                                         as OperatingActyCashAmtInCCCrcy,
      cast (
        PnLResultAmtInCCCrcy - TangibleAstDeprAmtInCCCrcy - IntngblAssetAmtznAmtInCCCrcy - FixedAssetRtrmtAmtInCCCrcy -
        ProvisionAmtInCCCrcy - InventoryAmtInCCCrcy       - AcctsRblAmtInCCCrcy          - AcctsOthRblAmtInCCCrcy     +
        AcctsPyblAmtInCCCrcy + AcctsOthPyblAmtInCCCrcy
      as fins_cfs_cashopg)             as OperatingActyCashAmtInCCCrcy,


      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      cast (
        - TangibleAstAmtInCCCrcy + TangibleAstDeprAmtInCCCrcy - IntangibleAstAmtInCCCrcy + IntngblAssetAmtznAmtInCCCrcy
        + FixedAssetRtrmtAmtInCCCrcy - LongTermInvmtAmtInCCCrcy
      as fins_cfs_cashinvtg)           as InvestingActyCashAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      cast (
        CommonStockAmtInCCCrcy + NotesReceivableAmtInCCCrcy
      as fins_cfs_cashfin)             as FinancingActyCashAmtInCCCrcy,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @DefaultAggregation: #SUM
      // OperatingActyCashAmtInCCCrcy + InvestingActyCashAmtInCCCrcy + FinancingActyCashAmtInCCCrcy
      //      cast ( (
      //        GLAcctNetIncomeAmtInCCCrcy - TangibleAstDeprAmtInCCCrcy - IntngblAssetAmtznAmtInCCCrcy - FixedAssetRtrmtAmtInCCCrcy
      //        - ProvisionAmtInCCCrcy - InventoryAmtInCCCrcy
      //        - AcctsRblAmtInCCCrcy - AcctsOthRblAmtInCCCrcy + AcctsPyblAmtInCCCrcy + AcctsOthPyblAmtInCCCrcy) + (
      //        - TangibleAstAmtInCCCrcy + TangibleAstDeprAmtInCCCrcy - IntangibleAstAmtInCCCrcy + IntngblAssetAmtznAmtInCCCrcy
      //        + FixedAssetRtrmtAmtInCCCrcy - LongTermInvmtAmtInCCCrcy) + (
      //        CommonStockAmtInCCCrcy + NotesReceivableAmtInCCCrcy)
      //      as fins_cfs_netcash)             as NetCashAmtInCCCrcy,
      cast ( (
        PnLResultAmtInCCCrcy - TangibleAstDeprAmtInCCCrcy - IntngblAssetAmtznAmtInCCCrcy - FixedAssetRtrmtAmtInCCCrcy -
        ProvisionAmtInCCCrcy - InventoryAmtInCCCrcy       - AcctsRblAmtInCCCrcy          - AcctsOthRblAmtInCCCrcy     +
        AcctsPyblAmtInCCCrcy + AcctsOthPyblAmtInCCCrcy)   + ( - TangibleAstAmtInCCCrcy + TangibleAstDeprAmtInCCCrcy - IntangibleAstAmtInCCCrcy + IntngblAssetAmtznAmtInCCCrcy
        + FixedAssetRtrmtAmtInCCCrcy - LongTermInvmtAmtInCCCrcy) +
        (CommonStockAmtInCCCrcy + NotesReceivableAmtInCCCrcy)
      as fins_cfs_netcash)             as NetCashAmtInCCCrcy,


      ///////////////////////////////////////////////////////////////////////
      // Associations
      ///////////////////////////////////////////////////////////////////////

      _JournalEntry,
      _CompanyCode,
      _FiscalYear,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalPeriodForVariant'
      _FiscalPeriod,
      _FiscalPeriodForVariant,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_LedgerFiscalYearForVariant'
      _LedgerFiscalYear,
      _LedgerFiscalYearForVariant,
      _FiscalYearVariant,
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_FiscalYearPeriodForVariant'
      _FiscalYearPeriod,
      _FiscalYearPeriodForVariant,
      _CalendarDate,
      _FiscalCalendarDate,
      _ControllingArea,
      _BalanceTransactionCurrency,
      _TransactionCurrency,
      _CompanyCodeCurrency,
      _GlobalCurrency,
      _FunctionalCurrency,
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
      _Segment,
      _ProfitCenter,
      _CurrentProfitCenter,
      _CostCenter,
      _CurrentCostCenter,
      _CostAnalysisResource,
      _WBSElement,
      _WBSElementInternalID,
      _WBSElementExternalID,
      _Project,
      _ProjectExternalID,
      _BusinessArea,
      _FunctionalArea,
      _GLAccountInChartOfAccounts,
      _GLAccountInCompanyCode,
      _ChartOfAccounts,
      _AccountingDocumentType,
      _FinancialAccountType,
      _DebitCreditCode,
      _Material,
      _Product,
      _Plant,
      _Ledger,
      _SourceLedger,

      _Customer,
      _CustomerGroup,

      _Supplier,

      _MaterialGroup,
      _ProductGroup,

      _SalesOrder,
      _SalesOrderItem,
      _SalesDocument,
      _SalesDocumentItem,
      _InternalOrder,
      _Order,

      _Employment,
      _FinancialTransactionType,
      _BusinessTransactionType,
      _ReferenceDocumentType,
      _PredecessorReferenceDocType,

      _PartnerCostCenter,
      _PartnerProfitCenter,
      _PartnerBusinessArea,
      _PartnerFunctionalArea,
      _PartnerCompanyCode,
      _PartnerSegment,

      _AccountingDocumentCategory,

      _PostingKey,
      _SubLedgerAccLineItemType,
      _User,

      _EliminationProfitCenter,

      //_ControllingObject,

      _GLAccountType,
      _OffsettingAccountType,
      _OffsettingChartOfAccounts,
      _OffsettingAccount,
      _OffsettingAccountWithBP,
      _AlternativeGLAccount,
      //_SenderGLAccount,
      _CountryChartOfAccounts,

      _PurchasingDocument,
      _PurchasingDocumentItem,

      _SpecialGLCode,
      _TaxCode,

      _HouseBank,

      _ClearingJrnlEntryFiscalYear,
      _ClearingJournalEntry,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ClearingJournalEntry'
      _ClearingAccountingDocument,

      _FixedAsset,
      _MasterFixedAsset,
      _GroupMasterFixedAsset,
      _GroupFixedAsset,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_InventorySpclStockValnType'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_InventorySpclStockValnType'
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _InventorySpecialStockValnType,
      _InventorySpclStockValnType,
      _InventorySpecialStockType,
      _InventorySpclStkSalesDocument,
      _InventorySpclStkSalesDocItm,
      _InvtrySpclStockWBSElmntIntID,
      _InventorySpclStockWBSElement,
      _InventorySpecialStockSupplier,
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
      _PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerOrder_2'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  '_PartnerOrder_2'
      _PartnerOrder,
      _PartnerOrder_2,
      _PartnerOrderCategory,
      _PartnerWBSElement,
      _PartnerProject,
      _PartnerSalesDocument,
      _PartnerSalesDocumentItem,
      _PartnerBusinessProcess,

      _WorkPackage,
      _WorkPackageWorkItem,

      _BillingDocumentType,

      _SalesOrganization,
      _DistributionChannel,
      _Division,

      _SoldMaterial,
      _SoldProduct,

      _Fund,
      _PartnerFund,
      _FundsCenter,

      _MovementCategory,
      _AssetTransactionType,

      _BudgetPeriod,

      _CostOriginGroup,

      _CustomerSupplierCountry,
      _CustomerSupplierIndustry,
      _SalesDistrict,
      _BillToParty,
      _ShipToParty,

      _FinancialManagementArea,
      //_FundedProgram

      _HouseBankAccount,

      _LogicalSystem,

      _OperatingConcern,

      _PartnerCompany,

      _ProjectNetwork,

      _PurReqValuationArea,

      //_Extension  Extensions must be local

      _SemanticTag,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_GLAccountHierarchy'
      _Hierarchy,
      _GLAccountHierarchy,

      _Equipment,
      _FunctionalLocation,
      _MaintenanceActivityType,
      _MaintOrdPlngDegreeCode,
      _PMNotificationPriorityType,
      _PMNotificationPriority,
      _MaintenanceOrderSubOperation,
      _Assembly,
      _SuperiorOrder,
      _ProjectInternalID,
      _ConditionContract,
      _SoldProductGroup,

      _ServiceDocumentType,
      _ServiceDocument,
      _ServiceDocumentItem,
      _ServiceContract,
      _ServiceContractItem,
      _ServiceContractType,

      _WBSElementBasicData,
      _WBSElementBasicDataText,
      _ProjectBasicData,
      _ProjectBasicDataText,
      _PartnerProjectExternalID,
      _PartnerProjctExtrnalIDText,
      _PartnerWBSElementExternalID,
      _PartnerWBSElemntExtrnalIDText,
      _PartnerProjectBasicData,
      _PartnerProjectBasicDataText,
      _PartnerWBSElementBasicData,
      _PartnerWBSElemntBasicDataText,

      _InvtrySpclStockWBSElmntBD,
      _InvtrySpclStockWBSElmntExtID,

      _ProviderContract,
      _ProviderContractItem,
      _TimeSheetOvertimeCat,

      //      _CAProviderContract,
      //      _CAProviderContractItemNumber,

      // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
      GLAccountAuthorizationGroup,
      SupplierBasicAuthorizationGrp,
      CustomerBasicAuthorizationGrp,
      AcctgDocTypeAuthorizationGroup,
      OrderType,
      SalesOrderType,
      AssetClass,

      ///////////////////////////////////////////////////////////////////////
      // Additional requested associations
      ///////////////////////////////////////////////////////////////////////
      _AssetKeyFigure

}
where
  (
        ValidityStartDate <= $session.system_date
    and ValidityEndDate   >= $session.system_date
  )
```
