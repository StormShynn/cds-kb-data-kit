---
name: C_CREDITACCTWITHTODOQUERY
description: "This CDS view retrieves information related to business partners in SAP Credit Management, such as the criticality of the business partner, if a resubmission date is set, or if a credit limit request exists. This CDS view provides the data to answer the following business questions: What is the criticality of a business partner? Does a resubmission date exist for the business partner? Does a credit limit request exist for the business partner? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY')/$value
semantic_en: "This CDS view retrieves information related to business partners in SAP Credit Management, such as the criticality of the business partner, if a resubmission date is set, or if a credit limit request exists. This CDS view provides the data to answer the following business questions: What is the criticality of a business partner? Does a resubmission date exist for the business partner? Does a credit limit request exist for the business partner? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Account With ToDo Query — CDS view tiêu dùng dựa trên I_CreditAcctWithToDoCube."
keywords:
  - "credit"
  - "account"
  - "with"
  - "todo"
  - "query"
  - "business"
  - "partner"
  - "segment"
  - "risk"
  - "class"
  - "crdt"
  - "mgmt"
  - "group"
  - "analyst"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
  - account
---
# C_CREDITACCTWITHTODOQUERY

**This CDS view retrieves information related to business partners in SAP Credit Management, such as the criticality of the business partner, if a resubmission date is set, or if a credit limit request exists. This CDS view provides the data to answer the following business questions: What is the criticality of a business partner? Does a resubmission date exist for the business partner? Does a credit limit request exist for the business partner? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` | ✓ | |  |  | `CHAR(10)` | Credit Segment |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
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
| `CreditLimitUtilizationPct` |  | |  | `'CASE WHEN CustomerCreditExposureAmount = 0 THEN 0 ELSE CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0 THEN NDIV0(CustomerCreditExposureAmount / CustomerCreditLimitAmount) *100 ELSE 9999999 END END' 1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCTWITHTODOQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCRDTACCTTODOQ'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@EndUserText.label: 'Credit Account With ToDo Query'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_CreditAcctWithToDoQuery
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
  as select from I_CreditAcctWithToDoCube
                 (P_ExchangeRateType : $parameters.P_ExchangeRateType,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ReadLineItem : $parameters.P_ReadLineItem,
                  P_KeyDate : $parameters.P_KeyDate
                 )
{
  key BusinessPartner,
  key CreditSegment,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CreditRiskClass,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CrdtMgmtBusinessPartnerGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CreditAnalyst,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Country,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Region,

      //      @Semantics.currencyCode: true
      DisplayCurrency,

      //      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CustomerCreditExposureAmount,

      //      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CustomerCreditLimitAmount,

      CreditAccountResubmissionDate,
      BusinessPartnerIsCritical,
      CreditLimitIsZero,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CreditAccountBlockReason,

      NumberOfCreditDecisionDocs,
      NumberOfCreditLimitRequests,
      NumberOfResubmissions,

      BPHasCreditDecisionDocument,
      BPHasCreditLimitRequest,
      BPHasResubmission,

      //  CreditLimitUtilizationPct,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Credit Limit Used %'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula:
        'CASE WHEN CustomerCreditExposureAmount = 0 THEN 0 ELSE
          CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0
           THEN NDIV0(CustomerCreditExposureAmount / CustomerCreditLimitAmount) *100
           ELSE 9999999
          END
         END'
      1 as CreditLimitUtilizationPct
}
```
