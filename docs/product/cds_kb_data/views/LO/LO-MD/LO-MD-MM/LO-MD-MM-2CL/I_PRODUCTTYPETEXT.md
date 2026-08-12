---
name: I_PRODUCTTYPETEXT
description: "Producttypetext"
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
# I_PRODUCTTYPETEXT

**Producttypetext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductType` | ✓ | |  | `cast(t134t.mtart as producttype preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MaterialTypeName` |  | |  | `cast(t134t.mtbez as producttypename preserving type )` |  |  |
| `_ProductType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductType` | `I_Producttype` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IPRODTYPTXT',
  preserveKey: true,
  compiler.compareFilter: true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 1
  }
 }
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'I_ProductTypeText_2'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Type - Text'
@ObjectModel:{
  dataCategory: #TEXT,
  representativeKey: 'ProductType',
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY,
                           #LANGUAGE_DEPENDENT_TEXT,
                           #EXTRACTION_DATA_SOURCE
  ],
  usageType:{
    serviceQuality: #A,
    sizeCategory : #L,
    dataClass: #CUSTOMIZING
  }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
define view I_ProductTypeText
  as select from t134t

  association [0..1] to I_Producttype as _ProductType on $projection.ProductType = _ProductType.ProductType
  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_ProductType'
  key cast(t134t.mtart as producttype preserving type )     as ProductType,
      @Semantics.language: true
  key t134t.spras                                           as Language,
      @Semantics.text: true
      @Search:{
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #LOW
      }
      @EndUserText.label: 'Product Type Description'
      cast(t134t.mtbez as producttypename preserving type ) as MaterialTypeName,

      _Language,
      _ProductType
}
```
