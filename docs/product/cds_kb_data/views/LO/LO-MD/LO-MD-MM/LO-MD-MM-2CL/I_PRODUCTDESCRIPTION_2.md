---
name: I_PRODUCTDESCRIPTION_2
description: "Productdescription 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTDESCRIPTION_2

**Productdescription 2**

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
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Descriptions'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'Product'
@ObjectModel.sapObjectNodeType.name: 'ProductDescription'
@Search.searchable: true
@Analytics:{
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
@Analytics.technicalName: 'IPRDDESCR2'

define view entity I_ProductDescription_2 as select from makt
association [1..1] to I_Product  as _Product  on $projection.Product = _Product.Product
association [1..1] to I_Language as _Language on $projection.Language = _Language.Language
{

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
