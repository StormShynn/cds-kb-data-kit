---
name: I_TREASURYVALUATIONCLASS
description: "Treasuryvaluationclass"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYVALUATIONCLASS

**Treasuryvaluationclass**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryValuationArea` | ✓ | |  | `valuation_area` |  |  |
| `TreasuryValuationClass` | ✓ | |  | `cast(TreasuryValuationClass.valuation_class as ftr_gen_valuation_class preserving type)` |  |  |
| `_TreasuryValuationArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TreasuryValuationArea` | `I_TreasuryValuationArea` | [0..1] |
| `_Text` | `I_TreasuryValuationClassText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'ITRVALCL' 
@Analytics.dataExtraction.enabled : true
@Analytics.internalName: #LOCAL 
@EndUserText.label: 'Treasury Valuation Class'
@ObjectModel.sapObjectNodeType.name: 'TreasuryValuationClass'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'TreasuryValuationClass'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B 
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC

@Search.searchable: true

define view entity I_TreasuryValuationClass
  as select from trgc_val_class as TreasuryValuationClass

  association to I_TreasuryValuationArea      as _TreasuryValuationArea on  $projection.TreasuryValuationArea = _TreasuryValuationArea.TreasuryValuationArea

  association[0..*] to I_TreasuryValuationClassText as _Text                  on  $projection.TreasuryValuationClass = _Text.TreasuryValuationClass
                                                                        and $projection.TreasuryValuationArea  = _Text.TreasuryValuationArea


{
      @ObjectModel.foreignKey.association: '_TreasuryValuationArea'
      @Search : { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key TreasuryValuationClass.valuation_area                                   as TreasuryValuationArea,
      @ObjectModel.text.association: '_Text'
      @Search : { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key cast(TreasuryValuationClass.valuation_class as ftr_gen_valuation_class preserving type) as TreasuryValuationClass,

      _TreasuryValuationArea,
      _Text
}
```
