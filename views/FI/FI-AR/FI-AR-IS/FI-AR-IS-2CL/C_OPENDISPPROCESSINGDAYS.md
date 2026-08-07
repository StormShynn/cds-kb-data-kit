---
name: C_OPENDISPPROCESSINGDAYS
description: This CDS view provides number of processing days of open dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: For how many days are dispute cases processed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENDISPPROCESSINGDAYS')/$value
semantic_en: This CDS view provides number of processing days of open dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: For how many days are dispute cases processed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Open Dispute Processing Days — CDS view tiêu dùng dựa trên I_OpenDisputeProcessingTime.
keywords:
  - open
  - dispute
  - processing
  - days
  - case
  - company
  - code
  - name
  - customer
tags:
  - FI
  - bo:companycode
  - component:FI-AR-IS-2CL
  - consumption-view
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
---
# C_OPENDISPPROCESSINGDAYS

**This CDS view provides number of processing days of open dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: For how many days are dispute cases processed? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENDISPPROCESSINGDAYS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | | `_Company` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `DisputeCaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `DisputeCaseProcessorFullName` |  | | `_CaseProcessor` | `FullName` | `CHAR(80)` | Full Name of Person |
| `DisputeCaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `DisputeCaseReasonName` |  | |  | `_CaseReason._Text[1:Language = :P_Language].CaseReasonName` | `CHAR(60)` | Text Field of Length 60 |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseTypeName` |  | |  | `_CaseType._Text[1:Language = :P_Language].CaseTypeName` | `CHAR(40)` | Short Text for Case Type |
| `DisputeCaseRootCause` |  | |  |  | `CHAR(4)` | Root Cause Code |
| `CaseRootCauseDescription` |  | |  | `_RootCause._Text[1:Language = :P_Language].CaseRootCauseDescription` | `CHAR(60)` | Root Cause Code |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | | `_CaseCoordinator` | `FullName` | `CHAR(80)` | Full Name of Person |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `StatusName` |  | |  | `_CaseStatus._Text[1:Language = :P_Language].StatusName` | `CHAR(40)` | Case: System Status Description |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `DisputeCasePriorityName` |  | |  | `_Prio._Text[1:Language = :P_Language].CasePriorityName` | `CHAR(40)` | Text, 40 Characters Long |
| `CaseProcessingStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseProcessingStatusName` |  | |  | `_StatusProfile._Text[1:Language = :P_Language].CaseStatusName` | `CHAR(40)` | Case: Status Description |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `Interval1NumberOfCases` |  | |  |  | `INT4(10)` | Case is Processed Since Today |
| `Interval2NumberOfCases` |  | |  |  | `INT4(10)` | Case is Processed for 1-2 Days |
| `Interval3NumberOfCases` |  | |  |  | `INT4(10)` | Case is Processed for 3-5 Days |
| `Interval4NumberOfCases` |  | |  |  | `INT4(10)` | Case is Processed for 6-10 Days |
| `Interval5NumberOfCases` |  | |  |  | `INT4(10)` | Case is Processed for 11-20 Days |
| `Interval6NumberOfCases` |  | |  |  | `INT4(10)` | Case is Processed for 21-50 Days |
| `Interval7NumberOfCases` |  | |  |  | `INT4(10)` | Case is Processed for More than 50 Days |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `DisputedAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Current Disputed Amount in Display Currency |
| `NumberOfDisputeCases` |  | |  |  | `INT4(10)` | Number of Dispute Cases |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `ProcessingDays` |  | |  |  | `INT4(10)` | Processing Days of Open Disputes |
| `ProcessingDaysText` |  | |  |  | `CHAR(10)` | Processing Time of a Claification Case in Days |
| `OpenDisputesAvgProcgDays` |  | |  | `1` | `INT1(3)` |  |
| `Interval1DisputedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Disputed Amount Since Today |
| `Interval2DisputedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Disputed Amount for 1-2 Days |
| `Interval3DisputedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Disputed Amount for 3-5 Days |
| `Interval4DisputedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Disputed Amount for 6-10 Days |
| `Interval5DisputedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Disputed Amount for 11-20 Days |
| `Interval6DisputedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Disputed Amount for 21-50 Days |
| `Interval7DisputedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Disputed Amount for More than 50 Days |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENDISPPROCESSINGDAYS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENDISPPROCESSINGDAYS')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Open Dispute Processing Days'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'COPNDISPPRCDAYS'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics.query: true
@OData.publish: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_OpenDispProcessingDays
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language         : sylangu,

    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency,
    
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType' , element: 'ExchangeRateType' }
                                      }]    
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr

  as select from I_OpenDisputeProcessingTime
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType
                 )
{
  DisputeCaseUUID,
  CaseID,
  CompanyCode,
  _Company.CompanyCodeName                                            as CompanyCodeName,

  Customer,
  _Customer.CustomerName                                              as CustomerName,

  DisputeCaseProcessor,
  _CaseProcessor.FullName                                             as DisputeCaseProcessorFullName,

  DisputeCaseReason,
  _CaseReason._Text[1:Language = :P_Language].CaseReasonName          as DisputeCaseReasonName,

  CaseType,
  _CaseType._Text[1:Language = :P_Language].CaseTypeName              as CaseTypeName,

  DisputeCaseRootCause,
  _RootCause._Text[1:Language = :P_Language].CaseRootCauseDescription as CaseRootCauseDescription,

  DisputeCaseCoordinator,
  _CaseCoordinator.FullName                                           as DsputCaseCoordinatorFullName,

  Status,
  _CaseStatus._Text[1:Language = :P_Language].StatusName              as StatusName,

  DisputeCasePriority,
  _Prio._Text[1:Language = :P_Language].CasePriorityName              as DisputeCasePriorityName,

  //  StatusProfile,

  CaseProcessingStatus,
  _StatusProfile._Text[1:Language = :P_Language].CaseStatusName       as CaseProcessingStatusName,

  CustomerBasicAuthorizationGrp,
  CustomerAccountGroup,

  //  $parameters.P_DisplayCurrency as DisplayCurrency,

  Interval1NumberOfCases,
  Interval2NumberOfCases,
  Interval3NumberOfCases,
  Interval4NumberOfCases,
  Interval5NumberOfCases,
  Interval6NumberOfCases,
  Interval7NumberOfCases,

  DisplayCurrency,
  DisputedAmountInDisplayCrcy,

  NumberOfDisputeCases,

//  @Consumption.filter.selectionType: #INTERVAL
  CaseCreationDate,

  ProcessingDays,

  ProcessingDaysText,

  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Avg Processing Days of Open Disputes'
  @AnalyticsDetails.query.decimals: 0
  @AnalyticsDetails.query.formula: 'NDIV0( ProcessingDays  / NumberOfDisputeCases )'
  1                                                                   as OpenDisputesAvgProcgDays,

  //    Disputed Amount since today / 1. interval
  Interval1DisputedAmtInDspCrcy,

  //    Disputed Amount for 1-2 days / 2. interval
  Interval2DisputedAmtInDspCrcy,

  //    Disputed Amount for 3-5 days / 3. interval
  Interval3DisputedAmtInDspCrcy,

  //    Disputed Amount for 6-10 days / 4. interval
  Interval4DisputedAmtInDspCrcy,

  //    Disputed Amount for 11-20 days / 5. interval
  Interval5DisputedAmtInDspCrcy,

  //    Disputed Amount for 21-50 days / 6. interval
  Interval6DisputedAmtInDspCrcy,

  //    Amount open since more than 50 days / 7. interval
  Interval7DisputedAmtInDspCrcy
};
```
