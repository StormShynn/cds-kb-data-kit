---
name: I_UPCGSRVCCONTRITEMCUBE
description: Upcgsrvccontritemcube
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
  - item-level
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_UPCGSRVCCONTRITEMCUBE

**Upcgsrvccontritemcube**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceObjectType` | ✓ | |  |  |
| `ServiceContract` | ✓ | |  |  |
| `ServiceContractItem` | ✓ | |  |  |
| `ServiceDocument` |  | |  |  |
| `ServiceContractType` |  | |  |  |
| `ServiceContractDescription` |  | |  |  |
| `ServiceContractItemProduct` |  | |  |  |
| `ServiceContractItemStartDate` |  | |  |  |
| `ServiceContractItemEndDate` |  | |  |  |
| `SrvcContrStartMonth` |  | | `_StartingPeriod` | `CalendarMonth` |
| `SrvcContrStartQuarter` |  | | `_StartingPeriod` | `CalendarQuarter` |
| `SrvcContrStartYear` |  | | `_StartingPeriod` | `CalendarYear` |
| `SrvcContrEndMonth` |  | | `_ExpiringPeriod` | `CalendarMonth` |
| `SrvcContrEndQuarter` |  | | `_ExpiringPeriod` | `CalendarQuarter` |
| `SrvcContrEndYear` |  | | `_ExpiringPeriod` | `CalendarYear` |
| `ServiceDocItemCreationDate` |  | |  |  |
| `PostingDate` |  | |  |  |
| `ServiceContractItemStatus` |  | |  |  |
| `ServiceContractItemCanclnParty` |  | |  |  |
| `ServiceContractItmCanclnReason` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |
| `SoldToParty` |  | |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |
| `RefBusinessSolutionOrder` |  | |  |  |
| `SoldToPartyCountry` |  | |  |  |
| `SoldToPartyRegion` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `Division` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `SalesGroup` |  | |  |  |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` |
| `TransactionCurrency` |  | |  |  |
| `ServiceContractItemNetAmount` |  | |  | `} ServiceContractItemNetAmount` |
| `NmbrOfServiceContractItems` |  | |  |  |
| `ExprdSrvcContrItemNetAmount` |  | |  | `} ExprdSrvcContrItemNetAmount` |
| `ExprgSrvcContrItemNetAmount` |  | |  | `} ExprgSrvcContrItemNetAmount` |
| `NrOfExprgServiceContractItems` |  | |  |  |
| `CancldSrvcContrItemNetAmount` |  | |  | `} CancldSrvcContrItemNetAmount` |
| `NrOfCancldServiceContractItems` |  | |  |  |
| `SrvcContrItemLostNetAmount` |  | |  | `} SrvcContrItemLostNetAmount` |
| `ReldServiceContractNetAmount` |  | |  | `} ReldServiceContractNetAmount` |
| `NrOfReldServiceContractItems` |  | |  |  |
| `_StartingCalendarMonth` |  | | `_StartingPeriod` | `_CalendarMonth` |
| `_ExpiringCalendarMonth` |  | | `_ExpiringPeriod` | `_CalendarMonth` |
| `_StartingPeriod` | | ✓ | | |
| `_ExpiringPeriod` | | ✓ | | |
| `_ServiceContract` | | ✓ | | |
| `_ServiceDocument` | | ✓ | | |
| `_ServiceObjType` | | ✓ | | |
| `_ServiceDocumentType` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_ServiceDocItemStatus` | | ✓ | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | |
| `_CancelParty` | | ✓ | | |
| `_CancelReason` | | ✓ | | |
| `_ProfitCenter` | | ✓ | | |
| `_ControllingArea` | | ✓ | | |
| `_SoldToParty` | | ✓ | | |
| `_RespEmployee` | | ✓ | | |
| `_SoldToPartyCountry` | | ✓ | | |
| `_SoldToPartyRegion` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |
| `_Division` | | ✓ | | |
| `_SalesOffice` | | ✓ | | |
| `_SalesGroup` | | ✓ | | |
| `_TransactionCurrency` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StartingPeriod` | `I_CalendarDate` | [0..1] |
| `_ExpiringPeriod` | `I_CalendarDate` | [0..1] |
| `_ServiceContract` | `I_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Upcoming Service Contract Item - Cube'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'IUPCGSCITEMCUBE',
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

@Aggregation.allowPrecisionLoss:true
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_UpcgSrvcContrItemCube
  with parameters
    P_DisplayCurrency : vdm_v_display_currency
  as select from P_UpcgSrvcContrItemDetails

  association [0..1] to I_CalendarDate    as _StartingPeriod  on  $projection.ServiceContractItemStartDate = _StartingPeriod.CalendarDate
  association [0..1] to I_CalendarDate    as _ExpiringPeriod  on  $projection.ServiceContractItemEndDate = _ExpiringPeriod.CalendarDate
  association [0..1] to I_ServiceDocument as _ServiceContract on  $projection.ServiceContract        = _ServiceContract.ServiceDocument
                                                              and _ServiceContract.ServiceObjectType = 'BUS2000112'

{
               @UI.hidden: true
               @AnalyticsDetails.query.hidden: true
               @ObjectModel.foreignKey.association: '_ServiceObjType'
               @EndUserText.label: 'Transaction Category'
  key          ServiceObjectType,
               @ObjectModel.text.element: 'ServiceContractDescription'
               @ObjectModel.foreignKey.association: '_ServiceContract'
  key          ServiceContract,
  key          ServiceContractItem,

               //       @EndUserText.label: 'Service Document'
               @ObjectModel.text.element: 'ServiceContractDescription'
               ServiceDocument,


               @ObjectModel.foreignKey.association: '_ServiceDocumentType'
               ServiceContractType,

               @Semantics.text: true
               @EndUserText.label: 'Service Contract Description'
               ServiceContractDescription,

               @ObjectModel.foreignKey.association: '_Product'
               ServiceContractItemProduct,

               ServiceContractItemStartDate,
               ServiceContractItemEndDate,

               @ObjectModel.foreignKey.association: '_StartingCalendarMonth'
               _StartingPeriod.CalendarMonth   as SrvcContrStartMonth,
               @Semantics.calendar.quarter
               _StartingPeriod.CalendarQuarter as SrvcContrStartQuarter,
               @Semantics.calendar.year
               _StartingPeriod.CalendarYear    as SrvcContrStartYear,

               @ObjectModel.foreignKey.association: '_ExpiringCalendarMonth'
               _ExpiringPeriod.CalendarMonth   as SrvcContrEndMonth,
               @Semantics.calendar.quarter
               _ExpiringPeriod.CalendarQuarter as SrvcContrEndQuarter,
               @Semantics.calendar.year
               _ExpiringPeriod.CalendarYear    as SrvcContrEndYear,
               ServiceDocItemCreationDate,

               @EndUserText.label:'Booking Date'
               PostingDate,

               @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
               ServiceContractItemStatus,

               @ObjectModel.foreignKey.association: '_CancelParty'
               ServiceContractItemCanclnParty,
               @ObjectModel.foreignKey.association: '_CancelReason'
               ServiceContractItmCanclnReason,

               @ObjectModel.foreignKey.association: '_ProfitCenter'
               ProfitCenter,
               @ObjectModel.foreignKey.association: '_ControllingArea'
               ControllingArea,

               @EndUserText.label: 'External Reference ID'
               PurchaseOrderByCustomer,

               @ObjectModel.foreignKey.association: '_SoldToParty'
               SoldToParty,

               @ObjectModel.foreignKey.association: '_RespEmployee'
               RespEmployeeBusinessPartnerId,

               RefBusinessSolutionOrder,

               @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
               SoldToPartyCountry,

               @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
               SoldToPartyRegion,

               @ObjectModel.foreignKey.association: '_SalesOrganization'
               SalesOrganization,

               @ObjectModel.foreignKey.association: '_DistributionChannel'
               DistributionChannel,

               @ObjectModel.foreignKey.association: '_Division'
               Division,

               @ObjectModel.foreignKey.association: '_SalesOffice'
               SalesOffice,

               @ObjectModel.foreignKey.association: '_SalesGroup'
               SalesGroup,

               @Semantics.currencyCode: true
               $parameters.P_DisplayCurrency   as DisplayCurrency,

               @ObjectModel.foreignKey.association: '_TransactionCurrency'
               @Semantics.currencyCode:true
               TransactionCurrency,

               @DefaultAggregation: #SUM
               @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
               ServiceContractItemNetAmount,

               @DefaultAggregation: #SUM
               NmbrOfServiceContractItems,

               @DefaultAggregation: #SUM
               @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
               ExprdSrvcContrItemNetAmount,

               @DefaultAggregation: #SUM
               @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
               ExprgSrvcContrItemNetAmount,

               @DefaultAggregation: #SUM
               NrOfExprgServiceContractItems,

               @DefaultAggregation: #SUM
               @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
               CancldSrvcContrItemNetAmount,


               @DefaultAggregation: #SUM
               NrOfCancldServiceContractItems,

               @DefaultAggregation: #SUM
               @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
               SrvcContrItemLostNetAmount,

               @DefaultAggregation: #SUM
               @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
               ReldServiceContractNetAmount,

               @DefaultAggregation: #SUM
               NrOfReldServiceContractItems,



               //    Associations
               _ServiceDocument,
               _ServiceObjType,
               _ServiceContract,
               _ServiceDocumentType,
               _Product,
               @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
               @API.element.releaseState: #DEPRECATED
               @API.element.successor: '_SrvcDocItmLifecycleStatus'
               _ServiceDocItemStatus,
               _SrvcDocItmLifecycleStatus,
               _CancelParty,
               _CancelReason,
               _ProfitCenter,
               _ControllingArea,
               _SoldToParty,
               _RespEmployee,
               _SoldToPartyCountry,
               _SoldToPartyRegion,
               _SalesOrganization,
               _DistributionChannel,
               _Division,
               _SalesOffice,
               _SalesGroup,
               _StartingPeriod,
               _StartingPeriod._CalendarMonth  as _StartingCalendarMonth,
               _ExpiringPeriod,
               _ExpiringPeriod._CalendarMonth  as _ExpiringCalendarMonth,
               _TransactionCurrency

}
```
