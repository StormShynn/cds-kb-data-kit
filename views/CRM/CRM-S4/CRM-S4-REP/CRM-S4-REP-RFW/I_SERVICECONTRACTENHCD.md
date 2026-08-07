---
name: I_SERVICECONTRACTENHCD
description: "Servicecontractenhcd"
app_component: CRM-S4-REP-RFW
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
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICECONTRACTENHCD

**Servicecontractenhcd**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContract` | ✓ | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `ServiceContractUUID` |  | |  |  |  |  |
| `ServiceContractCharUUID` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceContractDescription` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |  |  |
| `ServiceDocumentCreatedByUser` |  | |  |  |  |  |
| `ServiceDocumentChangedByUser` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `RefBusinessSolutionOrder` |  | |  |  |  |  |
| `ServiceContractNetAmount` |  | |  |  |  |  |
| `ServiceContractGrossAmount` |  | |  |  |  |  |
| `ServiceDocTaxAmount` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |  |  |
| `ContactPersonBusinessPartnerId` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `ServiceContractStartDateTime` |  | |  |  |  |  |
| `ServiceContractEndDateTime` |  | |  |  |  |  |
| `SrvcContrEarliestStartDateTime` |  | |  |  |  |  |
| `SrvcContrLatestEndDateTime` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `SrvcSEPAMandateRelevance` |  | |  |  |  |  |
| `SEPAMandate` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `ServiceContractRejectionReason` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `ServiceContractStatus` |  | |  |  |  |  |
| `ServiceContractIsReleased` |  | |  |  |  |  |
| `ServiceContractHasError` |  | |  |  |  |  |
| `SrvcContrBillingStatus` |  | |  |  |  |  |
| `ServiceContractIsRejected` |  | |  |  |  |  |
| `ServiceContractIsOpen` |  | |  |  |  |  |
| `ServiceContractCanclnSts` |  | |  |  |  |  |
| `SrvcContrRejectionStatus` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `ServiceContractCanclnParty` |  | |  |  |  |  |
| `ServiceContrCancellationReason` |  | |  |  |  |  |
| `SrvcContrCreditStatus` |  | |  |  |  |  |
| `SrvcContrCancellationDateTime` |  | |  | `cast( case ServiceContractCanclnParty when '' then 0 else ServiceContractEndDateTime end as timestamp preserving type )` |  |  |
| `SrvcContrExternalReference` |  | | `_ExtRefServiceContract` | `CustMgmtExtRefID` |  |  |
| `ServiceQtanExtReference` |  | | `_ExtRefServiceContractQuot` | `CustMgmtExtRefID` |  |  |
| `WBSElementExternalID` |  | | `_WBSElementBasicData` | `WBSElementExternalID` |  |  |
| `_ServiceContractItem` | | ✓ | | | | |
| `_SrvcDocHeaderLongText` | | ✓ | | | | |
| `_CustMgmtPartner` | | ✓ | | | | |
| `_ServiceDocPredecessor` | | ✓ | | | | |
| `_ServiceDocSuccessor` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_SrvcDocumentRejectionReason` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocHasError` | | ✓ | | | | |
| `_ServiceDocBillingStatus` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_ServiceContractCanclnSts` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_SrvcDocCreditStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceContractItem` | `I_ServiceContractItemEnhcd` | [1..*] |
| `_SrvcDocHeaderLongText` | `I_SrvcDocHeaderLongText` | [0..*] |
| `_CustMgmtPartner` | `I_CustMgmtPartner` | [0..*] |
| `_ExtRefServiceContract` | `I_CustMgmtExtRefID` | [0..1] |
| `_ExtRefServiceContractQuot` | `I_CustMgmtExtRefID` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_ServiceDocPredecessor` | `I_ServiceDocumentPredecessor` | [1] |
| `_ServiceDocSuccessor` | `I_ServiceDocumentSuccessor` | [0..*] |
| `_ServiceContractEnhcdExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Contract Enhanced'

@AccessControl: {
    authorizationCheck: #MANDATORY,
    privilegedAssociations: [ '_CustMgmtPartner' ],
    personalData.blocking: #NOT_REQUIRED
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    representativeKey: 'ServiceContract',
    sapObjectNodeType.name: 'ServiceContract',
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                             #CDS_MODELING_ASSOCIATION_TARGET, 
                             #SQL_DATA_SOURCE, 
                             #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    usageType: {
        dataClass:      #MIXED,
        serviceQuality: #C,
        sizeCategory:   #XXL
    }
}

@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_ServiceContractEnhcd
  as select from I_ServiceContract

  association [1..*] to I_ServiceContractItemEnhcd    as _ServiceContractItem on _ServiceContractItem.ServiceContract = $projection.ServiceContract

  association [0..*] to I_SrvcDocHeaderLongText       as _SrvcDocHeaderLongText  on _SrvcDocHeaderLongText.ServiceObjectType = $projection.ServiceObjectType 
                                                                                and _SrvcDocHeaderLongText.ServiceDocument   = $projection.ServiceContract
                                                                                and _SrvcDocHeaderLongText.Language          = $session.system_language

  association [0..*] to I_CustMgmtPartner             as _CustMgmtPartner  on _CustMgmtPartner.CustMgmtDocument     = $projection.ServiceContract 
                                                                          and _CustMgmtPartner.CustMgmtObjectType   = $projection.ServiceObjectType
                                                                          and _CustMgmtPartner.CustMgmtDocumentItem = '000000'

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_CustMgmtExtRefID            as _ExtRefServiceContract  on _ExtRefServiceContract.CustMgmtObjectType   = 'BUS2000112'
                                                                                and _ExtRefServiceContract.CustMgmtDocument     = $projection.ServiceContract
                                                                                and _ExtRefServiceContract.CustMgmtDocumentItem = '000000'
                                                                                and _ExtRefServiceContract.CustMgmtExtRefIDType = '0003'

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_CustMgmtExtRefID            as _ExtRefServiceContractQuot  on _ExtRefServiceContractQuot.CustMgmtObjectType   = 'BUS2000112'
                                                                                    and _ExtRefServiceContractQuot.CustMgmtDocument     = $projection.ServiceContract 
                                                                                    and _ExtRefServiceContractQuot.CustMgmtDocumentItem = '000000' 
                                                                                    and _ExtRefServiceContractQuot.CustMgmtExtRefIDType = '0009'

  association [0..1] to I_WBSElementBasicData         as _WBSElementBasicData on _WBSElementBasicData.WBSElementInternalID = $projection.WBSElementInternalID
  
  association [1]    to I_ServiceDocumentPredecessor  as _ServiceDocPredecessor    on  _ServiceDocPredecessor.ServiceDocumentUUID = $projection.ServiceContractUUID
                                                                                   and _ServiceDocPredecessor.ServiceObjectType   = $projection.ServiceObjectType 

  association [0..*] to I_ServiceDocumentSuccessor    as _ServiceDocSuccessor      on _ServiceDocSuccessor.ServiceDocumentUUID = $projection.ServiceContractUUID
                                                                                  and _ServiceDocSuccessor.ServiceObjectType   = $projection.ServiceObjectType 

  association [0..1] to E_ServiceDocument             as _ServiceContractEnhcdExt  on _ServiceContractEnhcdExt.ServiceCategory = $projection.ServiceObjectType 
                                                                                  and _ServiceContractEnhcdExt.ServiceOrder    = $projection.ServiceContract 
{
      // Header Keys
  key ServiceContract,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,

      ServiceContractUUID,
      ServiceContractCharUUID,

      // Header Details
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @Semantics.text: true
      ServiceContractDescription,
      Language,
      PostingDate,
      ServiceDocCreationDateTime,
      ServiceDocChangedDateTime,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,

      PricingDocument,
      RefBusinessSolutionOrder,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractNetAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractGrossAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,
      SoldToParty,
      SoldToPartyRegion,
      SoldToPartyCountry,

      RespEmployeeBusinessPartnerId,
      ContactPersonBusinessPartnerId,

      ShipToParty,
      BillToParty,
      PayerParty,
      
      ServiceContractStartDateTime,
      ServiceContractEndDateTime,
      SrvcContrEarliestStartDateTime,
      SrvcContrLatestEndDateTime,
      PaymentTerms,
      PaymentMethod,
      SrvcSEPAMandateRelevance,
      SEPAMandate,
      WBSElementInternalID,
      TransactionCurrency,
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,
      ServiceContractRejectionReason,
      Region,
      ServiceContractStatus,
      @Semantics.booleanIndicator: true
      ServiceContractIsReleased,
      @Semantics.booleanIndicator: true
      ServiceContractHasError,
      SrvcContrBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceContractIsRejected,
      @Semantics.booleanIndicator: true
      ServiceContractIsOpen,
      ServiceContractCanclnSts,
      SrvcContrRejectionStatus,
      
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      BillingBlockReason,
      ServiceContractCanclnParty,
      ServiceContrCancellationReason,
      SrvcContrCreditStatus,

      cast( case ServiceContractCanclnParty
            when '' then 0
            else ServiceContractEndDateTime end as timestamp preserving type )    as SrvcContrCancellationDateTime,
      _ExtRefServiceContract.CustMgmtExtRefID                                     as SrvcContrExternalReference,
      _ExtRefServiceContractQuot.CustMgmtExtRefID                                 as ServiceQtanExtReference,
      _WBSElementBasicData.WBSElementExternalID,
      
      _ServiceContractItem,
      _ServiceDocPredecessor,
      _ServiceDocSuccessor,
      _SrvcDocHeaderLongText,
      _CustMgmtPartner,
      
      _ServiceDocumentType,
      _ServiceObjType,
      _SoldToParty,
      _SoldToPartyRegion,
      _SoldToPartyCountry,
      _RespEmployee,
      _ContactPerson,
      _ShipToParty,
      _BillToParty,
      _PayerParty,
      _PaymentTerms,
      _PaymentMethod,
      _SrvcSEPAMandateRelevance,
      _TransactionCurrency,
      _SrvcDocumentRejectionReason,
      _Region,
      _SrvcDocLifecycleStatus,
      _ServiceDocHasError,
      _ServiceDocBillingStatus,
      _ServiceDocumentIsOpen,
      _ServiceContractCanclnSts,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _Division,
      _DistributionChannel,
      _BillingBlockReason,
      _SrvcDocCreditStatus
}
```
