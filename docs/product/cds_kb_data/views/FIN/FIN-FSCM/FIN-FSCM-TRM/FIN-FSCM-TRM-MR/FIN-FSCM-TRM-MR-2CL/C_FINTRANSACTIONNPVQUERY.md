---
name: C_FINTRANSACTIONNPVQUERY
description: "Fintransactionnpvquery"
app_component: FIN-FSCM-TRM-MR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - consumption-view
  - analytical
  - component:FIN-FSCM-TRM-MR-2CL
  - lob:Other
---
# C_FINTRANSACTIONNPVQUERY

**Fintransactionnpvquery**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-MR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  |  |  |
| `FinancialTransaction` |  | |  |  |  |  |
| `FinancialTransactionNPVType` |  | |  |  |  |  |
| `NetPresentValueValidityDate` |  | |  |  |  |  |
| `Counterparty` |  | |  |  |  |  |
| `FinancialInstrProductCategory` |  | |  |  |  |  |
| `FinancialInstrumentProductType` |  | |  |  |  |  |
| `FinancialInstrTransactionType` |  | |  |  |  |  |
| `NetPresentValueAmountInNPVCrcy` |  | |  | `curr_to_decfloat_amount( NetPresentValueAmountInNPVCrcy )` |  |  |
| `NetPresentValueCurrency` |  | |  |  |  |  |
| `NetPresentValueAmountInDspCrcy` |  | |  | `cast( currency_conversion( amount => NetPresentValueAmountInNPVCrcy, source_currency => NetPresentValueCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => NetPresentValueValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_npv_dsp_crcy preserving type )` |  |  |
| `IntrinsicValueAmountInDspCrcy` |  | |  | `cast( currency_conversion( amount => IntrinsicValueAmountInNPVCrcy, source_currency => NetPresentValueCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => NetPresentValueValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_npv_intrinsic_dsp_crcy preserving type )` |  |  |
| `TimeValueAmountInDspCrcy` |  | |  | `cast( currency_conversion( amount => TimeValueAmountInNPVCrcy, source_currency => NetPresentValueCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => NetPresentValueValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_npv_time_value_dsp_crcy preserving type )` |  |  |
| `CleanPriceAmountInDisplayCrcy` |  | |  | `cast( currency_conversion( amount => CleanPriceAmountInNPVCrcy, source_currency => NetPresentValueCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => NetPresentValueValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_npv_clean_price_dsp_crcy preserving type )` |  |  |
| `IncomingNPVAmountInDspCrcy` |  | |  | `cast( currency_conversion( amount => IncomingNPVAmountInNPVCrcy, source_currency => NetPresentValueCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => NetPresentValueValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_npv_incoming_dsp_crcy preserving type )` |  |  |
| `OutgoingNPVAmountInDspCrcy` |  | |  | `cast( currency_conversion( amount => OutgoingNPVAmountInNPVCrcy, source_currency => NetPresentValueCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => NetPresentValueValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_npv_outgoing_dsp_crcy preserving type )` |  |  |
| `RiskFreeNPVAmountInDspCrcy` |  | |  | `cast( currency_conversion( amount => RiskFreeNPVAmountInNPVCrcy, source_currency => NetPresentValueCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => NetPresentValueValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_npv_riskfree_dsp_crcy preserving type )` |  |  |
| `CreditValueAdjmtAmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => CreditValueAdjmtAmtInNPVCrcy, source_currency => NetPresentValueCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => NetPresentValueValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_npv_cva_dsp_crcy preserving type )` |  |  |
| `DebitValueAdjmtAmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => DebitValueAdjmtAmtInNPVCrcy, source_currency => NetPresentValueCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => NetPresentValueValidityDate, exchange_rate_type => $parameters.P_ExchangeRateType ) as ftr_npv_dva_dsp_crcy preserving type )` |  |  |
| `vdm_v_display_currency` |  | |  | `virtual DisplayCurrency : vdm_v_display_currency` |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_FinancialTransaction` | | ✓ | | | | |
| `_Counterparty` | | ✓ | | | | |
| `_FinancialInstrProdCat` | | ✓ | | | | |
| `_FinancialInstrProdType` | | ✓ | | | | |
| `_FinancialInstrTransType` | | ✓ | | | | |
| `_NPVType` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Financial Transaction NPV - Query'

@AccessControl: { authorizationCheck:    #NOT_ALLOWED,
                  personalData.blocking: #NOT_REQUIRED } // Treasury Counterparty is never a natural person

@Analytics.settings.runtimeExtensibility.allowed: true

@ObjectModel: { usageType:{ serviceQuality: #D,
                            sizeCategory: #L,
                            dataClass: #MIXED },
                modelingPattern: #ANALYTICAL_QUERY,
                supportedCapabilities:[ #ANALYTICAL_QUERY ] }

@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations:true }

@VDM.viewType: #CONSUMPTION

define transient view entity C_FinTransactionNPVQuery
  provider contract analytical_query
  with parameters
    @Consumption.valueHelpDefinition: [{ entity: { name:    'I_Currency',
                                                   element: 'Currency'  } } ]
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.valueHelpDefinition: [{ entity: { name:    'I_ExchangeRateType',
                                                   element: 'ExchangeRateType'  } } ]
    P_ExchangeRateType : kurst
  as projection on I_FinTransactionNPVCube

{

  // Dimensions
  @AnalyticsDetails.query.axis:#ROWS
  @ObjectModel.foreignKey.association:'_CompanyCode'
  @UI.textArrangement: #TEXT_LAST
  CompanyCode,
  @ObjectModel.foreignKey.association:'_FinancialTransaction'
  @Consumption.semanticObject:'FinancialTransaction'
  FinancialTransaction,
  @Consumption.valueHelpDefinition: [{  entity: {  name:    'I_FinancialTransactionNPVType',
                                                   element: 'FinancialTransactionNPVType'  } } ]
  @Consumption.filter: { selectionType:      #SINGLE,
                         multipleSelections: false,
                         mandatory:          true,
                         hidden:             false }
  @UI.textArrangement: #TEXT_ONLY
  FinancialTransactionNPVType,
  @Consumption.filter: { selectionType:      #INTERVAL,
                         multipleSelections: false,
                         mandatory:          true,
                         hidden:             false }
  @Consumption.derivation: { lookupEntity:      'I_ShiftedCalendarDate',
                             resultElement:     'ShiftedCalendarDate',
                             resultElementHigh: 'CalendarDate',
                             binding: [ { targetParameter: 'P_TimePeriodOffsetDuration', type: #CONSTANT,     value: '-1' },
                                        { targetParameter: 'P_TimePeriodOffsetUnit',     type: #CONSTANT,     value: 'M' },
                                        { targetElement:   'CalendarDate',               type: #SYSTEM_FIELD, value: '#SYSTEM_DATE' } ] }
  @AnalyticsDetails.query.axis:#ROWS
  NetPresentValueValidityDate,
  @AnalyticsDetails.query.axis:#ROWS
  @UI.textArrangement: #TEXT_ONLY
  Counterparty,
  @AnalyticsDetails.query.axis:#ROWS
  @ObjectModel.foreignKey.association:'_FinancialInstrProdCat'
  @UI.textArrangement: #TEXT_ONLY
  FinancialInstrProductCategory,
  @ObjectModel.foreignKey.association:'_FinancialInstrProdType'
  @UI.textArrangement: #TEXT_ONLY
  FinancialInstrumentProductType,
  @ObjectModel.foreignKey.association:'_FinancialInstrTransType'
  @UI.textArrangement: #TEXT_FIRST
  FinancialInstrTransactionType,

  // Measures
  @Semantics.amount.currencyCode:'NetPresentValueCurrency'
  @EndUserText.label:'Net Present Value in NPV Currency'
  curr_to_decfloat_amount( NetPresentValueAmountInNPVCrcy )                                                                                   as NetPresentValueAmountInNPVCrcy,
  NetPresentValueCurrency,

  @Aggregation.default: #FORMULA
  @Aggregation.exception: #LAST
  @Aggregation.referenceElement: ['NetPresentValueValidityDate']
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount             => NetPresentValueAmountInNPVCrcy,
                             source_currency    => NetPresentValueCurrency,
                             target_currency    => $parameters.P_DisplayCurrency,
                             exchange_rate_date => NetPresentValueValidityDate,
                             exchange_rate_type => $parameters.P_ExchangeRateType        ) as ftr_npv_dsp_crcy preserving type )              as NetPresentValueAmountInDspCrcy,
  @Aggregation.default: #FORMULA
  @Aggregation.exception: #LAST
  @Aggregation.referenceElement: ['NetPresentValueValidityDate']
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount             => IntrinsicValueAmountInNPVCrcy,
                             source_currency    => NetPresentValueCurrency,
                             target_currency    => $parameters.P_DisplayCurrency,
                             exchange_rate_date => NetPresentValueValidityDate,
                             exchange_rate_type => $parameters.P_ExchangeRateType          ) as ftr_npv_intrinsic_dsp_crcy preserving type )  as IntrinsicValueAmountInDspCrcy,
  @Aggregation.default: #FORMULA
  @Aggregation.exception: #LAST
  @Aggregation.referenceElement: ['NetPresentValueValidityDate']
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount             => TimeValueAmountInNPVCrcy,
                             source_currency    => NetPresentValueCurrency,
                             target_currency    => $parameters.P_DisplayCurrency,
                             exchange_rate_date => NetPresentValueValidityDate,
                             exchange_rate_type => $parameters.P_ExchangeRateType          ) as ftr_npv_time_value_dsp_crcy preserving type ) as TimeValueAmountInDspCrcy,
  @Aggregation.default: #FORMULA
  @Aggregation.exception: #LAST
  @Aggregation.referenceElement: ['NetPresentValueValidityDate']
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount             =>  CleanPriceAmountInNPVCrcy,
                             source_currency    => NetPresentValueCurrency,
                             target_currency    => $parameters.P_DisplayCurrency,
                             exchange_rate_date => NetPresentValueValidityDate,
                             exchange_rate_type => $parameters.P_ExchangeRateType         ) as ftr_npv_clean_price_dsp_crcy preserving type ) as CleanPriceAmountInDisplayCrcy,
  @Aggregation.default: #FORMULA
  @Aggregation.exception: #LAST
  @Aggregation.referenceElement: ['NetPresentValueValidityDate']
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount             => IncomingNPVAmountInNPVCrcy,
                             source_currency    => NetPresentValueCurrency,
                             target_currency    => $parameters.P_DisplayCurrency,
                             exchange_rate_date => NetPresentValueValidityDate,
                             exchange_rate_type => $parameters.P_ExchangeRateType          ) as ftr_npv_incoming_dsp_crcy preserving type )   as IncomingNPVAmountInDspCrcy,
  @Aggregation.default: #FORMULA
  @Aggregation.exception: #LAST
  @Aggregation.referenceElement: ['NetPresentValueValidityDate']
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount             => OutgoingNPVAmountInNPVCrcy,
                             source_currency    => NetPresentValueCurrency,
                             target_currency    => $parameters.P_DisplayCurrency,
                             exchange_rate_date => NetPresentValueValidityDate,
                             exchange_rate_type => $parameters.P_ExchangeRateType          ) as ftr_npv_outgoing_dsp_crcy preserving type )   as OutgoingNPVAmountInDspCrcy,
  @Aggregation.default: #FORMULA
  @Aggregation.exception: #LAST
  @Aggregation.referenceElement: ['NetPresentValueValidityDate']
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount             => RiskFreeNPVAmountInNPVCrcy,
                             source_currency    => NetPresentValueCurrency,
                             target_currency    => $parameters.P_DisplayCurrency,
                             exchange_rate_date => NetPresentValueValidityDate,
                             exchange_rate_type => $parameters.P_ExchangeRateType         ) as ftr_npv_riskfree_dsp_crcy preserving type )    as RiskFreeNPVAmountInDspCrcy,
  @Aggregation.default: #FORMULA
  @Aggregation.exception: #LAST
  @Aggregation.referenceElement: ['NetPresentValueValidityDate']
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount             => CreditValueAdjmtAmtInNPVCrcy,
                             source_currency    => NetPresentValueCurrency,
                             target_currency    => $parameters.P_DisplayCurrency,
                             exchange_rate_date => NetPresentValueValidityDate,
                             exchange_rate_type => $parameters.P_ExchangeRateType          ) as ftr_npv_cva_dsp_crcy preserving type )        as CreditValueAdjmtAmtInDspCrcy,
  @Aggregation.default: #FORMULA
  @Aggregation.exception: #LAST
  @Aggregation.referenceElement: ['NetPresentValueValidityDate']
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast( currency_conversion( amount             => DebitValueAdjmtAmtInNPVCrcy,
                             source_currency    => NetPresentValueCurrency,
                             target_currency    => $parameters.P_DisplayCurrency,
                             exchange_rate_date => NetPresentValueValidityDate,
                             exchange_rate_type => $parameters.P_ExchangeRateType          ) as ftr_npv_dva_dsp_crcy preserving type )        as DebitValueAdjmtAmtInDspCrcy,

  virtual DisplayCurrency : vdm_v_display_currency,  

  // Associations
  _CompanyCode,
  _FinancialTransaction,
  _Counterparty,
  _FinancialInstrProdCat,
  _FinancialInstrProdType,
  _FinancialInstrTransType,
  _NPVType
}
```
