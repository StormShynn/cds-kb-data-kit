---
name: I_RECNDNCALCRULEEXTTEXT
description: "Recndncalcruleexttext"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - text-view
  - text
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECNDNCALCRULEEXTTEXT

**Recndncalcruleexttext**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `RECalculationRule` | ✓ | |  | `calcruleext` |  |  |
| `REConditionAttributeName` |  | |  | `xlcalcrule` |  |  |
| `_RECndnCalculationRuleExt` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RECndnCalculationRuleExt` | `I_RECndnCalculationRuleExt` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: { dataExtraction.enabled: true }

@ObjectModel: {
                usageType: { 
                             dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #M
                            },
                dataCategory: #TEXT,
                representativeKey: 'RECalculationRule',
                semanticKey: ['RECalculationRule'],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY ],
               sapObjectNodeType.name: 'RealEstateCalculationRuleText'
}

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType:#BASIC
@EndUserText.label: 'RE External Calculation Formula - Text'
define view entity I_RECndnCalcRuleExtText as select from tivcdcalcextt
    association [0..1] to I_RECndnCalculationRuleExt    as _RECndnCalculationRuleExt  on $projection.RECalculationRule = _RECndnCalculationRuleExt.RECalculationRule
    association [0..1] to I_Language                    as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras            as Language,
      @ObjectModel.foreignKey.association: '_RECndnCalculationRuleExt'
  key calcruleext  as RECalculationRule,
      @Semantics.text: true
      @Search.fuzzinessThreshold: 0.8
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      xlcalcrule as REConditionAttributeName,

      _RECndnCalculationRuleExt,
      _Language
}
```
