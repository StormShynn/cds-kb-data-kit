---
name: I_MRPAREASTORAGELOCATION
description: Mrpareastoragelocation
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
# I_MRPAREASTORAGELOCATION

**Mrpareastoragelocation**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MRPArea` | ✓ | |  | `berid` |
| `MRPAreaPlant` | ✓ | |  | `werks` |
| `MRPAreaStorageLocation` | ✓ | |  | `lgort` |
| `_MRPArea` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_StorageLocation` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPArea` | `I_MRPArea` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMRPAREASTORLOC'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'MRPArea'
@ObjectModel.sapObjectNodeType.name: 'MRPAreaStorageLocation'
@ObjectModel.semanticKey: ['MRPArea', 'MRPAreaPlant', 'MRPAreaStorageLocation']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Area Storage Location'

define view I_MRPAreaStorageLocation
  as select from mdlg as mdlg
         
  association [1..1] to I_MRPArea         as _MRPArea         on $projection.MRPArea = _MRPArea.MRPArea
  association [1..1] to I_Plant           as _Plant           on $projection.MRPAreaPlant = _Plant.Plant
  association [0..1] to I_StorageLocation as _StorageLocation on $projection.MRPAreaPlant = _StorageLocation.Plant and
                                                                 $projection.MRPAreaStorageLocation = _StorageLocation.StorageLocation
{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' } } ]
--    @ObjectModel.foreignKey.association: '_MRPArea'
  key mdlg.berid     as MRPArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
  key mdlg.werks     as MRPAreaPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' } } ]
      @ObjectModel.foreignKey.association: '_StorageLocation'
  key mdlg.lgort     as MRPAreaStorageLocation,

      // Associations
      _MRPArea,
      _Plant,
      _StorageLocation
};
```
