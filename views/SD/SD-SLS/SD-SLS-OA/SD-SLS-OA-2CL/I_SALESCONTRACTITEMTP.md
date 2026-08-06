---
name: I_SALESCONTRACTITEMTP
description: Salescontractitemtp
app_component: SD-SLS-OA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - transactional-processing
  - sales-contract
  - contract
  - item-level
  - component:SD-SLS-OA-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTITEMTP

**Salescontractitemtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesContract` | `SalesContractItem.SalesContract` |
| key `SalesContractItem` | `SalesContractItem.SalesContractItem` |
| `SalesContractItemCategory` | `SalesContractItem.SalesContractItemCategory` |
| `Product` | `SalesContractItem.Product` |
| `ProductGroup` | `SalesContractItem.ProductGroup` |
| `MaterialByCustomer` | `SalesContractItem.MaterialByCustomer` |
| `PurchaseOrderByCustomer` | `SalesContractItem.PurchaseOrderByCustomer` |
| `RequestedQuantity` | `SalesContractItem.RequestedQuantity` |
| `RequestedQuantityUnit` | `SalesContractItem.RequestedQuantityUnit` |
| `TargetQuantity` | `SalesContractItem.TargetQuantity` |
| `TargetQuantityUnit` | `SalesContractItem.TargetQuantityUnit` |
| `ItemGrossWeight` | `SalesContractItem.ItemGrossWeight` |
| `ItemNetWeight` | `SalesContractItem.ItemNetWeight` |
| `ItemWeightUnit` | `SalesContractItem.ItemWeightUnit` |
| `ItemVolume` | `SalesContractItem.ItemVolume` |
| `ItemVolumeUnit` | `SalesContractItem.ItemVolumeUnit` |
| `Plant` | `SalesContractItem.Plant` |
| `StorageLocation` | `SalesContractItem.StorageLocation` |
| `MaterialPricingGroup` | `SalesContractItem.MaterialPricingGroup` |
| `SDProcessStatus` | `SalesContractItem.SDProcessStatus` |
| `NetAmount` | `SalesContractItem.NetAmount` |
| `TransactionCurrency` | `SalesContractItem.TransactionCurrency` |
| `SalesContractType` | `SalesContractItem.SalesContractType` |
| `SalesOrganization` | `SalesContractItem.SalesOrganization` |
| `DistributionChannel` | `SalesContractItem.DistributionChannel` |
| `OrganizationDivision` | `SalesContractItem.OrganizationDivision` |
| `_SalesContract` | *Association* |
| `_ItemText` | *Association* |
| `_ItemPricingElement` | *Association* |
| `_ItemBillingPlan` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Sales Contract Item - TP'
@ObjectModel.sapObjectNodeType.name: 'SalesContractItem'
@AccessControl.authorizationCheck: #CHECK
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
    semanticKey:           ['SalesContract', 'SalesContractItem'],
    modelingPattern:       #TRANSACTIONAL_INTERFACE ,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDI',
  dataSources: ['SalesContractItem'],
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SalesContractItemTP
  as projection on R_SalesContractItemTP as SalesContractItem
{
  key SalesContractItem.SalesContract,
  key SalesContractItem.SalesContractItem,

      SalesContractItem.SalesContractItemCategory,
      SalesContractItem.Product,
      SalesContractItem.ProductGroup,
      SalesContractItem.MaterialByCustomer,
      SalesContractItem.PurchaseOrderByCustomer,

      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      SalesContractItem.RequestedQuantity,
      SalesContractItem.RequestedQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      SalesContractItem.TargetQuantity,
      SalesContractItem.TargetQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesContractItem.ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesContractItem.ItemNetWeight,
      SalesContractItem.ItemWeightUnit,

      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      SalesContractItem.ItemVolume,
      SalesContractItem.ItemVolumeUnit,

      SalesContractItem.Plant,
      SalesContractItem.StorageLocation,
      SalesContractItem.MaterialPricingGroup,
      SalesContractItem.SDProcessStatus,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesContractItem.NetAmount,
      SalesContractItem.TransactionCurrency,

      //DCL
      @Consumption.hidden: true
      SalesContractItem.SalesContractType,
      @Consumption.hidden: true
      SalesContractItem.SalesOrganization,
      @Consumption.hidden: true
      SalesContractItem.DistributionChannel,
      @Consumption.hidden: true
      SalesContractItem.OrganizationDivision,

      //Composition
      _SalesContract      : redirected to parent I_SalesContractTP,
      //      _ItemPartner        : redirected to composition child I_SalesContractItemPartnerTP,
      _ItemText           : redirected to composition child I_SalesContractItemTextTP,
      _ItemPricingElement : redirected to composition child I_SlsContrItemPricingElementTP,
      _ItemBillingPlan    : redirected to composition child I_SlsContractItemBillingPlanTP
}
```
