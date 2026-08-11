---
name: C_FINTRANSSINGLEDAYAMTQRY
description: "This CDS view provides you with the amount of financial transactions in transaction currency and display currency at a specific key date. It allows you to aggregate the measure amount of financial transaction in display currency and transaction currency for bank groups and company codes. This CDS view provides the prerequisites for answering the following business questions: What is the amount of a financial transaction in transaction currency at a single date? What is the amount of a financial transaction in display currency at a single date?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSSINGLEDAYAMTQRY')/$value
semantic_en: "This CDS view provides you with the amount of financial transactions in transaction currency and display currency at a specific key date. It allows you to aggregate the measure amount of financial transaction in display currency and transaction currency for bank groups and company codes. This CDS view provides the prerequisites for answering the following business questions: What is the amount of a financial transaction in transaction currency at a single date? What is the amount of a financial transaction in display currency at a single date?"
semantic_vi: "Fin. Trans. Amt on Single Date - Query — CDS view tiêu dùng dựa trên I_FinTransAmtCube."
keywords:
  - "fin."
  - "trans."
  - "amt"
  - "single"
  - "date"
  - "query"
  - "company"
  - "code"
  - "financial"
  - "transaction"
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
# C_FINTRANSSINGLEDAYAMTQRY

**This CDS view provides you with the amount of financial transactions in transaction currency and display currency at a specific key date. It allows you to aggregate the measure amount of financial transaction in display currency and transaction currency for bank groups and company codes. This CDS view provides the prerequisites for answering the following business questions: What is the amount of a financial transaction in transaction currency at a single date? What is the amount of a financial transaction in display currency at a single date?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSSINGLEDAYAMTQRY')/$value) |

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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSSINGLEDAYAMTQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSSINGLEDAYAMTQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CTRANAMTSGLQRY'
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
@EndUserText.label: 'Fin. Trans. Amt on Single Date - Query'
@OData.publish: true
define view C_FinTransSingleDayAmtQry
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : vdm_v_key_date,
    P_DisplayCurrency  : vdm_v_display_currency,
    P_ExchangeRateType : kurst
as select from I_FinTransAmtCube(P_StartDate : $parameters.P_KeyDate,
                                 P_EndDate   : $parameters.P_KeyDate,
                                 P_FinTransAmtRptgFrequency : 'D')
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
