---
name: I_ACTUALPLANJOURNALENTRYITEM
description: "ACTUALPLANJournal EntryITEM"
semantic_vi: "View ACTUALPLANJournal Entry ITEM hiển thị các mục nhập chi tiết của journal entry thực tế, được sử dụng để theo dõi dữ liệu kế toán trong journal entry. Nó được sử dụng khi phân tích hoặc báo cáo về mục nhập chi tiết journal entry ở mức độ chi tiết."
keywords:
  - "actual plan journal entry"
  - "journal entry item"
  - "financial planning"
  - "fi-gl-is-2cl"
  - "fi"
  - "fi-gl"
  - "fi-gl-is"
  - "interface-view"
  - "journal-entry"
  - "item-level"
  - "component:fi-gl-is-2cl"
  - "lob:finance"
semantic_en: "The ACTUALPLANJournal Entry ITEM view exposes actual plan journal entry items, which are used to track financial planning data in a journal entry. It is used when analyzing or reporting on journal entry items at the item level."
app_component: FI-GL-IS-2CL
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
  - FI-GL
  - FI-GL-IS
  - interface-view
  - journal-entry
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:JournalEntry
---
# I_ACTUALPLANJOURNALENTRYITEM

**ACTUALPLANJournal EntryITEM**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `SourceLedger` | ✓ | |  |  |  |  |
| `Ledger` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  |  |  |
| `FinancialPlanningDataPacket` | ✓ | |  |  |  |  |
| `ActualPlanJournalEntryItem` | ✓ | |  |  |  |  |
| `LedgerGLLineItem` |  | |  |  |  |  |
| `FinancialPlanningEntryItem` |  | |  |  |  |  |
| `LedgerFiscalYear` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `ActualPlanCode` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `Project` |  | |  |  |  |  |
| `ProjectInternalID` |  | |  |  |  |  |
| `ProjectExternalID` |  | |  | `cast( ActualPlanJournalEntryItem._ProjectBasicData.ProjectExternalID as fis_projectext_no_conv )` |  |  |
| `PartnerProjectInternalID` |  | |  |  |  |  |
| `PartnerProjectExternalID` |  | |  | `cast( ActualPlanJournalEntryItem._PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv )` |  |  |
| `WBSElement` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  | `cast( ActualPlanJournalEntryItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv )` |  |  |
| `PartnerWBSElementInternalID` |  | |  |  |  |  |
| `PartnerWBSElementExternalID` |  | |  | `cast( ActualPlanJournalEntryItem._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv )` |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `Segment` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `CostAnalysisResource` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `WorkPackage` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `PartnerAccountAssignmentType` |  | |  |  |  |  |
| `TimeSheetOvertimeCategory` |  | |  |  |  |  |
| `PartnerCompanyCode` |  | |  |  |  |  |
| `PartnerBusinessArea` |  | |  |  |  |  |
| `PartnerProfitCenter` |  | |  |  |  |  |
| `PartnerCostCenter` |  | |  |  |  |  |
| `PartnerProject` |  | |  |  |  |  |
| `PartnerWBSElement` |  | |  |  |  |  |
| `PartnerFunctionalArea` |  | |  |  |  |  |
| `PartnerSegment` |  | |  |  |  |  |
| `PartnerCostCtrActivityType` |  | |  |  |  |  |
| `PartnerOrder` |  | |  |  |  |  |
| `PartnerOrder_2` |  | |  |  |  |  |
| `PartnerOrderCategory` |  | |  |  |  |  |
| `PartnerSalesDocument` |  | |  |  |  |  |
| `PartnerProjectNetwork` |  | |  |  |  |  |
| `PartnerProjectNetworkActivity` |  | |  |  |  |  |
| `PartnerBusinessProcess` |  | |  |  |  |  |
| `PartnerCostObject` |  | |  |  |  |  |
| `PartnerCompany` |  | |  |  |  |  |
| `OriginProfitCenter` |  | |  |  |  |  |
| `OriginCostCenter` |  | |  |  |  |  |
| `OriginCostCtrActivityType` |  | |  |  |  |  |
| `ReferenceDocumentType` |  | |  |  |  |  |
| `ReferenceDocumentContext` |  | |  |  |  |  |
| `ReferenceDocument` |  | |  |  |  |  |
| `ReferenceDocumentItem` |  | |  |  |  |  |
| `BusinessTransactionCategory` |  | |  |  |  |  |
| `BusinessTransactionType` |  | |  |  |  |  |
| `FinancialTransactionType` |  | |  |  |  |  |
| `AccountingDocumentType` |  | |  |  |  |  |
| `FinancialAccountType` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `AccountingDocCreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `PlanningCategory` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `ControllingDebitCreditCode` |  | |  |  |  |  |
| `AccountAssignmentType` |  | |  |  |  |  |
| `PersonnelNumber` |  | |  |  |  |  |
| `BillableControl` |  | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `ControllingObject` |  | |  |  |  |  |
| `CostOriginGroup` |  | |  |  |  |  |
| `ControllingObjectClass` |  | |  |  |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `BusinessSolutionOrderItem` |  | |  |  |  |  |
| `ProviderContract` |  | |  |  |  |  |
| `ProviderContractItem` |  | |  |  |  |  |
| `DocumentItemText` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PurchasingDocument` |  | |  |  |  |  |
| `PurchasingDocumentItem` |  | |  |  |  |  |
| `AccountAssignmentNumber` |  | |  |  |  |  |
| `OffsettingAccount` |  | |  |  |  |  |
| `OffsettingAccountType` |  | |  |  |  |  |
| `OffsettingChartOfAccounts` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceDocument` |  | |  |  |  |  |
| `ServiceDocumentItem` |  | |  |  |  |  |
| `ServiceContractType` |  | |  |  |  |  |
| `ServiceContract` |  | |  |  |  |  |
| `ServiceContractItem` |  | |  |  |  |  |
| `ProjectNetwork` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SoldMaterial` |  | |  |  |  |  |
| `SoldProduct` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `SoldProductGroup` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `CustomerSupplierCountry` |  | |  |  |  |  |
| `CustomerSupplierIndustry` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `CustomerSupplierCorporateGroup` |  | |  |  |  |  |
| `IsStatisticalOrder` |  | |  |  |  |  |
| `IsStatisticalCostCenter` |  | |  |  |  |  |
| `IsStatisticalSalesDocument` |  | |  |  |  |  |
| `WBSIsStatisticalWBSElement` |  | |  |  |  |  |
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
| `SourceReferenceDocumentType` |  | |  |  |  |  |
| `SourceLogicalSystem` |  | |  |  |  |  |
| `SourceReferenceDocumentCntxt` |  | |  |  |  |  |
| `SourceReferenceDocument` |  | |  |  |  |  |
| `SourceReferenceDocumentItem` |  | |  |  |  |  |
| `SourceReferenceDocSubitem` |  | |  |  |  |  |
| `IsCommitment` |  | |  |  |  |  |
| `CashLedgerCompanyCode` |  | |  |  |  |  |
| `CashLedgerAccount` |  | |  |  |  |  |
| `FinancialManagementArea` |  | |  |  |  |  |
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
| `BudgetProcess` |  | |  |  |  |  |
| `BudgetingType` |  | |  |  |  |  |
| `BudgetDocWorkFlowStatus` |  | |  |  |  |  |
| `SubLedgerAcctLineItemType` |  | |  |  |  |  |
| `AssetDepreciationArea` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `AssetAcctTransClassfctn` |  | |  |  |  |  |
| `AssetClass` |  | |  |  |  |  |
| `JointVenture` |  | |  |  |  |  |
| `JointVentureEquityGroup` |  | |  |  |  |  |
| `JointVentureCostRecoveryCode` |  | |  |  |  |  |
| `JointVentureProductionDate` |  | |  |  |  |  |
| `JointVentureAccountingActivity` |  | |  |  |  |  |
| `AccrualObjectType` |  | |  |  |  |  |
| `AccrualObjectLogicalSystem` |  | |  |  |  |  |
| `AccrualObject` |  | |  |  |  |  |
| `AccrualSubobject` |  | |  |  |  |  |
| `AccrualItemType` |  | |  |  |  |  |
| `AccrualReferenceObject` |  | |  |  |  |  |
| `AccrualValueDate` |  | |  |  |  |  |
| `Reservation` |  | |  |  |  |  |
| `ReservationItem` |  | |  |  |  |  |
| `ReservationType` |  | |  |  |  |  |
| `MMServicePackage` |  | |  |  |  |  |
| `MMServicePackageLine` |  | |  |  |  |  |
| `REBusinessEntity` |  | |  |  |  |  |
| `RealEstateBuilding` |  | |  |  |  |  |
| `RealEstateProperty` |  | |  |  |  |  |
| `RERentalObject` |  | |  |  |  |  |
| `RealEstateContract` |  | |  |  |  |  |
| `REServiceChargeKey` |  | |  |  |  |  |
| `RESettlementUnitID` |  | |  |  |  |  |
| `SettlementReferenceDate` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `GlobalCurrency` |  | |  |  |  |  |
| `FunctionalCurrency` |  | |  |  |  |  |
| `FreeDefinedCurrency1` |  | |  |  |  |  |
| `FreeDefinedCurrency2` |  | |  |  |  |  |
| `FreeDefinedCurrency3` |  | |  |  |  |  |
| `FreeDefinedCurrency4` |  | |  |  |  |  |
| `FreeDefinedCurrency5` |  | |  |  |  |  |
| `FreeDefinedCurrency6` |  | |  |  |  |  |
| `FreeDefinedCurrency7` |  | |  |  |  |  |
| `FreeDefinedCurrency8` |  | |  |  |  |  |
| `ControllingObjectCurrency` |  | |  |  |  |  |
| `CostSourceUnit` |  | |  |  |  |  |
| `AmountInTransactionCurrency` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |  |  |
| `AmountInGlobalCurrency` |  | |  |  |  |  |
| `AmountInFunctionalCurrency` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency1` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency2` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency3` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency4` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency5` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency6` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency7` |  | |  |  |  |  |
| `AmountInFreeDefinedCurrency8` |  | |  |  |  |  |
| `AmountInObjectCurrency` |  | |  |  |  |  |
| `FixedAmountInGlobalCrcy` |  | |  |  |  |  |
| `FixedAmountInCoCodeCrcy` |  | |  |  |  |  |
| `FixedAmountInTransCrcy` |  | |  |  |  |  |
| `ValuationQuantity` |  | |  |  |  |  |
| `ValuationFixedQuantity` |  | |  |  |  |  |
| `FixedQuantity` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `ReferenceQuantityUnit` |  | |  |  |  |  |
| `ReferenceQuantity` |  | |  |  |  |  |
| `ActualAmountInTransactionCrcy` |  | |  |  |  |  |
| `ActualAmountInCompanyCodeCrcy` |  | |  |  |  |  |
| `ActualAmountInGlobalCurrency` |  | |  |  |  |  |
| `ActualAmountInFreeDfndCrcy1` |  | |  |  |  |  |
| `ActualAmountInFreeDfndCrcy2` |  | |  |  |  |  |
| `ActualAmountInFreeDfndCrcy3` |  | |  |  |  |  |
| `ActualAmountInFreeDfndCrcy4` |  | |  |  |  |  |
| `ActualAmountInFreeDfndCrcy5` |  | |  |  |  |  |
| `ActualAmountInFreeDfndCrcy6` |  | |  |  |  |  |
| `ActualAmountInFreeDfndCrcy7` |  | |  |  |  |  |
| `ActualAmountInFreeDfndCrcy8` |  | |  |  |  |  |
| `ActualAmountInObjectCurrency` |  | |  |  |  |  |
| `ActualValuationQuantity` |  | |  |  |  |  |
| `ActualReferenceQuantity` |  | |  |  |  |  |
| `ActualQuantityInBaseUnit` |  | |  |  |  |  |
| `PlanAmountInTransactionCrcy` |  | |  |  |  |  |
| `PlanAmountInCompanyCodeCrcy` |  | |  |  |  |  |
| `PlanAmountInGlobalCurrency` |  | |  |  |  |  |
| `PlanAmountInFreeDefinedCrcy1` |  | |  |  |  |  |
| `PlanAmountInFreeDefinedCrcy2` |  | |  |  |  |  |
| `PlanAmountInFreeDefinedCrcy3` |  | |  |  |  |  |
| `PlanAmountInFreeDefinedCrcy4` |  | |  |  |  |  |
| `PlanAmountInFreeDefinedCrcy5` |  | |  |  |  |  |
| `PlanAmountInFreeDefinedCrcy6` |  | |  |  |  |  |
| `PlanAmountInFreeDefinedCrcy7` |  | |  |  |  |  |
| `PlanAmountInFreeDefinedCrcy8` |  | |  |  |  |  |
| `PlanAmountInObjectCurrency` |  | |  |  |  |  |
| `PlanValuationQuantity` |  | |  |  |  |  |
| `PlanReferenceQuantity` |  | |  |  |  |  |
| `PlanPriceInGlobalCurrency` |  | |  |  |  |  |
| `PlanPriceInCompanyCodeCurrency` |  | |  |  |  |  |
| `PlanPriceInTransactionCurrency` |  | |  |  |  |  |
| `ActlPlnDiffAmtInTransCrcy` |  | |  | `cast(ActualPlanJournalEntryItem.ActualAmountInTransactionCrcy - ActualPlanJournalEntryItem.PlanAmountInTransactionCrcy as fis_actl_pln_diff_wsl)` |  |  |
| `ActlPlnDiffAmtInCoCodeCrcy` |  | |  | `cast(ActualPlanJournalEntryItem.ActualAmountInCompanyCodeCrcy - ActualPlanJournalEntryItem.PlanAmountInCompanyCodeCrcy as fis_actl_pln_diff_hsl)` |  |  |
| `ActlPlnDiffAmtInGlobalCrcy` |  | |  | `cast(ActualPlanJournalEntryItem.ActualAmountInGlobalCurrency - ActualPlanJournalEntryItem.PlanAmountInGlobalCurrency as fis_actl_pln_diff_ksl)` |  |  |
| `ActlPlnDiffAmtInFreeDfndCrcy1` |  | |  | `cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy1 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy1 as fis_actl_pln_diff_osl)` |  |  |
| `ActlPlnDiffAmtInFreeDfndCrcy2` |  | |  | `cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy2 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy2 as fis_actl_pln_diff_vsl)` |  |  |
| `ActlPlnDiffAmtInFreeDfndCrcy3` |  | |  | `cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy3 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy3 as fis_actl_pln_diff_bsl)` |  |  |
| `ActlPlnDiffAmtInFreeDfndCrcy4` |  | |  | `cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy4 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy4 as fis_actl_pln_diff_csl)` |  |  |
| `ActlPlnDiffAmtInFreeDfndCrcy5` |  | |  | `cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy5 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy5 as fis_actl_pln_diff_dsl)` |  |  |
| `ActlPlnDiffAmtInFreeDfndCrcy6` |  | |  | `cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy6 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy6 as fis_actl_pln_diff_esl)` |  |  |
| `ActlPlnDiffAmtInFreeDfndCrcy7` |  | |  | `cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy7 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy7 as fis_actl_pln_diff_fsl)` |  |  |
| `ActlPlnDiffAmtInFreeDfndCrcy8` |  | |  | `cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy8 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy8 as fis_actl_pln_diff_gsl)` |  |  |
| `ActlPlnDiffAmtInObjectCrcy` |  | |  | `cast(ActualPlanJournalEntryItem.ActualAmountInObjectCurrency - ActualPlanJournalEntryItem.PlanAmountInObjectCurrency as fis_actl_pln_diff_co_osl)` |  |  |
| `ActlPanDiffValuationQuantity` |  | |  | `cast(ActualPlanJournalEntryItem.ActualValuationQuantity - ActualPlanJournalEntryItem.PlanValuationQuantity as fis_val_quan_actl_plan_diff)` |  |  |
| `ActlPlanDiffReferenceQuantity` |  | |  | `cast(ActualPlanJournalEntryItem.ActualValuationQuantity - ActualPlanJournalEntryItem.PlanValuationQuantity as fis_ref_quan_actl_plan_diff)` |  |  |
| `GLAccountAuthorizationGroup` |  | |  |  |  |  |
| `SupplierBasicAuthorizationGrp` |  | |  |  |  |  |
| `CustomerBasicAuthorizationGrp` |  | |  |  |  |  |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  |  |  |
| `OrderType` |  | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `_SourceLedger` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_LedgerFiscalYear` | | ✓ | | | | |
| `_FiscalPeriod` | | ✓ | | | | |
| `_FiscalYearPeriod` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |
| `_FiscalPeriodForVariant` | | ✓ | | | | |
| `_FiscalYearPeriodForVariant` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_FiscalCalendarDate` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_ProjectExternalIDText` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_PartnerProjctExtrnalIDText` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElemntExtrnalIDText` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_CostAnalysisResource` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_WorkPackageWorkItem` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_PartnerCompanyCode` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_PartnerProject` | | ✓ | | | | |
| `_PartnerWBSElement` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_PartnerOrder` | | ✓ | | | | |
| `_PartnerOrder_2` | | ✓ | | | | |
| `_PartnerOrderCategory` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_ControllingDebitCreditCode` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_BusinessTransactionCategory` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |
| `_ServiceContractType` | | ✓ | | | | |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceContractItem` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SoldMaterial` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ProductGroup_2` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_SoldProductGroup_2` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_CustomerSupplierIndustryText` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
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
| `_ControllingObjectCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_ReferenceQuantityUnit` | | ✓ | | | | |
| `_PlanningCategory` | | ✓ | | | | |
| `_OriginCostCenter` | | ✓ | | | | |
| `_OriginProfitCenter` | | ✓ | | | | |
| `_OriginCostCtrActivityType` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_BillableControl` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_SemTagGLAccount` | | ✓ | | | | |
| `_CashLedgerCompanyCode` | | ✓ | | | | |
| `_CashLedgerAccount` | | ✓ | | | | |
| `_FundsCenter` | | ✓ | | | | |
| `_FundedProgram` | | ✓ | | | | |
| `_PartnerFund` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |
| `_PartnerBudgetPeriod` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |
| `_PubSecBudgetAccount` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnDate` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnFsclPeriod` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnFsclYear` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnType` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnAmtType` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |
| `_BudgetProcess` | | ✓ | | | | |
| `_BudgetingType` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_SubLedgerAccLineItemType` | | ✓ | | | | |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_MaintenanceOrderOperation` | | ✓ | | | | |
| `_MaintenanceOrderSubOperation` | | ✓ | | | | |
| `_MaintOrdPlngDegreeCode` | | ✓ | | | | |
| `_PMNotificationPriorityType` | | ✓ | | | | |
| `_PMNotificationPriority` | | ✓ | | | | |
| `_SuperiorOrder` | | ✓ | | | | |
| `_AccountAssignmentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SourceLedger` | `I_Ledger` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_LedgerFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_FiscalPeriod` | `I_FiscalYearPeriodForCmpnyCode` | [0..1] |
| `_FiscalYearPeriod` | `I_FiscalCalYearPeriodForCoCode` | [0..1] |
| `_LedgerFiscalYearForVariant` | `I_FiscalYearForVariant` | [0..1] |
| `_FiscalPeriodForVariant` | `I_FiscalPeriodForVariant` | [0..1] |
| `_FiscalYearPeriodForVariant` | `I_FiscalYearPeriodForVariant` | [0..1] |
| `_CalendarDate` | `I_CalendarDate` | [0..1] |
| `_FiscalCalendarDate` | `I_FiscalCalendarDate` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_Project` | `I_Project` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_ProjectExternalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjctExtrnalIDText` | `I_ProjectByExternalID` | [0..1] |
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElemntExtrnalIDText` | `I_WBSElementByExternalID` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_CostAnalysisResource` | `I_CostAnalysisResource` | [0..*] |
| `_InternalOrder` | `I_InternalOrder` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_WorkPackageWorkItem` | `I_WorkPackageWorkItem` | [0..1] |
| `_WorkPackage` | `I_WorkPackage` | [0..1] |
| `_PartnerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_PartnerCostCenter` | `I_CostCenter` | [0..*] |
| `_PartnerProject` | `I_Project` | [0..1] |
| `_PartnerWBSElement` | `I_WBSElement` | [0..1] |
| `_PartnerFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_PartnerSegment` | `I_Segment` | [0..1] |
| `_PartnerCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_PartnerOrder` | `I_InternalOrder` | [0..1] |
| `_PartnerOrder_2` | `I_Order` | [0..1] |
| `_PartnerOrderCategory` | `I_OrderCategory` | [0..1] |
| `_PartnerCompany` | `I_Partnercompany` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1] |
| `_ControllingDebitCreditCode` | `I_ControllingDebitCreditCode` | [0..1] |
| `_Employment` | `I_Employment` | [0..1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_BusinessTransactionCategory` | `I_BusinessTransactionCategory` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_ServiceContractType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceContract` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceContractItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_OrganizationDivision` | `I_Division` | [0..1] |
| `_SoldMaterial` | `I_Material` | [0..1] |
| `_SoldProduct` | `I_Product` | [0..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_ProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_SoldProductGroup` | `I_ProductGroup` | [0..1] |
| `_SoldProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_CustomerSupplierCountry` | `I_Country` | [0..1] |
| `_CustomerSupplierIndustryText` | `I_SupplierIndustryText` | [0..*] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_FunctionalCurrency` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency1` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency2` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency3` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency4` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency5` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency6` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency7` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency8` | `I_Currency` | [0..1] |
| `_ControllingObjectCurrency` | `I_Currency` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CostSourceUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ReferenceQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PlanningCategory` | `I_PlanningCategory` | [0..1] |
| `_OriginCostCenter` | `I_CostCenter` | [0..*] |
| `_OriginProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_OriginCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_BillableControl` | `I_BillableControl` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [0..1] |
| `_SemTagGLAccount` | `I_SemTagGLAccount` | [0..*] |
| `_CashLedgerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_CashLedgerAccount` | `I_GLAccountInCompanyCode` | [0..1] |
| `_FundsCenter` | `I_FundsCenter` | [0..*] |
| `_FundedProgram` | `I_FundedProgram` | [0..1] |
| `_PartnerFund` | `I_Fund` | [0..1] |
| `_PartnerGrant` | `I_Grant` | [0..1] |
| `_PartnerBudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_PubSecBudgetAccountCoCode` | `I_CompanyCode` | [0..1] |
| `_PubSecBudgetAccount` | `I_PubSecBudgetAccount` | [0..1] |
| `_PubSecBudgetCnsmpnDate` | `I_FiscCalendarDateForCompCode` | [0..1] |
| `_PubSecBudgetCnsmpnFsclPeriod` | `I_FiscalYearPeriodForCmpnyCode` | [0..1] |
| `_PubSecBudgetCnsmpnFsclYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_PubSecBudgetCnsmpnType` | `I_PubSecBdgtCnsmpnType` | [0..1] |
| `_PubSecBudgetCnsmpnAmtType` | `I_PubSecBdgtCnsmpnAmtType` | [0..1] |
| `_SponsoredClass` | `I_SponsoredClassCore` | [0..1] |
| `_SponsoredProgram` | `I_SponsoredProgramCore` | [0..1] |
| `_BudgetProcess` | `I_BudgetProcess` | [0..1] |
| `_BudgetingType` | `I_BudgetingType` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_SubLedgerAccLineItemType` | `I_SubLedgerAccLineItemType` | [0..1] |
| `_MaintenanceOrder` | `I_MaintenanceOrder` | [0..1] |
| `_MaintenanceOrderOperation` | `I_MaintenanceOrderOperation` | [0..1] |
| `_MaintenanceOrderSubOperation` | `I_MaintenanceOrderSubOperation` | [0..1] |
| `_MaintOrdPlngDegreeCode` | `I_MaintOrdPlngDegreeCode` | [0..1] |
| `_PMNotificationPriorityType` | `I_PMNotificationPriorityType` | [0..1] |
| `_PMNotificationPriority` | `I_PMNotificationPriority` | [0..1] |
| `_SuperiorOrder` | `I_LogisticsOrder` | [0..1] |
| `_AccountAssignmentType` | `I_AccountAssignmentType` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking: #REQUIRED }
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIACTPLNJEI'
@EndUserText.label: 'Actual Plan for Journal Entry Item'
@ObjectModel: { usageType.sizeCategory: #XXL,
                usageType.dataClass:  #MIXED,
                usageType.serviceQuality: #D,
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions:true }
@VDM.viewType: #BASIC
@AccessControl.auditFilter: #ENABLED
@Environment.sql.passValueForClient: true

define view entity I_ActualPlanJournalEntryItem

as select from P_ActualPlanJrnlEntryItm as ActualPlanJournalEntryItem

association[0..1] to I_Ledger                       as _SourceLedger               on $projection.SourceLedger               = _SourceLedger.Ledger
association[0..1] to I_JournalEntry                 as _JournalEntry               on $projection.CompanyCode                = _JournalEntry.CompanyCode and
                                                                                      $projection.FiscalYear                 = _JournalEntry.FiscalYear and
                                                                                      $projection.AccountingDocument         = _JournalEntry.AccountingDocument
association[0..1] to I_ControllingArea              as _ControllingArea            on $projection.ControllingArea            = _ControllingArea.ControllingArea
association[0..1] to I_Ledger                       as _Ledger                     on $projection.Ledger                     = _Ledger.Ledger
association[1]    to I_CompanyCode                  as _CompanyCode                on $projection.CompanyCode                = _CompanyCode.CompanyCode
association[0..1] to I_GLAccountInCompanyCode       as _GLAccountInCompanyCode     on $projection.CompanyCode                = _GLAccountInCompanyCode.CompanyCode
                                                                                  and $projection.GLAccount                  = _GLAccountInCompanyCode.GLAccount
association[0..1] to I_GLAccountInChartOfAccounts   as _GLAccountInChartOfAccounts on $projection.ChartOfAccounts            = _GLAccountInChartOfAccounts.ChartOfAccounts and
                                                                                      $projection.GLAccount                  = _GLAccountInChartOfAccounts.GLAccount
association[1]    to I_ChartOfAccounts              as _ChartOfAccounts            on $projection.ChartOfAccounts            = _ChartOfAccounts.ChartOfAccounts
// begin DO NOT USE these associations. Use Associations ForVariant instead
association[0..1] to I_FiscalYearForCompanyCode     as _FiscalYear                 on $projection.FiscalYear                 = _FiscalYear.FiscalYear and
                                                                                      $projection.CompanyCode                = _FiscalYear.CompanyCode
association[0..1] to I_FiscalYearForCompanyCode     as _LedgerFiscalYear           on $projection.LedgerFiscalYear           = _LedgerFiscalYear.FiscalYear
                                                                                  and $projection.CompanyCode                = _LedgerFiscalYear.CompanyCode
association[0..1] to I_FiscalYearPeriodForCmpnyCode as _FiscalPeriod               on $projection.LedgerFiscalYear           = _FiscalPeriod.FiscalYear and
                                                                                      $projection.FiscalPeriod               = _FiscalPeriod.FiscalPeriod and
                                                                                      $projection.CompanyCode                = _FiscalPeriod.CompanyCode
association[0..1] to I_FiscalCalYearPeriodForCoCode as _FiscalYearPeriod           on $projection.CompanyCode                = _FiscalYearPeriod.CompanyCode
                                                                                  and $projection.FiscalYearPeriod           = _FiscalYearPeriod.FiscalYearPeriod
//end
association [0..1] to I_FiscalYearForVariant         as _LedgerFiscalYearForVariant    on  $projection.LedgerFiscalYear  = _LedgerFiscalYearForVariant.FiscalYear
                                                                                       and $projection.FiscalYearVariant = _LedgerFiscalYearForVariant.FiscalYearVariant
association [0..1] to I_FiscalPeriodForVariant       as _FiscalPeriodForVariant        on  $projection.LedgerFiscalYear  = _FiscalPeriodForVariant.FiscalYear
                                                                                       and $projection.FiscalPeriod      = _FiscalPeriodForVariant.FiscalPeriod
                                                                                       and $projection.FiscalYearVariant = _FiscalPeriodForVariant.FiscalYearVariant
association [0..1] to I_FiscalYearPeriodForVariant   as _FiscalYearPeriodForVariant    on  $projection.FiscalYearPeriod  = _FiscalYearPeriodForVariant.FiscalYearPeriod
                                                                                       and $projection.FiscalYearVariant = _FiscalYearPeriodForVariant.FiscalYearVariant

association[0..1] to I_CalendarDate                 as _CalendarDate               on $projection.PostingDate                = _CalendarDate.CalendarDate
association[0..1] to I_FiscalCalendarDate           as _FiscalCalendarDate         on $projection.PostingDate                = _FiscalCalendarDate.CalendarDate and
                                                                                      $projection.FiscalYearVariant          = _FiscalCalendarDate.FiscalYearVariant
association[0..1] to I_BusinessArea                 as _BusinessArea               on $projection.BusinessArea               = _BusinessArea.BusinessArea
association[0..*] to I_ProfitCenter                 as _ProfitCenter               on $projection.ControllingArea            = _ProfitCenter.ControllingArea and
                                                                                      $projection.ProfitCenter               = _ProfitCenter.ProfitCenter
association[0..1] to I_ProfitCenter                as _CurrentProfitCenter         on $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea and
                                                                                      $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter and
                                                                                      _CurrentProfitCenter.ValidityStartDate <= $session.system_date and
                                                                                      _CurrentProfitCenter.ValidityEndDate   >= $session.system_date
association[0..*] to I_CostCenter                   as _CostCenter                 on $projection.ControllingArea            = _CostCenter.ControllingArea and
                                                                                      $projection.CostCenter                 = _CostCenter.CostCenter
association[0..1] to I_CostCenter                   as _CurrentCostCenter          on $projection.ControllingArea            = _CurrentCostCenter.ControllingArea and
                                                                                      $projection.CostCenter                 = _CurrentCostCenter.CostCenter and
                                                                                      _CurrentCostCenter.ValidityStartDate   <= $session.system_date and
                                                                                      _CurrentCostCenter.ValidityEndDate     >= $session.system_date
association[0..1] to I_Project                      as _Project                    on $projection.Project                    = _Project.Project
association [0..1] to I_ProjectByExternalID       as _ProjectExternalID        on  $projection.ProjectExternalID   = _ProjectExternalID.ProjectExternalID
association [0..1] to I_ProjectByExternalID       as _ProjectExternalIDText    on  $projection.ProjectExternalID   = _ProjectExternalIDText.ProjectExternalID
association [0..1] to I_ProjectByExternalID       as _PartnerProjectExternalID        on  $projection.PartnerProjectExternalID   = _PartnerProjectExternalID.ProjectExternalID
association [0..1] to I_ProjectByExternalID       as _PartnerProjctExtrnalIDText    on  $projection.PartnerProjectExternalID   = _PartnerProjctExtrnalIDText.ProjectExternalID
association[0..1] to I_WBSElement                   as _WBSElement                 on $projection.WBSElement                 = _WBSElement.WBSElement
association[0..1] to I_WBSElementByExternalID       as _WBSElementExternalID       on $projection.WBSElementExternalID       = _WBSElementExternalID.WBSElementExternalID
association[0..1] to I_WBSElementByExternalID       as _PartnerWBSElementExternalID        on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
association[0..1] to I_WBSElementByExternalID       as _PartnerWBSElemntExtrnalIDText    on  $projection.PartnerWBSElementExternalID = _PartnerWBSElemntExtrnalIDText.WBSElementExternalID
association[0..1] to I_FunctionalArea               as _FunctionalArea             on $projection.FunctionalArea             = _FunctionalArea.FunctionalArea
association[0..1] to I_Segment                      as _Segment                    on $projection.Segment                    = _Segment.Segment
association[0..*] to I_CostCenterActivityType       as _CostCtrActivityType        on $projection.ControllingArea            = _CostCtrActivityType.ControllingArea and
                                                                                      $projection.CostCtrActivityType        = _CostCtrActivityType.CostCtrActivityType
association[0..*] to I_CostAnalysisResource         as _CostAnalysisResource       on $projection.ControllingArea            = _CostAnalysisResource.ControllingArea and
                                                                                      $projection.CostAnalysisResource       = _CostAnalysisResource.CostAnalysisResource
association[0..1] to I_InternalOrder                as _InternalOrder              on $projection.OrderID                    = _InternalOrder.InternalOrder
association[0..1] to I_Order                        as _Order                      on $projection.OrderID                    = _Order.OrderID
association[0..1] to I_WorkPackageWorkItem          as _WorkPackageWorkItem        on $projection.WorkItem                   = _WorkPackageWorkItem.WorkItem and
                                                                                      $projection.WorkPackage                = _WorkPackageWorkItem.WorkPackage
association[0..1] to I_WorkPackage                  as _WorkPackage                on $projection.WorkPackage                = _WorkPackage.WorkPackage
association[0..1] to I_CompanyCode                  as _PartnerCompanyCode         on $projection.PartnerCompanyCode         = _PartnerCompanyCode.CompanyCode
association[0..1] to I_BusinessArea                 as _PartnerBusinessArea        on $projection.PartnerBusinessArea        = _PartnerBusinessArea.BusinessArea
association[0..*] to I_ProfitCenter                 as _PartnerProfitCenter        on $projection.ControllingArea            = _PartnerProfitCenter.ControllingArea and
                                                                                      $projection.PartnerProfitCenter        = _PartnerProfitCenter.ProfitCenter
association[0..*] to I_CostCenter                   as _PartnerCostCenter          on $projection.ControllingArea            = _PartnerCostCenter.ControllingArea and
                                                                                      $projection.PartnerCostCenter          = _PartnerCostCenter.CostCenter
association[0..1] to I_Project                      as _PartnerProject             on $projection.PartnerProject             = _PartnerProject.Project
association[0..1] to I_WBSElement                   as _PartnerWBSElement          on $projection.PartnerWBSElement          = _PartnerWBSElement.WBSElement
association[0..1] to I_FunctionalArea               as _PartnerFunctionalArea      on $projection.PartnerFunctionalArea      = _PartnerFunctionalArea.FunctionalArea
association[0..1] to I_Segment                      as _PartnerSegment             on $projection.PartnerSegment             = _PartnerSegment.Segment
association[0..*] to I_CostCenterActivityType       as _PartnerCostCtrActivityType on $projection.ControllingArea            = _PartnerCostCtrActivityType.ControllingArea and
                                                                                      $projection.PartnerCostCtrActivityType = _PartnerCostCtrActivityType.CostCtrActivityType
association[0..1] to I_InternalOrder                as _PartnerOrder               on $projection.PartnerOrder               = _PartnerOrder.InternalOrder
association[0..1] to I_Order                        as _PartnerOrder_2             on  $projection.PartnerOrder_2 = _PartnerOrder_2.OrderID
association[0..1] to I_OrderCategory                as _PartnerOrderCategory       on  $projection.PartnerOrderCategory = _PartnerOrderCategory.OrderCategory
association[0..1] to I_Partnercompany               as _PartnerCompany             on $projection.PartnerCompany             = _PartnerCompany.PartnerCompany
association[1]    to I_FiscalYearVariant            as _FiscalYearVariant          on $projection.FiscalYearVariant          = _FiscalYearVariant.FiscalYearVariant
association[0..1] to I_ControllingDebitCreditCode   as _ControllingDebitCreditCode on $projection.ControllingDebitCreditCode = _ControllingDebitCreditCode.ControllingDebitCreditCode
association[0..1] to I_Employment                   as _Employment                 on $projection.PersonnelNumber            = _Employment.EmploymentInternalID
association[0..1] to I_PersonWorkAgreement_1        as _PersonWorkAgreement_1      on $projection.PersonnelNumber            = _PersonWorkAgreement_1.PersonWorkAgreement
association[0..1] to I_BusinessTransactionCategory  as _BusinessTransactionCategory on  $projection.BusinessTransactionCategory = _BusinessTransactionCategory.BusinessTransactionCategory
association[0..1] to I_BusinessTransactionType      as _BusinessTransactionType    on $projection.BusinessTransactionType    = _BusinessTransactionType.BusinessTransactionType
association[0..1] to I_AccountingDocumentType       as _AccountingDocumentType     on  $projection.AccountingDocumentType    = _AccountingDocumentType.AccountingDocumentType
association[0..1] to I_FinancialAccountType         as _FinancialAccountType       on  $projection.FinancialAccountType      = _FinancialAccountType.FinancialAccountType
association[0..1] to I_DebitCreditCode              as _DebitCreditCode               on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
association[0..1] to I_Plant                        as _Plant                      on $projection.Plant                      = _Plant.Plant
association[0..1] to I_Material                     as _Material                   on  $projection.Material                  = _Material.Material  //do not use any longer, use _Product
association[0..1] to I_Product                      as _Product                    on  $projection.Product                   = _Product.Product
association[0..1] to I_Customer                     as _Customer                   on $projection.Customer                   = _Customer.Customer
association[0..1] to I_CustomerCompany              as _CustomerCompany            on  $projection.Customer    = _CustomerCompany.Customer
                                                                                   and $projection.CompanyCode = _CustomerCompany.CompanyCode
association[0..1] to I_SalesOrder                   as _SalesOrder                 on $projection.SalesOrder                 = _SalesOrder.SalesOrder
association[0..1] to I_SalesOrderItem               as _SalesOrderItem             on $projection.SalesOrder                 = _SalesOrderItem.SalesOrder and
                                                                                      $projection.SalesOrderItem             = _SalesOrderItem.SalesOrderItem
association[0..1] to I_SalesDocument                as _SalesDocument              on $projection.SalesDocument              = _SalesDocument.SalesDocument
association[0..1] to I_SalesDocumentItem            as _SalesDocumentItem          on $projection.SalesDocument              = _SalesDocumentItem.SalesDocument and
                                                                                      $projection.SalesDocumentItem          = _SalesDocumentItem.SalesDocumentItem
  association [0..1] to I_ServiceDocumentType          as _ServiceDocumentType           on  $projection.ServiceDocumentType        = _ServiceDocumentType.ServiceDocumentType

  association [0..1] to I_SrvcDocByDocumentType        as _ServiceDocument               on  $projection.ServiceDocumentType        = _ServiceDocument.ServiceDocumentType
                                                                                         and $projection.ServiceDocument            = _ServiceDocument.ServiceDocument

  association [0..1] to I_SrvcDocItemByDocumentType    as _ServiceDocumentItem           on  $projection.ServiceDocumentType        = _ServiceDocumentItem.ServiceDocumentType
                                                                                         and $projection.ServiceDocument            = _ServiceDocumentItem.ServiceDocument
                                                                                         and $projection.ServiceDocumentItem        = _ServiceDocumentItem.ServiceDocumentItem

  association [0..1] to I_ServiceDocumentType          as _ServiceContractType           on  $projection.ServiceContractType        = _ServiceContractType.ServiceDocumentType

  association [0..1] to I_SrvcDocByDocumentType        as _ServiceContract               on  $projection.ServiceContractType        = _ServiceContract.ServiceDocumentType
                                                                                         and $projection.ServiceContract            = _ServiceContract.ServiceDocument

  association [0..1] to I_SrvcDocItemByDocumentType    as _ServiceContractItem           on  $projection.ServiceContractType        = _ServiceContractItem.ServiceDocumentType
                                                                                         and $projection.ServiceContract            = _ServiceContractItem.ServiceDocument
                                                                                         and $projection.ServiceContractItem        = _ServiceContractItem.ServiceDocumentItem
association[0..1] to I_BillingDocumentType          as _BillingDocumentType        on $projection.BillingDocumentType        = _BillingDocumentType.BillingDocumentType
association[0..1] to I_SalesOrganization            as _SalesOrganization          on $projection.SalesOrganization          = _SalesOrganization.SalesOrganization
association[0..1] to I_DistributionChannel          as _DistributionChannel        on $projection.DistributionChannel        = _DistributionChannel.DistributionChannel
association[0..1] to I_Division                     as _Division                   on $projection.Division                   = _Division.Division
association[0..1] to I_Division                     as _OrganizationDivision       on $projection.OrganizationDivision       = _OrganizationDivision.Division
association[0..1] to I_Material                     as _SoldMaterial               on $projection.SoldMaterial               = _SoldMaterial.Material //do not use any longer, use _SoldProduct
association[0..1] to I_Product                      as _SoldProduct                on $projection.SoldProduct                = _SoldProduct.Product
association[0..1] to I_MaterialGroup                as _MaterialGroup              on $projection.MaterialGroup              = _MaterialGroup.MaterialGroup //do not use any longer, use _ProductGroup
association[0..1] to I_ProductGroup                 as _ProductGroup               on $projection.ProductGroup               = _ProductGroup.MaterialGroup
association[0..1] to I_ProductGroup_2               as _ProductGroup_2             on $projection.ProductGroup               = _ProductGroup_2.ProductGroup
association[0..1] to I_ProductGroup                 as _SoldProductGroup           on $projection.SoldProductGroup           = _SoldProductGroup.MaterialGroup
association[0..1] to I_ProductGroup_2               as _SoldProductGroup_2         on $projection.SoldProductGroup           = _SoldProductGroup_2.ProductGroup
association[0..1] to I_CustomerGroup                as _CustomerGroup              on $projection.CustomerGroup              = _CustomerGroup.CustomerGroup
association[0..1] to I_Country                      as _CustomerSupplierCountry    on $projection.CustomerSupplierCountry    = _CustomerSupplierCountry.Country
association[0..*] to I_SupplierIndustryText         as _CustomerSupplierIndustryText on $projection.CustomerSupplierIndustry = _CustomerSupplierIndustryText.SupplierIndustry
association[0..1] to I_SalesDistrict                as _SalesDistrict              on $projection.SalesDistrict              = _SalesDistrict.SalesDistrict
association[0..1] to I_Customer                     as _BillToParty                on $projection.BillToParty                = _BillToParty.Customer
association[0..1] to I_Customer                     as _ShipToParty                on $projection.ShipToParty                = _ShipToParty.Customer
association[0..1] to I_Currency                     as _TransactionCurrency        on $projection.TransactionCurrency        = _TransactionCurrency.Currency
association[1]    to I_Currency                     as _CompanyCodeCurrency        on $projection.CompanyCodeCurrency        = _CompanyCodeCurrency.Currency
association[0..1] to I_Currency                     as _GlobalCurrency             on $projection.GlobalCurrency             = _GlobalCurrency.Currency
association[0..1] to I_Currency                     as _FunctionalCurrency         on $projection.FunctionalCurrency         = _FunctionalCurrency.Currency 
association[0..1] to I_Currency                     as _FreeDefinedCurrency1       on $projection.FreeDefinedCurrency1       = _FreeDefinedCurrency1.Currency
association[0..1] to I_Currency                     as _FreeDefinedCurrency2       on $projection.FreeDefinedCurrency2       = _FreeDefinedCurrency2.Currency
association[0..1] to I_Currency                     as _FreeDefinedCurrency3       on $projection.FreeDefinedCurrency3       = _FreeDefinedCurrency3.Currency
association[0..1] to I_Currency                     as _FreeDefinedCurrency4       on $projection.FreeDefinedCurrency4       = _FreeDefinedCurrency4.Currency
association[0..1] to I_Currency                     as _FreeDefinedCurrency5       on $projection.FreeDefinedCurrency5       = _FreeDefinedCurrency5.Currency
association[0..1] to I_Currency                     as _FreeDefinedCurrency6       on $projection.FreeDefinedCurrency6       = _FreeDefinedCurrency6.Currency
association[0..1] to I_Currency                     as _FreeDefinedCurrency7       on $projection.FreeDefinedCurrency7       = _FreeDefinedCurrency7.Currency
association[0..1] to I_Currency                     as _FreeDefinedCurrency8       on $projection.FreeDefinedCurrency8       = _FreeDefinedCurrency8.Currency
association[0..1] to I_Currency                     as _ControllingObjectCurrency  on $projection.ControllingObjectCurrency  = _ControllingObjectCurrency.Currency

association[0..1] to I_UnitOfMeasure                as _BaseUnit                   on $projection.BaseUnit                   = _BaseUnit.UnitOfMeasure
association[0..1] to I_UnitOfMeasure                as _CostSourceUnit             on $projection.CostSourceUnit             = _CostSourceUnit.UnitOfMeasure
association[0..1] to I_UnitOfMeasure                as _ReferenceQuantityUnit      on $projection.ReferenceQuantityUnit      = _ReferenceQuantityUnit.UnitOfMeasure
association[0..1] to I_PlanningCategory             as _PlanningCategory           on $projection.PlanningCategory           = _PlanningCategory.PlanningCategory
association[0..*] to I_CostCenter                   as _OriginCostCenter           on  $projection.ControllingArea           = _OriginCostCenter.ControllingArea
                                                                                   and $projection.OriginCostCenter          = _OriginCostCenter.CostCenter
association[0..*] to I_ProfitCenter                 as _OriginProfitCenter         on  $projection.ControllingArea           = _OriginProfitCenter.ControllingArea
                                                                                   and $projection.OriginProfitCenter        = _OriginProfitCenter.ProfitCenter
association[0..*] to I_CostCenterActivityType       as _OriginCostCtrActivityType  on  $projection.ControllingArea           = _OriginCostCtrActivityType.ControllingArea
                                                                                   and $projection.OriginCostCtrActivityType = _OriginCostCtrActivityType.CostCtrActivityType
association[0..1] to I_WorkCenter                   as _WorkCenter                 on $projection.WorkCenterInternalID       = _WorkCenter.WorkCenterInternalID
                                                                                   and _WorkCenter.WorkCenterTypeCode        = 'A'
association [0..1] to I_BillableControl             as _BillableControl            on  $projection.BillableControl           = _BillableControl.BillableControl
association [0..1] to I_Supplier                    as _Supplier                   on  $projection.Supplier                  = _Supplier.Supplier
association [0..1] to I_SupplierCompany             as _SupplierCompany            on  $projection.Supplier    = _SupplierCompany.Supplier
                                                                                   and $projection.CompanyCode = _SupplierCompany.CompanyCode 

association [0..*] to I_SemTagGLAccount             as _SemTagGLAccount            on $projection.GLAccount       = _SemTagGLAccount.GLAccount
                                                                                   and $projection.ChartOfAccounts = _SemTagGLAccount.ChartOfAccounts

association [0..1] to I_CompanyCode                 as _CashLedgerCompanyCode      on  $projection.CashLedgerCompanyCode   = _CashLedgerCompanyCode.CompanyCode
association [0..1] to I_GLAccountInCompanyCode      as _CashLedgerAccount          on  $projection.CashLedgerCompanyCode   = _CashLedgerAccount.CompanyCode
                                                                                   and $projection.CashLedgerAccount       = _CashLedgerAccount.GLAccount

association [0..*] to I_FundsCenter                 as _FundsCenter                on  $projection.FinancialManagementArea      = _FundsCenter.FinancialManagementArea
                                                                                   and $projection.FundsCenter                  = _FundsCenter.FundsCenter
association [0..1] to I_FundedProgram               as _FundedProgram              on  $projection.FinancialManagementArea      = _FundedProgram.FinancialManagementArea
                                                                                   and $projection.FundedProgram                = _FundedProgram.FundedProgram
association [0..1] to I_Fund                        as _PartnerFund                on  $projection.FinancialManagementArea      = _PartnerFund.FinancialManagementArea
                                                                                   and $projection.PartnerFund                  = _PartnerFund.Fund
association [0..1] to I_Grant                       as _PartnerGrant               on  $projection.PartnerGrant                 = _PartnerGrant.GrantID
association [0..1] to I_BudgetPeriod                as _PartnerBudgetPeriod        on  $projection.PartnerBudgetPeriod          = _PartnerBudgetPeriod.BudgetPeriod

association [0..1] to I_CompanyCode                 as _PubSecBudgetAccountCoCode  on  $projection.PubSecBudgetAccountCoCode    = _PubSecBudgetAccountCoCode.CompanyCode
association [0..1] to I_PubSecBudgetAccount         as _PubSecBudgetAccount        on  $projection.PubSecBudgetAccountCoCode    = _PubSecBudgetAccount.PubSecBudgetAccountCoCode
                                                                                   and $projection.PubSecBudgetAccount          = _PubSecBudgetAccount.PubSecBudgetAccount
association [0..1] to I_FiscCalendarDateForCompCode as _PubSecBudgetCnsmpnDate     on  $projection.PubSecBudgetCnsmpnDate       = _PubSecBudgetCnsmpnDate.CalendarDate
                                                                                   and $projection.PubSecBudgetAccountCoCode    = _PubSecBudgetCnsmpnDate.CompanyCode
association [0..1] to I_FiscalYearPeriodForCmpnyCode as _PubSecBudgetCnsmpnFsclPeriod on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetCnsmpnFsclPeriod.CompanyCode
                                                                                   and $projection.PubSecBudgetCnsmpnFsclYear   = _PubSecBudgetCnsmpnFsclPeriod.FiscalYear
                                                                                   and $projection.PubSecBudgetCnsmpnFsclPeriod = _PubSecBudgetCnsmpnFsclPeriod.FiscalPeriod
association [0..1] to I_FiscalYearForCompanyCode    as _PubSecBudgetCnsmpnFsclYear on  $projection.PubSecBudgetAccountCoCode    = _PubSecBudgetCnsmpnFsclYear.CompanyCode
                                                                                   and $projection.PubSecBudgetCnsmpnFsclYear   = _PubSecBudgetCnsmpnFsclYear.FiscalYear
association [0..1] to I_PubSecBdgtCnsmpnType        as _PubSecBudgetCnsmpnType     on  $projection.PubSecBudgetCnsmpnType       = _PubSecBudgetCnsmpnType.PubSecBudgetCnsmpnType
association [0..1] to I_PubSecBdgtCnsmpnAmtType     as _PubSecBudgetCnsmpnAmtType  on  $projection.PubSecBudgetCnsmpnAmtType    = _PubSecBudgetCnsmpnAmtType.PubSecBudgetCnsmpnAmtType

association [0..1] to I_SponsoredClassCore         as _SponsoredClass      on  $projection.SponsoredClass  = _SponsoredClass.SponsoredClass
association [0..1] to I_SponsoredProgramCore       as _SponsoredProgram    on  $projection.SponsoredProgram = _SponsoredProgram.SponsoredProgram

association [0..1] to I_BudgetProcess               as _BudgetProcess              on  $projection.BudgetProcess                = _BudgetProcess.BudgetProcess
association [0..1] to I_BudgetingType               as _BudgetingType              on  $projection.BudgetingType                = _BudgetingType.BudgetingType

association [0..1] to I_MasterFixedAsset             as _MasterFixedAsset          on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                   and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
association [0..1] to I_FixedAsset                   as _FixedAsset                on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                                   and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                   and $projection.FixedAsset       = _FixedAsset.FixedAsset
association [0..1] to I_SubLedgerAccLineItemType     as _SubLedgerAccLineItemType  on  $projection.SubLedgerAcctLineItemType  = _SubLedgerAccLineItemType.SubLedgerAcctLineItemType
association [0..1] to I_MaintenanceOrder             as _MaintenanceOrder          on  $projection.OrderID             = _MaintenanceOrder.MaintenanceOrder
//                                                                                   and _MaintenanceOrder.OrderCategory       = '30'
association [0..1] to I_MaintenanceOrderOperation    as _MaintenanceOrderOperation on  $projection.OrderID             = _MaintenanceOrderOperation.MaintenanceOrder
                                                                                   and $projection.OrderOperation      = _MaintenanceOrderOperation.MaintenanceOrderOperation
//                                                                                         and _MaintenanceOrder.OrderCategory       = '30'
association [0..1] to I_MaintenanceOrderSubOperation as _MaintenanceOrderSubOperation on  $projection.OrderID             = _MaintenanceOrderSubOperation.MaintenanceOrder
                                                                                      and $projection.OrderOperation      = _MaintenanceOrderSubOperation.MaintenanceOrderOperation
                                                                                      and $projection.OrderSuboperation   = _MaintenanceOrderSubOperation.MaintenanceOrderSubOperation
association [0..1] to I_MaintOrdPlngDegreeCode       as _MaintOrdPlngDegreeCode    on  $projection.MaintenanceOrderPlanningCode = _MaintOrdPlngDegreeCode.MaintenanceOrderPlanningCode

association [0..1] to I_PMNotificationPriorityType   as _PMNotificationPriorityType  on  $projection.MaintPriorityType            = _PMNotificationPriorityType.MaintPriorityType

association [0..1] to I_PMNotificationPriority       as _PMNotificationPriority     on  $projection.MaintPriority                = _PMNotificationPriority.MaintPriority
                                                                                    and $projection.MaintPriorityType            = _PMNotificationPriority.MaintPriorityType

association [0..1] to I_LogisticsOrder               as _SuperiorOrder              on  $projection.SuperiorOrder                = _SuperiorOrder.OrderID
//association [0..1] to I_MaintenanceOrder             as _PMSuperiorOrder            on  $projection.SuperiorOrder                = _PMSuperiorOrder.MaintenanceOrder

association [0..1]  to I_AccountAssignmentType    as _AccountAssignmentType            on  $projection.AccountAssignmentType = _AccountAssignmentType.AccountAssignmentType                                                                                    

association of exact one to exact one E_JournalEntryItem              as _Extension_acdoca  on $projection.SourceLedger                  = _Extension_acdoca.SourceLedger and
                                                                                            $projection.CompanyCode                   = _Extension_acdoca.CompanyCode and
                                                                                            $projection.FiscalYear                    = _Extension_acdoca.FiscalYear and
                                                                                            $projection.AccountingDocument            = _Extension_acdoca.AccountingDocument and
                                                                                            $projection.LedgerGLLineItem              = _Extension_acdoca.LedgerGLLineItem
association of exact one to exact one E_FinancialPlanningEntryItem    as _Extension_acdocp  on $projection.FinancialPlanningReqTransSqnc = _Extension_acdocp.FinancialPlanningReqTransSqnc and
                                                                                            $projection.FinancialPlanningDataPacket   = _Extension_acdocp.FinancialPlanningDataPacket and
                                                                                            $projection.FinancialPlanningEntryItem    = _Extension_acdocp.FinancialPlanningEntryItem

{


@ObjectModel.foreignKey.association: '_SourceLedger'
key ActualPlanJournalEntryItem.SourceLedger,                                                    //key
@ObjectModel.foreignKey.association: '_Ledger'
key ActualPlanJournalEntryItem.Ledger,                                                          //key
@ObjectModel.foreignKey.association: '_CompanyCode'
key ActualPlanJournalEntryItem.CompanyCode,                                                     //key
@ObjectModel.foreignKey.association: '_FiscalYear'
key ActualPlanJournalEntryItem.FiscalYear,                                                      //key
@ObjectModel.foreignKey.association: '_JournalEntry'
key ActualPlanJournalEntryItem.AccountingDocument,                                              //key
key ActualPlanJournalEntryItem.FinancialPlanningReqTransSqnc,                                   //key
key ActualPlanJournalEntryItem.FinancialPlanningDataPacket,                                     //key
// field ActualPlanJournalEntryItem required for representative key definition LedgerGLLineItem|FinancialPlanningEntryItem
key ActualPlanJournalEntryItem.ActualPlanJournalEntryItem,                                       //key

ActualPlanJournalEntryItem.LedgerGLLineItem,                                                //key
//@DefaultAggregation: #NONE
ActualPlanJournalEntryItem.FinancialPlanningEntryItem,                                      //key

@ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
ActualPlanJournalEntryItem.LedgerFiscalYear,

@ObjectModel.foreignKey.association: '_ControllingArea'
ActualPlanJournalEntryItem.ControllingArea,
@ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
ActualPlanJournalEntryItem.GLAccount,
@ObjectModel.foreignKey.association: '_ChartOfAccounts'
ActualPlanJournalEntryItem.ChartOfAccounts,

ActualPlanJournalEntryItem.ActualPlanCode,

////////////////////////////////////////////////////////////////////////////////////
// G/L additional account assignments
////////////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_BusinessArea'
ActualPlanJournalEntryItem.BusinessArea,
@ObjectModel.foreignKey.association: '_ProfitCenter'
ActualPlanJournalEntryItem.ProfitCenter,
@ObjectModel.foreignKey.association: '_CostCenter'
ActualPlanJournalEntryItem.CostCenter,
@ObjectModel.foreignKey.association: '_Project'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ProjectExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'ProjectExternalID'
ActualPlanJournalEntryItem.Project,
@ObjectModel.foreignKey.association: '_ProjectBasicData'
ActualPlanJournalEntryItem.ProjectInternalID,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ProjectExternalID'
cast( ActualPlanJournalEntryItem._ProjectBasicData.ProjectExternalID as fis_projectext_no_conv ) as ProjectExternalID,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
ActualPlanJournalEntryItem.PartnerProjectInternalID,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
cast( ActualPlanJournalEntryItem._PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv ) as PartnerProjectExternalID,
@ObjectModel.foreignKey.association: '_WBSElement'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'WBSElementExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'WBSElementExternalID'
ActualPlanJournalEntryItem.WBSElement,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_WBSElementBasicData'
ActualPlanJournalEntryItem.WBSElementInternalID,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_WBSElementExternalID'
cast( ActualPlanJournalEntryItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv ) as WBSElementExternalID,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
ActualPlanJournalEntryItem.PartnerWBSElementInternalID,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
cast( ActualPlanJournalEntryItem._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv ) as PartnerWBSElementExternalID,
@ObjectModel.foreignKey.association: '_FunctionalArea'
ActualPlanJournalEntryItem.FunctionalArea,
@ObjectModel.foreignKey.association: '_Segment'
ActualPlanJournalEntryItem.Segment,
@ObjectModel.foreignKey.association: '_CostCtrActivityType'
ActualPlanJournalEntryItem.CostCtrActivityType,
@ObjectModel.foreignKey.association: '_CostAnalysisResource'
ActualPlanJournalEntryItem.CostAnalysisResource,
@ObjectModel.foreignKey.association: '_Order'
ActualPlanJournalEntryItem.OrderID,
ActualPlanJournalEntryItem.OrderCategory,
@ObjectModel.foreignKey.association: '_WorkPackage'
ActualPlanJournalEntryItem.WorkPackage,
@ObjectModel.foreignKey.association: '_WorkPackageWorkItem'
ActualPlanJournalEntryItem.WorkItem,
ActualPlanJournalEntryItem.PartnerAccountAssignmentType,
ActualPlanJournalEntryItem.TimeSheetOvertimeCategory,
@ObjectModel.foreignKey.association: '_PartnerCompanyCode'
ActualPlanJournalEntryItem.PartnerCompanyCode,
@ObjectModel.foreignKey.association: '_PartnerBusinessArea'
ActualPlanJournalEntryItem.PartnerBusinessArea,
@ObjectModel.foreignKey.association: '_PartnerProfitCenter'
ActualPlanJournalEntryItem.PartnerProfitCenter,
@ObjectModel.foreignKey.association: '_PartnerCostCenter'
ActualPlanJournalEntryItem.PartnerCostCenter,
@ObjectModel.foreignKey.association: '_PartnerProject'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerProjectExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'PartnerProjectExternalID'
ActualPlanJournalEntryItem.PartnerProject,
@ObjectModel.foreignKey.association: '_PartnerWBSElement'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerWBSElementExternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'PartnerWBSElementExternalID'
ActualPlanJournalEntryItem.PartnerWBSElement,
@ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
ActualPlanJournalEntryItem.PartnerFunctionalArea,
@ObjectModel.foreignKey.association: '_PartnerSegment'
ActualPlanJournalEntryItem.PartnerSegment,
@ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
ActualPlanJournalEntryItem.PartnerCostCtrActivityType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerOrder_2'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'PartnerOrder_2'          
@ObjectModel.foreignKey.association: '_PartnerOrder'
ActualPlanJournalEntryItem.PartnerOrder,
@Analytics.internalName: #LOCAL    
@ObjectModel.foreignKey.association: '_PartnerOrder_2'
ActualPlanJournalEntryItem.PartnerOrder_2,   
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerOrderCategory'
ActualPlanJournalEntryItem.PartnerOrderCategory,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.PartnerSalesDocument,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.PartnerProjectNetwork,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.PartnerProjectNetworkActivity,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.PartnerBusinessProcess,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.PartnerCostObject,
@ObjectModel.foreignKey.association: '_PartnerCompany'
ActualPlanJournalEntryItem.PartnerCompany,
@ObjectModel.foreignKey.association: '_OriginProfitCenter'
ActualPlanJournalEntryItem.OriginProfitCenter,
@ObjectModel.foreignKey.association: '_OriginCostCenter'
ActualPlanJournalEntryItem.OriginCostCenter,
@ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
ActualPlanJournalEntryItem.OriginCostCtrActivityType,

////////////////////////////////////////////////////////////////////////////////////
// .INCLUDE  ACDOC_SI_00 Universal Journal Entry: Transaction
////////////////////////////////////////////////////////////////////////////////////

ActualPlanJournalEntryItem.ReferenceDocumentType,
ActualPlanJournalEntryItem.ReferenceDocumentContext,
ActualPlanJournalEntryItem.ReferenceDocument,
ActualPlanJournalEntryItem.ReferenceDocumentItem,
@ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
ActualPlanJournalEntryItem.BusinessTransactionCategory,
@ObjectModel.foreignKey.association: '_BusinessTransactionType'
ActualPlanJournalEntryItem.BusinessTransactionType,
@ObjectModel.foreignKey.association: '_FinancialTransactionType'
ActualPlanJournalEntryItem.FinancialTransactionType,
@ObjectModel.foreignKey.association: '_AccountingDocumentType'
ActualPlanJournalEntryItem.AccountingDocumentType,
@ObjectModel.foreignKey.association: '_FinancialAccountType'
ActualPlanJournalEntryItem.FinancialAccountType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_DebitCreditCode'
ActualPlanJournalEntryItem.DebitCreditCode,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.AssignmentReference,
/////////////////////////////////////////////////////////////////////////////
// Mandatory fields for G/L
////////////////////////////////////////////////////////////////////////////
ActualPlanJournalEntryItem.PostingDate,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.DocumentDate,
@ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
@Semantics.fiscal.period: true
ActualPlanJournalEntryItem.FiscalPeriod,
@ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant'
@Semantics.fiscal.yearPeriod: true
ActualPlanJournalEntryItem.FiscalYearPeriod,
@ObjectModel.foreignKey.association: '_FiscalYearVariant'
@Semantics.fiscal.yearVariant: true
ActualPlanJournalEntryItem.FiscalYearVariant,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.AccountingDocCreatedByUser,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.CreationDate,

////////////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
///////////////////////////////////////////////////////////////////////////

@ObjectModel.foreignKey.association: '_PlanningCategory'
ActualPlanJournalEntryItem.PlanningCategory,
ActualPlanJournalEntryItem.ServicesRenderedDate,
@ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
ActualPlanJournalEntryItem.ControllingDebitCreditCode,
@Analytics.internalName: #LOCAL    
@ObjectModel.foreignKey.association: '_AccountAssignmentType'
ActualPlanJournalEntryItem.AccountAssignmentType,
//@ObjectModel.foreignKey.association: '_Employment'
ActualPlanJournalEntryItem.PersonnelNumber,
@ObjectModel.foreignKey.association: '_BillableControl'
ActualPlanJournalEntryItem.BillableControl,

ActualPlanJournalEntryItem.ValuationArea,

ActualPlanJournalEntryItem.ControllingObject,
ActualPlanJournalEntryItem.CostOriginGroup,
ActualPlanJournalEntryItem.ControllingObjectClass,

ActualPlanJournalEntryItem.BusinessSolutionOrder,
ActualPlanJournalEntryItem.BusinessSolutionOrderItem,
      
ActualPlanJournalEntryItem.ProviderContract,
ActualPlanJournalEntryItem.ProviderContractItem, 

////////////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_GEN  Fields for several subledgers
///////////////////////////////////////////////////////////////////////////
ActualPlanJournalEntryItem.DocumentItemText,

@ObjectModel.foreignKey.association: '_Plant'
ActualPlanJournalEntryItem.Plant,
@ObjectModel.foreignKey.association: '_Material'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'Product'
ActualPlanJournalEntryItem.Material,
@ObjectModel.foreignKey.association: '_Product'
ActualPlanJournalEntryItem.Product,
@ObjectModel.foreignKey.association: '_Customer'
ActualPlanJournalEntryItem.Customer,
@ObjectModel.foreignKey.association: '_Supplier'
ActualPlanJournalEntryItem.Supplier,

ActualPlanJournalEntryItem.PurchasingDocument,
ActualPlanJournalEntryItem.PurchasingDocumentItem,  
ActualPlanJournalEntryItem.AccountAssignmentNumber,  

ActualPlanJournalEntryItem.OffsettingAccount,
ActualPlanJournalEntryItem.OffsettingAccountType,
ActualPlanJournalEntryItem.OffsettingChartOfAccounts,  

@API.element.releaseState: #DEPRECATED
@API.element.successor:    'SalesDocument'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SalesDocument'
@ObjectModel.foreignKey.association: '_SalesOrder'
ActualPlanJournalEntryItem.SalesOrder,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'SalesDocumentItem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SalesDocumentItem'
@ObjectModel.foreignKey.association: '_SalesOrderItem'
ActualPlanJournalEntryItem.SalesOrderItem,
@ObjectModel.foreignKey.association: '_SalesDocument'
ActualPlanJournalEntryItem.SalesDocument,
@ObjectModel.foreignKey.association: '_SalesDocumentItem'
ActualPlanJournalEntryItem.SalesDocumentItem,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocumentType'
ActualPlanJournalEntryItem.ServiceDocumentType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocument'
ActualPlanJournalEntryItem.ServiceDocument,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocumentItem'
ActualPlanJournalEntryItem.ServiceDocumentItem,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceContractType'
ActualPlanJournalEntryItem.ServiceContractType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceContract'
ActualPlanJournalEntryItem.ServiceContract,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceContractItem'
ActualPlanJournalEntryItem.ServiceContractItem,

ActualPlanJournalEntryItem.ProjectNetwork,


//////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
//////////////////////////////////////////////////////////////////////

@ObjectModel.foreignKey.association: '_BillingDocumentType'
ActualPlanJournalEntryItem.BillingDocumentType,
@ObjectModel.foreignKey.association: '_SalesOrganization'
ActualPlanJournalEntryItem.SalesOrganization,
@ObjectModel.foreignKey.association: '_DistributionChannel'
ActualPlanJournalEntryItem.DistributionChannel,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'OrganizationDivision'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'OrganizationDivision'
@ObjectModel.foreignKey.association: '_Division'
ActualPlanJournalEntryItem.Division,
@ObjectModel.foreignKey.association: '_OrganizationDivision'
ActualPlanJournalEntryItem.OrganizationDivision,
@ObjectModel.foreignKey.association: '_SoldMaterial'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'SoldProduct'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SoldProduct'
ActualPlanJournalEntryItem.SoldMaterial,
@ObjectModel.foreignKey.association: '_SoldProduct'
ActualPlanJournalEntryItem.SoldProduct,
@ObjectModel.foreignKey.association: '_MaterialGroup'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'SoldProductGroup'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SoldProductGroup'
ActualPlanJournalEntryItem.MaterialGroup,
@ObjectModel.foreignKey.association: '_ProductGroup'
ActualPlanJournalEntryItem.ProductGroup,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_SoldProductGroup_2'
ActualPlanJournalEntryItem.SoldProductGroup,
@ObjectModel.foreignKey.association: '_CustomerGroup'
ActualPlanJournalEntryItem.CustomerGroup,
@ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
ActualPlanJournalEntryItem.CustomerSupplierCountry,
ActualPlanJournalEntryItem.CustomerSupplierIndustry,
@ObjectModel.foreignKey.association: '_SalesDistrict'
ActualPlanJournalEntryItem.SalesDistrict,
@ObjectModel.foreignKey.association: '_BillToParty'
ActualPlanJournalEntryItem.BillToParty,
@ObjectModel.foreignKey.association: '_ShipToParty'
ActualPlanJournalEntryItem.ShipToParty,
ActualPlanJournalEntryItem.CustomerSupplierCorporateGroup,
ActualPlanJournalEntryItem.IsStatisticalOrder,
ActualPlanJournalEntryItem.IsStatisticalCostCenter,
ActualPlanJournalEntryItem.IsStatisticalSalesDocument,
ActualPlanJournalEntryItem.WBSIsStatisticalWBSElement,
ActualPlanJournalEntryItem.WorkCenterInternalID,
ActualPlanJournalEntryItem.OrderOperation,
ActualPlanJournalEntryItem.OrderItem,
ActualPlanJournalEntryItem.PartnerOrderItem,
//  @ObjectModel.foreignKey.association: '_MaintenanceOrderSubOperation'      // Triangle Condition
ActualPlanJournalEntryItem.OrderSuboperation,
@ObjectModel.foreignKey.association: '_Equipment'
ActualPlanJournalEntryItem.Equipment,
@ObjectModel.foreignKey.association: '_FunctionalLocation'
ActualPlanJournalEntryItem.FunctionalLocation,
@ObjectModel.foreignKey.association: '_Assembly'
ActualPlanJournalEntryItem.Assembly,
@ObjectModel.foreignKey.association: '_MaintenanceActivityType'
ActualPlanJournalEntryItem.MaintenanceActivityType,
@ObjectModel.foreignKey.association: '_MaintOrdPlngDegreeCode'
ActualPlanJournalEntryItem.MaintenanceOrderPlanningCode,
@ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
ActualPlanJournalEntryItem.MaintPriorityType,
@ObjectModel.foreignKey.association: '_PMNotificationPriority'
ActualPlanJournalEntryItem.MaintPriority,
@ObjectModel.foreignKey.association: '_SuperiorOrder'
ActualPlanJournalEntryItem.SuperiorOrder,

ActualPlanJournalEntryItem.SourceReferenceDocumentType,
ActualPlanJournalEntryItem.SourceLogicalSystem,
ActualPlanJournalEntryItem.SourceReferenceDocumentCntxt,
ActualPlanJournalEntryItem.SourceReferenceDocument,
ActualPlanJournalEntryItem.SourceReferenceDocumentItem,
ActualPlanJournalEntryItem.SourceReferenceDocSubitem,
ActualPlanJournalEntryItem.IsCommitment,

//////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
/////////////////////////////////////////////////////////////////////
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
ActualPlanJournalEntryItem.CashLedgerCompanyCode,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CashLedgerAccount'
ActualPlanJournalEntryItem.CashLedgerAccount,
@ObjectModel.foreignKey.association: '_FinancialManagementArea'
ActualPlanJournalEntryItem.FinancialManagementArea,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FundsCenter'
ActualPlanJournalEntryItem.FundsCenter,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FundedProgram'
ActualPlanJournalEntryItem.FundedProgram,
@ObjectModel.foreignKey.association: '_Fund'
ActualPlanJournalEntryItem.Fund,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_Grant'
ActualPlanJournalEntryItem.GrantID,
@ObjectModel.foreignKey.association: '_BudgetPeriod'
ActualPlanJournalEntryItem.BudgetPeriod,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerFund'
ActualPlanJournalEntryItem.PartnerFund,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerGrant'
ActualPlanJournalEntryItem.PartnerGrant,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
ActualPlanJournalEntryItem.PartnerBudgetPeriod,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
ActualPlanJournalEntryItem.PubSecBudgetAccount,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
ActualPlanJournalEntryItem.PubSecBudgetAccountCoCode,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnDate'
ActualPlanJournalEntryItem.PubSecBudgetCnsmpnDate,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclPeriod'
ActualPlanJournalEntryItem.PubSecBudgetCnsmpnFsclPeriod,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclYear'
ActualPlanJournalEntryItem.PubSecBudgetCnsmpnFsclYear,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.PubSecBudgetIsRelevant,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnType'
ActualPlanJournalEntryItem.PubSecBudgetCnsmpnType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnAmtType'
ActualPlanJournalEntryItem.PubSecBudgetCnsmpnAmtType,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_SponsoredProgram'
ActualPlanJournalEntryItem.SponsoredProgram,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_SponsoredClass'
ActualPlanJournalEntryItem.SponsoredClass,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.GteeMBudgetValidityNumber,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_BudgetProcess'
ActualPlanJournalEntryItem.BudgetProcess,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_BudgetingType'
ActualPlanJournalEntryItem.BudgetingType,

ActualPlanJournalEntryItem.BudgetDocWorkFlowStatus,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
ActualPlanJournalEntryItem.SubLedgerAcctLineItemType,
ActualPlanJournalEntryItem.AssetDepreciationArea,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_MasterFixedAsset'
ActualPlanJournalEntryItem.MasterFixedAsset,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FixedAsset'
ActualPlanJournalEntryItem.FixedAsset,
ActualPlanJournalEntryItem.AssetAcctTransClassfctn,
ActualPlanJournalEntryItem.AssetClass,


///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
///////////////////////////////////////////////////////////////////////
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.JointVenture,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.JointVentureEquityGroup,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.JointVentureCostRecoveryCode,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.JointVentureProductionDate,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.JointVentureAccountingActivity,


 ///////////////////////////////////////////////////////////////////////
 // .INCLUDE ACDOC_SI_ACR STRU  0 0 Universal Journal Entry: Fields for Accrual object
 ///////////////////////////////////////////////////////////////////////
@Analytics.internalName: #LOCAL      
ActualPlanJournalEntryItem.AccrualObjectType,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.AccrualObjectLogicalSystem,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.AccrualObject,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.AccrualSubobject,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.AccrualItemType, 
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.AccrualReferenceObject,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.AccrualValueDate,     


///////////////////////////////////////////////////////////////////////
// .INCLUDE  ACDOCP_SI_EAM  ACDOCP: Fields for EAM (maintenace orders)
///////////////////////////////////////////////////////////////////////
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.Reservation,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.ReservationItem ,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.ReservationType,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.MMServicePackage,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.MMServicePackageLine,


///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOCP_SI_RE   ACDOCP: Fields for Real Estate
///////////////////////////////////////////////////////////////////////
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.REBusinessEntity,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.RealEstateBuilding,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.RealEstateProperty,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.RERentalObject,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.RealEstateContract,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.REServiceChargeKey,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.RESettlementUnitID,
@Analytics.internalName: #LOCAL
ActualPlanJournalEntryItem.SettlementReferenceDate,


/////////////////////////////////////////////////////////////////////////////////////
// Value Fields
/////////////////////////////////////////////////////////////////////////////////////


ActualPlanJournalEntryItem.TransactionCurrency,
ActualPlanJournalEntryItem.CompanyCodeCurrency,
ActualPlanJournalEntryItem.GlobalCurrency,
ActualPlanJournalEntryItem.FunctionalCurrency,
ActualPlanJournalEntryItem.FreeDefinedCurrency1,
ActualPlanJournalEntryItem.FreeDefinedCurrency2,
ActualPlanJournalEntryItem.FreeDefinedCurrency3,
ActualPlanJournalEntryItem.FreeDefinedCurrency4,
ActualPlanJournalEntryItem.FreeDefinedCurrency5,
ActualPlanJournalEntryItem.FreeDefinedCurrency6,
ActualPlanJournalEntryItem.FreeDefinedCurrency7,
ActualPlanJournalEntryItem.FreeDefinedCurrency8,
ActualPlanJournalEntryItem.ControllingObjectCurrency,
ActualPlanJournalEntryItem.CostSourceUnit,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
ActualPlanJournalEntryItem.AmountInTransactionCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
ActualPlanJournalEntryItem.AmountInCompanyCodeCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
ActualPlanJournalEntryItem.AmountInGlobalCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
ActualPlanJournalEntryItem.AmountInFunctionalCurrency,  

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
ActualPlanJournalEntryItem.AmountInFreeDefinedCurrency1,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
ActualPlanJournalEntryItem.AmountInFreeDefinedCurrency2,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
ActualPlanJournalEntryItem.AmountInFreeDefinedCurrency3,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
ActualPlanJournalEntryItem.AmountInFreeDefinedCurrency4,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
ActualPlanJournalEntryItem.AmountInFreeDefinedCurrency5,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
ActualPlanJournalEntryItem.AmountInFreeDefinedCurrency6,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
ActualPlanJournalEntryItem.AmountInFreeDefinedCurrency7,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
ActualPlanJournalEntryItem.AmountInFreeDefinedCurrency8,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
ActualPlanJournalEntryItem.AmountInObjectCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
ActualPlanJournalEntryItem.FixedAmountInGlobalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
ActualPlanJournalEntryItem.FixedAmountInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }      
ActualPlanJournalEntryItem.FixedAmountInTransCrcy,      

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
ActualPlanJournalEntryItem.ValuationQuantity,
     
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }      
ActualPlanJournalEntryItem.ValuationFixedQuantity,  

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }      
ActualPlanJournalEntryItem.FixedQuantity,  

@ObjectModel.foreignKey.association: '_BaseUnit'
ActualPlanJournalEntryItem.BaseUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
ActualPlanJournalEntryItem.Quantity,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ReferenceQuantityUnit'
ActualPlanJournalEntryItem.ReferenceQuantityUnit,
@Analytics.internalName: #LOCAL
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
ActualPlanJournalEntryItem.ReferenceQuantity,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
ActualPlanJournalEntryItem.ActualAmountInTransactionCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
ActualPlanJournalEntryItem.ActualAmountInCompanyCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
ActualPlanJournalEntryItem.ActualAmountInGlobalCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy1,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy2,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy3,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy4,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy5,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy6,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy7,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy8,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
ActualPlanJournalEntryItem.ActualAmountInObjectCurrency,

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
ActualPlanJournalEntryItem.ActualValuationQuantity,

@Analytics.internalName: #LOCAL
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
ActualPlanJournalEntryItem.ActualReferenceQuantity,

@Analytics.internalName: #LOCAL
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
ActualPlanJournalEntryItem.ActualQuantityInBaseUnit,  

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
ActualPlanJournalEntryItem.PlanAmountInTransactionCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
ActualPlanJournalEntryItem.PlanAmountInCompanyCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
ActualPlanJournalEntryItem.PlanAmountInGlobalCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy1,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy2,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy3,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy4,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy5,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy6,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy7,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy8,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
ActualPlanJournalEntryItem.PlanAmountInObjectCurrency,

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
ActualPlanJournalEntryItem.PlanValuationQuantity,

@Analytics.internalName: #LOCAL
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
ActualPlanJournalEntryItem.PlanReferenceQuantity,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
ActualPlanJournalEntryItem.PlanPriceInGlobalCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
ActualPlanJournalEntryItem.PlanPriceInCompanyCodeCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
ActualPlanJournalEntryItem.PlanPriceInTransactionCurrency,

/////////////////////////////////////////////////////////////////////////////////////
// Actual Plan Difference Fields
/////////////////////////////////////////////////////////////////////////////////////

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
cast(ActualPlanJournalEntryItem.ActualAmountInTransactionCrcy - ActualPlanJournalEntryItem.PlanAmountInTransactionCrcy as fis_actl_pln_diff_wsl) as ActlPlnDiffAmtInTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
cast(ActualPlanJournalEntryItem.ActualAmountInCompanyCodeCrcy - ActualPlanJournalEntryItem.PlanAmountInCompanyCodeCrcy as fis_actl_pln_diff_hsl) as ActlPlnDiffAmtInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
cast(ActualPlanJournalEntryItem.ActualAmountInGlobalCurrency - ActualPlanJournalEntryItem.PlanAmountInGlobalCurrency as fis_actl_pln_diff_ksl) as ActlPlnDiffAmtInGlobalCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy1 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy1 as fis_actl_pln_diff_osl) as ActlPlnDiffAmtInFreeDfndCrcy1,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy2 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy2 as fis_actl_pln_diff_vsl) as ActlPlnDiffAmtInFreeDfndCrcy2,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy3 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy3 as fis_actl_pln_diff_bsl) as ActlPlnDiffAmtInFreeDfndCrcy3,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy4 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy4 as fis_actl_pln_diff_csl) as ActlPlnDiffAmtInFreeDfndCrcy4,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy5 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy5 as fis_actl_pln_diff_dsl) as ActlPlnDiffAmtInFreeDfndCrcy5,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy6 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy6 as fis_actl_pln_diff_esl) as ActlPlnDiffAmtInFreeDfndCrcy6,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy7 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy7 as fis_actl_pln_diff_fsl) as ActlPlnDiffAmtInFreeDfndCrcy7,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
cast(ActualPlanJournalEntryItem.ActualAmountInFreeDfndCrcy8 - ActualPlanJournalEntryItem.PlanAmountInFreeDefinedCrcy8 as fis_actl_pln_diff_gsl) as ActlPlnDiffAmtInFreeDfndCrcy8,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
cast(ActualPlanJournalEntryItem.ActualAmountInObjectCurrency - ActualPlanJournalEntryItem.PlanAmountInObjectCurrency as fis_actl_pln_diff_co_osl) as ActlPlnDiffAmtInObjectCrcy,

@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
cast(ActualPlanJournalEntryItem.ActualValuationQuantity - ActualPlanJournalEntryItem.PlanValuationQuantity as fis_val_quan_actl_plan_diff) as ActlPanDiffValuationQuantity,

@Analytics.internalName: #LOCAL 
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
cast(ActualPlanJournalEntryItem.ActualValuationQuantity - ActualPlanJournalEntryItem.PlanValuationQuantity as fis_ref_quan_actl_plan_diff) as ActlPlanDiffReferenceQuantity,

_SourceLedger,
_JournalEntry,
_ControllingArea,
_Ledger,
_CompanyCode,
_GLAccountInCompanyCode,
_GLAccountInChartOfAccounts,
_ChartOfAccounts,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_LedgerFiscalYearForVariant'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_LedgerFiscalYearForVariant'
_LedgerFiscalYear,
_LedgerFiscalYearForVariant,
_FiscalYear,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_FiscalPeriodForVariant'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_FiscalPeriodForVariant'
_FiscalPeriod,
_FiscalPeriodForVariant,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_FiscalYearPeriodForVariant'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_FiscalYearPeriodForVariant'
_FiscalYearPeriod,
_FiscalYearPeriodForVariant,
_CalendarDate,
_FiscalCalendarDate,
_BusinessArea,
_ProfitCenter,
_CurrentProfitCenter,
_CostCenter,
_CurrentCostCenter,
_AccountAssignmentType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ProjectExternalID'
_Project,
ActualPlanJournalEntryItem._ProjectBasicData,
_ProjectExternalID,
_ProjectExternalIDText,
ActualPlanJournalEntryItem._PartnerProjectBasicData,
_PartnerProjectExternalID,
_PartnerProjctExtrnalIDText,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_WBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_WBSElementExternalID'
_WBSElement,
ActualPlanJournalEntryItem._WBSElementBasicData,
_WBSElementExternalID,
ActualPlanJournalEntryItem._PartnerWBSElementBasicData,
_PartnerWBSElementExternalID,
_PartnerWBSElemntExtrnalIDText,
_FunctionalArea,
_Segment,
_CostCtrActivityType,
_CostAnalysisResource,
_InternalOrder,
_Order,
_WorkPackageWorkItem,
_WorkPackage,
_PartnerCompanyCode,
_PartnerBusinessArea,
_PartnerProfitCenter,
_PartnerCostCenter,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerProjectExternalID'
_PartnerProject,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerWBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerWBSElementExternalID'
_PartnerWBSElement,
_PartnerFunctionalArea,
_PartnerSegment,
_PartnerCostCtrActivityType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerOrder_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerOrder_2'
_PartnerOrder,
_PartnerOrder_2,
_PartnerOrderCategory,
_PartnerCompany,
_OriginProfitCenter,
_OriginCostCenter,
_OriginCostCtrActivityType,
_FiscalYearVariant,
_ControllingDebitCreditCode,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PersonWorkAgreement_1'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PersonWorkAgreement_1'
_Employment,
_PersonWorkAgreement_1,
_BusinessTransactionCategory,
_BusinessTransactionType,
ActualPlanJournalEntryItem._FinancialTransactionType,
_AccountingDocumentType,
_FinancialAccountType,
_DebitCreditCode,
_Plant,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_Product'
_Material,
_Product,
_Customer,
_CustomerCompany,
_Supplier,
_SupplierCompany,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDocument'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SalesDocument'
_SalesOrder,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDocumentItem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SalesDocumentItem'
_SalesOrderItem,
_SalesDocument,
_SalesDocumentItem,
_ServiceDocumentType,
_ServiceDocument,
_ServiceDocumentItem,
_ServiceContract,
_ServiceContractItem,
_ServiceContractType,
_BillingDocumentType,
_SalesOrganization,
_DistributionChannel,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_OrganizationDivision'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_OrganizationDivision'
_Division,
_OrganizationDivision,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProduct'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProduct'
_SoldMaterial,
_SoldProduct,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
_MaterialGroup,
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    '_ProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ProductGroup_2'
_ProductGroup,
_ProductGroup_2,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
_SoldProductGroup,
_SoldProductGroup_2,
_CustomerGroup,
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
_ControllingObjectCurrency,
_BaseUnit,
_CostSourceUnit,
_ReferenceQuantityUnit,
_CustomerSupplierCountry,
_CustomerSupplierIndustryText,
_SalesDistrict,
_BillToParty,
_ShipToParty,
_WorkCenter,
_PlanningCategory,
_BillableControl,
_SemTagGLAccount,
ActualPlanJournalEntryItem._FinancialManagementArea,
ActualPlanJournalEntryItem._Fund,
ActualPlanJournalEntryItem._Grant,
ActualPlanJournalEntryItem._BudgetPeriod,

_CashLedgerCompanyCode,
_CashLedgerAccount,
_FundsCenter,
_FundedProgram,
_PartnerFund,
_PartnerGrant,
_PartnerBudgetPeriod,
_PubSecBudgetAccountCoCode,
_PubSecBudgetAccount,
_PubSecBudgetCnsmpnDate,
_PubSecBudgetCnsmpnFsclPeriod,
_PubSecBudgetCnsmpnFsclYear,
_PubSecBudgetCnsmpnType,
_PubSecBudgetCnsmpnAmtType,
_SponsoredProgram,
_SponsoredClass,

_BudgetProcess,
_BudgetingType,

_MasterFixedAsset,
_FixedAsset,
_SubLedgerAccLineItemType,

ActualPlanJournalEntryItem._Equipment,
ActualPlanJournalEntryItem._FunctionalLocation,
ActualPlanJournalEntryItem._MaintenanceActivityType,
_MaintOrdPlngDegreeCode,
_PMNotificationPriorityType,
_PMNotificationPriority,
_MaintenanceOrder,
_MaintenanceOrderOperation,
_MaintenanceOrderSubOperation,
ActualPlanJournalEntryItem._Assembly,
_SuperiorOrder,

// Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
ActualPlanJournalEntryItem.GLAccountAuthorizationGroup,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
ActualPlanJournalEntryItem.SupplierBasicAuthorizationGrp,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
ActualPlanJournalEntryItem.CustomerBasicAuthorizationGrp,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
ActualPlanJournalEntryItem.AcctgDocTypeAuthorizationGroup,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
ActualPlanJournalEntryItem.OrderType,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
ActualPlanJournalEntryItem.SalesOrderType

}
```
