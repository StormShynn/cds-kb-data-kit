---
name: I_LOCATIONBASICTEXT_2
description: "Locationbasictext 2"
app_component: TM-MD-TN-LOC-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LocationUUID` | ✓ | |  | `cast( locid as /sapapo/location_id preserving type )` |  |  |
| `Language` | ✓ | |  | `cast( spras as spras preserving type )` |  |  |
| `LocationDescription` |  | |  | `descr40` |  |  |
| `_Language` | | ✓ | | | | |
| `_LocationBasic` | | ✓ | | | | |

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
