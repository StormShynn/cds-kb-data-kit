---
name: C_CREDITACCTWITHTODOQUERY_2
description: "This CDS view is designed to provide analytical insights into credit accounts, specifically focusing on credit exposure, credit limits, and related activities such as credit decision documents and resubmissions. It allows users to analyze credit data with respect to various parameters like exchange rate type, display currency, and key date. This CDS view provides the data to answer the following business questions: What is the credit exposure and credit limit for each business partner and credit segment? How much of the credit limit is utilized by each business partner? Which business partners have critical credit statuses or zero credit limits? What are the reasons for any credit account blocks? How many credit decision documents, credit limit requests, and resubmissions exist for each business partner? Are there any business partners with pending credit decision documents, credit limit requests, or resubmissions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY_2')/$value
semantic_en: "This CDS view is designed to provide analytical insights into credit accounts, specifically focusing on credit exposure, credit limits, and related activities such as credit decision documents and resubmissions. It allows users to analyze credit data with respect to various parameters like exchange rate type, display currency, and key date. This CDS view provides the data to answer the following business questions: What is the credit exposure and credit limit for each business partner and credit segment? How much of the credit limit is utilized by each business partner? Which business partners have critical credit statuses or zero credit limits? What are the reasons for any credit account blocks? How many credit decision documents, credit limit requests, and resubmissions exist for each business partner? Are there any business partners with pending credit decision documents, credit limit requests, or resubmissions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Account With ToDo V2 Query — CDS view tiêu dùng dựa trên Credit Account With ToDo V2 Query."
keywords:
  - "credit"
  - "account"
  - "with"
  - "todo"
  - "query"
  - "business"
  - "partner"
  - "segment"
  - "crdt"
  - "mgmt"
  - "group"
  - "risk"
  - "class"
  - "analyst"
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
---
# C_CREDITACCTWITHTODOQUERY_2

**This CDS view is designed to provide analytical insights into credit accounts, specifically focusing on credit exposure, credit limits, and related activities such as credit decision documents and resubmissions. It allows users to analyze credit data with respect to various parameters like exchange rate type, display currency, and key date. This CDS view provides the data to answer the following business questions: What is the credit exposure and credit limit for each business partner and credit segment? How much of the credit limit is utilized by each business partner? Which business partners have critical credit statuses or zero credit limits? What are the reasons for any credit account blocks? How many credit decision documents, credit limit requests, and resubmissions exist for each business partner? Are there any business partners with pending credit decision documents, credit limit requests, or resubmissions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CreditAnalyst` |  | |  |  | `CHAR(10)` | Credit Analyst |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CreditAccountResubmissionDate` |  | |  |  | `DATS(8)` | Resubmission Date |
| `BusinessPartnerIsCritical` |  | |  |  | `CHAR(1)` | Special Attention Required |
| `CreditLimitIsZero` |  | |  |  | `CHAR(1)` | Credit Limit is Zero |
| `CreditAccountBlockReason` |  | |  |  | `CHAR(2)` | Credit Account Blocking Reason |
| `NumberOfCreditDecisionDocs` |  | |  |  | `INT4(10)` | Number of Documented Credit Decisions |
| `NumberOfCreditLimitRequests` |  | |  |  | `INT4(10)` | Number of Credit Limit Requests |
| `NumberOfResubmissions` |  | |  |  | `INT4(10)` | Number of Resubmisisons |
| `BPHasCreditDecisionDocument` |  | |  |  | `CHAR(1)` | Documented Credit Decision exists |
| `BPHasCreditLimitRequest` |  | |  |  | `CHAR(1)` | Credit Limit Request exists |
| `BPHasResubmission` |  | |  |  | `CHAR(1)` | Resubmission exists |
| `CreditLimitUtilizationPct` |  | |  | `cast( ratio_of( portion => curr_to_decfloat_amount( CustomerCreditExposureAmount ), total => curr_to_decfloat_amount( CustomerCreditLimitAmount ) ) * 100 as ukm_limit_change_in_percent )` | `DEC(10)` | Credit Limit Change (in Percent) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY_2')/$value)*

```abap
@EndUserText.label: 'Credit Account With ToDo V2 Query'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType:{
                          serviceQuality: #D,
                          sizeCategory: #XL,
                          dataClass: #MIXED },
                modelingPattern: #ANALYTICAL_QUERY,             
                supportedCapabilities: [ #ANALYTICAL_QUERY ] }
@VDM.viewType: #CONSUMPTION
@UI: { textArrangement: #TEXT_LAST }

define transient view entity C_CreditAcctWithToDoQuery_2
  provider contract analytical_query
  with parameters
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'Y' // Read also line items from BSEG
    P_ReadLineItem     : read_fiar_lineitems,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate
  as projection on I_CreditAcctWithToDoCube_2
                   ( P_ExchangeRateType : $parameters.P_ExchangeRateType,
                   P_DisplayCurrency : $parameters.P_DisplayCurrency,
                   P_ReadLineItem : $parameters.P_ReadLineItem,
                   P_KeyDate : $parameters.P_KeyDate
                   )
{
  BusinessPartner,
  CreditSegment,
  CrdtMgmtBusinessPartnerGroup,
  CreditRiskClass,
  CreditAnalyst,
  Country,
  Region,

  DisplayCurrency,

  @Semantics.amount.currencyCode: 'DisplayCurrency'
  CustomerCreditExposureAmount,

  @Semantics.amount.currencyCode: 'DisplayCurrency'
  CustomerCreditLimitAmount,

  CreditAccountResubmissionDate,
  BusinessPartnerIsCritical,
  CreditLimitIsZero,
  CreditAccountBlockReason,

  NumberOfCreditDecisionDocs,
  NumberOfCreditLimitRequests,
  NumberOfResubmissions,

  BPHasCreditDecisionDocument,
  BPHasCreditLimitRequest,
  BPHasResubmission,

  // CreditLimitUtilizationPct,
  @EndUserText.label: 'Credit Limit Used %'
  @AnalyticsDetails.query.decimals: 2
  @Aggregation.default: #FORMULA
  cast( ratio_of( portion => curr_to_decfloat_amount( CustomerCreditExposureAmount ),
        total   => curr_to_decfloat_amount( CustomerCreditLimitAmount ) ) * 100 as ukm_limit_change_in_percent ) as CreditLimitUtilizationPct

}
```
