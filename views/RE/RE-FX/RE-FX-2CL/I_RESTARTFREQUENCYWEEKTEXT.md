---
name: I_RESTARTFREQUENCYWEEKTEXT
description: Restartfrequencyweektext
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
# I_RESTARTFREQUENCYWEEKTEXT

**Restartfrequencyweektext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `REStartFrequencyWeek` | ✓ | |  | `cast( dd07t.domvalue_l as recdvdmweekfrom )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `REStartFrequencyWeekName` |  | |  | `cast( dd07t.ddtext as val_text preserving type )` |
| `_Language` | | ✓ | | |
| `_REStartFrequencyWeek` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRESTFREQWEEKT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Start Frequency Week - Text'

@Analytics:{
            dataExtraction.enabled: true
            }

@ObjectModel: {
                usageType:{
                            serviceQuality: #A,
                            dataClass: #META,
                            sizeCategory: #S
                           },
                dataCategory: #TEXT,
                representativeKey: 'REStartFrequencyWeek',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'REFrequencyStartWeekdayText'
                                         
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_REStartFrequencyWeekText
  as select from dd07t
  association        to parent I_REStartFrequencyWeek as _REStartFrequencyWeek on $projection.REStartFrequencyWeek = _REStartFrequencyWeek.REStartFrequencyWeek
  association [0..1] to I_Language                    as _Language           on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_REStartFrequencyWeek'
      @ObjectModel.text.element: ['REStartFrequencyWeekName']
  key cast( dd07t.domvalue_l as recdvdmweekfrom )          as REStartFrequencyWeek,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as REStartFrequencyWeekName,
      _REStartFrequencyWeek,
      _Language
}
where
      dd07t.domname  = 'RECDWEEKDAYS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
