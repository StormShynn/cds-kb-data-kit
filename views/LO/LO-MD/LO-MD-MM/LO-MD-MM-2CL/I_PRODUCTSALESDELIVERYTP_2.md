---
name: I_PRODUCTSALESDELIVERYTP_2
description: Productsalesdeliverytp 2
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
  - delivery
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTSALESDELIVERYTP_2

**Productsalesdeliverytp 2**

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
| `ProductSalesOrg` | ✓ | |  |  |  |  |
| `ProductDistributionChnl` | ✓ | |  |  |  |  |
| `MinimumOrderQuantity` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `PriceSpecificationProductGroup` |  | |  |  |  |  |
| `AccountDetnProductGroup` |  | |  |  |  |  |
| `DeliveryNoteProcMinDelivQty` |  | |  |  |  |  |
| `ItemCategoryGroup` |  | |  |  |  |  |
| `DeliveryQuantityUnit` |  | |  |  |  |  |
| `DeliveryQuantity` |  | |  |  |  |  |
| `ProductSalesStatus` |  | |  |  |  |  |
| `ProductSalesStatusValidityDate` |  | |  |  |  |  |
| `SalesMeasureUnit` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `FirstSalesSpecProductGroup` |  | |  |  |  |  |
| `SecondSalesSpecProductGroup` |  | |  |  |  |  |
| `ThirdSalesSpecProductGroup` |  | |  |  |  |  |
| `FourthSalesSpecProductGroup` |  | |  |  |  |  |
| `FifthSalesSpecProductGroup` |  | |  |  |  |  |
| `LogisticsStatisticsGroup` |  | |  |  |  |  |
| `VolumeRebateGroup` |  | |  |  |  |  |
| `CashDiscountIsDeductible` |  | |  |  |  |  |
| `ProductCommissionGroup` |  | |  |  |  |  |
| `PricingReferenceProduct` |  | |  |  |  |  |
| `RoundingProfile` |  | |  |  |  |  |
| `VariableSalesUnitIsNotAllowed` |  | |  |  |  |  |
| `ProductHasAttributeID01` |  | |  |  |  |  |
| `ProductHasAttributeID02` |  | |  |  |  |  |
| `ProductHasAttributeID03` |  | |  |  |  |  |
| `ProductHasAttributeID04` |  | |  |  |  |  |
| `ProductHasAttributeID05` |  | |  |  |  |  |
| `ProductHasAttributeID06` |  | |  |  |  |  |
| `ProductHasAttributeID07` |  | |  |  |  |  |
| `ProductHasAttributeID08` |  | |  |  |  |  |
| `ProductHasAttributeID09` |  | |  |  |  |  |
| `ProductHasAttributeID10` |  | |  |  |  |  |
| `ProdIsEntlmntRlvt` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `ProductHierarchy` |  | |  |  |  |  |
| `ProdExtAssortmentPriority` |  | |  |  |  |  |
| `AssortmentGrade` |  | |  |  |  |  |
| `StoreListingProcedure` |  | |  |  |  |  |
| `DistrCenterListingProcedure` |  | |  |  |  |  |
| `StoreListingStartDate` |  | |  |  |  |  |
| `StoreListingEndDate` |  | |  |  |  |  |
| `DistrCenterListingStartDate` |  | |  |  |  |  |
| `DistrCenterListingEndDate` |  | |  |  |  |  |
| `StoreSaleStartDate` |  | |  |  |  |  |
| `StoreSaleEndDate` |  | |  |  |  |  |
| `DistrCenterSaleStartDate` |  | |  |  |  |  |
| `DistributionCenterSaleEndDate` |  | |  |  |  |  |
| `ProductUnitGroup` |  | |  |  |  |  |
| `StoreOrderMaxDelivQty` |  | |  |  |  |  |
| `PriceFixingCategory` |  | |  |  |  |  |
| `CompetitionPressureCategory` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_ProdSalesDeliverySalesTax` | | ✓ | | | | |
| `_ProdSlsDelivPointOfSale` | | ✓ | | | | |
| `_ProductSalesDeliveryText` | | ✓ | | | | |
| `_ProductDescription_2` | | ✓ | | | | |
| `_DeliveryQuantityUnitText` | | ✓ | | | | |
| `_SalesUnitText` | | ✓ | | | | |
| `_PricingReferenceProduct` | | ✓ | | | | |
| `_BaseUnitOfMeasureText` | | ✓ | | | | |
| `_ProdExtAssortmentPriorityText` | | ✓ | | | | |
| `_PriceFixingCategoryText` | | ✓ | | | | |
| `_CompetitionPressureCategoryT` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Sales Delivery - TP'
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
define view entity I_ProductSalesDeliveryTP_2
  as projection on R_ProductSalesDeliveryTP as ProductSalesDelivery
{
      @ObjectModel.text.association: '_ProductDescription_2'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key ProductSalesOrg,
  key ProductDistributionChnl,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MinimumOrderQuantity,
      SupplyingPlant,
      PriceSpecificationProductGroup,
      AccountDetnProductGroup,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      DeliveryNoteProcMinDelivQty,
      ItemCategoryGroup,
      @ObjectModel.text.association: '_DeliveryQuantityUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      DeliveryQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'DeliveryQuantityUnit'
      DeliveryQuantity,
      ProductSalesStatus,
      ProductSalesStatusValidityDate,
      @ObjectModel.text.association: '_SalesUnitText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      SalesMeasureUnit,
      @Semantics.booleanIndicator: true
      IsMarkedForDeletion,
      FirstSalesSpecProductGroup,
      SecondSalesSpecProductGroup,
      ThirdSalesSpecProductGroup,
      FourthSalesSpecProductGroup,
      FifthSalesSpecProductGroup,
      LogisticsStatisticsGroup,
      VolumeRebateGroup,
      @Semantics.booleanIndicator: true
      CashDiscountIsDeductible,
      ProductCommissionGroup,
      @ObjectModel.text.association: '_PricingReferenceProduct'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
      PricingReferenceProduct,
      RoundingProfile,
      @Semantics.booleanIndicator: true
      VariableSalesUnitIsNotAllowed,
      @Semantics.booleanIndicator: true
      ProductHasAttributeID01,
      @Semantics.booleanIndicator: true
      ProductHasAttributeID02,
      @Semantics.booleanIndicator: true
      ProductHasAttributeID03,
      @Semantics.booleanIndicator: true
      ProductHasAttributeID04,
      @Semantics.booleanIndicator: true
      ProductHasAttributeID05,
      @Semantics.booleanIndicator: true
      ProductHasAttributeID06,
      @Semantics.booleanIndicator: true
      ProductHasAttributeID07,
      @Semantics.booleanIndicator: true
      ProductHasAttributeID08,
      @Semantics.booleanIndicator: true
      ProductHasAttributeID09,
      @Semantics.booleanIndicator: true
      ProductHasAttributeID10,
      @Semantics.booleanIndicator: true
      ProdIsEntlmntRlvt,
      @ObjectModel.text.association: '_BaseUnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,
      ProductHierarchy,
      //-----------------------------------
      // later use switch RFM_PRODUCT_MASTER_SIMPL
      @Feature: 'SW:CMD_API_PRODUCT'
      @ObjectModel.text.association: '_ProdExtAssortmentPriorityText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_PRODEXTASSTMTPRIORITY', element : 'ProdExtAssortmentPriority'} , useAsTemplate: true }]
      ProdExtAssortmentPriority,
      @Feature: 'SW:CMD_API_PRODUCT'
      AssortmentGrade,
      @Feature: 'SW:CMD_API_PRODUCT'
      StoreListingProcedure,
      @Feature: 'SW:CMD_API_PRODUCT'
      DistrCenterListingProcedure,
      @Feature: 'SW:CMD_API_PRODUCT'
      StoreListingStartDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      StoreListingEndDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      DistrCenterListingStartDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      DistrCenterListingEndDate,
      // ----------------------------------
      @Feature: 'SW:CMD_API_PRODUCT'
      StoreSaleStartDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      StoreSaleEndDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      DistrCenterSaleStartDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      DistributionCenterSaleEndDate,
      @Feature: 'SW:CMD_API_PRODUCT'
      ProductUnitGroup,
      @Feature: 'SW:CMD_API_PRODUCT'
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      StoreOrderMaxDelivQty,
      @Feature: 'SW:CMD_API_PRODUCT'
      @ObjectModel.text.association: '_PriceFixingCategoryText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_PRICEFIXINGCATEGORY', element : 'PriceFixingCategory'} , useAsTemplate: true }]
      PriceFixingCategory,
      @Feature: 'SW:CMD_API_PRODUCT'
      @ObjectModel.text.association: '_CompetitionPressureCategoryT'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CompetitionPressureCategory', element : 'CompetitionPressureCategory'} , useAsTemplate: true }]
      CompetitionPressureCategory,


      /* Associations */
      _Product                   : redirected to parent I_ProductTP_2,
      _ProdSalesDeliverySalesTax : redirected to composition child I_ProdSlsDeliverySalesTaxTP_2,
      _ProdSlsDelivPointOfSale   : redirected to composition child I_ProdSlsDelivPointOfSaleTP_2,
      _ProductSalesDeliveryText  : redirected to composition child I_ProductSalesDeliveryTextTP_2,
      _ProductDescription_2,
      _DeliveryQuantityUnitText,
      _SalesUnitText,
      _PricingReferenceProduct,
      _BaseUnitOfMeasureText,
      _ProdExtAssortmentPriorityText,
      _PriceFixingCategoryText,
      _CompetitionPressureCategoryT
}
```
