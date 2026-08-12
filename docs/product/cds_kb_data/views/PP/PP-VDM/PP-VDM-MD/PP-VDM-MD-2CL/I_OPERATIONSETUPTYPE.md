---
name: I_OPERATIONSETUPTYPE
description: "Operationsetuptype"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_OPERATIONSETUPTYPE

**Operationsetuptype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperationSetupType` | ✓ | |  | `cast(rasch as pph_rasch preserving type)` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Text` | `I_OperationSetupTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPOPSETUPTYPE'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OperationSetupType'
@ObjectModel.semanticKey: ['OperationSetupType', 'Plant']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Operation Setup Type'
@ObjectModel.sapObjectNodeType.name: 'BOOOpSetUpType'
@Analytics.dataExtraction.enabled: true


define view I_OperationSetupType
  as select from t428
  association [1..1] to I_Plant                  as _Plant on  $projection.Plant = _Plant.Plant
  association [0..*] to I_OperationSetupTypeText as _Text  on  $projection.OperationSetupType = _Text.OperationSetupType
                                                           and $projection.Plant              = _Text.Plant
{
      // Key
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.association: '_Text'
  key cast(rasch as pph_rasch preserving type) as OperationSetupType,
      @ObjectModel.foreignKey.association: '_Plant'
  key werks                                    as Plant,

      // Associations
      _Plant,
      _Text
};
```
