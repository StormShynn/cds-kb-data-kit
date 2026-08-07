---
name: ZI_FLIGHT_TECH_R
description: Flight Information
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/ramniwas04/READ-ONLY-RAP-Application/blob/60c0f5918a70647bcce80eddb9f1f739f801f587/zi_flight_tech_r.asddls
semantic_en: Flight Information — CDS view.
semantic_vi: Flight Information — CDS view dựa trên Flight Information.
keywords:
  - flight
  - information
  - carrier_id
  - connection_id
  - flight_date
  - price
  - currency
  - code
---
# ZI_FLIGHT_TECH_R

**Flight Information**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/ramniwas04/READ-ONLY-RAP-Application/blob/60c0f5918a70647bcce80eddb9f1f739f801f587/zi_flight_tech_r.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CarrierId` | ✓ | |  | `carrier_id` |
| `ConnectionId` | ✓ | |  | `connection_id` |
| `FlightDate` | ✓ | |  | `flight_date` |
| `Price` |  | |  | `price` |
| `CurrencyCode` |  | |  | `currency_code` |
| `PlaneTypeId` |  | |  | `plane_type_id` |
| `SeatsMax` |  | |  | `seats_max` |
| `SeatsOccupied` |  | |  | `seats_occupied` |
| `_Airline` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Airline` | `ZI_Carrier_TECH_R` | [1] |

## Source Code

*Source: [https://github.com/ramniwas04/READ-ONLY-RAP-Application/blob/60c0f5918a70647bcce80eddb9f1f739f801f587/zi_flight_tech_r.asddls](https://github.com/ramniwas04/READ-ONLY-RAP-Application/blob/60c0f5918a70647bcce80eddb9f1f739f801f587/zi_flight_tech_r.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Flight Information'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
@Search.searchable: true
define view entity ZI_Flight_TECH_R
  as select from /dmo/flight
  association [1] to ZI_Carrier_TECH_R as _Airline on $projection.CarrierId = _Airline.CarrierId
{
      @UI.lineItem: [{ position: 10 }]
      @ObjectModel.text.association: '_Airline'
  key carrier_id     as CarrierId,
      @UI.lineItem: [{ position: 20 }]
  key connection_id  as ConnectionId,
      @UI.lineItem: [{ position: 30 }]
  key flight_date    as FlightDate,
      @UI.lineItem: [{ position: 40 }]
      @Semantics.amount.currencyCode: 'CurrencyCode'
      price          as Price,
      @UI.lineItem: [{ position: 50 }]
      currency_code  as CurrencyCode,
      @UI.lineItem: [{ position: 60 }]
      @Search.defaultSearchElement: true
      plane_type_id  as PlaneTypeId,
      @UI.lineItem: [{ position: 70 }]
      seats_max      as SeatsMax,
      @UI.lineItem: [{ position: 80 }]
      seats_occupied as SeatsOccupied,
      _Airline
}
```
