---
name: I_STANDARDWORKFORMULAPARAMETER
description: "Standardworkformulaparameter"
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
# I_STANDARDWORKFORMULAPARAMETER

**Standardworkformulaparameter**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StandardWorkFormulaParameter` | ✓ | |  | `cast(parid as pph_parid preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_StandardWorkFormulaParamText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPSTDWFMPARAM'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Analytics.dataCategory: #DIMENSION
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'StandardWorkFormulaParameter'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Standard Work Formula Parameter'
@ObjectModel.sapObjectNodeType.name: 'StandardWorkFormulaParameter'
@Analytics.dataExtraction.enabled: true

define view I_StandardWorkFormulaParameter
  as select from tc20

  association [0..*] to I_StandardWorkFormulaParamText as _Text on $projection.StandardWorkFormulaParameter = _Text.StandardWorkFormulaParameter
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}  
  key cast(parid as pph_parid preserving type) as StandardWorkFormulaParameter,

      _Text
};
```
