---
name: I_SHIPPINGPOINT
description: "Shippingpoint"
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
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_SHIPPINGPOINT

**Shippingpoint**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShippingPoint` | ✓ | |  | `vstel` |  |  |
| `ActiveDepartureCountry` |  | |  | `aland` |  |  |
| `AddressID` |  | |  | `adrnr` |  |  |
| `PickingConfirmation` |  | |  | `koqui` |  |  |
| `ConfigDeprecationCode` |  | |  | `configdeprecationcode` |  |  |
| `LoadingTimeInWorkingDays` |  | |  | `cast(floor(division(floor(division(loadtg,10000,4)),24,2)) + division(floor(division(cast(mod(cast(floor(division(loadtg,10000,4)) as abap.int8),24)*3600 + floor(division(loadtg - floor(division(loadtg,10000,4))*10000,100,2))*60 + mod(cast(loadtg as abap.int8),100) as abap.int8),864,6)),100,2) as le_loadtg_day)` |  |  |
| `LoadingTimeWorkHoursInMinutes` |  | |  | `cast(floor(division(loadtn,10000,4))*60 + division(loadtn - floor(division(loadtn,10000,4))*10000,100,0) as le_loadtn_min)` |  |  |
| `PickPackTimeInWorkingDays` |  | |  | `cast(floor(division(floor(division(pipatg,10000,4)),24,2)) + division(floor(division(cast(mod(cast(floor(division(pipatg,10000,4))as abap.int8),24)*3600 + floor(division(pipatg - floor(division(pipatg,10000,4))*10000,100,2))*60 + mod(cast(pipatg as abap.int8),100) as abap.int8),864,6)),100,2) as le_pipatg_day)` |  |  |
| `PickPackTimeWorkHoursInMinutes` |  | |  | `cast(floor(division(pipatn,10000,4))*60 + division(pipatn - floor(division(pipatn,10000,4))*10000,100,0) as le_pipatn_min)` |  |  |
| `_Text` | | ✓ | | | | |
| `_ActiveDepartureCountry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ShippingPointText` | [0..*] |
| `_ActiveDepartureCountry` | `I_Country` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'ShippingPoint'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Shipping Point'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AbapCatalog.sqlViewName: 'ISDSHIPPINGPNT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'ShippingPoint'

define view I_ShippingPoint
as select from
tvst
association [0..*] to I_ShippingPointText as _Text on $projection.ShippingPoint = _Text.ShippingPoint
association [0..1] to I_Country as _ActiveDepartureCountry on $projection.ActiveDepartureCountry = _ActiveDepartureCountry.Country
{
    @ObjectModel.text.association: '_Text'
    key vstel             as ShippingPoint,
    @ObjectModel.foreignKey.association: '_ActiveDepartureCountry'
    aland                 as ActiveDepartureCountry,
    adrnr                 as AddressID,
    koqui                 as PickingConfirmation,
    configdeprecationcode as ConfigDeprecationCode,
    cast(floor(division(floor(division(loadtg,10000,4)),24,2))
      + division(floor(division(cast(mod(cast(floor(division(loadtg,10000,4)) as abap.int8),24)*3600 + floor(division(loadtg - floor(division(loadtg,10000,4))*10000,100,2))*60
      + mod(cast(loadtg as abap.int8),100) as abap.int8),864,6)),100,2) as le_loadtg_day)                                               as LoadingTimeInWorkingDays,
    cast(floor(division(loadtn,10000,4))*60 + division(loadtn - floor(division(loadtn,10000,4))*10000,100,0) as le_loadtn_min)          as LoadingTimeWorkHoursInMinutes,
    cast(floor(division(floor(division(pipatg,10000,4)),24,2))
      + division(floor(division(cast(mod(cast(floor(division(pipatg,10000,4))as abap.int8),24)*3600 + floor(division(pipatg - floor(division(pipatg,10000,4))*10000,100,2))*60
      + mod(cast(pipatg as abap.int8),100) as abap.int8),864,6)),100,2) as le_pipatg_day)                                               as PickPackTimeInWorkingDays,
    cast(floor(division(pipatn,10000,4))*60 + division(pipatn - floor(division(pipatn,10000,4))*10000,100,0) as le_pipatn_min)          as PickPackTimeWorkHoursInMinutes,

    _Text,
    _ActiveDepartureCountry
};
```
