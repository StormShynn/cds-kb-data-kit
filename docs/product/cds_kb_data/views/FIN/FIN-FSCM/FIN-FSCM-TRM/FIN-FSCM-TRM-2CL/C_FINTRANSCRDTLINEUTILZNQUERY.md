---
name: C_FINTRANSCRDTLINEUTILZNQUERY
description: "This CDS view is used in the app Credit Line Analysis - Review Booklet to query data for the credit line utilization. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSCRDTLINEUTILZNQUERY')/$value
semantic_en: "This CDS view is used in the app Credit Line Analysis - Review Booklet to query data for the credit line utilization. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Line Analysis Query — CDS view tiêu dùng dựa trên Credit Line Analysis Query."
keywords:
  - "credit"
  - "line"
  - "analysis"
  - "query"
  - "company"
  - "code"
  - "financial"
  - "transaction"
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
---
# C_FINTRANSCRDTLINEUTILZNQUERY

**This CDS view is used in the app Credit Line Analysis - Review Booklet to query data for the credit line utilization. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSCRDTLINEUTILZNQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` |  | |  |  | `CHAR(13)` | Financial Transaction |
| `KeyDate` |  | |  |  | `DATS(8)` | Key Date |
| `Counterparty` |  | |  |  | `CHAR(10)` | Counterparty Number |
| `SyndicatedCounterparty` |  | |  |  | `CHAR(10)` | Syndicated Counterparty |
| `CreditLineReportingPeriod` |  | |  |  | `CHAR(10)` | Reporting Period |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` |  | |  |  | `CHAR(3)` | Financial Instrument Transaction Type |
| `FinancialInstrProductCategory` |  | |  |  | `NUMC(3)` | Financial Instrument Product Category |
| `FinInstrTransactionCategory` |  | |  |  | `NUMC(3)` | Transaction Category |
| `CompanyCodeCountry` |  | |  |  | `CHAR(3)` | Country/Region Key of Company Code |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |
| `TotalAmountInTransactionCrcy` |  | |  |  | `CURR(17)` | Credit Line in Transaction Currency |
| `UtilizedAmountInTransCrcy` |  | |  |  | `CURR(17)` | Utilized Amount in Transaction Currency |
| `AvailableAmountInTransCrcy` |  | |  |  | `DEC(23)` |  |
| `FcltyOvrdrftAmtInTransCrcy` |  | |  |  | `DEC(23)` |  |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TotalAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | Credit Line in Display Currency |
| `UtilizedAmountInDisplayCrcy` |  | |  |  | `CURR(17)` | Utilized Amount in Display Currency |
| `AvailableAmountInDisplayCrcy` |  | |  |  | `DEC(23)` |  |
| `FcltyOvrdrftAmtInDisplayCrcy` |  | |  |  | `DEC(23)` |  |
| `CreditLineUtilizationRatio` |  | |  | `cast(case when $projection.utilizedamountindisplaycrcy < abap.decfloat34'0' then abap.decfloat34'0' else curr_to_decfloat_amount( UtilizedAmountInDisplayCrcy ) * abap.decfloat34'100.00' / curr_to_decfloat_amount( TotalAmountInDisplayCrcy ) end as ftr_utilize_ratio )` | `DEC(10)` | Utilization Rate (%) |
| `CrdtLineUnderUtilizationRatio` |  | |  | `cast(case when $projection.utilizedamountindisplaycrcy > $projection.totalamountindisplaycrcy then abap.decfloat34'0' else $projection.availableamountindisplaycrcy * abap.decfloat34'100.00' / curr_to_decfloat_amount( TotalAmountInDisplayCrcy ) end as ftr_underutilize_ratio )` | `DEC(10)` | Underutilization Rate (%) |
| `FcltyTermEndExceededIsAllowed` |  | |  |  | `CHAR(1)` | Exceedance of End of Term |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSCRDTLINEUTILZNQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINTRANSCRDTLINEUTILZNQUERY')/$value)*

```abap
@Analytics.technicalName: 'CFTRCRDLUQUERY'
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #XL
@AccessControl.authorizationCheck: #NOT_ALLOWED
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Credit Line Analysis Query'
define transient view entity C_FinTransCrdtLineUtilznQuery
  provider contract analytical_query
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_StartDate                  : vdm_v_start_date,
    @Environment.systemField: #SYSTEM_DATE
    P_EndDate                    : vdm_v_end_date,
    @Consumption.defaultValue: 'D'
    P_CrdtLineReportingFrequency : ftr_date_granularity,
    P_DisplayCurrency            : ftr_display_currency,
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType', element: 'ExchangeRateType' } }]
    P_ExchangeRateType           : kurst,
    @EndUserText.label: 'Authorized Company Code'
    @Consumption.defaultValue: ''
    P_FcltyAuthorizedCompanyCode : bukrs,
    @EndUserText.label: 'Authorized Transaction Currency'
    @Consumption.defaultValue: ''
    P_FcltyAuthorizedTransacCrcy : waers,
    @EndUserText.label: 'Authorized Counterparty'
    @Consumption.defaultValue: ''
    P_FcltyAuthzdBusinessPartner : ftr_authzd_bp, //mind the conversion routine
    @EndUserText.label: 'Authorized Product Type'
    @Consumption.defaultValue: ''
    P_FcltyAuthorizedProductType : ftr_authzd_prod_type,
    @EndUserText.label: 'Authorized Transaction Type'
    @Consumption.defaultValue: ''
    P_FcltyAuthzdTransactionType : ftr_authzd_transac_type
  as projection on I_FinTransCrdtLineUtilznCube(
                       P_StartDate                  : $parameters.P_StartDate,
                       P_EndDate                    : $parameters.P_EndDate,
                       P_CrdtLineReportingFrequency : $parameters.P_CrdtLineReportingFrequency,
                       P_DisplayCurrency            : $parameters.P_DisplayCurrency,
                       P_ExchangeRateType           : $parameters.P_ExchangeRateType,
                       P_FcltyAuthorizedCompanyCode : $parameters.P_FcltyAuthorizedCompanyCode,
                       P_FcltyAuthorizedTransacCrcy : $parameters.P_FcltyAuthorizedTransacCrcy,
                       P_FcltyAuthzdBusinessPartner : $parameters.P_FcltyAuthzdBusinessPartner,
                       P_FcltyAuthorizedProductType : $parameters.P_FcltyAuthorizedProductType,
                       P_FcltyAuthzdTransactionType : $parameters.P_FcltyAuthzdTransactionType ) as Utilization
{
  @AnalyticsDetails.query.axis: #ROWS
  @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 10
  Utilization.CompanyCode,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 20
  Utilization.FinancialTransaction,

  @AnalyticsDetails.query.axis: #ROWS
  Utilization.KeyDate,

  @AnalyticsDetails.query.axis: #ROWS
  @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 30
  Utilization.Counterparty,

  @AnalyticsDetails.query.axis: #FREE
  Utilization.SyndicatedCounterparty,

  @AnalyticsDetails.query.axis: #ROWS
  Utilization.CreditLineReportingPeriod,

  //@AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.axis: #ROWS
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 40
  @AnalyticsDetails.query.totals: #SHOW
  @UI.textArrangement: #TEXT_ONLY
  Utilization.TransactionCurrency,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 50
  @UI.textArrangement: #TEXT_LAST
  Utilization.FinancialInstrumentProductType,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 60
  @UI.textArrangement: #TEXT_LAST
  Utilization.FinancialInstrTransactionType,

  @Consumption.hidden: true
  Utilization.FinancialInstrProductCategory,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 70
  @UI.textArrangement: #TEXT_LAST
  Utilization.FinInstrTransactionCategory,

  @AnalyticsDetails.query.axis: #FREE
  Utilization.CompanyCodeCountry,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 80
  Utilization.Portfolio,

  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.hidden
  @EndUserText.label: 'Credit Line in Trans Crcy'
  Utilization.TotalAmountInTransactionCrcy,

  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.hidden
  @EndUserText.label: 'Utilization Amount in Trans Crcy'
  Utilization.UtilizedAmountInTransCrcy,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.hidden
  @EndUserText.label: 'Available Amount in Trans Crcy'
  Utilization.AvailableAmountInTransCrcy,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.hidden
  @EndUserText.label: 'Overdraft Amount in Trans Crcy'
  Utilization.FcltyOvrdrftAmtInTransCrcy,

  @Consumption.hidden: true
  Utilization.DisplayCurrency,

  @Semantics.amount.currencyCode: 'DisplayCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Credit Line in Dsp Crcy'
  Utilization.TotalAmountInDisplayCrcy,

  @Semantics.amount.currencyCode: 'DisplayCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Utilization Amount in Dsp Crcy'
  Utilization.UtilizedAmountInDisplayCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Available Amount in Dsp Crcy'
  Utilization.AvailableAmountInDisplayCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Overdraft Amount in Dsp Crcy'
  Utilization.FcltyOvrdrftAmtInDisplayCrcy,

  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.decimals:2
  @EndUserText.label: 'Utilization Rate (%)'
  cast(case when $projection.utilizedamountindisplaycrcy < abap.decfloat34'0'
             then abap.decfloat34'0'
             else curr_to_decfloat_amount( UtilizedAmountInDisplayCrcy ) * abap.decfloat34'100.00' / curr_to_decfloat_amount( TotalAmountInDisplayCrcy )
  end as ftr_utilize_ratio )       as CreditLineUtilizationRatio,

  @AnalyticsDetails.query.axis: #COLUMNS
  @Aggregation.default: #FORMULA
  @AnalyticsDetails.query.decimals:2
  @EndUserText.label: 'Underutilization Rate (%)'
  cast(case when $projection.utilizedamountindisplaycrcy > $projection.totalamountindisplaycrcy
               then abap.decfloat34'0'
               else $projection.availableamountindisplaycrcy * abap.decfloat34'100.00' / curr_to_decfloat_amount( TotalAmountInDisplayCrcy )
   end as ftr_underutilize_ratio ) as CrdtLineUnderUtilizationRatio,

  @AnalyticsDetails.query.axis: #FREE
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 90
  @UI.textArrangement: #TEXT_ONLY
  Utilization.FcltyTermEndExceededIsAllowed
}
where
      Utilization.FacilityAuthorizedCompanyCode = $parameters.P_FcltyAuthorizedCompanyCode
  and Utilization.FcltyAuthorizedTransacCrcy    = $parameters.P_FcltyAuthorizedTransacCrcy
  and Utilization.FcltyAuthzdBusinessPartner    = $parameters.P_FcltyAuthzdBusinessPartner
  and Utilization.FacilityAuthorizedProductType = $parameters.P_FcltyAuthorizedProductType
  and Utilization.FcltyAuthzdTransactionType    = $parameters.P_FcltyAuthzdTransactionType
```
