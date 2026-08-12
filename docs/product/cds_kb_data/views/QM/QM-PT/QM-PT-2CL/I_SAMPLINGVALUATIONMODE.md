---
name: I_SAMPLINGVALUATIONMODE
description: "Samplingvaluationmode"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
