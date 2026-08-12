---
name: I_PRODUCTTEXT
description: "Producttext"
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
# I_PRODUCTTEXT

**Producttext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProductName` |  | |  | `cast(makt.maktx as productdescription preserving type )` |  |  |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODTEXT'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product - Text'
@ObjectModel.representativeKey: 'Product'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY
]

define view I_ProductText
  as select from makt
  association [1..1] to I_Product as _Product on $projection.Product = _Product.Product
{
  key makt.matnr                                              as Product,
      @Semantics.language: true
  key makt.spras                                              as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      cast(makt.maktx as productdescription preserving type ) as ProductName,
      _Product
}
```
