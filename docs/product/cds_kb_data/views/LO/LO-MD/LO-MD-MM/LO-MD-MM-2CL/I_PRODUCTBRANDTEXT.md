---
name: I_PRODUCTBRANDTEXT
description: "Productbrandtext"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductBrand` | ✓ | |  | `cast ( brand_id as wrf_brand_id preserving type )` |  |  |
| `Language` | ✓ | |  | `cast ( language as spras preserving type )` |  |  |
| `ProductBrandName` |  | |  | `brand_descr` |  |  |
| `_ProductBrand` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

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
