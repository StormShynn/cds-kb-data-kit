---
name: I_BUSINESSSOLUTIONORDERTP
description: Businesssolutionordertp
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSINESSSOLUTIONORDERTP

**Businesssolutionordertp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| `BusSolnOrdType` | `BusSolnOrdType` |
| `BusinessSolutionOrderUUID` | `BusinessSolutionOrderUUID` |
| `BusSolnOrdDescription` | `BusSolnOrdDescription` |
| `Language` | `Language` |
| `PostingDate` | `PostingDate` |
| `ServiceDocCreationDateTime` | `ServiceDocCreationDateTime` |
| `ServiceDocChangedDateTime` | `ServiceDocChangedDateTime` |
| `ServiceDocumentCreatedByUser` | `ServiceDocumentCreatedByUser` |
| `ServiceDocumentChangedByUser` | `ServiceDocumentChangedByUser` |
| `BusSolnOrdExtReference` | `BusSolnOrdExtReference` |
| `SoldToParty` | `SoldToParty` |
| `ShipToParty` | `ShipToParty` |
| `BillToParty` | `BillToParty` |
| `PayerParty` | `PayerParty` |
| `ContactPersonBusinessPartnerId` | `ContactPersonBusinessPartnerId` |
| `RespEmployeeBusinessPartnerId` | `RespEmployeeBusinessPartnerId` |
| `CustomerPurchaseOrderDate` | `CustomerPurchaseOrderDate` |
| `BusSolnOrdIsNew` | `BusSolnOrdIsNew` |
| `BusSolnOrdIsInProcess` | `BusSolnOrdIsInProcess` |
| `BusSolnOrdIsReleased` | `BusSolnOrdIsReleased` |
| `BusSolnOrdIsCompleted` | `BusSolnOrdIsCompleted` |
| `BusSolnOrdStatus` | `BusSolnOrdStatus` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `BusSolnOrdHasError` | `BusSolnOrdHasError` |
| `PaymentTerms` | `PaymentTerms` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `ContractAccount` | `ContractAccount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ServiceDocNetAmount` | `ServiceDocNetAmount` |
| `ServiceDocGrossAmount` | `ServiceDocGrossAmount` |
| `SalesOrganizationOrgUnitID` | `SalesOrganizationOrgUnitID` |
| `SalesOfficeOrgUnitID` | `SalesOfficeOrgUnitID` |
| `SalesGroupOrgUnitID` | `SalesGroupOrgUnitID` |
| `ServiceOrganization` | `ServiceOrganization` |
| `ServiceObjectType` | `ServiceObjectType` |
| `_BusinessSolutionOrderItemTP` | *Association* |
| `_BusSolnOrdFUPSalesOrderTP` | *Association* |
| `_BusSolnOrdFUPSrvcOrdTP` | *Association* |
| `_BusSolnOrdFUPSrvcContrTP` | *Association* |
| `_BusSolnOrdFUPSubscrpnTP` | *Association* |
| `_BusSolnOrdFUPEntProjectTP` | *Association* |
| `_BusSolnOrdItemRelationshipTP` | *Association* |
| `_BusSolnOrdUserStatusTP` | *Association* |
| `_BSOrdPrdcssrSrvcContrTP` | *Association* |
| `_BusSolnOrdPriceElementTP` | *Association* |
| `_BusSolnOrdLongTextTP` | *Association* |
| `_BusSolnOrdPartnerTP` | *Association* |
| `_BusSolnOrdAppointment` | *Association* |
| `_ContactPerson` | *Association* |
| `_RespEmployee` | *Association* |
| `_ServiceObjType` | *Association* |
| `_SoldToParty` | *Association* |
| `_ShipToParty` | *Association* |
| `_BillToParty` | *Association* |
| `_PayerParty` | *Association* |
| `_PersonResponsible` | *Association* |
| `_SalesOrganization` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_SalesOrganizationOrgUnit_2` | *Association* |
| `_SalesOfficeOrgUnit_2` | *Association* |
| `_SalesGroupOrgUnit_2` | *Association* |
| `_ServiceOrganizationOrgUnit_2` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_ServiceDocumentTypeText` | *Association* |
| `_SrvcDocLifecycleStatusText` | *Association* |
| `_SalesOrganizationText` | *Association* |
| `_DistributionChannelText` | *Association* |
| `_DivisionText` | *Association* |
| `_SalesOfficeText` | *Association* |
| `_SalesGroupText` | *Association* |
| `_PaymentTermsText` | *Association* |
| `_CurrencyText` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrder'

@ObjectModel: {
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER, #UI_PROVIDER_PROJECTION_SOURCE],
  modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY,
  semanticKey: ['BusinessSolutionOrder'],
  representativeKey: 'BusinessSolutionOrder',
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Business Solution Order - TP'

define root view entity I_BusinessSolutionOrderTP
  provider contract transactional_interface
  as projection on R_BusinessSolutionOrderTP as _BussinessSolutionOrderTP
{
      // Administrative
  key BusinessSolutionOrder,
  
//      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceDocumentType' , element:'ServiceDocumentType'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ServiceDocumentTypeText'
      BusSolnOrdType,
      BusinessSolutionOrderUUID,
      BusSolnOrdDescription,
      Language,
      PostingDate,
      ServiceDocCreationDateTime,
      ServiceDocChangedDateTime,
      ServiceDocumentCreatedByUser,
      ServiceDocumentChangedByUser,
      BusSolnOrdExtReference,


      // Partners
   @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]   
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,

      @ObjectModel.foreignKey.association: '_ShipToParty'
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
      ShipToParty,

      @ObjectModel.foreignKey.association: '_BillToParty'
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
      BillToParty,

      @ObjectModel.foreignKey.association: '_PayerParty'
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
      PayerParty,

      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPersonBusinessPartnerId,

      @ObjectModel.foreignKey.association: '_RespEmployee'
      RespEmployeeBusinessPartnerId,


      // Dates and Durations
      CustomerPurchaseOrderDate,


      // Status
      BusSolnOrdIsNew,
      BusSolnOrdIsInProcess,
      BusSolnOrdIsReleased,
      BusSolnOrdIsCompleted,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocLifecycleStatus' , element:'ServiceDocumentStatus'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_SrvcDocLifecycleStatusText'
      BusSolnOrdStatus,


      // Organization
//      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SalesOrganizationStdVH' , element:'SalesOrganization'}, useAsTemplate: true  }]
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


      // Others
      @Semantics.booleanIndicator
      BusSolnOrdHasError,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcMgmtPaymentTermsVH' , element:'PaymentTerms'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_PaymentTermsText'
      PaymentTerms,
      PurchaseOrderByCustomer,
      
      // Contract Account
      ContractAccount,

      // Pricing
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_CurrencyStdVH' , element:'Currency'}, useAsTemplate: true  }]
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @ObjectModel.text.association: '_CurrencyText'
      TransactionCurrency,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocNetAmount,
      
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocGrossAmount,

      // For Authorization
      SalesOrganizationOrgUnitID,
      SalesOfficeOrgUnitID,
      SalesGroupOrgUnitID,
      ServiceOrganization,
//      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_CustMgmtBusObjType' , element:'BusinessObjectType'}, useAsTemplate: true  }]
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,


      // Compositions
      _BusinessSolutionOrderItemTP  : redirected to composition child I_BusinessSolutionOrderItemTP,
      @Semantics.valueRange.maximum: '1'
      _BusSolnOrdFUPSalesOrderTP    : redirected to composition child I_BusSolnOrdFUPSalesOrderTP,
      _BusSolnOrdFUPSrvcOrdTP       : redirected to composition child I_BusSolnOrdFUPSrvcOrdTP,
      _BusSolnOrdFUPSrvcContrTP     : redirected to composition child I_BusSolnOrdFUPSrvcContrTP,
      _BusSolnOrdFUPSubscrpnTP      : redirected to composition child I_BusSolnOrdFUPSubscrpnTP,
      _BusSolnOrdFUPEntProjectTP    : redirected to composition child I_BusSolnOrdFUPEntProjectTP,
      _BusSolnOrdItemRelationshipTP : redirected to composition child I_BusSolnOrdItemRelationshipTP,
      @Semantics.valueRange.maximum: '1'
      _BusSolnOrdUserStatusTP       : redirected to composition child I_BusSolnOrdUserStatusTP,
      _BSOrdPrdcssrSrvcContrTP      : redirected to composition child I_BSOrdPrdcssrSrvcContrTP,
      _BusSolnOrdPriceElementTP     : redirected to composition child I_BusSolnOrdPriceElementTP,
      _BusSolnOrdLongTextTP         : redirected to composition child I_BusSolnOrdLongTextTP,
      _BusSolnOrdPartnerTP          : redirected to composition child I_BusSolnOrdPartnerTP,
      _BusSolnOrdAppointment        : redirected to composition child I_BusSolnOrdAppointmentTP,
      // Associations
      _ContactPerson,
      _RespEmployee,
      _ServiceObjType,
      _SoldToParty,
      _ShipToParty,
      _BillToParty,
      _PayerParty,
      _PersonResponsible,
      

      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SalesOffice,
      _SalesGroup,

      _SalesOrganizationOrgUnit_2,
      _SalesOfficeOrgUnit_2,
      _SalesGroupOrgUnit_2,
      _ServiceOrganizationOrgUnit_2,

      _TransactionCurrency,
      _ServiceDocumentTypeText,
      _SrvcDocLifecycleStatusText,
      _SalesOrganizationText,
      _DistributionChannelText,
      _DivisionText,
      _SalesOfficeText,
      _SalesGroupText,
      _PaymentTermsText,
      _CurrencyText
}
```
