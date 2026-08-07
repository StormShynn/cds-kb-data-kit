---
name: I_BUSINESSSOLUTIONORDERENHCD
description: Businesssolutionorderenhcd
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
# I_BUSINESSSOLUTIONORDERENHCD

**Businesssolutionorderenhcd**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `BusinessSolutionOrderUUID` |  | |  |  |  |  |
| `ServiceDocumentCharUUID` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `BusSolnOrdDescription` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |  |  |
| `ServiceDocumentCreatedByUser` |  | |  |  |  |  |
| `ServiceDocumentChangedByUser` |  | |  |  |  |  |
| `ServiceDocGrossAmount` |  | |  |  |  |  |
| `BusSolnOrdNetAmount` |  | |  |  |  |  |
| `ServiceDocTaxAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |  |  |
| `ContactPersonBusinessPartnerId` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `ServiceDocumentRejectionReason` |  | |  |  |  |  |
| `BusSolnOrdStatus` |  | |  |  |  |  |
| `BusSolnOrdIsReleased` |  | |  |  |  |  |
| `BusSolnOrdHasError` |  | |  |  |  |  |
| `ServiceDocumentIsOpen` |  | |  |  |  |  |
| `BusSolnOrdRejectionStatus` |  | |  |  |  |  |
| `BusSolnOrdExtReference` |  | | `_ExtRefBusinessSolutionOrder` | `CustMgmtExtRefID` |  |  |
| `_BillToParty` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_ServiceDocHasError` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_SrvcDocumentRejectionReason` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_SrvcDocHeaderLongText` | | ✓ | | | | |
| `_CustMgmtPartner` | | ✓ | | | | |
| `_BusSolutionOrderItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Solution Order Enhanced'

@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: {
    authorizationCheck: #MANDATORY,
    privilegedAssociations: [ '_CustMgmtPartner' ],
    personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    representativeKey: 'BusinessSolutionOrder',
    sapObjectNodeType.name: 'BusinessSolutionOrder',
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #SQL_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    usageType: {
        serviceQuality: #C,
        sizeCategory: #XXL,
        dataClass: #MIXED
    }
}

@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
define view entity I_BusinessSolutionOrderEnhcd
  as select from I_BusinessSolutionOrder

  association to many I_BusSolutionOrderItemEnhcd as _BusSolutionOrderItem        on  _BusSolutionOrderItem.BusinessSolutionOrder = $projection.BusinessSolutionOrder

  association to many I_SrvcDocHeaderLongText     as _SrvcDocHeaderLongText       on  _SrvcDocHeaderLongText.ServiceObjectType = $projection.ServiceObjectType
                                                                                  and _SrvcDocHeaderLongText.ServiceDocument   = $projection.BusinessSolutionOrder
                                                                                  and _SrvcDocHeaderLongText.Language          = $session.system_language

  association to many I_CustMgmtPartner           as _CustMgmtPartner             on  _CustMgmtPartner.CustMgmtDocument     = $projection.BusinessSolutionOrder
                                                                                  and _CustMgmtPartner.CustMgmtObjectType   = $projection.ServiceObjectType
                                                                                  and _CustMgmtPartner.CustMgmtDocumentItem = '000000'

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association to one I_CustMgmtExtRefID           as _ExtRefBusinessSolutionOrder on  _ExtRefBusinessSolutionOrder.CustMgmtObjectType   = $projection.ServiceObjectType
                                                                                  and _ExtRefBusinessSolutionOrder.CustMgmtDocument     = $projection.BusinessSolutionOrder
                                                                                  and _ExtRefBusinessSolutionOrder.CustMgmtDocumentItem = '000000'
                                                                                  and _ExtRefBusinessSolutionOrder.CustMgmtExtRefIDType = '0012'

  association to one E_ServiceDocument            as _BusinessSolutionOrderExt    on  _BusinessSolutionOrderExt.ServiceCategory = $projection.ServiceObjectType
                                                                                  and _BusinessSolutionOrderExt.ServiceOrder    = $projection.BusinessSolutionOrder
{
      @ObjectModel.text.element: [ 'BusSolnOrdDescription' ]
  key BusinessSolutionOrder,

      ServiceObjectType,
      BusinessSolutionOrderUUID,
      ServiceDocumentCharUUID,
      ServiceDocumentType,
      @Semantics.text: true
      BusSolnOrdDescription,
      Language,
      PostingDate,
      ServiceDocCreationDateTime,
      ServiceDocChangedDateTime,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocGrossAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BusSolnOrdNetAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
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
      BusSolnOrdStatus,
      @Semantics.booleanIndicator: true
      BusSolnOrdIsReleased,
      @Semantics.booleanIndicator: true
      BusSolnOrdHasError,
      @Semantics.booleanIndicator: true
      ServiceDocumentIsOpen,
      BusSolnOrdRejectionStatus,

      _ExtRefBusinessSolutionOrder.CustMgmtExtRefID as BusSolnOrdExtReference,

      _BillToParty,
      _ContactPerson,
      _DistributionChannel,
      _Division,
      _PayerParty,
      _PaymentMethod,
      _PaymentTerms,
      _Region,
      _RespEmployee,
      _SalesGroup,
      _SalesOffice,
      _SalesOrganization,
      _ServiceDocHasError,
      _ServiceDocumentIsOpen,
      _ServiceDocumentType,
      _ServiceObjType,
      _ShipToParty,
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _SrvcDocLifecycleStatus,
      _SrvcDocumentRejectionReason,
      _TransactionCurrency,

      _SrvcDocHeaderLongText,
      _CustMgmtPartner,
      _BusSolutionOrderItem
}
```
