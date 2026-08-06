---
name: I_SLSORDERWITHOUTCHARGEITEMTP
description: Slsorderwithoutchargeitemtp
app_component: SD-SLS-SO-RAP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - transactional-processing
  - item-level
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
---
# I_SLSORDERWITHOUTCHARGEITEMTP

**Slsorderwithoutchargeitemtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrderWithoutCharge` | `SalesOrderWithoutChargeItem.SalesOrderWithoutCharge` |
| key `SalesOrderWithoutChargeItem` | `SalesOrderWithoutChargeItem.SalesOrderWithoutChargeItem` |
| `HigherLevelItem` | `SalesOrderWithoutChargeItem.HigherLevelItem` |
| `SlsOrdWthoutChrgItemCategory` | `SalesOrderWithoutChargeItem.SlsOrdWthoutChrgItemCategory` |
| `SalesOrderWthoutChrgItemText` | `SalesOrderWithoutChargeItem.SalesOrderWthoutChrgItemText` |
| `PurchaseOrderByCustomer` | `SalesOrderWithoutChargeItem.PurchaseOrderByCustomer` |
| `RequestedDeliveryDate` | `SalesOrderWithoutChargeItem.RequestedDeliveryDate` |
| `ConfirmedDeliveryDate` | `SalesOrderWithoutChargeItem.ConfirmedDeliveryDate` |
| `ConfdDelivQtyInOrderQtyUnit` | `SalesOrderWithoutChargeItem.ConfdDelivQtyInOrderQtyUnit` |
| `OrderQuantityUnit` | `SalesOrderWithoutChargeItem.OrderQuantityUnit` |
| `SDDocumentRejectionStatus` | `SalesOrderWithoutChargeItem.SDDocumentRejectionStatus` |
| `ItemGeneralIncompletionStatus` | `SalesOrderWithoutChargeItem.ItemGeneralIncompletionStatus` |
| `DeliveryBlockStatus` | `SalesOrderWithoutChargeItem.DeliveryBlockStatus` |
| `PricingDate` | `SalesOrderWithoutChargeItem.PricingDate` |
| `BillingDocumentDate` | `SalesOrderWithoutChargeItem.BillingDocumentDate` |
| `CustomerGroup` | `SalesOrderWithoutChargeItem.CustomerGroup` |
| `Route` | `SalesOrderWithoutChargeItem.Route` |
| `PartialDeliveryIsAllowed` | `SalesOrderWithoutChargeItem.PartialDeliveryIsAllowed` |
| `MaxNmbrOfPartialDelivery` | `SalesOrderWithoutChargeItem.MaxNmbrOfPartialDelivery` |
| `DeliveryDateQuantityIsFixed` | `SalesOrderWithoutChargeItem.DeliveryDateQuantityIsFixed` |
| `DeliveryGroup` | `SalesOrderWithoutChargeItem.DeliveryGroup` |
| `CustomerPaymentTerms` | `SalesOrderWithoutChargeItem.CustomerPaymentTerms` |
| `RequestedQuantity` | `SalesOrderWithoutChargeItem.RequestedQuantity` |
| `RequestedQuantityUnit` | `SalesOrderWithoutChargeItem.RequestedQuantityUnit` |
| `ReferenceSDDocument` | `SalesOrderWithoutChargeItem.ReferenceSDDocument` |
| `ReferenceSDDocumentItem` | `SalesOrderWithoutChargeItem.ReferenceSDDocumentItem` |
| `ReferenceSDDocumentCategory` | `SalesOrderWithoutChargeItem.ReferenceSDDocumentCategory` |
| `ItemGrossWeight` | `SalesOrderWithoutChargeItem.ItemGrossWeight` |
| `ItemNetWeight` | `SalesOrderWithoutChargeItem.ItemNetWeight` |
| `ItemWeightUnit` | `SalesOrderWithoutChargeItem.ItemWeightUnit` |
| `ItemVolume` | `SalesOrderWithoutChargeItem.ItemVolume` |
| `ItemVolumeUnit` | `SalesOrderWithoutChargeItem.ItemVolumeUnit` |
| `TransactionCurrency` | `SalesOrderWithoutChargeItem.TransactionCurrency` |
| `NetAmount` | `SalesOrderWithoutChargeItem.NetAmount` |
| `Product` | `SalesOrderWithoutChargeItem.Product` |
| `OriginallyRequestedMaterial` | `SalesOrderWithoutChargeItem.OriginallyRequestedMaterial` |
| `ProductGroup` | `SalesOrderWithoutChargeItem.ProductGroup` |
| `MaterialByCustomer` | `SalesOrderWithoutChargeItem.MaterialByCustomer` |
| `InternationalArticleNumber` | `SalesOrderWithoutChargeItem.InternationalArticleNumber` |
| `MaterialPricingGroup` | `SalesOrderWithoutChargeItem.MaterialPricingGroup` |
| `Batch` | `SalesOrderWithoutChargeItem.Batch` |
| `Plant` | `SalesOrderWithoutChargeItem.Plant` |
| `StorageLocation` | `SalesOrderWithoutChargeItem.StorageLocation` |
| `ShippingPoint` | `SalesOrderWithoutChargeItem.ShippingPoint` |
| `ShippingType` | `SalesOrderWithoutChargeItem.ShippingType` |
| `DeliveryPriority` | `SalesOrderWithoutChargeItem.DeliveryPriority` |
| `IncotermsClassification` | `SalesOrderWithoutChargeItem.IncotermsClassification` |
| `IncotermsLocation1` | `SalesOrderWithoutChargeItem.IncotermsLocation1` |
| `IncotermsLocation2` | `SalesOrderWithoutChargeItem.IncotermsLocation2` |
| `SalesDocumentRjcnReason` | `SalesOrderWithoutChargeItem.SalesDocumentRjcnReason` |
| `BusinessArea` | `SalesOrderWithoutChargeItem.BusinessArea` |
| `ProfitCenter` | `SalesOrderWithoutChargeItem.ProfitCenter` |
| `SDProcessStatus` | `SalesOrderWithoutChargeItem.SDProcessStatus` |
| `DeliveryStatus` | `SalesOrderWithoutChargeItem.DeliveryStatus` |
| `ItemCategoryGroup` | `SalesOrderWithoutChargeItem.ItemCategoryGroup` |
| `SDDocumentItemUsage` | `SalesOrderWithoutChargeItem.SDDocumentItemUsage` |
| `SalesOrderWithoutChargeType` | `SalesOrderWithoutChargeItem.SalesOrderWithoutChargeType` |
| `OrganizationDivision` | `SalesOrderWithoutChargeItem.OrganizationDivision` |
| `SalesOrganization` | `SalesOrderWithoutChargeItem.SalesOrganization` |
| `DistributionChannel` | `SalesOrderWithoutChargeItem.DistributionChannel` |
| `_SalesOrderWithoutCharge` | *Association* |
| `_ItemPartner` | *Association* |
| `_ItemText` | *Association* |
| `_ScheduleLine` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Sales Order Without Charge Item - TP'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory:   #L
    },
    semanticKey:           ['SalesOrderWithoutCharge', 'SalesOrderWithoutChargeItem'],
    modelingPattern:       #TRANSACTIONAL_INTERFACE ,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDI', 
  dataSources: ['SalesOrderWithoutChargeItem'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800 
  }  
} 

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SlsOrderWithoutChargeItemTP
  as projection on R_SlsOrderWithoutChargeItemTP as SalesOrderWithoutChargeItem
{
  key SalesOrderWithoutChargeItem.SalesOrderWithoutCharge,
  key SalesOrderWithoutChargeItem.SalesOrderWithoutChargeItem,
      SalesOrderWithoutChargeItem.HigherLevelItem,
      SalesOrderWithoutChargeItem.SlsOrdWthoutChrgItemCategory,
      SalesOrderWithoutChargeItem.SalesOrderWthoutChrgItemText,
      SalesOrderWithoutChargeItem.PurchaseOrderByCustomer,
      SalesOrderWithoutChargeItem.RequestedDeliveryDate,
      SalesOrderWithoutChargeItem.ConfirmedDeliveryDate,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesOrderWithoutChargeItem.ConfdDelivQtyInOrderQtyUnit,
      SalesOrderWithoutChargeItem.OrderQuantityUnit,
      SalesOrderWithoutChargeItem.SDDocumentRejectionStatus,
      SalesOrderWithoutChargeItem.ItemGeneralIncompletionStatus,
      SalesOrderWithoutChargeItem.DeliveryBlockStatus,
      SalesOrderWithoutChargeItem.PricingDate,
      SalesOrderWithoutChargeItem.BillingDocumentDate,
      SalesOrderWithoutChargeItem.CustomerGroup,
      SalesOrderWithoutChargeItem.Route,
      SalesOrderWithoutChargeItem.PartialDeliveryIsAllowed,
      SalesOrderWithoutChargeItem.MaxNmbrOfPartialDelivery,
      SalesOrderWithoutChargeItem.DeliveryDateQuantityIsFixed,
      SalesOrderWithoutChargeItem.DeliveryGroup,
      SalesOrderWithoutChargeItem.CustomerPaymentTerms,
      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      SalesOrderWithoutChargeItem.RequestedQuantity,
      SalesOrderWithoutChargeItem.RequestedQuantityUnit,
      
      //Reference
      SalesOrderWithoutChargeItem.ReferenceSDDocument,
      SalesOrderWithoutChargeItem.ReferenceSDDocumentItem,
      SalesOrderWithoutChargeItem.ReferenceSDDocumentCategory,
            
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesOrderWithoutChargeItem.ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesOrderWithoutChargeItem.ItemNetWeight,
      SalesOrderWithoutChargeItem.ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      SalesOrderWithoutChargeItem.ItemVolume,
      SalesOrderWithoutChargeItem.ItemVolumeUnit,
      SalesOrderWithoutChargeItem.TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesOrderWithoutChargeItem.NetAmount,
      SalesOrderWithoutChargeItem.Product,
      SalesOrderWithoutChargeItem.OriginallyRequestedMaterial,      
      SalesOrderWithoutChargeItem.ProductGroup,
      SalesOrderWithoutChargeItem.MaterialByCustomer,
      SalesOrderWithoutChargeItem.InternationalArticleNumber,    
      SalesOrderWithoutChargeItem.MaterialPricingGroup,
      SalesOrderWithoutChargeItem.Batch,
      SalesOrderWithoutChargeItem.Plant,
      SalesOrderWithoutChargeItem.StorageLocation,
      SalesOrderWithoutChargeItem.ShippingPoint,
      SalesOrderWithoutChargeItem.ShippingType,
      SalesOrderWithoutChargeItem.DeliveryPriority,
      SalesOrderWithoutChargeItem.IncotermsClassification,
      SalesOrderWithoutChargeItem.IncotermsLocation1,
      SalesOrderWithoutChargeItem.IncotermsLocation2,
      SalesOrderWithoutChargeItem.SalesDocumentRjcnReason,
      SalesOrderWithoutChargeItem.BusinessArea,
      SalesOrderWithoutChargeItem.ProfitCenter,
      SalesOrderWithoutChargeItem.SDProcessStatus,
      SalesOrderWithoutChargeItem.DeliveryStatus,
      SalesOrderWithoutChargeItem.ItemCategoryGroup,
      SalesOrderWithoutChargeItem.SDDocumentItemUsage,

      //DCL
      @Consumption.hidden: true
      SalesOrderWithoutChargeItem.SalesOrderWithoutChargeType,
      @Consumption.hidden: true
      SalesOrderWithoutChargeItem.OrganizationDivision,
      @Consumption.hidden: true
      SalesOrderWithoutChargeItem.SalesOrganization,
      @Consumption.hidden: true
      SalesOrderWithoutChargeItem.DistributionChannel,

      /* Compositions */
      _SalesOrderWithoutCharge : redirected to parent I_SalesOrderWithoutChargeTP,
      _ItemPartner             : redirected to composition child I_SlsOrdWthoutChrgItmPartnerTP,
      _ItemText                : redirected to composition child I_SlsOrderWithoutChrgItmTextTP,
      _ScheduleLine            : redirected to composition child I_SlsOrdWithoutChrgSchedLineTP

}
```
