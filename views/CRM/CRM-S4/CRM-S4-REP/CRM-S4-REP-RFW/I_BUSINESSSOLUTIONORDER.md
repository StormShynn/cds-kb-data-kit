---
name: I_BUSINESSSOLUTIONORDER
description: Businesssolutionorder
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BUSINESSSOLUTIONORDER

**Businesssolutionorder**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  | `ServiceDocument` |
| `ServiceObjectType` |  | |  |  |
| `BusinessSolutionOrderUUID` |  | |  | `ServiceDocumentUUID` |
| `ServiceDocumentCharUUID` |  | |  | `cast( ServiceDocumentCharUUID as sysuuid_c preserving type )` |
| `ServiceDocumentType` |  | |  |  |
| `BusSolnOrdDescription` |  | |  | `ServiceDocumentDescription` |
| `Language` |  | |  |  |
| `PostingDate` |  | |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |
| `ServiceDocumentCreatedByUser` |  | |  |  |
| `ServiceDocumentChangedByUser` |  | |  |  |
| `ServiceDocGrossAmount` |  | |  | `} ServiceDocGrossAmount` |
| `BusSolnOrdNetAmount` |  | |  | `} ServiceDocNetAmount` |
| `ServiceDocTaxAmount` |  | |  | `} ServiceDocTaxAmount` |
| `TransactionCurrency` |  | |  |  |
| `SoldToParty` |  | |  |  |
| `SoldToPartyCountry` |  | |  |  |
| `SoldToPartyRegion` |  | |  |  |
| `ShipToParty` |  | |  |  |
| `BillToParty` |  | |  |  |
| `PayerParty` |  | |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |
| `ContactPersonBusinessPartnerId` |  | |  |  |
| `PaymentTerms` |  | |  |  |
| `PaymentMethod` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `SalesGroup` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `Division` |  | |  |  |
| `Region` |  | |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |
| `ServiceDocumentRejectionReason` |  | |  |  |
| `BusSolnOrdStatus` |  | |  | `ServiceDocumentStatus` |
| `BusSolnOrdIsReleased` |  | |  | `ServiceDocumentIsReleased` |
| `BusSolnOrdHasError` |  | |  | `ServiceDocumentHasError` |
| `ServiceDocumentIsOpen` |  | |  |  |
| `BusSolnOrdRejectionStatus` |  | |  | `SrvcDocRejectionStatus` |
| `_BusinessSolutionOrderItem` | | ✓ | | |
| `_ServiceObjType` | | ✓ | | |
| `_ServiceDocumentType` | | ✓ | | |
| `_SoldToParty` | | ✓ | | |
| `_SoldToPartyRegion` | | ✓ | | |
| `_SoldToPartyCountry` | | ✓ | | |
| `_RespEmployee` | | ✓ | | |
| `_ContactPerson` | | ✓ | | |
| `_ShipToParty` | | ✓ | | |
| `_BillToParty` | | ✓ | | |
| `_PayerParty` | | ✓ | | |
| `_SoldToPartyToCustomer` | | ✓ | | |
| `_PaymentTerms` | | ✓ | | |
| `_PaymentMethod` | | ✓ | | |
| `_TransactionCurrency` | | ✓ | | |
| `_SrvcDocumentRejectionReason` | | ✓ | | |
| `_Region` | | ✓ | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | |
| `_ServiceDocHasError` | | ✓ | | |
| `_ServiceDocumentIsOpen` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_SalesOffice` | | ✓ | | |
| `_SalesGroup` | | ✓ | | |
| `_Division` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Solution Order'

@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    representativeKey: 'BusinessSolutionOrder',
    sapObjectNodeType.name: 'BusinessSolutionOrder',
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    usageType:{
        serviceQuality: #A,
        sizeCategory: #XXL,
        dataClass: #TRANSACTIONAL
    }
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_BusinessSolutionOrder
  as select from I_ServiceDocument_2

  association to many I_BusinessSolutionOrderItem as _BusinessSolutionOrderItem on  _BusinessSolutionOrderItem.BusinessSolutionOrder = $projection.BusinessSolutionOrder

  association to one E_ServiceDocument            as _BusinessSolutionOrderExt  on  _BusinessSolutionOrderExt.ServiceCategory = $projection.ServiceObjectType
                                                                                and _BusinessSolutionOrderExt.ServiceOrder    = $projection.BusinessSolutionOrder
{
      @ObjectModel.text.element: [ 'BusSolnOrdDescription' ]
  key ServiceDocument                                              as BusinessSolutionOrder,

      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      ServiceDocumentUUID                                          as BusinessSolutionOrderUUID,
      cast( ServiceDocumentCharUUID as sysuuid_c preserving type ) as ServiceDocumentCharUUID,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @Semantics.text: true
      ServiceDocumentDescription                                   as BusSolnOrdDescription,
      Language,
      PostingDate,
      @Semantics.dateTime: true
      ServiceDocCreationDateTime,
      @Semantics.dateTime: true
      ServiceDocChangedDateTime,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocGrossAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount                                          as BusSolnOrdNetAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,
      TransactionCurrency,
      SoldToParty,
      SoldToPartyCountry,
      SoldToPartyRegion,
      ShipToParty,
      BillToParty,
      PayerParty,
      RespEmployeeBusinessPartnerId,
      ContactPersonBusinessPartnerId,
      PaymentTerms,
      PaymentMethod,
      SalesOrganization,
      SalesOffice,
      SalesGroup,
      DistributionChannel,
      Division,
      Region,
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,
      ServiceDocumentRejectionReason,
      ServiceDocumentStatus                                        as BusSolnOrdStatus,
      @Semantics.booleanIndicator: true
      ServiceDocumentIsReleased                                    as BusSolnOrdIsReleased,
      @Semantics.booleanIndicator: true
      ServiceDocumentHasError                                      as BusSolnOrdHasError,
      @Semantics.booleanIndicator: true
      ServiceDocumentIsOpen,
      @Semantics.booleanIndicator: true
      SrvcDocRejectionStatus                                       as BusSolnOrdRejectionStatus,

      _BusinessSolutionOrderItem,
      _ServiceObjType,
      _ServiceDocumentType,
      _SoldToParty,
      _SoldToPartyRegion,
      _SoldToPartyCountry,
      _RespEmployee,
      _ContactPerson,
      _ShipToParty,
      _BillToParty,
      _PayerParty,
      _SoldToPartyToCustomer,
      _PaymentTerms,
      _PaymentMethod,
      _TransactionCurrency,
      _SrvcDocumentRejectionReason,
      _Region,
      _SrvcDocLifecycleStatus,
      _ServiceDocHasError,
      _ServiceDocumentIsOpen,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _Division,
      _DistributionChannel
}
where
  ServiceObjectType = 'BUS2000172'
```
