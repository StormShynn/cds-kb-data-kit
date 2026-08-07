---
name: I_PRODUCTUNITSOFMEASURE
description: Productunitsofmeasure
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
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTUNITSOFMEASURE

**Productunitsofmeasure**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `cast ( marm.matnr as productnumber preserving type )` |  |  |
| `AlternativeUnit` | ✓ | |  | `meinh` |  |  |
| `QuantityNumerator` |  | |  | `cast(marm.umrez as cmd_base_uom_cnvrsn_fctr preserving type)` |  |  |
| `QuantityDenominator` |  | |  | `cast(marm.umren as cmd_alt_uom_cnvrsn_fctr preserving type )` |  |  |
| `MaterialVolume` |  | |  | `volum` |  |  |
| `VolumeUnit` |  | |  | `voleh` |  |  |
| `GrossWeight` |  | |  | `brgew` |  |  |
| `WeightUnit` |  | |  | `gewei` |  |  |
| `GlobalTradeItemNumber` |  | |  | `ean11` |  |  |
| `GlobalTradeItemNumberCategory` |  | |  | `cast(marm.numtp as internationalarticlenumbercat preserving type )` |  |  |
| `UnitSpecificProductLength` |  | |  | `laeng` |  |  |
| `UnitSpecificProductWidth` |  | |  | `breit` |  |  |
| `UnitSpecificProductHeight` |  | |  | `hoehe` |  |  |
| `ProductMeasurementUnit` |  | |  | `meabm` |  |  |
| `LowerLevelPackagingUnit` |  | |  | `mesub` |  |  |
| `RemainingVolumeAfterNesting` |  | |  | `nest_ftr` |  |  |
| `MaximumStackingFactor` |  | |  | `max_stack` |  |  |
| `CapacityUsage` |  | |  | `capause` |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `UnitOfMeasureCategory` |  | |  | `ty2tq` |  |  |
| `ProductGTINVariant` |  | |  | `gtin_variant` |  |  |
| `BaseUnit` |  | | `_Product` | `BaseUnit` |  |  |
| `_Product` | | ✓ | | | | |
| `_ProductMeasurementUnit` | | ✓ | | | | |
| `_ProductMeasurementUnitText` | | ✓ | | | | |
| `_AlternativeUnit` | | ✓ | | | | |
| `_AlternativeUnitText` | | ✓ | | | | |
| `_GlobalTradeItemNumber` | | ✓ | | | | |
| `_GlobalTradeItemNumberText` | | ✓ | | | | |
| `_WeightUnitValueHelp` | | ✓ | | | | |
| `_WeightUnitText` | | ✓ | | | | |
| `_QuantityUnitValueHelp` | | ✓ | | | | |
| `_VolumeUnitText` | | ✓ | | | | |
| `_LowerLevelPackagingUnit` | | ✓ | | | | |
| `_LowerLevelPackagingUnitText` | | ✓ | | | | |
| `_ProductDescription_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProdUOMExt` | `E_Productunitsofmeasure` | [0..1] |
| `_ProductMeasurementUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ProductMeasurementUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_AlternativeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_AlternativeUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_GlobalTradeItemNumber` | `I_Intntnlartnmbcat` | [0..1] |
| `_GlobalTradeItemNumberText` | `I_Intntnlartnmbcattext` | [0..*] |
| `_WeightUnitValueHelp` | `I_UnitOfMeasure` | [0..1] |
| `_WeightUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_QuantityUnitValueHelp` | `I_UnitOfMeasure` | [0..1] |
| `_VolumeUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_LowerLevelPackagingUnit` | `I_UnitOfMeasure` | [0..1] |
| `_LowerLevelPackagingUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_ProductDescription_2` | `I_ProductDescription_2` | [0..*] |

## Source Code

```abap
// Product Units Of Measure (active)
@AbapCatalog.sqlViewName: 'IPRDUOM'
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Units of Measure of Product'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@ObjectModel.representativeKey:'PRODUCT'
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
       delta.changeDataCapture :{
          mapping: [{ viewElement: ['PRODUCT', 'ALTERNATIVEUNIT'],
                      role: #MAIN,
                      table: 'MARM',
                      tableElement: ['MATNR', 'MEINH']},
                    { viewElement: ['PRODUCT'],
                      role: #LEFT_OUTER_TO_ONE_JOIN,
                      table: 'MARA',
                      tableElement: ['MATNR']}
                    ]
           }
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name:'ProductUnitOfMeasure'

define view I_ProductUnitsOfMeasure
  as select from marm

  association [1..1] to I_Product               as _Product                     on  $projection.Product = _Product.Product

  association [0..1] to E_Productunitsofmeasure as _ProdUOMExt                  on  $projection.Product         = _ProdUOMExt.Product
                                                                                and $projection.AlternativeUnit = _ProdUOMExt.AlternativeUnit
  association [0..1] to I_UnitOfMeasure         as _ProductMeasurementUnit      on  $projection.ProductMeasurementUnit = _ProductMeasurementUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText     as _ProductMeasurementUnitText  on  $projection.ProductMeasurementUnit = _ProductMeasurementUnitText.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure         as _AlternativeUnit             on  $projection.AlternativeUnit = _AlternativeUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText     as _AlternativeUnitText         on  $projection.AlternativeUnit = _AlternativeUnitText.UnitOfMeasure
  association [0..1] to I_Intntnlartnmbcat      as _GlobalTradeItemNumber       on  $projection.GlobalTradeItemNumberCategory = _GlobalTradeItemNumber.InternationalArticleNumberCat
  association [0..*] to I_Intntnlartnmbcattext  as _GlobalTradeItemNumberText   on  $projection.GlobalTradeItemNumberCategory = _GlobalTradeItemNumberText.InternationalArticleNumberCat
  association [0..1] to I_UnitOfMeasure         as _WeightUnitValueHelp         on  $projection.WeightUnit = _WeightUnitValueHelp.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText     as _WeightUnitText              on  $projection.WeightUnit = _WeightUnitText.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure         as _QuantityUnitValueHelp       on  $projection.VolumeUnit = _QuantityUnitValueHelp.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText     as _VolumeUnitText              on  $projection.VolumeUnit = _VolumeUnitText.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure         as _LowerLevelPackagingUnit     on  $projection.LowerLevelPackagingUnit = _LowerLevelPackagingUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText     as _LowerLevelPackagingUnitText on  $projection.LowerLevelPackagingUnit = _LowerLevelPackagingUnitText.UnitOfMeasure
  association [0..*] to I_ProductDescription_2  as _ProductDescription_2        on  $projection.Product = _ProductDescription_2.Product

{
      // @ObjectModel.foreignKey.association: '_Product'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' },
          useAsTemplate: true              
        }]
      @ObjectModel.text.association: '_ProductDescription_2' 
  key cast ( marm.matnr  as productnumber preserving type )              as Product,
      @ObjectModel.foreignKey.association: '_AlternativeUnit'
      @ObjectModel.text.association: '_AlternativeUnitText'
      @Semantics.unitOfMeasure:true
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
  key marm.meinh                                                         as AlternativeUnit,
      _AlternativeUnit,
      _AlternativeUnitText,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast(marm.umrez  as cmd_base_uom_cnvrsn_fctr preserving type)      as QuantityNumerator,
      @Semantics.quantity.unitOfMeasure: 'AlternativeUnit'
      cast(marm.umren  as cmd_alt_uom_cnvrsn_fctr preserving type )      as QuantityDenominator,

      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      marm.volum                                                         as MaterialVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.text.association: '_VolumeUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      marm.voleh                                                         as VolumeUnit,
      _QuantityUnitValueHelp,
      _VolumeUnitText,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      marm.brgew                                                         as GrossWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.text.association: '_WeightUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      marm.gewei                                                         as WeightUnit,
      _WeightUnitValueHelp,
      _WeightUnitText,
      //Retail fields

      marm.ean11                                                         as GlobalTradeItemNumber,
      @ObjectModel.foreignKey.association: '_GlobalTradeItemNumber'
      @ObjectModel.text.association: '_GlobalTradeItemNumberText'
      @ObjectModel.sapObjectNodeTypeReference:'GlobalTradeItemNumberCategory'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_Intntnlartnmbcat', element : 'InternationalArticleNumberCat'},useAsTemplate: true }]
      cast(marm.numtp as internationalarticlenumbercat preserving type ) as GlobalTradeItemNumberCategory,
      _GlobalTradeItemNumber,
      _GlobalTradeItemNumberText,
      @Semantics.quantity.unitOfMeasure: 'ProductMeasurementUnit'
      marm.laeng                                                         as UnitSpecificProductLength,
      @Semantics.quantity.unitOfMeasure: 'ProductMeasurementUnit'
      marm.breit                                                         as UnitSpecificProductWidth,
      @Semantics.quantity.unitOfMeasure: 'ProductMeasurementUnit'
      marm.hoehe                                                         as UnitSpecificProductHeight,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ProductMeasurementUnit'
      @ObjectModel.text.association: '_ProductMeasurementUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      marm.meabm                                                         as ProductMeasurementUnit,
      _ProductMeasurementUnit,
      _ProductMeasurementUnitText,

      @ObjectModel.foreignKey.association: '_LowerLevelPackagingUnit'
      @ObjectModel.text.association: '_LowerLevelPackagingUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      marm.mesub                                                         as LowerLevelPackagingUnit,
      _LowerLevelPackagingUnit,
      _LowerLevelPackagingUnitText,
      //EWM
      marm.nest_ftr                                                      as RemainingVolumeAfterNesting,
      marm.max_stack                                                     as MaximumStackingFactor,
      marm.capause                                                       as CapacityUsage,

      cast( 'X' as sdraft_is_active preserving type )                    as IsActiveEntity, // to enbale extensibility in Draft 2.0

      // New fields from MDG model, as part of unified API development
      marm.ty2tq                                                         as UnitOfMeasureCategory,
      marm.gtin_variant                                                  as ProductGTINVariant,

      @Semantics.unitOfMeasure: true
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      _Product.BaseUnit                                                  as BaseUnit,
      _Product,
      @Analytics.hidden: true
      _ProductDescription_2

}
```
