---
name: I_SAMPLINGPROCEDUREVALUEHELP
description: "Samplingprocedurevaluehelp"
app_component: QM-PT-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
