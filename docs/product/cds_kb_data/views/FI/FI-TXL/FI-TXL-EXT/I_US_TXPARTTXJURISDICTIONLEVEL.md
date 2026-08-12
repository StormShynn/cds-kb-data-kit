---
name: I_US_TXPARTTXJURISDICTIONLEVEL
description: "US Txparttxjurisdictionlevel"
app_component: FI-TXL-EXT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-TXL
  - FI-TXL-EXT
  - interface-view
  - component:FI-TXL-EXT
  - lob:Finance
---
# I_US_TXPARTTXJURISDICTIONLEVEL

**US Txparttxjurisdictionlevel**

| Property | Value |
|---|---|
| App Component | `FI-TXL-EXT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `US_TaxPartnerTaxDocument` | ✓ | |  | `docnr` |  |  |
| `US_TaxPartnerTaxDocumentItem` | ✓ | |  | `itemnr` |  |  |
| `TaxJurisdictionLevel` | ✓ | |  | `cast(etxdcj.txjlv as txjcd_level preserving type)` |  |  |
| `US_TaxState` |  | |  | `cast(etxdcj.tax_state as fis_externaltaxstate preserving type)` |  |  |
| `UnitedStatesTaxSourcing` |  | |  | `cast(etxdcj.sourcing as fis_etxdc_sourcing preserving type)` |  |  |
| `DebitCreditCode` |  | |  | `cast(etxdcj.gl_shkzg as fis_shkzg preserving type)` |  |  |
| `TaxJurisdictionText` |  | |  | `cast(etxjcd.txjlvdesc as fot_txjcd_des preserving type)` |  |  |
| `UserInputTaxRate` |  | |  | `cast(division(etxdcj.gl_taxpct,10,3)as fis_externaltgltaxrate)` |  |  |
| `TaxAmountInCoCodeCrcy` |  | |  | `cast(etxdcj.gl_taxamt as fis_mwsts preserving type)` |  |  |
| `TaxBaseAmountInCoCodeCrcy` |  | |  | `cast(etxdcj.gl_taxbas as hwbas_shl preserving type)` |  |  |
| `TaxAmountInTransCrcy` |  | |  | `cast(etxdcj.taxamt as wmwst_shl preserving type)` |  |  |
| `TaxBaseAmountInTransCrcy` |  | |  | `cast(etxdcj.taxbas as fwbas_shl preserving type)` |  |  |
| `TaxRate` |  | |  | `cast(division(etxdcj.taxpct,10,3)as fis_externaltaxtaxrate)` |  |  |
| `TaxJurisdiction` |  | |  | `cast(etxdcj.txjcd as fis_txjcd preserving type)` |  |  |
| `GLAccount` |  | |  | `cast(etxdcj.hkont as fis_racct preserving type)` |  |  |
| `TaxExemptionAmount` |  | |  | `cast(etxdcj.examt as idpt_a03amount preserving type)` |  |  |
| `US_JxTxExtExmpRsnCode` |  | |  | `cast(etxdcj.excode as exdetcode preserving type)` |  |  |
| `CompanyCodeCurrency` |  | | `_TaxDoc` | `CompanyCodeCurrency` |  |  |
| `TransactionCurrency` |  | | `_TaxDoc` | `TransactionCurrency` |  |  |
| `CompanyCode` |  | | `_TaxDoc` | `CompanyCode` |  |  |
| `_TaxDoc` | | ✓ | | | | |
| `_TaxDocItem` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_State` | | ✓ | | | | |
| `_Sourcing` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TaxDoc` | `I_US_TaxPartnerTaxDocument` | [1..1] |
| `_TaxDocItem` | `I_US_TaxPartnerTaxDocumentItem` | [1..1] |
| `_GLAccount` | `I_GLAccount` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [1..1] |
| `_State` | `I_US_TaxState` | [0..1] |
| `_Sourcing` | `I_UnitedStatesTaxSourcing` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUSTXPRTTXJXLVL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'US Tax Partner Tax Jurisdiction Level'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.representativeKey: 'TaxJurisdictionLevel'
@ObjectModel.sapObjectNodeType.name: 'US_TxPartTxJurisdictionLevel'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_US_TxPartTxJurisdictionLevel
  as select from           etxdcj
    left outer to one join etxjcd on  etxdcj.docnr  = etxjcd.docnr
                                  and etxdcj.itemnr = etxjcd.itemnr
                                  and etxdcj.txjlv  = etxjcd.txjlv
  association [1..1] to I_US_TaxPartnerTaxDocument     as _TaxDoc              on  etxdcj.docnr = _TaxDoc.US_TaxPartnerTaxDocument
  association [1..1] to I_US_TaxPartnerTaxDocumentItem as _TaxDocItem          on  etxdcj.docnr  = _TaxDocItem.US_TaxPartnerTaxDocument
                                                                               and etxdcj.itemnr = _TaxDocItem.US_TaxPartnerTaxDocumentItem
  association [0..1] to I_GLAccount                    as _GLAccount           on  $projection.GLAccount   = _GLAccount.GLAccount
                                                                               and $projection.CompanyCode = _GLAccount.CompanyCode
  association [0..1] to I_CompanyCode                  as _CompanyCode         on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_DebitCreditCode              as _DebitCreditCode     on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [0..1] to I_US_TaxState                  as _State               on  $projection.US_TaxState = _State.US_TaxState
  association [0..1] to I_UnitedStatesTaxSourcing      as _Sourcing            on  $projection.UnitedStatesTaxSourcing = _Sourcing.UnitedStatesTaxSourcing
  association [0..1] to I_Currency                     as _TransactionCurrency on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_Currency                     as _CompanyCodeCurrency on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
{
      @ObjectModel.foreignKey.association: '_TaxDoc'
  key etxdcj.docnr                                                   as US_TaxPartnerTaxDocument,
      @ObjectModel.foreignKey.association: '_TaxDocItem'
  key etxdcj.itemnr                                                  as US_TaxPartnerTaxDocumentItem,
  key cast(etxdcj.txjlv  as    txjcd_level preserving type)          as TaxJurisdictionLevel,
      cast(etxdcj.tax_state as fis_externaltaxstate preserving type) as US_TaxState,
      cast(etxdcj.sourcing as fis_etxdc_sourcing preserving type)    as UnitedStatesTaxSourcing,
      cast(etxdcj.gl_shkzg as fis_shkzg preserving type)             as DebitCreditCode,
      cast(etxjcd.txjlvdesc as fot_txjcd_des preserving type)        as TaxJurisdictionText,
      // cast(etxdcj.gl_taxpct as fis_externaltgltaxrate)    as UserInputTaxRate,
      cast(division(etxdcj.gl_taxpct,10,3)as fis_externaltgltaxrate) as UserInputTaxRate,
      //  cast(decimal_shift( amount => etxdcj.gl_taxpct,
      //       currency => cast( cast('3' as char1) as abap.cuky(5) ),
      //       error_handling => 'SET_TO_NULL' ) as fis_externaltgltaxrate) as UserInputTaxRate,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      cast(etxdcj.gl_taxamt as fis_mwsts preserving type)            as TaxAmountInCoCodeCrcy,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      cast(etxdcj.gl_taxbas as hwbas_shl preserving type)            as TaxBaseAmountInCoCodeCrcy,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      cast(etxdcj.taxamt as wmwst_shl preserving type)               as TaxAmountInTransCrcy,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      cast(etxdcj.taxbas as fwbas_shl preserving type)               as TaxBaseAmountInTransCrcy,
      --@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //cast(decimal_shift( amount => etxdcj.taxpct,
      //  currency => cast( cast('3' as char1) as abap.cuky(5) ),
      //   error_handling => 'SET_TO_NULL' ) as fis_externaltaxtaxrate)       as TaxRate,
      cast(division(etxdcj.taxpct,10,3)as fis_externaltaxtaxrate)    as TaxRate,
      //   cast(etxdcj.taxpct as fis_externaltaxtaxrate )                   as TaxRate,
      cast(etxdcj.txjcd  as fis_txjcd preserving type)               as TaxJurisdiction,
      cast(etxdcj.hkont  as fis_racct preserving type)               as GLAccount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      cast(etxdcj.examt  as idpt_a03amount preserving type)          as TaxExemptionAmount,
      cast(etxdcj.excode as exdetcode preserving type)               as US_JxTxExtExmpRsnCode,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      _TaxDoc.CompanyCodeCurrency                                    as CompanyCodeCurrency,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      _TaxDoc.TransactionCurrency                                    as TransactionCurrency,
      _TaxDoc.CompanyCode                                            as CompanyCode,


      _TaxDoc,
      _TaxDocItem,
      _GLAccount,
      _CompanyCode,
      _DebitCreditCode,
      _State,
      _Sourcing,
      _TransactionCurrency,
      _CompanyCodeCurrency






}
```
