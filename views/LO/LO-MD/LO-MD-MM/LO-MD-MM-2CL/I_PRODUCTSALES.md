---
name: I_PRODUCTSALES
description: Productsales
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
# I_PRODUCTSALES

**Productsales**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` |  |  |
| `SalesStatus` |  | |  | `mstav` |  |  |
| `SalesStatusValidityDate` |  | |  | `cast(mara.mstdv as salesstatusvaliditydate)` |  |  |
| `TaxClassification` |  | |  | `taklv` |  |  |
| `TransportationGroup` |  | |  | `tragr` |  |  |
| `AllowedPackagingWeightQty` |  | |  | `ergew` |  |  |
| `AllowedPackagingWeightQtyUnit` |  | |  | `cast(mara.ergei as allowedpackagingweightqtyunit)` |  |  |
| `AllowedPackagingVolumeQty` |  | |  | `ervol` |  |  |
| `AllowedPackagingVolumeQtyUnit` |  | |  | `cast(mara.ervoe as allowedpackagingvolumeqtyunit)` |  |  |
| `PricingReferenceProduct` |  | |  | `pmata` |  |  |
| `VariantsPricingProfile` |  | |  | `sprof` |  |  |
| `IsVariantPriceAllowed` |  | |  | `allow_pmat_igno` |  |  |
| `LoadingGroup` |  | | `_ProductRetail` | `LoadingGroup` |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `ExcessWeightTolerance` |  | |  | `cast(mara.gewto as excessweighttolerance preserving type )` |  |  |
| `ExcessVolumeTolerance` |  | |  | `cast(mara.volto as excessvolumetolerance preserving type )` |  |  |
| `PackagingMaterialType` |  | |  | `cast(mara.vhart as packagingmaterialtype preserving type )` |  |  |
| `IsClosedPackagingMaterial` |  | |  | `kzgvh` |  |  |
| `VolumeMaximumLevel` |  | |  | `fuelg` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `MaterialFreightGroup` |  | |  | `mfrgr` |  |  |
| `StackingFactor` |  | |  | `stfak` |  |  |
| `_Product` | | ✓ | | | | |
| `_ProductRetail` | | ✓ | | | | |
| `_SalesStatus` | | ✓ | | | | |
| `_SalesStatusText` | | ✓ | | | | |
| `_PricingReferenceProduct` | | ✓ | | | | |
| `_PricingReferenceProductText` | | ✓ | | | | |
| `_PricingReferenceProductText_2` | | ✓ | | | | |
| `_Weight` | | ✓ | | | | |
| `_WeightText` | | ✓ | | | | |
| `_Volume` | | ✓ | | | | |
| `_VolumeText` | | ✓ | | | | |
| `_TransportationGroup` | | ✓ | | | | |
| `_TransportationGroupText` | | ✓ | | | | |
| `_PackagingMaterialType` | | ✓ | | | | |
| `_PackagingMaterialTypeText` | | ✓ | | | | |
| `_VariantsPricingProfile` | | ✓ | | | | |
| `_VariantsPricingProfileText` | | ✓ | | | | |
| `_TaxClass` | | ✓ | | | | |
| `_ProductDescription_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProductRetail` | `I_ProductRetail` | [0..1] |
| `_ProdSalesExt` | `E_Product` | [0..1] |
| `_SalesStatus` | `I_SalesDistributionStatusVH` | [0..1] |
| `_SalesStatusText` | `I_SalesDistributionStatusText` | [0..*] |
| `_PricingReferenceProduct` | `I_Product` | [0..1] |
| `_PricingReferenceProductText` | `I_ProductDescription` | [0..*] |
| `_PricingReferenceProductText_2` | `I_ProductDescription_2` | [0..*] |
| `_Weight` | `I_UnitOfMeasure` | [0..1] |
| `_WeightText` | `I_UnitOfMeasureText` | [0..*] |
| `_Volume` | `I_UnitOfMeasure` | [0..1] |
| `_VolumeText` | `I_UnitOfMeasureText` | [0..*] |
| `_TransportationGroup` | `I_TransportationGroup` | [0..1] |
| `_TransportationGroupText` | `I_TransportationGroupText` | [0..*] |
| `_PackagingMaterialType` | `I_MeansOfTransportType` | [0..1] |
| `_PackagingMaterialTypeText` | `I_MeansOfTransportTypeText` | [0..*] |
| `_VariantsPricingProfile` | `I_VariantsPricingProfile` | [0..1] |
| `_VariantsPricingProfileText` | `I_VariantsPricingProfileText` | [0..*] |
| `_TaxClass` | `I_Taxclass` | [0..*] |
| `_ProductDescription_2` | `I_ProductDescription_2` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDSALES'
@AbapCatalog.preserveKey: true
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: {
enabled: true,
delta.changeDataCapture:{
mapping: [{
        viewElement: ['PRODUCT'],
        role: #MAIN,
        table: 'MARA',
        tableElement: ['MATNR']
        },
        {
        viewElement: ['PRODUCT'],
        role: #LEFT_OUTER_TO_ONE_JOIN,
        table: 'MAW1',
        tableElement: ['MATNR']
        }]
}
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Sales'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'Product'
@Metadata.allowExtensions: true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name:'ProductSales'

define view I_ProductSales
  as select from mara
  //    left outer join maw1 on mara.matnr = maw1.matnr
  association [1..1] to I_Product                     as _Product                     on $projection.Product = _Product.Product
  association [0..1] to I_ProductRetail               as _ProductRetail               on $projection.Product = _ProductRetail.Product //added for VH "PSTAT Changes
  association [0..1] to E_Product                     as _ProdSalesExt                on $projection.Product = _ProdSalesExt.Product
  association [0..1] to I_SalesDistributionStatusVH   as _SalesStatus                 on $projection.SalesStatus = _SalesStatus.ProductSalesStatus
  association [0..*] to I_SalesDistributionStatusText as _SalesStatusText             on $projection.SalesStatus = _SalesStatusText.ProductSalesStatus
  association [0..1] to I_Product                     as _PricingReferenceProduct     on $projection.PricingReferenceProduct = _PricingReferenceProduct.Product
  association [0..*] to I_ProductDescription          as _PricingReferenceProductText on $projection.PricingReferenceProduct = _PricingReferenceProductText.Product
  association [0..*] to I_ProductDescription_2        as _PricingReferenceProductText_2 on $projection.PricingReferenceProduct = _PricingReferenceProductText_2.Product
  //  association [0..1] to I_LoadingGroup                as _LoadingGroup                on  $projection.LoadingGroup = _LoadingGroup.LoadingGroup
  //  association [0..*] to I_LoadingGroupText            as _LoadingGroupText            on  $projection.LoadingGroup = _LoadingGroupText.LoadingGroup
  association [0..1] to I_UnitOfMeasure               as _Weight                      on $projection.AllowedPackagingWeightQtyUnit = _Weight.UnitOfMeasure

  association [0..*] to I_UnitOfMeasureText           as _WeightText                  on $projection.AllowedPackagingWeightQtyUnit = _WeightText.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _Volume                      on $projection.AllowedPackagingVolumeQtyUnit = _Volume.UnitOfMeasure

  association [0..*] to I_UnitOfMeasureText           as _VolumeText                  on $projection.AllowedPackagingVolumeQtyUnit = _VolumeText.UnitOfMeasure
  association [0..1] to I_TransportationGroup         as _TransportationGroup         on $projection.TransportationGroup = _TransportationGroup.TransportationGroup
  association [0..*] to I_TransportationGroupText     as _TransportationGroupText     on $projection.TransportationGroup = _TransportationGroupText.TransportationGroup
  association [0..1] to I_MeansOfTransportType        as _PackagingMaterialType       on $projection.PackagingMaterialType = _PackagingMaterialType.MeansOfTransportType
  association [0..*] to I_MeansOfTransportTypeText    as _PackagingMaterialTypeText   on $projection.PackagingMaterialType = _PackagingMaterialTypeText.MeansOfTransportType

  association [0..1] to I_VariantsPricingProfile      as _VariantsPricingProfile      on $projection.VariantsPricingProfile = _VariantsPricingProfile.VariantsPricingProfile
  association [0..*] to I_VariantsPricingProfileText  as _VariantsPricingProfileText  on $projection.VariantsPricingProfile = _VariantsPricingProfileText.VariantsPricingProfile
  association [0..*] to I_Taxclass                    as _TaxClass                    on $projection.TaxClassification = _TaxClass.TaxClassification
  association [0..*] to I_ProductDescription_2        as _ProductDescription_2        on $projection.Product = _ProductDescription_2 .Product
{
  key mara.matnr                                                 as Product,
      @ObjectModel.foreignKey.association: '_SalesStatus'
      @ObjectModel.text.association:'_SalesStatusText'
      mara.mstav                                                 as SalesStatus,
      _SalesStatus,
      _SalesStatusText,
      cast(mara.mstdv as salesstatusvaliditydate)                as SalesStatusValidityDate,
      mara.taklv                                                 as TaxClassification,
      @ObjectModel.foreignKey.association: '_TransportationGroup'
      @ObjectModel.text.association:'_TransportationGroupText'
      mara.tragr                                                 as TransportationGroup,
      _TransportationGroup,
      _TransportationGroupText,
      //Retail Fields
      @Semantics.quantity.unitOfMeasure: 'AllowedPackagingWeightQtyUnit'
      mara.ergew                                                 as AllowedPackagingWeightQty,
      @ObjectModel.foreignKey.association: '_Weight'
      @ObjectModel.text.association:'_WeightText'
      @Semantics.unitOfMeasure:true
      cast(mara.ergei as allowedpackagingweightqtyunit)          as AllowedPackagingWeightQtyUnit,
      _Weight,
      _WeightText,
      @Semantics.quantity.unitOfMeasure: 'AllowedPackagingVolumeQtyUnit'
      mara.ervol                                                 as AllowedPackagingVolumeQty,
      @ObjectModel.foreignKey.association: '_Volume'
      @ObjectModel.text.association:'_VolumeText'
      @Semantics.unitOfMeasure:true
      cast(mara.ervoe as allowedpackagingvolumeqtyunit)          as AllowedPackagingVolumeQtyUnit,
      _Volume,
      _VolumeText,
      @ObjectModel.foreignKey.association: '_PricingReferenceProduct'
      @ObjectModel.text.association:'_PricingReferenceProductText'
      mara.pmata                                                 as PricingReferenceProduct,
      _PricingReferenceProduct,
      _PricingReferenceProductText,
      _PricingReferenceProductText_2,
      @ObjectModel.foreignKey.association: '_VariantsPricingProfile'
      @ObjectModel.text.association:'_VariantsPricingProfileText'
      mara.sprof                                                 as VariantsPricingProfile,
      mara.allow_pmat_igno                                       as IsVariantPriceAllowed,
      //      maw1.wvrkm                                      as SalesUnit, //Copy Value for MARC  "PSTAT Move to I_ProductWD
      //      @ObjectModel.foreignKey.association: '_LoadingGroup'
      //      @ObjectModel.text.association:'_LoadingGroupText'
      _ProductRetail.LoadingGroup                                as LoadingGroup, //Copy Value for MARC
      _ProductRetail._LoadingGroup,
      _ProductRetail._LoadingGroupText,
      cast( 'X' as sdraft_is_active preserving type )            as IsActiveEntity, // to enbale extensibility in Draft 2.0

      //new fields


      cast(mara.gewto as excessweighttolerance preserving type ) as ExcessWeightTolerance, //Excess Weight Tolerance for Handling unit
      cast(mara.volto as excessvolumetolerance preserving type ) as ExcessVolumeTolerance, //Excess Volume Tolerance of the Handling Unit,
      @ObjectModel.foreignKey.association: '_PackagingMaterialType'
      @ObjectModel.text.association:'_PackagingMaterialTypeText'
      cast(mara.vhart as packagingmaterialtype preserving type ) as PackagingMaterialType, //Packaging Material Type
      _PackagingMaterialType,
      _PackagingMaterialTypeText,
      mara.kzgvh                                                 as IsClosedPackagingMaterial, //Packaging Material is Closed Packaging
      mara.fuelg                                                 as VolumeMaximumLevel,        //Maximum level (by volume)
      mara.begru                                                 as AuthorizationGroup,
      mara.mfrgr                                                 as MaterialFreightGroup,
      // New fields for unified api
      mara.stfak                                                 as StackingFactor,

      _ProductRetail,
      _VariantsPricingProfile,
      _VariantsPricingProfileText,
      _Product,
      _TaxClass,
      _ProductDescription_2

}
```
