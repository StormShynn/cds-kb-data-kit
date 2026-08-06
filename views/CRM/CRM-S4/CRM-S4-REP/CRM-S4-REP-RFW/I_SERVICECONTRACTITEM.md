---
name: I_SERVICECONTRACTITEM
description: Servicecontractitem
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
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICECONTRACTITEM

**Servicecontractitem**

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
| key `ServiceContractItem` | `ServiceDocumentItem` |
| `ServiceObjectType` | `ServiceObjectType` |
| `ServiceContractItemCategory` | `ServiceDocItemCategory` |
| `ServiceContractDescription` | `ServiceDocumentDescription` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `PostingDate` | `PostingDate` |
| `ServiceContractItemUUID` | `ServiceDocumentItemUUID` |
| `ServiceContractItemCharUUID` | `cast( ServiceDocumentItemCharUUID as sysuuid_c preserving type )` |
| `ServiceDocumentItemObjectType` | `ServiceDocumentItemObjectType` |
| `ServiceContractUUID` | `ServiceDocumentUUID` |
| `ServiceContractItemDescription` | `ServiceDocumentItemDescription` |
| `Language` | `Language` |
| `ServiceDocItemCreationDateTime` | `ServiceDocItemCreationDateTime` |
| `ServiceDocItemChangedDateTime` | `ServiceDocItemChangedDateTime` |
| `ServiceDocItemCreatedByUser` | `ServiceDocItemCreatedByUser` |
| `ServiceDocItemChangedByUser` | `ServiceDocItemChangedByUser` |
| `Product` | `Product` |
| `ControllingArea` | `ControllingArea` |
| `ProfitCenter` | `ProfitCenter` |
| `ProfitCenterDeterminationDate` | `ProfitCenterDeterminationDate` |
| `RefBusinessSolutionOrder` | `RefBusinessSolutionOrder` |
| `RefBusinessSolutionOrderItem` | `RefBusinessSolutionOrderItem` |
| `ServiceContractItemQuantity` | `} ServiceDocumentItemQuantity` |
| `ServiceContrItemQuantityUnit` | `ServiceDocItemQuantityUnit` |
| `BillingPlanTimeZone` | `BillingPlanTimeZone` |
| `BillingPriceSourceName` | `BillingPriceSourceName` |
| `SoldToParty` | `SoldToParty` |
| `SoldToPartyCountry` | `SoldToPartyCountry` |
| `SoldToPartyRegion` | `SoldToPartyRegion` |
| `RespEmployeeBusinessPartnerId` | `cast( ResponsibleEmployee as crmt_person_resp preserving type )` |
| `ServiceEmployee` | `ServiceEmployee` |
| `ContactPersonBusinessPartnerId` | `cast( ContactPerson as crmt_contact_person preserving type )` |
| `PayerParty` | `PayerParty` |
| `BillToParty` | `BillToParty` |
| `ShipToParty` | `ShipToParty` |
| `ServiceContractItemStatus` | `ServiceDocumentItemStatus` |
| `ServiceContractItemHasError` | `ServiceDocumentItemHasError` |
| `ServiceContrItemBillingStatus` | `ServiceDocItemBillingStatus` |
| `ServiceDocumentItemIsOpen` | `ServiceDocumentItemIsOpen` |
| `ServiceContractItemIsReleased` | `ServiceDocumentItemIsReleased` |
| `ServiceContractItemIsRejected` | `ServiceDocumentItemIsRejected` |
| `SrvcDocItemTransferStatus` | `SrvcDocItemTransferStatus` |
| `TransactionCurrency` | `TransactionCurrency` |
| `PaymentTerms` | `PaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `SrvcSEPAMandateRelevance` | `SrvcSEPAMandateRelevance` |
| `SEPAMandate` | `SEPAMandate` |
| `BillableControl` | `BillableControl` |
| `ServiceContractItemNetAmount` | `} ServiceDocumentItemNetAmount` |
| `ServiceDocumentItemTaxAmount` | `} ServiceDocumentItemTaxAmount` |
| `ServiceContractItemGrossAmount` | `} ServiceDocItemGrossAmount` |
| `BillingBlockReason` | `BillingBlockReason` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `PurchaseOrderByShipToParty` | `PurchaseOrderByShipToParty` |
| `SrvcContrItemRejectionReason` | `ServiceDocItemRejectionReason` |
| `SettlementPeriodRuleUUID` | `SettlementPeriodRuleUUID` |
| `BillingPlanBillingDateRuleUUID` | `BillingPlanBillingDateRuleUUID` |
| `BillingPlanPriceDateRule` | `BillingPlanPriceDateRule` |
| `BillingPlanIsFinalized` | `BillingPlanIsFinalized` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `SalesOrganization` | `SalesOrganization` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `ServiceContrItemStartDateTime` | `ServiceContrItemStartDateTime` |
| `ServiceContrItemEndDateTime` | `ServiceContrItemEndDateTime` |
| `SrvcContrItemRenewalDateTime` | `SrvcContrItemRenewalDateTime` |
| `SrvcContrItemRnwlDuration` | `} SrvcContrItemRnwlDuration` |
| `SrvcContrItemRnwlDurationUnit` | `SrvcContrItemRnwlDurationUnit` |
| `SrvcContrItemExtensionDuration` | `} SrvcContrItemExtensionDuration` |
| `SrvcContrItemExtnDurationUnit` | `SrvcContrItemExtnDurationUnit` |
| `ResponseProfile` | `ResponseProfile` |
| `ServiceProfile` | `ServiceProfile` |
| `SubscrpnContrTrmsAreSpecified` | `SubscrpnContrTrmsAreSpecified` |
| `MidBillgCycExprtnIsAllowed` | `MidBillgCycExprtnIsAllowed` |
| `ServiceContractItemCanclnParty` | `ServiceDocumentItemCanclnParty` |
| `ServiceContractItmCanclnReason` | `ServiceDocumentItmCanclnReason` |
| `SrvcContrItmCanclnProcedure` | `SrvcDocItmCanclnProcedure` |
| `SrvcContrRenewalDuration` | `} ServiceDocumentRnwlDuration` |
| `SrvcContrRenewalDurationUnit` | `ServiceDocRnwlDurationUnit` |
| `SrvcContrExtensionDuration` | `} ServiceDocExtensionDuration` |
| `SrvcContrExtensionDurationUnit` | `ServiceDocExtnDurationUnit` |
| `SrvcContrItemCreditStatus` | `SrvcDocItemCreditStatus` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `SrvcDocItmPartReferenceItem` | `SrvcDocItmPartReferenceItem` |
| `_ServiceContractItemCategory` | `_ServiceDocItemCategory` |
| `_ServiceContractItemHasError` | `_ServiceDocItemHasError` |
| `_ServiceContrItemBillingStatus` | `_ServiceDocItemBillingStatus` |
| `_SrvcContrItemRejectionReason` | `_ServiceDocItemRejectionReason` |
| `_SrvcContrItemCreditStatus` | `_SrvcDocItemCreditStatus` |
| `_ServiceContract` | *Association* |
| `_PaymentMethod` | *Association* |
| `_RespEmployee` | *Association* |
| `_ContactPerson` | *Association* |
| `_ServiceObjType` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_Product` | *Association* |
| `_ProfitCenter` | *Association* |
| `_SrvcDocItmLifecycleStatus` | *Association* |
| `_SoldToParty` | *Association* |
| `_SoldToPartyCountry` | *Association* |
| `_SoldToPartyRegion` | *Association* |
| `_PayerParty` | *Association* |
| `_BillToParty` | *Association* |
| `_ShipToParty` | *Association* |
| `_ServiceEmployee` | *Association* |
| `_ServiceDocumentIsOpen` | *Association* |
| `_SrvcDocItemTransferStatus` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_PaymentTerms` | *Association* |
| `_SrvcSEPAMandateRelevance` | *Association* |
| `_BillingBlockReason` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_SalesOrganization` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_SrvcContrItemRnwlDurationUnit` | *Association* |
| `_SrvcContrItemExtnDurationUnit` | *Association* |
| `_ResponseProfile` | *Association* |
| `_ServiceProfile` | *Association* |
| `_BillableControl` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceContractItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_ServiceContract` | `I_ServiceContract` | [1..1] |
| `_PaymentMethod` | `I_SrvcDocPaymentMethod` | [0..1] |
| `_RespEmployee` | `I_BusinessPartner` | [0..1] |
| `_ContactPerson` | `I_BusinessPartner` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Contract Item'

@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #NOT_REQUIRED
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType:{
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #A,
        sizeCategory:   #XXL
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #SQL_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    representativeKey: 'ServiceContractItem',
    sapObjectNodeType.name: 'ServiceContractItem'
}

@VDM: {
    viewType:#BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}  

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  }*/
define view entity I_ServiceContractItem as select from I_ServiceDocumentItem

  association [0..1] to E_ServiceDocumentItem   as _ServiceContractItemExt  on $projection.ServiceObjectType   = _ServiceContractItemExt.ServiceCategory
                                                                           and $projection.ServiceContract     = _ServiceContractItemExt.ServiceOrderItem
                                                                           and $projection.ServiceContractItem = _ServiceContractItemExt.ServiceLineExternalID

  association [1..1] to I_ServiceContract       as _ServiceContract         on $projection.ServiceContract     = _ServiceContract.ServiceContract

  association [0..1] to I_SrvcDocPaymentMethod  as _PaymentMethod           on _PaymentMethod.PaymentMethod             = $projection.PaymentMethod 
                                                                           and _PaymentMethod.SalesOrganization         = $projection.SalesOrganization
                                                                           and _PaymentMethod.OrgUnitTypeIDConcatenated = ''
                                                                           
  association [0..1] to I_BusinessPartner       as _RespEmployee            on _RespEmployee.BusinessPartner = $projection.RespEmployeeBusinessPartnerId
  
  association [0..1] to I_BusinessPartner       as _ContactPerson           on _ContactPerson.BusinessPartner = $projection.ContactPersonBusinessPartnerId 
{
      @ObjectModel.foreignKey.association: '_ServiceContract'
  key ServiceDocument                                                   as ServiceContract,
      @ObjectModel.text.element: [ 'ServiceContractItemDescription' ]
  key ServiceDocumentItem                                               as ServiceContractItem,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,       // Not a key field because the selection limits the values to 'BUS2000112'
      @ObjectModel.foreignKey.association: '_ServiceContractItemCategory'
      ServiceDocItemCategory                                            as ServiceContractItemCategory,
      ServiceDocumentDescription                                        as ServiceContractDescription,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      PostingDate,
      ServiceDocumentItemUUID                                           as ServiceContractItemUUID,
      cast( ServiceDocumentItemCharUUID as sysuuid_c preserving type )  as ServiceContractItemCharUUID,
      ServiceDocumentItemObjectType,
      ServiceDocumentUUID                                               as ServiceContractUUID,
      @Semantics.text: true
      ServiceDocumentItemDescription                                    as ServiceContractItemDescription,
      Language,
      @Semantics.dateTime: true
      ServiceDocItemCreationDateTime,
      @Semantics.dateTime: true
      ServiceDocItemChangedDateTime,
      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,
      Product,
      ControllingArea,    // Needed for foreign key relation for profit center
      ProfitCenter,
      ProfitCenterDeterminationDate,
      RefBusinessSolutionOrder,
      RefBusinessSolutionOrderItem,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceContrItemQuantityUnit'} }
      ServiceDocumentItemQuantity                                       as ServiceContractItemQuantity,
      ServiceDocItemQuantityUnit                                        as ServiceContrItemQuantityUnit,
      BillingPlanTimeZone,
      BillingPriceSourceName,
      SoldToParty,
      SoldToPartyCountry,
      SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      cast( ResponsibleEmployee as crmt_person_resp preserving type )   as RespEmployeeBusinessPartnerId,
      ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      cast( ContactPerson as crmt_contact_person preserving type )      as ContactPersonBusinessPartnerId,
      PayerParty,
      BillToParty,
      ShipToParty,
      ServiceDocumentItemStatus                                         as ServiceContractItemStatus,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemHasError                                       as ServiceContractItemHasError,
      ServiceDocItemBillingStatus                                       as ServiceContrItemBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsOpen,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsReleased                                     as ServiceContractItemIsReleased,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsRejected                                     as ServiceContractItemIsRejected,
      SrvcDocItemTransferStatus,
      TransactionCurrency,
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,
      SrvcSEPAMandateRelevance,
      SEPAMandate,
      BillableControl,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemNetAmount                                      as ServiceContractItemNetAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemTaxAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocItemGrossAmount                                         as ServiceContractItemGrossAmount,
      BillingBlockReason,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      ServiceDocItemRejectionReason                                     as SrvcContrItemRejectionReason,
      SettlementPeriodRuleUUID,
      BillingPlanBillingDateRuleUUID,
      BillingPlanPriceDateRule,
      BillingPlanIsFinalized,
      DistributionChannel,
      Division,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      SalesOffice,
      SalesGroup,
      @Semantics.dateTime: true
      ServiceContrItemStartDateTime,
      @Semantics.dateTime: true
      ServiceContrItemEndDateTime,
      @Semantics.dateTime: true
      SrvcContrItemRenewalDateTime,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      SrvcContrItemRnwlDuration,
      SrvcContrItemRnwlDurationUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      SrvcContrItemExtensionDuration,
      SrvcContrItemExtnDurationUnit,
      ResponseProfile,
      ServiceProfile,
      @Semantics.booleanIndicator: true
      SubscrpnContrTrmsAreSpecified,
      @Semantics.booleanIndicator: true
      MidBillgCycExprtnIsAllowed,
      ServiceDocumentItemCanclnParty                                    as ServiceContractItemCanclnParty,
      ServiceDocumentItmCanclnReason                                    as ServiceContractItmCanclnReason,
      SrvcDocItmCanclnProcedure                                         as SrvcContrItmCanclnProcedure,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrRenewalDurationUnit'} }
      ServiceDocumentRnwlDuration                                       as SrvcContrRenewalDuration,
      ServiceDocRnwlDurationUnit                                        as SrvcContrRenewalDurationUnit,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrExtensionDurationUnit'} }
      ServiceDocExtensionDuration                                       as SrvcContrExtensionDuration,
      ServiceDocExtnDurationUnit                                        as SrvcContrExtensionDurationUnit,
      SrvcDocItemCreditStatus                                           as SrvcContrItemCreditStatus,
      WBSElementInternalID,
      SrvcDocItmPartReferenceItem,    // A RAP data field, but needed for link to I_CustMgmtPartner

      // Associations      
      _ServiceContract,
      _PaymentMethod,

      _ServiceObjType,
      _ServiceDocumentType,
      _ServiceDocItemCategory                                           as _ServiceContractItemCategory,
      _Product,
      _ProfitCenter,
      _SrvcDocItmLifecycleStatus,
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _PayerParty,
      _BillToParty,
      _ShipToParty,
      _RespEmployee,
      _ServiceEmployee,
      _ContactPerson,
      _ServiceDocItemHasError                                           as _ServiceContractItemHasError,
      _ServiceDocItemBillingStatus                                      as _ServiceContrItemBillingStatus,
      _ServiceDocumentIsOpen,
      _SrvcDocItemTransferStatus,
      _TransactionCurrency,
      _PaymentTerms,
      _SrvcSEPAMandateRelevance,
      _BillingBlockReason,
      _ServiceDocItemRejectionReason                                    as _SrvcContrItemRejectionReason,
      _DistributionChannel,
      _Division,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcContrItemExtnDurationUnit,
      _ResponseProfile,
      _ServiceProfile,
      _SrvcDocItemCreditStatus                                          as _SrvcContrItemCreditStatus,
      _BillableControl
}
where ServiceObjectType = 'BUS2000112'        // Only Service Contracts
  and ServiceDocumentTemplateType is initial  // No templates
  and ServiceDocumentItemIsQuotation = ' '    // No quotation items
```
