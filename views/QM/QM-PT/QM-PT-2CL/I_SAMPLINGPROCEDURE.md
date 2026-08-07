---
name: I_SAMPLINGPROCEDURE
description: Samplingprocedure
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
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_SAMPLINGPROCEDURE

**Samplingprocedure**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SamplingProcedure` | ✓ | |  | `stichprver` |  |  |
| `SamplingProcedureMltplSamples` |  | |  | `kzumfs` |  |  |
| `SamplingProcedureInspSubset` |  | |  | `cast( kzrast as vdm_qkzrast preserving type )` |  |  |
| `SamplingValuationMode` |  | |  | `bewertmod` |  |  |
| `SamplingType` |  | |  | `stichprart` |  |  |
| `QualityControlChartType` |  | |  | `qrkart` |  |  |
| `SamplingScheme` |  | |  | `stprplan` |  |  |
| `SamplingProcedureIsBlocked` |  | |  | `cast( kznvwsv as vdm_qkznvwsv preserving type )` |  |  |
| `SamplingProcedHasNoInspStgeChg` |  | |  | `cast( qdsv.kzohi as vdm_qkzohi preserving type )` |  |  |
| `SmplgProcedNmbrOfMltplSamples` |  | |  | `stpranz` |  |  |
| `SamplingProcedureNumberOfUnits` |  | |  | `stprumf` |  |  |
| `SamplingProcedAcceptanceCount` |  | |  | `annahmez` |  |  |
| `SamplingProcedIsUsedInspPlan` |  | |  | `cast( qdsv.kzvwsvpl as vdm_qkzvwsvpl preserving type )` |  |  |
| `SampleDeterminationRule` |  | |  | `fbkey` |  |  |
| `InspSampleValuationRule` |  | |  | `fbkeymfs` |  |  |
| `SamplingProcedInspSeverity` |  | |  | `prschaerfe` |  |  |
| `SmplgProcedAcceptableQltyLevel` |  | |  | `aqlwert` |  |  |
| `SamplingProcedSmplSizeInPct` |  | |  | `prozumf` |  |  |
| `SamplingProcedHasSmplSizeInPct` |  | |  | `cast( qdsv.prozumfni as vdm_qninitial preserving type )` |  |  |
| `SamplingProcedAccptcCountInPct` |  | |  | `prozazl` |  |  |
| `SamplingProcedHasAccptcCtInPct` |  | |  | `cast( qdsv.prozazlni as vdm_qninitial preserving type )` |  |  |
| `CreatedByUser` |  | |  | `ersteller` |  |  |
| `LastChangedByUser` |  | |  | `aenderer` |  |  |
| `SamplingProcedureCreationDate` |  | |  | `erstelldat` |  |  |
| `SamplingProcedureChangeDate` |  | |  | `aenderdat` |  |  |
| `SamplingProcedInspFrequency` |  | |  | `raster` |  |  |
| `_Text` | | ✓ | | | | |
| `_SmplgProcedureInspSubset` | | ✓ | | | | |
| `_SampleProcedInspSubsetText` | | ✓ | | | | |
| `_SamplingValuationMode` | | ✓ | | | | |
| `_SamplingValuationModeText` | | ✓ | | | | |
| `_SamplingType` | | ✓ | | | | |
| `_SamplingTypeText` | | ✓ | | | | |
| `_SamplingScheme` | | ✓ | | | | |
| `_SamplingSchemeText` | | ✓ | | | | |
| `_QualityControlChartType` | | ✓ | | | | |
| `_QualityControlChartTypeText` | | ✓ | | | | |
| `_SampleDeterminationRule` | | ✓ | | | | |
| `_SampleDeterminationRuleText` | | ✓ | | | | |
| `_InspSampleValuationRule` | | ✓ | | | | |
| `_InspSampleValuationRuleTxt` | | ✓ | | | | |
| `_SmplgProcedMltplSamples` | | ✓ | | | | |
| `_SmplgProcedMltplSamplesText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SamplingProcedureText` | [0..*] |
| `_SmplgProcedureInspSubset` | `I_SamplingProcedureInspSubset` | [0..1] |
| `_SampleProcedInspSubsetText` | `I_SamplingProcedureInspSubsetT` | [0..*] |
| `_SamplingValuationMode` | `I_SamplingValuationMode` | [0..1] |
| `_SamplingValuationModeText` | `I_SamplingValuationModeText` | [0..*] |
| `_SamplingType` | `I_SamplingType` | [0..1] |
| `_SamplingTypeText` | `I_SamplingTypeText` | [0..*] |
| `_SamplingScheme` | `I_SamplingScheme` | [0..1] |
| `_SamplingSchemeText` | `I_SamplingSchemeText` | [0..*] |
| `_QualityControlChartType` | `I_QualityControlChartType` | [0..1] |
| `_QualityControlChartTypeText` | `I_QualityControlChartTypeText` | [0..*] |
| `_SampleDeterminationRule` | `I_SampleDeterminationRule` | [0..1] |
| `_SampleDeterminationRuleText` | `I_SampleDeterminationRuleText` | [0..*] |
| `_InspSampleValuationRule` | `I_InspSampleValuationRule` | [0..1] |
| `_InspSampleValuationRuleTxt` | `I_InspSampleValuationRuleTxt` | [0..*] |
| `_SmplgProcedMltplSamples` | `I_SmplgProcedMltplSamples` | [0..1] |
| `_SmplgProcedMltplSamplesText` | `I_SmplgProcedMltplSamplesText` | [0..*] |
| `_Extension` | `E_SamplingProcedure` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'ISMPLNGPRCDR',
    preserveKey: true,
    compiler.compareFilter: true,
    buffering: { status: #ACTIVE, type: #FULL }
}
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sampling Procedure'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.representativeKey: 'SamplingProcedure'
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER }
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_SamplingProcedure
  as select from qdsv

  association [0..*] to I_SamplingProcedureText       as _Text                     on $projection.SamplingProcedure = _Text.SamplingProcedure

  association [0..1] to I_SamplingProcedureInspSubset as _SmplgProcedureInspSubset on $projection.SamplingProcedureInspSubset = _SmplgProcedureInspSubset.SamplingProcedureInspSubset
  association [0..*] to I_SamplingProcedureInspSubsetT as _SampleProcedInspSubsetText on $projection.SamplingProcedureInspSubset = _SampleProcedInspSubsetText.SamplingProcedureInspSubset
  
  association [0..1] to I_SamplingValuationMode       as _SamplingValuationMode    on $projection.SamplingValuationMode = _SamplingValuationMode.SamplingValuationMode
  association [0..*] to I_SamplingValuationModeText   as _SamplingValuationModeText on $projection.SamplingValuationMode = _SamplingValuationModeText.SamplingValuationMode
  
  association [0..1] to I_SamplingType                as _SamplingType             on $projection.SamplingType = _SamplingType.SamplingType
  association [0..*] to I_SamplingTypeText            as _SamplingTypeText         on $projection.SamplingType = _SamplingTypeText.SamplingType
  
  association [0..1] to I_SamplingScheme              as _SamplingScheme           on $projection.SamplingScheme = _SamplingScheme.SamplingScheme
  association [0..*] to I_SamplingSchemeText          as _SamplingSchemeText       on $projection.SamplingScheme = _SamplingSchemeText.SamplingScheme
    
  association [0..1] to I_QualityControlChartType     as _QualityControlChartType  on $projection.QualityControlChartType = _QualityControlChartType.QualityControlChartType
  association [0..*] to I_QualityControlChartTypeText as _QualityControlChartTypeText on $projection.QualityControlChartType = _QualityControlChartTypeText.QualityControlChartType

  association [0..1] to I_SampleDeterminationRule     as _SampleDeterminationRule  on $projection.SampleDeterminationRule = _SampleDeterminationRule.SampleDeterminationRule
  association [0..*] to I_SampleDeterminationRuleText as _SampleDeterminationRuleText on $projection.SampleDeterminationRule = _SampleDeterminationRuleText.SampleDeterminationRule
  
  association [0..1] to I_InspSampleValuationRule     as _InspSampleValuationRule  on $projection.InspSampleValuationRule = _InspSampleValuationRule.InspSampleValuationRule
  association [0..*] to I_InspSampleValuationRuleTxt  as _InspSampleValuationRuleTxt on $projection.InspSampleValuationRule = _InspSampleValuationRuleTxt.InspSampleValuationRule
  
  association [0..1] to I_SmplgProcedMltplSamples     as _SmplgProcedMltplSamples  on $projection.SamplingProcedureMltplSamples = _SmplgProcedMltplSamples.SamplingProcedureMltplSamples
  association [0..*] to I_SmplgProcedMltplSamplesText as _SmplgProcedMltplSamplesText on $projection.SamplingProcedureMltplSamples = _SmplgProcedMltplSamplesText.SamplingProcedureMltplSamples
  
  //Extension
  association [1..1] to E_SamplingProcedure           as _Extension                on $projection.SamplingProcedure = _Extension.SamplingProcedure

{
  key qdsv.stichprver as SamplingProcedure,
      @ObjectModel.foreignKey.association: '_SmplgProcedMltplSamples'
      kzumfs          as SamplingProcedureMltplSamples,
      @ObjectModel.foreignKey.association: '_SmplgProcedureInspSubset'
      cast( kzrast as vdm_qkzrast preserving type )           as SamplingProcedureInspSubset,
      @ObjectModel.foreignKey.association: '_SamplingValuationMode'
      bewertmod       as SamplingValuationMode,
      @ObjectModel.foreignKey.association: '_SamplingType'
      stichprart      as SamplingType,
      @ObjectModel.foreignKey.association: '_QualityControlChartType'
      qrkart          as QualityControlChartType,
      @ObjectModel.foreignKey.association: '_SamplingScheme'
      stprplan        as SamplingScheme,
      cast( kznvwsv as vdm_qkznvwsv preserving type )         as SamplingProcedureIsBlocked,
      cast( qdsv.kzohi as vdm_qkzohi preserving type )        as SamplingProcedHasNoInspStgeChg,
      //  qdsv.kznocut,
      qdsv.stpranz    as SmplgProcedNmbrOfMltplSamples,
      qdsv.stprumf    as SamplingProcedureNumberOfUnits,
      qdsv.annahmez   as SamplingProcedAcceptanceCount,
      //  qdsv.kfaktor,
      //  qdsv.kfaktorni,
     
      cast( qdsv.kzvwsvpl as vdm_qkzvwsvpl preserving type )  as SamplingProcedIsUsedInspPlan,
      @ObjectModel.foreignKey.association: '_SampleDeterminationRule'
      qdsv.fbkey      as SampleDeterminationRule,
      @ObjectModel.foreignKey.association: '_InspSampleValuationRule'
      qdsv.fbkeymfs   as InspSampleValuationRule,
      qdsv.prschaerfe as SamplingProcedInspSeverity,
      qdsv.aqlwert    as SmplgProcedAcceptableQltyLevel,
      qdsv.prozumf    as SamplingProcedSmplSizeInPct,
      cast( qdsv.prozumfni as vdm_qninitial preserving type ) as SamplingProcedHasSmplSizeInPct,
      qdsv.prozazl    as SamplingProcedAccptcCountInPct,
      cast( qdsv.prozazlni as vdm_qninitial preserving type ) as SamplingProcedHasAccptcCtInPct,
      qdsv.ersteller  as CreatedByUser,
      qdsv.aenderer   as LastChangedByUser,
      qdsv.erstelldat as SamplingProcedureCreationDate,
      qdsv.aenderdat  as SamplingProcedureChangeDate,
      qdsv.raster     as SamplingProcedInspFrequency,

      /* Associations */
      _Text,
      _SmplgProcedureInspSubset,
      _SampleProcedInspSubsetText,
      _SamplingValuationMode,
      _SamplingValuationModeText,
      _SamplingType,
      _SamplingTypeText,
      _SamplingScheme,
      _SamplingSchemeText,
      _QualityControlChartType,
      _QualityControlChartTypeText,
      _SampleDeterminationRule,
      _SampleDeterminationRuleText,
      _InspSampleValuationRule,
      _InspSampleValuationRuleTxt,
      _SmplgProcedMltplSamples,
      _SmplgProcedMltplSamplesText

}
```
