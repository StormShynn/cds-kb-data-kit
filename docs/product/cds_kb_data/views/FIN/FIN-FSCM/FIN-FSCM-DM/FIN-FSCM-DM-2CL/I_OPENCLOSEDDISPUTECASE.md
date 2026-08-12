---
name: I_OPENCLOSEDDISPUTECASE
description: "This CDS view is designed to provide a comprehensive overview of dispute cases, specifically focusing on their status as either open or closed. It aggregates data related to dispute cases, including their creation and resolution dates, associated amounts, and other relevant attributes. The view is structured to facilitate analytical processing and reporting on SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been created or resolved today, in the last five days, or in the current month? What is the total amount associated with dispute cases created or resolved today, in the last five days, or in the current month? What are the details of dispute cases, including their status, type, reason, priority, and associated personnel (processor and coordinator)? How can we track the progress and resolution of dispute cases over time? What are the root causes and reasons for dispute cases, and how do they correlate with their resolution status? How can we analyze dispute cases based on customer, company code, and currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENCLOSEDDISPUTECASE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of dispute cases, specifically focusing on their status as either open or closed. It aggregates data related to dispute cases, including their creation and resolution dates, associated amounts, and other relevant attributes. The view is structured to facilitate analytical processing and reporting on SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been created or resolved today, in the last five days, or in the current month? What is the total amount associated with dispute cases created or resolved today, in the last five days, or in the current month? What are the details of dispute cases, including their status, type, reason, priority, and associated personnel (processor and coordinator)? How can we track the progress and resolution of dispute cases over time? What are the root causes and reasons for dispute cases, and how do they correlate with their resolution status? How can we analyze dispute cases based on customer, company code, and currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Open and Closed Dispute Cases - Cube — CDS view giao diện dựa trên P_OpenClosedDisputeCase3."
keywords:
  - "open"
  - "and"
  - "closed"
  - "dispute"
  - "cases"
  - "cube"
  - "case"
  - "customer"
  - "company"
  - "code"
  - "account"
  - "group"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-DM-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - interface-view
  - lob:finance
---
# I_OPENCLOSEDDISPUTECASE

**This CDS view is designed to provide a comprehensive overview of dispute cases, specifically focusing on their status as either open or closed. It aggregates data related to dispute cases, including their creation and resolution dates, associated amounts, and other relevant attributes. The view is structured to facilitate analytical processing and reporting on SAP Dispute Management. This CDS view provides the data to answer the following business questions: How many dispute cases have been created or resolved today, in the last five days, or in the current month? What is the total amount associated with dispute cases created or resolved today, in the last five days, or in the current month? What are the details of dispute cases, including their status, type, reason, priority, and associated personnel (processor and coordinator)? How can we track the progress and resolution of dispute cases over time? What are the root causes and reasons for dispute cases, and how do they correlate with their resolution status? How can we analyze dispute cases based on customer, company code, and currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENCLOSEDDISPUTECASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` | ✓ | |  |  | `CHAR(32)` | UUID in Character Format |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerBasicAuthorizationGrp` |  | | `_Customer` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `DisputeCaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `DisputeCaseProcessorFullName` |  | |  | `cast( DisputeCaseProcessorFullName as farp_processor_full_name preserving type )` | `CHAR(80)` | Full Name of Processor |
| `DisputeCaseRootCause` |  | |  | `cast( DisputeCaseRootCause as udm_root_ccode preserving type )` | `CHAR(4)` | Root Cause Code |
| `DisputeCaseCoordinator` |  | |  | `cast( DisputeCaseCoordinator as udm_coordinator preserving type )` | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | |  | `cast( DsputCaseCoordinatorFullName as farp_coordinator_full_name preserving type )` | `CHAR(80)` | Fullname of Coordinator |
| `DisputeCaseReason` |  | |  | `cast( DisputeCaseReason as scmg_reason_code preserving type )` | `CHAR(4)` | Reason for Case |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `StatusProfile` |  | |  | `cast( StatusProfile as scmgstatusprofid preserving type )` | `CHAR(8)` | Case: Status Profile |
| `CaseProcessingStatus` |  | |  | `cast( CaseProcessingStatus as scmgstatusonr preserving type)` | `NUMC(2)` | Case: Status |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `DisputeCasePriority` |  | | `_CaseUUID` | `DisputeCasePriority` | `NUMC(1)` | Priority |
| `DisplayCurrency` |  | |  | `cast( DisplayCurrency as disp_curr preserving type )` | `CUKY(5)` | Display Currency |
| `CaseCreationDate` |  | |  |  | `DATS(8)` |  |
| `CaseClosingDate` |  | |  |  | `DATS(8)` |  |
| `CurrentDay` |  | |  | `cast( CurrentDay as currentday preserving type )` | `INT4(10)` | Current Day |
| `IsCreatedToday` |  | |  | `cast( IsCreatedToday as farp_createdtoday preserving type )` | `INT1(3)` | Created today |
| `IsSolvedToday` |  | |  | `cast( IsSolvedToday as farp_solvedtoday )` | `INT4(10)` | Solved Today |
| `IsCreatedLast5Days` |  | |  | `cast( IsCreatedLast5Days as farp_createdlast5days preserving type )` | `INT1(3)` | Created in Last 5 Days |
| `IsSolvedLast5Days` |  | |  | `cast( IsSolvedLast5Days as farp_solvedinlast5days )` | `INT4(10)` | Solved in Last 5 Days |
| `IsCreatedCurrentMonth` |  | |  | `cast( IsCreatedCurrentMonth as farp_createdcurrentmonth )` | `INT4(10)` | Created in Current Month |
| `IsSolvedCurrentMonth` |  | |  | `cast( IsSolvedCurrentMonth as farp_solvedincurrentmonth )` | `INT4(10)` | Solved in current month |
| `TodayCreatedAmtInDspCrcy` |  | |  | `cast( TodayCreatedAmtInDspCrcy as farp_createdamttoday )` | `CURR(23)` | New Amount, Today |
| `TodaySolvedAmtInDspCrcy` |  | |  | `cast( TodaySolvedAmtInDspCrcy as farp_solvedamttoday )` | `CURR(23)` | Amount Solved Today |
| `Last5DaysCrtedAmtInDspCrcy` |  | |  | `cast( Last5DaysCrtedAmtInDspCrcy as farp_createdamtlast5days )` | `CURR(23)` | New Amount in Last 5 Days |
| `Last5DaysSolvedAmtInDspCrcy` |  | |  | `cast( Last5DaysSolvedAmtInDspCrcy as farp_solvedamtlast5days )` | `CURR(23)` | Amount Solved in Last 5 Days |
| `CurMonthCreatedAmtInDspCrcy` |  | |  | `cast( CurMonthCreatedAmtInDspCrcy as farp_createdamtcurmonth )` | `CURR(23)` | New Amount, Current Month |
| `CurMonthSolvedAmtInDspCrcy` |  | |  | `cast( CurMonthSolvedAmtInDspCrcy as farp_solvedamtcurrentmonth )` | `CURR(23)` | Solved Amount Current Month |
| `_CaseUUID` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
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
| `_Currency` | `I_Currency` | [0..1] |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENCLOSEDDISPUTECASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENCLOSEDDISPUTECASE')/$value)*

```abap
//Status of relevant Dispute Cases:
// 001(new), 002(open)  => created
// 007(closed), 008(confirmed) => (re)solved
@EndUserText.label: 'Open and Closed Dispute Cases - Cube'
@AbapCatalog.sqlViewName: 'IOPNCLSDISPCASE3'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory : #CUBE
@AccessControl.authorizationCheck:  #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_CaseUUID' ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: ['DisputeCaseUUID' ]
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
define view I_OpenClosedDisputeCase
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr

  as select from P_OpenClosedDisputeCase3
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType
                 )
  association [1..1] to I_CaseAttributes     as _CaseUUID        on  _CaseUUID.CaseUUID = $projection.DisputeCaseUUID
  association [0..1] to I_CompanyCode        as _Company         on  _Company.CompanyCode = $projection.CompanyCode
  association [0..1] to I_Customer           as _Customer        on  _Customer.Customer = $projection.Customer
  association [0..1] to I_Currency           as _Currency        on  $projection.DisplayCurrency = _Currency.Currency

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
  association [0..1] to I_DisputeCaseContact as _CaseCoordinator on  $projection.DisputeCaseCoordinator = _CaseCoordinator.UserID

  // associations to I_User needed for compatibility reasons
  association [0..1] to I_User               as _Processor       on  $projection.DisputeCaseProcessor = _Processor.UserID
  association [0..1] to I_User               as _Coordinator     on  $projection.DisputeCaseCoordinator = _Coordinator.UserID
{ 
      @ObjectModel.foreignKey.association: '_CaseUUID'
  key DisputeCaseUUID,

      @ObjectModel.foreignKey.association: '_Customer'
  key Customer,

      CaseID,

      @ObjectModel.foreignKey.association: '_Company'
      CompanyCode,

      _Customer.CustomerAccountGroup                                                     as CustomerAccountGroup,

      _Customer.AuthorizationGroup                                                       as CustomerBasicAuthorizationGrp,

      @ObjectModel.foreignKey.association: '_CaseProcessor'
      DisputeCaseProcessor,
      cast( DisputeCaseProcessorFullName as farp_processor_full_name preserving type )   as DisputeCaseProcessorFullName,   

      @ObjectModel.foreignKey.association: '_RootCause'
      cast( DisputeCaseRootCause as udm_root_ccode preserving type )                     as DisputeCaseRootCause,

      @ObjectModel.foreignKey.association: '_CaseCoordinator'
      cast( DisputeCaseCoordinator as udm_coordinator preserving type )                  as DisputeCaseCoordinator,
      cast( DsputCaseCoordinatorFullName as farp_coordinator_full_name preserving type ) as DsputCaseCoordinatorFullName,

      @ObjectModel.foreignKey.association: '_CaseReason'
      cast( DisputeCaseReason as scmg_reason_code preserving type )                      as DisputeCaseReason,

      @ObjectModel.foreignKey.association: '_CaseStatus'
      Status,

      @ObjectModel.foreignKey.association: '_StatProf'
      cast( StatusProfile as scmgstatusprofid preserving type )                          as StatusProfile,
      @ObjectModel.foreignKey.association: '_StatusProfile'
      cast( CaseProcessingStatus as scmgstatusonr preserving type)                       as CaseProcessingStatus,

      @ObjectModel.foreignKey.association: '_CaseType'
      CaseType,

      @ObjectModel.foreignKey.association: '_Prio'
      _CaseUUID.DisputeCasePriority                                                      as DisputeCasePriority,

      //
      //    Today,
      //    Before5DaysDate,
      //
      //    @DefaultAggregation: #SUM
      //    @Semantics.amount.currencyCode: 'DisplayCurrency'
      //    OriginalAmountInDspCrcy,

      @Semantics.currencyCode:true
      cast( DisplayCurrency as disp_curr preserving type )                               as DisplayCurrency,

      CaseCreationDate,
      CaseClosingDate,


      @DefaultAggregation: #MAX
      cast( CurrentDay as currentday preserving type )                                   as CurrentDay,

      //  Flags created/closed today
      //  --------------------------
      @DefaultAggregation: #SUM
      cast( IsCreatedToday as farp_createdtoday preserving type )                        as IsCreatedToday,

      @DefaultAggregation: #SUM
      cast( IsSolvedToday as farp_solvedtoday )                                          as IsSolvedToday,

      //  Flags created/closed in last 5 days
      //  -----------------------------------
      @DefaultAggregation: #SUM
      cast( IsCreatedLast5Days as farp_createdlast5days preserving type )                as IsCreatedLast5Days,

      @DefaultAggregation: #SUM
      cast( IsSolvedLast5Days as farp_solvedinlast5days )                                as IsSolvedLast5Days,

      //  Flags created/closed in current month
      //  -------------------------------------
      @DefaultAggregation: #SUM
      cast( IsCreatedCurrentMonth as farp_createdcurrentmonth )          as IsCreatedCurrentMonth,

      @DefaultAggregation: #SUM
      cast( IsSolvedCurrentMonth as farp_solvedincurrentmonth )                          as IsSolvedCurrentMonth,

      //  Original Amount created/closed today
      //  ------------------------------------
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( TodayCreatedAmtInDspCrcy as farp_createdamttoday )                           as TodayCreatedAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( TodaySolvedAmtInDspCrcy as farp_solvedamttoday )                             as TodaySolvedAmtInDspCrcy,

      // Original Amount created/closed last 5 days
      // ------------------------------------------
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( Last5DaysCrtedAmtInDspCrcy as farp_createdamtlast5days )                     as Last5DaysCrtedAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( Last5DaysSolvedAmtInDspCrcy as farp_solvedamtlast5days )                     as Last5DaysSolvedAmtInDspCrcy,

      // Original Amount created/closed current month
      // --------------------------------------------
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CurMonthCreatedAmtInDspCrcy as farp_createdamtcurmonth )                     as CurMonthCreatedAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CurMonthSolvedAmtInDspCrcy as farp_solvedamtcurrentmonth )                   as CurMonthSolvedAmtInDspCrcy,

      _CaseUUID,
      _Customer,
      _Company,
      _Currency,
      _CaseType,
      _CaseReason,
      _CaseStatus,
      _StatProf,
      _StatusProfile,
      _RootCause,
      _CaseProcessor,
      _CaseCoordinator,
      _Prio,
      _Processor,
      _Coordinator
};
```
