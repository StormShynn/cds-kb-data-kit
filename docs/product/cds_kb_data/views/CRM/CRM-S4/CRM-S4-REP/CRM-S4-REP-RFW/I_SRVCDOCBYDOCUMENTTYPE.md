---
name: I_SRVCDOCBYDOCUMENTTYPE
description: "Srvcdocbydocumenttype"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentType` | ✓ | |  |  |  |  |
| `ServiceDocument` | ✓ | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `ServiceDocumentUUID` |  | |  |  |  |  |
| `ServiceDocumentDescription` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `PricingProcedure` |  | |  |  |  |  |
| `RefBusinessSolutionOrder` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ServiceTeam` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `ServiceEmployee` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ServiceDocumentPriority` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ServiceDocNetAmount` |  | |  |  |  |  |
| `ServiceDocGrossAmount` |  | |  |  |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `ServiceDocumentStatus` |  | |  |  |  |  |
| `ServiceDocumentHasError` |  | |  |  |  |  |
| `ServiceDocBillingStatus` |  | |  |  |  |  |
| `ServiceDocIsReleasedForBilling` |  | |  |  |  |  |
| `ServiceDocumentIsOpen` |  | |  |  |  |  |
| `ServiceOrganization` |  | |  |  |  |  |
| `ResponsibleServiceOrganization` |  | |  |  |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |  |  |
| `ServiceDocumentCreationDate` |  | |  | `cast( cast(substring( cast(ServiceDocCreationDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` |  |  |
| `ServiceDocumentChangedDate` |  | |  | `cast( cast(substring( cast(ServiceDocChangedDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_changed_on )` |  |  |
| `ServiceDocumentCreatedByUser` |  | |  |  |  |  |
| `ServiceDocumentChangedByUser` |  | |  |  |  |  |
| `ServiceContractStartDateTime` |  | |  |  |  |  |
| `ServiceContractEndDateTime` |  | |  |  |  |  |
| `ServiceContractStartDate` |  | |  | `cast( cast(substring( cast(ServiceContractStartDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` |  |  |
| `ServiceContractEndDate` |  | |  | `cast( cast(substring( cast(ServiceContractEndDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` |  |  |
| `RequestedServiceStartDateTime` |  | |  |  |  |  |
| `RequestedServiceEndDateTime` |  | |  |  |  |  |
| `RequestedServiceStartDate` |  | |  | `cast( cast(substring( cast(RequestedServiceStartDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_created_on )` |  |  |
| `RequestedServiceEndDate` |  | |  | `cast( cast(substring( cast(RequestedServiceEndDateTime as abap.char(30)) , 1 , 8) as abap.dats(8)) as crms4_changed_on )` |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `BusinessActivityCategory` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOrganizationOrgUnitID` |  | |  |  |  |  |
| `SalesOfficeOrgUnitID` |  | |  |  |  |  |
| `SalesGroupOrgUnitID` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `ServiceDocumentRejectionReason` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `ServiceDocumentIsReleased` |  | |  |  |  |  |
| `ServiceDocumentIsRejected` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `ServiceDocTaxAmount` |  | |  |  |  |  |
| `ServiceDefectSchema` |  | |  |  |  |  |
| `ServiceDefectCategory` |  | |  |  |  |  |
| `ServiceFirstResponseByDateTime` |  | |  |  |  |  |
| `ServiceDueByDateTime` |  | |  |  |  |  |
| `RecommendedServicePriority` |  | |  |  |  |  |
| `ServiceDocumentUrgency` |  | |  |  |  |  |
| `ServiceDocumentImpact` |  | |  |  |  |  |
| `ServiceDocumentProblemCategory` |  | |  |  |  |  |
| `ServiceReasonSchema` |  | |  |  |  |  |
| `ServiceReasonCategory` |  | |  |  |  |  |
| `ServiceConfirmationIsFinal` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `ServiceRisk` |  | |  |  |  |  |
| `_ActivityCategory` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceDocBillingStatus` | | ✓ | | | | |
| `_ServiceDocHasError` | | ✓ | | | | |
| `_ServiceDocumentPriority` | | ✓ | | | | |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceTeam` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SrvcDocIsRelForBillgSts` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_FixedPrice` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_ServiceRisk` | | ✓ | | | | |
| `_SrvcDocumentRejectionReason` | | ✓ | | | | |
| `_ServiceDocProblemCategory` | | ✓ | | | | |

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
