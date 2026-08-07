---
name: I_RERENEWALRULETEXT
description: "Rerenewalruletext"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - text-view
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_RERENEWALRULETEXT

**Rerenewalruletext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `RERenewalRule` | ✓ | |  | `rnrule` |  |  |
| `RERenewalRuleDescription` |  | |  | `xrnrule` |  |  |
| `_RERenewalRule` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RERenewalRule` | `I_RERenewalRule` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRERNWLRULET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Renewal Rules - Text'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'RERenewalRule'
@ObjectModel.semanticKey: 'RERenewalRule'

@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

define view I_RERenewalRuleText
  as select from tivtmrnrulet
  association [0..1] to I_RERenewalRule as _RERenewalRule on $projection.RERenewalRule = _RERenewalRule.RERenewalRule
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras   as Language,
      @ObjectModel.text.element: ['RERenewalRuleDescription']
      @ObjectModel.foreignKey.association: '_RERenewalRule'
  key rnrule  as RERenewalRule,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      xrnrule as RERenewalRuleDescription,


      _Language,
      _RERenewalRule

}
```
