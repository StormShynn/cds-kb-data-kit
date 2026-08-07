---
name: I_REALESTATEVALUATIONRULETEXT
description: "Real EstateVALUATIONRULETEXT"
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
  - real-estate
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_REALESTATEVALUATIONRULETEXT

**Real EstateVALUATIONRULETEXT**

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
| `REValuationRule` | ✓ | |  | `cerule` |  |  |
| `REValuationRuleName` |  | |  | `xcerule` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'RE Valuation Rule - Text'
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'IRECEVALRULET'
}
@Search.searchable: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REValuationRule',
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #LANGUAGE_DEPENDENT_TEXT, 
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateValuationRuleText'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define root view entity I_RealEstateValuationRuleText 
as select from tivcerulet
association [0..1] to I_Language                    as _Language                on $projection.Language = _Language.Language
 {
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras            as Language,

  key cerule  as REValuationRule,
      @Semantics.text: true
      @Search.fuzzinessThreshold: 0.8
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      xcerule as REValuationRuleName,

      _Language
}
```
