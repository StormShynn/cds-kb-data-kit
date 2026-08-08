---
name: I_REVALUATIONLINEARTYPETEXT
description: "Revaluationlineartypetext"
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
# I_REVALUATIONLINEARTYPETEXT

**Revaluationlineartypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `REValuationLinearType` | ✓ | |  | `cast( dd07t.domvalue_l as recestraightlinetype )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `REValuationLinearTypeName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_REValuationLinearType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREVALLINTPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'RE Valuation Linearization Type - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REValuationLinearType',
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
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
  sapObjectNodeType.name: 'REValuationLinearTypeText'
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_REValuationLinearTypeText
  as select from dd07t
  association        to parent I_REValuationLinearType as _REValuationLinearType on $projection.REValuationLinearType = _REValuationLinearType.REValuationLinearType
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_REValuationLinearType'
      @ObjectModel.text.element: ['REValuationLinearType']
  key cast( dd07t.domvalue_l as recestraightlinetype )            as REValuationLinearType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                      as REValuationLinearTypeName,

      _REValuationLinearType,
      _Language
}
where
      dd07t.domname  = 'RECESTRAIGHTLINETYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
