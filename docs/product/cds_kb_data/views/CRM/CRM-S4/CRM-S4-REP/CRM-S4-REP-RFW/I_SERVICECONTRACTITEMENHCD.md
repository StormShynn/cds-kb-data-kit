---
name: I_SERVICECONTRACTITEMENHCD
description: "Servicecontractitemenhcd"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SERVICECONTRACTITEMENHCD

**Servicecontractitemenhcd**

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
| `ServiceContractItem` | ✓ | |  |  |  |  |
| `ServiceObjectType` |  | |  |  |  |  |
| `ServiceContractItemCategory` |  | |  |  |  |  |
| `ServiceContractItemDescription` |  | |  |  |  |  |
| `ServiceContractDescription` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceContractItemUUID` |  | |  |  |  |  |
| `ServiceContractItemCharUUID` |  | |  |  |  |  |
| `ServiceDocumentItemObjectType` |  | |  |  |  |  |
| `ServiceContractUUID` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `ServiceDocItemCreationDateTime` |  | |  |  |  |  |
| `ServiceDocItemChangedDateTime` |  | |  |  |  |  |
| `ServiceDocItemCreatedByUser` |  | |  |  |  |  |
| `ServiceDocItemChangedByUser` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ServiceContractItemQuantity` |  | |  |  |  |  |
| `ServiceContrItemQuantityUnit` |  | |  |  |  |  |
| `BillingPlanTimeZone` |  | |  |  |  |  |
| `BillingPriceSourceName` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `ContactPersonBusinessPartnerId` |  | |  |  |  |  |
| `RespEmployeeBusinessPartnerId` |  | |  |  |  |  |
| `ServiceEmployee` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `SEPAMandate` |  | |  |  |  |  |
| `SrvcSEPAMandateRelevance` |  | |  |  |  |  |
| `BillableControl` |  | |  |  |  |  |
| `ServiceDocumentItemIsOpen` |  | |  |  |  |  |
| `ServiceContractItemIsReleased` |  | |  |  |  |  |
| `ServiceContractItemStatus` |  | |  |  |  |  |
| `ServiceContrItemBillingStatus` |  | |  |  |  |  |
| `ServiceContractItemIsRejected` |  | |  |  |  |  |
| `ServiceContractItemHasError` |  | |  |  |  |  |
| `ServiceContrItemStartDateTime` |  | |  |  |  |  |
| `ServiceContrItemEndDateTime` |  | |  |  |  |  |
| `SrvcContrItemRenewalDateTime` |  | |  |  |  |  |
| `SrvcContrItemRnwlDuration` |  | |  |  |  |  |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  |  |  |
| `SrvcContrItemExtensionDuration` |  | |  |  |  |  |
| `SrvcContrItemExtnDurationUnit` |  | |  |  |  |  |
| `ResponseProfile` |  | |  |  |  |  |
| `ServiceProfile` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ProfitCenterDeterminationDate` |  | |  |  |  |  |
| `RefBusinessSolutionOrder` |  | |  |  |  |  |
| `RefBusinessSolutionOrderItem` |  | |  |  |  |  |
| `ServiceContractItemGrossAmount` |  | |  |  |  |  |
| `ServiceContractItemNetAmount` |  | |  |  |  |  |
| `ServiceDocumentItemTaxAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `SrvcDocItemTransferStatus` |  | |  |  |  |  |
| `SubscrpnContrTrmsAreSpecified` |  | |  |  |  |  |
| `MidBillgCycExprtnIsAllowed` |  | |  |  |  |  |
| `ServiceContractItemCanclnParty` |  | |  |  |  |  |
| `ServiceContractItmCanclnReason` |  | |  |  |  |  |
| `SrvcContrItmCanclnProcedure` |  | |  |  |  |  |
| `SettlementPeriodRuleUUID` |  | |  |  |  |  |
| `SettlementPeriodRule` |  | | `_SettlementPeriodRule` | `CustMgmtDateRuleName` |  |  |
| `BillingPlanBillingDateRuleUUID` |  | |  |  |  |  |
| `SrvcMgmtBillgPlanBillgDateRule` |  | | `_BillingPlanBillingDateRule` | `CustMgmtDateRuleName` |  |  |
| `SrvcContrItemCanclnDateTime` |  | |  | `cast( case ServiceContractItemCanclnParty when '' then 0 else ServiceContrItemEndDateTime end as timestamp preserving type )` |  |  |
| `BillingPlanPriceDateRule` |  | |  |  |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `PurchaseOrderByShipToParty` |  | |  |  |  |  |
| `SrvcContrItemRejectionReason` |  | |  |  |  |  |
| `BillingPlanIsFinalized` |  | |  |  |  |  |
| `SrvcContrExternalReference` |  | | `_ExtRefServiceContract` | `CustMgmtExtRefID` |  |  |
| `SrvcContrItmExternalReference` |  | | `_ExtRefServiceContractItem` | `CustMgmtExtRefID` |  |  |
| `ServiceQtanExtReference` |  | | `_ExtRefServiceQtan` | `CustMgmtExtRefID` |  |  |
| `ServiceQtanItemExtReference` |  | | `_ExtRefServiceQtanItem` | `CustMgmtExtRefID` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SrvcContrRenewalDuration` |  | |  |  |  |  |
| `SrvcContrRenewalDurationUnit` |  | |  |  |  |  |
| `SrvcContrExtensionDuration` |  | |  |  |  |  |
| `SrvcContrExtensionDurationUnit` |  | |  |  |  |  |
| `SrvcContrItemCreditStatus` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementExternalID` |  | | `_WBSElementBasicData` | `WBSElementExternalID` |  |  |
| `SrvcDocItmPartReferenceItem` |  | |  |  |  |  |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceContractItemLongText` | | ✓ | | | | |
| `_ServiceContractItemRefObj` | | ✓ | | | | |
| `_SrvcContrItemPriceElement` | | ✓ | | | | |
| `_ServiceDocItmSuccssr_2` | | ✓ | | | | |
| `_CustMgmtPartner` | | ✓ | | | | |
| `_BillingRequestItem` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_ServiceContractItemCategory` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_ServiceContractItemHasError` | | ✓ | | | | |
| `_ServiceContrItemBillingStatus` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_SrvcDocItemTransferStatus` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_SrvcContrItemRejectionReason` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SrvcContrItemRnwlDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemExtnDurationUnit` | | ✓ | | | | |
| `_ResponseProfile` | | ✓ | | | | |
| `_ServiceProfile` | | ✓ | | | | |
| `_SrvcContrItemCreditStatus` | | ✓ | | | | |
| `_BillableControl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceContractItemEnhcdExt` | `E_ServiceDocumentItem` | [0..1] |
| `_ServiceContract` | `I_ServiceContractEnhcd` | [1..1] |
| `_SettlementPeriodRule` | `I_SrvcMgmtDateRule` | [0..1] |
| `_BillingPlanBillingDateRule` | `I_SrvcMgmtDateRule` | [0..1] |
| `_ExtRefServiceContract` | `I_CustMgmtExtRefID` | [0..1] |
| `_ExtRefServiceContractItem` | `I_CustMgmtExtRefID` | [0..1] |
| `_ExtRefServiceQtan` | `I_CustMgmtExtRefID` | [0..1] |
| `_ExtRefServiceQtanItem` | `I_CustMgmtExtRefID` | [0..1] |
| `_ServiceContractItemLongText` | `I_SrvcDocItemLongText` | [0..*] |
| `_ServiceContractItemRefObj` | `I_ServiceDocumentRefObject` | [0..*] |
| `_SrvcContrItemPriceElement` | `I_SrvcContrItemPriceElement` | [0..*] |
| `_ServiceDocItmSuccssr_2` | `I_ServiceDocumentItemSuccssr_2` | [0..*] |
| `_CustMgmtPartner` | `I_CustMgmtPartner` | [0..*] |
| `_BillingRequestItem` | `I_BillingRequestItem` | [0..*] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Contract Item Enhanced'

@AccessControl: {
    authorizationCheck: #MANDATORY,
    privilegedAssociations: [ '_CustMgmtPartner', 
                              '_ServiceContractItemLongText', 
                              '_SrvcContrItemPriceElement', 
                              '_ServiceContractItemRefObj' ],
    personalData.blocking: #NOT_REQUIRED
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType:{
        serviceQuality: #C,
        sizeCategory: #XXL,
        dataClass: #MIXED
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
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_ServiceContractItemEnhcd as select from I_ServiceContractItem
  association [0..1] to E_ServiceDocumentItem as _ServiceContractItemEnhcdExt          on $projection.ServiceObjectType   = _ServiceContractItemEnhcdExt.ServiceCategory
                                                                                      and $projection.ServiceContract     = _ServiceContractItemEnhcdExt.ServiceOrderItem
                                                                                      and $projection.ServiceContractItem = _ServiceContractItemEnhcdExt.ServiceLineExternalID
  
  association [1..1] to I_ServiceContractEnhcd        as _ServiceContract              on _ServiceContract.ServiceContract = $projection.ServiceContract
  
  association [0..1] to I_SrvcMgmtDateRule            as _SettlementPeriodRule         on  $projection.SettlementPeriodRuleUUID = _SettlementPeriodRule.CustMgmtDateRuleUUID

  association [0..1] to I_SrvcMgmtDateRule            as _BillingPlanBillingDateRule   on  $projection.BillingPlanBillingDateRuleUUID = _BillingPlanBillingDateRule.CustMgmtDateRuleUUID

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_CustMgmtExtRefID            as _ExtRefServiceContract        on _ExtRefServiceContract.CustMgmtObjectType   = 'BUS2000112'
                                                                                      and _ExtRefServiceContract.CustMgmtDocument     = $projection.ServiceContract
                                                                                      and _ExtRefServiceContract.CustMgmtDocumentItem = '000000'
                                                                                      and _ExtRefServiceContract.CustMgmtExtRefIDType = '0003'

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_CustMgmtExtRefID            as _ExtRefServiceContractItem    on _ExtRefServiceContractItem.CustMgmtObjectType   = 'BUS2000112'
                                                                                      and _ExtRefServiceContractItem.CustMgmtDocument     = $projection.ServiceContract 
                                                                                      and _ExtRefServiceContractItem.CustMgmtDocumentItem = $projection.ServiceContractItem 
                                                                                      and _ExtRefServiceContractItem.CustMgmtExtRefIDType = '0004'

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_CustMgmtExtRefID            as _ExtRefServiceQtan            on  _ExtRefServiceQtan.CustMgmtObjectType  = 'BUS2000112'
                                                                                      and _ExtRefServiceQtan.CustMgmtDocument     = $projection.ServiceContract 
                                                                                      and _ExtRefServiceQtan.CustMgmtExtRefIDType = '0009'

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_CustMgmtExtRefID            as _ExtRefServiceQtanItem        on _ExtRefServiceQtanItem.CustMgmtObjectType   = 'BUS2000112'
                                                                                      and _ExtRefServiceQtanItem.CustMgmtDocument     = $projection.ServiceContract 
                                                                                      and _ExtRefServiceQtanItem.CustMgmtDocumentItem = $projection.ServiceContractItem
                                                                                      and _ExtRefServiceQtanItem.CustMgmtExtRefIDType = '0010'
  
  association [0..*] to I_SrvcDocItemLongText         as _ServiceContractItemLongText  on _ServiceContractItemLongText.ServiceObjectType   = $projection.ServiceObjectType
                                                                                      and _ServiceContractItemLongText.ServiceDocument     = $projection.ServiceContract
                                                                                      and _ServiceContractItemLongText.ServiceDocumentItem = $projection.ServiceContractItem
                                                                                      and _ServiceContractItemLongText.Language            = $session.system_language

  association [0..*] to I_ServiceDocumentRefObject    as _ServiceContractItemRefObj    on _ServiceContractItemRefObj.ServiceObjectType = $projection.ServiceObjectType
                                                                                      and _ServiceContractItemRefObj.ServiceDocument   = $projection.ServiceContract
                                                                                      and _ServiceContractItemRefObj.ServiceDocumentItem = $projection.ServiceContractItem

  association [0..*] to I_SrvcContrItemPriceElement   as _SrvcContrItemPriceElement    on _SrvcContrItemPriceElement.ServiceContract = $projection.ServiceContract
                                                                                      and _SrvcContrItemPriceElement.ServiceContractItem = $projection.ServiceContractItem

  association [0..*] to I_ServiceDocumentItemSuccssr_2 as _ServiceDocItmSuccssr_2      on  $projection.ServiceContractItemCharUUID = _ServiceDocItmSuccssr_2.ServiceDocumentItemCharUUID


  association [0..*] to I_CustMgmtPartner             as _CustMgmtPartner              on _CustMgmtPartner.CustMgmtDocument     = $projection.ServiceContract
                                                                                      and _CustMgmtPartner.CustMgmtObjectType   = $projection.ServiceObjectType 
                                                                                      and _CustMgmtPartner.CustMgmtDocumentItem = $projection.SrvcDocItmPartReferenceItem

  association [0..*] to I_BillingRequestItem          as _BillingRequestItem           on _BillingRequestItem.ServiceObjectType   = $projection.ServiceObjectType
                                                                                      and _BillingRequestItem.ServiceDocument     = $projection.ServiceContract
                                                                                      and _BillingRequestItem.ServiceDocumentItem = $projection.ServiceContractItem

  association [0..1] to I_WBSElementBasicData         as _WBSElementBasicData          on _WBSElementBasicData.WBSElementInternalID = $projection.WBSElementInternalID
{
      @ObjectModel.foreignKey.association: '_ServiceContract'
  key ServiceContract,
      @ObjectModel.text.element: [ 'ServiceContractItemDescription' ]
  key ServiceContractItem,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType,       // Not a key field because the selection limits the values to 'BUS2000112'
      ServiceContractItemCategory,
      @Semantics.text: true
      ServiceContractItemDescription,
      ServiceContractDescription,
      ServiceDocumentType,
      ServiceContractItemUUID,
      ServiceContractItemCharUUID,
      ServiceDocumentItemObjectType,
      ServiceContractUUID,
      Language,
      PostingDate,
      ServiceDocItemCreationDateTime,
      ServiceDocItemChangedDateTime,
      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,
      Product,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceContrItemQuantityUnit'} }
      ServiceContractItemQuantity,
      ServiceContrItemQuantityUnit,
      BillingPlanTimeZone,
      BillingPriceSourceName,
      SoldToParty,
      SoldToPartyCountry,
      SoldToPartyRegion,
      ShipToParty,
      BillToParty,
      PayerParty,
      ContactPersonBusinessPartnerId,
      RespEmployeeBusinessPartnerId,
      ServiceEmployee,
      PaymentTerms,
      PaymentMethod,
      SEPAMandate,
      SrvcSEPAMandateRelevance,
      BillableControl,
      
      // Status
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsOpen,
      @Semantics.booleanIndicator: true
      ServiceContractItemIsReleased,
      ServiceContractItemStatus,
      ServiceContrItemBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceContractItemIsRejected,
      @Semantics.booleanIndicator: true
      ServiceContractItemHasError,
      @Semantics.dateTime: true
      ServiceContrItemStartDateTime,
      @Semantics.dateTime: true
      ServiceContrItemEndDateTime,
      @Semantics.dateTime: true
      SrvcContrItemRenewalDateTime,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      SrvcContrItemRnwlDuration,
      SrvcContrItemRnwlDurationUnit,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      SrvcContrItemExtensionDuration,
      SrvcContrItemExtnDurationUnit,
      ResponseProfile,
      ServiceProfile,
      ControllingArea,    // Needed for _ProfitCenter
      ProfitCenter,
      ProfitCenterDeterminationDate,
      RefBusinessSolutionOrder,
      RefBusinessSolutionOrderItem,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractItemGrossAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractItemNetAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceDocumentItemTaxAmount,
      TransactionCurrency,
      SrvcDocItemTransferStatus,
      @Semantics.booleanIndicator: true
      SubscrpnContrTrmsAreSpecified,
      @Semantics.booleanIndicator: true
      MidBillgCycExprtnIsAllowed,
      //Cancellation
      ServiceContractItemCanclnParty,
      ServiceContractItmCanclnReason,
      SrvcContrItmCanclnProcedure,
      // Item - Billing Plan
      SettlementPeriodRuleUUID,
      _SettlementPeriodRule.CustMgmtDateRuleName                 as SettlementPeriodRule,
      BillingPlanBillingDateRuleUUID,
      _BillingPlanBillingDateRule.CustMgmtDateRuleName           as SrvcMgmtBillgPlanBillgDateRule,
      @Semantics.dateTime: true
      cast( case ServiceContractItemCanclnParty
            when '' then 0
            else ServiceContrItemEndDateTime
            end as timestamp preserving type )                   as SrvcContrItemCanclnDateTime,
      BillingPlanPriceDateRule,
      BillingBlockReason,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      SrvcContrItemRejectionReason,
      BillingPlanIsFinalized,
      // Reference Documents
      _ExtRefServiceContract.CustMgmtExtRefID                    as SrvcContrExternalReference,
      _ExtRefServiceContractItem.CustMgmtExtRefID                as SrvcContrItmExternalReference,

      _ExtRefServiceQtan.CustMgmtExtRefID                        as ServiceQtanExtReference,
      _ExtRefServiceQtanItem.CustMgmtExtRefID                    as ServiceQtanItemExtReference,

      SalesOrganization,
      DistributionChannel,
      Division,
      SalesOffice,
      SalesGroup,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrRenewalDurationUnit'} }
      SrvcContrRenewalDuration,
      SrvcContrRenewalDurationUnit,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrExtensionDurationUnit'} }
      SrvcContrExtensionDuration,
      SrvcContrExtensionDurationUnit,
      SrvcContrItemCreditStatus,
      
      WBSElementInternalID,
      _WBSElementBasicData.WBSElementExternalID,
      
      SrvcDocItmPartReferenceItem,     
      
      _ServiceContractItemLongText,
      _ServiceContractItemRefObj,
      _SrvcContrItemPriceElement,
      _ServiceDocItmSuccssr_2,
      _CustMgmtPartner,
      _BillingRequestItem,
   
      _ServiceContract,
      _ServiceObjType,
      _ServiceContractItemCategory,
      _ServiceDocumentType,
      _PaymentMethod,
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
      _ServiceContractItemHasError,
      _ServiceContrItemBillingStatus,
      _ServiceDocumentIsOpen,
      _SrvcDocItemTransferStatus,
      _TransactionCurrency,
      _PaymentTerms,
      _SrvcSEPAMandateRelevance,
      _BillingBlockReason,
      _SrvcContrItemRejectionReason,
      _DistributionChannel,
      _Division,
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcContrItemExtnDurationUnit,
      _ResponseProfile,
      _ServiceProfile,
      _SrvcContrItemCreditStatus,
      _BillableControl
}
```
