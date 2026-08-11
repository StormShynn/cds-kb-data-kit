---
name: C_CREDITLIMITREQUESTQUERY
description: "This CDS view retrieves details for a credit limit request in SAP Credit Management. This CDS view provides the data to answer the following business questions: When and by whom was credit limit request created? Who is the processor and the responsible person? What is the planned close date? What is the requested limit amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLIMITREQUESTQUERY')/$value
semantic_en: "This CDS view retrieves details for a credit limit request in SAP Credit Management. This CDS view provides the data to answer the following business questions: When and by whom was credit limit request created? Who is the processor and the responsible person? What is the planned close date? What is the requested limit amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Limit Request Query — CDS view tiêu dùng dựa trên I_CreditLimitRequestCube."
keywords:
  - "credit"
  - "limit"
  - "request"
  - "query"
  - "case"
  - "business"
  - "partner"
  - "segment"
  - "country"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
  - plan
---
# C_CREDITLIMITREQUESTQUERY

**This CDS view retrieves details for a credit limit request in SAP Credit Management. This CDS view provides the data to answer the following business questions: When and by whom was credit limit request created? Who is the processor and the responsible person? What is the planned close date? What is the requested limit amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLIMITREQUESTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUUID` | ✓ | |  |  | `CHAR(32)` | UUID in Character Format |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `CaseCreatedBy` |  | |  |  | `CHAR(12)` | Created By |
| `CaseLastChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `CaseClosedBy` |  | |  |  | `CHAR(12)` | Closed by User |
| `CaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseStatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseSystemStatus` |  | |  |  | `CHAR(3)` | Case: System Status |
| `CaseStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `CaseEscalationReason` |  | |  |  | `CHAR(2)` | Reason for Escalation |
| `CaseCategory` |  | |  |  | `CHAR(4)` | Category |
| `CreditLimitUtilizationPct` |  | |  |  | `DEC(5)` | Credit Limit Utilization in Percent |
| `BusinessPartnerRating` |  | |  |  | `CHAR(10)` | Score |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `NumberOfCreditLimitRequests` |  | |  |  | `INT4(10)` | Number of Credit Limit Requests |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CaseLastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CaseClosingDate` |  | |  |  | `DATS(8)` | Closed On |
| `CasePlannedCloseDate` |  | |  |  | `DATS(8)` | Planned Close Date |
| `NmbrOfDaysPlndClsDateExceeded` |  | |  |  | `INT4(10)` | Number of Days After Planned Closing Date |
| `CaseIsClosed` |  | |  |  | `CHAR(1)` | Case is Closed |
| `CreditLimitIsApproved` |  | |  |  | `CHAR(1)` | Credit Limit Is Approved |
| `CrdtLmtReqdIsEqualCrdtLmtAprvd` |  | |  |  | `CHAR(1)` | Requested Limit Vs. Approved Limit |
| `CasePlannedCloseDateIsExceeded` |  | |  |  | `CHAR(1)` | Planned Close Date is Exceeded |
| `DisplayCurrency` |  | |  | `:P_DisplayCurrency` | `CUKY(5)` |  |
| `CreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CreditLimitRequestedAmount` |  | |  |  | `CURR(23)` | Requested Credit Limit |
| `CreditLimitApprovedAmount` |  | |  |  | `CURR(23)` | Approved Credit Limit |
| `ExpectedSalesAmount` |  | |  |  | `CURR(15)` | Expected Sales Revenue |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLIMITREQUESTQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLIMITREQUESTQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCRDTLIMITREQSTQ'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@EndUserText.label: 'Credit Limit Request Query'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_CreditLimitRequestQuery
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr
  as select from I_CreditLimitRequestCube
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType
                 )
{
  key CaseUUID,
      CaseID,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusinessPartner,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CreditSegment,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Country,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Region,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CaseProcessor,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CaseCreatedBy,
      CaseLastChangedBy,
      CaseClosedBy,
      CaseReason,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CaseType,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CaseStatusProfile,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CaseSystemStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT      
      CaseStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CasePriority,
      //      @AnalyticsDetails.query.display: #KEY_TEXT
      CaseEscalationReason,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CaseCategory,
      CreditLimitUtilizationPct,
      BusinessPartnerRating,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CreditRiskClass,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CrdtMgmtBusinessPartnerGroup,
      NumberOfCreditLimitRequests,
      CaseCreationDate,
      CaseLastChangeDate,
      CaseClosingDate,
      CasePlannedCloseDate,
      //      TodayDate,
      //      ProcessingDays,
      NmbrOfDaysPlndClsDateExceeded,
      CaseIsClosed,
      CreditLimitIsApproved,
      // Indicator: credit limit requested amount is equal to credit limit approved amount
      CrdtLmtReqdIsEqualCrdtLmtAprvd,
      CasePlannedCloseDateIsExceeded,

      //      DisplayCurrency,
      :P_DisplayCurrency as DisplayCurrency,
      CreditLimitAmount,
      CreditLimitRequestedAmount,
      CreditLimitApprovedAmount,
      ExpectedSalesAmount,
      CustomerCreditExposureAmount
}
```
