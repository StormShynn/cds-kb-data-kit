---
name: I_BRANDTEXT
description: "Brandtext"
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
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_BRANDTEXT

**Brandtext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Brand` | ✓ | |  | `brand_id` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `BrandName` |  | |  | `brand_descr` |  |  |
| `_Brand` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Brand` | `I_Brand` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IBRANDTEXT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL
  }
 }
@EndUserText.label: 'Brand - Text'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM:{
    lifecycle: {
      status: #DEPRECATED,
      successor: 'I_ProductBrandText'
 }}
 
@VDM.viewType: #BASIC
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'Brand',
    usageType: {
      serviceQuality: #A,
      sizeCategory : #M,
      dataClass: #CUSTOMIZING
   }
}

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE                                  
]
@Analytics.dataExtraction.enabled:true

define view I_BrandText
  as select from wrf_brands_t
  association [1..1] to I_Brand    as _Brand    on $projection.Brand = _Brand.Brand
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Brand'
  key brand_id    as Brand,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language    as Language,
      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      
      brand_descr as BrandName,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Brand,
      _Language
}
```
