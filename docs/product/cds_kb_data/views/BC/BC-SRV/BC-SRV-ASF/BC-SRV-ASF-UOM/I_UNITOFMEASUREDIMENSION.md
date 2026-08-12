---
name: I_UNITOFMEASUREDIMENSION
description: "Unit of MeasureDIMENSION"
app_component: BC-SRV-ASF-UOM
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ASF
  - interface-view
  - unit-of-measure
  - component:BC-SRV-ASF-UOM
  - lob:Basis Components
---
# I_UNITOFMEASUREDIMENSION

**Unit of MeasureDIMENSION**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-UOM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UnitOfMeasureDimension` | ✓ | |  | `dimid` | `CHAR(6)` | Dimension |
| `LengthExponent` |  | |  | `leng` | `INT2(5)` | Length Exponent |
| `MassExponent` |  | |  | `mass` | `INT2(5)` | Mass Exponent |
| `TimeExponent` |  | |  | `timex` | `INT2(5)` | Current exponent |
| `ElectricCurrentExponent` |  | |  | `ecurr` | `INT2(5)` | Electric Current Exponent |
| `TemperatureExponent` |  | |  | `temp` | `INT2(5)` | Temperature Exponent |
| `MoleQuantityExponent` |  | |  | `molqu` | `INT2(5)` | Mole Quantity Exponent |
| `LuminosityExponent` |  | |  | `light` | `INT2(5)` | Luminosity Exponent |
| `UnitOFMeasureSiUnit` |  | |  | `mssie` | `UNIT(3)` | SI Unit |
| `HasUnitsWithTemperatureSpec` |  | |  | `temp_dep` | `CHAR(1)` | Indicator: Dimension has Unit with Temperature Specification |
| `HasUnitsWithPressureSpec` |  | |  | `press_dep` | `CHAR(1)` | Indicator: Dimension has Units with Pressure Specification |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_UnitOfMeasureDimensionText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUNITOFMEADIM'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Unit of Measure Dimension'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'UnitOfMeasureDimension'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET]

@Analytics.internalName: #LOCAL
@Analytics:{ dataCategory: #DIMENSION, dataExtraction.enabled: true }

define view I_UnitOfMeasureDimension 
  as select from t006d
  
  association [0..*] to I_UnitOfMeasureDimensionText as _Text 
    on $projection.UnitOfMeasureDimension = _Text.UnitOfMeasureDimension

{
    @ObjectModel.text.association: '_Text'
    key dimid as UnitOfMeasureDimension,
    leng      as LengthExponent,
    mass      as MassExponent,
    timex     as TimeExponent,
    ecurr     as ElectricCurrentExponent,
    temp      as TemperatureExponent,
    molqu     as MoleQuantityExponent,
    light     as LuminosityExponent,
    mssie     as UnitOFMeasureSiUnit,
    temp_dep  as HasUnitsWithTemperatureSpec,
    press_dep as HasUnitsWithPressureSpec,  
     
    _Text
 
}
```
