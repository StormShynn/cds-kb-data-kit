---
name: I_CREDITLINEUTILCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: How to calculate the total amount of credit line for financial transactions in the system? How to calculate the utilized amount of credit line for financial transactions in the system? How to calculate the available amount of credit line for financial transactions in the system?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLINEUTILCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How to calculate the total amount of credit line for financial transactions in the system? How to calculate the utilized amount of credit line for financial transactions in the system? How to calculate the available amount of credit line for financial transactions in the system?"
semantic_vi: "Credit Line Utilization - Cube — CDS view giao diện dựa trên I_CreditLineUtilization."
keywords:
  - "credit"
  - "line"
  - "utilization"
  - "cube"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "calendar"
  - "date"
  - "counterparty"
  - "syndicated"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_CREDITLINEUTILCUBE

**This CDS view provides the prerequisites for answering the following business questions: How to calculate the total amount of credit line for financial transactions in the system? How to calculate the utilized amount of credit line for financial transactions in the system? How to calculate the available amount of credit line for financial transactions in the system?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLINEUTILCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `CalendarDate` | ✓ | |  | `cast(Utilization.KeyDate as calendardate )` | `DATS(8)` | Calendar Date |
| `Counterparty` | ✓ | |  |  | `CHAR(10)` | Counterparty Number |
| `SyndicatedCounterparty` | ✓ | |  |  | `CHAR(10)` | Syndicated Counterparty |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Instrument Transaction Type |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` |  |
| `DisplayCurrency` |  | |  | `cast (DisplayCurrency as vdm_v_display_currency)` | `CUKY(5)` | Display Currency |
| `UtilizedAmountInTransCrcy` |  | |  |  | `CURR(17)` |  |
| `TotalAmountInTransactionCrcy` |  | |  |  | `CURR(17)` | Credit Line in Transaction Currency |
| `FreeCreditLineAmtInTransCrcy` |  | |  | `(TotalAmountInTransactionCrcy- UtilizedAmountInTransCrcy)` | `CURR(18)` |  |
| `TotalAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | Credit Line in Display Currency |
| `UtilizedAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | Utilized Amount in Display Currency |
| `FreeCreditLineAmtInDspCrcy` |  | |  | `cast((TotalAmountInDisplayCrcy-UtilizedAmountInDisplayCrcy) as ftr_availamtinrepcrcy)` | `CURR(17)` | Available Amount in Display Currency |
| `TotalAmtInDspCrcyOfStrtDay` |  | |  | `case when Utilization.KeyDate = $parameters.P_StartDate then TotalAmountInDisplayCrcy else 0 end` | `CURR(17)` | Credit Line in Display Currency |
| `UtilizedAmtInDspCrcyOfStrtDay` |  | |  | `cast( case when Utilization.KeyDate = $parameters.P_StartDate then UtilizedAmountInDisplayCrcy else 0 end as utilized_amt_in_dsp_crcy_ofsd preserving type )` | `CURR(17)` | Utilized Amount in Display Currency of Start Day |
| `_FinancialTransaction` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Counterparty` | | ✓ | | | | |
| `_Counterparty_2` | | ✓ | | | | |
| `_SynCounterparty` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_FinancialInstrProductType` | | ✓ | | | | |
| `_FinancialInstrTransType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialTransaction` | `I_FinancialTransaction` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Counterparty` | `I_BusinessPartner` | [0..1] |
| `_Counterparty_2` | `I_Ftr_Counterparty` | [0..1] |
| `_SynCounterparty` | `I_Ftr_Counterparty` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |
| `_ExchangeRateTypeVH` | `I_ExchangeRateType` | [1..1] |
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [1..1] |
| `_FinancialInstrTransType` | `I_FinancialInstrTransType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLINEUTILCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLINEUTILCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFTRCLUTILICUBE'
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
@EndUserText.label: 'Credit Line Utilization - Cube'
define view I_CreditLineUtilCube
  with parameters
    P_StartDate        : vdm_v_start_date,
    P_EndDate          : vdm_v_end_date,
    P_DisplayCurrency  : vdm_v_display_currency,
    P_ExchangeRateType : kurst

  as select from I_CreditLineUtilization (
                           P_StartDate                  : $parameters.P_StartDate,
                           P_EndDate                    : $parameters.P_EndDate,
                           P_DisplayCurrency     :$parameters.P_DisplayCurrency,
                           P_ExchangeRateType :$parameters.P_ExchangeRateType

                 ) as Utilization
  association [0..1] to I_FinancialTransaction      as _FinancialTransaction      on  _FinancialTransaction.CompanyCode          = Utilization.CompanyCode
                                                                                  and _FinancialTransaction.FinancialTransaction = Utilization.FinancialTransaction
  association [0..1] to I_CompanyCode               as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_BusinessPartner           as _Counterparty              on  $projection.Counterparty = _Counterparty.BusinessPartner
  association [0..1] to I_Ftr_Counterparty           as _Counterparty_2              on  $projection.Counterparty = _Counterparty_2.BusinessPartner
  association [0..1] to I_Ftr_Counterparty          as _SynCounterparty           on  $projection.SyndicatedCounterparty = _SynCounterparty.BusinessPartner
  association [0..1] to I_Currency                  as _TransactionCurrency       on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1] to I_CalendarDate              as _CalendarDate              on  $projection.CalendarDate = _CalendarDate.CalendarDate
  association [1..1] to I_ExchangeRateType          as _ExchangeRateTypeVH        on  _ExchangeRateTypeVH.ExchangeRateType = $parameters.P_ExchangeRateType
  association [1..1] to I_FinancialinstrProductType as _FinancialInstrProductType on  $projection.FinancialInstrumentProductType = _FinancialInstrProductType.FinancialInstrumentProductType
  association [1..1] to I_FinancialInstrTransType   as _FinancialInstrTransType   on  $projection.FinancialInstrTransactionType  = _FinancialInstrTransType.FinancialInstrTransactionType
                                                                                  and $projection.FinancialInstrumentProductType = _FinancialInstrTransType.FinancialInstrumentProductType


{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_FinancialTransaction'
  key FinancialTransaction,
      @ObjectModel.foreignKey.association: '_CalendarDate'
  key cast(Utilization.KeyDate as calendardate )                                            as CalendarDate,
      @ObjectModel.foreignKey.association: '_Counterparty_2' 
  key Counterparty,
      @ObjectModel.foreignKey.association: '_SynCounterparty'
  key SyndicatedCounterparty,
      @ObjectModel.foreignKey.association: '_FinancialInstrProductType'
      FinancialInstrumentProductType,
      @ObjectModel.foreignKey.association: '_FinancialInstrTransType'
      FinancialInstrTransactionType,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      ExchangeRateType,

      cast (DisplayCurrency as vdm_v_display_currency)                                      as DisplayCurrency,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @DefaultAggregation: #SUM
      UtilizedAmountInTransCrcy,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @DefaultAggregation: #SUM
      TotalAmountInTransactionCrcy,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @DefaultAggregation: #SUM
      (TotalAmountInTransactionCrcy- UtilizedAmountInTransCrcy)                             as FreeCreditLineAmtInTransCrcy,


      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      TotalAmountInDisplayCrcy,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      UtilizedAmountInDisplayCrcy,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      cast((TotalAmountInDisplayCrcy-UtilizedAmountInDisplayCrcy) as ftr_availamtinrepcrcy) as FreeCreditLineAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      case when Utilization.KeyDate = $parameters.P_StartDate then
        TotalAmountInDisplayCrcy
        else
        0 end                                                                               as TotalAmtInDspCrcyOfStrtDay,


      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation: #SUM
      cast( case when Utilization.KeyDate = $parameters.P_StartDate then
        UtilizedAmountInDisplayCrcy
        else
        0 end as utilized_amt_in_dsp_crcy_ofsd preserving type )                            as UtilizedAmtInDspCrcyOfStrtDay,


      _CompanyCode,
      _Counterparty,
      _Counterparty_2,
      _FinancialTransaction,
      _CalendarDate,
      _SynCounterparty,
      _TransactionCurrency,
      _FinancialInstrProductType,
      _FinancialInstrTransType



}
```
