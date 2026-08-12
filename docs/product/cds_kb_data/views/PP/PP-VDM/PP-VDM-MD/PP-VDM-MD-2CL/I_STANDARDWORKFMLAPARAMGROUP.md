---
name: I_STANDARDWORKFMLAPARAMGROUP
description: "Standardworkfmlaparamgroup"
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
# I_STANDARDWORKFMLAPARAMGROUP

**Standardworkfmlaparamgroup**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StandardWorkFormulaParamGroup` | ✓ | |  | `vgwts` |  |  |
| `StandardWorkFormulaParam1` |  | |  | `par01` |  |  |
| `StandardWorkFormulaParam2` |  | |  | `par02` |  |  |
| `StandardWorkFormulaParam3` |  | |  | `par03` |  |  |
| `StandardWorkFormulaParam4` |  | |  | `par04` |  |  |
| `StandardWorkFormulaParam5` |  | |  | `par05` |  |  |
| `StandardWorkFormulaParam6` |  | |  | `par06` |  |  |
| `_Text` | | ✓ | | | | |
| `_StandardWorkFormulaParameter1` | | ✓ | | | | |
| `_StandardWorkFormulaParameter2` | | ✓ | | | | |
| `_StandardWorkFormulaParameter3` | | ✓ | | | | |
| `_StandardWorkFormulaParameter4` | | ✓ | | | | |
| `_StandardWorkFormulaParameter5` | | ✓ | | | | |
| `_StandardWorkFormulaParameter6` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_StandardWorkFmlaParamGrpText` | [0..*] |
| `_StandardWorkFormulaParameter1` | `I_StandardWorkFormulaParameter` | [0..1] |
| `_StandardWorkFormulaParameter2` | `I_StandardWorkFormulaParameter` | [0..1] |
| `_StandardWorkFormulaParameter3` | `I_StandardWorkFormulaParameter` | [0..1] |
| `_StandardWorkFormulaParameter4` | `I_StandardWorkFormulaParameter` | [0..1] |
| `_StandardWorkFormulaParameter5` | `I_StandardWorkFormulaParameter` | [0..1] |
| `_StandardWorkFormulaParameter6` | `I_StandardWorkFormulaParameter` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPSTDWFMPARGRP'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'StandardWorkFormulaParamGroup'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Standard Work Formula Parameter Group'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'StandardWorkFmlaParamGroup'
@Analytics.dataExtraction.enabled: true

define view I_StandardWorkFmlaParamGroup
  as select from tc21

  association [0..*] to I_StandardWorkFmlaParamGrpText as _Text                          on $projection.StandardWorkFormulaParamGroup = _Text.StandardWorkFormulaParamGroup
  association [0..1] to I_StandardWorkFormulaParameter as _StandardWorkFormulaParameter1 on $projection.StandardWorkFormulaParam1 = _StandardWorkFormulaParameter1.StandardWorkFormulaParameter
  association [0..1] to I_StandardWorkFormulaParameter as _StandardWorkFormulaParameter2 on $projection.StandardWorkFormulaParam2 = _StandardWorkFormulaParameter2.StandardWorkFormulaParameter
  association [0..1] to I_StandardWorkFormulaParameter as _StandardWorkFormulaParameter3 on $projection.StandardWorkFormulaParam3 = _StandardWorkFormulaParameter3.StandardWorkFormulaParameter
  association [0..1] to I_StandardWorkFormulaParameter as _StandardWorkFormulaParameter4 on $projection.StandardWorkFormulaParam4 = _StandardWorkFormulaParameter4.StandardWorkFormulaParameter
  association [0..1] to I_StandardWorkFormulaParameter as _StandardWorkFormulaParameter5 on $projection.StandardWorkFormulaParam5 = _StandardWorkFormulaParameter5.StandardWorkFormulaParameter
  association [0..1] to I_StandardWorkFormulaParameter as _StandardWorkFormulaParameter6 on $projection.StandardWorkFormulaParam6 = _StandardWorkFormulaParameter6.StandardWorkFormulaParameter

{
      @ObjectModel.text.association: '_Text'
  key vgwts as  StandardWorkFormulaParamGroup,

      @ObjectModel.foreignKey.association: '_StandardWorkFormulaParameter1'
      par01 as  StandardWorkFormulaParam1,
      @ObjectModel.foreignKey.association: '_StandardWorkFormulaParameter2'
      par02 as  StandardWorkFormulaParam2,
      @ObjectModel.foreignKey.association: '_StandardWorkFormulaParameter3'
      par03 as  StandardWorkFormulaParam3,
      @ObjectModel.foreignKey.association: '_StandardWorkFormulaParameter4'
      par04 as  StandardWorkFormulaParam4,
      @ObjectModel.foreignKey.association: '_StandardWorkFormulaParameter5'
      par05 as  StandardWorkFormulaParam5,
      @ObjectModel.foreignKey.association: '_StandardWorkFormulaParameter6'
      par06 as  StandardWorkFormulaParam6,

      // Associations
      _StandardWorkFormulaParameter1,
      _StandardWorkFormulaParameter2,
      _StandardWorkFormulaParameter3,
      _StandardWorkFormulaParameter4,
      _StandardWorkFormulaParameter5,
      _StandardWorkFormulaParameter6,
      _Text
};
```
