---
name: I_SERVICECONTRACTITEMTP_2
description: Servicecontractitemtp 2
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
  - item-level
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SERVICECONTRACTITEMTP_2

**Servicecontractitemtp 2**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContract` | ✓ | |  |  |  |  |
| `ServiceContractItem` | ✓ | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `ServiceContractItemCategory` |  | |  |  |  |  |
| `ServiceContractItemUUID` |  | |  |  |  |  |
| `ServiceContractItemDescription` |  | |  |  |  |  |
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
| `BillToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `ContactPersonBusinessPartnerId` |  | |  |  |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |  |  |
| `ServiceContractItemIsNew` |  | |  |  |  |  |
| `ServiceContractItemIsInProcess` |  | |  |  |  |  |
| `ServiceContractItemIsReleased` |  | |  |  |  |  |
| `ServiceContractItemIsCompleted` |  | |  |  |  |  |
| `ServiceContractItemStatus` |  | |  |  |  |  |
| `ServiceContrItemBillingStatus` |  | |  |  |  |  |
| `ServiceContractItemIsRejected` |  | |  |  |  |  |
| `ServiceContractItemHasError` |  | |  |  |  |  |
| `SrvcDocItemTransferStatus` |  | |  |  |  |  |
| `ServiceContrItemStartDateTime` |  | |  |  |  |  |
| `ServiceContrItemEndDateTime` |  | |  |  |  |  |
| `SrvcContrItemRnwlDuration` |  | |  |  |  |  |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  |  |  |
| `SrvcContrItemExtensionDuration` |  | |  |  |  |  |
| `SrvcContrItemExtnDurationUnit` |  | |  |  |  |  |
| `ServiceDocItemGrossAmount` |  | |  |  |  |  |
| `ServiceDocumentItemNetAmount` |  | |  |  |  |  |
| `ServiceDocumentItemTaxAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ServiceContractItemCanclnParty` |  | |  |  |  |  |
| `ServiceContractItmCanclnReason` |  | |  |  |  |  |
| `SettlementPeriodRuleUUID` |  | |  |  |  |  |
| `SettlementPeriodRule` |  | |  |  |  |  |
| `BillingPlanBillingDateRuleUUID` |  | |  |  |  |  |
| `SrvcMgmtBillgPlanBillgDateRule` |  | |  |  |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `SrvcContrExternalReference` |  | |  |  |  |  |
| `SrvcContrItmExternalReference` |  | |  |  |  |  |
| `ServiceQtanExtReference` |  | |  |  |  |  |
| `ServiceQtanItemExtReference` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ExtRefServiceContract` | | ✓ | | | | |
| `_ExtRefServiceContractItem` | | ✓ | | | | |
| `_SrvcDocLifecycleStatusText` | | ✓ | | | | |
| `_ServiceDocBillingStatusText` | | ✓ | | | | |
| `_SrvcDocTransferStatusText` | | ✓ | | | | |
| `_SrvcDocRejectionStatusText` | | ✓ | | | | |
| `_BillingBlockReasonText` | | ✓ | | | | |
| `_PaymentTermsText` | | ✓ | | | | |
| `_ServiceDocItemCategoryText` | | ✓ | | | | |
| `_UnitOfMeasureText` | | ✓ | | | | |
| `_CurrencyText` | | ✓ | | | | |
| `_SrvcMgmtDateRuleText` | | ✓ | | | | |
| `_SettlementPeriodRuleText` | | ✓ | | | | |
| `_ServiceCancellationPartyText` | | ✓ | | | | |
| `_ServiceCanclnReasonText` | | ✓ | | | | |
| `_ServiceContractTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Contract Item - TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'ServiceContractItem',
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #L 
  }
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_ServiceContractItemTP_2 
  as projection on R_ServiceContractItemTP as ServiceContractItem
{
  
      // Administrative fields
  key ServiceContract,
  key ServiceContractItem,
      ServiceObjectType,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceDocItemCategory' , element:'ServiceDocItemCategory'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ServiceDocItemCategoryText'
      ServiceContractItemCategory,
      ServiceContractItemUUID,
      ServiceContractItemDescription,
      Language,
      ServiceDocItemCreationDateTime,
      ServiceDocItemChangedDateTime,
      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,

      // Item fields
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ProductStdVH' , element:'Product'}, useAsTemplate: true  }]
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      @Semantics: { quantity : {unitOfMeasure: 'QuantityUnit'} }
      Quantity,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_UnitOfMeasureStdVH' , element:'UnitOfMeasure'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_UnitOfMeasureText'
      QuantityUnit,

      // Partners
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
      SoldToParty,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
      ShipToParty,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
      BillToParty,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BusinessPartnerVH' , element:'BusinessPartner'}, useAsTemplate: true  }]
      PayerParty,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      ContactPersonBusinessPartnerId,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      RespEmployeeBusinessPartnerId,

      // Status
      ServiceContractItemIsNew,
      ServiceContractItemIsInProcess,
      ServiceContractItemIsReleased,
      ServiceContractItemIsCompleted,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocLifecycleStatus' , element:'ServiceDocumentStatus'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_SrvcDocLifecycleStatusText'
      ServiceContractItemStatus,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceDocBillingStatus' , element:'ServiceDocBillingStatus'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ServiceDocBillingStatusText'
      ServiceContrItemBillingStatus,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocRejectionStatus' , element:'ServiceDocumentIsRejected'}, useAsTemplate: true  }]
      @Semantics.booleanIndicator
      @ObjectModel.text.association: '_SrvcDocRejectionStatusText'
      ServiceContractItemIsRejected,
      @Semantics.booleanIndicator
      ServiceContractItemHasError,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcDocTransferStatus' , element:'SrvcDocTransferStatus'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_SrvcDocTransferStatusText'
      SrvcDocItemTransferStatus,

      // Dates and Durations
      @Semantics.dateTime:true
      ServiceContrItemStartDateTime,
      @Semantics.dateTime:true
      ServiceContrItemEndDateTime,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      SrvcContrItemRnwlDuration,
      SrvcContrItemRnwlDurationUnit,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      SrvcContrItemExtensionDuration,
      SrvcContrItemExtnDurationUnit,

      // Pricing fields
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocItemGrossAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemTaxAmount,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_CurrencyStdVH' , element:'Currency'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_CurrencyText'
      TransactionCurrency,

      // Cancellation
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceCancellationParty' , element:'ServiceContractCanclnParty'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ServiceCancellationPartyText'
      ServiceContractItemCanclnParty,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ServiceCancellationReason' , element:'ServiceContrCancellationReason'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_ServiceCanclnReasonText'
      ServiceContractItmCanclnReason,

      // Item - Billing Plan
      SettlementPeriodRuleUUID,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_CustMgmtDateRule' , element:'CustMgmtDateRuleName'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_SettlementPeriodRuleText'
      SettlementPeriodRule,
      BillingPlanBillingDateRuleUUID,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_CustMgmtDateRule' , element:'CustMgmtDateRuleName'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_SrvcMgmtDateRuleText'
      SrvcMgmtBillgPlanBillgDateRule,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_BillingBlockReason' , element:'BillingBlockReason'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_BillingBlockReasonText'
      BillingBlockReason,
      
      // Billing
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcMgmtPaymentTermsVH' , element:'PaymentTerms'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_PaymentTermsText'
      PaymentTerms,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'C_SrvcContrPaymentMethodVH' , element:'PaymentMethod'}, useAsTemplate: true  }]
      PaymentMethod,

      // Reference Documents      
      SrvcContrExternalReference,
      SrvcContrItmExternalReference,
      ServiceQtanExtReference,
      ServiceQtanItemExtReference,
            
      // Sales
      PurchaseOrderByCustomer,
      
      /* Associations */
      
      // Administrative fields
      _ServiceDocument,
      _ServiceObjType,
      
      // Item Fields
      _Product,
      
      // Partners
      _RespEmployee,
      _ContactPerson,
      
      // Reference Documents
      _ExtRefServiceContract,
      _ExtRefServiceContractItem,
      
      // UX improvement
      _SrvcDocLifecycleStatusText,
      _ServiceDocBillingStatusText,
      _SrvcDocTransferStatusText,
      _SrvcDocRejectionStatusText,
      _BillingBlockReasonText,
      _PaymentTermsText,
      _ServiceDocItemCategoryText,
      _UnitOfMeasureText,
      _CurrencyText,
      _SrvcMgmtDateRuleText,
      _SettlementPeriodRuleText,
      _ServiceCancellationPartyText,
      _ServiceCanclnReasonText,

      /* Compositions */
      _ServiceContractTP : redirected to parent I_ServiceContractTP_2
  
}
```
