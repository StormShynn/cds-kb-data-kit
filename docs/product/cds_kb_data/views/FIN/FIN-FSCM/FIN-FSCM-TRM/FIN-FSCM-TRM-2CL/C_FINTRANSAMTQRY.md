---
name: C_FINTRANSAMTQRY
description: "Financial Transaction Amount - Query"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSAMTQRY')/$value
semantic_en: "Financial Transaction Amount - Query"
semantic_vi: "Financial Transaction Amount - Query — CDS view tiêu dùng dựa trên I_FinTransAmtCube."
keywords:
  - "financial"
  - "transaction"
  - "amount"
  - "query"
  - "company"
  - "code"
  - "date"
  - "counterparty"
  - "bank"
  - "group"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - transaction
---
# C_FINTRANSAMTQRY

**Financial Transaction Amount - Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSAMTQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `KeyDate` | ✓ | |  |  | `DATS(8)` | Key Date |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `FinTransProductGroup` |  | |  |  | `CHAR(4)` | Product Group for Financial Transaction |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Valuation Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(18)` |  |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` | `CUKY(5)` |  |
| `FinTransAmtInDisplayCurrency` |  | |  | `cast(currency_conversion(amount => AmountInTransactionCurrency, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => KeyDate, exchange_rate_type => $parameters.P_ExchangeRateType) as ftr_fintransamtindisplaycrcy)` | `CURR(17)` | Fin Trans Amt in Display Crcy |
| `ExchangeRateType` |  | |  | `$parameters.P_ExchangeRateType` | `CHAR(4)` |  |
| `_ExchangeRateTypeVH` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExchangeRateTypeVH` | `I_ExchangeRateType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSAMTQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSAMTQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFINTRANSAMTQRY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Analytics.query: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_QUERY ]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@AbapCatalog.preserveKey:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@EndUserText.label: 'Financial Transaction Amount - Query'
@OData.publish: true
define view C_FinTransAmtQry 
  with parameters
    @Consumption.derivation: { lookupEntity:    'I_ShiftedCalendarDate',
                              resultElement:     'ShiftedCalendarDate',
                              binding: [ { targetParameter: 'P_TimePeriodOffsetDuration', type: #CONSTANT,     value: '-1' },
                                         { targetParameter: 'P_TimePeriodOffsetUnit',     type: #CONSTANT,     value: 'Y' },
                                         { targetElement:   'CalendarDate',               type: #SYSTEM_FIELD, value: '#SYSTEM_DATE' } ] }
    P_StartDate        : vdm_v_start_date,
    @Environment.systemField: #SYSTEM_DATE
    P_EndDate          : vdm_v_end_date,
    P_DisplayCurrency  : vdm_v_display_currency,
    P_ExchangeRateType : kurst,
    P_FinTransAmtRptgFrequency : ftr_fintransdte_granularity
as select from I_FinTransAmtCube(P_StartDate : $parameters.P_StartDate,
                                 P_EndDate   : $parameters.P_EndDate,
                                 P_FinTransAmtRptgFrequency : $parameters.P_FinTransAmtRptgFrequency) 
  association [1..1] to I_ExchangeRateType as _ExchangeRateTypeVH on _ExchangeRateTypeVH.ExchangeRateType = $parameters.P_ExchangeRateType

{     
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 10
  key CompanyCode,
      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 20
  key FinancialTransaction,
      @AnalyticsDetails.query.axis: #ROWS
  key KeyDate,
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 30
      Counterparty,
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 30
      BankGroup,
      
      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 30
      FinTransProductGroup,
      
      @AnalyticsDetails.query.axis: #FREE
      @Semantics.currencyCode: true
      TransactionCurrency,
      
      @AnalyticsDetails.query.axis: #FREE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      AmountInTransactionCurrency,
            
      @AnalyticsDetails.query.axis: #FREE
      @Semantics.currencyCode: true
      $parameters.P_DisplayCurrency as DisplayCurrency,
      
      @AnalyticsDetails.query.axis: #COLUMNS
      @DefaultAggregation: #FORMULA
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(currency_conversion(amount             => AmountInTransactionCurrency,
                               source_currency    => TransactionCurrency,
                               target_currency    => $parameters.P_DisplayCurrency,
                               exchange_rate_date => KeyDate,
                               exchange_rate_type => $parameters.P_ExchangeRateType) as ftr_fintransamtindisplaycrcy) as FinTransAmtInDisplayCurrency,
      
      @Consumption.valueHelp: '_ExchangeRateTypeVH'
      @Consumption.defaultValue : 'M'
      @UI.hidden: true
      $parameters.P_ExchangeRateType   as ExchangeRateType,
      
      @UI.hidden: true
      _ExchangeRateTypeVH
}
```
