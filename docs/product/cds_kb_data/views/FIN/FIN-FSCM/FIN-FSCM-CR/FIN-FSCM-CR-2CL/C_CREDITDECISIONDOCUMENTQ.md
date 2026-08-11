---
name: C_CREDITDECISIONDOCUMENTQ
description: "This CDS view retrieves details about a credit decision document in SAP Credit Management. This CDS view provides the data to answer the following business questions: When and by whom was credit decision document created? Who is the processor and the responsible person? What is the planned close date? What is the related sales order? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITDECISIONDOCUMENTQ')/$value
semantic_en: "This CDS view retrieves details about a credit decision document in SAP Credit Management. This CDS view provides the data to answer the following business questions: When and by whom was credit decision document created? Who is the processor and the responsible person? What is the planned close date? What is the related sales order? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Decision Document Query — CDS view tiêu dùng dựa trên I_CreditDecisionDocumentC."
keywords:
  - "credit"
  - "decision"
  - "document"
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
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
  - order
  - plan
  - sales-order
---
# C_CREDITDECISIONDOCUMENTQ

**This CDS view retrieves details about a credit decision document in SAP Credit Management. This CDS view provides the data to answer the following business questions: When and by whom was credit decision document created? Who is the processor and the responsible person? What is the planned close date? What is the related sales order? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITDECISIONDOCUMENTQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUUID` | ✓ | |  |  | `CHAR(32)` | UUID in Character Format |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CaseProcessor` |  | |  |  | `CHAR(12)` | Credit Analyst |
| `CaseResponsible` |  | |  |  | `CHAR(12)` | Person Responsible |
| `CaseCreatedBy` |  | |  |  | `CHAR(12)` | Created By |
| `CaseLastChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `CaseClosedBy` |  | |  |  | `CHAR(12)` | Closed by User |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class at Time of Credit Decision |
| `CaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseStatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseSystemStatus` |  | |  |  | `CHAR(3)` | Case: System Status |
| `CaseStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `CaseEscalationReason` |  | |  |  | `CHAR(2)` | Reason for Escalation |
| `CaseCategory` |  | |  |  | `CHAR(4)` | Category |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `NumberOfCreditDecisionDocs` |  | |  |  | `INT4(10)` | Number of Documented Credit Decisions |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CaseLastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CaseClosingDate` |  | |  |  | `DATS(8)` | Closed On |
| `CasePlannedCloseDate` |  | |  |  | `DATS(8)` | Planned Close Date |
| `NmbrOfDaysPlndClsDateExceeded` |  | |  |  | `INT4(10)` | Number of Days After Planned Closing Date |
| `CaseIsClosed` |  | |  |  | `CHAR(1)` | Case is Closed |
| `CasePlannedCloseDateIsExceeded` |  | |  |  | `CHAR(1)` | Planned Close Date is Exceeded |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `OpenCreditAmount` |  | |  |  | `CURR(15)` | Open Credit Amount |
| `CheckedCreditRiskAmount` |  | |  |  | `CURR(15)` | Amount for Which the Credit Check Was Performed |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
| `CreditDecisionObjectType` |  | |  |  | `CHAR(10)` | Type of Document with Credit Block |
| `CreditDecisionSalesDocument` |  | |  |  | `CHAR(10)` | Sales and Distribution Document Number |
| `SalesDocumentCreditStatus` |  | |  |  | `CHAR(1)` | Status of Document with Credit Block |
| `CreditDecisionReqUTCDateTime` |  | |  |  | `DEC(15)` | Timestamp |
| `CreditDecisionFirstApprover` |  | |  |  | `CHAR(12)` | Approver |
| `CreditDecisionSecondApprover` |  | |  |  | `CHAR(12)` | Second Approver |
| `CreditDecisionFirstApprvlSts` |  | |  |  | `CHAR(1)` | Status of First Approval |
| `CreditDecisionSecondApprvlSts` |  | |  |  | `CHAR(1)` | Status of Second Approval |
| `CreditDecisionCompletedByUser` |  | |  |  | `CHAR(12)` | User Who Released/Rejected the Sales Document |
| `CrdtDcsnApprvlProcIsOverruled` |  | |  |  | `CHAR(1)` | Approval Process Not Adhered To |
| `StaticLmtUtilznCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Static Check of Credit Limit Utilization Failed |
| `MaxDocAmountCreditChkIsFailed` |  | |  |  | `CHAR(1)` | Check for Maximum Document Value Failed |
| `DynLimitUtilznCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Dynamic Check of Credit Limit Utilization Failed |
| `MaxDunningLevelCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Maximum Dunning Level Failed |
| `OldestOpenItemCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check for Oldest Open Item Failed |
| `DaysSlsOutStdgCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check of Days Sales Outstanding (DSO) Failed |
| `OtherCreditCheckIsFailed` |  | |  |  | `CHAR(1)` | Other Checks Failed |
| `OverdueOpenItemCrdtChkIsFailed` |  | |  |  | `CHAR(1)` | Check for Overdue Open Items Failed |
| `CreditLimitUtilizationPct` |  | |  | `'CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0 THEN NDIV0(CustomerCreditExposureAmount / CustomerCreditLimitAmount) *100 ELSE 9999999 END' 1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITDECISIONDOCUMENTQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITDECISIONDOCUMENTQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCRDTDCSNDOCQ'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@EndUserText.label: 'Credit Decision Document Query'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_CreditDecisionDocumentQ
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,
    @Consumption.defaultValue: 'Y' // Read also line items from BSEG
    P_ReadLineItem     : read_fiar_lineitems
  as select from I_CreditDecisionDocumentC
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType,
                 P_ReadLineItem : $parameters.P_ReadLineItem
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
      CaseResponsible,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CaseCreatedBy,
      CaseLastChangedBy,
      CaseClosedBy,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CreditRiskClass,
      @AnalyticsDetails.query.display: #KEY_TEXT
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
      @AnalyticsDetails.query.display: #KEY_TEXT
      CrdtMgmtBusinessPartnerGroup,
      NumberOfCreditDecisionDocs,
      CaseCreationDate,
      CaseLastChangeDate,
      CaseClosingDate,
      CasePlannedCloseDate,
      NmbrOfDaysPlndClsDateExceeded,
      CaseIsClosed,
      CasePlannedCloseDateIsExceeded,

      DisplayCurrency,
      OpenCreditAmount,
      CheckedCreditRiskAmount,
      CustomerCreditLimitAmount,
      CustomerCreditExposureAmount,

      CreditDecisionObjectType,
      CreditDecisionSalesDocument,
      SalesDocumentCreditStatus,
      CreditDecisionReqUTCDateTime,
      CreditDecisionFirstApprover,
      CreditDecisionSecondApprover,
      CreditDecisionFirstApprvlSts,
      CreditDecisionSecondApprvlSts,
      CreditDecisionCompletedByUser,
      CrdtDcsnApprvlProcIsOverruled,

      StaticLmtUtilznCrdtChkIsFailed,
      MaxDocAmountCreditChkIsFailed,
      DynLimitUtilznCrdtChkIsFailed,
      MaxDunningLevelCrdtChkIsFailed,
      OldestOpenItemCrdtChkIsFailed,
      DaysSlsOutStdgCrdtChkIsFailed,
      OtherCreditCheckIsFailed,
      OverdueOpenItemCrdtChkIsFailed,

      //  CreditLimitUtilizationPct,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Credit Limit Used %'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula:
        'CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0
           THEN NDIV0(CustomerCreditExposureAmount / CustomerCreditLimitAmount) *100
           ELSE 9999999
        END'
      1                  as CreditLimitUtilizationPct

}
```
