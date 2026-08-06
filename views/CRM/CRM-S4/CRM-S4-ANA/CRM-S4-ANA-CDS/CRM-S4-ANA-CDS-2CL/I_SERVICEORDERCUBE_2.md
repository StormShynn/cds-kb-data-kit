---
name: I_SERVICEORDERCUBE_2
description: Service OrderCUBE 2
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
  - service-order
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_SERVICEORDERCUBE_2

**Service OrderCUBE 2**

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
| key `ServiceOrder` | `ServiceOrder` |
| `ServiceOrderDescription` | `ServiceOrderDescription` |
| `ServiceOrderStatus` | `ServiceOrderStatus` |
| `ServiceOrderStatusName` | `_SrvcDocLifecycleStatus._ServiceDocumentStatusText [1: Language=$session.system_language].ServiceDocumentStatusName` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `RefBusinessSolutionOrder` | `RefBusinessSolutionOrder` |
| `SoldToParty` | `SoldToParty` |
| `ResponsibleEmployee` | `ResponsibleEmployee` |
| `ContactPersonBusinessPartnerId` | `ContactPerson` |
| `RequestedServiceEndDate` | `RequestedServiceEndDate` |
| `ServiceDocumentCreationDate` | `ServiceDocumentCreationDate` |
| `SrvcOrdCreationQuarter` | `SrvcOrdCreationQuarter` |
| `SrvcOrdCreationMonth` | `SrvcOrdCreationMonth` |
| `SrvcOrdCreationYear` | `SrvcOrdCreationYear` |
| `ServiceDocumentPriority` | `ServiceDocumentPriority` |
| `ServiceDocumentHasError` | `ServiceDocumentHasError` |
| `ServiceDocNetAmount` | `} ServiceDocNetAmount` |
| `NumberOfIncomingServiceOrders` | `NumberOfIncomingServiceOrders` |
| `NumberOfOpenServiceOrders` | `NumberOfOpenServiceOrders` |
| `TransactionCurrency` | `TransactionCurrency` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `SalesOrganizationOrgUnitID` | `SalesOrganizationOrgUnitID` |
| `SalesOfficeOrgUnitID` | `SalesOfficeOrgUnitID` |
| `SalesGroupOrgUnitID` | `SalesGroupOrgUnitID` |
| `ServiceOrganization` | `ServiceOrganization` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `NmbrOfIncompleteServiceOrders` | `NmbrOfIncompleteServiceOrders` |
| `NumberOfOverdueServiceOrders` | `NumberOfOverdueServiceOrders` |
| `SrvcOrdHasConfdItem` | `SrvcOrdHasConfdItem` |
| `ServiceDocumentIsOpen` | `ServiceDocumentIsOpen` |
| `ServiceReferenceObjectType` | `ServiceReferenceObjectType` |
| `SrvcRefObjIsMainObject` | `SrvcRefObjIsMainObject` |
| `ProductID` | `ProductID` |
| `SerialNumber` | `SerialNumber` |
| `Equipment` | `Equipment` |
| `FunctionalLocation` | `FunctionalLocation` |
| `RespyMgmtServiceTeam` | `RespyMgmtServiceTeam` |
| `RespyMgmtServiceTeamDesc` | `RespyMgmtServiceTeamDesc` |
| `TeamName` | `TeamName` |
| `_ServiceDocumentIsOpen` | *Association* |
| `_ServiceObjType` | *Association* |
| `_ServiceDocumentStatus` | *Association* |
| `_SrvcDocLifecycleStatus` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_ServiceDocumentPriority` | *Association* |
| `_SoldToParty` | *Association* |
| `_RespEmployee` | *Association* |
| `_ContactPerson` | *Association* |
| `_ServiceDocHasError` | *Association* |
| `_SrvcOrdConfStatus` | *Association* |
| `_SalesOrganizationOrgUnit` | *Association* |
| `_SalesOrganizationOrgUnit_2` | *Association* |
| `_SalesOfficeOrgUnit` | *Association* |
| `_SalesOfficeOrgUnit_2` | *Association* |
| `_SalesGroupOrgUnit` | *Association* |
| `_SalesGroupOrgUnit_2` | *Association* |
| `_SalesOrganization` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_Period` | *Association* |
| `_ServiceDocRefObj` | *Association* |
| `_ServiceTeamHeader` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Order - Cube'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVORDCUBE2',
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
 //  representativeKey: 'ServiceOrder',
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

define view I_ServiceOrderCube_2
  as select from P_ServiceOrderDataCube

  association [0..1] to E_ServiceDocument as _ServiceDocumentExt on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                 and $projection.ServiceOrder      = _ServiceDocumentExt.ServiceOrder
{
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceObjectType,
  key ServiceOrder,
      ServiceOrderDescription,
      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      ServiceOrderStatus,
      _SrvcDocLifecycleStatus._ServiceDocumentStatusText
      [1: Language=$session.system_language].ServiceDocumentStatusName as ServiceOrderStatusName,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      RefBusinessSolutionOrder,

      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPerson               as ContactPersonBusinessPartnerId,

      RequestedServiceEndDate,
      ServiceDocumentCreationDate,
      @Semantics.calendar.quarter
      SrvcOrdCreationQuarter,
      @Semantics.calendar.month
      SrvcOrdCreationMonth,
      @Semantics.calendar.year
      SrvcOrdCreationYear,
     
      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
      ServiceDocumentPriority,

      @ObjectModel.foreignKey.association: '_ServiceDocHasError'
      ServiceDocumentHasError,

      @EndUserText.label: 'Service Document Net Amount'
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount,

      @DefaultAggregation: #SUM
      NumberOfIncomingServiceOrders,

      @EndUserText.label: 'Number of open Service Orders'
      @DefaultAggregation: #SUM
      NumberOfOpenServiceOrders,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,

      @EndUserText.label: 'External Reference'
      PurchaseOrderByCustomer,

      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,

      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,

      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,

      ServiceOrganization,

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

      @DefaultAggregation: #SUM
      NmbrOfIncompleteServiceOrders,
      NumberOfOverdueServiceOrders,
      SrvcOrdHasConfdItem,

      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      ServiceDocumentIsOpen,

      ServiceReferenceObjectType,
      SrvcRefObjIsMainObject,
      ProductID,
      SerialNumber,
      Equipment,
      FunctionalLocation,
      RespyMgmtServiceTeam,
      
      RespyMgmtServiceTeamDesc,
      
      TeamName,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      _ServiceObjType,
      
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,
      
      _ServiceDocumentType,
      _ServiceDocumentPriority,
      _SoldToParty,
      _RespEmployee,
      _ContactPerson,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocHasError,
      _SrvcOrdConfStatus,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      _SalesOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      _SalesOfficeOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'
      _SalesGroupOrgUnit,
      _SalesGroupOrgUnit_2,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _DistributionChannel,
      _Division,
      _TransactionCurrency,
      _Period,
      _ServiceDocRefObj,
      _ServiceTeamHeader
      //      _CloudSystem

}
```
