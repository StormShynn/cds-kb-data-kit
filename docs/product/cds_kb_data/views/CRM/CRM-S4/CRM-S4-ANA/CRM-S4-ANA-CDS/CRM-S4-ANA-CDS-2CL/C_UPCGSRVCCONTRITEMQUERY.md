---
name: C_UPCGSRVCCONTRITEMQUERY
description: "Upcoming Service Contract Item - Query"
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_UPCGSRVCCONTRITEMQUERY')/$value
semantic_en: "Upcoming Service Contract Item - Query"
semantic_vi: "Upcoming Service Contract Item - Query — CDS view tiêu dùng dựa trên I_UpcgSrvcContrItemCube."
keywords:
  - "upcoming"
  - "service"
  - "contract"
  - "item"
  - "query"
  - "document"
  - "type"
  - "description"
tags:
  - CRM
  - component:CRM-S4-ANA-CDS-2CL
  - consumption-view
  - contract
  - CRM-S4
  - CRM-S4-ANA
  - CRM-S4-ANA-CDS
  - CRM-S4-ANA-CDS-2CL
---
# C_UPCGSRVCCONTRITEMQUERY

**Upcoming Service Contract Item - Query**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_UPCGSRVCCONTRITEMQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContract` | ✓ | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceContractItem` | ✓ | |  |  | `NUMC(6)` | Shortened Item Number in Document |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Transaction ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ServiceContractDescription` |  | |  |  | `CHAR(40)` | Transaction Description |
| `ServiceContractItemProduct` |  | |  |  | `CHAR(40)` | Product |
| `ServiceContractItemStartDate` |  | |  |  | `DATS(8)` |  |
| `ServiceContractItemEndDate` |  | |  |  | `DATS(8)` |  |
| `SrvcContrStartMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `SrvcContrStartQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `SrvcContrStartYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `SrvcContrEndMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `SrvcContrEndQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `SrvcContrEndYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `ServiceDocItemCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date for a Business Transaction |
| `ServiceContractItemStatus` |  | |  |  | `CHAR(4)` | Life Cycle Status |
| `ServiceContractItemCanclnParty` |  | |  |  | `CHAR(4)` | Cancelling Party |
| `ServiceContractItmCanclnReason` |  | |  |  | `CHAR(4)` | CRM Service : Reason for Cancellation |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Sold-To Party's External Reference Number |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-To Party |
| `RespEmployeeBusinessPartnerId` |  | |  |  | `CHAR(10)` | Employee Responsible |
| `RefBusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Reference Solution Order ID |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` | `CUKY(5)` |  |
| `ServiceContractItemNetAmount` |  | |  | `currency_conversion( amount => ServiceContractItemNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |
| `NmbrOfServiceContractItems` |  | |  |  | `INT4(10)` |  |
| `ExprdSrvcContrItemNetAmount` |  | |  | `currency_conversion( amount => ExprdSrvcContrItemNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |
| `ExprgSrvcContrItemNetAmount` |  | |  | `currency_conversion( amount => ExprgSrvcContrItemNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |
| `NrOfExprgServiceContractItems` |  | |  |  | `INT4(10)` |  |
| `CancldSrvcContrItemNetAmount` |  | |  | `currency_conversion( amount => CancldSrvcContrItemNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |
| `NrOfCancldServiceContractItems` |  | |  |  | `INT4(10)` |  |
| `SrvcContrItemLostNetAmount` |  | |  | `currency_conversion( amount => SrvcContrItemLostNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => PostingDate )` | `CURR(15)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_UPCGSRVCCONTRITEMQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_UPCGSRVCCONTRITEMQUERY')/$value)*

```abap
@EndUserText.label: 'Upcoming Service Contract Item - Query'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #CONSUMPTION,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog: {
  sqlViewName: 'CUPCGCITEMQRY',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_QUERY],
   modelingPattern: #ANALYTICAL_QUERY
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.query: true
@OData.publish: true
@Analytics.settings.olapPushdown : #OFF
define view C_UpcgSrvcContrItemQuery
  with parameters
    @Consumption.defaultValue:'EUR'
    P_DisplayCurrency : vdm_v_display_currency
  as select from I_UpcgSrvcContrItemCube (P_DisplayCurrency: $parameters.P_DisplayCurrency)

{

//      @EndUserText.label: 'Transaction Category'
//       key ServiceObjectType,

      @EndUserText.label: 'Service Contract'
      @EndUserText.quickInfo: 'Service Contract'
      @ObjectModel.text.element: 'ServiceContractDescription'
      @AnalyticsDetails.query.display: #KEY_TEXT
      key ServiceContract,

      @EndUserText.label: 'Service Contract Item'
      @AnalyticsDetails.query.display: #KEY_TEXT
      key ServiceContractItem,
      
      @EndUserText.label: 'Service Transaction'
      @ObjectModel.text.element: 'ServiceContractDescription'
      @AnalyticsDetails.query.display: #KEY_TEXT
      ServiceDocument,

      @AnalyticsDetails.query.display: #KEY_TEXT
      ServiceContractType,

      @Semantics.text: true
      @EndUserText.label: 'Service Contract Description'
      ServiceContractDescription,

      @AnalyticsDetails.query.display: #KEY_TEXT
      ServiceContractItemProduct,

      @EndUserText.label: 'Service Contract Item Start Date'
      ServiceContractItemStartDate,
      @EndUserText.label: 'Service Contract Item End Date'
      ServiceContractItemEndDate,

      @EndUserText.label: 'Calendar Month (Start)'
      @Semantics.calendar.month: true
      @AnalyticsDetails.query.display: #KEY_TEXT
      SrvcContrStartMonth,
      @EndUserText.label: 'Calendar Quarter (Start)'
      @Semantics.calendar.quarter
      SrvcContrStartQuarter,
      @EndUserText.label: 'Calendar Year (Start)'
      @Semantics.calendar.year
      SrvcContrStartYear,
      
      @EndUserText.label: 'Calendar Month (End)'
      @Semantics.calendar.month: true
      @AnalyticsDetails.query.display: #KEY_TEXT
      SrvcContrEndMonth,
      @EndUserText.label: 'Calendar Quarter (End)'
      @Semantics.calendar.quarter
      SrvcContrEndQuarter,
      @EndUserText.label: 'Calendar Year (End)'
      @Semantics.calendar.year
      SrvcContrEndYear,
      ServiceDocItemCreationDate,
      @EndUserText.label:'Posting Date'
      PostingDate,

      @EndUserText.label: 'Item Life Cycle Status'
      @AnalyticsDetails.query.display: #KEY_TEXT
      ServiceContractItemStatus,

      @EndUserText.label: 'Cancellation Party'
      @AnalyticsDetails.query.display: #KEY_TEXT
      ServiceContractItemCanclnParty,

      @EndUserText.label: 'Cancellation Reason'
      @AnalyticsDetails.query.display: #KEY_TEXT
      ServiceContractItmCanclnReason,

      @AnalyticsDetails.query.display: #KEY_TEXT
      ProfitCenter,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ControllingArea,

      PurchaseOrderByCustomer,

      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToParty,

      @AnalyticsDetails.query.display: #KEY_TEXT
      RespEmployeeBusinessPartnerId,

      @EndUserText.label: 'Solution Order'
      RefBusinessSolutionOrder,

      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToPartyCountry,

      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToPartyRegion,

      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,

      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,

      @AnalyticsDetails.query.display: #KEY_TEXT
      Division,

      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOffice,

      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesGroup,

      @Semantics.currencyCode: true
      $parameters.P_DisplayCurrency as DisplayCurrency,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Net Value of Service Contract Items'
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  ServiceContractItemNetAmount,
                         source_currency =>  TransactionCurrency,
                         target_currency => $parameters.P_DisplayCurrency,
                         exchange_rate_type => 'M',
                         exchange_rate_date =>  PostingDate
                        )             as ServiceContractItemNetAmount,

      @DefaultAggregation: #SUM
      @EndUserText.label: 'No. of Service Contract Items'
      NmbrOfServiceContractItems,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Net Value of Expired Service Contract Items in Last 6 Months'
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  ExprdSrvcContrItemNetAmount,
                         source_currency =>  TransactionCurrency,
                         target_currency => $parameters.P_DisplayCurrency,
                         exchange_rate_type => 'M',
                         exchange_rate_date =>  PostingDate
                        )             as ExprdSrvcContrItemNetAmount,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Net Value of Expiring Service Contract Items in Next 6 Months'
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  ExprgSrvcContrItemNetAmount,
                         source_currency =>  TransactionCurrency,
                         target_currency => $parameters.P_DisplayCurrency,
                         exchange_rate_type => 'M',
                         exchange_rate_date =>  PostingDate
                        )             as ExprgSrvcContrItemNetAmount,

      @EndUserText.label: 'No. of Expiring Service Contract Items in Next 6 Months'
      @DefaultAggregation: #SUM
      NrOfExprgServiceContractItems,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Net Value of Canceled Service Contract Items'
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  CancldSrvcContrItemNetAmount,
                         source_currency =>  TransactionCurrency,
                         target_currency => $parameters.P_DisplayCurrency,
                         exchange_rate_type => 'M',
                         exchange_rate_date =>  PostingDate
                        )             as CancldSrvcContrItemNetAmount,

      @EndUserText.label: 'No. of Canceled Service Contract Items'
      @DefaultAggregation: #SUM
      NrOfCancldServiceContractItems,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Net Value of Canceled/Expired Service Contract Items'
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      currency_conversion(  amount =>  SrvcContrItemLostNetAmount,
                         source_currency =>  TransactionCurrency,
                         target_currency => $parameters.P_DisplayCurrency,
                         exchange_rate_type => 'M',
                         exchange_rate_date =>  PostingDate
                        )             as SrvcContrItemLostNetAmount


}
```
