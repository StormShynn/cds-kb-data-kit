---
name: I_CREDITDECISIONDOCUMENTC
description: "This CDS view is designed to provide a comprehensive overview of credit decision documents within a business context. It aggregates and presents data related to credit management, including details about business partners, credit segments, sales documents, and various case attributes. The view is structured to support analytical processing and decision-making by offering insights into open credit cases, their statuses, and associated financial metrics. This CDS view provides the data to answer the following business questions: What are the details of open credit decision cases, including their creation, last change, and planned closure dates? Which business partners are involved in these credit decision cases, and what are their associated credit segments and risk classes? What is the status and priority of each credit decision case, and who are the responsible and processing contacts? How many credit decision documents are associated with each case, and what are the financial implications, such as open credit amounts and checked credit risk amounts? Are there any credit checks that have failed, and what are the reasons for case escalations or planned closure date exceedances? What is the credit limit and exposure amount for business partners within specific credit segments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITDECISIONDOCUMENTC')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of credit decision documents within a business context. It aggregates and presents data related to credit management, including details about business partners, credit segments, sales documents, and various case attributes. The view is structured to support analytical processing and decision-making by offering insights into open credit cases, their statuses, and associated financial metrics. This CDS view provides the data to answer the following business questions: What are the details of open credit decision cases, including their creation, last change, and planned closure dates? Which business partners are involved in these credit decision cases, and what are their associated credit segments and risk classes? What is the status and priority of each credit decision case, and who are the responsible and processing contacts? How many credit decision documents are associated with each case, and what are the financial implications, such as open credit amounts and checked credit risk amounts? Are there any credit checks that have failed, and what are the reasons for case escalations or planned closure date exceedances? What is the credit limit and exposure amount for business partners within specific credit segments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Decision Document - Cube — CDS view giao diện dựa trên P_DCD_2."
keywords:
  - "credit"
  - "decision"
  - "document"
  - "cube"
  - "case"
  - "business"
  - "partner"
  - "segment"
  - "country"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - plan
---
# I_CREDITDECISIONDOCUMENTC

**This CDS view is designed to provide a comprehensive overview of credit decision documents within a business context. It aggregates and presents data related to credit management, including details about business partners, credit segments, sales documents, and various case attributes. The view is structured to support analytical processing and decision-making by offering insights into open credit cases, their statuses, and associated financial metrics. This CDS view provides the data to answer the following business questions: What are the details of open credit decision cases, including their creation, last change, and planned closure dates? Which business partners are involved in these credit decision cases, and what are their associated credit segments and risk classes? What is the status and priority of each credit decision case, and who are the responsible and processing contacts? How many credit decision documents are associated with each case, and what are the financial implications, such as open credit amounts and checked credit risk amounts? Are there any credit checks that have failed, and what are the reasons for case escalations or planned closure date exceedances? What is the credit limit and exposure amount for business partners within specific credit segments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITDECISIONDOCUMENTC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUUID` | ✓ | |  |  | `CHAR(32)` | UUID in Character Format |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `Country` |  | |  | `cast( _BusinessPartner._CurrentDefaultAddress._StandardAddress.Country as farp_country preserving type)` | `CHAR(3)` | Country/Region |
| `Region` |  | | `_BusinessPartner._CurrentDefaultAddress._StandardAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class at Time of Credit Decision |
| `CaseProcessor` |  | |  | `cast( CaseProcessor as ukm_coordinator preserving type )` | `CHAR(12)` | Credit Analyst |
| `CaseResponsible` |  | |  | `cast( CaseResponsible as fis_responsible preserving type )` | `CHAR(12)` | Person Responsible |
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
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `NumberOfCreditDecisionDocs` |  | |  | `cast( NumberOfCreditDecisionDocs as numberofcreditdecisiondocs )` | `INT4(10)` | Number of Documented Credit Decisions |
| `CaseCreationDate` |  | |  | `cast( CaseCreationDate as scmg_create_date preserving type )` | `DATS(8)` | Created On |
| `CaseLastChangeDate` |  | |  | `cast( CaseLastChangeDate as scmg_change_date preserving type )` | `DATS(8)` | Last Changed On |
| `CaseClosingDate` |  | |  | `cast( CaseClosingDate as scmg_closing_date preserving type )` | `DATS(8)` | Closed On |
| `CasePlannedCloseDate` |  | |  | `cast( CasePlannedCloseDate as scmg_plan_end_date preserving type )` | `DATS(8)` | Planned Close Date |
| `CaseIsClosed` |  | |  | `cast ( CaseIsClosed as case_is_closed preserving type )` | `CHAR(1)` | Case is Closed |
| `NmbrOfDaysPlndClsDateExceeded` |  | |  | `cast( NmbrOfDaysPlndClsDateExceeded as numberofdaysafterplannedclose preserving type )` | `INT4(10)` | Number of Days After Planned Closing Date |
| `CasePlannedCloseDateIsExceeded` |  | |  | `cast( case when ( NmbrOfDaysPlndClsDateExceeded <= 0 ) then '' else 'X' end as caseplannedclosedateisexceeded preserving type )` | `CHAR(1)` | Planned Close Date is Exceeded |
| `CreditDecisionObjectType` |  | |  |  | `CHAR(10)` | Type of Document with Credit Block |
| `CreditDecisionSalesDocument` |  | |  | `cast( CreditDecisionSalesDocument as vbeln )` | `CHAR(10)` | Sales and Distribution Document Number |
| `SalesDocumentCreditStatus` |  | |  |  | `CHAR(1)` | Status of Document with Credit Block |
| `CreditDecisionReqUTCDateTime` |  | |  |  | `DEC(15)` | Timestamp |
| `CreditDecisionFirstApprover` |  | |  |  | `CHAR(12)` | Approver |
| `CreditDecisionSecondApprover` |  | |  |  | `CHAR(12)` | Second Approver |
| `CreditDecisionFirstApprvlSts` |  | |  | `cast( CreditDecisionFirstApprvlSts as fis_approval_status1 preserving type )` | `CHAR(1)` | Status of First Approval |
| `CreditDecisionSecondApprvlSts` |  | |  | `cast( CreditDecisionSecondApprvlSts as fis_approval_status2 preserving type )` | `CHAR(1)` | Status of Second Approval |
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
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `OpenCreditAmount` |  | |  | `cast( OpenCreditAmount as ukm_open_credit_amount preserving type )` | `CURR(15)` | Open Credit Amount |
| `CheckedCreditRiskAmount` |  | |  | `cast( CheckedCreditRiskAmount as ukm_checked_credit_risk_amount preserving type )` | `CURR(15)` | Amount for Which the Credit Check Was Performed |
| `CustomerCreditLimitAmount` |  | |  | `cast( coalesce( _CreditAccountExtended( P_ExchangeRateType: :P_ExchangeRateType, P_DisplayCurrency: :P_DisplayCurrency, P_ReadLineItem : :P_ReadLineItem, P_KeyDate : :P_KeyDate ).CustomerCreditLimitAmount, 0 ) as farp_creditlimit_amt preserving type )` | `CURR(23)` | Customer's Credit Limit |
| `CustomerCreditExposureAmount` |  | |  | `cast( coalesce( _CreditAccountExtended( P_ExchangeRateType: :P_ExchangeRateType, P_DisplayCurrency: :P_DisplayCurrency, P_ReadLineItem : :P_ReadLineItem, P_KeyDate : :P_KeyDate ).CustomerCreditExposureAmount, 0 ) as farp_credit_exposure preserving type )` | `CURR(23)` | Credit Exposure Amount |
| `_BusinessPartner` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_DeliveryDocument` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_CreditSegment` | | ✓ | | | | |
| `_CreditRiskClass` | | ✓ | | | | |
| `_Processor` | | ✓ | | | | |
| `_Responsible` | | ✓ | | | | |
| `_Reasons` | | ✓ | | | | |
| `_CaseTypes` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |
| `_CaseSystemStatus` | | ✓ | | | | |
| `_Priority` | | ✓ | | | | |
| `_Category` | | ✓ | | | | |
| `_Individual` | | ✓ | | | | |
| `_CrdtMBusPartnerGroup` | | ✓ | | | | |
| `_CreditAccountExtended` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_SalesDocument` | `I_SalesDocumentBasic` | [1..1] |
| `_DeliveryDocument` | `I_DeliveryDocument` | [1..1] |
| `_DisplayCurrency` | `I_Currency` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_CreditSegment` | `I_CreditManagementSegment` | [1..1] |
| `_CreditRiskClass` | `I_CreditRiskClass` | [0..1] |
| `_Processor` | `I_CreditCaseContact` | [0..1] |
| `_Responsible` | `I_CreditCaseContact` | [0..1] |
| `_Reasons` | `I_CaseReasons` | [0..1] |
| `_CaseTypes` | `I_Casetypes` | [0..1] |
| `_StatusProfile` | `I_CaseStatusProfile` | [0..1] |
| `_CaseSystemStatus` | `I_CaseStatus` | [0..1] |
| `_Priority` | `I_CasePriority` | [0..1] |
| `_Category` | `I_CaseCategory` | [0..1] |
| `_Individual` | `I_Caseindividualstatus` | [0..1] |
| `_CrdtMBusPartnerGroup` | `I_CrdtMBusPartnerGroup` | [0..1] |
| `_CreditAccountExtended` | `I_CreditAccountExtended` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITDECISIONDOCUMENTC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITDECISIONDOCUMENTC')/$value)*

```abap
@EndUserText.label: 'Credit Decision Document - Cube'
@AbapCatalog.sqlViewName: 'ICRDTDCSNDOCC'
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
define view I_CreditDecisionDocumentC
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
  as select from P_DCD_2
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType
                 )
  association [0..1] to I_BusinessPartner         as _BusinessPartner       on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  //  association [0..1] to I_CreditManagementBP      as _CreditManagementBP on  $projection.BusinessPartner = _CreditManagementBP.BusinessPartner
  association [1..1] to I_SalesDocumentBasic      as _SalesDocument         on  $projection.CreditDecisionSalesDocument = _SalesDocument.SalesDocument
                                                                            and $projection.CreditDecisionObjectType    = 'VBAK'
  association [1..1] to I_DeliveryDocument        as _DeliveryDocument      on  $projection.CreditDecisionSalesDocument = _DeliveryDocument.DeliveryDocument
                                                                            and $projection.CreditDecisionObjectType    = 'LIKP'
  association [1..1] to I_Currency                as _DisplayCurrency       on  $projection.DisplayCurrency = _DisplayCurrency.Currency
  association [0..1] to I_Country                 as _Country               on  $projection.Country = _Country.Country
  association [0..1] to I_Region                  as _Region                on  $projection.Country = _Region.Country
                                                                            and $projection.Region  = _Region.Region
  association [1..1] to I_CreditManagementSegment as _CreditSegment         on  $projection.CreditSegment = _CreditSegment.CreditSegment
  association [0..1] to I_CreditRiskClass         as _CreditRiskClass       on  $projection.CreditRiskClass = _CreditRiskClass.CreditRiskClass
  association [0..1] to I_CreditCaseContact       as _Processor             on  $projection.CaseProcessor = _Processor.UserID
  association [0..1] to I_CreditCaseContact       as _Responsible           on  $projection.CaseResponsible = _Responsible.UserID
  association [0..1] to I_CaseReasons             as _Reasons               on  $projection.CaseReason = _Reasons.CaseReason
                                                                            and $projection.CaseType   = _Reasons.CaseType
  association [0..1] to I_Casetypes               as _CaseTypes             on  $projection.CaseType = _CaseTypes.CaseType
  association [0..1] to I_CaseStatusProfile       as _StatusProfile         on  $projection.CaseStatusProfile = _StatusProfile.CaseStatusProfile
  //  association [0..1] to I_CaseSystemStatus        as _CaseSystemStatus      on  $projection.CaseSystemStatus = _CaseSystemStatus.CaseSystemStatus
  association [0..1] to I_CaseStatus              as _CaseSystemStatus      on  $projection.CaseSystemStatus = _CaseSystemStatus.Status
  association [0..1] to I_CasePriority            as _Priority              on  $projection.CasePriority = _Priority.CasePriority
  //  association [0..1] to I_CaseEscalationReason    as _Escalation       on  $projection.CaseEscalationReason = _Escalation.CaseEscalationReason
  association [0..1] to I_CaseCategory            as _Category              on  $projection.CaseType     = _Category.CaseType
                                                                            and $projection.CaseCategory = _Category.CaseCategory
  association [0..1] to I_Caseindividualstatus    as _Individual            on  $projection.CaseStatus        = _Individual.CaseStatus
                                                                            and $projection.CaseStatusProfile = _Individual.CaseStatusProfile
  association [0..1] to I_CrdtMBusPartnerGroup    as _CrdtMBusPartnerGroup  on  $projection.CrdtMgmtBusinessPartnerGroup = _CrdtMBusPartnerGroup.CrdtMgmtBusinessPartnerGroup

  association [0..1] to I_CreditAccountExtended   as _CreditAccountExtended on  $projection.BusinessPartner = _CreditAccountExtended.BusinessPartner
                                                                            and $projection.CreditSegment   = _CreditAccountExtended.CreditSegment
{
  key CaseUUID,
      CaseID,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      BusinessPartner,
      @ObjectModel.foreignKey.association: '_CreditSegment'
      CreditSegment,
      @ObjectModel.foreignKey.association: '_Country'
      cast( _BusinessPartner._CurrentDefaultAddress._StandardAddress.Country as farp_country preserving type)               as Country,

      @ObjectModel.foreignKey.association: '_Region'
      _BusinessPartner._CurrentDefaultAddress._StandardAddress.Region                                                       as Region,
      @ObjectModel.foreignKey.association: '_CreditRiskClass'
      CreditRiskClass,
      @ObjectModel.foreignKey.association: '_Processor'
      cast( CaseProcessor as ukm_coordinator preserving type )                                                              as CaseProcessor,
      @ObjectModel.foreignKey.association: '_Responsible'
      cast( CaseResponsible as fis_responsible preserving type )                                                            as CaseResponsible,
      CaseCreatedBy,
      CaseLastChangedBy,
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
      @ObjectModel.foreignKey.association: '_CrdtMBusPartnerGroup'
      CrdtMgmtBusinessPartnerGroup,

      @DefaultAggregation: #SUM
      cast( NumberOfCreditDecisionDocs as numberofcreditdecisiondocs )                                                      as NumberOfCreditDecisionDocs,

      cast( CaseCreationDate as scmg_create_date preserving type )                                                          as CaseCreationDate,
      cast( CaseLastChangeDate as scmg_change_date preserving type )                                                        as CaseLastChangeDate,
      cast( CaseClosingDate as scmg_closing_date preserving type )                                                          as CaseClosingDate,
      cast( CasePlannedCloseDate as scmg_plan_end_date preserving type )                                                    as CasePlannedCloseDate,

      cast ( CaseIsClosed as case_is_closed preserving type )                                                               as CaseIsClosed,
      //      TodayDate,
      //      ProcessingDays,
      
      @Aggregation.default: #MAX
      cast( NmbrOfDaysPlndClsDateExceeded as numberofdaysafterplannedclose preserving type )                                as NmbrOfDaysPlndClsDateExceeded,

      //      cast(
      //      case NmbrOfDaysPlndClsDateExceeded
      //        when 0
      //        then ''
      //        else 'X'
      //      end   as caseplannedclosedateisexceeded preserving type )                                                             as CasePlannedCloseDateIsExceeded,
      cast( case when ( NmbrOfDaysPlndClsDateExceeded <= 0 )
        then ''
        else 'X'
      end as caseplannedclosedateisexceeded preserving type )                                                                as CasePlannedCloseDateIsExceeded,

      CreditDecisionObjectType,
      cast( CreditDecisionSalesDocument as vbeln )                                                                          as CreditDecisionSalesDocument,
      SalesDocumentCreditStatus,
      CreditDecisionReqUTCDateTime,
      CreditDecisionFirstApprover,
      CreditDecisionSecondApprover,
      cast( CreditDecisionFirstApprvlSts as fis_approval_status1 preserving type )                                          as CreditDecisionFirstApprvlSts,
      cast( CreditDecisionSecondApprvlSts as fis_approval_status2 preserving type )                                         as CreditDecisionSecondApprvlSts,
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

      @Semantics.currencyCode:true
      DisplayCurrency,

      // Open Credit Amount
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( OpenCreditAmount as ukm_open_credit_amount preserving type )                                                    as OpenCreditAmount,
      //
      // Checked Credit Amount
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CheckedCreditRiskAmount as ukm_checked_credit_risk_amount preserving type )                                     as CheckedCreditRiskAmount,

      // Credit Limit Amount for BP in segment
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( coalesce( _CreditAccountExtended(
                       P_ExchangeRateType: :P_ExchangeRateType,
                       P_DisplayCurrency: :P_DisplayCurrency,
                       P_ReadLineItem : :P_ReadLineItem,
                       P_KeyDate : :P_KeyDate ).CustomerCreditLimitAmount, 0 ) as farp_creditlimit_amt preserving type )    as CustomerCreditLimitAmount,

      // Credit Exposure Amount for BP in segment
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( coalesce( _CreditAccountExtended(
                       P_ExchangeRateType: :P_ExchangeRateType,
                       P_DisplayCurrency: :P_DisplayCurrency,
                       P_ReadLineItem : :P_ReadLineItem,
                       P_KeyDate : :P_KeyDate ).CustomerCreditExposureAmount, 0 ) as farp_credit_exposure preserving type ) as CustomerCreditExposureAmount,

      _BusinessPartner,
      //      _CreditManagementBP,
      _SalesDocument,
      _DeliveryDocument,
      _Country,
      _Region,
      _CreditSegment,
      _CreditRiskClass,
      _Processor,
      _Responsible,
      _DisplayCurrency,
      _CaseTypes,
      _Priority,
      _CaseSystemStatus,
      _StatusProfile,
      _Individual,
      _Category,
      //      _Escalation,
      _Reasons,
      _CrdtMBusPartnerGroup,
      _CreditAccountExtended
}
where
  CaseIsClosed is initial //show only open cases
```
