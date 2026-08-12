---
name: I_SLSSCHEDULINGAGREEMENTITEMTP
description: "Slsschedulingagreementitemtp"
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - transactional-processing
  - item-level
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SLSSCHEDULINGAGREEMENTITEMTP

**Slsschedulingagreementitemtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesSchedulingAgreement` | ✓ | |  |  |  |  |
| `SalesSchedulingAgreementItem` | ✓ | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `SalesSchedgAgrmtItemCategory` |  | |  |  |  |  |
| `MaterialPricingGroup` |  | |  |  |  |  |
| `SalesSchedgAgrmtItemType` |  | |  |  |  |  |
| `PlngDelivSchedInstrn` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `TargetQuantityUnit` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `SalesSchedgAgrmtType` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `_SalesSchedulingAgreement` | | ✓ | | | | |
| `_ItemPartner` | | ✓ | | | | |
| `_ItemText` | | ✓ | | | | |
| `_ItemPricingElement` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement Item - TP' 

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    sapObjectNodeType:{
        name: 'SalesSchedulingAgreementItem'
    },
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory:   #L
    },
    semanticKey:           ['SalesSchedulingAgreement', 'SalesSchedulingAgreementItem'],
    modelingPattern:       #TRANSACTIONAL_INTERFACE ,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['SalesSchedgAgrmtItem'],  
  elementSuffix: 'SDI',
  quota: {
    maximumFields: 204, 
    maximumBytes: 6800
  }  
} 

define view entity I_SlsSchedulingAgreementItemTP 
as projection on R_SalesSchedgAgrmtItemTP as SalesSchedgAgrmtItem
{
  key SalesSchedgAgrmtItem.SalesSchedulingAgreement,
  key SalesSchedgAgrmtItem.SalesSchedulingAgreementItem,
      SalesSchedgAgrmtItem.Product,
      SalesSchedgAgrmtItem.ProductGroup,
      SalesSchedgAgrmtItem.MaterialByCustomer,
      SalesSchedgAgrmtItem.SalesSchedgAgrmtItemCategory,
      SalesSchedgAgrmtItem.MaterialPricingGroup,
      SalesSchedgAgrmtItem.SalesSchedgAgrmtItemType,
      SalesSchedgAgrmtItem.PlngDelivSchedInstrn,
      SalesSchedgAgrmtItem.Plant,
      SalesSchedgAgrmtItem.StorageLocation,
      SalesSchedgAgrmtItem.PurchaseOrderByCustomer,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesSchedgAgrmtItem.OrderQuantity,
      SalesSchedgAgrmtItem.OrderQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      SalesSchedgAgrmtItem.TargetQuantity,
      SalesSchedgAgrmtItem.TargetQuantityUnit,
      SalesSchedgAgrmtItem.Batch,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesSchedgAgrmtItem.ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesSchedgAgrmtItem.ItemNetWeight,
      SalesSchedgAgrmtItem.ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      SalesSchedgAgrmtItem.ItemVolume,
      SalesSchedgAgrmtItem.ItemVolumeUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesSchedgAgrmtItem.NetAmount,
      SalesSchedgAgrmtItem.TransactionCurrency,
      SalesSchedgAgrmtItem.SDProcessStatus,
      
      //DCL
      @Consumption.hidden: true
      SalesSchedgAgrmtItem.SalesSchedgAgrmtType,
      @Consumption.hidden: true
      SalesSchedgAgrmtItem.OrganizationDivision,
      @Consumption.hidden: true
      SalesSchedgAgrmtItem.SalesOrganization,
      @Consumption.hidden: true
      SalesSchedgAgrmtItem.DistributionChannel,
      
      //Composition
      _SalesSchedulingAgreement : redirected to parent I_SalesSchedulingAgreementTP, 
      _ItemPartner              : redirected to composition child I_SlsSchedgAgrmtItemPartnerTP,
      _ItemText                 : redirected to composition child I_SlsSchedgAgrmtItemTextTP,
      _ItemPricingElement       : redirected to composition child I_SlsSchedgAgrmtItmPrcgElmntTP
}
```
