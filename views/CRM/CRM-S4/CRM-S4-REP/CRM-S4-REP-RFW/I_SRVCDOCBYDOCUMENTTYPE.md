---
name: I_SRVCDOCBYDOCUMENTTYPE
description: Srvcdocbydocumenttype
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
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCBYDOCUMENTTYPE

**Srvcdocbydocumenttype**

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
| `ServiceObjectType` | `ServiceObjectType` |
| `ServiceDocumentUUID` | `ServiceDocumentUUID` |
| `ServiceDocumentDescription` | `ServiceDocumentDescription` |
| `PricingDocument` | `PricingDocument` |
| `PricingProcedure` | `PricingProcedure` |
| `RefBusinessSolutionOrder` | `RefBusinessSolutionOrder` |
| `SoldToParty` | `SoldToParty` |
| `ServiceTeam` | `ServiceTeam` |
| `ResponsibleEmployee` | `ResponsibleEmployee` |
| `ServiceEmployee` | `ServiceEmployee` |
| `ContactPerson` | `ContactPerson` |
| `ServiceDocumentPriority` | `ServiceDocumentPriority` |
| `PostingDate` | `PostingDate` |
| `PaymentTerms` | `PaymentTerms` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ServiceDocNetAmount` | `} ServiceDocNetAmount` |
| `ServiceDocGrossAmount` | `} ServiceDocGrossAmount` |
| `SoldToPartyCountry` | `SoldToPartyCountry` |
| `SoldToPartyRegion` | `SoldToPartyRegion` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `ServiceDocumentStatus` | `ServiceDocumentStatus` |
| `ServiceDocumentHasError` | `ServiceDocumentHasError` |
| `ServiceDocBillingStatus` | `ServiceDocBillingStatus` |
| `ServiceDocIsReleasedForBilling` | `ServiceDocIsReleasedForBilling` |
| `ServiceDocumentIsOpen` | `ServiceDocumentIsOpen` |
| `ServiceOrganization` | `ServiceOrganization` |
| `ResponsibleServiceOrganization` | `ResponsibleServiceOrganization` |
| `ServiceDocCreationDateTime` | `ServiceDocCreationDateTime` |
| `ServiceDocChangedDateTime` | `ServiceDocChangedDateTime` |
| `ServiceDocumentCreationDate` | `cast( cast(substring( cast(ServiceDocCreationDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` |
| `ServiceDocumentChangedDate` | `cast( cast(substring( cast(ServiceDocChangedDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_changed_on )` |
| `ServiceDocumentCreatedByUser` | `ServiceDocumentCreatedByUser` |
| `ServiceDocumentChangedByUser` | `ServiceDocumentChangedByUser` |
| `ServiceContractStartDateTime` | `ServiceContractStartDateTime` |
| `ServiceContractEndDateTime` | `ServiceContractEndDateTime` |
| `ServiceContractStartDate` | `cast( cast(substring( cast(ServiceContractStartDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` |
| `ServiceContractEndDate` | `cast( cast(substring( cast(ServiceContractEndDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` |
| `RequestedServiceStartDateTime` | `RequestedServiceStartDateTime` |
| `RequestedServiceEndDateTime` | `RequestedServiceEndDateTime` |
| `RequestedServiceStartDate` | `cast( cast(substring( cast(RequestedServiceStartDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` |
| `RequestedServiceEndDate` | `cast( cast(substring( cast(RequestedServiceEndDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_changed_on )` |
| `BillingBlockReason` | `BillingBlockReason` |
| `BusinessActivityCategory` | `BusinessActivityCategory` |
| `SalesOrganization` | `SalesOrganization` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `SalesOrganizationOrgUnitID` | `SalesOrganizationOrgUnitID` |
| `SalesOfficeOrgUnitID` | `SalesOfficeOrgUnitID` |
| `SalesGroupOrgUnitID` | `SalesGroupOrgUnitID` |
| `Language` | `Language` |
| `ServiceDocumentRejectionReason` | `ServiceDocumentRejectionReason` |
| `CustomerPurchaseOrderDate` | `CustomerPurchaseOrderDate` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `ServiceDocumentIsReleased` | `ServiceDocumentIsReleased` |
| `ServiceDocumentIsRejected` | `ServiceDocumentIsRejected` |
| `ShipToParty` | `ShipToParty` |
| `BillToParty` | `BillToParty` |
| `PayerParty` | `PayerParty` |
| `ServiceDocTaxAmount` | `} ServiceDocTaxAmount` |
| `ServiceDefectSchema` | `ServiceDefectSchema` |
| `ServiceDefectCategory` | `ServiceDefectCategory` |
| `ServiceFirstResponseByDateTime` | `ServiceFirstResponseByDateTime` |
| `ServiceDueByDateTime` | `ServiceDueByDateTime` |
| `RecommendedServicePriority` | `RecommendedServicePriority` |
| `ServiceDocumentUrgency` | `ServiceDocumentUrgency` |
| `ServiceDocumentImpact` | `ServiceDocumentImpact` |
| `ServiceDocumentProblemCategory` | `ServiceDocumentProblemCategory` |
| `ServiceReasonSchema` | `ServiceReasonSchema` |
| `ServiceReasonCategory` | `ServiceReasonCategory` |
| `ServiceConfirmationIsFinal` | `ServiceConfirmationIsFinal` |
| `Region` | `Region` |
| `ServiceRisk` | `ServiceRisk` |
| `_ActivityCategory` | *Association* |
| `_BillingBlockReason` | *Association* |
| `_ContactPerson` | *Association* |
| `_RespEmployee` | *Association* |
| `_ServiceDocBillingStatus` | *Association* |
| `_ServiceDocHasError` | *Association* |
| `_ServiceDocumentPriority` | *Association* |
| `_ServiceDocumentStatus` | *Association* |
| `_SrvcDocLifecycleStatus` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_ServiceEmployee` | *Association* |
| `_ServiceObjType` | *Association* |
| `_ServiceTeam` | *Association* |
| `_SoldToParty` | *Association* |
| `_SrvcDocIsRelForBillgSts` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_ServiceDocumentIsOpen` | *Association* |
| `_PaymentTerms` | *Association* |
| `_FixedPrice` | *Association* |
| `_SalesOrganization` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_SalesOrganizationOrgUnit` | *Association* |
| `_SalesOrganizationOrgUnit_2` | *Association* |
| `_SalesOfficeOrgUnit` | *Association* |
| `_SalesOfficeOrgUnit_2` | *Association* |
| `_SalesGroupOrgUnit` | *Association* |
| `_SalesGroupOrgUnit_2` | *Association* |
| `_SoldToPartyCountry` | *Association* |
| `_SoldToPartyRegion` | *Association* |
| `_Region` | *Association* |
| `_ServiceRisk` | *Association* |
| `_SrvcDocumentRejectionReason` | *Association* |
| `_ServiceDocProblemCategory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction by Transaction Type'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCDOCSRCH',
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
   representativeKey: 'ServiceDocument',
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION,
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   }
}

@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocByDocumentType
  as select from I_ServiceDocument
  association [0..1] to E_ServiceDocument as _ServiceDocumentExt on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                 and $projection.ServiceDocument   = _ServiceDocumentExt.ServiceOrder
{

      //I_ServiceDocument
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
  key ServiceDocumentType,
  key ServiceDocument,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      ServiceDocumentUUID,
      ServiceDocumentDescription,
      PricingDocument,
      PricingProcedure,
      RefBusinessSolutionOrder,

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

      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
      ServiceDocumentPriority,
      PostingDate,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      TransactionCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocGrossAmount,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      SoldToPartyRegion,
      PurchaseOrderByCustomer,

      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      ServiceDocumentStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocHasError'
      ServiceDocumentHasError,
      @ObjectModel.foreignKey.association: '_ServiceDocBillingStatus'
      ServiceDocBillingStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocIsRelForBillgSts'
      ServiceDocIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      ServiceDocumentIsOpen,
      ServiceOrganization,
      ResponsibleServiceOrganization,

      ServiceDocCreationDateTime,
      ServiceDocChangedDateTime,
      @Semantics.systemDate.createdAt: true
      cast( cast(substring( cast(ServiceDocCreationDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_created_on ) as ServiceDocumentCreationDate,
      @Semantics.systemDate.lastChangedAt: true
      cast( cast(substring( cast(ServiceDocChangedDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_changed_on ) as ServiceDocumentChangedDate,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,

      ServiceContractStartDateTime,
      ServiceContractEndDateTime,
      cast( cast(substring( cast(ServiceContractStartDateTime as abap.char(30)) , 1 , 8)
                       as abap.dats(8))  as crms4_created_on )      as ServiceContractStartDate,
      cast( cast(substring( cast(ServiceContractEndDateTime as abap.char(30)) , 1 , 8)
                       as abap.dats(8))  as crms4_created_on )      as ServiceContractEndDate,

      RequestedServiceStartDateTime,
      RequestedServiceEndDateTime,
      cast( cast(substring( cast(RequestedServiceStartDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_created_on ) as RequestedServiceStartDate,
      cast( cast(substring( cast(RequestedServiceEndDateTime as abap.char(30)) , 1 , 8)
                            as abap.dats(8))  as crms4_changed_on ) as RequestedServiceEndDate,

      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      BillingBlockReason,
      @ObjectModel.foreignKey.association: '_ActivityCategory'
      BusinessActivityCategory,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
//      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'      
      SalesOrganizationOrgUnitID,
//      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'      
      SalesOfficeOrgUnitID,
//      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit'
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,

      Language,
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      ServiceDocumentRejectionReason,
      CustomerPurchaseOrderDate,
      DistributionChannel,
      Division,
      ServiceDocumentIsReleased,
      ServiceDocumentIsRejected,
      ShipToParty,
      BillToParty,
      PayerParty,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,
      ServiceDefectSchema,
      ServiceDefectCategory,
      ServiceFirstResponseByDateTime,
      ServiceDueByDateTime,
      RecommendedServicePriority,
      ServiceDocumentUrgency,
      ServiceDocumentImpact,
      @ObjectModel.foreignKey.association: '_ServiceDocProblemCategory'
      ServiceDocumentProblemCategory,
      ServiceReasonSchema,
      ServiceReasonCategory,
      ServiceConfirmationIsFinal,
      @ObjectModel.foreignKey.association: '_Region'
      Region,
      @ObjectModel.foreignKey.association: '_ServiceRisk'
      ServiceRisk,


      /* Associations */
      //I_ServiceDocument
      _ActivityCategory,
      _BillingBlockReason,
      _ContactPerson,
      _RespEmployee,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocBillingStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocHasError,
      _ServiceDocumentPriority,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,
      _ServiceDocumentType,
      _ServiceEmployee,
      _ServiceObjType,
      _ServiceTeam,
      _SoldToParty,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocIsRelForBillgSts,
      _TransactionCurrency,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      _PaymentTerms,
      _FixedPrice,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
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
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _Region,
      _ServiceRisk,
      _SrvcDocumentRejectionReason,
      _ServiceDocProblemCategory
}
```
