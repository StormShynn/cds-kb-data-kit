---
name: I_ACCOUNTINGDOCUMENTJOURNAL
description: "Accounting DocumentUMENTJOURNAL"
semantic_vi: "View I_ACCOUNTINGDOCUMENTJOURNAL hiển thị dữ liệu nhật ký tài khoản kế toán, được sử dụng để theo dõi và quản lý các giao dịch tài chính trong một công ty. Nó thường được sử dụng trong kế toán và báo cáo tài chính."
keywords:
  - "accounting document"
  - "tài khoản kế toán"
  - "financial transaction"
  - "giao dịch tài chính"
  - "journal entry"
  - "nhật ký tài khoản"
  - "accounting document journal"
  - "tài khoản kế toán nhật ký"
  - "sap fi-gl"
  - "fi-gl-is-2cl"
  - "financial accounting"
  - "kế toán tài chính"
semantic_en: "The I_ACCOUNTINGDOCUMENTJOURNAL view exposes accounting document journal data, which is used to track and manage financial transactions in a company. It is typically used in financial accounting and reporting."
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
  - accounting-document
  - document
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_ACCOUNTINGDOCUMENTJOURNAL

**Accounting DocumentUMENTJOURNAL**

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
| `CompanyCode` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |
| `Ledger` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `LedgerGLLineItem` | ✓ | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `AccountingDocumentType` |  | |  |  |  |  |
| `AccountingDocCreatedByUser` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `PostingKey` |  | |  |  |  |  |
| `FinancialTransactionType` |  | |  |  |  |  |
| `Segment` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `BalanceTransactionCurrency` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `DebitAmountInCoCodeCrcy` |  | |  |  |  |  |
| `CreditAmountInCoCodeCrcy` |  | |  |  |  |  |
| `FunctionalCurrency` |  | |  |  |  |  |
| `DebitAmountInFunctionalCrcy` |  | |  |  |  |  |
| `CreditAmountInFunctionalCrcy` |  | |  |  |  |  |
| `DebitAmountInTransCrcy` |  | |  |  |  |  |
| `CreditAmountInTransCrcy` |  | |  |  |  |  |
| `CreditAmountInBalanceTransCrcy` |  | |  |  |  |  |
| `DebitAmountInBalanceTransCrcy` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `AccountingDocumentItem` |  | |  |  |  |  |
| `AccountingDocumentCategory` |  | |  |  |  |  |
| `AccountAssignmentNumber` |  | |  |  |  |  |
| `AccountAssignmentType` |  | |  |  |  |  |
| `AccountAssignment` |  | |  |  |  |  |
| `AssetValueDate` |  | |  |  |  |  |
| `AssetTransactionType` |  | |  |  |  |  |
| `AssetAcctTransClassfctn` |  | |  |  |  |  |
| `AlternativeGLAccount` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `AssetDepreciationArea` |  | |  |  |  |  |
| `BudgetPeriod` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `BusinessTransactionType` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ControllingObjectDebitType` |  | |  |  |  |  |
| `ClearingDate` |  | |  |  |  |  |
| `ClearingAccountingDocument` |  | |  |  |  |  |
| `ClearingDocFiscalYear` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `CountryChartOfAccounts` |  | |  |  |  |  |
| `CostObject` |  | |  |  |  |  |
| `CostEstimate` |  | |  |  |  |  |
| `CustomerServiceNotification` |  | |  |  |  |  |
| `ControllingObjectClass` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `DepreciationFiscalPeriod` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `DocumentItemText` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `EliminationProfitCenter` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `FreeDefinedCurrency1` |  | |  |  |  |  |
| `FreeDefinedCurrency2` |  | |  |  |  |  |
| `FreeDefinedCurrency3` |  | |  |  |  |  |
| `FinancialManagementArea` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `FollowOnDocumentType` |  | |  |  |  |  |
| `FinancialAccountType` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `GLAccountType` |  | |  |  |  |  |
| `GroupMasterFixedAsset` |  | |  |  |  |  |
| `GroupFixedAsset` |  | |  |  |  |  |
| `HouseBank` |  | |  |  |  |  |
| `HouseBankAccount` |  | |  |  |  |  |
| `InvoiceReference` |  | |  |  |  |  |
| `InvoiceReferenceFiscalYear` |  | |  |  |  |  |
| `InvoiceItemReference` |  | |  |  |  |  |
| `InventorySpecialStockValnType` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `InventorySpclStkSalesDocument` |  | |  |  |  |  |
| `InventorySpclStkSalesDocItm` |  | |  |  |  |  |
| `InventorySpclStockWBSElement` |  | |  |  |  |  |
| `InventorySpecialStockSupplier` |  | |  |  |  |  |
| `IsReversal` |  | |  |  |  |  |
| `IsReversed` |  | |  |  |  |  |
| `IsSettlement` |  | |  |  |  |  |
| `IsSettled` |  | |  |  |  |  |
| `IsOpenItemManaged` |  | |  |  |  |  |
| `JointVenture` |  | |  |  |  |  |
| `JointVentureEquityGroup` |  | |  |  |  |  |
| `JointVentureCostRecoveryCode` |  | |  |  |  |  |
| `JointVentureEquityType` |  | |  |  |  |  |
| `LedgerFiscalYear` |  | |  |  |  |  |
| `LogicalSystem` |  | |  |  |  |  |
| `LineItemIsCompleted` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `OffsettingAccount` |  | |  |  |  |  |
| `OffsettingAccountType` |  | |  |  |  |  |
| `OriginCostCenter` |  | |  |  |  |  |
| `OriginCostCtrActivityType` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `OperatingConcern` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `OriginObjectType` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `PurchasingDocument` |  | |  |  |  |  |
| `PurchasingDocumentItem` |  | |  |  |  |  |
| `PersonnelNumber` |  | |  |  |  |  |
| `PartnerCompanyCode` |  | |  |  |  |  |
| `PartnerControllingObjectClass` |  | |  |  |  |  |
| `Project` |  | |  |  |  |  |
| `ProjectNetwork` |  | |  |  |  |  |
| `PartnerCostCtrActivityType` |  | |  |  |  |  |
| `PartnerOrder` |  | |  |  |  |  |
| `PartnerOrder_2` |  | |  |  |  |  |
| `PartnerOrderCategory` |  | |  |  |  |  |
| `PartnerWBSElement` |  | |  |  |  |  |
| `PartnerProject` |  | |  |  |  |  |
| `PartnerSalesDocument` |  | |  |  |  |  |
| `PartnerSalesDocumentItem` |  | |  |  |  |  |
| `PartnerAccountAssignment` |  | |  |  |  |  |
| `PartnerAccountAssignmentType` |  | |  |  |  |  |
| `PartnerProjectNetwork` |  | |  |  |  |  |
| `PartnerProjectNetworkActivity` |  | |  |  |  |  |
| `PartnerBusinessProcess` |  | |  |  |  |  |
| `PartnerCostObject` |  | |  |  |  |  |
| `PartnerCostCenter` |  | |  |  |  |  |
| `PartnerProfitCenter` |  | |  |  |  |  |
| `PartnerFunctionalArea` |  | |  |  |  |  |
| `PartnerBusinessArea` |  | |  |  |  |  |
| `PartnerCompany` |  | |  |  |  |  |
| `PartnerSegment` |  | |  |  |  |  |
| `PredecessorReferenceDocType` |  | |  |  |  |  |
| `PredecessorReferenceDocCntxt` |  | |  |  |  |  |
| `PredecessorReferenceDocument` |  | |  |  |  |  |
| `PredecessorReferenceDocItem` |  | |  |  |  |  |
| `PartnerFund` |  | |  |  |  |  |
| `PartnerGrant` |  | |  |  |  |  |
| `PartnerBudgetPeriod` |  | |  |  |  |  |
| `QuantityIsIncomplete` |  | |  |  |  |  |
| `RelatedNetworkActivity` |  | |  |  |  |  |
| `ReferencePurchaseOrderCategory` |  | |  |  |  |  |
| `ReferenceDocumentContext` |  | |  |  |  |  |
| `ReferenceDocument` |  | |  |  |  |  |
| `ReferenceDocumentType` |  | |  |  |  |  |
| `ReferenceDocumentItem` |  | |  |  |  |  |
| `ReferenceDocumentItemGroup` |  | |  |  |  |  |
| `ReversalReferenceDocumentCntxt` |  | |  |  |  |  |
| `ReversalReferenceDocument` |  | |  |  |  |  |
| `SoldMaterial` |  | |  |  |  |  |
| `SourceLedger` |  | |  |  |  |  |
| `SenderGLAccount` |  | |  |  |  |  |
| `SenderAccountAssignment` |  | |  |  |  |  |
| `SenderAccountAssignmentType` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `SpecialGLCode` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SettlementReferenceDate` |  | |  |  |  |  |
| `TransactionTypeDetermination` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `WBSElement` |  | |  |  |  |  |
| `PartnerProjectExternalID` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  |  |  |  |
| `InvtrySpclStockWBSElmntExtID` |  | |  |  |  |  |
| `ProjectExternalID` |  | |  |  |  |  |
| `PartnerWBSElementExternalID` |  | |  |  |  |  |
| `CostCenterHierarchyNode` |  | |  | `cast('' as fis_cctr_hrynid_50)` |  |  |
| `CostCenterHierarchy` |  | |  | `cast('' as fis_cctr_hryid_42)` |  |  |
| `GLAccountHierarchyNode` |  | |  | `cast('' as fis_glacct_hrynid_50)` |  |  |
| `GLAccountHierarchy` |  | |  | `cast('' as fis_glaccthier)` |  |  |
| `ProfitCenterHierarchyNode` |  | |  | `cast('' as fis_cctr_hrynid_50)` |  |  |
| `ProfitCenterHierarchy` |  | |  | `cast('' as fis_prctr_hryid_42 )` |  |  |
| `DocumentReferenceID` |  | | `_JournalEntry` | `DocumentReferenceID` |  |  |
| `AccountingDocumentHeaderText` |  | | `_JournalEntry` | `AccountingDocumentHeaderText` |  |  |
| `_LedgerText` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |
| `_BalanceTransactionCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_FreeDefinedCurrency1` | | ✓ | | | | |
| `_FreeDefinedCurrency2` | | ✓ | | | | |
| `_FreeDefinedCurrency3` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_Extension` | `E_JournalEntryItem` | [1..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IFIACCDOCJRNL',
                buffering.status: #NOT_ALLOWED,
//                compiler.compareFilter: true,
                preserveKey: true }
@AccessControl: { privilegedAssociations: ['_LedgerText'],
                  authorizationCheck: #CHECK,
                  personalData.blocking: #REQUIRED }
@Analytics: { dataCategory: #CUBE }
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Journal'
@ObjectModel: { representativeKey: 'LedgerGLLineItem',
                usageType: { sizeCategory: #XXL,
                             dataClass:  #MIXED,
                             serviceQuality: #D },
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #EXTRACTION_DATA_SOURCE],
                modelingPattern: #ANALYTICAL_CUBE }
@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true }
@VDM.viewType: #COMPOSITE
@Consumption.dbHints: ['USE_HEX_PLAN','NO_JOIN_THRU_AGGR']
@AccessControl.auditFilter: #ENABLED

@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'GeneralLedgerAccountLineItem'

define view I_AccountingDocumentJournal
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu
  as select from I_JournalEntryItemCube

  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..*] to I_LedgerText       as _LedgerText on  $projection.Ledger = _LedgerText.Ledger
  // ]--GENERATED
  association [1..1] to E_JournalEntryItem as _Extension  on  $projection.SourceLedger       = _Extension.SourceLedger
                                                          and $projection.CompanyCode        = _Extension.CompanyCode
                                                          and $projection.FiscalYear         = _Extension.FiscalYear
                                                          and $projection.AccountingDocument = _Extension.AccountingDocument
                                                          and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem
{
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_JournalEntryStdVH',
                     element: 'AccountingDocument' },
          additionalBinding: [{ localElement: 'CompanyCode',
                                element: 'CompanyCode' },
                              { localElement: 'FiscalYear',
                                element: 'FiscalYear' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AccountingDocument,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_LedgerStdVH',
                     element: 'Ledger' }
        }]
      @ObjectModel.text.association: '_LedgerText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key FiscalYear,
  key LedgerGLLineItem,

      FiscalPeriod,

      PostingDate,

      CreationDate,
      CreationDateTime,

      AccountingDocumentType,

      AccountingDocCreatedByUser,

      GLAccount,


      _GLAccountInChartOfAccounts._Text[1:Language = :P_Language].GLAccountName,


      PostingKey,

      FinancialTransactionType,

      Segment,

      ProfitCenter,

      @ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
      @Semantics.currencyCode: true
      BalanceTransactionCurrency,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode: true
      CompanyCodeCurrency,

      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      @DefaultAggregation: #SUM
      DebitAmountInCoCodeCrcy,

      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      @DefaultAggregation: #SUM
      CreditAmountInCoCodeCrcy,

      ////////////////////////////////////
      // NEW
      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      @Semantics.currencyCode:true
      FunctionalCurrency,

      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      @DefaultAggregation: #SUM
      DebitAmountInFunctionalCrcy,

      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      @DefaultAggregation: #SUM
      CreditAmountInFunctionalCrcy,
      ////////////////////////////////////


      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      @DefaultAggregation: #SUM
      DebitAmountInTransCrcy,

      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      @DefaultAggregation: #SUM
      CreditAmountInTransCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      CreditAmountInBalanceTransCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      DebitAmountInBalanceTransCrcy,

      BaseUnit,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode: true
      TransactionCurrency,


      AccountingDocumentItem,


      AccountingDocumentCategory,


      AccountAssignmentNumber,


      AccountAssignmentType,


      AccountAssignment,


      AssetValueDate,


      AssetTransactionType,


      AssetAcctTransClassfctn,


      AlternativeGLAccount,


      AssignmentReference,


      AssetDepreciationArea,


      BudgetPeriod,


      BusinessProcess,


      BusinessTransactionType,


      BillingDocumentType,


      BusinessArea,


      ControllingObjectDebitType,


      ClearingDate,


      ClearingAccountingDocument,


      ClearingDocFiscalYear,


      Customer,


      ChartOfAccounts,


      CustomerGroup,


      ControllingArea,


      CostCenter,


      CountryChartOfAccounts,


      CostObject,


      CostEstimate,


      CustomerServiceNotification,


      ControllingObjectClass,


      CostCtrActivityType,


      DepreciationFiscalPeriod,


      DistributionChannel,


      DocumentItemText,


      DocumentDate,


      DebitCreditCode,


      EliminationProfitCenter,



      FunctionalArea,


      FiscalYearVariant,


      FiscalYearPeriod,


      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      @Semantics.currencyCode:true
      FreeDefinedCurrency1,


      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      @Semantics.currencyCode:true
      FreeDefinedCurrency2,


      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      @Semantics.currencyCode:true
      FreeDefinedCurrency3,

      FinancialManagementArea,

      Fund,

      FollowOnDocumentType,


      FinancialAccountType,
      FixedAsset,

      GrantID,
      GLAccountType,
      GroupMasterFixedAsset,
      GroupFixedAsset,

      HouseBank,
      HouseBankAccount,

      InvoiceReference,
      InvoiceReferenceFiscalYear,
      InvoiceItemReference,
      InventorySpecialStockValnType,
      InventorySpecialStockType,
      InventoryValuationType,
      InventorySpclStkSalesDocument,
      InventorySpclStkSalesDocItm,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'InvtrySpclStockWBSElmntExtID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntExtID'
      InventorySpclStockWBSElement,
      InventorySpecialStockSupplier,
      //        @Semantics.booleanIndicator
      IsReversal,
      //        @Semantics.booleanIndicator
      IsReversed,
      //        @Semantics.booleanIndicator
      IsSettlement,
      //        @Semantics.booleanIndicator
      IsSettled,
      //        @Semantics.booleanIndicator
      IsOpenItemManaged,

      JointVenture,
      JointVentureEquityGroup,
      JointVentureCostRecoveryCode,
      JointVentureEquityType,

      LedgerFiscalYear,
      LogicalSystem,
      LineItemIsCompleted,

      MaterialGroup,
      Material,
      MasterFixedAsset,

      OffsettingAccount,
      OffsettingAccountType,
      OriginCostCenter,
      OriginCostCtrActivityType,
      OrderID,
      OrderCategory,
      OperatingConcern,
      OrganizationDivision,
      OriginObjectType,

      Plant,
      PurchasingDocument,
      PurchasingDocumentItem,
      PersonnelNumber,
      PartnerCompanyCode,
      PartnerControllingObjectClass,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ProjectExternalID'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'ProjectExternalID'
      Project,
      ProjectNetwork,
      PartnerCostCtrActivityType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'PartnerOrder_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'PartnerOrder_2'
      PartnerOrder,
      @Analytics.internalName: #LOCAL
      PartnerOrder_2,
      PartnerOrderCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'PartnerWBSElementExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
      PartnerWBSElement,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'PartnerProjectExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'PartnerProjectExternalID'
      PartnerProject,
      PartnerSalesDocument,
      PartnerSalesDocumentItem,
      PartnerAccountAssignment,
      PartnerAccountAssignmentType,
      PartnerProjectNetwork,
      PartnerProjectNetworkActivity,
      PartnerBusinessProcess,
      PartnerCostObject,
      PartnerCostCenter,
      PartnerProfitCenter,
      PartnerFunctionalArea,
      PartnerBusinessArea,
      PartnerCompany,
      PartnerSegment,
      PredecessorReferenceDocType,
      PredecessorReferenceDocCntxt,
      PredecessorReferenceDocument,
      PredecessorReferenceDocItem,
      PartnerFund,
      PartnerGrant,
      PartnerBudgetPeriod,

      QuantityIsIncomplete,

      RelatedNetworkActivity,
      ReferencePurchaseOrderCategory,
      ReferenceDocumentContext,
      ReferenceDocument,
      ReferenceDocumentType,
      ReferenceDocumentItem,
      ReferenceDocumentItemGroup,
      ReversalReferenceDocumentCntxt,
      ReversalReferenceDocument,

      SoldMaterial,
      SourceLedger,
      SenderGLAccount,
      SenderAccountAssignment,
      SenderAccountAssignmentType,
      SalesOrder,
      SalesOrderItem,
      SpecialGLCode,
      SalesOrganization,
      SettlementReferenceDate,

      _Segment._Text[1:Language = :P_Language].SegmentName,


      _AccountingDocumentType._Text[1:Language = :P_Language].AccountingDocumentTypeName,
      TransactionTypeDetermination,
      TaxCode,

      ValuationArea,
      Supplier,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'WBSElementExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementExternalID'
      WBSElement,
      PartnerProjectExternalID,
      WBSElementExternalID,
      InvtrySpclStockWBSElmntExtID,
      ProjectExternalID,
      PartnerWBSElementExternalID,
      cast('' as fis_cctr_hrynid_50)   as CostCenterHierarchyNode,
      cast('' as fis_cctr_hryid_42)    as CostCenterHierarchy,
      cast('' as fis_glacct_hrynid_50) as GLAccountHierarchyNode,
      cast('' as fis_glaccthier)       as GLAccountHierarchy,
      cast('' as fis_cctr_hrynid_50)   as ProfitCenterHierarchyNode,
      cast('' as fis_prctr_hryid_42 )     as ProfitCenterHierarchy,
      _JournalEntry.DocumentReferenceID,
      _Ledger,
      _JournalEntry.AccountingDocumentHeaderText,
      _JournalEntry,
      _FiscalYear,
      _CompanyCode,
      _CompanyCodeCurrency,
      _FunctionalCurrency,
      _BalanceTransactionCurrency,
      _TransactionCurrency,
      _FreeDefinedCurrency1,
      _FreeDefinedCurrency2,
      _FreeDefinedCurrency3,
      _GLAccountInCompanyCode,
      _Supplier,
      _Customer,
      _AccountingDocumentType,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _LedgerText
      // ]--GENERATED

}
where
  AccountingDocumentCategory <> 'C';
```
