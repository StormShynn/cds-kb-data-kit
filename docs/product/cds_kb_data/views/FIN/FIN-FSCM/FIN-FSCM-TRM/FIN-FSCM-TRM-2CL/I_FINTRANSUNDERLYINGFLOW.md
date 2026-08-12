---
name: I_FINTRANSUNDERLYINGFLOW
description: "Fintransunderlyingflow"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSUNDERLYINGFLOW

**Fintransunderlyingflow**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OptionUnderlyingTransaction` | ✓ | |  | `cast( rfha as option_underlying_transaction preserving type )` |  |  |
| `FinancialInstrumentActivity` | ✓ | |  | `rfhazu` |  |  |
| `FinTransFlowCreationDate` | ✓ | |  | `dcrdat` |  |  |
| `FinTransFlowCreationTime` | ✓ | |  | `cast( tcrtim as ftr_flow_creation_time preserving type )` |  |  |
| `FinTransFlowNumber` | ✓ | |  | `rfhazb` |  |  |
| `CreatedByUser` |  | |  | `cruser` |  |  |
| `FinTransCreationDate` |  | |  | `cast( UnderlyingFlow.dcrdat as ftr_creation_date preserving type )` |  |  |
| `FinTransCreationTime` |  | |  | `tcrtim` |  |  |
| `LastChangedByUser` |  | |  | `upuser` |  |  |
| `LastChangeDate` |  | |  | `dupdat` |  |  |
| `FinInstrumentLastChangedTime` |  | |  | `tuptim` |  |  |
| `TreasuryContractType` |  | |  | `rantyp` |  |  |
| `FinTransFlowType` |  | |  | `sfhazba` |  |  |
| `FinTransFlowCategory` |  | |  | `cast( UnderlyingFlow.sbktyp as ftr_flow_category preserving type )` |  |  |
| `FinTransFlowPaytAmtDirection` |  | |  | `cast( UnderlyingFlow.ssign as ftr_flow_payment_amt_direction preserving type )` |  |  |
| `FinancialTransactionDirection` |  | |  | `rkondgr` |  |  |
| `FinTransFlowSource` |  | |  | `sherkunft` |  |  |
| `PayerPayee` |  | |  | `rpzahl` |  |  |
| `FinTransFlowPaymentDate` |  | |  | `cast( UnderlyingFlow.dzterm as ftr_flow_payment_date preserving type )` |  |  |
| `FinTransFlowPaytAmt` |  | |  | `cast( UnderlyingFlow.bzbetr as ftr_flow_payment_amount preserving type )` |  |  |
| `FinTransFlowPaytAmtCrcy` |  | |  | `wzbetr` |  |  |
| `FinTransFlowInLoclCrcyPaytAmt` |  | |  | `bhwbetr` |  |  |
| `FinTransFlowLoclCrcyCnvrsnRate` |  | |  | `cast( UnderlyingFlow.khwkurs as ftr_flow_locl_crcy_cnvrsn_rate preserving type )` |  |  |
| `CalculationDate` |  | |  | `dvalut` |  |  |
| `CalculationPeriodStartDate` |  | |  | `dbervon` |  |  |
| `CalculationPeriodEndDate` |  | |  | `dberbis` |  |  |
| `CalcPeriodEndDateIsInclusive` |  | |  | `sinclbis` |  |  |
| `CalcPeriodStartDateIsExclusive` |  | |  | `sexclvon` |  |  |
| `CalcPeriodEndDateIsMonthEnd` |  | |  | `sultbis` |  |  |
| `CalcPeriodStartDateIsMonthEnd` |  | |  | `sultvon` |  |  |
| `NumberOfCalculationDays` |  | |  | `atage` |  |  |
| `NrOfBaseDaysPerCalcPeriod` |  | |  | `abastage` |  |  |
| `InterestCalculationMethod` |  | |  | `szbmeth` |  |  |
| `FinTransFlowCalcBaseAmount` |  | |  | `bbasis` |  |  |
| `FinTransFlowCalcBaseAmountCrcy` |  | |  | `wbasis` |  |  |
| `IntrstCalcMethFactoryCalendar` |  | |  | `skalidwt` |  |  |
| `InterestBaseDaysMethod` |  | |  | `stgbasis` |  |  |
| `InterestCalculationType` |  | |  | `cast ( case when UnderlyingFlow.jexpozins = 'X' then '1' when UnderlyingFlow.jexpozins = 'L' then '5' when UnderlyingFlow.stgbasis = '1' then '2' when UnderlyingFlow.stgbasis = 'D' then '3' when UnderlyingFlow.jexpointfactor = 'X' then '4' when UnderlyingFlow.jexpointfactor = 'L' then '6' when UnderlyingFlow.jexpointfactor = 'A' then '7' else '0' end as tfmsintcalc preserving type )` |  |  |
| `ConditionPercentageRate` |  | |  | `pkond` |  |  |
| `FinCndnPctgRateFixingDate` |  | |  | `dpkond` |  |  |
| `FinTransFlowIntrstRateFixDate` |  | |  | `dzfest` |  |  |
| `FinTransPositionValueDate` |  | |  | `dbestand` |  |  |
| `FinTransFlowPositionAmount` |  | |  | `cast( UnderlyingFlow.bbbetr as ftr_position_amount preserving type )` |  |  |
| `FinTransFlwPosAmtCrcy` |  | |  | `wbbetr` |  |  |
| `FinTransFlowNomAmt` |  | |  | `cast( UnderlyingFlow.bnwhr as ftr_flow_norminal_amount preserving type )` |  |  |
| `FinTransFlowNomAmtCrcy` |  | |  | `cast( UnderlyingFlow.wprice as ftr_flow_norminal_amount_crcy preserving type )` |  |  |
| `MarketValueInQtanCurrency` |  | |  | `bebetr` |  |  |
| `QuotationCurrency` |  | |  | `webetr` |  |  |
| `FinTransTradedNumberOfUnits` |  | |  | `cast( UnderlyingFlow.astueck as ftr_fintrans_units_l )` |  |  |
| `FinTransTrdPriceCrcyUnitRate` |  | |  | `cast( UnderlyingFlow.buprc as ftr_price preserving type )` |  |  |
| `FinTransTradedPriceCrcyUnit` |  | |  | `cast( UnderlyingFlow.srunit as ftr_traded_price_currency_unit preserving type )` |  |  |
| `SecurityExchange` |  | |  | `rhandpl` |  |  |
| `FinConditionItem` |  | |  | `rkond` |  |  |
| `ConditionItemValidityStartDate` |  | |  | `dguel_kp` |  |  |
| `FinConditionSubItem` |  | |  | `nstufe` |  |  |
| `InterestConditionType` |  | |  | `skoart` |  |  |
| `FinInstrConditionLogicGroup` |  | |  | `cast( UnderlyingFlow.logic_rkond as ftr_instr_cndn_logic_group preserving type )` |  |  |
| `FinCndnCrsRefcdAccmlnCndnGrp` |  | |  | `sum_rkond` |  |  |
| `FinTransFlwReltdAccumulatingID` |  | |  | `sum_id_source` |  |  |
| `FinTransFlowAccumulatingFlowID` |  | |  | `sum_id_sum` |  |  |
| `FinTransTradedPricePercent` |  | |  | `cast( UnderlyingFlow.bpprc as ftr_price_percent preserving type )` |  |  |
| `_ContractType` | | ✓ | | | | |
| `_FlowType` | | ✓ | | | | |
| `_FlowCategory` | | ✓ | | | | |
| `_PayerPayee` | | ✓ | | | | |
| `_PaymentCurrency` | | ✓ | | | | |
| `_BaseAmtCurrency` | | ✓ | | | | |
| `_QuotationCurrency` | | ✓ | | | | |
| `_PositionAmountCurrency` | | ✓ | | | | |
| `_NominalCurrency` | | ✓ | | | | |
| `_InterestCalculationMethod` | | ✓ | | | | |
| `_OptnUndrlgAllocation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ContractType` | `I_TreasuryContractType` | [0..1] |
| `_FlowType` | `I_FinTransFlowType` | [0..1] |
| `_FlowCategory` | `I_FinTransFlowCategory` | [0..1] |
| `_PayerPayee` | `I_BusinessPartner` | [0..1] |
| `_PaymentCurrency` | `I_Currency` | [0..1] |
| `_BaseAmtCurrency` | `I_Currency` | [0..1] |
| `_QuotationCurrency` | `I_Currency` | [0..1] |
| `_PositionAmountCurrency` | `I_Currency` | [0..1] |
| `_NominalCurrency` | `I_Currency` | [0..1] |
| `_InterestCalculationMethod` | `I_InterestCalculationMethod` | [0..1] |
| `_OptnUndrlgAllocation` | `I_FinTransOptnUndrlgAllocation` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Fin Transaction Underlying Flow'
@ObjectModel.sapObjectNodeType.name: 'FinTransUnderlyingFlow'

@AccessControl.authorizationCheck: #CHECK

@VDM.viewType: #BASIC

@ObjectModel: {
  usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #B, sizeCategory: #M },
  modelingPattern: #ANALYTICAL_FACT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
}

@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
        mapping:[
                {
                    table: 'vtifhapo', role: #MAIN,
                    viewElement: ['OptionUnderlyingTransaction','FinancialInstrumentActivity','FinTransFlowCreationDate','FinTransFlowCreationTime','FinTransFlowNumber'],
                    tableElement: ['rfha','rfhazu','dcrdat','tcrtim','rfhazb']
                }
            ]
    }
  }
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_FinTransUnderlyingFlow
  as select from vtifhapo as UnderlyingFlow

  association [0..1] to I_TreasuryContractType         as _ContractType              on  $projection.TreasuryContractType = _ContractType.TreasuryContractType
  association [0..1] to I_FinTransFlowType             as _FlowType                  on  $projection.TreasuryContractType = _FlowType.TreasuryContractType
                                                                                     and $projection.FinTransFlowType     = _FlowType.FinTransFlowType
  association [0..1] to I_FinTransFlowCategory         as _FlowCategory              on  $projection.FinTransFlowCategory = _FlowCategory.FinTransFlowCategory
  association [0..1] to I_BusinessPartner              as _PayerPayee                on  $projection.PayerPayee = _PayerPayee.BusinessPartner
  association [0..1] to I_Currency                     as _PaymentCurrency           on  $projection.FinTransFlowPaytAmtCrcy = _PaymentCurrency.Currency
  association [0..1] to I_Currency                     as _BaseAmtCurrency           on  $projection.FinTransFlowCalcBaseAmountCrcy = _BaseAmtCurrency.Currency
  association [0..1] to I_Currency                     as _QuotationCurrency         on  $projection.QuotationCurrency = _QuotationCurrency.Currency
  association [0..1] to I_Currency                     as _PositionAmountCurrency    on  $projection.FinTransFlwPosAmtCrcy = _PositionAmountCurrency.Currency
  association [0..1] to I_Currency                     as _NominalCurrency           on  $projection.FinTransFlowNomAmtCrcy = _NominalCurrency.Currency
  association [0..1] to I_InterestCalculationMethod    as _InterestCalculationMethod on  $projection.InterestCalculationMethod = _InterestCalculationMethod.InterestCalculationMethod
  association [1..1] to I_FinTransOptnUndrlgAllocation as _OptnUndrlgAllocation      on  $projection.OptionUnderlyingTransaction = _OptnUndrlgAllocation.OptionUnderlyingTransaction
{

  key cast( rfha as option_underlying_transaction preserving type )                    as OptionUnderlyingTransaction,
  key rfhazu                                                                           as FinancialInstrumentActivity, //OptionUnderlyingActivity,
  key dcrdat                                                                           as FinTransFlowCreationDate,
  key cast( tcrtim as ftr_flow_creation_time preserving type )                         as FinTransFlowCreationTime,
  key rfhazb                                                                           as FinTransFlowNumber,

      UnderlyingFlow.cruser                                                            as CreatedByUser,
      cast( UnderlyingFlow.dcrdat as ftr_creation_date preserving type )               as FinTransCreationDate,
      UnderlyingFlow.tcrtim                                                            as FinTransCreationTime,
      UnderlyingFlow.upuser                                                            as LastChangedByUser,
      UnderlyingFlow.dupdat                                                            as LastChangeDate,
      UnderlyingFlow.tuptim                                                            as FinInstrumentLastChangedTime,

      UnderlyingFlow.rantyp                                                            as TreasuryContractType,
      UnderlyingFlow.sfhazba                                                           as FinTransFlowType,
      cast( UnderlyingFlow.sbktyp as ftr_flow_category preserving type )               as FinTransFlowCategory,
      cast( UnderlyingFlow.ssign as ftr_flow_payment_amt_direction preserving type )   as FinTransFlowPaytAmtDirection,
      UnderlyingFlow.rkondgr                                                           as FinancialTransactionDirection,
      UnderlyingFlow.sherkunft                                                         as FinTransFlowSource,


      UnderlyingFlow.rpzahl                                                            as PayerPayee,
      cast( UnderlyingFlow.dzterm as ftr_flow_payment_date preserving type )           as FinTransFlowPaymentDate,
      @Semantics.amount.currencyCode: 'FinTransFlowPaytAmtCrcy'
      cast( UnderlyingFlow.bzbetr as ftr_flow_payment_amount preserving type )         as FinTransFlowPaytAmt,
      UnderlyingFlow.wzbetr                                                            as FinTransFlowPaytAmtCrcy,
      @Semantics.amount.currencyCode: 'FinTransFlowPaytAmtCrcy'
      UnderlyingFlow.bhwbetr                                                           as FinTransFlowInLoclCrcyPaytAmt,
      cast( UnderlyingFlow.khwkurs as ftr_flow_locl_crcy_cnvrsn_rate preserving type ) as FinTransFlowLoclCrcyCnvrsnRate,

      UnderlyingFlow.dvalut                                                            as CalculationDate,
      UnderlyingFlow.dbervon                                                           as CalculationPeriodStartDate,
      UnderlyingFlow.dberbis                                                           as CalculationPeriodEndDate,
      UnderlyingFlow.sinclbis                                                          as CalcPeriodEndDateIsInclusive,
      UnderlyingFlow.sexclvon                                                          as CalcPeriodStartDateIsExclusive,
      @Semantics.booleanIndicator: true
      UnderlyingFlow.sultbis                                                           as CalcPeriodEndDateIsMonthEnd,
      @Semantics.booleanIndicator: true
      UnderlyingFlow.sultvon                                                           as CalcPeriodStartDateIsMonthEnd,
      UnderlyingFlow.atage                                                             as NumberOfCalculationDays,
      UnderlyingFlow.abastage                                                          as NrOfBaseDaysPerCalcPeriod,
      UnderlyingFlow.szbmeth                                                           as InterestCalculationMethod,
      @Semantics.amount.currencyCode: 'FinTransFlowCalcBaseAmountCrcy'
      UnderlyingFlow.bbasis                                                            as FinTransFlowCalcBaseAmount,
      UnderlyingFlow.wbasis                                                            as FinTransFlowCalcBaseAmountCrcy,
      UnderlyingFlow.skalidwt                                                          as IntrstCalcMethFactoryCalendar,
      UnderlyingFlow.stgbasis                                                          as InterestBaseDaysMethod,
      cast ( case
            when UnderlyingFlow.jexpozins      = 'X' then '1'
            when UnderlyingFlow.jexpozins      = 'L' then '5'
            when UnderlyingFlow.stgbasis       = '1' then '2'
            when UnderlyingFlow.stgbasis       = 'D' then '3'
            when UnderlyingFlow.jexpointfactor = 'X' then '4'
            when UnderlyingFlow.jexpointfactor = 'L' then '6'
            when UnderlyingFlow.jexpointfactor = 'A' then '7'
            else '0'
            end as tfmsintcalc preserving type )                                       as InterestCalculationType,

      UnderlyingFlow.pkond                                                             as ConditionPercentageRate,
      UnderlyingFlow.dpkond                                                            as FinCndnPctgRateFixingDate,
      UnderlyingFlow.dzfest                                                            as FinTransFlowIntrstRateFixDate,

      UnderlyingFlow.dbestand                                                          as FinTransPositionValueDate,
      @Semantics.amount.currencyCode: 'FinTransFlwPosAmtCrcy'
      cast( UnderlyingFlow.bbbetr  as ftr_position_amount preserving type )            as FinTransFlowPositionAmount,
      UnderlyingFlow.wbbetr                                                            as FinTransFlwPosAmtCrcy,
      @Semantics.amount.currencyCode: 'FinTransFlowNomAmtCrcy'
      cast( UnderlyingFlow.bnwhr as ftr_flow_norminal_amount preserving type )         as FinTransFlowNomAmt,
      cast( UnderlyingFlow.wprice as ftr_flow_norminal_amount_crcy preserving type )   as FinTransFlowNomAmtCrcy,
      @Semantics.amount.currencyCode: 'QuotationCurrency'
      UnderlyingFlow.bebetr                                                            as MarketValueInQtanCurrency,
      UnderlyingFlow.webetr                                                            as QuotationCurrency,

      cast( UnderlyingFlow.astueck as ftr_fintrans_units_l )                           as FinTransTradedNumberOfUnits,
      cast( UnderlyingFlow.buprc as ftr_price preserving type )                        as FinTransTrdPriceCrcyUnitRate,
      cast( UnderlyingFlow.srunit as ftr_traded_price_currency_unit preserving type )  as FinTransTradedPriceCrcyUnit,
      UnderlyingFlow.rhandpl                                                           as SecurityExchange,


      UnderlyingFlow.rkond                                                             as FinConditionItem,
      UnderlyingFlow.dguel_kp                                                          as ConditionItemValidityStartDate,
      UnderlyingFlow.nstufe                                                            as FinConditionSubItem,
      UnderlyingFlow.skoart                                                            as InterestConditionType,
      cast( UnderlyingFlow.logic_rkond as ftr_instr_cndn_logic_group preserving type ) as FinInstrConditionLogicGroup,
      UnderlyingFlow.sum_rkond                                                         as FinCndnCrsRefcdAccmlnCndnGrp,
      UnderlyingFlow.sum_id_source                                                     as FinTransFlwReltdAccumulatingID,
      UnderlyingFlow.sum_id_sum                                                        as FinTransFlowAccumulatingFlowID,
      cast( UnderlyingFlow.bpprc as ftr_price_percent preserving type )                as FinTransTradedPricePercent,
      
      //association
      _ContractType,
      _FlowType,
      _FlowCategory,
      _PayerPayee,
      _PaymentCurrency,
      _BaseAmtCurrency,
      _QuotationCurrency,
      _PositionAmountCurrency,
      _NominalCurrency,
      _InterestCalculationMethod,
      _OptnUndrlgAllocation

}
```
