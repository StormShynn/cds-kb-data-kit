---
name: I_PRODUCTCATEGORYTEXT
description: "Productcategorytext"
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
  - text-view
  - product
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTCATEGORYTEXT

**Productcategorytext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `ProductCategory` | ✓ | |  | `cast ( domvalue_l as articlecategory )` |  |  |
| `Name` |  | |  | `cast ( ddtext as articlecategorytext preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IPRODCATTXTV',
  preserveKey: true,
  compiler.compareFilter: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 1
  }
}
@EndUserText.label: 'Product Category Type - Text'
@Search: {
  searchable: true
}
//@Analytics: { dataCategory: #DIMENSION } I_ProductCategory has the dimension
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'ProductCategory'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name:'ProductCategoryText'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction :{
enabled: true
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE
]

define view I_ProductCategoryText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

  //  association [0..1] to I_ProductCategory as _ProductCategory on $projection.ProductCategory = _ProductCategory.ProductCategory

{

      @Semantics.language
  key cast( ddlanguage as spras preserving type )            as Language,

      //      @ObjectModel.foreignKey.association: '_ProductCategory'


      //  key cast ( substring( domvalue_l, 1, 2 ) as articlecategory preserving type )     as ProductCategory,
  key cast ( domvalue_l as articlecategory )                 as ProductCategory,

      @Semantics.text:true
      @Search: {
      defaultSearchElement: true,
      fuzzinessThreshold: 0.8,
      ranking: #LOW
      }
      //      cast ( substring ( ddtext, 1, 60 ) as val_text )                              as Name,
      cast ( ddtext as articlecategorytext preserving type ) as Name,

      //      _ProductCategory,

      _Language

}
where
      domname  = 'ATTYP'
  and as4local = 'A'
```
