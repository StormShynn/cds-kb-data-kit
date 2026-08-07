---
name: I_PRODABCLASSFCTN
description: Prodabclassfctn
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODABCLASSFCTN

**Prodabclassfctn**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaterialABCClassification` | ✓ | |  | `cast(maabc as abcindicator preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Prodabclassfctntxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IABCIND_VH'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'MaterialABCClassification'
@EndUserText.label: 'ABC Indicator values'
@Search.searchable: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #VALUE_HELP
//@Analytics.dataCategory: #DIMENSION
@Analytics:{
   dataCategory: #DIMENSION,
   internalName: #LOCAL
}
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name:'ProdConsumptionValueCategory'

define view I_Prodabclassfctn
  as select from tmabc

  association [0..*] to I_Prodabclassfctntxt as _Text on $projection.MaterialABCClassification = _Text.MaterialABCClassification
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key cast(maabc as abcindicator preserving type ) as MaterialABCClassification,

      _Text
}
```
