---
name: I_TRANSPORTATIONMODE_2
description: Transportationmode 2
app_component: TM-MD-TN-2CL
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
  - transport
  - component:TM-MD-TN-2CL
  - lob:Other
---
# I_TRANSPORTATIONMODE_2

**Transportationmode 2**

| Property | Value |
|---|---|
| App Component | `TM-MD-TN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationMode` | ✓ | |  | `cast(vktra as /scmtms/vdm_tor_trmodcode preserving type )` |  |  |
| `TransportationModeCategory` |  | |  | `cast(trmodcat as /scmtms/vdm_tor_trmod_cat preserving type)` |  |  |
| `_TransportationModeCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationModeCategory` | `I_TransportationModeCategory` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transportation Mode'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'TransportationMode'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'TransportationMode'
define root view entity I_TransportationMode_2
  as select from tvtr
  composition [0..*] of I_TransportationModeText_2     as _Text
  association [0..1] to I_TransportationModeCategory as _TransportationModeCategory on $projection.TransportationModeCategory = _TransportationModeCategory.TransportationModeCategory
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast(vktra as /scmtms/vdm_tor_trmodcode preserving type )   as TransportationMode,
      @ObjectModel.foreignKey.association: '_TransportationModeCategory'
      cast(trmodcat as /scmtms/vdm_tor_trmod_cat preserving type) as TransportationModeCategory,

      /* Associations */
      _Text,
      _TransportationModeCategory
}
where
      vktra <> '04' //Inland Waterway
  and vktra <> '06' //Postal Service
```
