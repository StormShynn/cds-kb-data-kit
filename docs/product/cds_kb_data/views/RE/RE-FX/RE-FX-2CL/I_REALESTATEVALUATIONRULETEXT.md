---
name: I_REALESTATEVALUATIONRULETEXT
description: "Real EstateVALUATIONRULETEXT"
app_component: RE-FX-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
