---
name: I_SERVICECONTRACTTP
description: Servicecontracttp
app_component: CRM-S4-SRV-CTR-2CL
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
  - contract
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SERVICECONTRACTTP

**Servicecontracttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceContract` | `ServiceContract` |
| `ServiceObjectType` | `ServiceObjectType` |
| `ServiceContractType` | `ServiceContractType` |
| `ServiceContractUUID` | `ServiceContractUUID` |
| `ServiceContractDescription` | `ServiceContractDescription` |
| `Language` | `Language` |
| `PostingDate` | `PostingDate` |
| `ServiceDocCreationDateTime` | `ServiceDocCreationDateTime` |
| `ServiceDocChangedDateTime` | `ServiceDocChangedDateTime` |
| `ServiceDocumentCreatedByUser` | `ServiceDocumentCreatedByUser` |
| `ServiceDocumentChangedByUser` | `ServiceDocumentChangedByUser` |
| `SoldToParty` | `SoldToParty` |
| `ShipToParty` | `ShipToParty` |
| `BillToParty` | `BillToParty` |
| `PayerParty` | `PayerParty` |
| `ContactPersonBusinessPartnerId` | `ContactPersonBusinessPartnerId` |
| `RespEmployeeBusinessPartnerId` | `RespEmployeeBusinessPartnerId` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `SalesOrganizationOrgUnitID` | `SalesOrganizationOrgUnitID` |
| `SalesOfficeOrgUnitID` | `SalesOfficeOrgUnitID` |
| `SalesGroupOrgUnitID` | `SalesGroupOrgUnitID` |
| `ServiceOrganization` | `ServiceOrganization` |
| `ServiceContractIsNew` | `ServiceContractIsNew` |
| `ServiceContractIsInProcess` | `ServiceContractIsInProcess` |
| `ServiceContractIsReleased` | `ServiceContractIsReleased` |
| `ServiceContractIsCompleted` | `ServiceContractIsCompleted` |
| `ServiceContractStatus` | `ServiceContractStatus` |
| `SrvcContrBillingStatus` | `SrvcContrBillingStatus` |
| `SrvcDocRejectionStatus` | `SrvcDocRejectionStatus` |
| `ServiceContractHasError` | `ServiceContractHasError` |
| `SrvcDocTransferStatus` | `SrvcDocTransferStatus` |
| `ServiceContractStartDateTime` | `ServiceContractStartDateTime` |
| `ServiceContractEndDateTime` | `ServiceContractEndDateTime` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ServiceDocGrossAmount` | `} ServiceDocGrossAmount` |
| `ServiceDocNetAmount` | `} ServiceDocNetAmount` |
| `ServiceDocTaxAmount` | `} ServiceDocTaxAmount` |
| `PricingDocument` | `PricingDocument` |
| `ServiceContractCanclnParty` | `ServiceContractCanclnParty` |
| `ServiceContrCancellationReason` | `ServiceContrCancellationReason` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `CustomerPurchaseOrderDate` | `CustomerPurchaseOrderDate` |
| `PaymentTerms` | `PaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `SrvcContrExternalReference` | `SrvcContrExternalReference` |
| `_ServiceDocumentType` | *Association* |
| `_ServiceObjType` | *Association* |
| `_ShipToParty` | *Association* |
| `_SoldToParty` | *Association* |
| `_BillToParty` | *Association* |
| `_PayerParty` | *Association* |
| `_ContactPerson` | *Association* |
| `_RespEmployee` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_SalesGroup` | *Association* |
| `_SalesGroupOrgUnit_2` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesOfficeOrgUnit_2` | *Association* |
| `_SalesOrganization` | *Association* |
| `_SalesOrganizationOrgUnit_2` | *Association* |
| `_ServiceOrganizationOrgUnit_2` | *Association* |
| `_ExtRefServiceContract` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_SrvcContrStatus` | *Association* |
| `_PaymentTerms` | *Association* |
| `_PaymentMethod` | *Association* |
| `_ServiceDocumentTypeText` | *Association* |
| `_SrvcDocLifecycleStatusText` | *Association* |
| `_SalesOrganizationText` | *Association* |
| `_DistributionChannelText` | *Association* |
| `_DivisionText` | *Association* |
| `_SalesOfficeText` | *Association* |
| `_SalesGroupText` | *Association* |
| `_PaymentTermsText` | *Association* |
| `_CurrencyText` | *Association* |
| `_ServiceDocBillingStatusText` | *Association* |
| `_SrvcDocRejectionStatusText` | *Association* |
| `_ServiceDocTransferStatusText` | *Association* |
| `_ServiceCancellationPartyText` | *Association* |
| `_ServiceCanclnReasonText` | *Association* |
| `_ServiceContractItemTP` | *Association* |
| `_SrvcContrPartnerTP` | *Association* |
| `_SrvcContrUserStatusTP` | *Association* |
| `_SrvcContrAppointmentTP` | *Association* |
| `_SrvcContrDurationTP` | *Association* |
| `_SrvcContrFUPBillgDocTP` | *Association* |
| `_SrvcContrFUPSrvcOrdTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Contract - TP'
@AccessControl: {
  authorizationCheck: #CHECK
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@ObjectModel.sapObjectNodeType.name: 'ServiceContract'
@ObjectModel: {
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
                }

@Metadata.ignorePropagatedAnnotations: true 
define root view entity I_ServiceContractTP
provider contract transactional_interface as projection on R_ServiceContractTP as ServiceContract
{

  //Administrative Fields
  key ServiceContract,
  @ObjectModel.foreignKey.association: '_ServiceObjType'
  ServiceObjectType,
  @ObjectModel.foreignKey.association: '_ServiceDocumentType'
  @ObjectModel.text.association: '_ServiceDocumentTypeText'
  ServiceContractType,
  ServiceContractUUID,
  ServiceContractDescription,
  Language,
  PostingDate,
  ServiceDocCreationDateTime,
  ServiceDocChangedDateTime,
  ServiceDocumentCreatedByUser,
  ServiceDocumentChangedByUser,
  
  //Partners
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]   
  @ObjectModel.foreignKey.association: '_SoldToParty'
  SoldToParty,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]    
  @ObjectModel.foreignKey.association: '_ShipToParty'
  ShipToParty,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
  @ObjectModel.foreignKey.association: '_BillToParty'
  BillToParty,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
  @ObjectModel.foreignKey.association: '_PayerParty'
  PayerParty,
  @ObjectModel.foreignKey.association: '_ContactPerson'
  ContactPersonBusinessPartnerId,
  @ObjectModel.foreignKey.association: '_RespEmployee'
  RespEmployeeBusinessPartnerId,
  
  // Organizational Data
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SalesOrganizationStdVH' , element:'SalesOrganization'}, useAsTemplate: true  }]  
  @ObjectModel.foreignKey.association: '_SalesOrganization'
  @ObjectModel.text.association: '_SalesOrganizationText'
  SalesOrganization,
  @ObjectModel.foreignKey.association: '_DistributionChannel'
  @ObjectModel.text.association: '_DistributionChannelText'
  DistributionChannel,
  @ObjectModel.foreignKey.association: '_Division'
  @ObjectModel.text.association: '_DivisionText'
  Division,
  @ObjectModel.foreignKey.association: '_SalesOffice'
  @ObjectModel.text.association: '_SalesOfficeText'
  SalesOffice,
  @ObjectModel.foreignKey.association: '_SalesGroup'
  @ObjectModel.text.association: '_SalesGroupText'
  SalesGroup,
  
  //CRM Org units
  //these feilds are only ON PREMISE
  @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
  SalesOrganizationOrgUnitID,
  @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
  SalesOfficeOrgUnitID,
  @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
  SalesGroupOrgUnitID,
  @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
  ServiceOrganization,
  
  //Status
  ServiceContractIsNew,
  ServiceContractIsInProcess,
  ServiceContractIsReleased,
  ServiceContractIsCompleted,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocLifecycleStatus' , element:'ServiceDocumentStatus'}, useAsTemplate: true  }]
  @ObjectModel.text.association: '_SrvcDocLifecycleStatusText'
  ServiceContractStatus,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceDocBillingStatus' , element:'ServiceDocBillingStatus'}, useAsTemplate: true  }]
  @ObjectModel.text.association: '_ServiceDocBillingStatusText'
  SrvcContrBillingStatus,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocRejectionStatus' , element:'ServiceDocumentIsRejected'}, useAsTemplate: true  }]
  @ObjectModel.text.association: '_SrvcDocRejectionStatusText'
  SrvcDocRejectionStatus,
  @Semantics.booleanIndicator
  ServiceContractHasError,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocTransferStatus' , element:'SrvcDocTransferStatus'}, useAsTemplate: true  }]
  @ObjectModel.text.association: '_ServiceDocTransferStatusText'
  SrvcDocTransferStatus,
  
  //Dates and Durations
  @Semantics.dateTime:true
  ServiceContractStartDateTime,
  @Semantics.dateTime:true
  ServiceContractEndDateTime,
  
  // Pricing Fields
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_CurrencyStdVH' , element:'Currency'}, useAsTemplate: true  }]
  @ObjectModel.foreignKey.association: '_TransactionCurrency'
  @ObjectModel.text.association: '_CurrencyText'
  TransactionCurrency,
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  ServiceDocGrossAmount,
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  ServiceDocNetAmount,
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  ServiceDocTaxAmount,
  PricingDocument,
  
  //Cancellation
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceCancellationParty' , element:'ServiceContractCanclnParty'}, useAsTemplate: true  }]
  @ObjectModel.text.association: '_ServiceCancellationPartyText'
  ServiceContractCanclnParty,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceCancellationReason' , element:'ServiceContrCancellationReason'}, useAsTemplate: true  }]
  @ObjectModel.text.association: '_ServiceCanclnReasonText'
  ServiceContrCancellationReason,
  
  //Sales Fields
  PurchaseOrderByCustomer,
  CustomerPurchaseOrderDate,
//  @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
//  ServiceContractRejectionReason,

  //Billing
  @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcMgmtPaymentTermsVH' , element:'PaymentTerms'}, useAsTemplate: true  }]
  @ObjectModel.text.association: '_PaymentTermsText'
  PaymentTerms,
  @Consumption.valueHelpDefinition: [{ entity : { name: 'C_SrvcContrPaymentMethodVH' , element:'PaymentMethod'}, useAsTemplate: true  }]
  PaymentMethod,
  
  //Reference Documents
  SrvcContrExternalReference,

  /* Associations */
  
  //Administrative 
  _ServiceDocumentType,
  _ServiceObjType,
  
  //Partners
  _ShipToParty,
  _SoldToParty,
  _BillToParty,
  _PayerParty,
  _ContactPerson,
  _RespEmployee,
  
  //Organizational data
  _DistributionChannel,
  _Division,
   _SalesGroup,
  _SalesGroupOrgUnit_2,
  _SalesOffice,
  _SalesOfficeOrgUnit_2,
  _SalesOrganization,
  _SalesOrganizationOrgUnit_2,
  _ServiceOrganizationOrgUnit_2,
  
  //Reference
  _ExtRefServiceContract,

 
  //Pricing
  _TransactionCurrency,
  
  //Sales
//  _SrvcDocumentRejectionReason,
  
  //Status
  _SrvcContrStatus,
  
  //Billing
  _PaymentTerms,
  _PaymentMethod,
  
  //Text association
  _ServiceDocumentTypeText,
  _SrvcDocLifecycleStatusText,
  _SalesOrganizationText,
  _DistributionChannelText,
  _DivisionText,
  _SalesOfficeText,
  _SalesGroupText,
  _PaymentTermsText,
  _CurrencyText,
  _ServiceDocBillingStatusText,
  _SrvcDocRejectionStatusText,
  _ServiceDocTransferStatusText,
  _ServiceCancellationPartyText,
  _ServiceCanclnReasonText,
    
  /* Compositions */
  _ServiceContractItemTP   : redirected to composition child I_ServiceContractItemTP,
  _SrvcContrPartnerTP      : redirected to composition child I_SrvcContrPartnerTP,
  _SrvcContrUserStatusTP   : redirected to composition child I_SrvcContrUserStatusTP,
  _SrvcContrAppointmentTP  : redirected to composition child I_SrvcContrAppointmentTP,
  _SrvcContrDurationTP     : redirected to composition child I_SrvcContrDurationTP,
  _SrvcContrFUPBillgDocTP  : redirected to composition child I_SrvcContrFUPBillgDocTP,
  _SrvcContrFUPSrvcOrdTP   : redirected to composition child I_SrvcContrFUPSrvcOrdTP
 
 
}
```
