---
name: I_OPENDISPUTEPROCESSINGTIME
description: "This CDS view is designed to provide analytical insights into the processing time of open dispute cases within an organization. It aggregates and categorizes data related to dispute cases in SAP Dispute Management, allowing users to analyze the duration and financial impact of disputes over various time intervals. This CDS view provides the data to answer the following business questions: What is the total number of open dispute cases within the organization? How many dispute cases fall into specific processing time intervals (e.g., 1-2 days, 3-5 days, etc.)? What is the total disputed amount in the display currency for each processing time interval? Who are the processors and coordinators responsible for handling these dispute cases? What are the reasons and root causes associated with the open dispute cases? How does the priority and status of dispute cases affect their processing time? What is the distribution of dispute cases across different company codes and customer account groups? How does the processing time of dispute cases correlate with their creation dates? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTEPROCESSINGTIME')/$value
semantic_en: "This CDS view is designed to provide analytical insights into the processing time of open dispute cases within an organization. It aggregates and categorizes data related to dispute cases in SAP Dispute Management, allowing users to analyze the duration and financial impact of disputes over various time intervals. This CDS view provides the data to answer the following business questions: What is the total number of open dispute cases within the organization? How many dispute cases fall into specific processing time intervals (e.g., 1-2 days, 3-5 days, etc.)? What is the total disputed amount in the display currency for each processing time interval? Who are the processors and coordinators responsible for handling these dispute cases? What are the reasons and root causes associated with the open dispute cases? How does the priority and status of dispute cases affect their processing time? What is the distribution of dispute cases across different company codes and customer account groups? How does the processing time of dispute cases correlate with their creation dates? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Open Dispute Processing Time - Cube — CDS view giao diện dựa trên P_OpenDisputeProcessingTime3."
keywords:
  - "open"
  - "dispute"
  - "processing"
  - "time"
  - "cube"
  - "case"
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
---
# I_OPENDISPUTEPROCESSINGTIME

**This CDS view is designed to provide analytical insights into the processing time of open dispute cases within an organization. It aggregates and categorizes data related to dispute cases in SAP Dispute Management, allowing users to analyze the duration and financial impact of disputes over various time intervals. This CDS view provides the data to answer the following business questions: What is the total number of open dispute cases within the organization? How many dispute cases fall into specific processing time intervals (e.g., 1-2 days, 3-5 days, etc.)? What is the total disputed amount in the display currency for each processing time interval? Who are the processors and coordinators responsible for handling these dispute cases? What are the reasons and root causes associated with the open dispute cases? How does the priority and status of dispute cases affect their processing time? What is the distribution of dispute cases across different company codes and customer account groups? How does the processing time of dispute cases correlate with their creation dates? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTEPROCESSINGTIME')/$value) |

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
| `Status` |  | |  | `cast( Status as scmgstatpara preserving type )` | `CHAR(3)` | Case: System Status |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `StatusProfile` |  | |  | `cast( StatusProfile as scmgstatusprofid preserving type )` | `CHAR(8)` | Case: Status Profile |
| `CaseProcessingStatus` |  | |  | `cast( CaseProcessingStatus as scmgstatusonr preserving type)` | `NUMC(2)` | Case: Status |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseCreationDate` |  | |  | `cast( CaseCreationDate as udm_create_date preserving type )` | `DATS(8)` | Created On |
| `TodayDate` |  | |  |  | `DATS(8)` |  |
| `ProcessingDays` |  | |  | `cast( ProcessingDays as farp_procgdaysopendisputes preserving type )` | `INT4(10)` | Processing Days of Open Disputes |
| `DisputedAmountInDisplayCrcy` |  | |  | `cast( DisputedAmountInDisplayCrcy as farp_disputed_amt_dspcrcy )` | `CURR(23)` | Current Disputed Amount in Display Currency |
| `DisplayCurrency` |  | |  | `cast( DisplayCurrency as disp_curr preserving type )` | `CUKY(5)` | Display Currency |
| `NumberOfDisputeCases` |  | |  | `cast( 1 as farp_numberofdisputecases )` | `INT4(10)` | Number of Dispute Cases |
| `ProcessingDaysText` |  | |  | `cast( ProcessingDaysText as farp_processingtimeindays )` | `CHAR(10)` | Processing Time of a Claification Case in Days |
| `Interval1NumberOfCases` |  | |  | `cast( CaseIsCrtedInFirstIntvl as farp_processinginterval1 )` | `INT4(10)` | Case is Processed Since Today |
| `Interval2NumberOfCases` |  | |  | `cast( CaseIsCrtedInSecondIntvl as farp_processinginterval2 )` | `INT4(10)` | Case is Processed for 1-2 Days |
| `Interval3NumberOfCases` |  | |  | `cast( CaseIsCrtedInThirdIntvl as farp_processinginterval3 )` | `INT4(10)` | Case is Processed for 3-5 Days |
| `Interval4NumberOfCases` |  | |  | `cast( CaseIsCrtedInFourthIntvl as farp_processinginterval4 )` | `INT4(10)` | Case is Processed for 6-10 Days |
| `Interval5NumberOfCases` |  | |  | `cast( CaseIsCrtedInFifthIntvl as farp_processinginterval5 )` | `INT4(10)` | Case is Processed for 11-20 Days |
| `Interval6NumberOfCases` |  | |  | `cast( CaseIsCrtedInSixthIntvl as farp_processinginterval6 )` | `INT4(10)` | Case is Processed for 21-50 Days |
| `Interval7NumberOfCases` |  | |  | `cast( CaseIsCrtedInSeventhIntvl as farp_processinginterval7 )` | `INT4(10)` | Case is Processed for More than 50 Days |
| `Interval1DisputedAmtInDspCrcy` |  | |  | `cast( Interval1DisputedAmtInDspCrcy as farp_interval1openamount )` | `CURR(23)` | Disputed Amount Since Today |
| `Interval2DisputedAmtInDspCrcy` |  | |  | `cast( Interval2DisputedAmtInDspCrcy as farp_interval2openamount )` | `CURR(23)` | Disputed Amount for 1-2 Days |
| `Interval3DisputedAmtInDspCrcy` |  | |  | `cast( Interval3DisputedAmtInDspCrcy as farp_interval3openamount )` | `CURR(23)` | Disputed Amount for 3-5 Days |
| `Interval4DisputedAmtInDspCrcy` |  | |  | `cast( Interval4DisputedAmtInDspCrcy as farp_interval4openamount )` | `CURR(23)` | Disputed Amount for 6-10 Days |
| `Interval5DisputedAmtInDspCrcy` |  | |  | `cast( Interval5DisputedAmtInDspCrcy as farp_interval5openamount )` | `CURR(23)` | Disputed Amount for 11-20 Days |
| `Interval6DisputedAmtInDspCrcy` |  | |  | `cast( Interval6DisputedAmtInDspCrcy as farp_interval6openamount )` | `CURR(23)` | Disputed Amount for 21-50 Days |
| `Interval7DisputedAmtInDspCrcy` |  | |  | `cast( Interval7DisputedAmtInDspCrcy as farp_interval7openamount )` | `CURR(23)` | Disputed Amount for More than 50 Days |
| `_CaseUUID` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CaseReason` | | ✓ | | | | |
| `_CaseType` | | ✓ | | | | |
| `_CaseStatus` | | ✓ | | | | |
| `_StatProf` | | ✓ | | | | |
| `_Prio` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |
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
| `_Prio` | `I_CasePriority` | [0..1] |
| `_StatusProfile` | `I_CaseIndivStatus` | [0..1] |
| `_RootCause` | `I_RootCause` | [0..1] |
| `_CaseProcessor` | `I_DisputeCaseContact` | [0..1] |
| `_CaseCoordinator` | `I_DisputeCaseContact` | [0..1] |
| `_Processor` | `I_User` | [0..1] |
| `_Coordinator` | `I_User` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTEPROCESSINGTIME')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTEPROCESSINGTIME')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Open Dispute Processing Time - Cube'
@AbapCatalog.sqlViewName: 'IOPNDISPPRCTIME'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory : #CUBE
//@VDM.private: false
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_CaseUUID' ]
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'DisputeCaseUUID'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
define view I_OpenDisputeProcessingTime
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr

  as select from P_OpenDisputeProcessingTime3
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

  association [0..1] to I_CasePriority       as _Prio            on  $projection.DisputeCasePriority = _Prio.CasePriority

  association [0..1] to I_CaseIndivStatus    as _StatusProfile   on  $projection.StatusProfile        = _StatusProfile.CaseStatusProfile
                                                                 and $projection.CaseProcessingStatus = _StatusProfile.CaseStatus

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
      cast( Status  as scmgstatpara preserving type )                                    as Status,

      @ObjectModel.foreignKey.association: '_Prio'
      DisputeCasePriority,

      @ObjectModel.foreignKey.association: '_StatProf'
      cast( StatusProfile as scmgstatusprofid preserving type )                          as StatusProfile,
      @ObjectModel.foreignKey.association: '_StatusProfile'
      cast( CaseProcessingStatus as scmgstatusonr preserving type)                       as CaseProcessingStatus,

      @ObjectModel.foreignKey.association: '_CaseType'
      CaseType,

      //  DisputedAmount,

      cast( CaseCreationDate as udm_create_date preserving type )                        as CaseCreationDate,
      TodayDate,

      @DefaultAggregation: #SUM
      cast( ProcessingDays as farp_procgdaysopendisputes preserving type )               as ProcessingDays,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( DisputedAmountInDisplayCrcy as farp_disputed_amt_dspcrcy )                   as DisputedAmountInDisplayCrcy,

      @Semantics.currencyCode:true
      cast( DisplayCurrency as disp_curr preserving type )                               as DisplayCurrency,

      @DefaultAggregation: #SUM
      cast( 1 as farp_numberofdisputecases )                                             as NumberOfDisputeCases,

      cast( ProcessingDaysText as farp_processingtimeindays )                            as ProcessingDaysText,

      @DefaultAggregation: #SUM
      cast( CaseIsCrtedInFirstIntvl as farp_processinginterval1 )                        as Interval1NumberOfCases,
      @DefaultAggregation: #SUM
      cast( CaseIsCrtedInSecondIntvl as farp_processinginterval2 )                       as Interval2NumberOfCases,
      @DefaultAggregation: #SUM
      cast( CaseIsCrtedInThirdIntvl as farp_processinginterval3 )                        as Interval3NumberOfCases,
      @DefaultAggregation: #SUM
      cast( CaseIsCrtedInFourthIntvl as farp_processinginterval4 )                       as Interval4NumberOfCases,
      @DefaultAggregation: #SUM
      cast( CaseIsCrtedInFifthIntvl as farp_processinginterval5 )                        as Interval5NumberOfCases,
      @DefaultAggregation: #SUM
      cast( CaseIsCrtedInSixthIntvl as farp_processinginterval6 )                        as Interval6NumberOfCases,
      @DefaultAggregation: #SUM
      cast( CaseIsCrtedInSeventhIntvl as farp_processinginterval7 )                      as Interval7NumberOfCases,

      //    Disputed Amount since today / 1. interval
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( Interval1DisputedAmtInDspCrcy as farp_interval1openamount )                  as Interval1DisputedAmtInDspCrcy,

      //    Amount open for 1-2 days / 2. interval
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( Interval2DisputedAmtInDspCrcy as farp_interval2openamount )                  as Interval2DisputedAmtInDspCrcy,

      //    Disputed Amount for 3-5 days / 3. interval
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( Interval3DisputedAmtInDspCrcy as farp_interval3openamount )                  as Interval3DisputedAmtInDspCrcy,

      //    Disputed Amount for 6-10 days / 4. interval
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( Interval4DisputedAmtInDspCrcy as farp_interval4openamount )                  as Interval4DisputedAmtInDspCrcy,

      //    Disputed Amount for 11-20 days / 5. interval
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( Interval5DisputedAmtInDspCrcy as farp_interval5openamount )                  as Interval5DisputedAmtInDspCrcy,

      //    Disputed Amount for 21-50 days / 6. interval
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( Interval6DisputedAmtInDspCrcy as farp_interval6openamount )                  as Interval6DisputedAmtInDspCrcy,

      //     Disputed Amount for more than 50 days / 7. interval
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( Interval7DisputedAmtInDspCrcy as farp_interval7openamount )                  as Interval7DisputedAmtInDspCrcy,

      _CaseUUID,
      _Customer,
      _Company,
      _Currency,
      _CaseReason,
      _CaseType,
      _CaseStatus,
      _Prio,
      _StatProf,
      _StatusProfile,
      _RootCause,
      _CaseProcessor,
      _CaseCoordinator,
      _Processor,
      _Coordinator
}
```
