---
name: I_RESOLVEDDISPUTECASE
description: "This CDS view is designed to provide a comprehensive overview of resolved dispute cases within an organization. It aggregates and presents data related to dispute cases, including their resolution status, processing details, and financial implications over various time periods. The view is structured to support analytical processing and reporting, enabling users to gain insights into the efficiency and effectiveness of dispute resolution processes in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been resolved in the current year, month, and quarter? What are the resolving days for dispute cases over different time periods such as the last 12 months, current month, last month, and current year? What is the total amount of money involved in resolved dispute cases in the display currency for the last 12 months, current month, last month, current year, and last quarter? What are the details of the dispute cases, including customer information, company code, case type, reason, status, priority, and root cause? Who are the processors and coordinators involved in resolving these dispute cases? How does the resolution of dispute cases vary across different customer account groups and authorization groups? What is the trend in dispute case resolution over different periods, and how does it impact the organization's financials? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOLVEDDISPUTECASE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of resolved dispute cases within an organization. It aggregates and presents data related to dispute cases, including their resolution status, processing details, and financial implications over various time periods. The view is structured to support analytical processing and reporting, enabling users to gain insights into the efficiency and effectiveness of dispute resolution processes in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been resolved in the current year, month, and quarter? What are the resolving days for dispute cases over different time periods such as the last 12 months, current month, last month, and current year? What is the total amount of money involved in resolved dispute cases in the display currency for the last 12 months, current month, last month, current year, and last quarter? What are the details of the dispute cases, including customer information, company code, case type, reason, status, priority, and root cause? Who are the processors and coordinators involved in resolving these dispute cases? How does the resolution of dispute cases vary across different customer account groups and authorization groups? What is the trend in dispute case resolution over different periods, and how does it impact the organization's financials? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Resolved Dispute Case - Cube — CDS view giao diện dựa trên P_ResolvedDisputeCase3."
keywords:
  - "resolved"
  - "dispute"
  - "case"
  - "cube"
  - "customer"
  - "company"
  - "code"
  - "account"
  - "group"
tags:
  - FIN
  - account
  - bo:businesspartner
  - component:FIN-FSCM-DM-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - interface-view
  - lob:finance
  - bo:salesorder
---
# I_RESOLVEDDISPUTECASE

**This CDS view is designed to provide a comprehensive overview of resolved dispute cases within an organization. It aggregates and presents data related to dispute cases, including their resolution status, processing details, and financial implications over various time periods. The view is structured to support analytical processing and reporting, enabling users to gain insights into the efficiency and effectiveness of dispute resolution processes in SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been resolved in the current year, month, and quarter? What are the resolving days for dispute cases over different time periods such as the last 12 months, current month, last month, and current year? What is the total amount of money involved in resolved dispute cases in the display currency for the last 12 months, current month, last month, current year, and last quarter? What are the details of the dispute cases, including customer information, company code, case type, reason, status, priority, and root cause? Who are the processors and coordinators involved in resolving these dispute cases? How does the resolution of dispute cases vary across different customer account groups and authorization groups? What is the trend in dispute case resolution over different periods, and how does it impact the organization's financials? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOLVEDDISPUTECASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` | ✓ | |  |  | `CHAR(32)` | UUID in Character Format |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerBasicAuthorizationGrp` |  | | `_Customer` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `DisputeCaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `DisputeCaseProcessorFullName` |  | |  | `cast( DisputeCaseProcessorFullName as farp_processor_full_name preserving type )` | `CHAR(80)` | Full Name of Processor |
| `DisputeCaseReason` |  | |  | `cast( DisputeCaseReason as scmg_reason_code preserving type )` | `CHAR(4)` | Reason for Case |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `DisputeCaseRootCause` |  | |  | `cast( DisputeCaseRootCause as udm_root_ccode preserving type )` | `CHAR(4)` | Root Cause Code |
| `DisputeCaseCoordinator` |  | |  | `cast( DisputeCaseCoordinator as udm_coordinator preserving type )` | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | |  | `cast( DsputCaseCoordinatorFullName as farp_coordinator_full_name preserving type )` | `CHAR(80)` | Fullname of Coordinator |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `StatusProfile` |  | |  | `cast( StatusProfile as scmgstatusprofid preserving type )` | `CHAR(8)` | Case: Status Profile |
| `CaseProcessingStatus` |  | |  | `cast( CaseProcessingStatus as scmgstatusonr preserving type)` | `NUMC(2)` | Case: Status |
| `DisplayCurrency` |  | |  | `cast( DisplayCurrency as disp_curr preserving type )` | `CUKY(5)` | Display Currency |
| `CaseCreationDate` |  | |  | `cast( CaseCreationDate as udm_create_date preserving type )` | `DATS(8)` | Created On |
| `CaseClosingDate` |  | |  | `cast( CaseClosingDate as udm_closing_date preserving type )` | `DATS(8)` | Closed On |
| `CurrentYear` |  | |  | `cast( CurrentYear as currentyear preserving type )` | `CHAR(4)` | Current Year |
| `CurrentMonth` |  | |  | `cast( CurrentMonth as currentmonth preserving type )` | `CHAR(2)` | Current Month |
| `CurrentQuarter` |  | |  | `cast( CurrentQuarter as currentquarter)` | `CHAR(1)` | Current Quarter |
| `LastQuarter` |  | |  | `cast( LastQuarter as lastquarter )` | `CHAR(1)` | Last Quarter |
| `CaseClosingYear` |  | |  | `cast( CaseClosingYear as caseclosingyear preserving type )` | `CHAR(4)` | Closing Year |
| `CaseClosingMonth` |  | |  | `cast( CaseClosingMonth as caseclosingmonth preserving type )` | `CHAR(2)` | Closing Month |
| `CaseClosingQuarter` |  | |  | `cast( CaseClosingQuarter as caseclosingquarter )` | `CHAR(1)` | Closing Quarter |
| `IsSolvedCurrentYear` |  | |  | `cast( IsSolvedCurrentYear as farp_solvedincurrentyear )` | `INT4(10)` | Solved in current year |
| `IsSolvedCurrentMonth` |  | |  | `cast( IsSolvedCurrentMonth as farp_solvedincurrentmonth )` | `INT4(10)` | Solved in current month |
| `IsSolvedLastMonth` |  | |  | `cast( IsSolvedLastMonth as farp_solvedinlastmonth )` | `INT4(10)` | Solved in Last Month |
| `IsSolvedLastQuarter` |  | |  | `cast( IsSolvedLastQuarter as farp_solvedinlastquarter )` | `INT4(10)` | Solved in Last Quarter |
| `IsSolvedLast12Months` |  | |  | `cast( IsSolvedLast12Months as farp_solvedinlast12months)` | `INT4(10)` | Solved in last 12 months |
| `Last12MonthsResolvingDays` |  | |  | `cast( Last12MonthsResolvingDays as farp_last12monthsresolvingdays preserving type )` | `INT4(10)` | Number of Days in Last 12 Months for solving Dispute Cases |
| `CurrentMonthResolvingDays` |  | |  | `cast( CurrentMonthResolvingDays as farp_currentmonthresolvingdays preserving type )` | `INT4(10)` | Number of Days in Current Month for solving Dispute Cases |
| `LastMonthResolvingDays` |  | |  | `cast( LastMonthResolvingDays as farp_lastmonthresolvingdays preserving type )` | `INT4(10)` | Number of Days in Last Month for solving Dispute Cases |
| `CurrentYearResolvingDays` |  | |  | `cast( CurrentYearResolvingDays as farp_currentyearresolvingdays preserving type )` | `INT4(10)` | Number of Days in Current Year for solving Dispute Cases |
| `LastQuarterResolvingDays` |  | |  | `case when IsSolvedLastQuarter = 1 then cast( dats_days_between( CaseCreationDate, CaseClosingDate ) as farp_lastquarterresolvingdays ) else cast( 0 as farp_lastquarterresolvingdays ) end` | `INT4(10)` | Number of Days in Last Quarter for solving Dispute Cases |
| `Last12MnthsSlvdAmtInDspCrcy` |  | |  | `cast( OriginalAmountInDisplayCrcy as farp_solvedamtlast12months )` | `CURR(23)` | Solved Amount in Last 12 Months |
| `CurMonthSolvedAmtInDspCrcy` |  | |  | `cast( CurMonthSolvedAmtInDspCrcy as farp_solvedamtcurrentmonth )` | `CURR(23)` | Solved Amount Current Month |
| `LastMonthSolvedAmtInDspCrcy` |  | |  | `cast( LastMonthSolvedAmtInDspCrcy as farp_solvedamtlastmonth )` | `CURR(23)` | Solved Amount In Last Month |
| `CurYearSolvedAmtInDspCrcy` |  | |  | `cast( CurrentYearSolvedAmtInDspCrcy as farp_solvedamtcurrentyear )` | `CURR(23)` | Solved Amount Current Year |
| `LastQuartSolvedAmtInDspCrcy` |  | |  | `case when IsSolvedLastQuarter = 1 then cast( OriginalAmountInDisplayCrcy as farp_solvedamtlastquarter ) else cast( 0 as farp_solvedamtlastquarter ) end` | `CURR(23)` | Solved Amount In Last Quarter |
| `_CaseUUID` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_CaseReason` | | ✓ | | | | |
| `_CaseType` | | ✓ | | | | |
| `_CaseStatus` | | ✓ | | | | |
| `_StatProf` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |
| `_Prio` | | ✓ | | | | |
| `_RootCause` | | ✓ | | | | |
| `_CaseProcessor` | | ✓ | | | | |
| `_CaseCoordinator` | | ✓ | | | | |
| `_Processor` | | ✓ | | | | |
| `_Coordinator` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseUUID` | `I_CaseAttributes` | [1..1] |
| `_Company` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_CaseReason` | `I_CaseReason` | [0..1] |
| `_CaseType` | `I_CaseType` | [0..1] |
| `_CaseStatus` | `I_CaseStatus` | [0..1] |
| `_StatProf` | `I_CaseStatProfile` | [0..1] |
| `_StatusProfile` | `I_CaseIndivStatus` | [0..1] |
| `_Prio` | `I_CasePriority` | [0..1] |
| `_RootCause` | `I_RootCause` | [0..1] |
| `_CaseProcessor` | `I_DisputeCaseContact` | [0..1] |
| `_CaseCoordinator` | `I_DisputeCaseContact` | [0..1] |
| `_Processor` | `I_User` | [0..1] |
| `_Coordinator` | `I_User` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOLVEDDISPUTECASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOLVEDDISPUTECASE')/$value)*

```abap
@EndUserText.label: 'Resolved Dispute Case - Cube'
@AbapCatalog.sqlViewName: 'IRESLVDDISPCASE'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory : #CUBE
//@VDM.private: false
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_CaseUUID' ]
//@AccessControl.privilegedAssociations:  [ '_CaseUUID', '_CaseProcessor', '_CaseCoordinator']
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'DisputeCaseUUID'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
define view I_ResolvedDisputeCase
  with parameters
    //    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr

  as select from P_ResolvedDisputeCase3
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType
                 )
  association [1..1] to I_CaseAttributes     as _CaseUUID        on  _CaseUUID.CaseUUID = $projection.DisputeCaseUUID
  association [0..1] to I_CompanyCode        as _Company         on  _Company.CompanyCode = $projection.CompanyCode
  association [0..1] to I_Customer           as _Customer        on  _Customer.Customer = $projection.Customer

  association [0..1] to I_Currency           as _DisplayCurrency on  $projection.DisplayCurrency = _DisplayCurrency.Currency

  association [0..1] to I_CaseReason         as _CaseReason      on  $projection.CaseType          = _CaseReason.CaseType
                                                                 and $projection.DisputeCaseReason = _CaseReason.CaseReason

  association [0..1] to I_CaseType           as _CaseType        on  $projection.CaseType = _CaseType.CaseType

  association [0..1] to I_CaseStatus         as _CaseStatus      on  $projection.Status = _CaseStatus.Status

  association [0..1] to I_CaseStatProfile    as _StatProf        on  $projection.StatusProfile = _StatProf.CaseStatusProfile

  association [0..1] to I_CaseIndivStatus    as _StatusProfile   on  $projection.StatusProfile        = _StatusProfile.CaseStatusProfile
                                                                 and $projection.CaseProcessingStatus = _StatusProfile.CaseStatus

  association [0..1] to I_CasePriority       as _Prio            on  $projection.DisputeCasePriority = _Prio.CasePriority

  association [0..1] to I_RootCause          as _RootCause       on  $projection.CaseType             = _RootCause.CaseType
                                                                 and $projection.DisputeCaseRootCause = _RootCause.DisputeCaseRootCause

  association [0..1] to I_DisputeCaseContact as _CaseProcessor   on  $projection.DisputeCaseProcessor = _CaseProcessor.UserID
  //  association [0..1] to I_PMContactCardUser as _CaseProcessor   on  _CaseProcessor.UserID = $projection.DisputeCaseProcessor
  //                   is NOT C1 released...

  association [0..1] to I_DisputeCaseContact as _CaseCoordinator on  $projection.DisputeCaseCoordinator = _CaseCoordinator.UserID

  // associations to I_User needed for compatibility reasons
  association [0..1] to I_User               as _Processor       on  $projection.DisputeCaseProcessor = _Processor.UserID
  association [0..1] to I_User               as _Coordinator     on  $projection.DisputeCaseCoordinator = _Coordinator.UserID
{
      @ObjectModel.foreignKey.association: '_CaseUUID'
  key DisputeCaseUUID,

      @ObjectModel.foreignKey.association: '_Customer'
      Customer,

      CaseID,

      @ObjectModel.foreignKey.association: '_Company'
      CompanyCode,

      _Customer.CustomerAccountGroup                                                      as CustomerAccountGroup,

      _Customer.AuthorizationGroup                                                        as CustomerBasicAuthorizationGrp,

      @ObjectModel.foreignKey.association: '_CaseProcessor'
      DisputeCaseProcessor,
      cast( DisputeCaseProcessorFullName as farp_processor_full_name preserving type )    as DisputeCaseProcessorFullName,

      @ObjectModel.foreignKey.association: '_CaseReason'
      cast( DisputeCaseReason as scmg_reason_code preserving type )                       as DisputeCaseReason,

      @ObjectModel.foreignKey.association: '_CaseType'
      CaseType,

      @ObjectModel.foreignKey.association: '_RootCause'
      cast( DisputeCaseRootCause as udm_root_ccode preserving type )                      as DisputeCaseRootCause,

      @ObjectModel.foreignKey.association: '_CaseCoordinator'
      cast( DisputeCaseCoordinator as udm_coordinator preserving type )                   as DisputeCaseCoordinator,
      cast( DsputCaseCoordinatorFullName as farp_coordinator_full_name preserving type )  as DsputCaseCoordinatorFullName,

      //    CaseCreationTime,
      //    CaseClosingTime,

      @ObjectModel.foreignKey.association: '_CaseStatus'
      Status,

      @ObjectModel.foreignKey.association: '_Prio'
      DisputeCasePriority,

      @ObjectModel.foreignKey.association: '_StatProf'
      cast( StatusProfile as scmgstatusprofid preserving type )                           as StatusProfile,
      @ObjectModel.foreignKey.association: '_StatusProfile'
      cast( CaseProcessingStatus as scmgstatusonr preserving type)                        as CaseProcessingStatus,

      @Semantics.currencyCode:true
      cast( DisplayCurrency as disp_curr preserving type )                                as DisplayCurrency,

      cast( CaseCreationDate as udm_create_date preserving type )                         as CaseCreationDate,
      cast( CaseClosingDate as udm_closing_date preserving type )                         as CaseClosingDate,

      cast( CurrentYear as currentyear preserving type )                                  as CurrentYear,
      cast( CurrentMonth as currentmonth preserving type )                                as CurrentMonth,
      cast( CurrentQuarter as currentquarter)                                             as CurrentQuarter,
      cast( LastQuarter as lastquarter )                                                  as LastQuarter,

      cast( CaseClosingYear as caseclosingyear preserving type )                          as CaseClosingYear,
      cast( CaseClosingMonth as caseclosingmonth preserving type )                        as CaseClosingMonth,
      cast( CaseClosingQuarter as caseclosingquarter )                                    as CaseClosingQuarter,


      //  Flags solved in period
      //  ----------------------
      @DefaultAggregation: #SUM
      cast( IsSolvedCurrentYear as farp_solvedincurrentyear )                             as IsSolvedCurrentYear,

      //    @DefaultAggregation: #SUM
      //    cast( IsSolvedLastYear as FARP_SOLVEDINLASTYEAR ) as IsSolvedLastYear,

      @DefaultAggregation: #SUM
      cast( IsSolvedCurrentMonth as farp_solvedincurrentmonth )                           as IsSolvedCurrentMonth,

      @DefaultAggregation: #SUM
      cast( IsSolvedLastMonth as farp_solvedinlastmonth )                                 as IsSolvedLastMonth,

      @DefaultAggregation: #SUM
      cast( IsSolvedLastQuarter as farp_solvedinlastquarter )                             as IsSolvedLastQuarter,

      @DefaultAggregation: #SUM
      cast( IsSolvedLast12Months as farp_solvedinlast12months)                            as IsSolvedLast12Months,


      //  Case Resolving days
      //  -------------------
      @DefaultAggregation: #SUM
      cast( Last12MonthsResolvingDays as farp_last12monthsresolvingdays preserving type ) as Last12MonthsResolvingDays,

      @DefaultAggregation: #SUM
      cast( CurrentMonthResolvingDays as farp_currentmonthresolvingdays preserving type ) as CurrentMonthResolvingDays,

      @DefaultAggregation: #SUM
      cast( LastMonthResolvingDays as farp_lastmonthresolvingdays preserving type )       as LastMonthResolvingDays,

      @DefaultAggregation: #SUM
      cast( CurrentYearResolvingDays as farp_currentyearresolvingdays preserving type )   as CurrentYearResolvingDays,

      //  Case Resolving Days Last Quarter
      @DefaultAggregation: #SUM
      case when IsSolvedLastQuarter = 1
         then cast( dats_days_between( CaseCreationDate, CaseClosingDate ) as farp_lastquarterresolvingdays )
         else cast( 0 as farp_lastquarterresolvingdays )
      end                                                                                 as LastQuarterResolvingDays,


      //  Case Solved amounts
      //  ---------------------
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( OriginalAmountInDisplayCrcy as farp_solvedamtlast12months )                   as Last12MnthsSlvdAmtInDspCrcy,

      //  OriginalAmount solved in current month
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CurMonthSolvedAmtInDspCrcy as farp_solvedamtcurrentmonth )                    as CurMonthSolvedAmtInDspCrcy,

      //  OriginalAmount solved in last month
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( LastMonthSolvedAmtInDspCrcy as farp_solvedamtlastmonth )                      as LastMonthSolvedAmtInDspCrcy,

      //  OriginalAmount solved in current
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CurrentYearSolvedAmtInDspCrcy as farp_solvedamtcurrentyear )                  as CurYearSolvedAmtInDspCrcy,

      //  OriginalAmount solved in last quarter
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      case when IsSolvedLastQuarter = 1
        then cast( OriginalAmountInDisplayCrcy as farp_solvedamtlastquarter )
        else cast( 0 as farp_solvedamtlastquarter )
      end                                                                                 as LastQuartSolvedAmtInDspCrcy,

      _CaseUUID,
      _Customer,
      _Company,
      _CaseType,
      _CaseReason,
      _CaseStatus,
      _StatProf,
      _StatusProfile,
      _Prio,
      _RootCause,
      _DisplayCurrency,
      _CaseProcessor,
      _CaseCoordinator,
      _Processor,
      _Coordinator
};
```
