---
name: I_SAMPLINGPROCEDUREVALUEHELP
description: "Samplingprocedurevaluehelp"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - value-help
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_SAMPLINGPROCEDUREVALUEHELP

**Samplingprocedurevaluehelp**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SamplingProcedure` | ✓ | |  |  |  |  |
| `SamplingType` |  | |  |  |  |  |
| `SamplingValuationMode` |  | |  |  |  |  |
| `SamplingScheme` |  | |  |  |  |  |
| `QualityControlChartType` |  | |  |  |  |  |
| `SamplingProcedureIsBlocked` |  | |  |  |  |  |
| `SamplingProcedureInspSubset` |  | |  |  |  |  |
| `SamplingProcedureMltplSamples` |  | |  |  |  |  |
| `_InspSubsetFieldCombination` | | ✓ | | | | |
| `_SamplingProcedureInspSubset` | | ✓ | | | | |
| `_SamplingType` | | ✓ | | | | |
| `_SamplingValuationMode` | | ✓ | | | | |
| `_SamplingScheme` | | ✓ | | | | |
| `_QualityControlChartType` | | ✓ | | | | |
| `_SmplgProcedMltplSamples` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspSubsetFieldCombination` | `I_InspSubsetFieldCombination` | [0..*] |
| `_SamplingProcedureInspSubset` | `I_SamplingProcedureInspSubset` | [0..1] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'ISMPLPROCEDUREVH',
    preserveKey: true,
    compiler.compareFilter: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Sampling Procedure'
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel: {
    usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER },
    dataCategory: #VALUE_HELP
}
@Metadata.ignorePropagatedAnnotations: true
//Used search help H_QDSV(QDSVSH02) as template w/o  Checks  for usage in plan characteristic
-- this CDS view seems not to be used productively in any app
define view I_SamplingProcedureValueHelp as select from I_SamplingProcedure
  association [0..*] to I_InspSubsetFieldCombination as _InspSubsetFieldCombination
    on $projection.SamplingProcedureInspSubset = _InspSubsetFieldCombination.SamplingProcedureInspSubset 
  association [0..1] to I_SamplingProcedureInspSubset as _SamplingProcedureInspSubset
    on $projection.SamplingProcedureInspSubset = _SamplingProcedureInspSubset.SamplingProcedureInspSubset
{
   key I_SamplingProcedure.SamplingProcedure,
   @Semantics.text: true
   @EndUserText.label: 'Sampling Procedure Text'
   I_SamplingProcedure._Text[1:Language = $session.system_language].SamplingProcedureText, 
   @ObjectModel.foreignKey.association: '_SamplingType'  
   SamplingType,
   @ObjectModel.foreignKey.association: '_SamplingValuationMode'
   SamplingValuationMode,
   @ObjectModel.foreignKey.association: '_SamplingScheme'
   SamplingScheme,
   @ObjectModel.foreignKey.association: '_QualityControlChartType'
   QualityControlChartType,
   SamplingProcedureIsBlocked,
   
   @ObjectModel.foreignKey.association: '_SamplingProcedureInspSubset'
   SamplingProcedureInspSubset,
   @ObjectModel.foreignKey.association: '_SmplgProcedMltplSamples'
   SamplingProcedureMltplSamples,
   
   //Associations
   _InspSubsetFieldCombination,
   _SamplingProcedureInspSubset,
   _SamplingType,
   _SamplingValuationMode,
   _SamplingScheme,
   _QualityControlChartType,
   _SmplgProcedMltplSamples
}
```
