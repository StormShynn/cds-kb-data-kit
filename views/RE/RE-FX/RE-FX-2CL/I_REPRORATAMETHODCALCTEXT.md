---
name: I_REPRORATAMETHODCALCTEXT
description: Reproratamethodcalctext
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
# I_REPRORATAMETHODCALCTEXT

**Reproratamethodcalctext**

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
| key `REProRataMethodCalc` | `cast( dd07t.domvalue_l as recdvdmcalcmethper )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `REProRataMethodCalcName` | `cast( dd07t.ddtext as val_text preserving type )` |
| `_Language` | *Association* |
| `_REProRataMethodCalc` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREPROMETHCALCT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'RE Pro Rata Method Calculation - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REProRataMethodCalc',
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
  sapObjectNodeType.name: 'REProRataMethodCalcText'
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_REProRataMethodCalcText
  as select from dd07t
  association        to parent I_REProRataMethodCalc as _REProRataMethodCalc on $projection.REProRataMethodCalc = _REProRataMethodCalc.REProRataMethodCalc
  association [0..1] to I_Language                   as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_REProRataMethodCalc'
      @ObjectModel.text.element: ['REProRataMethodCalcName']
  key cast( dd07t.domvalue_l as recdvdmcalcmethper )    as REProRataMethodCalc,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as REProRataMethodCalcName,
      _REProRataMethodCalc,
      _Language
}
where
      dd07t.domname  = 'RECDCALCMETHPER'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
