---
name: I_ROUTE
description: Route
app_component: LE-TRA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-TRA
  - interface-view
  - component:LE-TRA
  - lob:Logistics Execution
---
# I_ROUTE

**Route**

| Property | Value |
|---|---|
| App Component | `LE-TRA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Route` | ✓ | |  | `route` |  |  |
| `TransitDurationInCalendarDays` |  | |  | `cast(traztd as vdm_letra_duration preserving type )` |  |  |
| `TranspLeadTimeInCalDays` |  | |  | `cast(tdvztd as vdm_letra_duration preserving type )` |  |  |
| `TranspLeadTimeInHrsMin` |  | |  | `cast(tdvznd as vdm_letra_leadtime preserving type )` |  |  |
| `RouteFactoryCalendar` |  | |  | `spfbk` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RouteText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'Route'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
@EndUserText.label: 'Route'
@Search.searchable: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEROUTE'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations:true

define view I_Route
as select from
tvro 
association [0..*] to I_RouteText as _Text on $projection.Route = _Text.Route
{ 
   @Search.defaultSearchElement:true
   @ObjectModel.text.association: '_Text'
   key route as Route,
   cast(traztd as vdm_letra_duration preserving type ) as TransitDurationInCalendarDays,
   cast(tdvztd as vdm_letra_duration preserving type ) as TranspLeadTimeInCalDays,
   cast(tdvznd as vdm_letra_leadtime preserving type ) as TranspLeadTimeInHrsMin, 
   spfbk  as RouteFactoryCalendar,
   
    _Text
};
```
