---
name: I_MRPGROUP
description: Mrpgroup
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPGROUP

**Mrpgroup**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPGroup` | ✓ | |  | `mtart` |  |  |
| `MRPPlant` | ✓ | |  | `werks` |  |  |
| `_MRPPlant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPPlant` | `I_Plant` | [1..1] |
| `_Text` | `I_MRPGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMRPGROUP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'MRPGroup'
@ObjectModel.semanticKey: ['MRPGroup', 'MRPPlant']
@ObjectModel.sapObjectNodeType.name: 'MRPGroup'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Group'
// CDS view for the key fields of T438M
// For the full set of control parameters see I_MRPGroupControlParameter

define view I_MRPGroup
  as select from t438m as grp

  association [1..1] to I_Plant        as _MRPPlant on  $projection.MRPPlant = _MRPPlant.Plant
  association [0..*] to I_MRPGroupText as _Text     on  $projection.MRPGroup = _Text.MRPGroup 
                                                    and $projection.MRPPlant = _Text.MRPPlant
{
      // Key
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key grp.mtart as MRPGroup,
      @ObjectModel.foreignKey.association: '_MRPPlant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key grp.werks as MRPPlant,

      // Associations
      _MRPPlant,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
};
```
