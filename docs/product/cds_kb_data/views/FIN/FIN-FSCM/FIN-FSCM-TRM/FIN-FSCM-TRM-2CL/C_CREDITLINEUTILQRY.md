---
name: C_CREDITLINEUTILQRY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the total amount of the credit line for financial transactions? What is the utilized amount of the credit line for financial transactions? What is the available amount of the credit line for financial transactions?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLINEUTILQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the total amount of the credit line for financial transactions? What is the utilized amount of the credit line for financial transactions? What is the available amount of the credit line for financial transactions?"
semantic_vi: "Credit Line Utilization - Query — CDS view tiêu dùng dựa trên I_CreditLineUtilCube."
keywords:
  - "credit"
  - "line"
  - "utilization"
  - "query"
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
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - transaction
---
# C_CREDITLINEUTILQRY

**This CDS view provides the prerequisites for answering the following business questions: What is the total amount of the credit line for financial transactions? What is the utilized amount of the credit line for financial transactions? What is the available amount of the credit line for financial transactions?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLINEUTILQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `CalendarDate` | ✓ | |  |  | `DATS(8)` | Calendar Date |
| `Counterparty` | ✓ | |  |  | `CHAR(10)` | Counterparty Number |
| `SyndicatedCounterparty` | ✓ | |  |  | `CHAR(10)` | Syndicated Counterparty |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Instrument Transaction Type |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `UtilizedAmountInTransCrcy` |  | |  |  | `CURR(17)` |  |
| `TotalAmountInTransactionCrcy` |  | |  |  | `CURR(17)` | Credit Line in Transaction Currency |
| `FreeCreditLineAmtInTransCrcy` |  | |  |  | `CURR(18)` |  |
| `TotalAmountInDisplayCrcy` |  | |  | `cast(1 as ftr_totamtinrepcrcy)` | `CURR(17)` | Credit Line in Display Currency |
| `UtilizedAmountInDisplayCrcy` |  | |  | `cast(1 as ftr_utilamtinrepcrcy)` | `CURR(17)` | Utilized Amount in Display Currency |
| `FreeCreditLineAmtInDspCrcy` |  | |  | `cast(1 as ftr_availamtinrepcrcy)` | `CURR(17)` | Available Amount in Display Currency |
| `TotalAmtInDspCrcyOfStrtDay` |  | |  | `cast(1 as ftr_totamtinrepcrcy)` | `CURR(17)` | Credit Line in Display Currency |
| `UtilizedAmtInDspCrcyOfStrtDay` |  | |  | `cast(1 as utilized_amt_in_dsp_crcy_ofsd)` | `CURR(17)` | Utilized Amount in Display Currency of Start Day |
| `ExchangeRateType` |  | |  | `$parameters.P_ExchangeRateType` | `CHAR(4)` |  |
| `_ExchangeRateTypeVH` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExchangeRateTypeVH` | `I_ExchangeRateType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLINEUTILQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLINEUTILQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCREDITLNUTILQRY'
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
@EndUserText.label: 'Credit Line Utilization - Query'
@OData.publish: true
define view C_CreditLineUtilQry
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_StartDate        : vdm_v_start_date,
    @Consumption.derivation: { lookupEntity:    'I_ShiftedCalendarDate',
                                resultElement:     'ShiftedCalendarDate',
                                binding: [ { targetParameter: 'P_TimePeriodOffsetDuration', type: #CONSTANT,     value: '+1' },
                                           { targetParameter: 'P_TimePeriodOffsetUnit',     type: #CONSTANT,     value: 'Y' },
                                           { targetElement:   'CalendarDate',               type: #SYSTEM_FIELD, value: '#SYSTEM_DATE' } ] }
    P_EndDate          : vdm_v_end_date,
    P_DisplayCurrency  : vdm_v_display_currency,
    P_ExchangeRateType : kurst
  as select from I_CreditLineUtilCube (
                   P_StartDate                  : $parameters.P_StartDate,
                   P_EndDate                    : $parameters.P_EndDate,
                   P_DisplayCurrency     :$parameters.P_DisplayCurrency,
                   P_ExchangeRateType :$parameters.P_ExchangeRateType) as Utilization
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
  key CalendarDate,
      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence : 30
  key Counterparty,
      @AnalyticsDetails.query.axis: #FREE
  key SyndicatedCounterparty,
      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
      @AnalyticsDetails.query.variableSequence : 50
      @AnalyticsDetails.query.display: #KEY_TEXT
      FinancialInstrumentProductType,
      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
      @AnalyticsDetails.query.variableSequence : 60
      @AnalyticsDetails.query.display: #TEXT
      FinancialInstrTransactionType,
      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
      @AnalyticsDetails.query.variableSequence : 70
      TransactionCurrency,

      @AnalyticsDetails.query.axis: #FREE
      @Semantics.currencyCode: true
      DisplayCurrency,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.hidden
      @DefaultAggregation: #SUM
      UtilizedAmountInTransCrcy,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.hidden
      @DefaultAggregation: #SUM
      TotalAmountInTransactionCrcy,

      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.hidden
      @DefaultAggregation: #SUM
      FreeCreditLineAmtInTransCrcy,

      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #FIRST,
                                      exceptionAggregationElements: ['CalendarDate']
                                   }],
        query: { formula : ['TotalAmountInDisplayCrcy']}
        }
      @Semantics.amount.currencyCode: 'DisplayCurrency'

      cast(1 as ftr_totamtinrepcrcy)   as TotalAmountInDisplayCrcy,
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #FIRST,
                                      exceptionAggregationElements: ['CalendarDate']
                                   }],
        query: { formula : ['UtilizedAmountInDisplayCrcy']}
        }
      @Semantics.amount.currencyCode: 'DisplayCurrency'

      cast(1 as ftr_utilamtinrepcrcy)  as UtilizedAmountInDisplayCrcy,
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #FIRST,
                                      exceptionAggregationElements: ['CalendarDate']
                                   }],
        query: { formula : ['FreeCreditLineAmtInDspCrcy']}
        }
      @Semantics.amount.currencyCode: 'DisplayCurrency'

      cast(1 as ftr_availamtinrepcrcy) as FreeCreditLineAmtInDspCrcy,

      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #FIRST,
                                      exceptionAggregationElements: ['CalendarDate']
                                   }],
        query: { formula : ['TotalAmtInDspCrcyOfStrtDay']}
        }
      @Semantics.amount.currencyCode: 'DisplayCurrency'

      cast(1 as ftr_totamtinrepcrcy)   as TotalAmtInDspCrcyOfStrtDay,

      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.axis: #COLUMNS
      @AnalyticsDetails: {
        exceptionAggregationSteps: [{ exceptionAggregationBehavior : #FIRST,
                                      exceptionAggregationElements: ['CalendarDate']
                                   }],
        query: { formula : ['UtilizedAmtInDspCrcyOfStrtDay']}
        }
      @Semantics.amount.currencyCode: 'DisplayCurrency'

      cast(1 as utilized_amt_in_dsp_crcy_ofsd)  as UtilizedAmtInDspCrcyOfStrtDay,

      @Consumption.valueHelp: '_ExchangeRateTypeVH'
      @Consumption.defaultValue : 'M'
      @UI.hidden: true
      $parameters.P_ExchangeRateType   as ExchangeRateType,

      @UI.hidden: true
      _ExchangeRateTypeVH
}
```
