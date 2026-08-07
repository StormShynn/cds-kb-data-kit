---
name: I_PRODUCTPROFILECODE
description: Productprofilecode
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
# I_PRODUCTPROFILECODE

**Productprofilecode**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductProfileCode` | ✓ | |  | `cast(t141.mmsta as profilecode preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProductProfileCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Profile Code'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.entityBuffer.definitionAllowed: true

@ObjectModel: {
usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
},
  representativeKey: 'ProductProfileCode',
  dataCategory: #VALUE_HELP,
  sapObjectNodeType.name:'ProductProfileCode',
  modelingPattern:#NONE
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #VALUE_HELP_PROVIDER,
                           #SEARCHABLE_ENTITY,
                           #ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE
  ]

@Analytics: {
  dataCategory: #DIMENSION ,
  internalName:#LOCAL,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture.automatic: true
  }
}

@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true
define view entity I_ProductProfileCode as select from t141
association [0..*] to I_ProductProfileCodeText as _Text on $projection.ProductProfileCode = _Text.ProductProfileCode
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key cast(t141.mmsta as profilecode preserving type ) as ProductProfileCode,

      _Text
}
```
