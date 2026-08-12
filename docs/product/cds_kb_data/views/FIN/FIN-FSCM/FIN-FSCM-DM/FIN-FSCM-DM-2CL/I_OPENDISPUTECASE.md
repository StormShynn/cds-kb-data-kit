---
name: I_OPENDISPUTECASE
description: "This CDS view is designed to provide a comprehensive overview of open dispute cases within an organization. It aggregates and presents data related to dispute cases in SAP Dispute Management, including their attributes, status, priority, and associated personnel, allowing for detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the details of open dispute cases, including their unique identifiers and associated company codes? Which customers are involved in these dispute cases, and what are their account and authorization groups? Who are the processors and coordinators handling these dispute cases, and what are their full names? What are the reasons and types associated with each dispute case? What is the status and priority of each dispute case, and how are they categorized in terms of status profiles? What are the creation dates and disputed amounts for each case, both in the original currency and the display currency? How many dispute cases are currently open, and what is their distribution across different regions and countries? How can the data be aggregated to provide insights into the total disputed amounts and the number of cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTECASE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of open dispute cases within an organization. It aggregates and presents data related to dispute cases in SAP Dispute Management, including their attributes, status, priority, and associated personnel, allowing for detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the details of open dispute cases, including their unique identifiers and associated company codes? Which customers are involved in these dispute cases, and what are their account and authorization groups? Who are the processors and coordinators handling these dispute cases, and what are their full names? What are the reasons and types associated with each dispute case? What is the status and priority of each dispute case, and how are they categorized in terms of status profiles? What are the creation dates and disputed amounts for each case, both in the original currency and the display currency? How many dispute cases are currently open, and what is their distribution across different regions and countries? How can the data be aggregated to provide insights into the total disputed amounts and the number of cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Open Dispute Case - Cube — CDS view giao diện dựa trên P_OpenDisputeCase1."
keywords:
  - "open"
  - "dispute"
  - "case"
  - "cube"
  - "company"
  - "code"
  - "customer"
  - "country"
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
# I_OPENDISPUTECASE

**This CDS view is designed to provide a comprehensive overview of open dispute cases within an organization. It aggregates and presents data related to dispute cases in SAP Dispute Management, including their attributes, status, priority, and associated personnel, allowing for detailed analysis and reporting. This CDS view provides the data to answer the following business questions: What are the details of open dispute cases, including their unique identifiers and associated company codes? Which customers are involved in these dispute cases, and what are their account and authorization groups? Who are the processors and coordinators handling these dispute cases, and what are their full names? What are the reasons and types associated with each dispute case? What is the status and priority of each dispute case, and how are they categorized in terms of status profiles? What are the creation dates and disputed amounts for each case, both in the original currency and the display currency? How many dispute cases are currently open, and what is their distribution across different regions and countries? How can the data be aggregated to provide insights into the total disputed amounts and the number of cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTECASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` | ✓ | |  |  | `CHAR(32)` | UUID in Character Format |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CustomerCountry` |  | |  | `cast( _Customer._StandardAddress.Country as farp_land1 preserving type )` | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | | `_Customer._StandardAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `CustomerBasicAuthorizationGrp` |  | | `_Customer` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `DisputeCaseProcessor` |  | |  | `cast( DisputeCaseProcessor as farp_processor preserving type )` | `CHAR(12)` | Processor |
| `DisputeCaseProcessorFullName` |  | |  | `cast( DisputeCaseProcessorFullName as farp_processor_full_name preserving type )` | `CHAR(80)` | Full Name of Processor |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | |  | `cast( DsputCaseCoordinatorFullName as farp_coordinator_full_name preserving type )` | `CHAR(80)` | Fullname of Coordinator |
| `DisputeCaseReason` |  | |  | `cast( DisputeCaseReason as scmg_reason_code preserving type )` | `CHAR(4)` | Reason for Case |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `StatusProfile` |  | |  | `cast( StatusProfile as scmgstatusprofid preserving type )` | `CHAR(8)` | Case: Status Profile |
| `CaseProcessingStatus` |  | |  | `cast( CaseProcessingStatus as scmgstatusonr preserving type)` | `NUMC(2)` | Case: Status |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `CaseCreationDate` |  | |  | `cast( CaseCreationDate as udm_create_date preserving type )` | `DATS(8)` | Created On |
| `DisputedAmount` |  | |  |  | `CURR(15)` | Current Disputed Amount |
| `Currency` |  | |  | `cast( Currency as currency preserving type )` | `CUKY(5)` | Currency Key |
| `DisputedAmountInDisplayCrcy` |  | |  | `cast( DisputedAmountInDisplayCrcy as farp_disputed_amt_dspcrcy )` | `CURR(23)` | Current Disputed Amount in Display Currency |
| `DisplayCurrency` |  | |  | `cast( :P_DisplayCurrency as disp_curr preserving type )` | `CUKY(5)` | Display Currency |
| `NumberOfDisputeCases` |  | |  | `cast( 1 as farp_number_of_dispute_case )` | `INT4(10)` | Number of Dispute Cases |
| `DisputeCase` |  | |  | `CaseID` | `CHAR(12)` | Case ID |
| `_CaseUUID` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_CustomerCountry` | | ✓ | | | | |
| `_CustomerRegion` | | ✓ | | | | |
| `_CaseReason` | | ✓ | | | | |
| `_CaseType` | | ✓ | | | | |
| `_CaseStatus` | | ✓ | | | | |
| `_Prio` | | ✓ | | | | |
| `_StatProf` | | ✓ | | | | |
| `_StatusProfile` | | ✓ | | | | |
| `_CaseProcessor` | | ✓ | | | | |
| `_CaseCoordinator` | | ✓ | | | | |
| `_Processor` | | ✓ | | | | |
| `_Coordinator` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CaseUUID` | `I_CaseAttributes` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_CustomerCountry` | `I_Country` | [0..1] |
| `_CustomerRegion` | `I_Region` | [0..1] |
| `_CaseReason` | `I_CaseReason` | [0..1] |
| `_CaseType` | `I_CaseType` | [0..1] |
| `_CaseStatus` | `I_CaseStatus` | [0..1] |
| `_Prio` | `I_CasePriority` | [0..1] |
| `_StatProf` | `I_CaseStatProfile` | [0..1] |
| `_StatusProfile` | `I_CaseIndivStatus` | [0..1] |
| `_CaseProcessor` | `I_DisputeCaseContact` | [0..1] |
| `_CaseCoordinator` | `I_DisputeCaseContact` | [0..1] |
| `_Processor` | `I_User` | [0..1] |
| `_Coordinator` | `I_User` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTECASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPENDISPUTECASE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Open Dispute Case - Cube'
@AbapCatalog.sqlViewName: 'IOPENDISPUTECASE'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory : #CUBE
@Analytics.internalName:#LOCAL
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_CaseUUID', '_CaseProcessor', '_CaseCoordinator' ]
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'Customer'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
define view I_OpenDisputeCase
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr

  as select from P_OpenDisputeCase1 //as udmcaseattr00
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType
                 )
  association [1..1] to I_CaseAttributes     as _CaseUUID        on  _CaseUUID.CaseUUID = $projection.DisputeCaseUUID
  //  association [1..1] to I_CaseAttribute      as _CaseUUID        on  $projection.DisputeCaseUUID = _CaseUUID.CaseUniqueID

  //association [0..1] to I_Customer as _Customer on _Customer.Customer = $projection.Customer

  association [0..1] to I_Currency           as _Currency        on  $projection.Currency = _Currency.Currency

  association [0..1] to I_Currency           as _DisplayCurrency on  $projection.DisplayCurrency = _DisplayCurrency.Currency

  association [0..1] to I_Country            as _CustomerCountry on  $projection.CustomerCountry = _CustomerCountry.Country

  association [0..1] to I_Region             as _CustomerRegion  on  $projection.CustomerCountry = _CustomerRegion.Country
                                                                 and $projection.CustomerRegion  = _CustomerRegion.Region

  association [0..1] to I_CaseReason         as _CaseReason      on  $projection.CaseType          = _CaseReason.CaseType
                                                                 and $projection.DisputeCaseReason = _CaseReason.CaseReason

  association [0..1] to I_CaseType           as _CaseType        on  $projection.CaseType = _CaseType.CaseType

  association [0..1] to I_CaseStatus         as _CaseStatus      on  $projection.Status = _CaseStatus.Status

  association [0..1] to I_CasePriority       as _Prio            on  $projection.DisputeCasePriority = _Prio.CasePriority

  association [0..1] to I_CaseStatProfile    as _StatProf        on  $projection.StatusProfile = _StatProf.CaseStatusProfile

  association [0..1] to I_CaseIndivStatus    as _StatusProfile   on  $projection.StatusProfile        = _StatusProfile.CaseStatusProfile
                                                                 and $projection.CaseProcessingStatus = _StatusProfile.CaseStatus

  association [0..1] to I_DisputeCaseContact as _CaseProcessor   on  $projection.DisputeCaseProcessor = _CaseProcessor.UserID
  association [0..1] to I_DisputeCaseContact as _CaseCoordinator on  $projection.DisputeCaseCoordinator = _CaseCoordinator.UserID

  // obsolete, associations to I_User just kept for compatibility reasons
  association [0..1] to I_User               as _Processor       on  $projection.DisputeCaseProcessor = _Processor.UserID
  association [0..1] to I_User               as _Coordinator     on  $projection.DisputeCaseCoordinator = _Coordinator.UserID
{
      //      @ObjectModel.filter.enabled: false     NOT ALLOWED HERE!
      @ObjectModel.foreignKey.association: '_CaseUUID'
  key DisputeCaseUUID,

      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,

      @ObjectModel.foreignKey.association: '_Customer'
  key Customer,

      CaseID,

      @ObjectModel.foreignKey.association: '_CustomerCountry'
      //    _Customer._StandardAddress.Country as CustomerCountry,
      //      cast( _Customer._StandardAddress._Country.Country as farp_land1 preserving type )                  as CustomerCountry,
      cast( _Customer._StandardAddress.Country as farp_land1 preserving type )           as CustomerCountry,

      //    _CompanyCode.Country as CustomerCountry,

      @ObjectModel.foreignKey.association: '_CustomerRegion'
      //      _Customer._StandardAddress._Region.Region                                          as CustomerRegion,
      _Customer._StandardAddress.Region                                                  as CustomerRegion,


      _Customer.CustomerAccountGroup                                                     as CustomerAccountGroup,

      _Customer.AuthorizationGroup                                                       as CustomerBasicAuthorizationGrp,

      @ObjectModel.foreignKey.association: '_CaseProcessor'
      cast( DisputeCaseProcessor as farp_processor preserving type )                     as DisputeCaseProcessor,
      cast( DisputeCaseProcessorFullName as farp_processor_full_name preserving type )   as DisputeCaseProcessorFullName,

      @ObjectModel.foreignKey.association: '_CaseCoordinator'
      DisputeCaseCoordinator,
      cast( DsputCaseCoordinatorFullName as farp_coordinator_full_name preserving type ) as DsputCaseCoordinatorFullName,

      //    _User.UserDescription as DisputeCaseProcessorFullName,

      //    _User._BusinessPartner._StandardAddress._DefaultEmailAddress.EmailAddress as EmailAddress,

      //    _User._BusinessPartner._StandardAddress._DefaultPhoneNumber.InternationalPhoneNumber as PhoneNumber,

      @ObjectModel.foreignKey.association: '_CaseReason'
      //    DisputeCaseReason,
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
      DisputeCasePriority,

      cast( CaseCreationDate as udm_create_date preserving type )                        as CaseCreationDate,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      DisputedAmount,

      //    @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode:true
      cast( Currency as currency preserving type )                                       as Currency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( DisputedAmountInDisplayCrcy as farp_disputed_amt_dspcrcy )                   as DisputedAmountInDisplayCrcy,

      //    @ObjectModel.foreignKey.association: '_DisplayCurrency'
      //      @Semantics.currencyCode:true
      cast( :P_DisplayCurrency as disp_curr preserving type )                            as DisplayCurrency,

      @DefaultAggregation: #SUM
      cast( 1 as farp_number_of_dispute_case )                                           as NumberOfDisputeCases,

      CaseID                                                                             as DisputeCase,

      _CaseUUID,
      //      _CaseAttributes,
      _Customer,
      _CustomerCountry,
      _CustomerRegion,
      _CompanyCode,
      _CaseType,
      _CaseReason,
      _CaseStatus,
      _Prio,
      _StatProf,
      _StatusProfile,
      _Currency,
      _DisplayCurrency,
      _CaseProcessor,
      _CaseCoordinator,
      _Processor, //obsolete, just kept for compatibility reasons
      _Coordinator //obsolete, just kept for compatibility reasons
};
```
