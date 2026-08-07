---
name: Z12_DEMO02.DDLS
description: Join Examples
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/FalkAurel/S4D400/blob/7a6e4255e00ba2e7ec505fbf65f6764901244c3f/src/z12_demo02.ddls.asddls
semantic_en: Join Examples — CDS view.
semantic_vi: Join Examples — CDS view dựa trên Join Examples.
keywords:
  - join
  - examples
  - carrier
  - connection
  - flight
  - date
  - name
  - airport
tags:
  - LE
  - component:LE
  - lob:logistics execution
---
# Z12_DEMO02.DDLS

**Join Examples**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/FalkAurel/S4D400/blob/7a6e4255e00ba2e7ec505fbf65f6764901244c3f/src/z12_demo02.ddls.asddls) |

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

*Source: [https://github.com/FalkAurel/S4D400/blob/7a6e4255e00ba2e7ec505fbf65f6764901244c3f/src/z12_demo02.ddls.asddls](https://github.com/FalkAurel/S4D400/blob/7a6e4255e00ba2e7ec505fbf65f6764901244c3f/src/z12_demo02.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Join Examples'
@Metadata.ignorePropagatedAnnotations: true
define view entity Z12_Demo02
  as select from /dmo/connection as c
    inner join   /dmo/carrier    as a on c.carrier_id = a.carrier_id
    inner join   /dmo/flight     as f on  f.carrier_id    = c.carrier_id
                                      and f.connection_id = c.connection_id

{
  key a.carrier_id      as CarrierId,
  key c.connection_id   as ConnectionId,
  key f.flight_date     as FlightDate,
      a.name            as Name,
      c.airport_from_id as AirportFromId,
      c.airport_to_id   as AirportToId
}

where
      c.carrier_id    = 'LH'
  and c.connection_id = '0400'
```
