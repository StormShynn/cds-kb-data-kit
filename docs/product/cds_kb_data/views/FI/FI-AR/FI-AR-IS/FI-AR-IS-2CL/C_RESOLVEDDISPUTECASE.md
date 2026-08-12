---
name: C_RESOLVEDDISPUTECASE
description: "This CDS view provides details of solved dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been resolved in the current month, in the last month, and in the current year, and what is the solved amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESOLVEDDISPUTECASE')/$value
semantic_en: "This CDS view provides details of solved dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been resolved in the current month, in the last month, and in the current year, and what is the solved amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Resolved Dispute Case — CDS view tiêu dùng dựa trên I_ResolvedDisputeCase."
keywords:
  - "resolved"
  - "dispute"
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
  - bo:salesorder
---
# C_RESOLVEDDISPUTECASE

**This CDS view provides details of solved dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been resolved in the current month, in the last month, and in the current year, and what is the solved amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESOLVEDDISPUTECASE')/$value) |

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
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CaseClosingDate` |  | |  |  | `DATS(8)` | Closed On |
| `IsSolvedCurrentYear` |  | |  |  | `INT4(10)` | Solved in current year |
| `IsSolvedCurrentMonth` |  | |  |  | `INT4(10)` | Solved in current month |
| `IsSolvedLastMonth` |  | |  |  | `INT4(10)` | Solved in Last Month |
| `IsSolvedLastQuarter` |  | |  |  | `INT4(10)` | Solved in Last Quarter |
| `IsSolvedLast12Months` |  | |  |  | `INT4(10)` | Solved in last 12 months |
| `Last12MonthsResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Last 12 Months for solving Dispute Cases |
| `CurrentMonthResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Current Month for solving Dispute Cases |
| `LastMonthResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Last Month for solving Dispute Cases |
| `CurrentYearResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Current Year for solving Dispute Cases |
| `LastQuarterResolvingDays` |  | |  |  | `INT4(10)` | Number of Days in Last Quarter for solving Dispute Cases |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `Last12MnthsSlvdAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount in Last 12 Months |
| `CurMonthSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount Current Month |
| `LastMonthSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount In Last Month |
| `CurYearSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount Current Year |
| `LastQuartSolvedAmtInDspCrcy` |  | |  |  | `CURR(23)` | Solved Amount In Last Quarter |
| `Last12MonthsAvgReslnDays` |  | |  | `1` | `INT1(3)` |  |
| `CurrentMonthAvgReslnDays` |  | |  | `1` | `INT1(3)` |  |
| `LastMonthAvgReslnDays` |  | |  | `1` | `INT1(3)` |  |
| `CurrentYearAvgReslnDays` |  | |  | `1` | `INT1(3)` |  |
| `LastQuarterAvgReslnDays` |  | |  | `1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESOLVEDDISPUTECASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RESOLVEDDISPUTECASE')/$value)*

```abap
@EndUserText.label: 'Resolved Dispute Case'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'CRSLVDDISPCASE'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics.query: true
@OData.publish: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_ResolvedDisputeCase
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

  as select from I_ResolvedDisputeCase
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

  //  @Consumption.valueHelpDefinition: [{ entity: { name:    'I_BusinessUserVH',
  //                                                 element: 'UserID' } }]
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

//  @Consumption.filter.selectionType: #INTERVAL
  CaseCreationDate,
  CaseClosingDate,
  //
  //    CurrentYear,
  //    CurrentMonth,
  //    CurrentQuarter,
  //    LastQuarter,
  //
  //    CaseClosingYear,
  //    CaseClosingMonth,
  //    CaseClosingQuarter,

  //  Flag solved in period
  //  ---------------------
  IsSolvedCurrentYear,
  IsSolvedCurrentMonth,
  IsSolvedLastMonth,
  IsSolvedLastQuarter,
  IsSolvedLast12Months,

  //  Number of resolving days in period
  //  ----------------------------------
  Last12MonthsResolvingDays,
  CurrentMonthResolvingDays,
  LastMonthResolvingDays,
  CurrentYearResolvingDays,
  LastQuarterResolvingDays,

  //  Solved Amounts in period
  //  ----------------------
  DisplayCurrency,
  Last12MnthsSlvdAmtInDspCrcy,
  CurMonthSolvedAmtInDspCrcy,
  LastMonthSolvedAmtInDspCrcy,
  CurYearSolvedAmtInDspCrcy,
  LastQuartSolvedAmtInDspCrcy,


  //  Case Average Resolving days
  //  ---------------------------
  //  Average resolution days in last 12 months
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Avg Resolv Days last 12 Months'
  @AnalyticsDetails.query.decimals: 0
  @AnalyticsDetails.query.formula: 'NDIV0( Last12MonthsResolvingDays / IsSolvedLast12Months )'
  1                                                                   as Last12MonthsAvgReslnDays,
  //
  //  Average resolution days current months
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Avg Resolv Days Current Month'
  @AnalyticsDetails.query.decimals: 0
  @AnalyticsDetails.query.formula: 'NDIV0( CurrentMonthResolvingDays / IsSolvedCurrentMonth )'
  1                                                                   as CurrentMonthAvgReslnDays,

  //  Average resolution days last month
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Avg Resolv Days Last Month'
  @AnalyticsDetails.query.decimals: 0
  @AnalyticsDetails.query.formula: 'NDIV0( LastMonthResolvingDays / IsSolvedLastMonth )'
  1                                                                   as LastMonthAvgReslnDays,

  //  Average resolution days current year
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Avg Resolv Days Current Year'
  @AnalyticsDetails.query.decimals: 0
  @AnalyticsDetails.query.formula: 'NDIV0( CurrentYearResolvingDays / IsSolvedCurrentYear )'
  1                                                                   as CurrentYearAvgReslnDays,

  //  Average resolution days last quarter
  @DefaultAggregation: #FORMULA
  @EndUserText.label: 'Avg Resolv Days Last Quarter'
  @AnalyticsDetails.query.decimals: 0
  @AnalyticsDetails.query.formula: 'NDIV0( LastQuarterResolvingDays / IsSolvedLastQuarter )'
  1                                                                   as LastQuarterAvgReslnDays
};
```
