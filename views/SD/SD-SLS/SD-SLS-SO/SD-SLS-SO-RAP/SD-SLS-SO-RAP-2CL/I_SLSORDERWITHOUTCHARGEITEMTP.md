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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrderWithoutCharge` | ✓ | |  |  |  |  |
| `SalesOrderWithoutChargeItem` | ✓ | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `SlsOrdWthoutChrgItemCategory` |  | |  |  |  |  |
| `SalesOrderWthoutChrgItemText` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `ConfirmedDeliveryDate` |  | |  |  |  |  |
| `ConfdDelivQtyInOrderQtyUnit` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `SDDocumentRejectionStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  |  |  |  |
| `DeliveryBlockStatus` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `Route` |  | |  |  |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `MaxNmbrOfPartialDelivery` |  | |  |  |  |  |
| `DeliveryDateQuantityIsFixed` |  | |  |  |  |  |
| `DeliveryGroup` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `RequestedQuantity` |  | |  |  |  |  |
| `RequestedQuantityUnit` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `MaterialPricingGroup` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `DeliveryStatus` |  | |  |  |  |  |
| `ItemCategoryGroup` |  | |  |  |  |  |
| `SDDocumentItemUsage` |  | |  |  |  |  |
| `SalesOrderWithoutChargeType` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `_SalesOrderWithoutCharge` | | ✓ | | | | |
| `_ItemPartner` | | ✓ | | | | |
| `_ItemText` | | ✓ | | | | |
| `_ScheduleLine` | | ✓ | | | | |

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
