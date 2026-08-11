---
name: I_ML_BALANCE
description: "Balance Summary for Material Ledger"
app_component: CO-PC-ML-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ML_BALANCE')/$value
semantic_en: "Balance Summary for Material Ledger"
semantic_vi: "Balance Summary for Material Ledger — CDS view giao diện dựa trên P_ML_Balance."
keywords:
  - "balance"
  - "summary"
  - "for"
  - "material"
  - "ledger"
  - "company"
  - "code"
  - "account"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - CO
  - CO-PC
  - CO-PC-ML
  - CO-PC-ML-2CL
  - component:CO-PC-ML-2CL
  - interface-view
  - lob:controlling
  - material
---
# I_ML_BALANCE

**Balance Summary for Material Ledger**

| Property | Value |
|---|---|
| App Component | `CO-PC-ML-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ML_BALANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Material` | ✓ | |  |  | `CHAR(40)` | Product |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `MatlDocLatestPostgDate` |  | |  |  | `DATS(8)` | Posting Date |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ProductHierarchy` |  | | `_Product` | `ProductHierarchy` | `CHAR(18)` | Product Hierarchy |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `ProductionOrder` |  | |  |  | `CHAR(12)` | Order ID |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialValuationClass` |  | |  |  | `CHAR(4)` | Valuation Class |
| `InventoryValuationCategory` |  | |  |  | `CHAR(1)` | Valuation Category |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `MaterialLedgerProcessType` |  | |  |  | `CHAR(4)` | Material Ledger Process Type (Procurement/Consumption) |
| `MaterialLedgerCategory` |  | |  |  | `CHAR(2)` | Category in Material Ledger Update Structure |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `SlsPriceAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Sales Price Amount in Company Code Currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
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
| `BaseUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `InventoryQty` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `_ProductHierarchy` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
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
| `_ControllingArea` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductHierarchy` | `I_ProductHierarchy` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |
| `_CostSourceUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Product` | `I_Product` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ML_BALANCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ML_BALANCE')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName:'IMLBALANCE'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: {
  usageType: {
    serviceQuality: #D,
    sizeCategory: #XL,
    dataClass: #MIXED },
  modelingPattern: #ANALYTICAL_CUBE,
  supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE ]
}
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@Search.searchable: true
@Metadata: {
  allowExtensions:true,
  ignorePropagatedAnnotations:true }
@EndUserText.label: 'Balance Summary for Material Ledger'
@AccessControl.auditFilter: #ENABLED

define view entity I_ML_Balance
  with parameters
    P_CalendarDate : calendardate

  as select from P_ML_Balance( P_CalendarDate: $parameters.P_CalendarDate ) as it
  association [0..1] to I_ProductHierarchy as _ProductHierarchy on $projection.ProductHierarchy = _ProductHierarchy.ProductHierarchy
  association [0..1] to I_Plant            as _Plant            on $projection.Plant = _Plant.Plant
  association [0..1] to I_MaterialGroup    as _MaterialGroup    on $projection.MaterialGroup = _MaterialGroup.MaterialGroup
  association [0..1] to I_UnitOfMeasure    as _CostSourceUnit   on $projection.BaseUnit = _CostSourceUnit.UnitOfMeasure
  association [0..1] to I_Product          as _Product          on $projection.Material = _Product.Product
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Search.ranking:#HIGH
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_Ledger'
      @Search.ranking:#HIGH
  key Ledger,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
  key GLAccount,
      @Semantics.fiscal.year: true
  key FiscalYear,
  key AccountingDocument,
  key LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_Product'
      @Search.ranking:#HIGH
      @Search.defaultSearchElement: true
  key Material,
      Product,
      CostEstimate,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,
      AccountingDocumentType,
      @Search.ranking:#HIGH
      ValuationArea,
      InventoryValuationType,
      @Semantics.fiscal.period: true
      FiscalPeriod,
      LedgerFiscalYear,
      PostingDate,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'PostingDate'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PostingDate'
      MatlDocLatestPostgDate,
      ReferenceDocument,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      @ObjectModel.text.element: [ 'BusinessTransactionTypeName']
      BusinessTransactionType,
      @Semantics.text: true
      _BusinessTransactionType._Text[1:Language = $session.system_language].BusinessTransactionTypeName,
      _Product.ProductHierarchy as ProductHierarchy,
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
      @Analytics.internalName: #LOCAL
      FiscalYearVariant,
      ReferenceDocumentType,
      PurchasingDocument,
      ProductionOrder,
      TransactionTypeDetermination,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      MaterialGroup,
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
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      SlsPriceAmountInCoCodeCrcy,

      GroupCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
      AmountInGroupCurrency,

      FreeDefinedCurrency1,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      AmountInFreeDefinedCurrency1,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      FreeDefinedCurrency2,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      AmountInFreeDefinedCurrency2,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      FreeDefinedCurrency3,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      AmountInFreeDefinedCurrency3,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      FreeDefinedCurrency4,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      AmountInFreeDefinedCurrency4,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      FreeDefinedCurrency5,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      AmountInFreeDefinedCurrency5,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      FreeDefinedCurrency6,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      AmountInFreeDefinedCurrency6,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      FreeDefinedCurrency7,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      AmountInFreeDefinedCurrency7,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      FreeDefinedCurrency8,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      AmountInFreeDefinedCurrency8,

      BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      InventoryQty,

      //----------------------------------------
      // Associations
      //----------------------------------------
      _GLAccountInChartOfAccounts,
      _ChartOfAccounts,
      _Segment,
      _Material,
      _CompanyCode,
      _ProfitCenter,
      _CostCenter,
      _Ledger,
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
      _CostSourceUnit,
      _ControllingArea,
      _ProductHierarchy,
      _Plant,
      _Product,
      _BusinessTransactionType,
      _MaterialGroup


}
where
  PostingDate <= $parameters.P_CalendarDate
```
