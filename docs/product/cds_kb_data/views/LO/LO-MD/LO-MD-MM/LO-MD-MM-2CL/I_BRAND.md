---
name: I_BRAND
description: "Brand"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_BRAND

**Brand**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BrandText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IBRAND',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL
  }
}
@VDM:{
    lifecycle: {
      status: #DEPRECATED,
      successor: 'I_ProductBrand'
 }}
@EndUserText.label: 'Brand'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #DIMENSION

@VDM.viewType: #BASIC
@ObjectModel: {
    compositionRoot: true,
    representativeKey: 'Brand',
    sapObjectNodeType.name: 'ProductBrand',
    usageType: {
      serviceQuality: #A,
      sizeCategory : #M,
      dataClass: #CUSTOMIZING
   },
   dataCategory: #VALUE_HELP
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.ranked: true
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,                                     
                                      #SEARCHABLE_ENTITY,
                                      #VALUE_HELP_PROVIDER,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE
]
@Analytics.dataExtraction.enabled:true

define view I_Brand
  as select from wrf_brands
  association [0..*] to I_BrandText as _Text on $projection.Brand = _Text.Brand
{
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.7
      }
      @ObjectModel.text.association: '_Text'
  key brand_id as Brand,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]     
      _Text
}
```
