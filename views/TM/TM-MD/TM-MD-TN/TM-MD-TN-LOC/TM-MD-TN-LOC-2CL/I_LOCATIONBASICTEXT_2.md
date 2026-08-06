---
name: I_LOCATIONBASICTEXT_2
description: Locationbasictext 2
app_component: TM-MD-TN-LOC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-TN
  - interface-view
  - text
  - component:TM-MD-TN-LOC-2CL
  - lob:Other
---
# I_LOCATIONBASICTEXT_2

**Locationbasictext 2**

| Property | Value |
|---|---|
| App Component | `TM-MD-TN-LOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `LocationUUID` | `cast( locid as /sapapo/location_id preserving type )` |
| key `Language` | `cast( spras as spras preserving type )` |
| `LocationDescription` | `descr40` |
| `_Language` | *Association* |
| `_LocationBasic` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData:{
    blocking: #REQUIRED
  }
}
@ObjectModel:{
  dataCategory: #TEXT,
  representativeKey: 'LocationUUID',
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities:[ #LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY]
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Location - Text'

define view entity I_LocationBasicText_2
  as select from /sapapo/loct
  association [0..1] to I_Language               as _Language      on $projection.Language = _Language.Language
  association        to parent I_LocationBasic_2 as _LocationBasic on $projection.LocationUUID = _LocationBasic.LocationUUID
{
  key cast( locid as /sapapo/location_id preserving type ) as LocationUUID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( spras as spras preserving type )               as Language,
      @Semantics.text: true
      descr40                                              as LocationDescription,

      /* Associations */
      _Language,
      _LocationBasic
}
```
