---
name: I_BOMEXPLOSIONDATE
description: "Bomexplosiondate"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - bom
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_BOMEXPLOSIONDATE

**Bomexplosiondate**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BOMExplosionDateID` | ✓ | |  | `cast(s.sernr as pph_sernr preserving type)` |  |  |
| `BOMExplosionFixedKeyDate` |  | |  | `brutr` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `BOMExplosionDateText` |  | |  | `cast(s.sntxt as pph_sntxt preserving type)` |  |  |
| `IsDeleted` |  | |  | `xloek` |  |  |
| `EffectivityParameterVariant` |  | |  | `techs` |  |  |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Material` | `I_Material` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPPBOMEXPLDATE'
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'BOMExplosionDateID'
@ObjectModel.semanticKey: ['BOMExplosionDateID']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'BOM Explosion Date'

define view entity I_BOMExplosionDate
  as select from snum as s
  association [1..1] to I_Material    as _Material    on $projection.Material = _Material.Material
  association [1..1] to I_Product     as _Product     on $projection.Material = _Product.Product
  association [1..1] to I_Plant       as _Plant       on $projection.Plant = _Plant.Plant
{
      // Key
      @ObjectModel.text.element: ['BOMExplosionDateText']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(s.sernr as pph_sernr preserving type) as BOMExplosionDateID,

      // Other data
      @Semantics.businessDate.at: true
      s.brutr                                    as BOMExplosionFixedKeyDate,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      s.matnr                                    as Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      s.werks                                    as Plant,
      @Semantics.text: true
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      cast(s.sntxt as pph_sntxt preserving type) as BOMExplosionDateText,
      s.xloek                                    as IsDeleted,
      s.techs                                    as EffectivityParameterVariant,

      // Associations
      _Material,
      _Product,
      _Plant
};
```
