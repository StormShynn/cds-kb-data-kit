---
name: I_PRODUCTUNITOFMEASURETP_2
description: PRODUCTUnit of MeasureTP 2
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
  - unit-of-measure
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTUNITOFMEASURETP_2

**PRODUCTUnit of MeasureTP 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `AlternativeUnit` | ✓ | |  |  |  |  |
| `QuantityNumerator` |  | |  |  |  |  |
| `QuantityDenominator` |  | |  |  |  |  |
| `ProductVolume` |  | |  |  |  |  |
| `VolumeUnit` |  | |  |  |  |  |
| `GrossWeight` |  | |  |  |  |  |
| `WeightUnit` |  | |  |  |  |  |
| `GlobalTradeItemNumber` |  | |  |  |  |  |
| `GlobalTradeItemNumberCategory` |  | |  |  |  |  |
| `UnitSpecificProductLength` |  | |  |  |  |  |
| `UnitSpecificProductWidth` |  | |  |  |  |  |
| `UnitSpecificProductHeight` |  | |  |  |  |  |
| `ProductMeasurementUnit` |  | |  |  |  |  |
| `LowerLevelPackagingUnit` |  | |  |  |  |  |
| `MaximumStackingFactor` |  | |  |  |  |  |
| `CapacityUsage` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `_ProductUnitOfMeasureEAN` | | ✓ | | | | |
| `_ProdUoMSuplrEAN` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductDescription_2` | | ✓ | | | | |
| `_GlobalTradeItemNumberText` | | ✓ | | | | |
| `_UnitOfMeasureText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Unit of Measure - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #L,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProductUnitOfMeasureTP_2
  as projection on R_ProductUnitOfMeasureTP as ProductUnitOfMeasure
{
      @ObjectModel.text.association: '_ProductDescription_2'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
      @ObjectModel.text.association: '_UnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
  key AlternativeUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      QuantityNumerator,
      @Semantics.quantity.unitOfMeasure: 'AlternativeUnit'
      QuantityDenominator,
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      ProductVolume,
      @ObjectModel.text.association: '_UnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      VolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      GrossWeight,
      @ObjectModel.text.association: '_UnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      WeightUnit,
      GlobalTradeItemNumber,
      @ObjectModel.text.association: '_GlobalTradeItemNumberText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_INTNTNLARTNMBCAT', element : 'InternationalArticleNumberCat'} , useAsTemplate: true }]
      GlobalTradeItemNumberCategory,
      @Semantics.quantity.unitOfMeasure: 'ProductMeasurementUnit'
      UnitSpecificProductLength,
      @Semantics.quantity.unitOfMeasure: 'ProductMeasurementUnit'
      UnitSpecificProductWidth,
      @Semantics.quantity.unitOfMeasure: 'ProductMeasurementUnit'
      UnitSpecificProductHeight,
      @ObjectModel.text.association: '_UnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      ProductMeasurementUnit,
      @ObjectModel.text.association: '_UnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      LowerLevelPackagingUnit,
      //RemainingVolumeAfterNesting,
      MaximumStackingFactor,
      CapacityUsage,
      //      UnitOfMeasureCategory,
      //      ProductGTINVariant,
      @ObjectModel.text.association: '_UnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UNITOFMEASURESTDVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,
      /* Associations */
      _ProductUnitOfMeasureEAN : redirected to composition child I_ProductUnitOfMeasureEANTP_2,
      _ProdUoMSuplrEAN         : redirected to composition child I_ProdUoMSuplrEANTP_2,
      _Product                 : redirected to parent I_ProductTP_2,
      _ProductDescription_2,
      _GlobalTradeItemNumberText,
      _UnitOfMeasureText
}
```
