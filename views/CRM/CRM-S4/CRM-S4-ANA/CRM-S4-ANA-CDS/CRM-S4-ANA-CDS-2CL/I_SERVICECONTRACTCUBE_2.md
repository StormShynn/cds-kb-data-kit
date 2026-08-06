---
name: I_SERVICECONTRACTCUBE_2
description: Servicecontractcube 2
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - contract
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_SERVICECONTRACTCUBE_2

**Servicecontractcube 2**

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
| key `ServiceContract` | `ServiceContract` |
| `ServiceDocumentDescription` | `ServiceDocumentDescription` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `ServiceContractType` | `ServiceContractType` |
| `RefBusinessSolutionOrder` | `RefBusinessSolutionOrder` |
| `ServiceDocumentStatus` | `ServiceDocumentStatus` |
| `ServiceContractStatus` | `ServiceContractStatus` |
| `ServiceDocumentIsOpen` | `ServiceDocumentIsOpen` |
| `TransactionCurrency` | `TransactionCurrency` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `DisplayCurrency` | `cast(:P_DisplayCurrency as currency)` |
| `ServiceDocNetAmount` | `} currency_conversion( amount => ServiceDocNetAmount, source_currency => TransactionCurrency, target_currency => $parameters.P_DisplayCurrency, exchange_rate_type => 'M', exchange_rate_date => cast( $session.system_date as abap.dats), error_handling => 'KEEP_UNCONVERTED' )` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `SalesOrganizationOrgUnitID` | `SalesOrganizationOrgUnitID` |
| `SalesOfficeOrgUnitID` | `SalesOfficeOrgUnitID` |
| `SalesGroupOrgUnitID` | `SalesGroupOrgUnitID` |
| `ServiceOrganization` | `ServiceOrganization` |
| `ServiceContractStartDate` | `ServiceContractStartDate` |
| `ServiceContractEndDate` | `ServiceContractEndDate` |
| `ServiceContractStartDateTime` | `ServiceContractStartDateTime` |
| `ServiceContractEndDateTime` | `ServiceContractEndDateTime` |
| `FirstDayOfMonthDate` | `FirstDayOfMonthDate` |
| `LastDayOfMonthDate` | `LastDayOfMonthDate` |
| `StartOfMonthDateTime` | `cast(cast(cast(concat(FirstDayOfMonthDate, '000000') as abap.numc(15)) as abap.dec(15,0)) as tzntstmps preserving type)` |
| `EndOfMonthDateTime` | `cast(cast(cast(concat(LastDayOfMonthDate, '000000') as abap.numc(15)) as abap.dec(15,0)) as tzntstmps preserving type)` |
| `SoldToPartyCountry` | `SoldToPartyCountry` |
| `SoldToPartyRegion` | `SoldToPartyRegion` |
| `SoldToParty` | `SoldToParty` |
| `ResponsibleEmployee` | `ResponsibleEmployee` |
| `ContactPersonBusinessPartnerId` | `ContactPerson` |
| `ShipToParty` | `ShipToParty` |
| `NmbrOfExpiredSrvcContracts` | `NmbrOfExpiredSrvcContracts` |
| `NmbrOfExpiredSrvcContrCurWeek` | `NmbrOfExpiredSrvcContrCurWeek` |
| `NmbrOfExpiredSrvcContrNextWeek` | `NmbrOfExpiredSrvcContrNextWeek` |
| `NmbrOfExpiredSrvcContrIn2Weeks` | `NmbrOfExpiredSrvcContrIn2Weeks` |
| `NmbrOfExpiredSrvcContrIn3Weeks` | `NmbrOfExpiredSrvcContrIn3Weeks` |
| `IsExpired` | `IsExpired` |
| `_ServiceObjType` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_ServiceContractType` | *Association* |
| `_ServiceDocumentStatus` | *Association* |
| `_SrvcDocLifecycleStatus` | *Association* |
| `_ServiceContractStatus` | *Association* |
| `_ServiceDocumentIsOpen` | *Association* |
| `_CurrentDate` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_SalesGroup` | *Association* |
| `_SalesGroupOrgUnit` | *Association* |
| `_SalesGroupOrgUnit_2` | *Association* |
| `_RespEmployee` | *Association* |
| `_ContactPerson` | *Association* |
| `_ShipToParty` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesOfficeOrgUnit` | *Association* |
| `_SalesOfficeOrgUnit_2` | *Association* |
| `_SalesOrganization` | *Association* |
| `_SalesOrganizationOrgUnit` | *Association* |
| `_SalesOrganizationOrgUnit_2` | *Association* |
| `_SoldToParty` | *Association* |
| `_SoldToPartyCountry` | *Association* |
| `_SoldToPartyRegion` | *Association* |
| `_TransactionCurrency` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCCONTRCUBE2',
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
//   representativeKey: 'ServiceContract',
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_CUBE   
}
@EndUserText.label: 'Service Contract - Cube'
@Metadata: {
    allowExtensions:true,
    ignorePropagatedAnnotations: true
    }

define view I_ServiceContractCube_2
  with parameters
    P_DisplayCurrency : vdm_v_display_currency
  as select from P_ServiceContractDataCube
  association [0..1] to E_ServiceDocument as _ServiceDocumentExt on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                 and $projection.ServiceContract   = _ServiceDocumentExt.ServiceOrder

{
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceObjectType,
  key ServiceContract,
      ServiceDocumentDescription,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @ObjectModel.foreignKey.association: '_ServiceContractType'
      ServiceContractType,
      RefBusinessSolutionOrder,

      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      ServiceDocumentStatus,
      @ObjectModel.foreignKey.association: '_ServiceContractStatus'
      ServiceContractStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      ServiceDocumentIsOpen,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,
      
      @EndUserText.label: 'External Reference'
      PurchaseOrderByCustomer,

      @Semantics.currencyCode: true
      cast(:P_DisplayCurrency as currency) as DisplayCurrency,

      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      @DefaultAggregation: #SUM
      currency_conversion(  amount =>  ServiceDocNetAmount,
                              source_currency =>  TransactionCurrency,
                              target_currency => $parameters.P_DisplayCurrency,
                              exchange_rate_type => 'M',
                              exchange_rate_date =>  cast( $session.system_date as abap.dats),
                              error_handling => 'KEEP_UNCONVERTED'
                             )             as ServiceDocNetAmount,

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
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,
      ServiceOrganization,

      ServiceContractStartDate,
      ServiceContractEndDate,
      ServiceContractStartDateTime,
      ServiceContractEndDateTime,
      FirstDayOfMonthDate,
      LastDayOfMonthDate,
      
      cast(cast(cast(concat(FirstDayOfMonthDate, '000000') as abap.numc(15)) as abap.dec(15,0)) as tzntstmps preserving type) as StartOfMonthDateTime,
      cast(cast(cast(concat(LastDayOfMonthDate, '000000') as abap.numc(15)) as abap.dec(15,0)) as tzntstmps preserving type) as EndOfMonthDateTime,

      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      SoldToParty,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPerson                         as ContactPersonBusinessPartnerId,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,

      @DefaultAggregation: #SUM
      NmbrOfExpiredSrvcContracts,
      @DefaultAggregation: #SUM
      NmbrOfExpiredSrvcContrCurWeek,
      @DefaultAggregation: #SUM
      NmbrOfExpiredSrvcContrNextWeek,
      @DefaultAggregation: #SUM
      NmbrOfExpiredSrvcContrIn2Weeks,
      @DefaultAggregation: #SUM
      NmbrOfExpiredSrvcContrIn3Weeks,
      IsExpired,

      _ServiceObjType,
      _ServiceDocumentType,
      _ServiceContractType,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceContractStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      _CurrentDate,
      _DistributionChannel,
      _Division,
      _SalesGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'       
      _SalesGroupOrgUnit,
      _SalesGroupOrgUnit_2,
      _RespEmployee,
      _ContactPerson,
      _ShipToParty,
      _SalesOffice,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      _SalesOfficeOrgUnit_2,
      _SalesOrganization,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      _SalesOrganizationOrgUnit_2,
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _TransactionCurrency

}
```
