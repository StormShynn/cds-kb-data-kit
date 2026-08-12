---
name: I_MRPAREA
description: "Mrparea"
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
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPAREA

**Mrparea**

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
| `MRPArea` | ✓ | |  | `berid` |  |  |
| `MRPAreaCategory` |  | |  | `cast(mdlv.berty as mrpareacategory preserving type)` |  |  |
| `MRPAreaPlant` |  | |  | `cast(mdlv.werzg as werzg preserving type)` |  |  |
| `MRPAreaText` |  | |  | `bertx` |  |  |
| `ReceivingStorageLocation` |  | |  | `ortzg` |  |  |
| `MRPAreaBusinessType` |  | |  | `spe_bntyp` |  |  |
| `MRPAreaProfile` |  | |  | `mdma_profile` |  |  |
| `_MRPAreaCategory` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPAreaCategory` | `I_MRPAreaCategory` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPPMRPAREA'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'MRPArea'
@ObjectModel.semanticKey: ['MRPArea']
@ObjectModel.sapObjectNodeType.name: 'MRPArea'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Area'

define view entity I_MRPArea
  as select from mdlv as mdlv

  association [1..1] to I_MRPAreaCategory as _MRPAreaCategory on $projection.MRPAreaCategory = _MRPAreaCategory.MRPAreaCategory
  association [1..1] to I_Plant           as _Plant           on $projection.MRPAreaPlant = _Plant.Plant
  association [0..1] to I_StorageLocation as _StorageLocation on $projection.MRPAreaPlant             = _StorageLocation.Plant and
                                                                 $projection.ReceivingStorageLocation = _StorageLocation.StorageLocation 
{
      // Key
      @ObjectModel.text.element: ['MRPAreaText']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key mdlv.berid        as MRPArea,

      // Attributes
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaCategory', element: 'MRPAreaCategory' } } ]      
      @ObjectModel.foreignKey.association: '_MRPAreaCategory'
      cast(mdlv.berty   as mrpareacategory preserving type) as MRPAreaCategory,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
      cast(mdlv.werzg  as werzg preserving type)           as MRPAreaPlant,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      mdlv.bertx        as MRPAreaText,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' } } ]
      @ObjectModel.foreignKey.association: '_StorageLocation'
      mdlv.ortzg        as ReceivingStorageLocation,
      mdlv.spe_bntyp    as MRPAreaBusinessType,
      mdlv.mdma_profile as MRPAreaProfile,

      // Associations
      _MRPAreaCategory,
      _Plant,
      _StorageLocation
};
```
