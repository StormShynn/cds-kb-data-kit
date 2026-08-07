---
name: I_OPERATIONSETUPGROUP
description: Operationsetupgroup
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
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
# I_OPERATIONSETUPGROUP

**Operationsetupgroup**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `OperationSetupGroupCategory` | ✓ | |  | `cast(rfgrp as pph_rfgrp preserving type)` |  |  |
| `OperationSetupGroup` | ✓ | |  | `cast(rfsch as pph_rfsch preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |
| `_OperationSetupGroupCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_OperationSetupGroupCategory` | `I_OperationSetupGroupCategory` | [1..1] |
| `_Text` | `I_OperationSetupGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPOPSETUPGROUP'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OperationSetupGroup'
@ObjectModel.semanticKey: 'OperationSetupGroup'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Operation Setup Group'
@ObjectModel.sapObjectNodeType.name: 'BOOOpSetupGroup'
@Analytics.dataExtraction.enabled: true

define view I_OperationSetupGroup
  as select from t425
  association [1..1] to I_Plant                       as _Plant                       on  $projection.Plant                       = _Plant.Plant
  association [1..1] to I_OperationSetupGroupCategory as _OperationSetupGroupCategory on  $projection.Plant                       = _OperationSetupGroupCategory.Plant
                                                                                      and $projection.OperationSetupGroupCategory = _OperationSetupGroupCategory.OperationSetupGroupCategory
  association [0..*] to I_OperationSetupGroupText     as _Text                        on  $projection.OperationSetupGroup         = _Text.OperationSetupGroup
                                                                                      and $projection.OperationSetupGroupCategory = _Text.OperationSetupGroupCategory
                                                                                      and $projection.Plant                       = _Text.Plant
{
      // Key
      @ObjectModel.foreignKey.association: '_Plant'
  key werks      as Plant,
      @ObjectModel.foreignKey.association: '_OperationSetupGroupCategory'
  key cast(rfgrp as pph_rfgrp preserving type) as OperationSetupGroupCategory,
      @Search: {defaultSearchElement: true, fuzzinessThreshold: 0.8,ranking: #HIGH}
      @ObjectModel.text.association: '_Text'
  key cast(rfsch as pph_rfsch preserving type) as OperationSetupGroup,

      // Associations
      _Plant,
      _OperationSetupGroupCategory,
      _Text
};
```
