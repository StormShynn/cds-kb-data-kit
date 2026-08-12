---
name: I_RECNDNCALCRULEEXTTEXT
description: "Recndncalcruleexttext"
app_component: RE-FX-CN-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
