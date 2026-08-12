---
name: C_OPENDISPUTECASE
description: "This CDS view provides details of open dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: What's the status of the open dispute case? What's the priority, the reason, or the disputed amount of a dispute case? Who's the processor of the open dispute case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENDISPUTECASE')/$value
semantic_en: "This CDS view provides details of open dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: What's the status of the open dispute case? What's the priority, the reason, or the disputed amount of a dispute case? Who's the processor of the open dispute case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Open Dispute Case — CDS view tiêu dùng dựa trên I_OpenDisputeCase."
keywords:
  - "open"
  - "dispute"
  - "case"
  - "company"
  - "code"
  - "customer"
  - "name"
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
# C_OPENDISPUTECASE

**This CDS view provides details of open dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: What's the status of the open dispute case? What's the priority, the reason, or the disputed amount of a dispute case? Who's the processor of the open dispute case? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENDISPUTECASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` |  | |  |  | `CHAR(32)` | UUID in Character Format |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CountryName` |  | |  | `_CustomerCountry._Text[1:Language = :P_Language].CountryName` | `CHAR(50)` | Country/Region Name |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `RegionName` |  | |  | `_CustomerRegion._RegionText[1:Language = :P_Language].RegionName` | `CHAR(20)` | Description |
| `DisputeCaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `DisputeCaseProcessorFullName` |  | | `_CaseProcessor` | `FullName` | `CHAR(80)` | Full Name of Person |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | | `_CaseCoordinator` | `FullName` | `CHAR(80)` | Full Name of Person |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `CaseTypeName` |  | |  | `_CaseType._Text[1:Language = :P_Language].CaseTypeName` | `CHAR(40)` | Short Text for Case Type |
| `DisputeCaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `DisputeCaseReasonName` |  | |  | `_CaseReason._Text[1:Language = :P_Language].CaseReasonName` | `CHAR(60)` | Text Field of Length 60 |
| `Status` |  | |  |  | `CHAR(3)` | Case: System Status |
| `StatusName` |  | |  | `_CaseStatus._Text[1:Language = :P_Language].StatusName` | `CHAR(40)` | Case: System Status Description |
| `StatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseStatusProfile` |  | |  | `_StatProf._Text[1:Language = :P_Language].CaseStatusProfile` | `CHAR(8)` | Case: Status Profile |
| `CaseProcessingStatus` |  | |  |  | `NUMC(2)` | Case: Status |
| `CaseProcessingStatusName` |  | |  | `_StatusProfile._Text[1:Language = :P_Language].CaseStatusName` | `CHAR(40)` | Case: Status Description |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `DisputeCasePriorityName` |  | |  | `_Prio._Text[1:Language = :P_Language].CasePriorityName` | `CHAR(40)` | Text, 40 Characters Long |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `DisputedAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Current Disputed Amount in Display Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NumberOfDisputeCases` |  | |  |  | `INT4(10)` | Number of Dispute Cases |
| `DisputeCase` |  | |  |  | `CHAR(12)` | Case ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENDISPUTECASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_OPENDISPUTECASE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Open Dispute Case'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'COPENDISPUTECASE'
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
define view C_OpenDisputeCase
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language         : sylangu,

    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType' , element: 'ExchangeRateType' }
                                      }]
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,

    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency

  as select from I_OpenDisputeCase
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType
                 )
{
  //  @ObjectModel.filter.enabled: false
  DisputeCaseUUID,
  CaseID,

  CompanyCode,
  Customer,
  _CompanyCode.CompanyCodeName                                     as CompanyCodeName,
  _Customer.CustomerName                                           as CustomerName,
  CustomerCountry,
  _CustomerCountry._Text[1:Language = :P_Language].CountryName     as CountryName,
  CustomerRegion,
  _CustomerRegion._RegionText[1:Language = :P_Language].RegionName as RegionName,
  DisputeCaseProcessor,
  _CaseProcessor.FullName                                          as DisputeCaseProcessorFullName,
  DisputeCaseCoordinator,
  _CaseCoordinator.FullName                                        as DsputCaseCoordinatorFullName,
  CaseType,
  _CaseType._Text[1:Language = :P_Language].CaseTypeName           as CaseTypeName,
  DisputeCaseReason,
  _CaseReason._Text[1:Language = :P_Language].CaseReasonName       as DisputeCaseReasonName,
  Status,
  _CaseStatus._Text[1:Language = :P_Language].StatusName           as StatusName,
  StatusProfile,
  _StatProf._Text[1:Language = :P_Language].CaseStatusProfile      as CaseStatusProfile,

  CaseProcessingStatus,
  _StatusProfile._Text[1:Language = :P_Language].CaseStatusName    as CaseProcessingStatusName,

//  @Consumption.filter.selectionType: #SINGLE
  DisputeCasePriority,
  _Prio._Text[1:Language = :P_Language].CasePriorityName           as DisputeCasePriorityName,
  CustomerBasicAuthorizationGrp,
  CustomerAccountGroup,

  //   ,@Semantics.currencyCode:true
  //    $parameters.P_DisplayCurrency as DisplayCurrency

  //   ,@Semantics.amount.currencyCode: 'DisplayCurrency'

//  @Consumption.filter.selectionType: #INTERVAL
  CaseCreationDate,

  @DefaultAggregation: #SUM
  DisputedAmountInDisplayCrcy,
  DisplayCurrency,
  @DefaultAggregation: #SUM
  NumberOfDisputeCases,

  DisputeCase

}
```
