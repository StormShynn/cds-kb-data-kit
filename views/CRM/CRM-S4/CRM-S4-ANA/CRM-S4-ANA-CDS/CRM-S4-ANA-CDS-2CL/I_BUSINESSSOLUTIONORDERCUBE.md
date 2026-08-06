---
name: I_BUSINESSSOLUTIONORDERCUBE
description: Businesssolutionordercube
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - analytical
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_BUSINESSSOLUTIONORDERCUBE

**Businesssolutionordercube**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceObjectType` | `ServiceObjectType` |
| key `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| `BusSolnOrdType` | `BusSolnOrdType` |
| `BusSolnOrdDescription` | `BusSolnOrdDescription` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `SalesOrganization` | `SalesOrganization` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `SoldToParty` | `SoldToParty` |
| `SoldToPartyCountry` | `SoldToPartyCountry` |
| `SoldToPartyRegion` | `SoldToPartyRegion` |
| `TransactionCurrency` | `TransactionCurrency` |
| `BusSolnOrdStatus` | `BusSolnOrdStatus` |
| `NrOfOpenBusSolnOrders` | `NrOfOpenBusSolnOrders` |
| `NrOfReldBusSolnOrders` | `NrOfReldBusSolnOrders` |
| `NrOfCmpltdBusSolnOrders` | `NrOfCmpltdBusSolnOrders` |
| `NrOfCrtedBusSolnOrders` | `NrOfCrtedBusSolnOrders` |
| `ServiceDocumentCreationDate` | `ServiceDocumentCreationDate` |
| `BusSolnOrdCreationQuarter` | `BusSolnOrdCreationQuarter` |
| `BusSolnOrdCreationMonth` | `BusSolnOrdCreationMonth` |
| `BusSolnOrdCreationYear` | `BusSolnOrdCreationYear` |
| `DisplayCurrency` | `$parameters.P_DisplayCurrency` |
| `ServiceDocNetAmount` | `} ServiceDocNetAmount` |
| `PostingDate` | `PostingDate` |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_Period` | *Association* |
| `_SalesGroup` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesOrganization` | *Association* |
| `_ServiceDocumentStatus` | *Association* |
| `_SrvcDocLifecycleStatus` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_ServiceObjType` | *Association* |
| `_SoldToParty` | *Association* |
| `_SoldToPartyCountry` | *Association* |
| `_SoldToPartyRegion` | *Association* |
| `_TransactionCurrency` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Solution Order - Cube'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'IBUSSOLNORDCUBE',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
   dataCategory: #CUBE,
   internalName: #LOCAL
   }
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_CUBE
}
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BusinessSolutionOrderCube
with parameters
  P_DisplayCurrency  : vdm_v_display_currency
  as select from P_BusSolnOrdHdrData
{
      @EndUserText.label: 'Transaction Category'
      @UI.hidden: true
      @AnalyticsDetails.query.hidden: true
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceObjectType,
      @EndUserText.label: 'Solution Order'
      @EndUserText.quickInfo: 'Solution Order'
      //    @ObjectModel.text.element: 'BusSolnOrdDescription'
  key BusinessSolutionOrder,
      @EndUserText.label: 'Solution Order Type'
      @UI.hidden: true
      @AnalyticsDetails.query.hidden: true
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      BusSolnOrdType,
      @EndUserText.label: 'Solution Order Description'
      BusSolnOrdDescription,
      //@EndUserText.label: 'Distribution Channel'
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      //      @EndUserText.label: 'Division'
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      //      @EndUserText.label: 'Sales Organization'
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,
      @EndUserText.label: 'Solution Order Status'
      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      BusSolnOrdStatus,

       @DefaultAggregation: #SUM
       NrOfOpenBusSolnOrders,
       @DefaultAggregation: #SUM
       NrOfReldBusSolnOrders,
       @DefaultAggregation: #SUM
       NrOfCmpltdBusSolnOrders,



      @DefaultAggregation: #SUM
      @EndUserText.label: 'No. of Solution Orders'
      NrOfCrtedBusSolnOrders,
      ServiceDocumentCreationDate,
      @Semantics.calendar.quarter
      BusSolnOrdCreationQuarter,
      @Semantics.calendar.month
      BusSolnOrdCreationMonth,
      @Semantics.calendar.year
      BusSolnOrdCreationYear,
      @EndUserText.label: 'Display Currency'
      @Semantics.currencyCode: true
      $parameters.P_DisplayCurrency  as DisplayCurrency,
      @DefaultAggregation: #SUM
      @EndUserText.label: 'Net Value of Solution Orders'
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount,
      PostingDate,
      
      /* Associations */
      _DistributionChannel,
      _Division,
      _Period,
      _SalesGroup,
      _SalesOffice,
      _SalesOrganization,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,
      _ServiceDocumentType,
      _ServiceObjType,
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _TransactionCurrency

}
```
