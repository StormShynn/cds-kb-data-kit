---
name: I_OPLACCTGDOCITEMCLRGHIST
description: "Oplacctgdocitemclrghist"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_OPLACCTGDOCITEMCLRGHIST

**Oplacctgdocitemclrghist**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ClearingCompanyCode` | ✓ | |  | `cast( bukrs_clr as fis_bukrs_clr preserving type )` |  |  |
| `ClearingAccountingDocument` | ✓ | |  | `cast( belnr_clr as fis_belnr_clr preserving type )` |  |  |
| `ClearingFiscalYear` | ✓ | |  | `cast( gjahr_clr as fis_gjahr_clr preserving type )` |  |  |
| `ClearingIndex` | ✓ | |  | `cast( index_clr as fis_index_clr preserving type )` |  |  |
| `ClearedCompanyCode` |  | |  | `cast( bukrs as fis_bukrs_clrd preserving type )` |  |  |
| `ClearedAccountingDocument` |  | |  | `cast( belnr as fis_belnr_clrd preserving type )` |  |  |
| `ClearedFiscalYear` |  | |  | `cast( gjahr as fis_gjahr_clrd preserving type )` |  |  |
| `ClearedAccountingDocumentItem` |  | |  | `cast( buzei as fis_buzei_clrd preserving type )` |  |  |
| `ClearingItem` |  | |  | `agzei` |  |  |
| `ClearingDownPaymentItem` |  | |  | `cast( agbuz as fis_agbuz preserving type )` |  |  |
| `ClearingType` |  | |  | `cast( clrin as fis_clrin preserving type )` |  |  |
| `ClearingTransactionCurrency` |  | |  | `cast( waers as fis_waers_clr preserving type )` |  |  |
| `ClearingCompanyCodeCurrency` |  | |  | `cast( _ClearingCompanyCode.Currency as fis_hwaer_clr preserving type )` |  |  |
| `FinancialAccountType` |  | |  | `cast( koart as farp_koart preserving type )` |  |  |
| `AmountInCompanyCodeCurrency` |  | |  | `cast(dmbtr as fis_hsl preserving type )` |  |  |
| `AmountInInClrgTransCrcy` |  | |  | `cast( wrbtr as fis_wrbtr_clr preserving type )` |  |  |
| `DifferenceAmtInCoCodeCrcy` |  | |  | `cast( difhw as fis_diff_amt_hsl preserving type )` |  |  |
| `DifferenceAmtInClrgTransCrcy` |  | |  | `cast( diffw as fis_diffw_clr preserving type )` |  |  |
| `CashDiscountAmtInCoCodeCrcy` |  | |  | `cast( sknto as fis_sknto preserving type )` |  |  |
| `CashDiscountAmtInClrgTransCrcy` |  | |  | `cast( wskto as fis_wskto_clr preserving type )` |  |  |
| `ExchRateDiffAmtInCoCodeCrcy` |  | |  | `rdiff` |  |  |
| `_ClearingCompanyCode` | | ✓ | | | | |
| `_ClearedCompanyCode` | | ✓ | | | | |
| `_ClearingDocument` | | ✓ | | | | |
| `_ClearedAccountingDocument` | | ✓ | | | | |
| `_ClearedItem` | | ✓ | | | | |
| `_ClearingFiscalYear` | | ✓ | | | | |
| `_ClearedFiscalYear` | | ✓ | | | | |
| `_ClearingType` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_ClearingCompanyCodeCurrency` | | ✓ | | | | |
| `_ClearingTransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ClearingCompanyCode` | `I_CompanyCode` | [1..1] |
| `_ClearedCompanyCode` | `I_CompanyCode` | [1..1] |
| `_ClearingDocument` | `I_JournalEntry` | [0..1] |
| `_ClearedAccountingDocument` | `I_JournalEntry` | [0..1] |
| `_ClearedItem` | `I_OperationalAcctgDocItem` | [0..1] |
| `_ClearingFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ClearedFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ClearingType` | `I_ClearingType` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_ClearingCompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_ClearingTransactionCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Accounting Doc Item Clearing History'
@VDM.viewType: #BASIC
@ObjectModel: { representativeKey: 'ClearingIndex',
                usageType: { sizeCategory: #L,
                             dataClass:  #MIXED,
                             serviceQuality: #B },
                supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET],
                modelingPattern: #ANALYTICAL_DIMENSION,
                sapObjectNodeType.name: 'OplAcctgDocItemClearingHistory' }
                
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions:true }
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:
            [
              {
                table: 'BSE_CLR',
                role: #MAIN,
                viewElement: ['ClearingCompanyCode', 'ClearingAccountingDocument', 'ClearingFiscalYear', 'ClearingIndex'],
                tableElement: ['bukrs_clr', 'belnr_clr', 'gjahr_clr', 'index_clr']
              },
              { 
                table: 'T001', 
                role: #LEFT_OUTER_TO_ONE_JOIN,
                viewElement: ['ClearingCompanyCode'],
                tableElement: ['bukrs']
              }
            ]
         }
      },
    internalName:#LOCAL   
}

define view entity I_OplAcctgDocItemClrgHist
  as select from bse_clr

  association [1..1] to I_CompanyCode             as _ClearingCompanyCode         on  $projection.ClearingCompanyCode = _ClearingCompanyCode.CompanyCode
  association [1..1] to I_CompanyCode             as _ClearedCompanyCode          on  $projection.ClearedCompanyCode = _ClearedCompanyCode.CompanyCode

  association [0..1] to I_JournalEntry            as _ClearingDocument            on  $projection.ClearingAccountingDocument = _ClearingDocument.AccountingDocument
                                                                                  and $projection.ClearingCompanyCode        = _ClearingDocument.CompanyCode
                                                                                  and $projection.ClearingFiscalYear         = _ClearingDocument.FiscalYear
  association [0..1] to I_JournalEntry            as _ClearedAccountingDocument   on  $projection.ClearedAccountingDocument  = _ClearedAccountingDocument.AccountingDocument
                                                                                  and $projection.ClearedCompanyCode         = _ClearedAccountingDocument.CompanyCode
                                                                                  and $projection.ClearedFiscalYear          = _ClearedAccountingDocument.FiscalYear
  association [0..1] to I_OperationalAcctgDocItem as _ClearedItem                 on  $projection.ClearedAccountingDocument     = _ClearedItem.AccountingDocument
                                                                                  and $projection.ClearedCompanyCode            = _ClearedItem.CompanyCode
                                                                                  and $projection.ClearedFiscalYear             = _ClearedItem.FiscalYear
                                                                                  and $projection.ClearedAccountingDocumentItem = _ClearedItem.AccountingDocumentItem

  association [0..1] to I_FiscalYearForCompanyCode as _ClearingFiscalYear          on  $projection.ClearingFiscalYear  = _ClearingFiscalYear.FiscalYear
                                                                                   and $projection.ClearingCompanyCode = _ClearingFiscalYear.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode as _ClearedFiscalYear           on  $projection.ClearedFiscalYear  = _ClearedFiscalYear.FiscalYear
                                                                                   and $projection.ClearedCompanyCode = _ClearedFiscalYear.CompanyCode                                                                                   
  //  association [0..1] to I_FiscalYearForCompanyCode as _ClearedFiscalYear           on  $projection.ClearedFiscalYear  = _ClearedFiscalYear.FiscalYear
  //                                                                                   and $projection.ClearedCompanyCode = _ClearedFiscalYear.CompanyCode
  association [0..1] to I_ClearingType            as _ClearingType                on  $projection.ClearingType = _ClearingType.ClearingType
  association [0..1] to I_FinancialAccountType    as _FinancialAccountType        on  $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
  association [0..1] to I_Currency                as _ClearingCompanyCodeCurrency on  $projection.ClearingCompanyCodeCurrency = _ClearingCompanyCodeCurrency.Currency

  association [0..1] to I_Currency                as _ClearingTransactionCurrency on  $projection.ClearingTransactionCurrency = _ClearingTransactionCurrency.Currency

{
  @ObjectModel.foreignKey.association: '_ClearingCompanyCode'
  key cast( bukrs_clr as fis_bukrs_clr preserving type )                      as ClearingCompanyCode,
  @ObjectModel.foreignKey.association: '_ClearingDocument'
  key cast( belnr_clr as fis_belnr_clr preserving type )                      as ClearingAccountingDocument,
  @ObjectModel.foreignKey.association: '_ClearingFiscalYear'
  key cast( gjahr_clr as fis_gjahr_clr preserving type )                      as ClearingFiscalYear,
  key cast( index_clr as fis_index_clr preserving type )                      as ClearingIndex,
  @ObjectModel.foreignKey.association: '_ClearedCompanyCode'
      cast( bukrs as fis_bukrs_clrd preserving type )                         as ClearedCompanyCode,
  @ObjectModel.foreignKey.association: '_ClearedAccountingDocument'      
      cast( belnr as fis_belnr_clrd preserving type )                         as ClearedAccountingDocument,
  @ObjectModel.foreignKey.association: '_ClearedFiscalYear'
      cast( gjahr as fis_gjahr_clrd preserving type )                         as ClearedFiscalYear,
  @ObjectModel.foreignKey.association: '_ClearedItem'         
      cast( buzei as fis_buzei_clrd preserving type )                         as ClearedAccountingDocumentItem,
      agzei                                                                   as ClearingItem,
      cast( agbuz as fis_agbuz preserving type )                              as ClearingDownPaymentItem,
  @ObjectModel.foreignKey.association: '_ClearingType'         
      cast( clrin as fis_clrin preserving type )                              as ClearingType,
  @ObjectModel.foreignKey.association: '_ClearingTransactionCurrency'      
      cast( waers as fis_waers_clr preserving type )                          as ClearingTransactionCurrency,
  @ObjectModel.foreignKey.association: '_ClearingCompanyCodeCurrency'        
      cast(  _ClearingCompanyCode.Currency as fis_hwaer_clr preserving type ) as ClearingCompanyCodeCurrency,
  @ObjectModel.foreignKey.association: '_FinancialAccountType'      
      cast( koart as farp_koart preserving type )                             as FinancialAccountType,

      @Semantics.amount.currencyCode: 'ClearingCompanyCodeCurrency'
      cast(dmbtr as fis_hsl preserving type )                                 as AmountInCompanyCodeCurrency,

      @Semantics.amount.currencyCode: 'ClearingTransactionCurrency'
      cast( wrbtr as fis_wrbtr_clr preserving type )                          as AmountInInClrgTransCrcy,

      @Semantics.amount.currencyCode: 'ClearingCompanyCodeCurrency'
      cast( difhw as fis_diff_amt_hsl preserving type )                       as DifferenceAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'ClearingTransactionCurrency'
      cast( diffw as fis_diffw_clr preserving type )                          as DifferenceAmtInClrgTransCrcy,

      @Semantics.amount.currencyCode: 'ClearingCompanyCodeCurrency'
      cast( sknto as fis_sknto preserving type )                              as CashDiscountAmtInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'ClearingTransactionCurrency'
      cast( wskto as fis_wskto_clr preserving type )                          as CashDiscountAmtInClrgTransCrcy,

      @Semantics.amount.currencyCode: 'ClearingCompanyCodeCurrency'
      rdiff                                                                   as ExchRateDiffAmtInCoCodeCrcy,

      _ClearingCompanyCode,
      _ClearedCompanyCode,
      _ClearedAccountingDocument,
      _ClearedFiscalYear,
      _ClearedItem,
      _ClearingDocument,
      _ClearingFiscalYear,
      //      _ClearedFiscalYear,
      _ClearingCompanyCodeCurrency,
      _ClearingTransactionCurrency,
      _ClearingType,
      _FinancialAccountType

}
```
