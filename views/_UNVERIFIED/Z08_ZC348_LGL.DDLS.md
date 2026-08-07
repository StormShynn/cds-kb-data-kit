---
name: Z08_ZC348_LGL.DDLS
description: Association
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/WladimirRivera/ABAP_FOR_HANA_C348/blob/58efb74c80321f1b2909d1d92cd3a4ff5969fb03/src/z08_zc348_lgl.ddls.asddls
semantic_en: Association — CDS view based on spfli.
semantic_vi: Association — CDS view dựa trên spfli.
keywords:
  - association
  - carrid
  - connid
  - countryfr
  - cityfrom
  - airpfrom
tags:
  - bo:salesorder
---
# Z08_ZC348_LGL.DDLS

**Association**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/WladimirRivera/ABAP_FOR_HANA_C348/blob/58efb74c80321f1b2909d1d92cd3a4ff5969fb03/src/z08_zc348_lgl.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Carrid` | ✓ | |  | `carrid` |
| `Connid` | ✓ | |  | `connid` |
| `Countryfr` |  | |  | `countryfr` |
| `Cityfrom` |  | |  | `cityfrom` |
| `Airpfrom` |  | |  | `airpfrom` |
| `Countryto` |  | |  | `countryto` |
| `Cityto` |  | |  | `cityto` |
| `_Flights` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Flights` | `z07_c315_gvaler` | [0..*] |

## Source Code

*Source: [https://github.com/WladimirRivera/ABAP_FOR_HANA_C348/blob/58efb74c80321f1b2909d1d92cd3a4ff5969fb03/src/z08_zc348_lgl.ddls.asddls](https://github.com/WladimirRivera/ABAP_FOR_HANA_C348/blob/58efb74c80321f1b2909d1d92cd3a4ff5969fb03/src/z08_zc348_lgl.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'Z08C348'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Association'
define view Z08_ZC348_LGL
  as select from spfli as FlightsSchedule
  association [0..*] to z07_c315_gvaler as _Flights on  _Flights.Carrid = FlightsSchedule.carrid
                                                    and _Flights.Connid = FlightsSchedule.connid
{
  key  FlightsSchedule.carrid    as Carrid,
  key  FlightsSchedule.connid    as Connid,
       FlightsSchedule.countryfr as Countryfr,
       FlightsSchedule.cityfrom  as Cityfrom,
       FlightsSchedule.airpfrom  as Airpfrom,
       FlightsSchedule.countryto as Countryto,
       FlightsSchedule.cityto    as Cityto,
       _Flights
}
```
