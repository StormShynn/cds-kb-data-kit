---
name: I_PRODUCTBRAND
description: "Productbrand"
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
# I_PRODUCTBRAND

**Productbrand**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductBrand` | ✓ | |  | `brand_id` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductBrandText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Product Brand'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.entityBuffer.definitionAllowed: true
@ObjectModel: {
    compositionRoot: true,
    representativeKey: 'ProductBrand',
    sapObjectNodeType.name: 'ProductBrand',
    usageType: {
      serviceQuality: #A,
      sizeCategory : #M,
      dataClass: #CUSTOMIZING
   },
   dataCategory: #VALUE_HELP,
   modelingPattern: #VALUE_HELP_PROVIDER
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,                                     
                                      #SEARCHABLE_ENTITY,
                                      #VALUE_HELP_PROVIDER,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE
]
@Analytics : { internalName:#LOCAL,
               dataCategory: #DIMENSION,
               dataExtraction.enabled:true }

@VDM.viewType: #BASIC               
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.ranked: true

define view entity I_ProductBrand
  as select from wrf_brands
  association [0..*] to I_ProductBrandText as _Text on $projection.ProductBrand = _Text.ProductBrand
{
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.7
      }
      @ObjectModel.text.association: '_Text'
  key brand_id as ProductBrand,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]     
      _Text
}
```
