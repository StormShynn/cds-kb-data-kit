---
name: I_OPERATIONSETUPGROUPCATEGORY
description: "Operationsetupgroupcategory"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_OPERATIONSETUPGROUPCATEGORY

**Operationsetupgroupcategory**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperationSetupGroupCategory` | ✓ | |  | `cast(rfgrp as vdm_ruefagrp preserving type)` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `_Plant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_Text` | `I_OperationSetupGroupCatText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPOPSUPGRPCAT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OperationSetupGroupCategory'
@ObjectModel.semanticKey: 'OperationSetupGroupCategory'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Operation Setup Group Category'
@ObjectModel.sapObjectNodeType.name: 'BOOOpSetUpGroupCat'
@Analytics.dataExtraction.enabled: true

define view I_OperationSetupGroupCategory
  as select from t426
  association [1..1] to I_Plant                      as _Plant on  $projection.Plant = _Plant.Plant
  association [0..*] to I_OperationSetupGroupCatText as _Text  on  $projection.OperationSetupGroupCategory = _Text.OperationSetupGroupCategory
                                                               and $projection.Plant                       = _Text.Plant
{
      // Key
      @Search: {defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH}
      @ObjectModel.text.association: '_Text'
  key cast(rfgrp as vdm_ruefagrp preserving type) as OperationSetupGroupCategory,
      @ObjectModel.foreignKey.association: '_Plant'
  key werks                                       as Plant,

      // Associations
      _Plant,
      _Text
};
```
