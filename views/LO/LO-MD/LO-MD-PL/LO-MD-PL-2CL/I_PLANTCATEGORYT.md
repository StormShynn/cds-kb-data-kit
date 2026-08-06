---
name: I_PLANTCATEGORYT
description: Plantcategoryt
app_component: LO-MD-PL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-PL
  - interface-view
  - plant
  - component:LO-MD-PL-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PLANTCATEGORYT

**Plantcategoryt**

| Property | Value |
|---|---|
| App Component | `LO-MD-PL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PlantCategory` | `cast(substring( domvalue_l, 1, 1 ) as vlfkz)` |
| key `Language` | `ddlanguage` |
| `PlantCategoryName` | `ddtext` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Plant Category - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #TEXT,
                representativeKey: 'PlantCategory',
                sapObjectNodeType: {
                                     name: 'PlantCategory'
                                   },
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics: {
              internalName: #LOCAL,
              dataExtraction.enabled: true
            }
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Consumption.ranked: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/

define view entity I_PlantCategoryT
  as select from dd07t
  association [0..1] to I_Language                 as _Language on $projection.Language = _Language.Language
{
  key cast(substring( domvalue_l, 1, 1 ) as vlfkz) as PlantCategory, //casting to have the right label for consumers
      @Semantics.language: true
  key ddlanguage                                   as Language,
      @Semantics.text: true
      ddtext                                       as PlantCategoryName,
      _Language
}
where domname  = 'VLFKZ' and as4local = 'A'
```
