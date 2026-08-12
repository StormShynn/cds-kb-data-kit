---
name: I_SERVICEQUOTATIONITEMTP
description: "Servicequotationitemtp"
app_component: CRM-S4-SRV-SVQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceQuotation` | ✓ | |  |  |  |  |
| `ServiceQuotationItem` | ✓ | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `ServiceDocumentItemObjectType` |  | |  |  |  |  |
| `ServiceQtanItemCategory` |  | |  |  |  |  |
| `ServiceQuotationItemUUID` |  | |  |  |  |  |
| `ParentServiceQuotationItem` |  | |  |  |  |  |
| `ServiceQtanItemDescription` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `ServiceDocItemCreationDateTime` |  | |  |  |  |  |
| `ServiceDocItemChangedDateTime` |  | |  |  |  |  |
| `ServiceDocItemCreatedByUser` |  | |  |  |  |  |
| `ServiceDocItemChangedByUser` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `ContactPersonBusinessPartnerId` |  | |  |  |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `RespyMgmtServiceTeam` |  | |  |  |  |  |
| `RespyMgmtGlobalTeamID` |  | |  |  |  |  |
| `ServiceQuotationItemIsNew` |  | |  |  |  |  |
| `SrvcQtanItemIsInProcess` |  | |  |  |  |  |
| `ServiceQuotationItemIsReleased` |  | |  |  |  |  |
| `ServiceQtanItemIsCompleted` |  | |  |  |  |  |
| `SrvcQtanItemStatus` |  | |  |  |  |  |
| `ServiceQuotationItemIsRejected` |  | |  |  |  |  |
| `ServiceQuotationItemIsAccepted` |  | |  |  |  |  |
| `ServiceQuotationItemHasError` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ServiceDocItemGrossAmount` |  | |  |  |  |  |
| `ServiceDocumentItemNetAmount` |  | |  |  |  |  |
| `ServiceDocumentItemTaxAmount` |  | |  |  |  |  |
| `ServiceQtanItemExtReference` |  | |  |  |  |  |
| `ServiceQtanExtReference` |  | |  |  |  |  |
| `ReferenceServiceContract` |  | |  |  |  |  |
| `ReferenceServiceContractItem` |  | |  |  |  |  |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServicePerformer` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_SrvcQtanItmStatus` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_ServiceQuotationTP` | | ✓ | | | | |
| `_SrvcQtanItemRefObjectTP` | | ✓ | | | | |
| `_SrvcQtanItemPriceElementTP` | | ✓ | | | | |
| `_SrvcQtanItemAppointmentTP` | | ✓ | | | | |
| `_SrvcQtanItemDurationTP` | | ✓ | | | | |
| `_SrvcQtanItmFUPSrvcOrdTP` | | ✓ | | | | |
| `_SrvcQtanItemLongTextTP` | | ✓ | | | | |
| `_SrvcQtanItemPartnerTP` | | ✓ | | | | |

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
