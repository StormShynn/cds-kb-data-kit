---
name: I_CREDITLIMITREQUESTCUBE
description: "This CDS view is designed to provide a comprehensive overview of credit limit requests, including details about the business partner, credit segment, and various case attributes. It aggregates and presents data related to credit limits, requests, approvals, and associated business metrics, allowing for detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the details of credit limit requests for a specific business partner or credit segment? How many credit limit requests have been made, and what is their status? What is the utilization percentage of the credit limit for a business partner? What are the credit risk class and business partner rating associated with the credit limit requests? How do the requested, approved, and actual credit limit amounts compare? What is the expected sales amount and customer credit exposure amount related to the credit limit requests? Are there any cases where the planned close date for a credit limit request has been exceeded? What are the details of the case processor, creator, last changer, and closer for each credit limit request? What are the reasons, types, and categories associated with the credit limit request cases? What is the priority and system status of each credit limit request case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITREQUESTCUBE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of credit limit requests, including details about the business partner, credit segment, and various case attributes. It aggregates and presents data related to credit limits, requests, approvals, and associated business metrics, allowing for detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the details of credit limit requests for a specific business partner or credit segment? How many credit limit requests have been made, and what is their status? What is the utilization percentage of the credit limit for a business partner? What are the credit risk class and business partner rating associated with the credit limit requests? How do the requested, approved, and actual credit limit amounts compare? What is the expected sales amount and customer credit exposure amount related to the credit limit requests? Are there any cases where the planned close date for a credit limit request has been exceeded? What are the details of the case processor, creator, last changer, and closer for each credit limit request? What are the reasons, types, and categories associated with the credit limit request cases? What is the priority and system status of each credit limit request case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Limit Request - Cube — CDS view giao diện dựa trên P_CreditLimitRequest2."
keywords:
  - "credit"
  - "limit"
  - "request"
  - "cube"
  - "case"
  - "business"
  - "partner"
  - "segment"
  - "country"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CR-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - plan
---
# I_CREDITLIMITREQUESTCUBE

**This CDS view is designed to provide a comprehensive overview of credit limit requests, including details about the business partner, credit segment, and various case attributes. It aggregates and presents data related to credit limits, requests, approvals, and associated business metrics, allowing for detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the details of credit limit requests for a specific business partner or credit segment? How many credit limit requests have been made, and what is their status? What is the utilization percentage of the credit limit for a business partner? What are the credit risk class and business partner rating associated with the credit limit requests? How do the requested, approved, and actual credit limit amounts compare? What is the expected sales amount and customer credit exposure amount related to the credit limit requests? Are there any cases where the planned close date for a credit limit request has been exceeded? What are the details of the case processor, creator, last changer, and closer for each credit limit request? What are the reasons, types, and categories associated with the credit limit request cases? What is the priority and system status of each credit limit request case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITREQUESTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUUID` | ✓ | |  |  | `CHAR(32)` | UUID in Character Format |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `Country` |  | |  | `cast( _BusinessPartner._CurrentDefaultAddress._StandardAddress.Country as farp_country preserving type)` | `CHAR(3)` | Country/Region |
| `Region` |  | | `_BusinessPartner._CurrentDefaultAddress._StandardAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
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
| `NumberOfCreditLimitRequests` |  | |  | `cast( NumberOfCreditLimitRequests as numberofcreditlimitrequests )` | `INT4(10)` | Number of Credit Limit Requests |
| `CaseCreationDate` |  | |  | `cast( CaseCreationDate as scmg_create_date preserving type )` | `DATS(8)` | Created On |
| `CaseLastChangeDate` |  | |  | `cast( CaseLastChangeDate as scmg_change_date preserving type )` | `DATS(8)` | Last Changed On |
| `CaseClosingDate` |  | |  | `cast( CaseClosingDate as scmg_closing_date preserving type )` | `DATS(8)` | Closed On |
| `CasePlannedCloseDate` |  | |  | `cast( CasePlannedCloseDate as scmg_plan_end_date preserving type )` | `DATS(8)` | Planned Close Date |
| `CaseIsClosed` |  | |  | `cast ( CaseIsClosed as case_is_closed preserving type )` | `CHAR(1)` | Case is Closed |
| `NmbrOfDaysPlndClsDateExceeded` |  | |  | `cast( NmbrOfDaysPlndClsDateExceeded as numberofdaysafterplannedclose preserving type )` | `INT4(10)` | Number of Days After Planned Closing Date |
| `CasePlannedCloseDateIsExceeded` |  | |  | `cast( case when NmbrOfDaysPlndClsDateExceeded < 1 then '' else 'X' end as caseplannedclosedateisexceeded preserving type )` | `CHAR(1)` | Planned Close Date is Exceeded |
| `CreditLimitIsApproved` |  | |  | `cast( CreditLimitIsApproved as farp_crdtlmt_is_approved preserving type )` | `CHAR(1)` | Credit Limit Is Approved |
| `CrdtLmtReqdIsEqualCrdtLmtAprvd` |  | |  | `cast( CrdtLmtReqdIsEqualCrdtLmtAprvd as farp_crdtlmtreq_eq_crdtlmtappr preserving type )` | `CHAR(1)` | Requested Limit Vs. Approved Limit |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `CreditLimitAmount` |  | |  | `cast( CreditLimitAmount as farp_creditlimit_amt )` | `CURR(23)` | Customer's Credit Limit |
| `CreditLimitRequestedAmount` |  | |  | `cast( CreditLimitRequestedAmount as farp_credlimit_requested_amt )` | `CURR(23)` | Requested Credit Limit |
| `CreditLimitApprovedAmount` |  | |  | `cast( CreditLimitApprovedAmount as farp_credlimit_approved_amt )` | `CURR(23)` | Approved Credit Limit |
| `ExpectedSalesAmount` |  | |  | `cast( ExpectedSalesAmount as crmt_report_exp_revenue )` | `CURR(15)` | Expected Sales Revenue |
| `CustomerCreditExposureAmount` |  | |  | `cast( CustomerCreditExposureAmount as farp_credit_exposure )` | `CURR(23)` | Credit Exposure Amount |
| `_BusinessPartner` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_CreditRiskClass` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_CreditSegment` | | ✓ | | | | |
| `_Processor` | | ✓ | | | | |
| `_CreatedBy` | | ✓ | | | | |
| `_ChangedBy` | | ✓ | | | | |
| `_ClosedBy` | | ✓ | | | | |
| `_Reasons` | | ✓ | | | | |
| `_CaseTypes` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |
| `_CaseSystemStatus` | | ✓ | | | | |
| `_Priority` | | ✓ | | | | |
| `_Category` | | ✓ | | | | |
| `_Individual` | | ✓ | | | | |
| `_CrdtMBusPartnerGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [1..1] |
| `_CreditRiskClass` | `I_CreditRiskClass` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_CreditSegment` | `I_CreditManagementSegment` | [1..1] |
| `_Processor` | `I_CreditCaseContact` | [0..1] |
| `_CreatedBy` | `I_CreditCaseContact` | [0..1] |
| `_ChangedBy` | `I_CreditCaseContact` | [0..1] |
| `_ClosedBy` | `I_CreditCaseContact` | [0..1] |
| `_Reasons` | `I_CaseReasons` | [0..1] |
| `_CaseTypes` | `I_Casetypes` | [0..1] |
| `_StatusProfile` | `I_CaseStatusProfile` | [0..1] |
| `_CaseSystemStatus` | `I_CaseStatus` | [0..1] |
| `_Priority` | `I_CasePriority` | [0..1] |
| `_Category` | `I_CaseCategory` | [0..1] |
| `_Individual` | `I_Caseindividualstatus` | [0..1] |
| `_CrdtMBusPartnerGroup` | `I_CrdtMBusPartnerGroup` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITREQUESTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITREQUESTCUBE')/$value)*

```abap
@EndUserText.label: 'Credit Limit Request - Cube'
@AbapCatalog.sqlViewName: 'ICRDTLMTREQCUBE'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]                                     
define view I_CreditLimitRequestCube
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr
  as select from P_CreditLimitRequest2
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType
                 )
  association [0..1] to I_BusinessPartner         as _BusinessPartner      on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  //  association [0..1] to I_CreditManagementBP      as _CreditManagementBP on  $projection.BusinessPartner = _CreditManagementBP.BusinessPartner
  association [1..1] to I_Currency                as _DisplayCurrency      on  $projection.DisplayCurrency = _DisplayCurrency.Currency
  association [1..1] to I_CreditRiskClass         as _CreditRiskClass      on  $projection.CreditRiskClass = _CreditRiskClass.CreditRiskClass
  association [0..1] to I_Country                 as _Country              on  $projection.Country = _Country.Country
  association [0..1] to I_Region                  as _Region               on  $projection.Country = _Region.Country
                                                                           and $projection.Region  = _Region.Region
  association [1..1] to I_CreditManagementSegment as _CreditSegment        on  $projection.CreditSegment = _CreditSegment.CreditSegment
  association [0..1] to I_CreditCaseContact       as _Processor            on  $projection.CaseProcessor = _Processor.UserID
  //  association [0..1] to I_User                    as _Processor            on  $projection.CaseProcessor = _Processor.UserID
  association [0..1] to I_CreditCaseContact       as _CreatedBy            on  $projection.CaseCreatedBy = _CreatedBy.UserID
  association [0..1] to I_CreditCaseContact       as _ChangedBy            on  $projection.CaseLastChangedBy = _ChangedBy.UserID
  association [0..1] to I_CreditCaseContact       as _ClosedBy             on  $projection.CaseClosedBy = _ClosedBy.UserID
  association [0..1] to I_CaseReasons             as _Reasons              on  $projection.CaseReason = _Reasons.CaseReason
                                                                           and $projection.CaseType   = _Reasons.CaseType
  association [0..1] to I_Casetypes               as _CaseTypes            on  $projection.CaseType = _CaseTypes.CaseType
  association [0..1] to I_CaseStatusProfile       as _StatusProfile        on  $projection.CaseStatusProfile = _StatusProfile.CaseStatusProfile

  //  association [0..1] to I_CaseSystemStatus        as _CaseSystemStatus     on  $projection.CaseSystemStatus = _CaseSystemStatus.CaseSystemStatus
  association [0..1] to I_CaseStatus              as _CaseSystemStatus     on  $projection.CaseSystemStatus = _CaseSystemStatus.Status
  association [0..1] to I_CasePriority            as _Priority             on  $projection.CasePriority = _Priority.CasePriority
  //  association [0..1] to I_CaseEscalationReason    as _Escalation       on  $projection.CaseEscalationReason = _Escalation.CaseEscalationReason

  association [0..1] to I_CaseCategory            as _Category             on  $projection.CaseType     = _Category.CaseType
                                                                           and $projection.CaseCategory = _Category.CaseCategory
  association [0..1] to I_Caseindividualstatus    as _Individual           on  $projection.CaseStatus        = _Individual.CaseStatus
                                                                           and $projection.CaseStatusProfile = _Individual.CaseStatusProfile
  association [0..1] to I_CrdtMBusPartnerGroup    as _CrdtMBusPartnerGroup on  $projection.CrdtMgmtBusinessPartnerGroup = _CrdtMBusPartnerGroup.CrdtMgmtBusinessPartnerGroup
{
  key CaseUUID,
      CaseID,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      BusinessPartner,
      @ObjectModel.foreignKey.association: '_CreditSegment'
      CreditSegment,
      @ObjectModel.foreignKey.association: '_Country'
      cast( _BusinessPartner._CurrentDefaultAddress._StandardAddress.Country as farp_country preserving type) as Country,

      @ObjectModel.foreignKey.association: '_Region'
      _BusinessPartner._CurrentDefaultAddress._StandardAddress.Region                                         as Region,
      @ObjectModel.foreignKey.association: '_Processor'
      CaseProcessor,
      @ObjectModel.foreignKey.association: '_CreatedBy'
      CaseCreatedBy,
      @ObjectModel.foreignKey.association: '_ChangedBy'
      CaseLastChangedBy,
      @ObjectModel.foreignKey.association: '_ClosedBy'
      CaseClosedBy,
      @ObjectModel.foreignKey.association: '_Reasons'
      CaseReason,
      @ObjectModel.foreignKey.association: '_Casetypes'
      CaseType,
      @ObjectModel.foreignKey.association: '_StatusProfile'
      CaseStatusProfile,
      @ObjectModel.foreignKey.association: '_CaseSystemStatus'
      CaseSystemStatus,
      @ObjectModel.foreignKey.association: '_Individual'
      CaseStatus,
      @ObjectModel.foreignKey.association: '_Priority'
      CasePriority,
      //      @ObjectModel.foreignKey.association: '_Escalation'
      CaseEscalationReason,
      @ObjectModel.foreignKey.association: '_Category'
      CaseCategory,
      CreditLimitUtilizationPct,
      BusinessPartnerRating,
      @ObjectModel.foreignKey.association: '_CreditRiskClass'
      CreditRiskClass,
      @ObjectModel.foreignKey.association: '_CrdtMBusPartnerGroup'
      CrdtMgmtBusinessPartnerGroup,


      @DefaultAggregation: #SUM
      cast( NumberOfCreditLimitRequests as numberofcreditlimitrequests )                                      as NumberOfCreditLimitRequests,

      cast( CaseCreationDate as scmg_create_date preserving type )                                            as CaseCreationDate,
      cast( CaseLastChangeDate as scmg_change_date preserving type )                                          as CaseLastChangeDate,
      cast( CaseClosingDate as scmg_closing_date preserving type )                                            as CaseClosingDate,
      cast( CasePlannedCloseDate as scmg_plan_end_date preserving type )                                      as CasePlannedCloseDate,

      cast ( CaseIsClosed as case_is_closed preserving type )                                                 as CaseIsClosed,
      //      TodayDate,
      //      ProcessingDays,

      @Aggregation.default: #MAX
      cast( NmbrOfDaysPlndClsDateExceeded as numberofdaysafterplannedclose preserving type )                  as NmbrOfDaysPlndClsDateExceeded,

      cast(
      case when NmbrOfDaysPlndClsDateExceeded < 1
        then ''
        else 'X'
      end   as caseplannedclosedateisexceeded preserving type )                                               as CasePlannedCloseDateIsExceeded,

      // Indicator: credit limit approved amount not 0
      cast( CreditLimitIsApproved as farp_crdtlmt_is_approved preserving type )                               as CreditLimitIsApproved,

      // Indicator: credit limit requested amount is equal to credit limit approved amount
      @Semantics.booleanIndicator
      cast( CrdtLmtReqdIsEqualCrdtLmtAprvd as farp_crdtlmtreq_eq_crdtlmtappr preserving type )                as CrdtLmtReqdIsEqualCrdtLmtAprvd,

      @Semantics.currencyCode:true
      DisplayCurrency,

      // Credit Limit Amount
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CreditLimitAmount as farp_creditlimit_amt )                                                       as CreditLimitAmount,

      // Credit Limit Requested Amount
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CreditLimitRequestedAmount as farp_credlimit_requested_amt )                                      as CreditLimitRequestedAmount,

      // Credit Limit Approved Amount
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CreditLimitApprovedAmount as farp_credlimit_approved_amt )                                        as CreditLimitApprovedAmount,

      // Expected Sales Amount
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( ExpectedSalesAmount as crmt_report_exp_revenue )                                                  as ExpectedSalesAmount,

      // Customer Credit Exposure Amount
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CustomerCreditExposureAmount as farp_credit_exposure )                                            as CustomerCreditExposureAmount,

      _BusinessPartner,
      //      _CreditManagementBP,
      _Country,
      _Region,
      _CreditSegment,
      _Processor,
      _CreatedBy,
      _ChangedBy,
      _ClosedBy,
      _DisplayCurrency,
      _CaseTypes,
      _CreditRiskClass,
      _Priority,
      _CaseSystemStatus,
      _StatusProfile,
      _Individual,
      _Category,
      //      _Escalation,
      _Reasons,
      _CrdtMBusPartnerGroup
}
```
