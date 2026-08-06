---
name: I_SERVICECONTRACTITEMTP
description: Servicecontractitemtp
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
# I_SERVICECONTRACTITEMTP

**Servicecontractitemtp**

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
| key `ServiceContractItem` | `ServiceContractItem` |
| `ServiceObjectType` | `ServiceObjectType` |
| `ServiceContractItemCategory` | `ServiceContractItemCategory` |
| `ServiceContractItemUUID` | `ServiceContractItemUUID` |
| `ServiceContractItemDescription` | `ServiceContractItemDescription` |
| `Language` | `Language` |
| `ServiceDocItemCreationDateTime` | `ServiceDocItemCreationDateTime` |
| `ServiceDocItemChangedDateTime` | `ServiceDocItemChangedDateTime` |
| `ServiceDocItemCreatedByUser` | `ServiceDocItemCreatedByUser` |
| `ServiceDocItemChangedByUser` | `ServiceDocItemChangedByUser` |
| `Product` | `Product` |
| `Quantity` | `} Quantity` |
| `QuantityUnit` | `QuantityUnit` |
| `SoldToParty` | `SoldToParty` |
| `ShipToParty` | `ShipToParty` |
| `BillToParty` | `BillToParty` |
| `PayerParty` | `PayerParty` |
| `ContactPersonBusinessPartnerId` | `ContactPersonBusinessPartnerId` |
| `RespEmployeeBusinessPartnerId` | `RespEmployeeBusinessPartnerId` |
| `ServiceContractItemIsNew` | `ServiceContractItemIsNew` |
| `ServiceContractItemIsInProcess` | `ServiceContractItemIsInProcess` |
| `ServiceContractItemIsReleased` | `ServiceContractItemIsReleased` |
| `ServiceContractItemIsCompleted` | `ServiceContractItemIsCompleted` |
| `ServiceContractItemStatus` | `ServiceContractItemStatus` |
| `ServiceContrItemBillingStatus` | `ServiceContrItemBillingStatus` |
| `ServiceContractItemIsRejected` | `ServiceContractItemIsRejected` |
| `ServiceContractItemHasError` | `ServiceContractItemHasError` |
| `SrvcDocItemTransferStatus` | `SrvcDocItemTransferStatus` |
| `ServiceContrItemStartDateTime` | `ServiceContrItemStartDateTime` |
| `ServiceContrItemEndDateTime` | `ServiceContrItemEndDateTime` |
| `SrvcContrItemRnwlDuration` | `} SrvcContrItemRnwlDuration` |
| `SrvcContrItemRnwlDurationUnit` | `SrvcContrItemRnwlDurationUnit` |
| `SrvcContrItemExtensionDuration` | `} SrvcContrItemExtensionDuration` |
| `SrvcContrItemExtnDurationUnit` | `SrvcContrItemExtnDurationUnit` |
| `ServiceDocItemGrossAmount` | `} ServiceDocItemGrossAmount` |
| `ServiceDocumentItemNetAmount` | `} ServiceDocumentItemNetAmount` |
| `ServiceDocumentItemTaxAmount` | `} ServiceDocumentItemTaxAmount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ServiceContractItemCanclnParty` | `ServiceContractItemCanclnParty` |
| `ServiceContractItmCanclnReason` | `ServiceContractItmCanclnReason` |
| `SettlementPeriodRuleUUID` | `SettlementPeriodRuleUUID` |
| `SettlementPeriodRule` | `SettlementPeriodRule` |
| `BillingPlanBillingDateRuleUUID` | `BillingPlanBillingDateRuleUUID` |
| `SrvcMgmtBillgPlanBillgDateRule` | `SrvcMgmtBillgPlanBillgDateRule` |
| `BillingBlockReason` | `BillingBlockReason` |
| `PaymentTerms` | `PaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `SrvcContrExternalReference` | `SrvcContrExternalReference` |
| `SrvcContrItmExternalReference` | `SrvcContrItmExternalReference` |
| `ServiceQtanExtReference` | `ServiceQtanExtReference` |
| `ServiceQtanItemExtReference` | `ServiceQtanItemExtReference` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `_ServiceDocument` | *Association* |
| `_ServiceObjType` | *Association* |
| `_Product` | *Association* |
| `_RespEmployee` | *Association* |
| `_ContactPerson` | *Association* |
| `_ExtRefServiceContract` | *Association* |
| `_ExtRefServiceContractItem` | *Association* |
| `_SrvcDocLifecycleStatusText` | *Association* |
| `_ServiceDocBillingStatusText` | *Association* |
| `_SrvcDocTransferStatusText` | *Association* |
| `_SrvcDocRejectionStatusText` | *Association* |
| `_BillingBlockReasonText` | *Association* |
| `_PaymentTermsText` | *Association* |
| `_ServiceDocItemCategoryText` | *Association* |
| `_UnitOfMeasureText` | *Association* |
| `_CurrencyText` | *Association* |
| `_SrvcMgmtDateRuleText` | *Association* |
| `_SettlementPeriodRuleText` | *Association* |
| `_ServiceCancellationPartyText` | *Association* |
| `_ServiceCanclnReasonText` | *Association* |
| `_ServiceContractTP` | *Association* |
| `_SrvcContrItemRefObjectTP` | *Association* |
| `_SrvcContrItmPriceElementTP` | *Association* |
| `_SrvcContrItemUserStatusTP` | *Association* |
| `_SrvcContrItemAppointmentTP` | *Association* |
| `_SrvcContrItemDurationTP` | *Association* |
| `_SrvcContrItemProductTP` | *Association* |
| `_SrvcContrItmBillgReqItemTP` | *Association* |
| `_SrvcContrItmFUPBillgDocTP` | *Association* |
| `_SrvcContrItmFUPSrvcOrdTP` | *Association* |
| `_SrvcContrItmPartnerTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Contract Item - TP'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY

@ObjectModel.sapObjectNodeType.name: 'ServiceContractItem'

@ObjectModel.usageType: { dataClass:      #TRANSACTIONAL,
                          serviceQuality: #C,
                          sizeCategory:   #L }
                          
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ServiceContractItemTP
  as projection on R_ServiceContractItemTP as ServiceContractItem
{
      //Administrative fields
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

      //Item fields
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_ProductStdVH' , element:'Product'}, useAsTemplate: true  }]
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      @Semantics: { quantity : {unitOfMeasure: 'QuantityUnit'} }
      Quantity,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_UnitOfMeasureStdVH' , element:'UnitOfMeasure'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_UnitOfMeasureText'
      QuantityUnit,

      //Partners
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

      //Status
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

      //Dates and Durations
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

      //Pricing fields
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocItemGrossAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemTaxAmount,
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_CurrencyStdVH' , element:'Currency'}, useAsTemplate: true  }]
      @ObjectModel.text.association: '_CurrencyText'
      TransactionCurrency,

      //Cancellation
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
      
      //Billing
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

      _ServiceContractTP          : redirected to parent I_ServiceContractTP,
      _SrvcContrItemRefObjectTP   : redirected to composition child I_SrvcContrItemRefObjectTP,
      _SrvcContrItmPriceElementTP : redirected to composition child I_SrvcContrItemPriceElementTP,
      _SrvcContrItemUserStatusTP  : redirected to composition child I_SrvcContrItemUserStatusTP,
      _SrvcContrItemAppointmentTP : redirected to composition child I_SrvcContrItemAppointmentTP,
      _SrvcContrItemDurationTP    : redirected to composition child I_SrvcContrItemDurationTP,
      _SrvcContrItemProductTP     : redirected to composition child I_SrvcContrItemProductTP,
      _SrvcContrItmBillgReqItemTP : redirected to composition child I_SrvcContrItmBillgReqItemTP,
      _SrvcContrItmFUPBillgDocTP  : redirected to composition child I_SrvcContrItmFUPBillgDocTP,
      _SrvcContrItmFUPSrvcOrdTP   : redirected to composition child I_SrvcContrItmFUPSrvcOrdTP,
      _SrvcContrItmPartnerTP      : redirected to composition child I_SrvcContrItemPartnerTP
     

}
```
