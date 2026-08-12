---
name: I_COMPACTJOURNAL
description: "Compact Journal"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPACTJOURNAL')/$value
semantic_en: "Compact Journal"
semantic_vi: "Compact Journal — CDS view giao diện dựa trên I_JournalEntryItemCube."
keywords:
  - "Compact Journal"
  - "compact"
  - "journal"
  - "company"
  - "code"
  - "accounting"
  - "document"
  - "ledger"
  - "fiscal"
  - "year"
  - "line"
  - "item"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_COMPACTJOURNAL

**Compact Journal**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPACTJOURNAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `DebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Company Code Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `DebitAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Functional Currency |
| `GLDebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | G/L Account - Debit Amount in Company Code Currency |
| `AssetDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Asset - Debit Amount in Company Code Currency |
| `MaterialDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Material - Debit Amount in Company Code Currency |
| `DebtorDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Customer - Debit Amount in Company Code Currency |
| `CreditorDebitAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Supplier - Debit Amount in Company Code Currency |
| `GLCreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | G/L Account - Credit Amount in Company Code Currency |
| `AssetCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Asset - Credit Amount in Company Code Currency |
| `MaterialCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Material - Credit Amount in Company Code Currency |
| `DebtorCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Customer - Credit Amount in Company Code Currency |
| `CreditorCreditAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Supplier - Credit Amount in Company Code Currency |
| `DebitAmountInTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Transaction Currency |
| `DebitAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDefinedCrcy1` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDefinedCrcy2` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDefinedCrcy3` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `WBSElement` |  | |  |  | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `CostCenterHierarchyNode` |  | |  | `cast('' as fis_cctr_hrynid_50)` | `CHAR(50)` | Cost Center Hierarchy Node |
| `CostCenterHierarchy` |  | |  | `cast('' as fis_cctr_hryid_42)` | `CHAR(42)` | Cost Center Hierarchy |
| `GLAccountHierarchyNode` |  | |  | `cast('' as fis_glacct_hrynid_50)` | `CHAR(50)` | G/L Account Hierarchy Node |
| `GLAccountHierarchy` |  | |  | `cast('' as fis_glaccthier)` | `CHAR(42)` | G/L Account Hierarchy |
| `ProfitCenterHierarchyNode` |  | |  | `cast('' as fis_cctr_hrynid_50)` | `CHAR(50)` | Cost Center Hierarchy Node |
| `ProfitCenterHierarchy` |  | |  | `cast('' as fis_prctr_hryid_42 )` | `CHAR(42)` | Profit Center Hierarchy |
| `_LedgerText` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
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

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LedgerText` | `I_LedgerText` | [0..*] |
| `_Extension` | `E_JournalEntryItem` | [1..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPACTJOURNAL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COMPACTJOURNAL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFICMPTJRNL'
@EndUserText.label: 'Compact Journal'
@VDM.viewType: #COMPOSITE
//@Analytics: { dataCategory: #CUBE, dataExtraction.enabled: true }
@Analytics: { dataCategory: #CUBE }
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'LedgerGLLineItem'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #D
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.allowExtensions: true

//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_LedgerText']
// ]--GENERATED
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE]
@AccessControl.auditFilter: #ENABLED
define view I_CompactJournal
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu
  as select from I_JournalEntryItemCube

  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..*] to I_LedgerText             as _LedgerText             on  $projection.Ledger = _LedgerText.Ledger
  // ]--GENERATED
  association [1..1] to E_JournalEntryItem       as _Extension              on  $projection.SourceLedger       = _Extension.SourceLedger
                                                                            and $projection.CompanyCode        = _Extension.CompanyCode
                                                                            and $projection.FiscalYear         = _Extension.FiscalYear
                                                                            and $projection.AccountingDocument = _Extension.AccountingDocument
                                                                            and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem
  association [0..1] to I_AccountingDocumentType as _AccountingDocumentType on  $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType
  association [0..1] to I_GLAccountInCompanyCode as _GLAccountInCompanyCode on  $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode
                                                                            and $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
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
      SourceLedger,
      FiscalYearVariant,
      _CompanyCode.CompanyCodeName,


      FiscalPeriod,


      PostingDate,

      CreationDate,

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

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }

      GLDebitAmountInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }

      AssetDebitAmtInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }

      MaterialDebitAmtInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }

      DebtorDebitAmtInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }

      CreditorDebitAmtInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }

      GLCreditAmountInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }

      AssetCreditAmtInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }

      MaterialCreditAmtInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }

      DebtorCreditAmtInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }

      CreditorCreditAmtInCoCodeCrcy,

      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      @DefaultAggregation: #SUM

      DebitAmountInTransCrcy,

      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      @DefaultAggregation: #SUM

      CreditAmountInTransCrcy,

      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      @DefaultAggregation: #SUM

      DebitAmountInFreeDefinedCrcy1,

      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      @DefaultAggregation: #SUM

      CreditAmountInFreeDefinedCrcy1,

      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      @DefaultAggregation: #SUM

      DebitAmountInFreeDefinedCrcy2,

      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      @DefaultAggregation: #SUM

      CreditAmountInFreeDefinedCrcy2,

      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      @DefaultAggregation: #SUM

      DebitAmountInFreeDefinedCrcy3,

      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      @DefaultAggregation: #SUM
      CreditAmountInFreeDefinedCrcy3,

      BaseUnit,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode: true
      TransactionCurrency,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      @Semantics.currencyCode:true
      FreeDefinedCurrency1,


      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      @Semantics.currencyCode:true
      FreeDefinedCurrency2,


      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      @Semantics.currencyCode:true
      FreeDefinedCurrency3,

      AccountingDocumentItem,

      AccountingDocumentCategory,

      AlternativeGLAccount,

      BusinessTransactionType,

      BusinessArea,

      ChartOfAccounts,

      ControllingArea,

      CostCenter,

      DocumentItemText,

      DocumentDate,

      DebitCreditCode,

      FunctionalArea,

      FiscalYearPeriod,

      FinancialAccountType,

      SpecialGLCode,
      GLAccountType,
      LedgerFiscalYear,

      _Segment._Text[1:Language = :P_Language].SegmentName,

      _AccountingDocumentType._Text[1:Language = :P_Language].AccountingDocumentTypeName,

      TransactionTypeDetermination,
      TaxCode,

      ValuationArea,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   'WBSElementExternalID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementExternalID'
      WBSElement,
      WBSElementExternalID,
      //@Consumption.filter.hidden: true                              
      cast('' as fis_cctr_hrynid_50) as CostCenterHierarchyNode, 
      //@Consumption.filter.selectionType: #SINGLE
      cast('' as fis_cctr_hryid_42) as CostCenterHierarchy,
      cast('' as fis_glacct_hrynid_50) as GLAccountHierarchyNode,
      cast('' as fis_glaccthier)       as GLAccountHierarchy,
      cast('' as fis_cctr_hrynid_50)   as ProfitCenterHierarchyNode,
      cast('' as fis_prctr_hryid_42 )     as ProfitCenterHierarchy,
      _Ledger,
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
      _AccountingDocumentType,
      _GLAccountInCompanyCode,   
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _LedgerText
      // ]--GENERATED

}
where
  AccountingDocumentCategory <> 'C'
```
