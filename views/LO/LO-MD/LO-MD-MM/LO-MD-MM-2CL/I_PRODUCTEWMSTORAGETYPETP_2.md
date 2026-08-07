---
name: I_PRODUCTEWMSTORAGETYPETP_2
description: Productewmstoragetypetp 2
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTEWMSTORAGETYPETP_2

**Productewmstoragetypetp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  |  |
| `EWMWarehouse` | ✓ | |  |  |
| `EntitledToDisposeParty` | ✓ | |  |  |
| `EWMStorageType` | ✓ | |  |  |
| `ProductInternalUUID` |  | |  |  |
| `SupplyChainUnitUUID` |  | |  |  |
| `EWMPartyEntitledToDisposeUUID` |  | |  |  |
| `EWMStorageSectionMethod` |  | |  |  |
| `EWMStorageBinType` |  | |  |  |
| `EWMMaximumNumberOfBins` |  | |  |  |
| `EWMMaximumStorageQuantity` |  | |  |  |
| `EWMMaxStorQuantityBaseUnit` |  | |  |  |
| `EWMMaxStorQuantityDisplayUnit` |  | |  |  |
| `EWMMinimumStorageQuantity` |  | |  |  |
| `EWMMinStorQuantityBaseUnit` |  | |  |  |
| `EWMMinStorQuantityDisplayUnit` |  | |  |  |
| `EWMMinReplnmtQuantity` |  | |  |  |
| `EWMMinReplnmtQtyBaseUnit` |  | |  |  |
| `EWMMinReplnmtQtyDisplayUnit` |  | |  |  |
| `EWMMinStorQtyOfMaxStorQtyInPct` |  | |  |  |
| `EWMSpltPtwyThresholdInPercent` |  | |  |  |
| `EWMProdIsSplitOnPtwy` |  | |  |  |
| `EWMProdIsSkippedOnPtwy` |  | |  |  |
| `EWMHasNoReplenishment` |  | |  |  |
| `EWMStorageBinSearchRule` |  | |  |  |
| `EWMProdQuantityClassification` |  | |  |  |
| `EWMProdPtwyQtyClassification` |  | |  |  |
| `EWMPtwySequence` |  | |  |  |
| `_ProductEWMWarehouse` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_BusinessPartner` | | ✓ | | |
| `_BaseUnitOfMeasure` | | ✓ | | |
| `_MaxStorageQtyDisplayUnitText` | | ✓ | | |
| `_MinStorageQtyDisplayUnitText` | | ✓ | | |
| `_MinReplnmtQtyDisplayUnitText` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product EWM Storage Type - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProductEWMStorageTypeTP_2
  as projection on R_ProductEWMStorageTypeTP as ProductEWMStorageType
{
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key EWMWarehouse,
  key EntitledToDisposeParty,
  key EWMStorageType,

      @Semantics.uuid: true
      ProductInternalUUID,
      SupplyChainUnitUUID,
      EWMPartyEntitledToDisposeUUID,
      EWMStorageSectionMethod,
      EWMStorageBinType,
      EWMMaximumNumberOfBins,

      @Semantics.quantity.unitOfMeasure: 'EWMMaxStorQuantityBaseUnit'
      EWMMaximumStorageQuantity,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      EWMMaxStorQuantityBaseUnit,
      @ObjectModel.text.association: '_MaxStorageQtyDisplayUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      EWMMaxStorQuantityDisplayUnit,

      @Semantics.quantity.unitOfMeasure: 'EWMMinStorQuantityBaseUnit'
      EWMMinimumStorageQuantity,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      EWMMinStorQuantityBaseUnit,
      @ObjectModel.text.association: '_MinStorageQtyDisplayUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      EWMMinStorQuantityDisplayUnit,

      @Semantics.quantity.unitOfMeasure: 'EWMMinReplnmtQtyBaseUnit'
      EWMMinReplnmtQuantity,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      EWMMinReplnmtQtyBaseUnit,
      @ObjectModel.text.association: '_MinReplnmtQtyDisplayUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      EWMMinReplnmtQtyDisplayUnit,

      EWMMinStorQtyOfMaxStorQtyInPct,
      EWMSpltPtwyThresholdInPercent,
      EWMProdIsSplitOnPtwy,
      EWMProdIsSkippedOnPtwy,
      EWMHasNoReplenishment,
      EWMStorageBinSearchRule,
      EWMProdQuantityClassification,
      EWMProdPtwyQtyClassification,
      EWMPtwySequence,

      /* Associations */
      _ProductEWMWarehouse : redirected to parent I_ProductEWMWarehouseTP_2,
      _Product             : redirected to I_ProductTP_2,
      _BusinessPartner,
      _BaseUnitOfMeasure,
      _MaxStorageQtyDisplayUnitText,
      _MinStorageQtyDisplayUnitText,
      _MinReplnmtQtyDisplayUnitText
}
```
