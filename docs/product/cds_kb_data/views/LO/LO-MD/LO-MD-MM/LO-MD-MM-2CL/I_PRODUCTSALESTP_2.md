---
name: I_PRODUCTSALESTP_2
description: "Productsalestp 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_PRODUCTSALESTP_2

**Productsalestp 2**

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
| `SalesStatus` |  | |  |  |  |  |
| `SalesStatusValidityDate` |  | |  |  |  |  |
| `TransportationGroup` |  | |  |  |  |  |
| `PackagingProductType` |  | |  |  |  |  |
| `AllowedPackagingWeightQty` |  | |  |  |  |  |
| `AllowedPackagingWeightQtyUnit` |  | |  |  |  |  |
| `AllowedPackagingVolumeQty` |  | |  |  |  |  |
| `AllowedPackagingVolumeQtyUnit` |  | |  |  |  |  |
| `MaximumLevelByVolumeInPercent` |  | |  |  |  |  |
| `ExcessWeightToleranceValue` |  | |  |  |  |  |
| `PackggProductIsClosedPackaging` |  | |  |  |  |  |
| `ProductStackingFactor` |  | |  |  |  |  |
| `ProdExcessVolumeToleranceValue` |  | |  |  |  |  |
| `ProductTaxClassification` |  | |  |  |  |  |
| `PricingReferenceProduct` |  | |  |  |  |  |
| `LoadingGroup` |  | |  |  |  |  |
| `StoreSaleEndDate` |  | |  |  |  |  |
| `DistributionCenterSaleEndDate` |  | |  |  |  |  |
| `StoreSaleStartDate` |  | |  |  |  |  |
| `DistrCenterSaleStartDate` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_TransportationGroupText` | | ✓ | | | | |
| `_ProductRetail` | | ✓ | | | | |
| `_TaxClass` | | ✓ | | | | |
| `_PricingReferenceProductText` | | ✓ | | | | |
| `_WeightText` | | ✓ | | | | |
| `_VolumeText` | | ✓ | | | | |
| `_ProductDescription_2` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Sales - TP'
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
define view entity I_ProductSalesTP_2
  as projection on R_ProductSalesTP as ProductSales
{
      @ObjectModel.text.association:  '_ProductDescription_2' 
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
      SalesStatus,
      SalesStatusValidityDate,
      //I_TRANSPORTATIONGROUPTEXT
      @ObjectModel.text.association: '_TransportationGroupText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_TRANSPORTATIONGROUP', element : 'TransportationGroup'} , useAsTemplate: true }]
      TransportationGroup,
      PackagingProductType,

      /* Associations */

      @Semantics.quantity.unitOfMeasure: 'AllowedPackagingWeightQtyUnit'
      AllowedPackagingWeightQty,
      @ObjectModel.text.association: '_WeightText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      AllowedPackagingWeightQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'AllowedPackagingVolumeQtyUnit'
      AllowedPackagingVolumeQty,
      @ObjectModel.text.association: '_VolumeText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      AllowedPackagingVolumeQtyUnit,
      MaximumLevelByVolumeInPercent,
      ExcessWeightToleranceValue,
      @Semantics.booleanIndicator: true
      PackggProductIsClosedPackaging,
      ProductStackingFactor,
      ProdExcessVolumeToleranceValue,


      // --- Retail
      @Feature: 'SW:CMD_API_PRODUCT'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_Taxclass', element : 'TaxClassification'} , useAsTemplate: true }]
      ProductTaxClassification,
      @Feature: 'SW:CMD_API_PRODUCT'
      @ObjectModel.text.association: '_PricingReferenceProductText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
      PricingReferenceProduct,
      // Field not allowed for single article
      //@Feature: 'SW:CMD_API_PRODUCT'
      //VariantsPricingProfile,
      //@Feature: 'SW:CMD_API_PRODUCT'
      //VariantPriceIsAllowed,
      @Feature: 'SW:CMD_API_PRODUCT'     
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_LoadingGroup', element : 'LoadingGroup'} , useAsTemplate: true }]
      LoadingGroup,
      @Feature: 'SW:CMD_API_PRODUCT'
      StoreSaleEndDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      DistributionCenterSaleEndDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      StoreSaleStartDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      DistrCenterSaleStartDate,
      // ---


      _Product : redirected to parent I_ProductTP_2,
      _TransportationGroupText,
      _ProductRetail,
      _TaxClass,
      _PricingReferenceProductText,
      _WeightText,
      _VolumeText,
      _ProductDescription_2
}
```
