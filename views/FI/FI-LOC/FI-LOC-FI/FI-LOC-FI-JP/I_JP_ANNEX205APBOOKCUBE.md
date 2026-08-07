---
name: I_JP_ANNEX205APBOOKCUBE
description: JP Annex 205APBOOKCUBE
app_component: FI-LOC-FI-JP
software_component: SAPSCORE
release_state: released
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
# I_JP_ANNEX205APBOOKCUBE

**JP Annex 205APBOOKCUBE**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-JP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  |  |  |  |
| `SourceLedger` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |
| `LedgerGLLineItem` | ✓ | |  |  |  |  |
| `Ledger` | ✓ | |  |  |  |  |
| `PurchasingDocument` |  | |  |  |  |  |
| `JP_Annex205APLeadingAcctgDoc` |  | |  |  |  |  |
| `AccountingDocumentType` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `ClearingDate` |  | |  |  |  |  |
| `AccountingDocumentHeaderText` |  | | `_Header` | `AccountingDocumentHeaderText` |  |  |
| `DocumentItemText` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `ReferenceDocument` |  | |  |  |  |  |
| `ReferenceDocumentItem` |  | |  |  |  |  |
| `PurchasingDocumentItem` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `DebitCreditCodeName` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `AmountInTransactionCurrency` |  | |  | `cast( AmountInTransactionCurrency as fis_wsl preserving type )` |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `AmountInCompanyCodeCurrency` |  | |  | `cast( AmountInCompanyCodeCurrency as fis_hsl preserving type )` |  |  |
| `AcctsPyblAmtInCCCrcy` |  | |  | `case FinancialAccountType when 'K' then cast( AmountInCompanyCodeCurrency as fins_cfs_accpay preserving type ) else cast ( cast ('0' as abap.curr( 23,2)) as fins_cfs_accpay preserving type ) end` |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `Quantity` |  | |  | `cast( abs(Quantity) as glo_jp_anx20_quantity preserving type )` |  |  |
| `OrderPriceUnit` |  | | `_PurchasingDocumentItem` | `OrderPriceUnit` |  |  |
| `NetPriceQuantity` |  | |  | `cast( _PurchasingDocumentItem.NetPriceQuantity as glo_jp_netpriceqty )` |  |  |
| `NetPriceAmount` |  | | `_PurchasingDocumentItem` | `NetPriceAmount` |  |  |
| `DocumentCurrency` |  | | `_PurchasingDocumentItem` | `DocumentCurrency` |  |  |
| `_SourceLedger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Header` | `I_AccountingDocument` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IJPANX205CUBE'
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
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
@EndUserText.label: 'Japan AP Book for Corporate Tax - Cube'
define view I_JP_Annex205APBookCube
  as select from P_JP_ANNEX215APBOOK
  association [1..1] to I_AccountingDocument as _Header on  $projection.CompanyCode        = _Header.CompanyCode
                                                        and $projection.FiscalYear         = _Header.FiscalYear
                                                        and $projection.AccountingDocument = _Header.AccountingDocument
{
      @ObjectModel.foreignKey.association: '_Supplier'
      @Consumption.valueHelpDefinition: [{
       entity: {
         name:           'I_SupplierCompanyVH',
         element:        'Supplier' },
       additionalBinding: [{
         element:      'CompanyCode',
         localElement: 'CompanyCode',
         usage: #FILTER_AND_RESULT }] }]
  key Supplier,
      @ObjectModel.foreignKey.association: '_SourceLedger'
      @ObjectModel.text.association: '_SourceLedgerText'
  key SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @ObjectModel.text.association: '_CompanyCodeText'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
  key CompanyCode,
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
      PurchasingDocument,
      JP_Annex205APLeadingAcctgDoc,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      @ObjectModel.text.association: '_AccountingDocumentTypeText'
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_AccountingDocumentTypeStdVH',
                         element: 'AccountingDocumentType' }
            }]
      AccountingDocumentType,
      FiscalPeriod,
      PostingDate,
      DocumentDate,
      ClearingDate,
      _Header.AccountingDocumentHeaderText,
      DocumentItemText,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      @ObjectModel.text.association: '_ChartOfAccountsText'
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_ChartOfAccountsStdVH',
                         element: 'ChartOfAccounts' }
            }]
      ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      @ObjectModel.text.association: '_GLAccountTxt'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_GLAccountStdVH',
                     element: 'GLAccount' }
        } ]
      GLAccount,
      ReferenceDocument,
      ReferenceDocumentItem,

      PurchasingDocumentItem,
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.association: '_ProductText'
            @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_ProductStdVH',
                           element: 'Product' }
              }]
      Product,
      @Semantics.text:true
      DebitCreditCodeName,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      @ObjectModel.text.element: ['DebitCreditCodeName']
      //      @Consumption.valueHelpDefinition: [
      //            { entity:  { name:    'I_DebitCreditCodeVH',
      //                         element: 'DebitCreditCode' }
      //            }]
      DebitCreditCode,
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      cast( AmountInTransactionCurrency as fis_wsl preserving type )          as AmountInTransactionCurrency,
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      CompanyCodeCurrency,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      cast( AmountInCompanyCodeCurrency as fis_hsl preserving type )          as AmountInCompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      case FinancialAccountType
      when 'K' then cast( AmountInCompanyCodeCurrency as fins_cfs_accpay preserving type )
      else cast ( cast ('0' as abap.curr( 23,2)) as fins_cfs_accpay preserving type )
      end                                                                     as AcctsPyblAmtInCCCrcy,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      cast( abs(Quantity) as glo_jp_anx20_quantity preserving type )          as Quantity,
      @Semantics.unitOfMeasure: true
      //      OrderPriceUnit,
      _PurchasingDocumentItem.OrderPriceUnit,
      @Semantics: { quantity : {unitOfMeasure: 'OrderPriceUnit'} }
      cast( _PurchasingDocumentItem.NetPriceQuantity as glo_jp_netpriceqty  ) as NetPriceQuantity,
      @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
      _PurchasingDocumentItem.NetPriceAmount,
      @Semantics.currencyCode:true
      _PurchasingDocumentItem.DocumentCurrency,

      _SourceLedger,
      _CompanyCode,
      _FiscalYear,
      _JournalEntry,
      _Ledger,
      _Supplier,
      _Product,
      _PurchasingDocument,
      _PurchasingDocumentItem,
      _TransactionCurrency,
      _CompanyCodeCurrency,
      _BaseUnit,
      _DebitCreditCode,
      _GLAccountInChartOfAccounts,
      _ChartOfAccounts,
      _AccountingDocumentType

}
```
