---
name: I_TREASURYVALUATIONCLASSTEXT
description: Treasuryvaluationclasstext
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
  - text-view
  - text
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYVALUATIONCLASSTEXT

**Treasuryvaluationclasstext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TreasuryValuationArea` | ✓ | |  | `valuation_area` |
| `TreasuryValuationClass` | ✓ | |  | `cast(TreasuryValuationClassText.valuation_class as ftr_gen_valuation_class preserving type)` |
| `Language` | ✓ | |  | `spras` |
| `TreasuryValuationClassName` |  | |  | `cast(TreasuryValuationClassText.val_class_name as ftr_gen_valuation_class_name preserving type )` |
| `_TreasuryValuationClass` | | ✓ | | |
| `_Language` | | ✓ | | |
| `_TreasuryValuationArea` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TreasuryValuationClass` | `I_TreasuryValuationClass` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_TreasuryValuationArea` | `I_TreasuryValuationArea` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Treasury Valuation Class - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ITRVALCLTXT'
@ObjectModel.representativeKey: 'TreasuryValuationClass'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory:  #M
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC


define view entity I_TreasuryValuationClassText
  as select from trgc_val_class_t as TreasuryValuationClassText

  association [0..1] to I_TreasuryValuationClass as _TreasuryValuationClass on  $projection.TreasuryValuationClass = _TreasuryValuationClass.TreasuryValuationClass
                                                                            and $projection.TreasuryValuationArea  = _TreasuryValuationClass.TreasuryValuationArea
  association [0..1] to I_Language               as _Language               on  $projection.Language = _Language.Language
  association        to I_TreasuryValuationArea  as _TreasuryValuationArea  on  $projection.TreasuryValuationArea = _TreasuryValuationArea.TreasuryValuationArea
{
      @ObjectModel.foreignKey.association: '_TreasuryValuationArea'
  key TreasuryValuationClassText.valuation_area       as TreasuryValuationArea,
      @ObjectModel.foreignKey.association: '_TreasuryValuationClass'
  key cast(TreasuryValuationClassText.valuation_class as ftr_gen_valuation_class preserving type)
                                                      as TreasuryValuationClass,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key TreasuryValuationClassText.spras                as Language,
      @Semantics.text: true
      cast(TreasuryValuationClassText.val_class_name  as ftr_gen_valuation_class_name preserving type )
                                                      as TreasuryValuationClassName,
      _TreasuryValuationClass,
      _TreasuryValuationArea,
      _Language

}
```
