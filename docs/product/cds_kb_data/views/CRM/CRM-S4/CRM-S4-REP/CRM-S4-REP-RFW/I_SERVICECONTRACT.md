---
name: I_SERVICECONTRACT
description: "Servicecontract"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContract` | ✓ | |  | `ServiceDocument` |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `ServiceContractUUID` |  | |  | `ServiceDocumentUUID` |  |  |
| `ServiceContractCharUUID` |  | |  | `cast( ServiceDocumentCharUUID as sysuuid_c preserving type )` |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceContractDescription` |  | |  | `ServiceDocumentDescription` |  |  |
| `Language` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |  |  |
| `ServiceDocumentCreatedByUser` |  | |  |  |  |  |
| `ServiceDocumentChangedByUser` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `RefBusinessSolutionOrder` |  | |  |  |  |  |
| `ServiceContractNetAmount` |  | |  | `ServiceDocNetAmount` |  |  |
| `ServiceContractGrossAmount` |  | |  | `ServiceDocGrossAmount` |  |  |
| `ServiceDocTaxAmount` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  | `cast( ResponsibleEmployee as crmt_person_resp preserving type )` |  |  |
| `ContactPersonBusinessPartnerId` |  | |  | `cast( ContactPerson as crmt_contact_person preserving type )` |  |  |
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
| `ServiceContractRejectionReason` |  | |  | `ServiceDocumentRejectionReason` |  |  |
| `Region` |  | |  |  |  |  |
| `ServiceContractStatus` |  | |  | `ServiceDocumentStatus` |  |  |
| `ServiceContractIsReleased` |  | |  | `ServiceDocumentIsReleased` |  |  |
| `ServiceContractHasError` |  | |  | `ServiceDocumentHasError` |  |  |
| `SrvcContrBillingStatus` |  | |  | `ServiceDocBillingStatus` |  |  |
| `ServiceContractIsRejected` |  | |  | `ServiceDocumentIsRejected` |  |  |
| `ServiceContractIsOpen` |  | |  | `ServiceDocumentIsOpen` |  |  |
| `ServiceContractCanclnSts` |  | |  |  |  |  |
| `SrvcContrRejectionStatus` |  | |  | `SrvcDocRejectionStatus` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `ServiceContractCanclnParty` |  | |  | `ServiceDocumentCanclnParty` |  |  |
| `ServiceContrCancellationReason` |  | |  | `ServiceDocumentCanclnReason` |  |  |
| `SrvcContrCreditStatus` |  | |  | `SrvcDocCreditStatus` |  |  |
| `_RespEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
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
