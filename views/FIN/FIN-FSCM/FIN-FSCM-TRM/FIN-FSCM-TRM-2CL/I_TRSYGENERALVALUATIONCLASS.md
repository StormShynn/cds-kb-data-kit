---
name: I_TRSYGENERALVALUATIONCLASS
description: Trsygeneralvaluationclass
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRSYGENERALVALUATIONCLASS

**Trsygeneralvaluationclass**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TreasuryGeneralValuationClass` | ✓ | |  | `cast(com_val_class as ftr_gen_fin_instr_val_class)` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TrsyGenValuationClassText` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'TreasuryGeneralValuationClass'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name: 'TreasuryGeneralValuationClass'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE , #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION] 
@VDM.viewType: #BASIC
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@Analytics.internalName:#LOCAL
@Metadata.ignorePropagatedAnnotations:true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Treasury General Valuation Class'
@Search.searchable: true
@Consumption.ranked: true

define view entity I_TrsyGeneralValuationClass
  as select from trgc_com_valcl 

  association [0..*] to I_TrsyGenValuationClassText as _Text on $projection.TreasuryGeneralValuationClass = _Text.TreasuryGeneralValuationClass
{
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8 
  key cast(com_val_class as ftr_gen_fin_instr_val_class)      as TreasuryGeneralValuationClass,
      _Text
}
```
