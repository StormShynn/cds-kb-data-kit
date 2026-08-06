---
name: I_BUSINESSSOLUTIONORDERITEM
description: Businesssolutionorderitem
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_BUSINESSSOLUTIONORDERITEM

**Businesssolutionorderitem**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessSolutionOrder` | `ServiceDocument` |
| key `BusinessSolutionOrderItem` | `ServiceDocumentItem` |
| `ServiceObjectType` | `ServiceObjectType` |
| `BusinessSolutionOrderUUID` | `ServiceDocumentUUID` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `BusinessSolutionOrderItemUUID` | `ServiceDocumentItemUUID` |
| `ServiceDocumentItemObjectType` | `ServiceDocumentItemObjectType` |
| `BusSolnOrdItmDescription` | `ServiceDocumentItemDescription` |
| `Language` | `Language` |
| `BusSolnOrdDescription` | `ServiceDocumentDescription` |
| `BusSolnOrdItmCategory` | `ServiceDocItemCategory` |
| `ParentServiceDocumentItemUUID` | `ParentServiceDocumentItemUUID` |
| `BusSolnOrderItemCharUUID` | `cast( ServiceDocumentItemCharUUID as sysuuid_c preserving type )` |
| `PostingDate` | `PostingDate` |
| `ServiceDocItemCreationDateTime` | `ServiceDocItemCreationDateTime` |
| `ServiceDocItemChangedDateTime` | `ServiceDocItemChangedDateTime` |
| `ServiceDocItemCreatedByUser` | `ServiceDocItemCreatedByUser` |
| `ServiceDocItemChangedByUser` | `ServiceDocItemChangedByUser` |
| `Plant` | `Plant` |
| `ControllingArea` | `ControllingArea` |
| `ProfitCenter` | `ProfitCenter` |
| `ProfitCenterDeterminationDate` | `ProfitCenterDeterminationDate` |
| `RespEmployeeBusinessPartnerId` | `RespEmployeeBusinessPartnerId` |
| `ContactPersonBusinessPartnerId` | `ContactPersonBusinessPartnerId` |
| `OriginallyRequestedProduct` | `OriginallyRequestedProduct` |
| `Product` | `Product` |
| `BusSolnOrdItemBundleProduct` | `BusSolnOrdItemBundleProduct` |
| `BusSolnOrdItemBundleItem` | `BusSolnOrdItemBundleItem` |
| `Quantity` | `ServiceDocumentItemQuantity` |
| `QuantityUnit` | `ServiceDocItemQuantityUnit` |
| `IncotermsPart1` | `IncotermsPart1` |
| `IncotermsPart2` | `IncotermsPart2` |
| `DeliveryPriority` | `DeliveryPriority` |
| `DeliveryGroup` | `DeliveryGroup` |
| `PartialDeliveryIsAllowed` | `PartialDeliveryIsAllowed` |
| `OrderCombinationIsAllowed` | `OrderCombinationIsAllowed` |
| `DeliveryBlockReason` | `DeliveryBlockReason` |
| `SoldToParty` | `SoldToParty` |
| `SoldToPartyCountry` | `SoldToPartyCountry` |
| `SoldToPartyRegion` | `SoldToPartyRegion` |
| `ShipToParty` | `ShipToParty` |
| `BillToParty` | `BillToParty` |
| `PayerParty` | `PayerParty` |
| `ServiceDocumentItemNetAmount` | `ServiceDocumentItemNetAmount` |
| `ServiceDocItemGrossAmount` | `ServiceDocItemGrossAmount` |
| `ServiceDocumentItemTaxAmount` | `ServiceDocumentItemTaxAmount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ReferenceCurrency` | `StatisticsCurrency` |
| `ExchangeRateType` | `ExchangeRateType` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `AccountingExchangeRate` | `cast( AccountingExchangeRate as fis_exchange_rate preserving type )` |
| `CustomerGroup` | `CustomerGroup` |
| `PaymentTerms` | `PaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `AdditionalCustomerGroup1` | `AdditionalCustomerGroup1` |
| `AdditionalCustomerGroup2` | `AdditionalCustomerGroup2` |
| `AdditionalCustomerGroup3` | `AdditionalCustomerGroup3` |
| `AdditionalCustomerGroup4` | `AdditionalCustomerGroup4` |
| `AdditionalCustomerGroup5` | `AdditionalCustomerGroup5` |
| `BusSolnOrdItmRjcnReason` | `ServiceDocItemRejectionReason` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `SalesOrganization` | `SalesOrganization` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `BillableControl` | `BillableControl` |
| `BillingBlockReason` | `BillingBlockReason` |
| `BusSolnOrdItmStatus` | `ServiceDocumentItemStatus` |
| `BusSolnOrdItmIsReleased` | `ServiceDocumentItemIsReleased` |
| `BusSolnOrdItemHasError` | `ServiceDocumentItemHasError` |
| `SrvcDocItmDeliveryStatus` | `SrvcDocItmDeliveryStatus` |
| `BusSolnOrdItmIsRejected` | `ServiceDocumentItemIsRejected` |
| `ServiceDocumentItemIsOpen` | `ServiceDocumentItemIsOpen` |
| `MaterialPricingGroup` | `MaterialPricingGroup` |
| `ProductGroup1` | `ProductGroup1` |
| `ProductGroup2` | `ProductGroup2` |
| `ProductGroup3` | `ProductGroup3` |
| `ProductGroup4` | `ProductGroup4` |
| `ProductGroup5` | `ProductGroup5` |
| `ResponsibleCostCenter` | `ResponsibleCostCenter` |
| `EnterpriseProjectServiceOrg` | `EnterpriseProjectServiceOrg` |
| `ServiceContrItemStartDateTime` | `ServiceContrItemStartDateTime` |
| `ServiceContrItemEndDateTime` | `ServiceContrItemEndDateTime` |
| `MidBillgCycExprtnIsAllowed` | `MidBillgCycExprtnIsAllowed` |
| `SubscrpnContrTrmsAreSpecified` | `SubscrpnContrTrmsAreSpecified` |
| `SubscriptionBillingCycle` | `SubscriptionBillingCycle` |
| `RequestedServiceStartDateTime` | `RequestedServiceStartDateTime` |
| `RequestedServiceEndDateTime` | `RequestedServiceEndDateTime` |
| `ResponseProfile` | `ResponseProfile` |
| `ServiceProfile` | `ServiceProfile` |
| `SrvcContrItemRnwlDuration` | `SrvcContrItemRnwlDuration` |
| `SrvcContrItemRnwlDurationUnit` | `SrvcContrItemRnwlDurationUnit` |
| `SrvcContrItemExtensionDuration` | `SrvcContrItemExtensionDuration` |
| `SrvcContrItemExtnDurationUnit` | `SrvcContrItemExtnDurationUnit` |
| `SubscrpnBillgRatePlanCharUUID` | `cast( SubscrpnBillgRatePlanCharUUID as sysuuid_c preserving type )` |
| `PlannedServiceStartDateTime` | `PlannedServiceStartDateTime` |
| `PlannedServiceEndDateTime` | `PlannedServiceEndDateTime` |
| `ItemGrossWeight` | `ItemGrossWeight` |
| `ItemNetWeight` | `ItemNetWeight` |
| `ItemWeightUnit` | `ItemWeightUnit` |
| `ItemVolume` | `ItemVolume` |
| `ItemVolumeUnit` | `ItemVolumeUnit` |
| `CustomerPriceGroup` | `CustomerPriceGroup` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `SettlementPeriodRuleUUID` | `SettlementPeriodRuleUUID` |
| `SrvcDocItmPartReferenceItem` | `SrvcDocItmPartReferenceItem` |
| `BillingPlanBillingDateRuleUUID` | `BillingPlanBillingDateRuleUUID` |
| `_BusSolnOrdItmCategory` | `_ServiceDocItemCategory` |
| `_BusSolnOrdItmHasError` | `_ServiceDocItemHasError` |
| `_BusSolnOrdItmRjcnReason` | `_ServiceDocItemRejectionReason` |
| `_BusinessSolutionOrder` | *Association* |
| `_ServiceObjType` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_Product` | *Association* |
| `_ProfitCenter` | *Association* |
| `_ControllingArea` | *Association* |
| `_SrvcDocItmLifecycleStatus` | *Association* |
| `_SoldToParty` | *Association* |
| `_SoldToPartyCountry` | *Association* |
| `_SoldToPartyRegion` | *Association* |
| `_PayerParty` | *Association* |
| `_BillToParty` | *Association* |
| `_ShipToParty` | *Association* |
| `_RespEmployee` | *Association* |
| `_ContactPerson` | *Association* |
| `_PaymentTerms` | *Association* |
| `_PaymentMethod` | *Association* |
| `_SalesOrganization` | *Association* |
| `_ServiceDocumentIsOpen` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_BillingBlockReason` | *Association* |
| `_DeliveryBlockReason` | *Association* |
| `_SalesUnit` | *Association* |
| `_VolumeUnit` | *Association* |
| `_WeightUnit` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_SrvcContrItemRnwlDurationUnit` | *Association* |
| `_SrvcContrItemExtnDurationUnit` | *Association* |
| `_StatusObjItemStatus` | *Association* |
| `_ResponseProfile` | *Association* |
| `_ServiceProfile` | *Association* |
| `_BillableControl` | *Association* |
| `_BillPlanDateRule` | *Association* |
| `_SettlementDateRule` | *Association* |
| `_MaterialPricingGroup` | *Association* |
| `_AdditionalMaterialGroup1` | *Association* |
| `_AdditionalMaterialGroup2` | *Association* |
| `_AdditionalMaterialGroup3` | *Association* |
| `_AdditionalMaterialGroup4` | *Association* |
| `_AdditionalMaterialGroup5` | *Association* |
| `_CustomerGroup` | *Association* |
| `_AdditionalCustomerGroup1` | *Association* |
| `_AdditionalCustomerGroup2` | *Association* |
| `_AdditionalCustomerGroup3` | *Association* |
| `_AdditionalCustomerGroup4` | *Association* |
| `_AdditionalCustomerGroup5` | *Association* |
| `_ServiceProductList` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Solution Order Item'

@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: {
    authorizationCheck: #MANDATORY,
    privilegedAssociations: [ '_StatusObjItemStatus',
                              '_BillPlanDateRule',
                              '_SettlementDateRule' ],
    personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    representativeKey: 'BusinessSolutionOrderItem',
    sapObjectNodeType.name: 'BusinessSolutionOrderItem',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #SQL_DATA_SOURCE ],
    usageType: {
        serviceQuality: #A,
        sizeCategory: #XXL,
        dataClass: #TRANSACTIONAL
    }
}

@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_BusinessSolutionOrderItem
  as select from I_ServiceDocumentItem_2

  association to exact one I_BusinessSolutionOrder as _BusinessSolutionOrder        on  _BusinessSolutionOrder.BusinessSolutionOrder = $projection.BusinessSolutionOrder

  association to one E_ServiceDocumentItem         as _BusinessSolutionOrderItemExt on  _BusinessSolutionOrderItemExt.ServiceCategory       = $projection.ServiceObjectType
                                                                                    and _BusinessSolutionOrderItemExt.ServiceOrderItem      = $projection.BusinessSolutionOrder
                                                                                    and _BusinessSolutionOrderItemExt.ServiceLineExternalID = $projection.BusinessSolutionOrderItem
{
      @ObjectModel.foreignKey.association: '_BusinessSolutionOrder'
  key ServiceDocument                                                     as BusinessSolutionOrder,
      @ObjectModel.text.element: [ 'BusSolnOrdItmDescription' ]
  key ServiceDocumentItem                                                 as BusinessSolutionOrderItem,
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceObjectType, // Not a key field because the selection limits the values to 'BUS2000172'
      ServiceDocumentUUID                                                 as BusinessSolutionOrderUUID,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      ServiceDocumentItemUUID                                             as BusinessSolutionOrderItemUUID,
      ServiceDocumentItemObjectType,
      @Semantics.text: true
      ServiceDocumentItemDescription                                      as BusSolnOrdItmDescription,
      Language,
      ServiceDocumentDescription                                          as BusSolnOrdDescription,
      @ObjectModel.foreignKey.association: '_BusSolnOrdItmCategory'
      ServiceDocItemCategory                                              as BusSolnOrdItmCategory,
      ParentServiceDocumentItemUUID,
      cast( ServiceDocumentItemCharUUID as sysuuid_c preserving type )    as BusSolnOrderItemCharUUID,
      PostingDate,
      @Semantics.dateTime: true
      ServiceDocItemCreationDateTime,
      @Semantics.dateTime: true
      ServiceDocItemChangedDateTime,
      ServiceDocItemCreatedByUser,
      ServiceDocItemChangedByUser,
      Plant,
      ControllingArea,
      ProfitCenter,
      ProfitCenterDeterminationDate,
      RespEmployeeBusinessPartnerId,
      ContactPersonBusinessPartnerId,
      OriginallyRequestedProduct,
      Product,
      BusSolnOrdItemBundleProduct,
      BusSolnOrdItemBundleItem,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ServiceDocumentItemQuantity                                         as Quantity,
      ServiceDocItemQuantityUnit                                          as QuantityUnit,
      IncotermsPart1,
      IncotermsPart2,
      DeliveryPriority,
      DeliveryGroup,
      PartialDeliveryIsAllowed,
      OrderCombinationIsAllowed,
      DeliveryBlockReason,
      SoldToParty,
      SoldToPartyCountry,
      SoldToPartyRegion,
      ShipToParty,
      BillToParty,
      PayerParty,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocumentItemNetAmount,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocItemGrossAmount,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ServiceDocumentItemTaxAmount,
      TransactionCurrency,
      StatisticsCurrency                                                  as ReferenceCurrency,
      ExchangeRateType,
      ExchangeRateDate,
      cast( AccountingExchangeRate as fis_exchange_rate preserving type ) as AccountingExchangeRate,
      CustomerGroup,
      PaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,
      AdditionalCustomerGroup1,
      AdditionalCustomerGroup2,
      AdditionalCustomerGroup3,
      AdditionalCustomerGroup4,
      AdditionalCustomerGroup5,
      ServiceDocItemRejectionReason                                       as BusSolnOrdItmRjcnReason,
      DistributionChannel,
      Division,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      SalesOffice,
      SalesGroup,
      BillableControl,
      BillingBlockReason,
      ServiceDocumentItemStatus                                           as BusSolnOrdItmStatus,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsReleased                                       as BusSolnOrdItmIsReleased,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemHasError                                         as BusSolnOrdItemHasError,
      SrvcDocItmDeliveryStatus,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsRejected                                       as BusSolnOrdItmIsRejected,
      @Semantics.booleanIndicator: true
      ServiceDocumentItemIsOpen,
      MaterialPricingGroup,
      ProductGroup1,
      ProductGroup2,
      ProductGroup3,
      ProductGroup4,
      ProductGroup5,
      ResponsibleCostCenter,
      EnterpriseProjectServiceOrg,
      @Semantics.dateTime: true
      ServiceContrItemStartDateTime,
      @Semantics.dateTime: true
      ServiceContrItemEndDateTime,
      @Semantics.booleanIndicator: true
      MidBillgCycExprtnIsAllowed,
      @Semantics.booleanIndicator: true
      SubscrpnContrTrmsAreSpecified,
      SubscriptionBillingCycle,
      @Semantics.dateTime: true
      RequestedServiceStartDateTime,
      @Semantics.dateTime: true
      RequestedServiceEndDateTime,
      ResponseProfile,
      ServiceProfile,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'
      SrvcContrItemRnwlDuration,
      SrvcContrItemRnwlDurationUnit,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'SrvcContrItemExtnDurationUnit'
      SrvcContrItemExtensionDuration,
      SrvcContrItemExtnDurationUnit,
      cast( SubscrpnBillgRatePlanCharUUID as sysuuid_c preserving type )  as SubscrpnBillgRatePlanCharUUID,
      @Semantics.dateTime: true
      PlannedServiceStartDateTime,
      @Semantics.dateTime: true
      PlannedServiceEndDateTime,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      ItemVolumeUnit,
      CustomerPriceGroup,
      PurchaseOrderByCustomer,
      SettlementPeriodRuleUUID,
      SrvcDocItmPartReferenceItem,
      BillingPlanBillingDateRuleUUID,

      _BusinessSolutionOrder,
      _ServiceObjType,
      _ServiceDocumentType,
      _ServiceDocItemCategory                                             as _BusSolnOrdItmCategory,
      _Product,
      _ProfitCenter,
      _ControllingArea,
      _SrvcDocItmLifecycleStatus,
      _SoldToParty,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _PayerParty,
      _BillToParty,
      _ShipToParty,
      _RespEmployee,
      _ContactPerson,
      _PaymentTerms,
      _PaymentMethod,
      _SalesOrganization,
      _ServiceDocItemHasError                                             as _BusSolnOrdItmHasError,
      _ServiceDocumentIsOpen,
      _TransactionCurrency,
      _BillingBlockReason,
      _DeliveryBlockReason,
      _SalesUnit,
      _VolumeUnit,
      _WeightUnit,
      _ServiceDocItemRejectionReason                                      as _BusSolnOrdItmRjcnReason,
      _DistributionChannel,
      _Division,
      _SalesOffice,
      _SalesGroup,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcContrItemExtnDurationUnit,
      _StatusObjItemStatus,
      _ResponseProfile,
      _ServiceProfile,
      _BillableControl,
      _BillPlanDateRule,
      _SettlementDateRule,
      _MaterialPricingGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _CustomerGroup,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,
      _ServiceProductList
}
where
  ServiceObjectType = 'BUS2000172'
```
