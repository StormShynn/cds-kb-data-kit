---
name: I_PRODCOMPONENTBACKFLUSHCODEVH
description: "Prodcomponentbackflushcodevh"
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
  - value-help
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODCOMPONENTBACKFLUSHCODEVH

**Prodcomponentbackflushcodevh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductComponentBackflushCode` | ✓ | |  | `cast ( dd07l.domvalue_l as rgekm )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProdComponentBackflushCodeT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDCMPBKFLSHCD'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Product Component Backflush Code'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'ProductComponentBackflushCode'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.serviceQuality: #A
@Analytics.dataExtraction.enabled: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #ANALYTICAL_DIMENSION ]
@Search.searchable: true
@Consumption.ranked: true
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.sapObjectNodeType.name:'ProductComponentBackflushCode'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */

define view I_ProdComponentBackflushCodeVH 
as select from dd07l 
association [0..*] to I_ProdComponentBackflushCodeT as _Text on $projection.ProductComponentBackflushCode = _Text.ProductComponentBackflushCode
    {
       @ObjectModel.text.association: '_Text'
  key  cast ( dd07l.domvalue_l as rgekm ) as ProductComponentBackflushCode,
       @Consumption.hidden: true
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #HIGH
       dd07l.domvalue_l                  as DomainValue,
       _Text
}
where
      dd07l.domname  = 'RGEKM'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
