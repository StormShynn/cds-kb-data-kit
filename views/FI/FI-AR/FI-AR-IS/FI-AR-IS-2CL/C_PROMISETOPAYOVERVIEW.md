---
name: C_PROMISETOPAYOVERVIEW
description: This CDS view provides details of promises to pay in SAP Dispute Management. This CDS view provides the data to answer the following business questions: When is the promise to pay due? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROMISETOPAYOVERVIEW')/$value
semantic_en: This CDS view provides details of promises to pay in SAP Dispute Management. This CDS view provides the data to answer the following business questions: When is the promise to pay due? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Promise To Pay Overview — CDS view tiêu dùng dựa trên I_PromiseToPayOverview.
keywords:
  - promise
  - pay
  - overview
  - company
  - code
  - name
  - customer
  - group
  - currency
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
# C_PROMISETOPAYOVERVIEW

**This CDS view provides details of promises to pay in SAP Dispute Management. This CDS view provides the data to answer the following business questions: When is the promise to pay due? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROMISETOPAYOVERVIEW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | | `_Company` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Standard Currency in Client |
| `DueDate` |  | |  |  | `DATS(8)` | Date for Which Payment Is Promised |
| `Status` |  | |  |  | `CHAR(1)` | State of Promise to Pay |
| `CaseSystemStatus` |  | |  |  | `CHAR(3)` | Case: System Status |
| `CaseSystemStatusName` |  | |  | `_CaseSystemStatus._Text[1:Language = :P_Language].StatusName` | `CHAR(40)` | Case: System Status Description |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CountryName` |  | |  | `_Country._Text[1:Language = :P_Language].CountryName` | `CHAR(50)` | Country/Region Name |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `RegionName` |  | |  | `_Region._RegionText[1:Language = :P_Language].RegionName` | `CHAR(20)` | Description |
| `CollectionSpecialistUserName` |  | |  |  | `CHAR(12)` | Collection Specialist |
| `CollectionSpecialistName` |  | | `_ContactCard` | `FullName` | `CHAR(80)` | Full Name of Person |
| `CollectionSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `CollectionSegmentName` |  | |  | `_CollectionSegment._Text[1:Language = :P_Language].CollectionSegmentName` | `CHAR(50)` | Name of Collection Segment |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` | `CUKY(5)` |  |
| `ExchangeRateType` |  | |  | `$parameters.P_ExchangeRateType` | `CHAR(4)` |  |
| `PromisedAmount` |  | |  |  | `CURR(15)` | Amount Promised for Payment |
| `PaidAmount` |  | |  |  | `CURR(15)` | Amount Paid |
| `PromiseToPayDueDays` |  | |  |  | `INT4(10)` | Promise To Pay Due Days |
| `PromiseToPayDueIntervalInDays` |  | |  |  | `INT2(5)` | Promise To Pay Due Period in Days |
| `NetDueInterval1InDays` |  | |  |  | `INT2(5)` | Net Due Interval 1 in Days |
| `NetDueInterval2InDays` |  | |  |  | `INT2(5)` | Net Due Interval 2 in Days |
| `NetDueInterval3InDays` |  | |  |  | `INT2(5)` | Net Due Interval 3 in Days |
| `OpenAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Open Promised Amount |
| `BrokenAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Broken Amount |
| `PromiseToPayDueIntervalText` |  | |  |  | `CHAR(18)` | Promise To Pay Due Period in Days |
| `DueIntvl1OpenAmtInDspCrcy` |  | |  |  | `CURR(23)` | Payment Promises in 1st Period |
| `DueIntvl2OpenAmtInDspCrcy` |  | |  |  | `CURR(23)` | Payment Promises in 2st Period |
| `DueIntvl3OpenAmtInDspCrcy` |  | |  |  | `CURR(23)` | Payment Promises in 3rd Period |
| `DueIntvl4OpenAmtInDspCrcy` |  | |  |  | `CURR(23)` | Payment Promises in 4th Period |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROMISETOPAYOVERVIEW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PROMISETOPAYOVERVIEW')/$value)*

```abap
@EndUserText.label: 'Promise To Pay Overview'
@AbapCatalog.sqlViewName: 'CP2POVERVIEW'
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_PromiseToPayOverview
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language              : sylangu,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate               : sydate,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency       : vdm_v_display_currency,

    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType' , element: 'ExchangeRateType' }
                                      }]
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType      : kurst_curr,
    @Consumption.defaultValue: 10
    P_NetDueInterval1InDays : farp_due_interval1,
    @Consumption.defaultValue: 20
    P_NetDueInterval2InDays : farp_due_interval2,
    @Consumption.defaultValue: 30
    P_NetDueInterval3InDays : farp_due_interval3

  as select from I_PromiseToPayOverview
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType,
                 P_NetDueInterval1InDays : :P_NetDueInterval1InDays,
                 P_NetDueInterval2InDays : :P_NetDueInterval2InDays,
                 P_NetDueInterval3InDays : :P_NetDueInterval3InDays
                 )
{
  // key DisputeCaseUUID
  // CustomerContactUUID

  CompanyCode,
  _Company.CompanyCodeName                                                 as CompanyCodeName,
  Customer,
  _Customer.CustomerName                                                   as CustomerName,
  GroupCurrency,

  //  ,@Consumption.filter.selectionType: #INTERVAL
  DueDate,
  Status,
  CaseSystemStatus,
  _CaseSystemStatus._Text[1:Language = :P_Language].StatusName             as CaseSystemStatusName,
  CustomerCountry,
  _Country._Text[1:Language = :P_Language].CountryName                     as CountryName,
  CustomerRegion,
  _Region._RegionText[1:Language = :P_Language].RegionName                 as RegionName,
  CollectionSpecialistUserName,
  _ContactCard.FullName                                                    as CollectionSpecialistName,
  CollectionSegment,
  _CollectionSegment._Text[1:Language = :P_Language].CollectionSegmentName as CollectionSegmentName,
  CustomerBasicAuthorizationGrp,
  CustomerAccountGroup,
  @Semantics.currencyCode:true
  $parameters.P_DisplayCurrency                                            as DisplayCurrency,
  $parameters.P_ExchangeRateType                                           as ExchangeRateType, //Note - 3332179
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  PromisedAmount,
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  PaidAmount,
  PromiseToPayDueDays,
  PromiseToPayDueIntervalInDays,
  NetDueInterval1InDays,
  NetDueInterval2InDays,
  NetDueInterval3InDays,

  @Semantics.amount.currencyCode: 'DisplayCurrency'
  OpenAmountInDisplayCrcy,

  @Semantics.amount.currencyCode: 'DisplayCurrency'
  BrokenAmountInDisplayCrcy,

  PromiseToPayDueIntervalText,

  @Semantics.amount.currencyCode: 'DisplayCurrency'
  DueIntvl1OpenAmtInDspCrcy,

  @Semantics.amount.currencyCode: 'DisplayCurrency'
  DueIntvl2OpenAmtInDspCrcy,

  @Semantics.amount.currencyCode: 'DisplayCurrency'
  DueIntvl3OpenAmtInDspCrcy,

  @Semantics.amount.currencyCode: 'DisplayCurrency'
  DueIntvl4OpenAmtInDspCrcy
}
```
