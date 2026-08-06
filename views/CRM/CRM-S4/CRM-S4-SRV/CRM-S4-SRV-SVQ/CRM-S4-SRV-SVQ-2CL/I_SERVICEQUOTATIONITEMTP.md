---
name: I_SERVICEQUOTATIONITEMTP
description: Servicequotationitemtp
app_component: CRM-S4-SRV-SVQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - service
  - item-level
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SERVICEQUOTATIONITEMTP

**Servicequotationitemtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceQuotation` | `ServiceQuotation` |
| key `ServiceQuotationItem` | `ServiceQuotationItem` |
| `ServiceObjectType` | `ServiceObjectType` |
| `ServiceDocumentItemObjectType` | `ServiceDocumentItemObjectType` |
| `ServiceQtanItemCategory` | `ServiceQtanItemCategory` |
| `ServiceQuotationItemUUID` | `ServiceQuotationItemUUID` |
| `ParentServiceQuotationItem` | `ParentServiceQuotationItem` |
| `ServiceQtanItemDescription` | `ServiceQtanItemDescription` |
| `Language` | `Language` |
| `ServiceDocItemCreationDateTime` | `ServiceDocItemCreationDateTime` |
| `ServiceDocItemChangedDateTime` | `ServiceDocItemChangedDateTime` |
| `ServiceDocItemCreatedByUser` | `ServiceDocItemCreatedByUser` |
| `ServiceDocItemChangedByUser` | `ServiceDocItemChangedByUser` |
| `Product` | `Product` |
| `Quantity` | `Quantity` |
| `QuantityUnit` | `QuantityUnit` |
| `SoldToParty` | `SoldToParty` |
| `ShipToParty` | `ShipToParty` |
| `ContactPersonBusinessPartnerId` | `ContactPersonBusinessPartnerId` |
| `RespEmployeeBusinessPartnerId` | `RespEmployeeBusinessPartnerId` |
| `ServicePerformer` | `ServicePerformer` |
| `RespyMgmtServiceTeam` | `RespyMgmtServiceTeam` |
| `RespyMgmtGlobalTeamID` | `RespyMgmtGlobalTeamID` |
| `ServiceQuotationItemIsNew` | `ServiceQuotationItemIsNew` |
| `SrvcQtanItemIsInProcess` | `SrvcQtanItemIsInProcess` |
| `ServiceQuotationItemIsReleased` | `ServiceQuotationItemIsReleased` |
| `ServiceQtanItemIsCompleted` | `ServiceQtanItemIsCompleted` |
| `SrvcQtanItemStatus` | `SrvcQtanItemStatus` |
| `ServiceQuotationItemIsRejected` | `ServiceQuotationItemIsRejected` |
| `ServiceQuotationItemIsAccepted` | `ServiceQuotationItemIsAccepted` |
| `ServiceQuotationItemHasError` | `ServiceQuotationItemHasError` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ServiceDocItemGrossAmount` | `} ServiceDocItemGrossAmount` |
| `ServiceDocumentItemNetAmount` | `} ServiceDocumentItemNetAmount` |
| `ServiceDocumentItemTaxAmount` | `} ServiceDocumentItemTaxAmount` |
| `ServiceQtanItemExtReference` | `ServiceQtanItemExtReference` |
| `ServiceQtanExtReference` | `ServiceQtanExtReference` |
| `ReferenceServiceContract` | `ReferenceServiceContract` |
| `ReferenceServiceContractItem` | `ReferenceServiceContractItem` |
| `_ServiceDocument` | *Association* |
| `_ServicePerformer` | *Association* |
| `_Product` | *Association* |
| `_ContactPerson` | *Association* |
| `_RespEmployee` | *Association* |
| `_ServiceObjType` | *Association* |
| `_SrvcQtanItmStatus` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_ServiceQuotationTP` | *Association* |
| `_SrvcQtanItemRefObjectTP` | *Association* |
| `_SrvcQtanItemPriceElementTP` | *Association* |
| `_SrvcQtanItemAppointmentTP` | *Association* |
| `_SrvcQtanItemDurationTP` | *Association* |
| `_SrvcQtanItmFUPSrvcOrdTP` | *Association* |
| `_SrvcQtanItemLongTextTP` | *Association* |
| `_SrvcQtanItemPartnerTP` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Quotation Item - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   representativeKey: 'ServiceQuotationItem',
    usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L},
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]              
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_ServiceQuotationItemTP 
  as projection on R_ServiceQuotationItemTP as _ServiceQuotationItemTP
{
      //Administrative fields
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key ServiceQuotation,
  key ServiceQuotationItem,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      ServiceDocumentItemObjectType,
      ServiceQtanItemCategory,
      ServiceQuotationItemUUID,
      ParentServiceQuotationItem,
      ServiceQtanItemDescription,
      Language,

      ServiceDocItemCreationDateTime,
      ServiceDocItemChangedDateTime,
      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,

      //Item fields
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      Quantity,
      QuantityUnit,

      //Partners
      SoldToParty,
      ShipToParty,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPersonBusinessPartnerId,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      RespEmployeeBusinessPartnerId,
      ServicePerformer,

      //Organizational data
      RespyMgmtServiceTeam,
      RespyMgmtGlobalTeamID,

      //Status
      ServiceQuotationItemIsNew,
      SrvcQtanItemIsInProcess,
      ServiceQuotationItemIsReleased,
      ServiceQtanItemIsCompleted,
      SrvcQtanItemStatus,
      @Semantics.booleanIndicator
      ServiceQuotationItemIsRejected,
      @Semantics.booleanIndicator
      ServiceQuotationItemIsAccepted,
      @Semantics.booleanIndicator
      ServiceQuotationItemHasError,

      //Pricing fields
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocItemGrossAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemTaxAmount,

      //Reference documents
      ServiceQtanItemExtReference,
      ServiceQtanExtReference,
      ReferenceServiceContract,
      ReferenceServiceContractItem,

      /* Associations */
      _ServiceDocument,
      _ServicePerformer,
      _Product,
      _ContactPerson,
      _RespEmployee,
      _ServiceObjType,
      _SrvcQtanItmStatus,
      _TransactionCurrency,

      _ServiceQuotationTP         : redirected to parent I_ServiceQuotationTP,

      /* Compositions */
      _SrvcQtanItemRefObjectTP    : redirected to composition child I_SrvcQtanItemRefObjectTP,
      _SrvcQtanItemPriceElementTP : redirected to composition child I_SrvcQtanItemPriceElementTP,
      //_SrvcQtanItemUserStatusTP   : redirected to composition child I_SrvcQtanItemUserStatusTP, //User Status Feature not enabled
      _SrvcQtanItemAppointmentTP  : redirected to composition child I_SrvcQtanItemAppointmentTP,
      _SrvcQtanItemDurationTP     : redirected to composition child I_SrvcQtanItemDurationTP,
      _SrvcQtanItmFUPSrvcOrdTP    : redirected to composition child I_SrvcQtanItmFUPSrvcOrdTP,
      _SrvcQtanItemLongTextTP     : redirected to composition child I_SrvcQtanItemLongTextTP,
      _SrvcQtanItemPartnerTP      : redirected to composition child I_SrvcQtanItemPartnerTP
}
```
