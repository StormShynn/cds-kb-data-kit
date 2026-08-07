---
name: I_PRODUCTDESCRIPTION
description: "Productdescription"
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
  - text-view
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTDESCRIPTION

**Productdescription**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `cast(makt.matnr as productnumber preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProductDescription` |  | |  | `cast(makt.maktx as productdescription preserving type )` |  |  |
| `LanguageISOCode` |  | |  | `cast(_Language.LanguageISOCode as languageisocode preserving type )` |  |  |
| `_Product` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
// Product description active table
@AbapCatalog:{
  sqlViewName: 'IPRDDESCR',
  preserveKey: true,
  compiler.compareFilter: true
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Descriptions'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'Product'
@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #L,
    usageType.dataClass: #MASTER
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture:{
          mapping: [{
            viewElement: ['PRODUCT', 'LANGUAGE'],
            role: #MAIN,
            table: 'MAKT',
            tableElement: ['MATNR', 'SPRAS']
          },
          {
            viewElement: ['LANGUAGE'],
            role: #LEFT_OUTER_TO_ONE_JOIN,
            table: 'T002',
            tableElement: ['SPRAS']
          }]
        }
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY
]
define view I_ProductDescription
  as select from makt
  association [1..1] to I_Product  as _Product  on $projection.Product = _Product.Product

  association [1..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key cast(makt.matnr as productnumber preserving type )                  as Product,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key makt.spras                                                          as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(makt.maktx as productdescription preserving type )             as ProductDescription,

      cast(_Language.LanguageISOCode as languageisocode preserving type ) as LanguageISOCode,
      _Product,
      _Language
      
}
```
