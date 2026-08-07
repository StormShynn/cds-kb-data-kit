---
name: I_TRANSPCALCULATIONBASE
description: "Transpcalculationbase"
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - component:TM-MD-CM-2CL
  - lob:Other
---
# I_TRANSPCALCULATIONBASE

**Transpcalculationbase**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationCalculationBase` | ✓ | |  | `cast(calc_base as /scmtms/vdm_tcm_calc_base preserving type)` |  |  |
| `TransportationScaleBase` |  | |  | `scale_base` |  |  |
| `_TranspScaleBase` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspScaleBase` | `I_TransportationScaleBase_2` | [1..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics:     { dataCategory:       #DIMENSION,
                  internalName:       #LOCAL }
@Analytics.technicalName: 'ITCALCBASE'
@Consumption.ranked: true
@EndUserText:{label: 'Transportation Calculation Base'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {sapObjectNodeType.name: 'TransportationCalculationBase',
                 representativeKey:  'TransportationCalculationBase',
                 modelingPattern: #ANALYTICAL_DIMENSION,
                 supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE],
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING}}
@Search.searchable: true
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define root view entity I_TranspCalculationBase
  as select from /scmtms/c_cbase
  composition [0..*] of I_TranspCalculationBaseTxt  as _Text
  association [1..1] to I_TransportationScaleBase_2 as _TranspScaleBase on $projection.TransportationScaleBase = _TranspScaleBase.TransportationScaleBase
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast(calc_base as /scmtms/vdm_tcm_calc_base preserving type) as TransportationCalculationBase,
      @ObjectModel.foreignKey.association: '_TranspScaleBase'
      scale_base                                                   as TransportationScaleBase,

      /* Associations */
      _Text,
      _TranspScaleBase
}
```
