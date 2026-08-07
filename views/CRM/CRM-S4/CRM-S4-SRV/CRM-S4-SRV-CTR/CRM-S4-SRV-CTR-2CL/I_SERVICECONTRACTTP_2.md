---
name: I_SERVICECONTRACTTP_2
description: Servicecontracttp 2
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
# I_SERVICECONTRACTTP_2

**Servicecontracttp 2**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceContract` | ✓ | |  |  |
| `ServiceObjectType` |  | |  |  |
| `ServiceContractType` |  | |  |  |
| `ServiceContractUUID` |  | |  |  |
| `ServiceContractDescription` |  | |  |  |
| `Language` |  | |  |  |
| `PostingDate` |  | |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |
| `ServiceDocumentCreatedByUser` |  | |  |  |
| `ServiceDocumentChangedByUser` |  | |  |  |
| `SoldToParty` |  | |  |  |
| `ShipToParty` |  | |  |  |
| `BillToParty` |  | |  |  |
| `PayerParty` |  | |  |  |
| `ContactPersonBusinessPartnerId` |  | |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `Division` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `SalesGroup` |  | |  |  |
| `SalesOrganizationOrgUnitID` |  | |  |  |
| `SalesOfficeOrgUnitID` |  | |  |  |
| `SalesGroupOrgUnitID` |  | |  |  |
| `ServiceOrganization` |  | |  |  |
| `ServiceContractIsNew` |  | |  |  |
| `ServiceContractIsInProcess` |  | |  |  |
| `ServiceContractIsReleased` |  | |  |  |
| `ServiceContractIsCompleted` |  | |  |  |
| `ServiceContractStatus` |  | |  |  |
| `SrvcContrBillingStatus` |  | |  |  |
| `SrvcDocRejectionStatus` |  | |  |  |
| `ServiceContractHasError` |  | |  |  |
| `SrvcDocTransferStatus` |  | |  |  |
| `ServiceContractStartDateTime` |  | |  |  |
| `ServiceContractEndDateTime` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `ServiceDocGrossAmount` |  | |  | `} ServiceDocGrossAmount` |
| `ServiceDocNetAmount` |  | |  | `} ServiceDocNetAmount` |
| `ServiceDocTaxAmount` |  | |  | `} ServiceDocTaxAmount` |
| `PricingDocument` |  | |  |  |
| `ServiceContractCanclnParty` |  | |  |  |
| `ServiceContrCancellationReason` |  | |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |
| `PaymentTerms` |  | |  |  |
| `PaymentMethod` |  | |  |  |
| `SrvcContrExternalReference` |  | |  |  |
| `_ServiceDocumentType` | | ✓ | | |
| `_ServiceObjType` | | ✓ | | |
| `_ShipToParty` | | ✓ | | |
| `_SoldToParty` | | ✓ | | |
| `_BillToParty` | | ✓ | | |
| `_PayerParty` | | ✓ | | |
| `_ContactPerson` | | ✓ | | |
| `_RespEmployee` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |
| `_Division` | | ✓ | | |
| `_SalesGroup` | | ✓ | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | |
| `_SalesOffice` | | ✓ | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | |
| `_ExtRefServiceContract` | | ✓ | | |
| `_TransactionCurrency` | | ✓ | | |
| `_SrvcContrStatus` | | ✓ | | |
| `_PaymentTerms` | | ✓ | | |
| `_PaymentMethod` | | ✓ | | |
| `_ServiceDocumentTypeText` | | ✓ | | |
| `_SrvcDocLifecycleStatusText` | | ✓ | | |
| `_SalesOrganizationText` | | ✓ | | |
| `_DistributionChannelText` | | ✓ | | |
| `_DivisionText` | | ✓ | | |
| `_SalesOfficeText` | | ✓ | | |
| `_SalesGroupText` | | ✓ | | |
| `_PaymentTermsText` | | ✓ | | |
| `_CurrencyText` | | ✓ | | |
| `_ServiceDocBillingStatusText` | | ✓ | | |
| `_SrvcDocRejectionStatusText` | | ✓ | | |
| `_ServiceDocTransferStatusText` | | ✓ | | |
| `_ServiceCancellationPartyText` | | ✓ | | |
| `_ServiceCanclnReasonText` | | ✓ | | |
| `_ServiceContractItemTP` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Service Contract - TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'ServiceContract',
  usageType: { 
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #L
  }
}
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_ServiceContractTP_2 
  provider contract transactional_interface 
  as projection on R_ServiceContractTP as ServiceContract
{
  
      // Administrative Fields
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
      
      // Partners
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
      
      // CRM Org units
      //these feilds are only ON PREMISE
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      SalesOrganizationOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      SalesOfficeOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      SalesGroupOrgUnitID,
      @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
      ServiceOrganization,
      
      // Status
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
      
      // Dates and Durations
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
      
      // Cancellation
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceCancellationParty' , element:'ServiceContractCanclnParty'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ServiceCancellationPartyText'
      ServiceContractCanclnParty,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceCancellationReason' , element:'ServiceContrCancellationReason'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ServiceCanclnReasonText'
      ServiceContrCancellationReason,
      
      // Sales Fields
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,
    
      // Billing
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcMgmtPaymentTermsVH' , element:'PaymentTerms'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_PaymentTermsText'
      PaymentTerms,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'C_SrvcContrPaymentMethodVH' , element:'PaymentMethod'}, useAsTemplate: true  }]
      PaymentMethod,
      
      // Reference Documents
      SrvcContrExternalReference,
      
      /* Associations */
      
      //Administrative 
      _ServiceDocumentType,
      _ServiceObjType,
      
      // Partners
      _ShipToParty,
      _SoldToParty,
      _BillToParty,
      _PayerParty,
      _ContactPerson,
      _RespEmployee,
      
      // Organizational data
      _DistributionChannel,
      _Division,
      _SalesGroup,
      _SalesGroupOrgUnit_2,
      _SalesOffice,
      _SalesOfficeOrgUnit_2,
      _SalesOrganization,
      _SalesOrganizationOrgUnit_2,
      _ServiceOrganizationOrgUnit_2,
      
      // Reference
      _ExtRefServiceContract,
     
      // Pricing
      _TransactionCurrency,
      
      // Status
      _SrvcContrStatus,
      
      // Billing
      _PaymentTerms,
      _PaymentMethod,
      
      // Texts
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
      _ServiceContractItemTP : redirected to composition child I_ServiceContractItemTP_2

}
```
