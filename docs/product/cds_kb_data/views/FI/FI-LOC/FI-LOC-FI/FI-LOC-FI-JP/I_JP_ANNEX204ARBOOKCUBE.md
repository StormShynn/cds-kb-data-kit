---
name: I_JP_ANNEX204ARBOOKCUBE
description: "JP Annex 204ARBOOKCUBE"
app_component: FI-LOC-FI-JP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - analytical
  - component:FI-LOC-FI-JP
  - lob:Finance
---
# I_JP_ANNEX204ARBOOKCUBE

**JP Annex 204ARBOOKCUBE**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-JP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  |  |  |  |
| `SourceLedger` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |
| `LedgerGLLineItem` | ✓ | |  |  |  |  |
| `Ledger` | ✓ | |  |  |  |  |
| `AccountingDocumentType` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `ClearingDate` |  | |  |  |  |  |
| `DebitCreditCodeName` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `DocumentItemText` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `AmountInTransactionCurrency` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  |  |  |  |
| `AcctsRblAmtInCCCrcy` |  | |  |  |  |  |
| `NetPriceQuantityUnit` |  | | `_SOItem` | `NetPriceQuantityUnit` |  |  |
| `NetPriceQuantity` |  | |  | `cast( _SOItem.NetPriceQuantity as glo_jp_netpriceqty )` |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `_BaseUnitFromBilling` | | ✓ | | | | |
| `_NetPriceQuantityUnit` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BaseUnitFromBilling` | `I_UnitOfMeasure` | [0..1] |
| `_NetPriceQuantityUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJPANNEX204BOOKC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType:#COMPOSITE
@Analytics: { dataCategory: #CUBE, dataExtraction.enabled: false }
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Analytics.internalName:#LOCAL
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #BLOCKED_DATA_INCLUDED
@EndUserText.label: 'Japan AR Book for Corporate Tax - Cube'
define view I_JP_Annex204ARBookCube
  as select from P_JP_ARDocumentItemList
  association [0..1] to I_UnitOfMeasure as _BaseUnitFromBilling  on $projection.BaseUnit = _BaseUnitFromBilling.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure as _NetPriceQuantityUnit on $projection.netpricequantityunit = _NetPriceQuantityUnit.UnitOfMeasure
{
      @ObjectModel.foreignKey.association: '_BillToParty'
      @Consumption.valueHelpDefinition: [{ entity: {
       name:           'I_CustomerCompanyVH',
       element:        'Customer' },
       additionalBinding: [{
         element:      'CompanyCode',
         localElement: 'CompanyCode',
         usage: #FILTER_AND_RESULT
      }] }]
  key Customer,
      _BillToParty,
      @ObjectModel.foreignKey.association: '_SourceLedger'
      @ObjectModel.text.association: '_SourceLedgerText'
  key SourceLedger,
      _SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @ObjectModel.text.association: '_CompanyCodeText'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
  key CompanyCode,
      _CompanyCode,
  key FiscalYear,
  key AccountingDocument,
  key LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_Ledger'
      @ObjectModel.text.association: '_LedgerText'
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_LedgerStdVH',
                         element: 'Ledger' }
            }]
  key Ledger,
      _Ledger,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      @ObjectModel.text.association: '_AccountingDocumentTypeText'
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AccountingDocumentTypeStdVH',
                         element: 'AccountingDocumentType' }
            }]
      AccountingDocumentType,
      _AccountingDocumentType,
      FiscalPeriod,
      PostingDate,
      DocumentDate,
      ClearingDate,
      @Semantics.text:true
      DebitCreditCodeName,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      @ObjectModel.text.element: ['DebitCreditCodeName']
      //      @Consumption.valueHelpDefinition: [
      //            { entity:  { name:    'I_DebitCreditCodeVH',
      //                         element: 'DebitCreditCode' }
      //            }]
      DebitCreditCode,
      _DebitCreditCode,
      //      _DebitCreditCode._Text[1: Language = $session.system_language].DebitCreditCodeName as DebitCreditCodeName,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      @ObjectModel.text.association: '_ChartOfAccountsText'
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_ChartOfAccountsStdVH',
                         element: 'ChartOfAccounts' }
            }]
      ChartOfAccounts,
      _ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      @ObjectModel.text.association: '_GLAccountTxt'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_GLAccountStdVH',
                     element: 'GLAccount' }
        } ]
      GLAccount,
      _GLAccountInChartOfAccounts,
      DocumentItemText,
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.association: '_ProductText'
            @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_ProductStdVH',
                           element: 'Product' }
              }]
      Product,
      _Product,
      //Quantity Information
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnitFromBilling'
      BaseUnit,
      _BaseUnitFromBilling,
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      //      @EndUserText.label: 'Billing Quantity'
      Quantity,
      //Amount Information
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      _TransactionCurrency,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AmountInTransactionCurrency,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      CompanyCodeCurrency,
      _CompanyCodeCurrency,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,
      //      @EndUserText.label: 'AR Amount'
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      //      case DebitCreditCode
      //      when 'H'
      //      then cast( abs(AcctsRblAmtInCCCrcy) as fins_cfs_accrec preserving type )
      //      else
      //      AcctsRblAmtInCCCrcy
      //      end as AcctsRblAmtInCCCrcy,
      AcctsRblAmtInCCCrcy,
      // Pricing information for Billing
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
      _SOItem.NetPriceQuantityUnit,
      _NetPriceQuantityUnit,
      @Semantics: { quantity : {unitOfMeasure: 'NetPriceQuantityUnit'} }
      //      @EndUserText.label: 'Price Unit'
      cast( _SOItem.NetPriceQuantity as glo_jp_netpriceqty  ) as NetPriceQuantity,
      //      @EndUserText.label: 'Net Price'
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      NetPriceAmount

}
```
