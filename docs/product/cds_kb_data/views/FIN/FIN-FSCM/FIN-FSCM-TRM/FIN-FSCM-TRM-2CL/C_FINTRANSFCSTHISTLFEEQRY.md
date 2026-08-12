---
name: C_FINTRANSFCSTHISTLFEEQRY
description: "This CDS view provides you with the amounts of paid financial transaction fees in display currency on dates in the past and the forecasted fee amounts on future dates. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSFCSTHISTLFEEQRY')/$value
semantic_en: "This CDS view provides you with the amounts of paid financial transaction fees in display currency on dates in the past and the forecasted fee amounts on future dates. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Fin. Trans.: Histl/Fcstd Fee Amt - Query — CDS view tiêu dùng dựa trên I_FinTransHistlFcstFeeCube."
keywords:
  - "fin."
  - "trans.:"
  - "histl/fcstd"
  - "fee"
  - "amt"
  - "query"
  - "company"
  - "code"
  - "financial"
  - "transaction"
  - "trans"
  - "data"
  - "source"
  - "flow"
  - "type"
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
# C_FINTRANSFCSTHISTLFEEQRY

**This CDS view provides you with the amounts of paid financial transaction fees in display currency on dates in the past and the forecasted fee amounts on future dates. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSFCSTHISTLFEEQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinTransFeeDataSource` | ✓ | |  |  | `CHAR(10)` | Data source for FinTrans Fee |
| `FinTransFlowType` | ✓ | |  |  | `CHAR(4)` | Flow Type |
| `FinTransFlowCreationTime` |  | |  |  | `TIMS(6)` | Flow Entry Time |
| `FinancialInstrumentActivity` |  | |  |  | `NUMC(5)` | Transaction Activity |
| `FinTransFlowCreationDate` |  | |  |  | `DATS(8)` | Entered On |
| `FinTransFlowNumber` |  | |  |  | `NUMC(4)` | Transaction Flow |
| `FinTransFlowPaymentDate` |  | |  |  | `DATS(8)` | Flow Payment Date |
| `TreasuryContractType` |  | |  |  | `CHAR(1)` | Contract Type |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `YearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `YearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` | `CUKY(5)` |  |
| `FinTransFlowPaytAmtInDspCrcy` |  | |  | `cast(currency_conversion(amount => FeeCube.FinTransFlowPaytAmt, source_currency => FeeCube.FinTransFlowPaytAmtCrcy, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => FinTransFlowPaymentDate, exchange_rate_type => $parameters.P_ExchangeRateType) as ftr_transflowpaytamtindspcrcy)` | `CURR(17)` | Fin trans flow paid amount in display currency |
| `ExchangeRateType` |  | |  | `$parameters.P_ExchangeRateType` | `CHAR(4)` |  |
| `_ExchangeRateTypeVH` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExchangeRateTypeVH` | `I_ExchangeRateType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSFCSTHISTLFEEQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSFCSTHISTLFEEQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFCSTHISTLFEEQRY'
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
@EndUserText.label: 'Fin. Trans.: Histl/Fcstd Fee Amt - Query'
@OData.publish: true
define view C_FinTransFcstHistlFeeQry 
  with parameters 
    @Consumption.derivation: { lookupEntity:    'I_ShiftedCalendarDate',
                              resultElement:     'ShiftedCalendarDate',
                              binding: [ { targetParameter: 'P_TimePeriodOffsetDuration', type: #CONSTANT,     value: '-1' },
                                         { targetParameter: 'P_TimePeriodOffsetUnit',     type: #CONSTANT,     value: 'Y' },
                                         { targetElement:   'CalendarDate',               type: #SYSTEM_FIELD, value: '#SYSTEM_DATE' } ] }                                   
    P_HistlStartDate        : ftr_histl_startdate,
    @Environment.systemField: #SYSTEM_DATE
    P_HistlEndDate          : ftr_histl_enddate,
    @Consumption.derivation: { lookupEntity:    'I_ShiftedCalendarDate',
                              resultElement:     'ShiftedCalendarDate',
                              binding: [ { targetParameter: 'P_TimePeriodOffsetDuration', type: #CONSTANT,     value: '1' },
                                         { targetParameter: 'P_TimePeriodOffsetUnit',     type: #CONSTANT,     value: 'D' },
                                         { targetElement:   'CalendarDate',               type: #SYSTEM_FIELD, value: '#SYSTEM_DATE' } ] }
    P_FcstStartDate         : ftr_fcst_startdate,
    @Consumption.derivation: { lookupEntity:    'I_ShiftedCalendarDate',
                              resultElement:     'ShiftedCalendarDate',
                              binding: [ { targetParameter: 'P_TimePeriodOffsetDuration', type: #CONSTANT,     value: '1' },
                                         { targetParameter: 'P_TimePeriodOffsetUnit',     type: #CONSTANT,     value: 'Y' },
                                         { targetElement:   'CalendarDate',               type: #SYSTEM_FIELD, value: '#SYSTEM_DATE' } ] }
    P_FcstEndDate           : ftr_fcst_enddate,
    P_DisplayCurrency       : vdm_v_display_currency,
    P_ExchangeRateType      : kurst
as select from I_FinTransHistlFcstFeeCube(P_HistlStartDate : $parameters.P_HistlStartDate,
                                          P_HistlEndDate   : $parameters.P_HistlEndDate,
                                          P_FcstStartDate  : $parameters.P_FcstStartDate,
                                          P_FcstEndDate    : $parameters.P_FcstEndDate) as FeeCube
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
      @AnalyticsDetails.query.variableSequence : 10
      @AnalyticsDetails.query.hidden: true
  key FinTransFeeDataSource,
    
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 10
  key FinTransFlowType,
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 10
      FinTransFlowCreationTime,
          
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 10
      FinancialInstrumentActivity,
      
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 10
      FinTransFlowCreationDate,
      
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 10
      FinTransFlowNumber,
      
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 10
      FinTransFlowPaymentDate,
      
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 10
      TreasuryContractType,
      
      @AnalyticsDetails.query.axis: #FREE
      @Semantics.currencyCode: true
      TransactionCurrency,
      
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 30
      BankGroup,
      
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 30
      Counterparty,
      
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 30
      FinancialInstrumentProductType,
      
      @AnalyticsDetails.query.axis: #FREE
      @EndUserText.label: 'Month'
      YearMonth,
      
      @AnalyticsDetails.query.axis: #FREE
      @EndUserText.label: 'Quarter'
      YearQuarter,
      
      @AnalyticsDetails.query.axis: #FREE
      @EndUserText.label: 'Year'
      CalendarYear,
      
      @AnalyticsDetails.query.axis: #FREE
      @Semantics.currencyCode: true
      $parameters.P_DisplayCurrency                                                                                   as DisplayCurrency,

      @AnalyticsDetails.query.axis: #COLUMNS
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(currency_conversion(amount             => FeeCube.FinTransFlowPaytAmt,
                               source_currency    => FeeCube.FinTransFlowPaytAmtCrcy,
                               target_currency    => $parameters.P_DisplayCurrency,
                               exchange_rate_date => FinTransFlowPaymentDate,
                               exchange_rate_type => $parameters.P_ExchangeRateType) as ftr_transflowpaytamtindspcrcy) as FinTransFlowPaytAmtInDspCrcy,

      @Consumption.valueHelp: '_ExchangeRateTypeVH'
      @Consumption.defaultValue : 'M'
      @UI.hidden: true
      $parameters.P_ExchangeRateType                                                                                  as ExchangeRateType,

      @UI.hidden: true
      _ExchangeRateTypeVH    
}
```
