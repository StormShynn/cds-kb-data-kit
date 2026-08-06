---
name: I_REVALUATIONCLASSIFICATIONTXT
description: Revaluationclassificationtxt
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
  - classification
  - component:RE-FX-2CL
  - lob:Other
---
# I_REVALUATIONCLASSIFICATIONTXT

**Revaluationclassificationtxt**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `REValuationClassification` | `cast( dd07t.domvalue_l as rececesltype )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `REValuationClassificationName` | `dd07t.ddtext` |
| `_Language` | *Association* |
| `_REValuationClassification` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREVALCLST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'RE Valuation Classification - Text'
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'IREVALCLST'
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REValuationClassification',
  usageType: {
    serviceQuality: #A,
    dataClass: #META,
    sizeCategory: #S
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #LANGUAGE_DEPENDENT_TEXT,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SEARCHABLE_ENTITY
  ],
  sapObjectNodeType.name: 'REValuationClassificationText'
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_REValuationClassificationTxt
  as select from dd07t
  association        to parent I_REValuationClassification as _REValuationClassification on $projection.REValuationClassification = _REValuationClassification.REValuationClassification
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_REValuationClassification'
      @ObjectModel.text.element: ['REValuationClassification']
  key cast( dd07t.domvalue_l as rececesltype )          as REValuationClassification,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                      as REValuationClassificationName,

      _REValuationClassification,
      _Language
}
where
      dd07t.domname  = 'RECECESLTYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
