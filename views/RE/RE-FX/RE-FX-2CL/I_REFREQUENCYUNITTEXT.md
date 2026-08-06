---
name: I_REFREQUENCYUNITTEXT
description: Refrequencyunittext
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
# I_REFREQUENCYUNITTEXT

**Refrequencyunittext**

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
| key `REFrequencyUnit` | `cast( dd07t.domvalue_l as recdvdmfrequencyunit )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `REFrequencyUnitName` | `cast( dd07t.ddtext as val_text preserving type )` |
| `_Language` | *Association* |
| `_REFrequencyUnit` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREFREQUNITT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Frequency Unit - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REFrequencyUnit',
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
  sapObjectNodeType.name: 'RealEstateFrequencyUnitText'
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_REFrequencyUnitText
  as select from dd07t
  association        to parent I_REFrequencyUnit as _REFrequencyUnit on $projection.REFrequencyUnit = _REFrequencyUnit.REFrequencyUnit
  association [0..1] to I_Language               as _Language        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_REFrequencyUnit'
      @ObjectModel.text.element: ['REFrequencyUnitName']
  key cast( dd07t.domvalue_l as recdvdmfrequencyunit )  as REFrequencyUnit,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as REFrequencyUnitName,
      _REFrequencyUnit,
      _Language
}
where
      dd07t.domname  = 'RECDFREQUENCYUNIT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
