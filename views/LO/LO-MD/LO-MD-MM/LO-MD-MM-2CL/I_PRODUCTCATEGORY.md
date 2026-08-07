---
name: I_PRODUCTCATEGORY
description: Productcategory
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
# I_PRODUCTCATEGORY

**Productcategory**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductCategory` | ✓ | |  | `cast ( dd07l.domvalue_l as articlecategory )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IPRODCATV',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL
  }
}
@Analytics.dataCategory: #DIMENSION
@EndUserText.label: 'Product Category Type'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel:{
  representativeKey: 'ProductCategory',
  usageType:{
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #META
  },
  dataCategory: #VALUE_HELP
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction :{
enabled: true
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE,
                                      #ANALYTICAL_DIMENSION
]
@ObjectModel.sapObjectNodeType.name:'ProductCategory'
@Consumption.ranked: true

define view I_ProductCategory
  as select from dd07l
  association [0..*] to I_ProductCategoryText as _Text on $projection.ProductCategory = _Text.ProductCategory

{

       @ObjectModel.text.association: '_Text'
  key  cast ( dd07l.domvalue_l as articlecategory ) as ProductCategory,

       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #HIGH
       @Consumption.hidden: true
       dd07l.domvalue_l                             as DomainValue,
       _Text

}
where
      domname  = 'ATTYP'
  and as4local = 'A'
  and as4vers  = '0000'
```
