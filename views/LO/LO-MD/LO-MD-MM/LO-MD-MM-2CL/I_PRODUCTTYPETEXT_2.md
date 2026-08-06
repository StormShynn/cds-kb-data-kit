---
name: I_PRODUCTTYPETEXT_2
description: Producttypetext 2
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
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTTYPETEXT_2

**Producttypetext 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProductType` | `cast(mtart as producttype preserving type )` |
| key `Language` | `spras` |
| `ProductTypeName` | `cast(mtbez as producttypename preserving type )` |
| `_ProductType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductType` | `I_ProductType_2` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODTYPETEXT2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 1
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ProductType'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name:'ProductTypeText'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY ]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Product Type - Text'

define view I_ProductTypeText_2 
  as select from t134t 
  association [1..1] to I_ProductType_2 as _ProductType
    on $projection.ProductType = _ProductType.ProductType
  association [0..1] to I_Language as _Language      
    on $projection.Language = _Language.Language
{
        @ObjectModel.foreignKey.association: '_ProductType'
        @ObjectModel.text.element: ['ProductTypeName']
    key cast(mtart as producttype preserving type )     as ProductType,
        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language: true
    key spras                                           as Language, 
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #HIGH
        @Semantics.text: true
        cast(mtbez as producttypename preserving type ) as ProductTypeName,
        
        _ProductType,
        _Language
}
```
