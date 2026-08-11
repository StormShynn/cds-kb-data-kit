---
name: I_BANKGUARANTEEOVERVIEW
description: "This CDS view provides the prerequisites for answering the following business questions: What is the outstanding bank guarantee volume made on the key date per company code, counterparty, and transaction currency? What information on live bank guarantee transactions is available in the overview? What is the average fee rate based on the volume of bank guarantee transactions? What is the total fee amount per counterparty in display currency?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGUARANTEEOVERVIEW')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the outstanding bank guarantee volume made on the key date per company code, counterparty, and transaction currency? What information on live bank guarantee transactions is available in the overview? What is the average fee rate based on the volume of bank guarantee transactions? What is the total fee amount per counterparty in display currency?"
semantic_vi: "Bank Guarantee Overview - Cube — CDS view giao diện dựa trên P_TFTRANSOVERVIEW."
keywords:
  - "bank"
  - "guarantee"
  - "overview"
  - "cube"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "instr"
  - "condition"
  - "logic"
  - "group"
  - "product"
  - "category"
  - "instrument"
tags:
  - FIN
  - bo:plant
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
  - bo:salesorder
---
# I_BANKGUARANTEEOVERVIEW

**This CDS view provides the prerequisites for answering the following business questions: What is the outstanding bank guarantee volume made on the key date per company code, counterparty, and transaction currency? What information on live bank guarantee transactions is available in the overview? What is the average fee rate based on the volume of bank guarantee transactions? What is the total fee amount per counterparty in display currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGUARANTEEOVERVIEW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinInstrConditionLogicGroup` | ✓ | |  |  | `NUMC(4)` | Condition Logic Group |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `NominalCurrency` |  | |  |  | `CUKY(5)` | Nominal Currency |
| `TransactionCurrency` |  | |  | `NominalCurrency` | `CUKY(5)` | Nominal Currency |
| `InterestCalculationType` |  | |  | `cast( VolumeFee.InterestCalculationType as ftr_gen_interest_cal_type )` | `INT1(3)` | Interest Calculation Type |
| `ConditionPercentageRate` |  | |  |  | `DEC(10)` | Percentage rate for condition items |
| `NominalAmountInNominalCurrency` |  | |  |  | `CURR(26)` |  |
| `FeeAmountInTransactionCrcy` |  | |  | `cast( FeeAmountInPaymentCurrency as ftr_gen_fin_pos_amt_tc )` | `CURR(23)` | Financial Position Amount In Transaction Currency |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `NominalAmountInDisplayCurrency` |  | |  | `cast( currency_conversion( amount => NominalAmountInNominalCurrency, source_currency => NominalCurrency, round => 'X', decimal_shift => 'X', target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'SET_TO_NULL' ) as ftr_fs_nominal_amount_dc )` | `CURR(23)` | Nominal Amount in Display Currency |
| `FeeAmountInDisplayCurrency` |  | |  | `cast( currency_conversion( amount => FeeAmountInPaymentCurrency, source_currency => PaymentCurrency, round => 'X', decimal_shift => 'X', target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'SET_TO_NULL' ) as ftr_gen_fee_amount_rc)` | `CURR(21)` | Fee Amount in Display Currency |
| `EstimatedFeeAmtInDisplayCrcy` |  | |  | `cast( currency_conversion( amount => CalcFeeAmount, source_currency => PaymentCurrency, round => 'X', decimal_shift => 'X', target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'SET_TO_NULL' ) as ftr_est_fee_amount_rc )` | `CURR(21)` | Estimated Fee Amount in Display Currency |
| `DisplayCurrency` |  | |  | `cast (:P_DisplayCurrency as fxm_group_currency preserving type)` | `CUKY(5)` | Display Currency |
| `NmbrOfFinancialTransactions` |  | |  | `case when FinInstrConditionLogicGroup is null then cast( 1 as ftr_fintrans_number ) when FinInstrConditionLogicGroup = '1000' then cast( 1 as ftr_fintrans_number ) else cast( 0 as ftr_fintrans_number ) end` | `INT4(10)` | Number of Financial Transactions |
| `VolumeIsCounted` |  | |  | `case when FinInstrConditionLogicGroup is null then cast( 'X' as ftr_volume_counted ) when FinInstrConditionLogicGroup = '1000' then cast( 'X' as ftr_volume_counted ) else cast( '' as ftr_volume_counted ) end` | `CHAR(1)` | Indicator whether transaction has valid condition |
| `ConditionIsValid` |  | |  | `case when FinInstrConditionLogicGroup is not null then cast( 'X' as ftr_condition_valid ) else cast( '' as ftr_condition_valid ) end` | `CHAR(1)` | Indicator whether transaction has valid condition |
| `_CompanyCode` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_Counterparty` | | ✓ | | | | |
| `_FinancialInstrProdCat` | | ✓ | | | | |
| `_FinancialInstrProductType` | | ✓ | | | | |
| `_FinInstrTransCat` | | ✓ | | | | |
| `_FinancialInstrTransType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_DisplayCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_Counterparty` | `I_Ftr_Counterparty` | [1..1] |
| `_FinancialInstrProdCat` | `I_FinancialInstrProdCat` | [1..1] |
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [1..1] |
| `_FinInstrTransCat` | `I_FinInstrTransCat` | [0..1] |
| `_FinancialInstrTransType` | `I_FinancialInstrTransType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGUARANTEEOVERVIEW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGUARANTEEOVERVIEW')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBKOVCUBE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_CUBE ]
@Metadata.ignorePropagatedAnnotations:true 
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@AbapCatalog.preserveKey:true
@Analytics.internalName:#LOCAL 
@Metadata.allowExtensions:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Bank Guarantee Overview - Cube'
define view I_BankGuaranteeOverview
  with parameters
    P_KeyDate          : vdm_v_end_date,
    P_DisplayCurrency  : vdm_v_display_currency,
    P_ExchangeRateType : kurst
  as select from P_TFTRANSOVERVIEW  ( P_KeyDate : $parameters.P_KeyDate ) as VolumeFee
  association [1..1] to I_CompanyCode               as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Currency                  as _DisplayCurrency           on  $projection.DisplayCurrency = _DisplayCurrency.Currency
  association [1..1] to I_Currency                  as _TransactionCurrency       on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1] to I_Ftr_Counterparty          as _Counterparty              on  $projection.Counterparty = _Counterparty.BusinessPartner
  association [1..1] to  I_FinancialInstrProdCat    as _FinancialInstrProdCat     on  $projection.FinancialInstrProductCategory = _FinancialInstrProdCat.FinancialInstrProductCategory
  association [1..1] to I_FinancialinstrProductType as _FinancialInstrProductType on  $projection.FinancialInstrumentProductType = _FinancialInstrProductType.FinancialInstrumentProductType
  association [0..1] to I_FinInstrTransCat          as _FinInstrTransCat          on  $projection.FinancialInstrProductCategory = _FinInstrTransCat.FinancialInstrProductCategory
                                                                                 and  $projection.FinInstrTransactionCategory   = _FinInstrTransCat.FinInstrTransactionCategory   
  association [1..1] to I_FinancialInstrTransType   as _FinancialInstrTransType   on  $projection.FinancialInstrTransactionType  = _FinancialInstrTransType.FinancialInstrTransactionType
                                                                                  and $projection.FinancialInstrumentProductType = _FinancialInstrTransType.FinancialInstrumentProductType
                                                                                
  { 
         @ObjectModel.foreignKey.association: '_CompanyCode'
     key VolumeFee.CompanyCode,
     key VolumeFee.FinancialTransaction, 
     key VolumeFee.FinInstrConditionLogicGroup,
         @ObjectModel.foreignKey.association: '_FinancialInstrProdCat'   
         VolumeFee.FinancialInstrProductCategory,
         @ObjectModel.foreignKey.association: '_FinancialInstrProductType'
         VolumeFee.FinancialInstrumentProductType,
         @ObjectModel.foreignKey.association: '_FinancialInstrTransType'
         VolumeFee.FinancialInstrTransactionType,  
         @ObjectModel.foreignKey.association: '_FinInstrTransCat'
         VolumeFee.FinInstrTransactionCategory,
         @ObjectModel.foreignKey.association: '_Counterparty'
         VolumeFee.Counterparty,
         VolumeFee.NominalCurrency,
         
         @ObjectModel.foreignKey.association: '_TransactionCurrency'
         VolumeFee.NominalCurrency as TransactionCurrency,
         cast( VolumeFee.InterestCalculationType as ftr_gen_interest_cal_type ) as InterestCalculationType, 
         ConditionPercentageRate,
         @Semantics.amount.currencyCode: 'NominalCurrency'
         @DefaultAggregation: #SUM   
         NominalAmountInNominalCurrency,
         
         @Semantics.amount.currencyCode: 'PaymentCurrency'
         @DefaultAggregation: #SUM   
         cast( FeeAmountInPaymentCurrency as ftr_gen_fin_pos_amt_tc ) as FeeAmountInTransactionCrcy,               
         PaymentCurrency,
         
         @Semantics.amount.currencyCode: 'DisplayCurrency'
         @DefaultAggregation: #SUM                   
         cast( currency_conversion( amount => NominalAmountInNominalCurrency,
                                    source_currency => NominalCurrency,
                                    round => 'X',
                                    decimal_shift => 'X',
                                    target_currency => :P_DisplayCurrency,
                                    exchange_rate_date => :P_KeyDate,
                                    exchange_rate_type => :P_ExchangeRateType,
                                    error_handling => 'SET_TO_NULL' ) as ftr_fs_nominal_amount_dc )       as NominalAmountInDisplayCurrency,
                                    
         @Semantics.amount.currencyCode: 'DisplayCurrency'
         @DefaultAggregation: #SUM
         cast( currency_conversion( amount => FeeAmountInPaymentCurrency,
                                    source_currency => PaymentCurrency,
                                    round => 'X',
                                    decimal_shift => 'X',
                                    target_currency => :P_DisplayCurrency,
                                    exchange_rate_date => :P_KeyDate,
                                    exchange_rate_type => :P_ExchangeRateType,
                                    error_handling => 'SET_TO_NULL' ) as ftr_gen_fee_amount_rc)       as FeeAmountInDisplayCurrency,   
                                    
         @Semantics.amount.currencyCode: 'DisplayCurrency'
         @DefaultAggregation: #SUM
         cast( currency_conversion( amount => CalcFeeAmount, 
                                    source_currency => PaymentCurrency,
                                    round => 'X',
                                    decimal_shift => 'X',
                                    target_currency => :P_DisplayCurrency,
                                    exchange_rate_date => :P_KeyDate,
                                    exchange_rate_type => :P_ExchangeRateType,
                                    error_handling => 'SET_TO_NULL' ) as ftr_est_fee_amount_rc )       as EstimatedFeeAmtInDisplayCrcy,                              
                                                                                        
         @Semantics.currencyCode: true
         cast (:P_DisplayCurrency as fxm_group_currency preserving type)                                as DisplayCurrency,
         
         @DefaultAggregation: #SUM
         case  
           when  FinInstrConditionLogicGroup is null then
              cast( 1 as ftr_fintrans_number )  
           when FinInstrConditionLogicGroup = '1000' then
              cast( 1 as ftr_fintrans_number ) 
           else
              cast( 0 as ftr_fintrans_number )  
         end as NmbrOfFinancialTransactions,
         
         case  
           when  FinInstrConditionLogicGroup is null then
              cast( 'X' as ftr_volume_counted )  
           when FinInstrConditionLogicGroup = '1000' then
              cast( 'X' as ftr_volume_counted ) 
           else
              cast( '' as ftr_volume_counted )  
         end as VolumeIsCounted,
         
         case 
           when FinInstrConditionLogicGroup is not null then
             cast( 'X' as ftr_condition_valid )  
           else
             cast( ''  as ftr_condition_valid ) 
         end as ConditionIsValid,
         
         _CompanyCode,
         _Counterparty,
         _DisplayCurrency,
         _FinancialInstrProdCat,
         _TransactionCurrency,
         _FinancialInstrProductType,
         _FinInstrTransCat,
         _FinancialInstrTransType
         
  } where VolumeFee.FinancialInstrProductCategory = '860'
```
