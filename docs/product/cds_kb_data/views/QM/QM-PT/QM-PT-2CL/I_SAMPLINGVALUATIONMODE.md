---
name: I_SAMPLINGVALUATIONMODE
description: "Samplingvaluationmode"
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
# I_SAMPLINGVALUATIONMODE

**Samplingvaluationmode**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SamplingValuationMode` | ✓ | |  | `bewertmod` |  |  |
| `SmplgValnIsByNcnfrmngUnits` |  | |  | `kzattrfe` |  |  |
| `SamplingValuationIsByDefects` |  | |  | `kzattrfz` |  |  |
| `SmplgValnIsByStdDvtnMethod` |  | |  | `kzvars` |  |  |
| `SamplingValuationIsByCode` |  | |  | `kzcod` |  |  |
| `SamplingValuationIsManually` |  | |  | `kzman` |  |  |
| `SmplgValnIsByQltyCtrlChart` |  | |  | `kzqrk` |  |  |
| `SmplgValnIsByToleranceLimits` |  | |  | `kzknull` |  |  |
| `SmplgValnIsWithoutParameter` |  | |  | `kzohnebewp` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SamplingValuationModeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Valuation Mode for Inspection Charc' //same as DDL description
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'SamplingValuationMode'
@Analytics.technicalName: 'ISMPLGVALUMODE'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #S, dataClass: #MASTER }
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SamplingValuationMode 
   as select from qdbm

   association [0..*] to I_SamplingValuationModeText as _Text
      on $projection.SamplingValuationMode = _Text.SamplingValuationMode

{
   @ObjectModel.text.association: '_Text'
   @Search: { defaultSearchElement: true, ranking: #HIGH }
   key qdbm.bewertmod   as SamplingValuationMode,

      qdbm.kzattrfe as SmplgValnIsByNcnfrmngUnits, 
      qdbm.kzattrfz as SamplingValuationIsByDefects, 
      qdbm.kzvars as SmplgValnIsByStdDvtnMethod, 
//      qdbm.kzvarsigm, 
      qdbm.kzcod as SamplingValuationIsByCode, 
      qdbm.kzman as SamplingValuationIsManually, 
      qdbm.kzqrk as SmplgValnIsByQltyCtrlChart, 
//      qdbm.kzaus, 
//      qdbm.kzcnull, 
//      qdbm.kznvwbm, 
//      qdbm.fbkey, 
      qdbm.kzknull as SmplgValnIsByToleranceLimits, 
      qdbm.kzohnebewp as SmplgValnIsWithoutParameter, 
//      qdbm.ersteller, 
//      qdbm.aenderer, 
//      qdbm.erstelldat, 
//      qdbm.aenderdat 

   /* Associations */
   _Text
   
}
```
