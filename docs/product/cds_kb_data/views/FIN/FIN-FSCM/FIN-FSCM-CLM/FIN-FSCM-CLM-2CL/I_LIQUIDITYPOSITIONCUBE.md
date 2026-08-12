---
name: I_LIQUIDITYPOSITIONCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: What are the cash position figures in a certain display currency or bank account currency on a certain key date? What are the cash position figures by company code, bank, and bank account on a certain key date? What are the balances forecasted for the next 90 days in a certain display currency? How much cash flows are forecasted for the next 90 days in a certain display currency? How much money has been received by or paid from my bank account in the past 90 days? What are the net amounts of cash flows in the past 90 days?"
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYPOSITIONCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the cash position figures in a certain display currency or bank account currency on a certain key date? What are the cash position figures by company code, bank, and bank account on a certain key date? What are the balances forecasted for the next 90 days in a certain display currency? How much cash flows are forecasted for the next 90 days in a certain display currency? How much money has been received by or paid from my bank account in the past 90 days? What are the net amounts of cash flows in the past 90 days?"
semantic_vi: "Cash Position Liquidity Forecast - Cube — CDS view giao diện dựa trên P_LIQUIDITYPOSITION_UNI."
keywords:
  - "cash"
  - "position"
  - "liquidity"
  - "forecast"
  - "cube"
  - "financial"
  - "data"
  - "source"
  - "company"
  - "code"
  - "house"
  - "bank"
  - "account"
  - "internal"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-2CL
  - interface-view
  - lob:finance
  - bo:purchaseorder
---
# I_LIQUIDITYPOSITIONCUBE

**This CDS view provides the prerequisites for answering the following business questions: What are the cash position figures in a certain display currency or bank account currency on a certain key date? What are the cash position figures by company code, bank, and bank account on a certain key date? What are the balances forecasted for the next 90 days in a certain display currency? How much cash flows are forecasted for the next 90 days in a certain display currency? How much money has been received by or paid from my bank account in the past 90 days? What are the net amounts of cash flows in the past 90 days?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYPOSITIONCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialPositionDataSource` | ✓ | |  |  | `CHAR(10)` | Data Source of Liquidity Position |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `HouseBank` | ✓ | |  |  | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` | ✓ | |  |  | `CHAR(5)` | ID for Account Details |
| `BankAccountInternalID` | ✓ | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `TransactionCurrency` | ✓ | |  |  | `CUKY(5)` | Currency |
| `LiquidityItem` | ✓ | |  |  | `CHAR(16)` | Liquidity Item |
| `BankAccountCurrency` | ✓ | |  |  | `CUKY(5)` | Currency |
| `BankAccount` | ✓ | |  | `case when _HouseBankAccountLinkage.BankAccount is null then cast('' as fclm_bam_acc_num) else _HouseBankAccountLinkage.BankAccount end` | `CHAR(40)` | Bank Account Number |
| `Bank` | ✓ | |  | `case when _HouseBankAccountLinkage._BankAccount.Bank is null then cast('' as bankl) else _HouseBankAccountLinkage._BankAccount.Bank end` | `CHAR(15)` |  |
| `BankCountry` | ✓ | |  | `case when _HouseBankAccountLinkage.BankCountry is null then cast('' as banks) else _HouseBankAccountLinkage.BankCountry end` | `CHAR(3)` | Bank Country/Region Key |
| `TransactionDate` | ✓ | |  |  | `DATS(8)` | Key Date |
| `BankAccountDescription` |  | |  | `case when _HouseBankAccountLinkage.BankAccountDescription is null then cast('' as fclm_bam_description) else _HouseBankAccountLinkage.BankAccountDescription end` | `CHAR(60)` | Account Description |
| `BankName` |  | |  | `case when _HouseBankAccountLinkage._HouseBank._Bank.BankName is null then cast('' as fclm_bam_description) else _HouseBankAccountLinkage._HouseBank._Bank.BankName end` | `CHAR(60)` |  |
| `LiquidityItemName` |  | |  | `_LiquidityItem._Text[1: Language = $session.system_language].LiquidityItemName` | `CHAR(30)` | Liquidity Item Name |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` |  |
| `_CompanyCode` | | ✓ | | | | |
| `_HouseBankBasic` | | ✓ | | | | |
| `_HouseBankAccountLinkage` | | ✓ | | | | |
| `_HouseBankAccountText` | | ✓ | | | | |
| `_Bank` | | ✓ | | | | |
| `_BankAccountText` | | ✓ | | | | |
| `_BankCountry` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |
| `_LiquidityItem` | | ✓ | | | | |
| `_LiquidityItemText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_HouseBankBasic` | `I_HouseBankBasic` | [0..1] |
| `_HouseBankAccountLinkage` | `I_HouseBankAccountLinkage` | [0..1] |
| `_HouseBankAccountText` | `I_HouseBankAccountText` | [0..*] |
| `_Bank` | `I_Bank` | [0..1] |
| `_BankAccountText` | `I_BankAccountText` | [0..*] |
| `_BankCountry` | `I_Country` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CurrencyText` | `I_CurrencyText` | [0..*] |
| `_LiquidityItem` | `I_LiquidityItem` | [0..1] |
| `_LiquidityItemText` | `I_LiquidityItemText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYPOSITIONCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDITYPOSITIONCUBE')/$value)*

```abap
@Metadata.allowExtensions:true
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #XXL
//@ClientHandling.algorithm: #SESSION_VARIABLE
//@AbapCatalog.sqlViewName: 'ILPCUBE'
//@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@AccessControl.authorizationCheck:  #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@Analytics.technicalName: 'ILPCUBE'
@Analytics.internalName:#LOCAL 
//@AbapCatalog.preserveKey:true
@Consumption.dbHints: ['USE_HEX_PLAN']
@EndUserText.label: 'Cash Position Liquidity Forecast - Cube'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
define view entity I_LiquidityPositionCube
    with parameters 
        @Environment.systemField: #SYSTEM_DATE        
        P_KeyDate               : vdm_v_key_date,
--        @Consumption.defaultValue: 'EUR'
--        P_DisplayCurrency : vdm_v_display_currency,
--        @Consumption.defaultValue: 'M'
--       P_ExchangeRateType  : kurst,     
--        P_CashPoolBalCalcPrfl   : fclm_balc_prof_name,
        P_CashPoolBalCalcPrfl   : fclm_cashpool_prf_name,
--        P_ForecastCalcPrfl      : fclm_balc_prof_name
        P_ForecastCalcPrfl      : fclm_forecast_prf_name
as 
select from P_LIQUIDITYPOSITION_UNI(P_KeyDate: $parameters.P_KeyDate,P_CashPoolBalCalcPrfl: $parameters.P_CashPoolBalCalcPrfl, P_ForecastCalcPrfl: $parameters.P_ForecastCalcPrfl ) 
  association [0..1] to I_CompanyCode             as _CompanyCode    
                                                     on  $projection.CompanyCode           =  _CompanyCode.CompanyCode
  association [0..1] to I_HouseBankBasic as _HouseBankBasic
                                                 on  $projection.CompanyCode = _HouseBankBasic.CompanyCode
                                                 and $projection.HouseBank = _HouseBankBasic.HouseBank                                              
  association [0..1] to I_HouseBankAccountLinkage as _HouseBankAccountLinkage                                              
                                                     on  $projection.CompanyCode           =  _HouseBankAccountLinkage.CompanyCode
                                                     and $projection.HouseBank             =  _HouseBankAccountLinkage.HouseBank
                                                     and $projection.HouseBankAccount      =  _HouseBankAccountLinkage.HouseBankAccount
                                                     and $projection.BankAccountInternalID =  _HouseBankAccountLinkage.BankAccountInternalID
  association [0..*] to I_HouseBankAccountText    as _HouseBankAccountText
                                                     on  $projection.CompanyCode      = _HouseBankAccountText.CompanyCode
                                                     and $projection.HouseBank        = _HouseBankAccountText.HouseBank
                                                     and $projection.HouseBankAccount = _HouseBankAccountText.HouseBankAccount
--  association [0..1] to I_Housebank               as _HouseBank
--                                                     on  $projection.HouseBank        = _HouseBank.HouseBank 
--                                                     and $projection.CompanyCode      = _HouseBank.CompanyCode                                              
--  association [0..1] to I_BankAcctNumberVH      as _BankAcctNumberVH      on  $projection.BankAccountInternalID = _BankAcctNumberVH.BankAccountInternalID
--                                                                           and $projection.BankCountry           = _BankAcctNumberVH.BankCountry
--                                                                           and $projection.bank                  = _BankAcctNumberVH.Bank
--                                                                           and $projection.BankAccountCurrency   = _BankAcctNumberVH.BankAccountCurrency
--                                                                           and $projection.bankaccount           = _BankAcctNumberVH.BankAccountNumber                                      
   association [0..1] to I_Bank                        as _Bank            on   $projection.BankCountry = _Bank.BankCountry
                                                                          and  $projection.Bank        = _Bank.BankInternalID
   
--   association [0..1] to I_BankAccount            as _BankAccount
--                                                    on  $projection.BankAccountInternalID = _BankAccount.BankAccountInternalID
   association [0..*] to I_BankAccountText        as _BankAccountText
                                                    on  $projection.BankAccount = _BankAccountText.BankAccountInternalID                                                      
   association [0..1] to I_Country                as _BankCountry     
                                                    on   $projection.BankCountry = _BankCountry.Country 
                                                 
--  association [0..1] to I_BusinessPartner   as _Partner
--                                                on  $projection.businesspartner = _Partner.BusinessPartner
  association [0..1] to I_Currency               as _TransactionCurrency
                                                    on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..*] to I_CurrencyText           as _CurrencyText 
                                                    on $projection.TransactionCurrency = _CurrencyText.Currency
  association [0..1] to I_LiquidityItem          as _LiquidityItem     
                                                    on  $projection.LiquidityItem = _LiquidityItem.LiquidityItem
  association [0..*] to I_LiquidityItemText      as _LiquidityItemText 
                                                    on  $projection.LiquidityItem = _LiquidityItemText.LiquidityItem                                            

{
    key FinancialPositionDataSource,
    @ObjectModel.foreignKey.association: '_CompanyCode'
    key CompanyCode,
    
    @ObjectModel.text.element:  [ 'BankName' ]
    @UI.textArrangement: #TEXT_LAST
    @ObjectModel.foreignKey.association: '_HouseBankBasic'
    key HouseBank,
    
--    @ObjectModel.foreignKey.association: '_HouseBankAccountLinkage'
    key HouseBankAccount,
    
    @ObjectModel.text.element: ['BankAccountDescription'] 
--    @ObjectModel.foreignKey.association: '_BankAccount'
    key BankAccountInternalID,
--    key BusinessPartner,

 //   @Semantics.currencyCode: true
    @ObjectModel.foreignKey.association: '_TransactionCurrency'
    key TransactionCurrency,

   @ObjectModel.text.element:  [ 'LiquidityItemName' ]
   @ObjectModel.foreignKey.association: '_LiquidityItem'
    key LiquidityItem,
    
  //  @Semantics.currencyCode: true
    key BankAccountCurrency,
    
    @ObjectModel.text.element: ['BankAccountDescription']   
    key case when _HouseBankAccountLinkage.BankAccount is null then cast('' as fclm_bam_acc_num) 
     else _HouseBankAccountLinkage.BankAccount end                                                           as BankAccount,
--     key _HouseBankAccountLinkage.BankAccount ,
    
    @ObjectModel.text.element:  [ 'BankName' ]   
    @ObjectModel.foreignKey.association: '_Bank'
--    key _HouseBankAccountLinkage._BankAccount.Bank,
    key case when _HouseBankAccountLinkage._BankAccount.Bank is null then cast('' as bankl) 
     else _HouseBankAccountLinkage._BankAccount.Bank end                                                    as Bank,
    
       @ObjectModel.foreignKey.association: '_BankCountry'
    key case when _HouseBankAccountLinkage.BankCountry is null then cast('' as banks) 
      else _HouseBankAccountLinkage.BankCountry  end                                                         as BankCountry,
    
    key TransactionDate,

     @Semantics.text: true
--     case when  _HouseBankAccountLinkage._BankAccount._Text[1: Language = $session.system_language].BankAccountDescription is null then cast('' as fclm_bam_description) 
--     else  _HouseBankAccountLinkage._BankAccount._Text[1: Language = $session.system_language].BankAccountDescription end                                                 
--     _HouseBankAccountLinkage.BankAccountDescription    as  BankAccountDescription,
    case when _HouseBankAccountLinkage.BankAccountDescription is null then cast('' as fclm_bam_description) 
    else _HouseBankAccountLinkage.BankAccountDescription end as BankAccountDescription,
--     _BankAccountText[1: Language = $session.system_language].BankAccountDescription as BankAccountDescription,  
--    _HouseBankAccountLinkage._BankAccount._Text[1: Language = $session.system_language].BankAccountDescription, 
     
     @Semantics.text
     case when _HouseBankAccountLinkage._HouseBank._Bank.BankName is null then cast('' as fclm_bam_description) 
     else _HouseBankAccountLinkage._HouseBank._Bank.BankName end as BankName,
     
     @Semantics.text: true
     _LiquidityItem._Text[1: Language = $session.system_language].LiquidityItemName                           as  LiquidityItemName,
             
    @Semantics.amount.currencyCode: 'TransactionCurrency'
    @DefaultAggregation: #SUM
    AmountInTransactionCurrency,
    
    _CompanyCode,
    _HouseBankAccountLinkage,
    _HouseBankAccountText,
--    _HouseBank,
--    _BankAcctNumberVH,
    _Bank,
--    _BankAccount,
    _BankAccountText,
    _BankCountry,
    _HouseBankBasic,
--    _BankAcctNumberVH,
--    _Bank,
--    _BankAccount,
--    _Partner,
    _TransactionCurrency,
    _CurrencyText,
    _LiquidityItem,
    _LiquidityItemText
}
```
