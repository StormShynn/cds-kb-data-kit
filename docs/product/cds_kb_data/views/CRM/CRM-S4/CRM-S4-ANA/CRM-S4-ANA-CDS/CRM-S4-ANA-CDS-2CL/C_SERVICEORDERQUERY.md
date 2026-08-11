---
name: C_SERVICEORDERQUERY
description: "This CDS view belongs to Order to Cash Dashboard that can be used both as an embedded and standalone edition. It provides the prerequisites for answering questions about service orders at header level. Examples of business questions include the following: How many open service orders of the top sold-to party, sales organization, or sale office are there? What's the aggregated net value of incoming service orders in the current quarter? Who are the top customers by net value of incoming service orders? How many open service orders were there in the past month? How many incoming service orders for my sales organizations are there in the current month? Which service orders and service contracts are related to a specific solution order?"
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEORDERQUERY')/$value
semantic_en: "This CDS view belongs to Order to Cash Dashboard that can be used both as an embedded and standalone edition. It provides the prerequisites for answering questions about service orders at header level. Examples of business questions include the following: How many open service orders of the top sold-to party, sales organization, or sale office are there? What's the aggregated net value of incoming service orders in the current quarter? Who are the top customers by net value of incoming service orders? How many open service orders were there in the past month? How many incoming service orders for my sales organizations are there in the current month? Which service orders and service contracts are related to a specific solution order?"
semantic_vi: "Service Order - Query — CDS view tiêu dùng dựa trên I_ServiceOrderCube_2."
keywords:
  - "Service Order - Query"
  - "service"
  - "order"
  - "query"
  - "object"
  - "type"
  - "description"
  - "status"
  - "document"
tags:
  - CRM
  - bo:businesspartner
  - component:CRM-S4-ANA-CDS-2CL
  - consumption-view
  - contract
  - CRM-S4
  - CRM-S4-ANA
  - CRM-S4-ANA-CDS
  - CRM-S4-ANA-CDS-2CL
  - customer
  - order
---
# C_SERVICEORDERQUERY

**This CDS view belongs to Order to Cash Dashboard that can be used both as an embedded and standalone edition. It provides the prerequisites for answering questions about service orders at header level. Examples of business questions include the following: How many open service orders of the top sold-to party, sales organization, or sale office are there? What's the aggregated net value of incoming service orders in the current quarter? Who are the top customers by net value of incoming service orders? How many open service orders were there in the past month? How many incoming service orders for my sales organizations are there in the current month? Which service orders and service contracts are related to a specific solution order?**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEORDERQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceObjectType` |  | |  |  | `CHAR(10)` | Business Trans. Cat. |
| `ServiceOrder` |  | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceOrderDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `ServiceOrderStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `RequestedServiceEndDate` |  | |  |  | `DATS(8)` | Changed On |
| `ServiceDocumentCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `SrvcOrdCreationQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `SrvcOrdCreationMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `SrvcOrdCreationYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `ServiceDocumentPriority` |  | |  |  | `NUMC(1)` | Activity Priority |
| `ServiceDocumentHasError` |  | |  |  | `CHAR(1)` | Error Status |
| `ServiceDocumentIsOpen` |  | |  |  | `CHAR(1)` | Status "Open" |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` | `CUKY(5)` |  |
| `NetAmountInDisplayCurrency` |  | |  | `currency_conversion( amount => ServiceDocNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_date => ServiceDocumentCreationDate, exchange_rate_type => 'M' )` | `CURR(15)` |  |
| `NumberOfIncomingServiceOrders` |  | |  |  | `INT4(10)` |  |
| `NumberOfOpenServiceOrders` |  | |  |  | `INT4(10)` |  |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEORDERQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICEORDERQUERY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Service Order - Query'
@VDM: {
  viewType: #CONSUMPTION,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog: {
  sqlViewName: 'CSRVCORDQRY',
  compiler.compareFilter: true
}
@ObjectModel: {
//   representativeKey: 'ServiceOrder',
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_QUERY],
   modelingPattern: #ANALYTICAL_QUERY
}
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

@Analytics.query: true

@OData.publish: true

define view C_ServiceOrderQuery
  with parameters
    P_DisplayCurrency : vdm_v_display_currency
  as select from I_ServiceOrderCube_2 as ServiceOrderQuery
{
  @AnalyticsDetails.query.display: #KEY_TEXT
  ServiceObjectType,
  ServiceOrder,
  ServiceOrderDescription,
  ServiceOrderStatus,
  ServiceDocumentType,
  RefBusinessSolutionOrder,

  SoldToParty,

  RequestedServiceEndDate,
  ServiceDocumentCreationDate,
  @Semantics.calendar.quarter
  SrvcOrdCreationQuarter,
  @Semantics.calendar.month
  SrvcOrdCreationMonth,
  @Semantics.calendar.year
  SrvcOrdCreationYear,

  ServiceDocumentPriority,

  ServiceDocumentHasError,

  ServiceDocumentIsOpen,

  @Semantics.currencyCode: true
//  cast(:P_DisplayCurrency as vdm_v_display_currency) as DisplayCurrency,
   $parameters.P_DisplayCurrency  as DisplayCurrency,

  @DefaultAggregation: #FORMULA
  @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
  currency_conversion( amount => ServiceDocNetAmount,
                       source_currency => TransactionCurrency,
                       target_currency => $parameters.P_DisplayCurrency,
                       exchange_rate_date => ServiceDocumentCreationDate,
                       exchange_rate_type => 'M'
                     )                 as NetAmountInDisplayCurrency,

  @DefaultAggregation: #SUM
  NumberOfIncomingServiceOrders,

  @DefaultAggregation: #SUM
  NumberOfOpenServiceOrders,

  @Semantics.currencyCode:true
  TransactionCurrency,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOrganization,

  @AnalyticsDetails.query.display: #KEY_TEXT
  DistributionChannel,

  @AnalyticsDetails.query.display: #KEY_TEXT
  Division,

  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesOffice,

  @AnalyticsDetails.query.display: #KEY_TEXT
  SalesGroup

}
```
