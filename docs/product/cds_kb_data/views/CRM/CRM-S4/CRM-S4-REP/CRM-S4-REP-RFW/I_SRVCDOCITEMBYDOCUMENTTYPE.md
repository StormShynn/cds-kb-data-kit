---
name: I_SRVCDOCITEMBYDOCUMENTTYPE
description: "Srvcdocitembydocumenttype"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentType` | ✓ | |  |  |  |  |
| `ServiceDocument` | ✓ | |  |  |  |  |
| `ServiceDocumentItem` | ✓ | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `ServiceDocumentUUID` |  | |  |  |  |  |
| `ServiceDocumentDescription` |  | |  |  |  |  |
| `ServiceDocumentItemUUID` |  | |  |  |  |  |
| `ServiceDocumentItemObjectType` |  | |  |  |  |  |
| `ParentServiceDocumentItemUUID` |  | |  |  |  |  |
| `ServiceDocumentItemDescription` |  | |  |  |  |  |
| `RefBusinessSolutionOrder` |  | |  |  |  |  |
| `RefBusinessSolutionOrderItem` |  | |  |  |  |  |
| `BillingDateTime` |  | |  |  |  |  |
| `BillingDocCreationDateTime` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `ServiceDocumentItemPriority` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `SalesOrganizationOrgUnitID` |  | |  |  |  |  |
| `SalesOfficeOrgUnitID` |  | |  |  |  |  |
| `SalesGroupOrgUnitID` |  | |  |  |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ServiceTeam` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `ServiceEmployee` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `ServiceDocumentItemStatus` |  | |  |  |  |  |
| `ServiceDocumentItemHasError` |  | |  |  |  |  |
| `SrvcDocItmIsReleasedForBilling` |  | |  |  |  |  |
| `ServiceDocItemBillingStatus` |  | |  |  |  |  |
| `ServiceDocumentItemIsOpen` |  | |  |  |  |  |
| `ServiceOrganization` |  | |  |  |  |  |
| `ResponsibleServiceOrganization` |  | |  |  |  |  |
| `ServiceDocItemCreationDateTime` |  | |  |  |  |  |
| `ServiceDocItemChangedDateTime` |  | |  |  |  |  |
| `ServiceDocItemCreationDate` |  | |  | `cast( tstmp_to_dats( ServiceDocItemCreationDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_created_on preserving type )` |  |  |
| `ServiceDocItemChangedDate` |  | |  | `cast( tstmp_to_dats( ServiceDocItemChangedDateTime, abap_system_timezone( $session.client,'NULL' ), $session.client, 'NULL' ) as crms4_changed_on preserving type )` |  |  |
| `ServiceDocItemCreatedByUser` |  | |  |  |  |  |
| `ServiceDocItemChangedByUser` |  | |  |  |  |  |
| `OriginallyRequestedProduct` |  | |  |  |  |  |
| `ServiceDocumentItemQuantity` |  | |  |  |  |  |
| `ServiceDocItemQuantityUnit` |  | |  |  |  |  |
| `SrvcDocItemBaseQuantityUnit` |  | |  |  |  |  |
| `ServiceDocItemCategory` |  | |  |  |  |  |
| `ServiceDocumentItemNetAmount` |  | |  |  |  |  |
| `BillableControl` |  | |  |  |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `RequestedServiceStartDateTime` |  | |  |  |  |  |
| `RequestedServiceEndDateTime` |  | |  |  |  |  |
| `ServiceContrItemStartDateTime` |  | |  |  |  |  |
| `ServiceContrItemEndDateTime` |  | |  |  |  |  |
| `ServiceDocItemGrossAmount` |  | |  |  |  |  |
| `SettlementPeriodRuleUUID` |  | |  |  |  |  |
| `BillingPlanBillingDateRuleUUID` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `ServiceDuration` |  | |  |  |  |  |
| `ServiceDocItemRejectionReason` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `ServiceDocumentItemIsReleased` |  | |  |  |  |  |
| `ServiceDocumentItemIsRejected` |  | |  |  |  |  |
| `ResponseProfile` |  | |  |  |  |  |
| `ServiceProfile` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `ActualServiceDuration` |  | |  |  |  |  |
| `ActualServiceDurationUnit` |  | |  |  |  |  |
| `ServiceDurationUnit` |  | |  |  |  |  |
| `TimeSheetOvertimeCategory` |  | |  |  |  |  |
| `Industry` |  | |  |  |  |  |
| `SrvcContrItemRnwlDuration` |  | |  |  |  |  |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  |  |  |
| `SrvcContrItemExtensionDuration` |  | |  |  |  |  |
| `SrvcContrItemExtnDurationUnit` |  | |  |  |  |  |
| `_ServiceDocument` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_BillingRequestItem` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceDocItemBillingStatus` | | ✓ | | | | |
| `_ServiceDocItemCategory` | | ✓ | | | | |
| `_ServiceDocItemHasError` | | ✓ | | | | |
| `_ServiceDocItemPriority` | | ✓ | | | | |
| `_ServiceDocItemStatus` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_BaseUnit_2` | | ✓ | | | | |
| `_SalesUnit` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_ServiceProductList` | | ✓ | | | | |
| `_ServiceTeam` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SrvcDocItemIsRelForBillgSts` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_FixedPrice` | | ✓ | | | | |
| `_StatusObjItemStatus` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_ActualServiceDurationUnit` | | ✓ | | | | |
| `_ServiceDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemRnwlDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemExtnDurationUnit` | | ✓ | | | | |
| `_ServiceDocOvertimeCat` | | ✓ | | | | |
| `_Industry` | | ✓ | | | | |
| `_ServiceDocItemRejectionReason` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |

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
