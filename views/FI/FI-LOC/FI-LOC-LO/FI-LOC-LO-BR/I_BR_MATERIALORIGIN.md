---
name: I_BR_MATERIALORIGIN
description: "BR Materialorigin"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - material
  - component:FI-LOC-LO-BR
  - lob:Finance
  - bo:Material
---
# I_BR_MATERIALORIGIN

**BR Materialorigin**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_MaterialOrigin` | ✓ | |  | `cast ( domvalue_l as logbr_matorg )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_MaterialOriginText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRMATORG'
@EndUserText.label: 'Brazil Material Origin'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BR_MaterialOrigin'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@Analytics.dataCategory: #DIMENSION 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true 
@Search.searchable: true
@Metadata.allowExtensions:true

define view I_BR_MaterialOrigin as select from dd07l
  association [0..*] to I_BR_MaterialOriginText as _Text on $projection.BR_MaterialOrigin = _Text.BR_MaterialOrigin
{
  @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as logbr_matorg ) as BR_MaterialOrigin, 
  @Consumption.hidden: true
  @Search.defaultSearchElement:true
  @Search.ranking: #HIGH
  dd07l.domvalue_l as DomainValue, 
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
   _Text
}
where domname = 'J_1BMATORG' 
  and as4local = 'A'
```
