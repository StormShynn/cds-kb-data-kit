---
name: I_ROUTEDETNBYCOUNTRYANDZONE
description: Routedetnbycountryandzone
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - country
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_ROUTEDETNBYCOUNTRYANDZONE

**Routedetnbycountryandzone**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DepartureCountry` | ✓ | |  | `aland` |  |  |
| `DepartureZone` | ✓ | |  | `azone` |  |  |
| `DestinationCountry` | ✓ | |  | `lland` |  |  |
| `ReceivingZone` | ✓ | |  | `lzone` |  |  |
| `_DepartureCountry` | | ✓ | | | | |
| `_DepartureZone` | | ✓ | | | | |
| `_DestinationCountry` | | ✓ | | | | |
| `_ReceivingZone` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Route determination by country and zone'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  },
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE],
  modelingPattern: #NONE
}

define view entity I_RouteDetnByCountryAndZone
  as select from troiz
  association of many to exact one I_Country            as _DepartureCountry   on  $projection.DepartureCountry = _DepartureCountry.Country
  association of many to exact one I_TransportationZone as _DepartureZone      on  $projection.DepartureCountry = _DepartureZone.CountryCode
                                                                               and $projection.DepartureZone    = _DepartureZone.TransportZone
  association of many to exact one I_Country            as _DestinationCountry on  $projection.DestinationCountry = _DestinationCountry.Country
  association of many to exact one I_TransportationZone as _ReceivingZone      on  $projection.DestinationCountry = _ReceivingZone.CountryCode
                                                                               and $projection.ReceivingZone = _ReceivingZone.TransportZone
{
      @ObjectModel.foreignKey.association: '_DepartureCountry'
  key aland as DepartureCountry,
      @ObjectModel.foreignKey.association: '_DepartureZone'
  key azone as DepartureZone,
      @ObjectModel.foreignKey.association: '_DestinationCountry'
  key lland as DestinationCountry,
      @ObjectModel.foreignKey.association: '_ReceivingZone'
  key lzone as ReceivingZone,

      //Associations
      _DepartureCountry,
      _DepartureZone,
      _DestinationCountry,
      _ReceivingZone
}
```
