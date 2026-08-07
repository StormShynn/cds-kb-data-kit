---
name: I_MATERIALLEDGERCUBE_LIT
description: Materialledgercube Lit
app_component: CO-PC-ML-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-ML
  - interface-view
  - material
  - component:CO-PC-ML-2CL
  - lob:Controlling
  - bo:Material
---
# I_MATERIALLEDGERCUBE_LIT

**Materialledgercube Lit**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `Ledger` | ✓ | |  |  |  |  |
| `GLAccount` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |
| `LedgerGLLineItem` | ✓ | |  |  |  |  |
| `Material` | ✓ | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `AccountingDocumentType` |  | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `LedgerFiscalYear` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `MatlDocLatestPostgDate` |  | |  |  |  |  |
| `ReferenceDocument` |  | |  |  |  |  |
| `BusinessTransactionType` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `Segment` |  | |  |  |  |  |
| `AccountingDocCreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `ReferenceDocumentType` |  | |  |  |  |  |
| `PurchasingDocument` |  | |  |  |  |  |
| `ProductionOrder` |  | |  |  |  |  |
| `TransactionTypeDetermination` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `MaterialValuationClass` |  | |  |  |  |  |
| `InventoryValuationCategory` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `MaterialLedgerProcessType` |  | |  |  |  |  |
| `MaterialLedgerCategory` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |  |  |
| `SlsPriceAmountInCoCodeCrcy` |  | |  |  |  |  |
| `GroupCurrency` |  | |  |  |  |  |
| `AmountInGroupCurrency` |  | |  |  |  |  |
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
| `BaseUnit` |  | |  |  |  |  |
| `InventoryQty` |  | |  |  |  |  |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductPlant` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_JournalEntryItem` | [1..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |
| `_ProductPlant` | `I_ProductPlant` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@Analytics: {
  dataCategory: #CUBE
}
@Analytics.technicalName: 'IMLCUBELIT'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: {
  modelingPattern: #ANALYTICAL_CUBE,
  supportedCapabilities: [
    #ANALYTICAL_PROVIDER,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE ],
  usageType: {
    serviceQuality: #D,
    sizeCategory: #XL,
    dataClass: #MIXED
  }
}
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@Search.searchable: true
@EndUserText.label: 'Line Item for Material Ledger - Cube'
@AccessControl.auditFilter: #ENABLED


define view entity I_Materialledgercube_Lit
  as select from P_Materialledger_Cube_Lit

  association [1..1] to E_JournalEntryItem as _Extension     on  $projection.SourceLedger       = _Extension.SourceLedger
                                                             and $projection.CompanyCode        = _Extension.CompanyCode
                                                             and $projection.FiscalYear         = _Extension.FiscalYear
                                                             and $projection.AccountingDocument = _Extension.AccountingDocument
                                                             and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem
  association [0..1] to I_MaterialGroup    as _MaterialGroup on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup
  association [0..1] to I_ProductPlant    as _ProductPlant on  $projection.Material = _ProductPlant.Product
                                                             and $projection.Plant    = _ProductPlant.Plant
{
      //      @ObjectModel.foreignKey.association: '_SourceLedger'
  key SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
  key GLAccount,
      @Semantics.fiscal.year: true
  key FiscalYear,
  key AccountingDocument,
  key LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_Material'
      @Search.defaultSearchElement: true
  key Material,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,
      AccountingDocumentType,
      ValuationArea,
      InventoryValuationType,
      @Semantics.fiscal.period: true
      FiscalPeriod,
      LedgerFiscalYear,
      PostingDate,
      MatlDocLatestPostgDate,
      ReferenceDocument,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      @ObjectModel.text.element: [ 'BusinessTransactionTypeName']
      BusinessTransactionType,
      @Semantics.text:true
      _BusinessTransactionType._Text[1:Language = $session.system_language].BusinessTransactionTypeName,
      DocumentDate,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      AccountingDocCreatedByUser,
      LastChangeDateTime,
      FiscalYearPeriod,
      ReferenceDocumentType,
      PurchasingDocument,
      ProductionOrder,
      TransactionTypeDetermination,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @ObjectModel.text.element: [ 'MaterialGroupName']
      @Search.ranking: #HIGH
      MaterialGroup,
      @Semantics.text: true
      _MaterialGroup._Text[1:Language = $session.system_language].MaterialGroupName,
      MaterialValuationClass,
      InventoryValuationCategory,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      MaterialLedgerProcessType,
      MaterialLedgerCategory,

      //----------------------------------------
      //KEY FIGURES
      //----------------------------------------
      CompanyCodeCurrency,
      //  AdditionalCurrencyHName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      SlsPriceAmountInCoCodeCrcy,


      GroupCurrency,
      //  AdditionalCurrencyKName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
      AmountInGroupCurrency,

      FreeDefinedCurrency1,
      //  AdditionalCurrencyOName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      AmountInFreeDefinedCurrency1,

      FreeDefinedCurrency2,
      //  AdditionalCurrencyVName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      AmountInFreeDefinedCurrency2,

      FreeDefinedCurrency3,
      //  AdditionalCurrencyBName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      AmountInFreeDefinedCurrency3,

      FreeDefinedCurrency4,
      //  AdditionalCurrencyCName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      AmountInFreeDefinedCurrency4,

      FreeDefinedCurrency5,
      //  AdditionalCurrencyDName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      AmountInFreeDefinedCurrency5,

      FreeDefinedCurrency6,
      //  AdditionalCurrencyEName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      AmountInFreeDefinedCurrency6,

      FreeDefinedCurrency7,
      //  AdditionalCurrencyFName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      AmountInFreeDefinedCurrency7,

      FreeDefinedCurrency8,
      //  AdditionalCurrencyGName,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      AmountInFreeDefinedCurrency8,

      BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      InventoryQty,

      //----------------------------------------
      //Associations
      //----------------------------------------
      _GLAccountInChartOfAccounts,
      _ChartOfAccounts,
      _Segment,
      _Material,
      _CompanyCode,
      _Ledger,
      _ProfitCenter,
      _CostCenter,
      _CompanyCodeCurrency,
      _CostSourceUnit,
      _ControllingArea,
      _BusinessTransactionType,
      _Plant,
      _MaterialGroup,
      _ProductPlant

}
```
