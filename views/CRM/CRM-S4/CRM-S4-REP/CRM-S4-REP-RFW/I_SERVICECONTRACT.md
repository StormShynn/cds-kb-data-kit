---
name: I_SERVICECONTRACT
description: Servicecontract
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
# I_SERVICECONTRACT

**Servicecontract**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceContract` | `ServiceDocument` |
| `ServiceObjectType` | `ServiceObjectType` |
| `ServiceContractUUID` | `ServiceDocumentUUID` |
| `ServiceContractCharUUID` | `cast( ServiceDocumentCharUUID as sysuuid_c preserving type )` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `ServiceContractDescription` | `ServiceDocumentDescription` |
| `Language` | `Language` |
| `PostingDate` | `PostingDate` |
| `ServiceDocCreationDateTime` | `ServiceDocCreationDateTime` |
| `ServiceDocChangedDateTime` | `ServiceDocChangedDateTime` |
| `ServiceDocumentCreatedByUser` | `ServiceDocumentCreatedByUser` |
| `ServiceDocumentChangedByUser` | `ServiceDocumentChangedByUser` |
| `PricingDocument` | `PricingDocument` |
| `RefBusinessSolutionOrder` | `RefBusinessSolutionOrder` |
| `ServiceContractNetAmount` | `} ServiceDocNetAmount` |
| `ServiceContractGrossAmount` | `} ServiceDocGrossAmount` |
| `ServiceDocTaxAmount` | `} ServiceDocTaxAmount` |
| `SoldToParty` | `SoldToParty` |
| `SoldToPartyRegion` | `SoldToPartyRegion` |
| `SoldToPartyCountry` | `SoldToPartyCountry` |
| `RespEmployeeBusinessPartnerId` | `cast( ResponsibleEmployee as crmt_person_resp preserving type )` |
| `ContactPersonBusinessPartnerId` | `cast( ContactPerson as crmt_contact_person preserving type )` |
| `ShipToParty` | `ShipToParty` |
| `BillToParty` | `BillToParty` |
| `PayerParty` | `PayerParty` |
| `ServiceContractStartDateTime` | `ServiceContractStartDateTime` |
| `ServiceContractEndDateTime` | `ServiceContractEndDateTime` |
| `SrvcContrEarliestStartDateTime` | `SrvcContrEarliestStartDateTime` |
| `SrvcContrLatestEndDateTime` | `SrvcContrLatestEndDateTime` |
| `PaymentTerms` | `PaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `SrvcSEPAMandateRelevance` | `SrvcSEPAMandateRelevance` |
| `SEPAMandate` | `SEPAMandate` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `TransactionCurrency` | `TransactionCurrency` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `CustomerPurchaseOrderDate` | `CustomerPurchaseOrderDate` |
| `ServiceContractRejectionReason` | `ServiceDocumentRejectionReason` |
| `Region` | `Region` |
| `ServiceContractStatus` | `ServiceDocumentStatus` |
| `ServiceContractIsReleased` | `ServiceDocumentIsReleased` |
| `ServiceContractHasError` | `ServiceDocumentHasError` |
| `SrvcContrBillingStatus` | `ServiceDocBillingStatus` |
| `ServiceContractIsRejected` | `ServiceDocumentIsRejected` |
| `ServiceContractIsOpen` | `ServiceDocumentIsOpen` |
| `ServiceContractCanclnSts` | `ServiceContractCanclnSts` |
| `SrvcContrRejectionStatus` | `SrvcDocRejectionStatus` |
| `SalesOrganization` | `SalesOrganization` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `Division` | `Division` |
| `DistributionChannel` | `DistributionChannel` |
| `BillingBlockReason` | `BillingBlockReason` |
| `ServiceContractCanclnParty` | `ServiceDocumentCanclnParty` |
| `ServiceContrCancellationReason` | `ServiceDocumentCanclnReason` |
| `SrvcContrCreditStatus` | `SrvcDocCreditStatus` |
| `_RespEmployee` | *Association* |
| `_ContactPerson` | *Association* |
| `_PaymentMethod` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_ServiceObjType` | *Association* |
| `_SoldToParty` | *Association* |
| `_SoldToPartyRegion` | *Association* |
| `_SoldToPartyCountry` | *Association* |
| `_ShipToParty` | *Association* |
| `_BillToParty` | *Association* |
| `_PayerParty` | *Association* |
| `_PaymentTerms` | *Association* |
| `_SrvcSEPAMandateRelevance` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_SrvcDocumentRejectionReason` | *Association* |
| `_Region` | *Association* |
| `_SrvcDocLifecycleStatus` | *Association* |
| `_ServiceDocHasError` | *Association* |
| `_ServiceDocBillingStatus` | *Association* |
| `_ServiceDocumentIsOpen` | *Association* |
| `_ServiceContractCanclnSts` | *Association* |
| `_SalesOrganization` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_Division` | *Association* |
| `_DistributionChannel` | *Association* |
| `_BillingBlockReason` | *Association* |
| `_SrvcDocCreditStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RespEmployee` | `I_BusinessPartner` | [0..1] |
| `_ContactPerson` | `I_BusinessPartner` | [0..1] |
| `_PaymentMethod` | `I_SrvcDocPaymentMethod` | [0..1] |
| `_ServiceContractExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Contract'

@AccessControl: {
    authorizationCheck: #MANDATORY,
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
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #A,
        sizeCategory:   #XXL
    }
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_ServiceContract
  as select from I_ServiceDocument
  
  association [0..1] to I_BusinessPartner       as _RespEmployee          on _RespEmployee.BusinessPartner = $projection.RespEmployeeBusinessPartnerId 
  
  association [0..1] to I_BusinessPartner       as _ContactPerson         on _ContactPerson.BusinessPartner = $projection.ContactPersonBusinessPartnerId
  
  association [0..1] to I_SrvcDocPaymentMethod  as _PaymentMethod         on _PaymentMethod.PaymentMethod             = $projection.PaymentMethod
                                                                         and _PaymentMethod.SalesOrganization         = $projection.SalesOrganization
                                                                         and _PaymentMethod.OrgUnitTypeIDConcatenated = ''

  association [0..1] to E_ServiceDocument       as _ServiceContractExt    on _ServiceContractExt.ServiceCategory = $projection.ServiceObjectType
                                                                         and _ServiceContractExt.ServiceOrder    = $projection.ServiceContract 
{
      // Header Keys
      @ObjectModel.text.element: [ 'ServiceContractDescription' ]
  key ServiceDocument                                                 as ServiceContract,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,
      
      ServiceDocumentUUID                                             as ServiceContractUUID,
      cast( ServiceDocumentCharUUID as sysuuid_c preserving type )    as ServiceContractCharUUID,

      // Header Details
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      @Semantics.text: true
      ServiceDocumentDescription                                      as ServiceContractDescription,
      Language,
      PostingDate,
      @Semantics.dateTime: true
      ServiceDocCreationDateTime,
      @Semantics.dateTime: true
      ServiceDocChangedDateTime,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,
      PricingDocument,
      RefBusinessSolutionOrder,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocNetAmount                                             as ServiceContractNetAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocGrossAmount                                           as ServiceContractGrossAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocTaxAmount,
      SoldToParty,
      SoldToPartyRegion,
      SoldToPartyCountry,

      @ObjectModel.foreignKey.association: '_RespEmployee'
      cast( ResponsibleEmployee as crmt_person_resp preserving type ) as RespEmployeeBusinessPartnerId,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      cast( ContactPerson as crmt_contact_person preserving type )    as ContactPersonBusinessPartnerId,

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
      ServiceDocumentRejectionReason                                  as ServiceContractRejectionReason,
      Region,
      ServiceDocumentStatus                                           as ServiceContractStatus,
      @Semantics.booleanIndicator: true
      ServiceDocumentIsReleased                                       as ServiceContractIsReleased,
      @Semantics.booleanIndicator: true
      ServiceDocumentHasError                                         as ServiceContractHasError,
      ServiceDocBillingStatus                                         as SrvcContrBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceDocumentIsRejected                                       as ServiceContractIsRejected,
      @Semantics.booleanIndicator: true
      ServiceDocumentIsOpen                                           as ServiceContractIsOpen,
      ServiceContractCanclnSts,
      SrvcDocRejectionStatus                                          as SrvcContrRejectionStatus,
      
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
      ServiceDocumentCanclnParty                                      as ServiceContractCanclnParty,
      ServiceDocumentCanclnReason                                     as ServiceContrCancellationReason,
      SrvcDocCreditStatus                                             as SrvcContrCreditStatus,
      
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
} where     ServiceObjectType = 'BUS2000112'
        and ServiceDocumentTemplateType is initial
        and ServiceDocumentIsQuotation = ' '
```
