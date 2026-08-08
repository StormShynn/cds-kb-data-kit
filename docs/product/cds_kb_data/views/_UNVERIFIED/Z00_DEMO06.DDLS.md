---
name: Z00_DEMO06.DDLS
description: "Demo 6: Outer Joins"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/appenmaier/abap_2601/blob/7395d2798390d70e5816a44ca6081488e619e497/src/z00_demo06.ddls.asddls
semantic_en: "Demo 6: Outer Joins — CDS view."
semantic_vi: "Demo 6: Outer Joins — CDS view dựa trên Demo 6: Outer Joins."
keywords:
  - "demo"
  - "outer"
  - "joins"
  - "carrier"
  - "connection"
  - "flight"
  - "date"
  - "name"
  - "airport"
---
# Z00_DEMO06.DDLS

**Demo 6: Outer Joins**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/appenmaier/abap_2601/blob/7395d2798390d70e5816a44ca6081488e619e497/src/z00_demo06.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CarrierId` | ✓ | |  | `carrier_id` |  |  |
| `ConnectionId` | ✓ | |  | `connection_id` |  |  |
| `FlightDate` | ✓ | |  | `flight_date` |  |  |
| `Name` |  | |  | `name` |  |  |
| `AirportFromId` |  | |  | `airport_from_id` |  |  |
| `AirportToId` |  | |  | `airport_to_id` |  |  |

## Source Code

*Source: [https://github.com/appenmaier/abap_2601/blob/7395d2798390d70e5816a44ca6081488e619e497/src/z00_demo06.ddls.asddls](https://github.com/appenmaier/abap_2601/blob/7395d2798390d70e5816a44ca6081488e619e497/src/z00_demo06.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [ #NONE ]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Demo 6: Outer Joins'

@Metadata.ignorePropagatedAnnotations: true

define view entity Z00_Demo06
  as select from    /dmo/connection as c

    left outer join /dmo/carrier    as a
      on c.carrier_id = a.carrier_id

    left outer join /dmo/flight     as f
      on  f.carrier_id    = c.carrier_id
      and f.connection_id = c.connection_id

{
  key a.carrier_id      as CarrierId,
  key c.connection_id   as ConnectionId,
  key f.flight_date     as FlightDate,

      a.name            as Name,
      c.airport_from_id as AirportFromId,
      c.airport_to_id   as AirportToId
}
```
