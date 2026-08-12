---
name: I_REVALUATIONTYPETEXT
description: "Revaluationtypetext"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_REVALUATIONTYPETEXT

**Revaluationtypetext**

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
| `REValuationType` | ✓ | |  | `cast( dd07t.domvalue_l as rececetype )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `REValuationTypeName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_REValuationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREVALTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Valuation Type - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REValuationType',
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
  sapObjectNodeType.name: 'RealEstateValuationTypeText'
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_REValuationTypeText
  as select from dd07t
  association        to parent I_REValuationType as _REValuationType on $projection.REValuationType = _REValuationType.REValuationType
  association [0..1] to I_Language               as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,  
      @ObjectModel.foreignKey.association: '_REValuationType'
      @ObjectModel.text.element: ['REValuationType']
  key cast( dd07t.domvalue_l as rececetype )            as REValuationType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      dd07t.ddtext                                      as REValuationTypeName,
      
      _REValuationType,
      _Language
}
where
      dd07t.domname  = 'RECECETYPE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
