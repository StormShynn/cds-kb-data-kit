---
name: I_TRANSPMEANSOFTRANSPORT
description: Transpmeansoftransport
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - transport
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPMEANSOFTRANSPORT

**Transpmeansoftransport**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspMeansOfTransport` | ✓ | |  | `ttype` |
| `TransportationMode` |  | |  | `trmodcode` |
| `MeansOfTransportIsPassive` |  | |  | `passive` |
| `_TransportationMode` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationMode` | `I_TransportationMode_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transportation Means of Transport'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'TranspMeansOfTransport'
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
@ObjectModel.sapObjectNodeType.name: 'TransportationMeansOfTransport'
define root view entity I_TranspMeansOfTransport
  as select from /sapapo/trtype
  composition [0..*] of I_TranspMeansOfTransportT as _Text
  association [0..1] to I_TransportationMode_2    as _TransportationMode on $projection.TransportationMode = _TransportationMode.TransportationMode
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key ttype     as TranspMeansOfTransport,
      @ObjectModel.foreignKey.association: '_TransportationMode'
      trmodcode as TransportationMode,
      passive   as MeansOfTransportIsPassive,

      /* Associations */
      _Text,
      _TransportationMode
}
where
      ttype <> '0002' //Rail
  and ttype <> '0004' //Courier, Express, and Delivery Company
  and ttype <> '0006' //Car
  and ttype <> '0007' //Truck (Subcontracting)
```
