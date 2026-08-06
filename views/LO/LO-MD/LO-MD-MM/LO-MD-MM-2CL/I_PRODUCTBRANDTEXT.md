---
name: I_PRODUCTBRANDTEXT
description: Productbrandtext
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
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTBRANDTEXT

**Productbrandtext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProductBrand` | `cast ( brand_id as wrf_brand_id preserving type )` |
| key `Language` | `cast ( language as spras preserving type )` |
| `ProductBrandName` | `brand_descr` |
| `_ProductBrand` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductBrand` | `I_ProductBrand` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Brand - Text'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.entityBuffer.definitionAllowed: true

@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'ProductBrand',   
   usageType:{
   serviceQuality: #A,
   sizeCategory: #M,
   dataClass: #CUSTOMIZING
             },
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   sapObjectNodeType.name:'ProductBrandText'
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE                                  
]
@Analytics.dataExtraction.enabled:true
@VDM.viewType: #BASIC
@Search.searchable: true

define view entity I_ProductBrandText as select from wrf_brands_t
  association [1..1] to I_ProductBrand    as _ProductBrand    on $projection.ProductBrand = _ProductBrand.ProductBrand
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ProductBrand'
  key cast ( brand_id as wrf_brand_id preserving type ) as ProductBrand,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast ( language as spras preserving type ) as Language,
      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      
      brand_descr as ProductBrandName,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _ProductBrand,
      _Language
}
```
