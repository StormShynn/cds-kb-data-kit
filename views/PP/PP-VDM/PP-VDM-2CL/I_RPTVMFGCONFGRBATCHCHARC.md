---
name: I_RPTVMFGCONFGRBATCHCHARC
description: Rptvmfgconfgrbatchcharc
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
  - batch
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_RPTVMFGCONFGRBATCHCHARC

**Rptvmfgconfgrbatchcharc**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RepetitiveMfgConfirmation` | ✓ | |  |  |
| `Plant` | ✓ | |  | `cast(Batch.Plant as werks_bp preserving type)` |
| `Material` | ✓ | |  | `cast(Batch.Material as matnr preserving type)` |
| `Batch` | ✓ | |  |  |
| `CharcInternalID` | ✓ | |  |  |
| `ClfnCharcValuePositionNumber` | ✓ | |  | `CharcValuePositionNumber` |
| `DefinitionOfBatchLevel` |  | |  |  |
| `BatchIsMarkedForDeletion` |  | |  |  |
| `ClfnObjectTable` |  | |  |  |
| `ClassType` |  | |  | `cast(CharcVal.ClassType as klassenart preserving type)` |
| `ClfnObjectType` |  | |  |  |
| `$session.system_date).Characteristic` |  | |  | `CharcVal._Characteristic(P_KeyDate: $session.system_date).Characteristic` |
| `CharcValue` |  | |  |  |
| `_RepetitiveMfgConfirmation` | | ✓ | | |
| `_Material` | | ✓ | | |
| `_BatchPlant` | | ✓ | | |
| `_Batch` | | ✓ | | |
| `_ClassType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RepetitiveMfgConfirmation` | `I_RepetitiveMfgConfirmation` | [1..1] |
| `_Material` | `I_Product` | [1..1] |
| `_BatchPlant` | `I_Plant` | [1..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_ClassType` | `I_ClfnClassTypeBasic` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'RptvMfgConfBatchCharc'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Batch Characteristics of Confirmation in Repetitive Mfg'

define view entity I_RptvMfgConfGRBatchCharc
  as select from           I_RepetitiveMfgConfirmation as Conf
    left outer to one join I_Batch                     as Batch on  Batch.Plant    = Conf.Plant
                                                                and Batch.Material = Conf.Product
                                                                and Batch.Batch    = Conf.ReceivingBatch
                                                                and Batch.ClfnObjectInternalID != '000000000000000000'
    left outer to many join I_ClfnObjectCharcValForKeyDate(P_KeyDate: $session.system_date) as CharcVal on  CharcVal.ClfnObjectInternalID = Batch.ClfnObjectInternalID
                                                                                                        and CharcVal.ClfnObjectInternalID != '000000000000000000'

    association [1..1] to I_RepetitiveMfgConfirmation as _RepetitiveMfgConfirmation on  $projection.RepetitiveMfgConfirmation = _RepetitiveMfgConfirmation.RepetitiveMfgConfirmation
    association [1..1] to I_Product                   as _Material                  on  $projection.Material = _Material.Product
    association [1..1] to I_Plant                     as _BatchPlant                on  $projection.Plant = _BatchPlant.Plant
    association [0..1] to I_Batch                     as _Batch                     on  $projection.Plant    = _Batch.Plant
                                                                                    and $projection.Material = _Batch.Material
                                                                                    and $projection.Batch    = _Batch.Batch
    association [0..1] to I_ClfnClassTypeBasic        as _ClassType                 on  $projection.ClassType = _ClassType.ClassType
{
      // Key
      @ObjectModel.foreignKey.association: '_RepetitiveMfgConfirmation'
  key Conf.RepetitiveMfgConfirmation,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
  key cast(Batch.Plant as werks_bp preserving type) as Plant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
  key cast(Batch.Material as matnr preserving type) as Material,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' } } ]
  key Batch.Batch,
      @ObjectModel.foreignKey.association: '_Characteristic'
  key CharcVal.CharcInternalID,
  --  representative key
  key CharcVal.CharcValuePositionNumber as ClfnCharcValuePositionNumber,

      // Batch data
      Batch.DefinitionOfBatchLevel,
      Batch.BatchIsMarkedForDeletion,

      // Characteristics
      CharcVal.ClfnObjectTable,
      @ObjectModel.foreignKey.association: '_ClassType'
      cast(CharcVal.ClassType as klassenart preserving type) as ClassType,
      CharcVal.ClfnObjectType,
      CharcVal._Characteristic(P_KeyDate: $session.system_date).Characteristic,
      CharcVal.CharcValue,

      // Associations
      _RepetitiveMfgConfirmation,
      _Material,
      _BatchPlant,
      _Batch,
      _ClassType,
      CharcVal._Characteristic,
      CharcVal._CharacteristicValue

}
where   CharcVal.ClfnObjectType  = 'O'
  and ( CharcVal.ClassType       = '022'
     or CharcVal.ClassType       = '023' )
  and ( CharcVal.ClfnObjectTable = 'MCH1'
     or CharcVal.ClfnObjectTable = 'MCHA' );
```
