---
name: I_CREDITACCTWITHTODOCUBE
description: "This CDS view is designed to provide a comprehensive overview of credit account information, including associated tasks or \"ToDos\" related to credit decision documents, credit limit requests, and re-submissions. It aggregates data from various sources to offer insights into the credit management process for business partners, including their credit exposure, credit limits, and critical account status. This CDS view provides the data to answer the following business questions: Which business partners have outstanding credit decision documents, credit limit requests, or re-submissions? What is the credit exposure and credit limit for each business partner in the specified display currency? Are there any business partners marked as critical, and what are the reasons for blocking their credit accounts? How many credit decision documents, credit limit requests, and re-submissions are associated with each business partner? Who is the credit analyst responsible for each business partner's credit segment? What is the risk class and business partner group associated with each credit account? What are the country and region details for each business partner's credit account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITACCTWITHTODOCUBE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of credit account information, including associated tasks or \"ToDos\" related to credit decision documents, credit limit requests, and re-submissions. It aggregates data from various sources to offer insights into the credit management process for business partners, including their credit exposure, credit limits, and critical account status. This CDS view provides the data to answer the following business questions: Which business partners have outstanding credit decision documents, credit limit requests, or re-submissions? What is the credit exposure and credit limit for each business partner in the specified display currency? Are there any business partners marked as critical, and what are the reasons for blocking their credit accounts? How many credit decision documents, credit limit requests, and re-submissions are associated with each business partner? Who is the credit analyst responsible for each business partner's credit segment? What is the risk class and business partner group associated with each credit account? What are the country and region details for each business partner's credit account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Account With ToDo - Cube — CDS view giao diện dựa trên I_CreditAccountExtended."
keywords:
  - "credit"
  - "account"
  - "with"
  - "todo"
  - "cube"
  - "business"
  - "partner"
  - "segment"
  - "risk"
  - "class"
  - "crdt"
  - "mgmt"
  - "group"
  - "analyst"
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - task
---
# I_CREDITACCTWITHTODOCUBE

**This CDS view is designed to provide a comprehensive overview of credit account information, including associated tasks or "ToDos" related to credit decision documents, credit limit requests, and re-submissions. It aggregates data from various sources to offer insights into the credit management process for business partners, including their credit exposure, credit limits, and critical account status. This CDS view provides the data to answer the following business questions: Which business partners have outstanding credit decision documents, credit limit requests, or re-submissions? What is the credit exposure and credit limit for each business partner in the specified display currency? Are there any business partners marked as critical, and what are the reasons for blocking their credit accounts? How many credit decision documents, credit limit requests, and re-submissions are associated with each business partner? Who is the credit analyst responsible for each business partner's credit segment? What is the risk class and business partner group associated with each credit account? What are the country and region details for each business partner's credit account? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITACCTWITHTODOCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` | ✓ | |  |  | `CHAR(10)` | Credit Segment |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditAnalyst` |  | |  | `cast( e.CreditAnalyst as fis_creditanalyst preserving type )` | `CHAR(10)` | Credit Analyst |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `CustomerCreditExposureAmount` |  | |  | `cast( a.CustomerCreditExposureAmount as farp_credit_exposure preserving type )` | `CURR(23)` | Credit Exposure Amount |
| `CustomerCreditLimitAmount` |  | |  | `cast( a.CustomerCreditLimitAmount as farp_creditlimit_amt preserving type )` | `CURR(23)` | Customer's Credit Limit |
| `CreditAccountResubmissionDate` |  | |  |  | `DATS(8)` | Resubmission Date |
| `BusinessPartnerIsCritical` |  | |  | `cast( a.BusinessPartnerIsCritical as farp_critical_account preserving type )` | `CHAR(1)` | Special Attention Required |
| `CreditLimitIsZero` |  | |  | `cast( a.CreditLimitIsZero as farp_crdtlmt_is_zero preserving type )` | `CHAR(1)` | Credit Limit is Zero |
| `CreditAccountBlockReason` |  | |  | `cast( CreditAccountBlockReason as farp_crdtacct_block_reason preserving type )` | `CHAR(2)` | Credit Account Blocking Reason |
| `NumberOfCreditDecisionDocs` |  | |  | `cast( b.NumberOfCreditDecisionDocs as numberofcreditdecisiondocs preserving type )` | `INT4(10)` | Number of Documented Credit Decisions |
| `NumberOfCreditLimitRequests` |  | |  | `cast( c.NumberOfCreditLimitRequests as numberofcreditlimitrequests preserving type )` | `INT4(10)` | Number of Credit Limit Requests |
| `NumberOfResubmissions` |  | |  | `cast( d.NumberOfResubmissions as numberofresubmissions )` | `INT4(10)` | Number of Resubmisisons |
| `BPHasCreditDecisionDocument` |  | |  | `cast( b.BPHasCreditDecisionDocument as creditdecisiondoc_exists preserving type )` | `CHAR(1)` | Documented Credit Decision exists |
| `BPHasCreditLimitRequest` |  | |  | `cast( c.BPHasCreditLimitRequest as creditlimitrequest_exists preserving type )` | `CHAR(1)` | Credit Limit Request exists |
| `BPHasResubmission` |  | |  | `cast( d.BPHasResubmission as resubmission_exists preserving type)` | `CHAR(1)` | Resubmission exists |
| `_CreditSegment` | | ✓ | | | | |
| `_CreditManagementBP` | | ✓ | | | | |
| `_CreditAnalyst` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_CreditBlockReason` | | ✓ | | | | |
| `_CreditRiskClass` | | ✓ | | | | |
| `_CrdtMBusPartnerGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreditSegment` | `I_CreditManagementSegment` | [0..1] |
| `_CreditManagementBP` | `I_CreditManagementBP` | [1..1] |
| `_CreditAnalyst` | `I_BusinessPartner` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [1..1] |
| `_CreditBlockReason` | `I_CreditBlockReason` | [0..1] |
| `_CreditRiskClass` | `I_CreditRiskClass` | [1..1] |
| `_CrdtMBusPartnerGroup` | `I_CrdtMBusPartnerGroup` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITACCTWITHTODOCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITACCTWITHTODOCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICRDTACCTTODOC'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@EndUserText.label: 'Credit Account With ToDo - Cube'
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
define view I_CreditAcctWithToDoCube
  with parameters
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.defaultValue: 'Y' // Read also line items from BSEG
    P_ReadLineItem     : read_fiar_lineitems,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate
  as select from           I_CreditAccountExtended
                 (
                              P_ExchangeRateType: :P_ExchangeRateType,
                              P_DisplayCurrency: :P_DisplayCurrency,
                              P_ReadLineItem : :P_ReadLineItem,
                              P_KeyDate : :P_KeyDate
                              )                  as a
  // Credit Decision Documents:
    left outer to one join P_CreditAcctWithToDo1 as b on  a.BusinessPartner = b.BusinessPartner
                                                      and a.CreditSegment   = b.CreditSegment
  // Credit Limit Requests:
    left outer to one join P_CreditAcctWithToDo2 as c on  a.BusinessPartner = c.BusinessPartner
                                                      and a.CreditSegment   = c.CreditSegment
  //Resubmission:
    left outer to one join P_CreditAcctWithToDo3 as d on  a.BusinessPartner = d.BusinessPartner
                                                      and a.CreditSegment   = d.CreditSegment

  //BP Manager from relationships
    left outer to one join P_CreditAcctWithToDo4 as e on  a.BusinessPartner = e.BusinessPartner
                                                      and a.CreditSegment   = e.CreditSegment

  association [0..1] to I_CreditManagementSegment as _CreditSegment     on  $projection.CreditSegment = _CreditSegment.CreditSegment
  association [1..1] to I_CreditManagementBP   as _CreditManagementBP   on  $projection.BusinessPartner = _CreditManagementBP.BusinessPartner
  association [0..1] to I_BusinessPartner      as _CreditAnalyst        on  $projection.CreditAnalyst = _CreditAnalyst.BusinessPartner
  association [1..1] to I_Currency             as _DisplayCurrency      on  $projection.DisplayCurrency = _DisplayCurrency.Currency
  association [0..1] to I_CreditBlockReason    as _CreditBlockReason    on  $projection.CreditAccountBlockReason = _CreditBlockReason.CreditAccountBlockReason
  association [1..1] to I_CreditRiskClass      as _CreditRiskClass      on  $projection.CreditRiskClass = _CreditRiskClass.CreditRiskClass
  association [0..1] to I_CrdtMBusPartnerGroup as _CrdtMBusPartnerGroup on  $projection.CrdtMgmtBusinessPartnerGroup = _CrdtMBusPartnerGroup.CrdtMgmtBusinessPartnerGroup
  association [0..1] to I_Country              as _Country              on  $projection.Country = _Country.Country
  association [0..1] to I_Region               as _Region               on  $projection.Country = _Region.Country
                                                                        and $projection.Region  = _Region.Region
{
      @ObjectModel.foreignKey.association: '_CreditManagementBP'
  key a.BusinessPartner,
  
      @ObjectModel.foreignKey.association: '_CreditSegment'
  key a.CreditSegment,
      @ObjectModel.foreignKey.association: '_CreditRiskClass'
      CreditRiskClass,
      @ObjectModel.foreignKey.association: '_CrdtMBusPartnerGroup'
      CrdtMgmtBusinessPartnerGroup,

      @ObjectModel.foreignKey.association: '_CreditAnalyst'
      cast( e.CreditAnalyst  as fis_creditanalyst preserving type )                        as CreditAnalyst,

      @ObjectModel.foreignKey.association: '_Country'
      Country,
      @ObjectModel.foreignKey.association: '_Region'
      Region,
      @ObjectModel.foreignKey.association: '_DisplayCurrency'
      @Semantics.currencyCode: true
      a.DisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( a.CustomerCreditExposureAmount as farp_credit_exposure preserving type )         as CustomerCreditExposureAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( a.CustomerCreditLimitAmount as farp_creditlimit_amt preserving type )            as CustomerCreditLimitAmount,

      a.CreditAccountResubmissionDate,
      @Semantics.booleanIndicator:true
      cast( a.BusinessPartnerIsCritical as farp_critical_account preserving type )           as BusinessPartnerIsCritical,
      cast( a.CreditLimitIsZero as farp_crdtlmt_is_zero preserving type )                    as CreditLimitIsZero,
      @ObjectModel.foreignKey.association: '_CreditBlockReason'
      cast( CreditAccountBlockReason as farp_crdtacct_block_reason preserving type )       as CreditAccountBlockReason,

      @DefaultAggregation: #SUM
      cast( b.NumberOfCreditDecisionDocs as  numberofcreditdecisiondocs preserving type  ) as NumberOfCreditDecisionDocs,
      @DefaultAggregation: #SUM
      cast( c.NumberOfCreditLimitRequests as numberofcreditlimitrequests preserving type ) as NumberOfCreditLimitRequests,
      @DefaultAggregation: #SUM
      cast( d.NumberOfResubmissions as numberofresubmissions )                             as NumberOfResubmissions,

      cast( b.BPHasCreditDecisionDocument as creditdecisiondoc_exists preserving type )      as BPHasCreditDecisionDocument,
      cast( c.BPHasCreditLimitRequest as creditlimitrequest_exists preserving type )         as BPHasCreditLimitRequest,
      cast( d.BPHasResubmission as resubmission_exists preserving type)                      as BPHasResubmission,

      _CreditManagementBP,
      _CreditSegment,
      _CreditAnalyst,
      _DisplayCurrency,
      //      _Coordinator,
      _CreditBlockReason,
      _CreditRiskClass,
      _CrdtMBusPartnerGroup,
      _Country,
      _Region
}
where
     b.NumberOfCreditDecisionDocs  > 0
  or c.NumberOfCreditLimitRequests > 0
  or d.NumberOfResubmissions       > 0
```
