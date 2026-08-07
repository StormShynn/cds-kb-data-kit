---
name: I_PRODUCTPLANTINTLTRD
description: Productplantintltrd
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
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTINTLTRD

**Productplantintltrd**

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
| `Plant` | ✓ | |  |  |
| `CountryOfOrigin` |  | |  |  |
| `RegionOfOrigin` |  | |  |  |
| `ConsumptionTaxCtrlCode` |  | |  |  |
| `ExportAndImportProductGroup` |  | |  |  |
| `ProductCASNumber` |  | |  |  |
| `CommoditiyCodeNumberUnit` |  | |  |  |
| `ProdIntlTradeClassification` |  | |  |  |
| `_CountryOfOrigin` | | ✓ | | |
| `_RegionOfOrigin` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_ProductDescription` | | ✓ | | |
| `_CountryOfOriginText` | | ✓ | | |
| `_RegionText` | | ✓ | | |
| `_UnitOfMeasureText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProdPlantIntlTrdExt` | `E_Productplant` | [0..1] |
| `_CountryOfOrigin` | `I_Country` | [0..1] |
| `_RegionOfOrigin` | `I_Region` | [0..1] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductDescription` | `I_ProductDescription_2` | [0..*] |
| `_CountryOfOriginText` | `I_CountryText` | [0..*] |
| `_RegionText` | `I_RegionText` | [0..*] |
| `_UnitOfMeasureText` | `I_UnitOfMeasureText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRDPLNTFRIGNTRD',
  compiler.compareFilter: true,
  preserveKey: true
  }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Intrntionl Trade'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataExtraction: {
        enabled: true,
       delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name:'ProductPlantInternationalTrade'
define view I_ProductPlantIntlTrd
  as select from P_ProductPlantBasic as InternationalTrade

  association [0..1] to E_Productplant as _ProdPlantIntlTrdExt on  $projection.Product = _ProdPlantIntlTrdExt.Product
                                                               and $projection.Plant   = _ProdPlantIntlTrdExt.Plant

  association [0..1] to I_Country      as _CountryOfOrigin     on  $projection.CountryOfOrigin = _CountryOfOrigin.Country
  association [0..1] to I_Region       as _RegionOfOrigin      on  $projection.RegionOfOrigin  = _RegionOfOrigin.Region
                                                               and $projection.CountryOfOrigin = _RegionOfOrigin.Country
  association [1..1] to I_Product      as _Product             on  $projection.Product = _Product.Product
  association [0..*] to I_ProductDescription_2    as _ProductDescription   on  $projection.Product = _ProductDescription.Product
  association [0..*] to I_CountryText             as _CountryOfOriginText  on  $projection.CountryOfOrigin = _CountryOfOriginText.Country
  association [0..*] to I_RegionText              as _RegionText           on  $projection.CountryOfOrigin = _RegionText.Country
                                                                           and $projection.RegionOfOrigin  = _RegionText.Region
  association [0..*] to I_UnitOfMeasureText       as _UnitOfMeasureText    on  $projection.CommoditiyCodeNumberUnit = _UnitOfMeasureText.UnitOfMeasure
{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' },
         useAsTemplate: true                    
        }]
      @ObjectModel.text.association: '_ProductDescription'   
  key InternationalTrade.Product,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_PlantStdVH',
                     element: 'Plant' },
         useAsTemplate: true
        }]
  key InternationalTrade.Plant,
      @ObjectModel.foreignKey.association: '_CountryOfOrigin'
      @ObjectModel.text.association: '_CountryOfOriginText'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CountryVH',
                     element: 'Country' },
         useAsTemplate: true
        }]
      InternationalTrade.CountryOfOrigin,
      @ObjectModel.foreignKey.association: '_RegionOfOrigin'
      @ObjectModel.text.association: '_RegionText'
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_RegionVH',
                     element: 'Region' },
         useAsTemplate: true
        }]
      InternationalTrade.RegionOfOrigin,
      InternationalTrade.ConsumptionTaxCtrlCode,

      // New fields from MDG model, as part of unified API development
      InternationalTrade.ExportAndImportProductGroup,
      InternationalTrade.ProductCASNumber,
      @ObjectModel.text.association: '_UnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      InternationalTrade.CommoditiyCodeNumberUnit,
      InternationalTrade.ProdIntlTradeClassification,


      _CountryOfOrigin,
      _RegionOfOrigin,
      _Product,
      _ProductDescription,
      _CountryOfOriginText,
      _RegionText,
      _UnitOfMeasureText
      

}
```
