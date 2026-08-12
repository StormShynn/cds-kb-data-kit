---
name: I_PRODUCTVH_2
description: "Productvh 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_PRODUCTVH_2

**Productvh 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `cast (Product as productnumber preserving type )` |  |  |
| `ProductDescription` |  | |  | `_Text[1: Language=$session.system_language].ProductDescription` |  |  |
| `ProductExternalID` |  | |  |  |  |  |
| `ProductType` |  | |  | `cast(ProductType as producttype preserving type )` |  |  |
| `ProductGroup` |  | |  | `cast (ProductGroup as productgroup preserving type )` |  |  |
| `BaseUnit` |  | |  | `cast( BaseUnit as meins )` |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `IsBatchManagementRequired` |  | |  |  |  |  |
| `ProductManufacturerNumber` |  | |  |  |  |  |
| `ArticleCategory` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_ProductTypeText` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ProductGroupText` | | ✓ | | | | |
| `_BaseUnitText` | | ✓ | | | | |
| `_ProductCategoryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductDescription_2` | [0..*] |
| `_ProductType` | `I_ProductType_2` | [0..1] |
| `_ProductTypeText` | `I_ProductTypeText` | [0..*] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_ProductGroupText` | `I_ProductGroupText` | [0..*] |
| `_BaseUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_ProductExt` | `E_Product` | [0..1] |
| `_ProductCategoryText` | `I_ProductCategoryText` | [0..*] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory: #VALUE_HELP
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Product Value Help'
@Search.searchable: true
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.representativeKey: 'Product'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #XXL
@ObjectModel.usageType.dataClass: #MASTER
@AccessControl.privilegedAssociations: ['_Text']
@Metadata.ignorePropagatedAnnotations: true
@Consumption.ranked: true

define view entity I_ProductVH_2
  as select from I_Product
  association [0..*] to I_ProductDescription_2 as _Text                on $projection.Product = _Text.Product
  association [0..1] to I_ProductType_2        as _ProductType         on $projection.ProductType = _ProductType.ProductType
  association [0..*] to I_ProductTypeText      as _ProductTypeText     on $projection.ProductType = _ProductTypeText.ProductType
  association [0..1] to I_ProductGroup_2       as _ProductGroup        on $projection.ProductGroup = _ProductGroup.ProductGroup
  association [0..*] to I_ProductGroupText     as _ProductGroupText    on $projection.ProductGroup = _ProductGroupText.MaterialGroup
  association [0..*] to I_UnitOfMeasureText    as _BaseUnitText        on $projection.BaseUnit = _BaseUnitText.UnitOfMeasure
  association [0..1] to E_Product              as _ProductExt          on $projection.Product = _ProductExt.Product
  association [0..*] to I_ProductCategoryText  as _ProductCategoryText on $projection.ArticleCategory = _ProductCategoryText.ProductCategory
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
      @EndUserText.label: 'Product from label'
  key cast (Product as productnumber preserving type )               as Product,
      _Text,
      _Text[1: Language=$session.system_language].ProductDescription as ProductDescription,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @EndUserText.label: 'External Product ID'
      @UI.hidden: true
      ProductExternalID,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      @ObjectModel.text.association: '_ProductTypeText'
      cast(ProductType as producttype preserving type )              as ProductType,
      @Consumption.hidden: true //only for DCL
      _ProductType,
      @Consumption.filter.hidden: true
      _ProductTypeText,


      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      @ObjectModel.text.association: '_ProductGroupText'
      cast (ProductGroup as productgroup preserving type )           as ProductGroup,
      @Consumption.hidden: true //only for DCL
      _ProductGroup,
      @Consumption.filter.hidden: true
      _ProductGroupText,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #LOW
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'}, useAsTemplate: true }]
      @ObjectModel.text.association: '_BaseUnitText'
      cast( BaseUnit as meins )                                      as BaseUnit,
      @Consumption.filter.hidden: true
      _BaseUnitText,
      @Consumption.hidden: true
      AuthorizationGroup,
      IsBatchManagementRequired,
      ProductManufacturerNumber,
      @ObjectModel.text.association: '_ProductCategoryText'
      ArticleCategory,
      @Consumption.filter.hidden: true
      _ProductCategoryText

}
where
  IsMarkedForDeletion = ''
```
