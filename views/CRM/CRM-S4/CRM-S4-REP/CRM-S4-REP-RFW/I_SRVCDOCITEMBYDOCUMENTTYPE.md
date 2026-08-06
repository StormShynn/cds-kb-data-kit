---
name: I_SRVCDOCITEMBYDOCUMENTTYPE
description: Srvcdocitembydocumenttype
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - document
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCITEMBYDOCUMENTTYPE

**Srvcdocitembydocumenttype**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceDocumentType` | `ServiceDocumentType` |
| key `ServiceDocument` | `ServiceDocument` |
| key `ServiceDocumentItem` | `ServiceDocumentItem` |
| `ServiceObjectType` | `ServiceObjectType` |
| `ServiceDocumentUUID` | `ServiceDocumentUUID` |
| `ServiceDocumentDescription` | `ServiceDocumentDescription` |
| `ServiceDocumentItemUUID` | `ServiceDocumentItemUUID` |
| `ServiceDocumentItemObjectType` | `ServiceDocumentItemObjectType` |
| `ParentServiceDocumentItemUUID` | `ParentServiceDocumentItemUUID` |
| `ServiceDocumentItemDescription` | `ServiceDocumentItemDescription` |
| `RefBusinessSolutionOrder` | `RefBusinessSolutionOrder` |
| `RefBusinessSolutionOrderItem` | `RefBusinessSolutionOrderItem` |
| `BillingDateTime` | `BillingDateTime` |
| `BillingDocCreationDateTime` | `BillingDocCreationDateTime` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `ServiceDocumentItemPriority` | `ServiceDocumentItemPriority` |
| `PostingDate` | `PostingDate` |
| `TransactionCurrency` | `TransactionCurrency` |
| `SalesOrganizationOrgUnitID` | `SalesOrganizationOrgUnitID` |
| `SalesOfficeOrgUnitID` | `SalesOfficeOrgUnitID` |
| `SalesGroupOrgUnitID` | `SalesGroupOrgUnitID` |
| `SoldToPartyCountry` | `SoldToPartyCountry` |
| `SoldToPartyRegion` | `SoldToPartyRegion` |
| `SoldToParty` | `SoldToParty` |
| `ServiceTeam` | `ServiceTeam` |
| `ResponsibleEmployee` | `ResponsibleEmployee` |
| `ServiceEmployee` | `ServiceEmployee` |
| `ContactPerson` | `ContactPerson` |
| `PayerParty` | `PayerParty` |
| `BillToParty` | `BillToParty` |
| `PaymentTerms` | `PaymentTerms` |
| `ServiceDocumentItemStatus` | `ServiceDocumentItemStatus` |
| `ServiceDocumentItemHasError` | `ServiceDocumentItemHasError` |
| `SrvcDocItmIsReleasedForBilling` | `SrvcDocItmIsReleasedForBilling` |
| `ServiceDocItemBillingStatus` | `ServiceDocItemBillingStatus` |
| `ServiceDocumentItemIsOpen` | `ServiceDocumentItemIsOpen` |
| `ServiceOrganization` | `ServiceOrganization` |
| `ResponsibleServiceOrganization` | `ResponsibleServiceOrganization` |
| `ServiceDocItemCreationDateTime` | `ServiceDocItemCreationDateTime` |
| `ServiceDocItemChangedDateTime` | `ServiceDocItemChangedDateTime` |
| `ServiceDocItemCreationDate` | `cast( tstmp_to_dats( ServiceDocItemCreationDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` |
| `ServiceDocItemChangedDate` | `cast( tstmp_to_dats( ServiceDocItemChangedDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` |
| `ServiceDocItemCreatedByUser` | `ServiceDocItemCreatedByUser` |
| `ServiceDocItemChangedByUser` | `ServiceDocItemChangedByUser` |
| `OriginallyRequestedProduct` | `OriginallyRequestedProduct` |
| `ServiceDocumentItemQuantity` | `} ServiceDocumentItemQuantity` |
| `ServiceDocItemQuantityUnit` | `ServiceDocItemQuantityUnit` |
| `SrvcDocItemBaseQuantityUnit` | `SrvcDocItemBaseQuantityUnit` |
| `ServiceDocItemCategory` | `ServiceDocItemCategory` |
| `ServiceDocumentItemNetAmount` | `} ServiceDocumentItemNetAmount` |
| `BillableControl` | `BillableControl` |
| `BillingBlockReason` | `BillingBlockReason` |
| `RequestedServiceStartDateTime` | `RequestedServiceStartDateTime` |
| `RequestedServiceEndDateTime` | `RequestedServiceEndDateTime` |
| `ServiceContrItemStartDateTime` | `ServiceContrItemStartDateTime` |
| `ServiceContrItemEndDateTime` | `ServiceContrItemEndDateTime` |
| `ServiceDocItemGrossAmount` | `} ServiceDocItemGrossAmount` |
| `SettlementPeriodRuleUUID` | `SettlementPeriodRuleUUID` |
| `BillingPlanBillingDateRuleUUID` | `BillingPlanBillingDateRuleUUID` |
| `SalesOrganization` | `SalesOrganization` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `ServiceDuration` | `} ServiceDuration` |
| `ServiceDocItemRejectionReason` | `ServiceDocItemRejectionReason` |
| `ShipToParty` | `ShipToParty` |
| `ServiceDocumentItemIsReleased` | `ServiceDocumentItemIsReleased` |
| `ServiceDocumentItemIsRejected` | `ServiceDocumentItemIsRejected` |
| `ResponseProfile` | `ResponseProfile` |
| `ServiceProfile` | `ServiceProfile` |
| `Language` | `Language` |
| `ActualServiceDuration` | `} ActualServiceDuration` |
| `ActualServiceDurationUnit` | `ActualServiceDurationUnit` |
| `ServiceDurationUnit` | `ServiceDurationUnit` |
| `TimeSheetOvertimeCategory` | `TimeSheetOvertimeCategory` |
| `Industry` | `Industry` |
| `SrvcContrItemRnwlDuration` | `} SrvcContrItemRnwlDuration` |
| `SrvcContrItemRnwlDurationUnit` | `SrvcContrItemRnwlDurationUnit` |
| `SrvcContrItemExtensionDuration` | `} SrvcContrItemExtensionDuration` |
| `SrvcContrItemExtnDurationUnit` | `SrvcContrItemExtnDurationUnit` |
| `_ServiceDocument` | *Association* |
| `_BillingBlockReason` | *Association* |
| `_BillingRequestItem` | *Association* |
| `_BillToParty` | *Association* |
| `_ContactPerson` | *Association* |
| `_PayerParty` | *Association* |
| `_RespEmployee` | *Association* |
| `_ServiceDocItemBillingStatus` | *Association* |
| `_ServiceDocItemCategory` | *Association* |
| `_ServiceDocItemHasError` | *Association* |
| `_ServiceDocItemPriority` | *Association* |
| `_ServiceDocItemStatus` | *Association* |
| `_SrvcDocItmLifecycleStatus` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_ServiceEmployee` | *Association* |
| `_ServiceObjType` | *Association* |
| `_BaseUnit` | *Association* |
| `_BaseUnit_2` | *Association* |
| `_SalesUnit` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_PaymentTerms` | *Association* |
| `_ServiceProductList` | *Association* |
| `_ServiceTeam` | *Association* |
| `_SoldToParty` | *Association* |
| `_SrvcDocItemIsRelForBillgSts` | *Association* |
| `_ServiceDocumentIsOpen` | *Association* |
| `_FixedPrice` | *Association* |
| `_StatusObjItemStatus` | *Association* |
| `_SalesOrganization` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_ActualServiceDurationUnit` | *Association* |
| `_ServiceDurationUnit` | *Association* |
| `_SrvcContrItemRnwlDurationUnit` | *Association* |
| `_SrvcContrItemExtnDurationUnit` | *Association* |
| `_ServiceDocOvertimeCat` | *Association* |
| `_Industry` | *Association* |
| `_ServiceDocItemRejectionReason` | *Association* |
| `_SoldToPartyCountry` | *Association* |
| `_SoldToPartyRegion` | *Association* |
| `_SalesOrganizationOrgUnit` | *Association* |
| `_SalesOfficeOrgUnit` | *Association* |
| `_SalesGroupOrgUnit` | *Association* |
| `_SalesOrganizationOrgUnit_2` | *Association* |
| `_SalesOfficeOrgUnit_2` | *Association* |
| `_SalesGroupOrgUnit_2` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceDocItemExt` | `E_ServiceDocumentItem` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Srvc Transaction Item by Transac Type'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCDOCITMSRCH',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
   representativeKey: 'ServiceDocumentItem',
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION
}

@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocItemByDocumentType
  as select from I_ServiceDocumentItem

  association [0..1] to I_SrvcDocByDocumentType as _ServiceDocument   on  $projection.ServiceDocumentType = _ServiceDocument.ServiceDocumentType
                                                                      and $projection.ServiceDocument     = _ServiceDocument.ServiceDocument

  association [0..1] to E_ServiceDocumentItem   as _ServiceDocItemExt on  $projection.ServiceObjectType   = _ServiceDocItemExt.ServiceCategory
                                                                      and $projection.ServiceDocument     = _ServiceDocItemExt.ServiceOrderItem
                                                                      and $projection.ServiceDocumentItem = _ServiceDocItemExt.ServiceLineExternalID

{

      //I_ServiceDocumentItem
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
  key ServiceDocumentType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key ServiceDocument,
  key ServiceDocumentItem,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      ServiceDocumentUUID,
      ServiceDocumentDescription,
      ServiceDocumentItemUUID,
      ServiceDocumentItemObjectType,
      ParentServiceDocumentItemUUID,
      ServiceDocumentItemDescription,
      RefBusinessSolutionOrder,
      RefBusinessSolutionOrderItem,

      BillingDateTime,
      BillingDocCreationDateTime,

      PurchaseOrderByCustomer,
      ServiceDocumentItemPriority,
      PostingDate,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,

      //      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,

      //      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,

      //      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,

      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,

      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      ServiceTeam,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPerson,
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,

      @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
      ServiceDocumentItemStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocItemHasError'
      ServiceDocumentItemHasError,
      @ObjectModel.foreignKey.association: '_SrvcDocItemIsRelForBillgSts'
      SrvcDocItmIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocItemBillingStatus'
      ServiceDocItemBillingStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      ServiceDocumentItemIsOpen,

      ServiceOrganization,
      ResponsibleServiceOrganization,

      ServiceDocItemCreationDateTime,
      ServiceDocItemChangedDateTime,

      @Semantics.systemDate.createdAt: true
      cast( tstmp_to_dats( ServiceDocItemCreationDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_created_on preserving type ) as ServiceDocItemCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( tstmp_to_dats( ServiceDocItemChangedDateTime,
                   abap_system_timezone( $session.client,'NULL' ),
                   $session.client,
                   'NULL' ) as crms4_changed_on preserving type ) as ServiceDocItemChangedDate,
      //      @Semantics.systemDate.createdAt: true
      //      cast( cast(substring( cast(ServiceDocItemCreationDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_created_on ) as ServiceDocItemCreationDate,
      //      @Semantics.systemDate.lastChangedAt: true
      //      cast( cast(substring( cast(ServiceDocItemChangedDateTime as abap.char(30)) , 1 , 8)
      //                            as abap.dats(8))  as crms4_changed_on ) as ServiceDocItemChangedDate,

      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,
      OriginallyRequestedProduct,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceDocumentItemQuantity,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      @Semantics.unitOfMeasure:true
      ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      @Semantics.unitOfMeasure:true
      SrvcDocItemBaseQuantityUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
      ServiceDocItemCategory,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetAmount,
      BillableControl,
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      BillingBlockReason,
      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,

      ServiceContrItemStartDateTime,
      ServiceContrItemEndDateTime,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocItemGrossAmount,

      SettlementPeriodRuleUUID,
      BillingPlanBillingDateRuleUUID,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      DistributionChannel,
      Division,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      ServiceDuration,
      @ObjectModel.foreignKey.association: '_ServiceDocItemRejectionReason'
      ServiceDocItemRejectionReason,
      ShipToParty,
      ServiceDocumentItemIsReleased,
      ServiceDocumentItemIsRejected,
      ResponseProfile,
      ServiceProfile,
      Language,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ActualServiceDurationUnit'} }
      ActualServiceDuration,
      @ObjectModel.foreignKey.association: '_ActualServiceDurationUnit'
      @Semantics.unitOfMeasure:true
      ActualServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDurationUnit'
      @Semantics.unitOfMeasure:true
      ServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocOvertimeCat'
      TimeSheetOvertimeCategory,
      @ObjectModel.foreignKey.association: '_Industry'
      Industry,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      SrvcContrItemRnwlDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemRnwlDurationUnit'
      @Semantics.unitOfMeasure:true
      SrvcContrItemRnwlDurationUnit,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      SrvcContrItemExtensionDuration,

      @ObjectModel.foreignKey.association: '_SrvcContrItemExtnDurationUnit'
      @Semantics.unitOfMeasure:true
      SrvcContrItemExtnDurationUnit,

      /* Associations */
      //I_ServiceDocumentItem
      _BillingBlockReason,
      _BillingRequestItem,
      _BillToParty,
      _ContactPerson,
      _PayerParty,
      _RespEmployee,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocItemBillingStatus,
      _ServiceDocItemCategory,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocItemHasError,
      _ServiceDocItemPriority,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocItmLifecycleStatus'
      _ServiceDocItemStatus,
      _SrvcDocItmLifecycleStatus,
      _ServiceDocumentType,
      _ServiceEmployee,
      _ServiceDocument,
      _ServiceObjType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BaseUnit_2'
      _BaseUnit,
      _BaseUnit_2,
      _SalesUnit,
      _TransactionCurrency,
      _PaymentTerms,
      _ServiceProductList,
      _ServiceTeam,
      _SoldToParty,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocItemIsRelForBillgSts,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      _FixedPrice,
      _StatusObjItemStatus,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _ActualServiceDurationUnit,
      _ServiceDurationUnit,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcContrItemExtnDurationUnit,
      _ServiceDocOvertimeCat,
      _Industry,
      _ServiceDocItemRejectionReason,
      _SoldToPartyCountry,
      _SoldToPartyRegion,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'
      _SalesGroupOrgUnit,

      _SalesOrganizationOrgUnit_2,
      _SalesOfficeOrgUnit_2,
      _SalesGroupOrgUnit_2


}
```
