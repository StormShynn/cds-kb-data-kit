---
name: C_OPENCLOSEDDISPUTECASE
description: "This CDS view provides details about the number and the amount of open and closed dispute cases in SAP Dispute Management for the following time periods: Today, the last 5 days, and the current month. This CDS view provides the data to answer the following business questions: How many dispute cases were created or closed in the last days? What is the new open disputed amount or the solved amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENCLOSEDDISPUTECASE')/$value
semantic_en: "This CDS view provides details about the number and the amount of open and closed dispute cases in SAP Dispute Management for the following time periods: Today, the last 5 days, and the current month. This CDS view provides the data to answer the following business questions: How many dispute cases were created or closed in the last days? What is the new open disputed amount or the solved amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Open and Closed Dispute Cases — CDS view tiêu dùng dựa trên I_OpenClosedDisputeCase."
keywords:
  - "open"
  - "and"
  - "closed"
  - "dispute"
  - "cases"
  - "case"
  - "company"
  - "code"
  - "name"
  - "customer"
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
# C_OPENCLOSEDDISPUTECASE

**This CDS view provides details about the number and the amount of open and closed dispute cases in SAP Dispute Management for the following time periods: Today, the last 5 days, and the current month. This CDS view provides the data to answer the following business questions: How many dispute cases were created or closed in the last days? What is the new open disputed amount or the solved amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENCLOSEDDISPUTECASE')/$value) |

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
| `DisputeCaseRootCause` |  | |  |  | `CHAR(4)` | Root Cause Code |
| `CaseRootCauseDescription` |  | |  | `_RootCause._Text[1:Language = :P_Language].CaseRootCauseDescription` | `CHAR(60)` | Root Cause Code |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | | `_CaseCoordinator` | `FullName` | `CHAR(80)` | Full Name of Person |
| `DisputeCaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `DisputeCaseReasonName` |  | |  | `_CaseReason._Text[1:Language = :P_Language].CaseReasonName` | `CHAR(60)` | Text Field of Length 60 |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `StatusName` |  | |  | `_CaseStatus._Text[1:Language = :P_Language].StatusName` | `CHAR(40)` | Case: System Status Description |
| `CaseProcessingStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseProcessingStatusName` |  | |  | `_StatusProfile._Text[1:Language = :P_Language].CaseStatusName` | `CHAR(40)` | Case: Status Description |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseTypeName` |  | |  | `_CaseType._Text[1:Language = :P_Language].CaseTypeName` | `CHAR(40)` | Short Text for Case Type |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `DisputeCasePriorityName` |  | |  | `_Prio._Text[1:Language = :P_Language].CasePriorityName` | `CHAR(40)` | Text, 40 Characters Long |
| `IsCreatedToday` |  | |  |  | `INT1(3)` | Created today |
| `IsSolvedToday` |  | |  |  | `INT4(10)` | Solved Today |
| `IsCreatedLast5Days` |  | |  |  | `INT1(3)` | Created in Last 5 Days |
| `IsSolvedLast5Days` |  | |  |  | `INT4(10)` | Solved in Last 5 Days |
| `IsCreatedCurrentMonth` |  | |  |  | `INT4(10)` | Created in Current Month |
| `IsSolvedCurrentMonth` |  | |  |  | `INT4(10)` | Solved in current month |
| `TodayCreatedAmtInDspCrcy` |  | |  |  | `CURR(23)` | New Amount, Today |
| `TodaySolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount Solved Today |
| `Last5DaysCrtedAmtInDspCrcy` |  | |  |  | `CURR(23)` | New Amount in Last 5 Days |
| `Last5DaysSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Amount Solved in Last 5 Days |
| `CurMonthCreatedAmtInDspCrcy` |  | |  |  | `CURR(23)` | New Amount, Current Month |
| `CurMonthSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount Current Month |
| `AvgNumberOfDisputeCasesPerDay` |  | |  | `'NDIV0( IsCreatedCurrentMonth / CurrentDay )' 1` | `INT1(3)` |  |
| `TodayNumberOfDisputeCases` |  | |  | `'IsCreatedToday - IsSolvedToday' 1` | `INT1(3)` |  |
| `Last5DaysNumberOfDisputeCases` |  | |  | `'IsCreatedLast5Days - IsSolvedLast5Days' 1` | `INT1(3)` |  |
| `CurMonthNumberOfDisputeCases` |  | |  | `'IsCreatedCurrentMonth - IsSolvedCurrentMonth' 1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENCLOSEDDISPUTECASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENCLOSEDDISPUTECASE')/$value)*

```abap
@EndUserText.label: 'Open and Closed Dispute Cases'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'COPNCLSDDISPCASE'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics.query: true
@OData.publish: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_OpenClosedDisputeCase
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

  as select from I_OpenClosedDisputeCase
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType
                 )
{
  DisputeCaseUUID,
  //  DisputeCaseUUID as CaseGuid,
  CaseID,
  CompanyCode,
  _Company.CompanyCodeName                                            as CompanyCodeName,

  Customer,
  _Customer.CustomerName                                              as CustomerName,

  DisputeCaseProcessor,
  _CaseProcessor.FullName                                             as DisputeCaseProcessorFullName,

  DisputeCaseRootCause,
  _RootCause._Text[1:Language = :P_Language].CaseRootCauseDescription as CaseRootCauseDescription,

  DisputeCaseCoordinator,
  _CaseCoordinator.FullName                                           as DsputCaseCoordinatorFullName,

  DisputeCaseReason,
  _CaseReason._Text[1:Language = :P_Language].CaseReasonName          as DisputeCaseReasonName,

  Status,
  _CaseStatus._Text[1:Language = :P_Language].StatusName              as StatusName,

  //  StatusProfile,

  CaseProcessingStatus,
  _StatusProfile._Text[1:Language = :P_Language].CaseStatusName       as CaseProcessingStatusName,

  CustomerBasicAuthorizationGrp,
  CustomerAccountGroup,

  CaseType,
  _CaseType._Text[1:Language = :P_Language].CaseTypeName              as CaseTypeName,

  DisputeCasePriority,
  _Prio._Text[1:Language = :P_Language].CasePriorityName              as DisputeCasePriorityName,

  //  $parameters.P_DisplayCurrency as DisplayCurrency,

  //  CaseCreationDate,
  //  CaseClosingDate,

  //  Flags created/closed today
  //  --------------------------
  IsCreatedToday,
  IsSolvedToday,

  //  Flags created/closed in last 5 days
  //  -----------------------------------
  IsCreatedLast5Days,
  IsSolvedLast5Days,

  //  Flags created/closed in current month
  //  -------------------------------------
  IsCreatedCurrentMonth,
  IsSolvedCurrentMonth,

  //  Original Amount created/closed today
  //  ------------------------------------
  TodayCreatedAmtInDspCrcy,
  TodaySolvedAmtInDspCrcy,

  // Original Amount created/closed last 5 days
  // ------------------------------------------
  Last5DaysCrtedAmtInDspCrcy,
  Last5DaysSolvedAmtInDspCrcy,

  // Original Amount created/closed current month
  // --------------------------------------------
  CurMonthCreatedAmtInDspCrcy,
  CurMonthSolvedAmtInDspCrcy,


  //  average number of created Disputes per day in current month
  //  ----------------------------------------------------------------------------
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Avg Number Created per Day in Cur Month '
  @AnalyticsDetails.query.decimals: 2
  @AnalyticsDetails.query.formula:
     'NDIV0( IsCreatedCurrentMonth / CurrentDay )'
  1                                                                   as AvgNumberOfDisputeCasesPerDay,

  //  number of Disputes today
  //  ----------------------------------------------------------------------------
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Number of Disputes Today'
  @AnalyticsDetails.query.decimals: 0
  @AnalyticsDetails.query.formula:
     'IsCreatedToday - IsSolvedToday'
  1                                                                   as TodayNumberOfDisputeCases,

  //  number of Disputes last 5 days
  //  ----------------------------------------------------------------------------
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Number of Disputes Last 5 Days'
  @AnalyticsDetails.query.decimals: 0
  @AnalyticsDetails.query.formula:
     'IsCreatedLast5Days - IsSolvedLast5Days'
  1                                                                   as Last5DaysNumberOfDisputeCases,

  //  number of Disputes last 5 days
  //  ----------------------------------------------------------------------------
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Number of Disputes Current Month'
  @AnalyticsDetails.query.decimals: 0
  @AnalyticsDetails.query.formula:
     'IsCreatedCurrentMonth - IsSolvedCurrentMonth'
  1                                                                   as CurMonthNumberOfDisputeCases

}
```
