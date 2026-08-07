---
name: I_BR_CNAE
description: BR Cnae
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
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CNAE

**BR Cnae**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_CNAE` | ✓ | | `_BR_CNAE` | `j_1bcnae` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_CNAEText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRCNAE'
@EndUserText.label: 'Brazilian CNAE'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'BR_CNAE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@AbapCatalog.preserveKey:true 
@Analytics.dataCategory: #DIMENSION 
@Analytics.internalName: #LOCAL
@Search.searchable: true
@Consumption.ranked: true

define view I_BR_CNAE as select from j_1btcnae as _BR_CNAE
    association [0..*] to I_BR_CNAEText as _Text on $projection.BR_CNAE = _Text.BR_CNAE
{
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement:true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  key _BR_CNAE.j_1bcnae as BR_CNAE,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
```
