---
name: I_FINTRANSSECURITY
description: "This CDS view provides specific administrative data (available on the Structure tab) for a securities transaction. This CDS view provides the prerequisites for answering the following business questions: What is the traded nominal amount of a securities transaction? Which security class has been bought or sold by the securities transaction? What was the payment amount?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSSECURITY')/$value
semantic_en: "This CDS view provides specific administrative data (available on the Structure tab) for a securities transaction. This CDS view provides the prerequisites for answering the following business questions: What is the traded nominal amount of a securities transaction? Which security class has been bought or sold by the securities transaction? What was the payment amount?"
semantic_vi: "Fin Trans Securities Information — CDS view giao diện dựa trên vtbfha."
keywords:
  - "fin"
  - "trans"
  - "securities"
  - "information"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "traded"
  - "flow"
  - "crcy"
  - "origl"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - payment
  - transaction
---
# I_FINTRANSSECURITY

**This CDS view provides specific administrative data (available on the Structure tab) for a securities transaction. This CDS view provides the prerequisites for answering the following business questions: What is the traded nominal amount of a securities transaction? Which security class has been bought or sold by the securities transaction? What was the payment amount?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSSECURITY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinTransTradedNomAmt` |  | |  |  | `CURR(13)` | Traded Nominal Amount |
| `FinTransFlowNomAmtCrcy` |  | |  |  | `CUKY(5)` | Flow Nominal Amount Currency |
| `FinTransTradedOriglNomAmt` |  | |  |  | `CURR(13)` | Original Nominal Amount |
| `FinTransTradedNumberOfUnits` |  | |  |  | `DEC(24)` | No. of Units for Financial Instruments |
| `FinTransTradedPricePercent` |  | |  |  | `DEC(23)` | Security Price for Percentage Quotation |
| `FinTransTrdPriceCrcyUnitRate` |  | |  |  | `DEC(23)` | Security Price Without Currency Ref. with Unit Quotation |
| `FinTransTradedPriceCrcyUnit` |  | |  |  | `CHAR(5)` | Traded Price Currency Unit |
| `MarketValueInQtanCurrency` |  | |  |  | `CURR(13)` | Market Value in Quotation Currency |
| `QuotationCurrency` |  | |  |  | `CUKY(5)` | Price Currency |
| `MarketValInPaytCurrency` |  | |  |  | `CURR(13)` | Payment Amount in Payment Currency |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Payment Currency |
| `FinTransPaymentCrcyCnvrsnRate` |  | |  |  | `DEC(9)` | Payment Currency Rate |
| `MarketValueInPositionCurrency` |  | |  |  | `CURR(13)` | Amount that Changes the Position |
| `PositionCurrency` |  | |  |  | `CUKY(5)` | Currency of Position Amount |
| `FinTransPositionCrcyCnvrsnRate` |  | |  |  | `DEC(9)` | Position Currency Rate |
| `MarketValueInLocalCurrency` |  | |  |  | `CURR(13)` | Market Value in Local Currency |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `FinTransLoclCrcyCnvrsnRate` |  | |  |  | `DEC(9)` | Conversion Rate in Local Currency |
| `FinTransSpotPricePercent` |  | |  |  | `DEC(23)` | Spot Price Currency Unit Rate in Percentage |
| `FinTransSpotPriceCrcyUnitRate` |  | |  |  | `DEC(23)` | Spot Price Currency Unit Rate in Percentage |
| `FinTransMaturitySpotPricePct` |  | |  |  | `DEC(23)` | Maturity Spot Price Pecentage Rate |
| `FinTransMatSpotPrcCrcyUnitRate` |  | |  |  | `DEC(23)` | Maturity Spot Currency Unit Rate |
| `FinTransForwardPriceCostRate` |  | |  |  | `DEC(23)` | Security Price Without Currency Ref. with Unit Quotation |
| `FinTransFwdPrcIntrstCompRate` |  | |  |  | `DEC(23)` | Security Price Without Currency Ref. with Unit Quotation |
| `FinTransFwdPrcDividendPercent` |  | |  |  | `DEC(7)` | Percentage of Dividend agreed for Payment in OTC Instruments |
| `SecurityExchange` |  | |  |  | `CHAR(10)` | Exchange |
| `SecurityClass` |  | |  | `cast(Flow.SecurityClass as ftr_gen_security_class preserving type)` | `CHAR(13)` | Security Class |
| `SecurityAccount` |  | |  | `cast(Flow.SecurityAccount as ftr_gen_security_account preserving type)` | `CHAR(10)` | Security Account |
| `FinTransPositionValueDate` |  | |  |  | `DATS(8)` | Position Value Date |
| `FinTransFlowPaymentDate` |  | |  |  | `DATS(8)` | Flow Payment Date |
| `CalculationDate` |  | |  |  | `DATS(8)` | Calculation Date |
| `_CompanyCode` | | ✓ | | | | |
| `_FinTrans` | | ✓ | | | | |
| `_NominalCurrency` | | ✓ | | | | |
| `_QuotationCurrency` | | ✓ | | | | |
| `_PaymentCurrency` | | ✓ | | | | |
| `_PositionCurrency` | | ✓ | | | | |
| `_LocalCurrency` | | ✓ | | | | |
| `_SecurityExchange` | | ✓ | | | | |
| `_SecurityClass` | | ✓ | | | | |
| `_SecurityAccount` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinTrans` | `I_FinancialTransaction` | [0..1] |
| `_NominalCurrency` | `I_Currency` | [0..1] |
| `_QuotationCurrency` | `I_Currency` | [0..1] |
| `_PaymentCurrency` | `I_Currency` | [0..1] |
| `_PositionCurrency` | `I_Currency` | [0..1] |
| `_LocalCurrency` | `I_Currency` | [0..1] |
| `_SecurityExchange` | `I_SecurityExchange` | [0..1] |
| `_SecurityClass` | `I_SecurityClass` | [0..1] |
| `_SecurityAccount` | `I_SecurityAccount` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSSECURITY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSSECURITY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFINTRANSSCRTY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Trans Securities Information'
@ObjectModel.representativeKey: 'FinancialTransaction'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:false
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

//view shall provide securities data based on main flow
define view I_FinTransSecurity
  as select from vtbfha as Deal  
  // only the main flow of current activity
  // Both of securities quantity flow and securities payment flow contain payment information.
  // So to improve the performance, we can get all data from quantity flow directly.
    inner join   R_FinTransSecurityQuantityFlow as Flow on  Deal.bukrs          = Flow.CompanyCode
                                                        and Deal.rfha           = Flow.FinancialTransaction
                                                        and Deal.rfhazul        = Flow.FinancialInstrumentActivity
  // dimensions, containing for example text fields
  association [0..1] to I_CompanyCode          as _CompanyCode       on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialTransaction as _FinTrans          on  $projection.CompanyCode          = _FinTrans.CompanyCode
                                                                     and $projection.FinancialTransaction = _FinTrans.FinancialTransaction
  association [0..1] to I_Currency             as _NominalCurrency   on  $projection.FinTransFlowNomAmtCrcy = _NominalCurrency.Currency
  association [0..1] to I_Currency             as _QuotationCurrency on  $projection.QuotationCurrency = _QuotationCurrency.Currency
  association [0..1] to I_Currency             as _PaymentCurrency   on  $projection.PaymentCurrency = _PaymentCurrency.Currency
  association [0..1] to I_Currency             as _PositionCurrency  on  $projection.PositionCurrency = _PositionCurrency.Currency
  association [0..1] to I_Currency             as _LocalCurrency     on  $projection.LocalCurrency = _LocalCurrency.Currency
  association [0..1] to I_SecurityExchange     as _SecurityExchange  on  $projection.SecurityExchange = _SecurityExchange.SecurityExchange
  association [0..1] to I_SecurityClass        as _SecurityClass     on  $projection.SecurityClass = _SecurityClass.SecurityClass
  association [0..1] to I_SecurityAccount      as _SecurityAccount   on  $projection.SecurityAccount = _SecurityAccount.SecurityAccount
                                                                     and $projection.CompanyCode     = _SecurityAccount.CompanyCode

{
      //exposed fields
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Flow.CompanyCode                                                       as CompanyCode,
      @ObjectModel.foreignKey.association: '_FinTrans'
  key Flow.FinancialTransaction                                              as FinancialTransaction,

      @Semantics.amount.currencyCode: 'FinTransFlowNomAmtCrcy'
      Flow.FinTransTradedNomAmt                                              as FinTransTradedNomAmt,
      @ObjectModel.foreignKey.association: '_NominalCurrency'
      @EndUserText.label: 'Nominal Currency'
      @EndUserText.quickInfo: 'Nominal Currency'
      Flow.FinTransFlowNomAmtCrcy                                            as FinTransFlowNomAmtCrcy,
      @Semantics.amount.currencyCode: 'FinTransFlowNomAmtCrcy'
      Flow.FinTransTradedOriglNomAmt                                         as FinTransTradedOriglNomAmt,
      Flow.FinTransTradedNumberOfUnits                                       as FinTransTradedNumberOfUnits,
      Flow.FinTransTradedPricePercent                                        as FinTransTradedPricePercent,
      Flow.FinTransTrdPriceCrcyUnitRate                                      as FinTransTrdPriceCrcyUnitRate,
      Flow.FinTransTradedPriceCrcyUnit                                       as FinTransTradedPriceCrcyUnit,
      @Semantics.amount.currencyCode: 'QuotationCurrency'
      Flow.MarketValueInQtanCurrency                                         as MarketValueInQtanCurrency,
      @ObjectModel.foreignKey.association: '_QuotationCurrency'
      Flow.QuotationCurrency                                                 as QuotationCurrency,
      @Semantics.amount.currencyCode: 'PaymentCurrency'
      Flow.MarketValInPaytCurrency                                           as MarketValInPaytCurrency,
      @ObjectModel.foreignKey.association: '_PaymentCurrency'
      Flow.PaymentCurrency                                                   as PaymentCurrency,
      Flow.FinTransPaymentCrcyCnvrsnRate                                     as FinTransPaymentCrcyCnvrsnRate,
      @Semantics.amount.currencyCode: 'PositionCurrency'
      Flow.MarketValueInPositionCurrency                                     as MarketValueInPositionCurrency,
      @ObjectModel.foreignKey.association: '_PositionCurrency'
      Flow.PositionCurrency                                                  as PositionCurrency,
      Flow.FinTransPositionCrcyCnvrsnRate                                    as FinTransPositionCrcyCnvrsnRate,
      @Semantics.amount.currencyCode: 'LocalCurrency'
      Flow.MarketValueInLocalCurrency                                        as MarketValueInLocalCurrency,
      @ObjectModel.foreignKey.association: '_LocalCurrency'
      Flow.LocalCurrency                                                     as LocalCurrency,
      Flow.FinTransLoclCrcyCnvrsnRate                                        as FinTransLoclCrcyCnvrsnRate,
      @EndUserText.label: 'Spot Price in Percent'
      @EndUserText.quickInfo: 'Spot Price in Percent'
      Flow.FinTransSpotPricePercent                                          as FinTransSpotPricePercent,
      @EndUserText.label: 'Spot Price in Currency Unit'
      @EndUserText.quickInfo: 'Spot Price in Currency Unit'
      Flow.FinTransSpotPriceCrcyUnitRate                                     as FinTransSpotPriceCrcyUnitRate,
      @EndUserText.label: 'Maturity Spot Price in Percent'
      @EndUserText.quickInfo: 'Maturity Spot Price in Percent'
      Flow.FinTransMaturitySpotPricePct                                      as FinTransMaturitySpotPricePct,
      @EndUserText.label: 'Maturity Spot Price in Currency Unit'
      @EndUserText.quickInfo: 'Maturity Spot Price in Currency Unit'
      Flow.FinTransMatSpotPrcCrcyUnitRate                                    as FinTransMatSpotPrcCrcyUnitRate,
      Flow.FinTransForwardPriceCostRate                                      as FinTransForwardPriceCostRate,
      Flow.FinTransFwdPrcIntrstCompRate                                      as FinTransFwdPrcIntrstCompRate,
      Flow.FinTransFwdPrcDividendPercent                                     as FinTransFwdPrcDividendPercent,
      @ObjectModel.foreignKey.association: '_SecurityExchange'
      Flow.SecurityExchange                                                  as SecurityExchange,
      @ObjectModel.foreignKey.association: '_SecurityClass'
      cast(Flow.SecurityClass as ftr_gen_security_class preserving type)     as SecurityClass,
      @ObjectModel.foreignKey.association: '_SecurityAccount'
      cast(Flow.SecurityAccount as ftr_gen_security_account preserving type) as SecurityAccount,
      Flow.FinTransPositionValueDate,
      Flow.FinTransFlowPaymentDate,
      Flow.CalculationDate,

      //exposed dimensions, containing for example text fields
      _CompanyCode,
      _FinTrans,
      _NominalCurrency,
      _QuotationCurrency,
      _PaymentCurrency,
      _PositionCurrency,
      _LocalCurrency,
      _SecurityExchange,
      _SecurityClass,
      _SecurityAccount
}
```
