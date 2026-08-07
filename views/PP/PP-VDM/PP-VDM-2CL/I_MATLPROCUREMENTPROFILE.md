---
name: I_MATLPROCUREMENTPROFILE
description: "Matlprocurementprofile"
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
# I_MATLPROCUREMENTPROFILE

**Matlprocurementprofile**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialProcurementProfile` | ✓ | |  | `cast(prfl.sobsl as pph_sobsl preserving type)` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `MaterialProcurementCategory` |  | |  | `cast(prfl.beskz as pph_beskz preserving type)` |  |  |
| `MaterialProcurementExtType` |  | |  | `cast(prfl.sobes as pph_esobs preserving type)` |  |  |
| `SupplyingOrProductionPlant` |  | |  | `cast(prfl.wrk02 as vdm_wrk02 preserving type)` |  |  |
| `IssuingPlant` |  | |  | `rewrk` |  |  |
| `Language` |  | |  | `$session.system_language` |  |  |
| `MaterialIsDirectlyProduced` |  | |  | `clcor` |  |  |
| `MaterialIsDirectlyProcured` |  | |  | `dirpr` |  |  |
| `IsPhantomItem` |  | |  | `dumps` |  |  |
| `IsWithdrawnFrmAlternativePlant` |  | |  | `rewfg` |  |  |
| `MRPStockTransfSelectionControl` |  | |  | `umldb` |  |  |
| `MatlIsRlvtForMultiLvlSubcontrg` |  | |  | `mlscr` |  |  |
| `_Plant` | | ✓ | | | | |
| `_SupplyingOrProductionPlant` | | ✓ | | | | |
| `_IssuingPlant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_MaterialProcurementCategory` | | ✓ | | | | |
| `_MaterialProcurementExtType` | | ✓ | | | | |
| `_MaterialProcurementExtType_2` | | ✓ | | | | |
| `_MaterialProcurementExtType_3` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_SupplyingOrProductionPlant` | `I_Plant` | [0..1] |
| `_IssuingPlant` | `I_Plant` | [0..1] |
| `_Text` | `I_MatlProcurementProfileText` | [0..*] |
| `_MaterialProcurementCategory` | `I_MatlProcurementCategory` | [1..1] |
| `_MaterialProcurementExtType` | `I_MatlProcurementExternalType` | [0..*] |
| `_MaterialProcurementExtType_2` | `I_MatlProcurementExternalType` | [0..1] |
| `_MaterialProcurementExtType_3` | `I_MatlProcmtExternalType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMATLPROCMPRFL'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'MaterialProcurementProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Material Procurement Profile'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_MatlProcurementProfile
  as select from t460a as prfl
  association [1..1] to I_Plant                       as _Plant                        on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Plant                       as _SupplyingOrProductionPlant   on  $projection.SupplyingOrProductionPlant = _SupplyingOrProductionPlant.Plant  
  association [0..1] to I_Plant                       as _IssuingPlant                 on  $projection.IssuingPlant = _IssuingPlant.Plant  
  association [0..*] to I_MatlProcurementProfileText  as _Text                         on  $projection.MaterialProcurementProfile  = _Text.MaterialProcurementProfile
                                                                                       and $projection.Plant                       = _Text.Plant
  association [1..1] to I_MatlProcurementCategory     as _MaterialProcurementCategory  on  $projection.MaterialProcurementCategory = _MaterialProcurementCategory.MaterialProcurementCategory
  association [0..*] to I_MatlProcurementExternalType as _MaterialProcurementExtType   on  $projection.MaterialProcurementExtType  = _MaterialProcurementExtType.MaterialProcurementExtType
  association [0..1] to I_MatlProcurementExternalType as _MaterialProcurementExtType_2 on  $projection.MaterialProcurementExtType  = _MaterialProcurementExtType_2.MaterialProcurementExtType
                                                                                       and $projection.Language                    = _MaterialProcurementExtType_2.Language
  association [0..1] to I_MatlProcmtExternalType      as _MaterialProcurementExtType_3 on  $projection.MaterialProcurementExtType  = _MaterialProcurementExtType_3.MaterialProcurementExtType

{
      // Key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.association: '_Text'
  key cast(prfl.sobsl as pph_sobsl preserving type) as MaterialProcurementProfile,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_Plant'
  key prfl.werks                                    as Plant,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MatlProcurementCategory', element: 'MaterialProcurementCategory' } } ]
      @ObjectModel.foreignKey.association: '_MaterialProcurementCategory'
      cast(prfl.beskz as pph_beskz preserving type) as MaterialProcurementCategory,
      @ObjectModel.foreignKey.association: '_MaterialProcurementExtType_3'
      cast(prfl.sobes as pph_esobs preserving type) as MaterialProcurementExtType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_SupplyingOrProductionPlant'      
      cast(prfl.wrk02 as vdm_wrk02 preserving type) as SupplyingOrProductionPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      @ObjectModel.foreignKey.association: '_IssuingPlant'      
      prfl.rewrk                                    as IssuingPlant,

      // for successor assoc. only
      @Consumption.hidden: true
      $session.system_language                      as Language,

      // Attributes
      prfl.clcor as MaterialIsDirectlyProduced,
      prfl.dirpr as MaterialIsDirectlyProcured,
      prfl.dumps as IsPhantomItem,
      prfl.rewfg as IsWithdrawnFrmAlternativePlant,
      prfl.umldb as MRPStockTransfSelectionControl,
      prfl.mlscr as MatlIsRlvtForMultiLvlSubcontrg,

      // Associations
      _Plant,
      _IssuingPlant,
      _SupplyingOrProductionPlant,
      _MaterialProcurementCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaterialProcurementExtType_3'
      _MaterialProcurementExtType,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaterialProcurementExtType_3'
      _MaterialProcurementExtType_2,
      _MaterialProcurementExtType_3,
      _Text
};
```
