---
name: I_TRANSPRATESCALEREFERENCE
description: Transpratescalereference
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPRATESCALEREFERENCE

**Transpratescalereference**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateScaleRefUUID` | ✓ | |  | `cast( db_key as /scmtms/transpratescalref_uuid preserving type)` |  |  |
| `TransportationRateUUID` |  | |  | `cast ( ( parent_key ) as /scmtms/transpratetable_uuid preserving type)` |  |  |
| `TransportationScaleUUID` |  | |  | `cast(uuid030 as /scmtms/vdm_rate_scale_uuid preserving type)` |  |  |
| `TransportationCalculationBase` |  | |  | `calc_base` |  |  |
| `TranspRateScaleRefMinValIsSupp` |  | |  | `minval_supported` |  |  |
| `TranspRateScaleRefMaxValIsSupp` |  | |  | `maxval_supported` |  |  |
| `TranspRateScRefIsRlvtForBrkWgt` |  | |  | `rel_for_wgtbrk` |  |  |
| `TranspRateScaleRefScaleType` |  | |  | `scatyp` |  |  |
| `TranspRateScaleRefQtyUnit` |  | |  | `scale_uom` |  |  |
| `TranspRateScaleRefCurrency` |  | |  | `scale_curr` |  |  |
| `TranspRateScaleRefCalcType` |  | |  | `calc_typ` |  |  |
| `TranspRateDimensionIndex` |  | |  | `dimension_indx` |  |  |
| `TranspRateScaleRefNoValIsAllwd` |  | |  | `initval_support` |  |  |
| `TranspCmmdtyCodeNmbrngSchm` |  | |  | `cast(stcts as /scmtms/stcts preserving type)` |  |  |
| `_TranspScaleCalcType` | | ✓ | | | | |
| `_TranspScaleType` | | ✓ | | | | |
| `_TransportationCalculationBase` | | ✓ | | | | |
| `_TranspRateScaleRefQtyUnit` | | ✓ | | | | |
| `_TranspRateScaleRefCurrency` | | ✓ | | | | |
| `_TransportationRate` | | ✓ | | | | |
| `_TransportationScale` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspScaleCalcType` | `I_TranspScaleCalcType` | [1..1] |
| `_TranspScaleType` | `I_TransportationScaleType_2` | [1..1] |
| `_TransportationCalculationBase` | `I_TranspCalculationBase` | [1..1] |
| `_TranspRateScaleRefQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspRateScaleRefCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA'),
                 privilegedAssociations: ['_TransportationRate']}
@Analytics.technicalName: 'ITRATEREF'
@EndUserText: {label: 'Transportation Rate Scale Reference'}
@ObjectModel: {sapObjectNodeType.name: 'TranspRateTableScaleRef',
               representativeKey: 'TranspRateScaleRefUUID',
               usageType: { serviceQuality: #A,
                            sizeCategory: #L,
                            dataClass: #TRANSACTIONAL},
               supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] }
@Metadata.ignorePropagatedAnnotations: true
@VDM: {viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspRateScaleReference
  as select from /scmtms/d_tcrtsr as TranspRateScaleRef
  /* Business Object related Node Associations*/
  association        to parent I_TransportationRate as _TransportationRate            on $projection.TransportationRateUUID = _TransportationRate.TransportationRateUUID

  composition [1..1] of I_TransportationScale       as _TransportationScale

  /* Foreign Key and Text Associations */
  association [1..1] to I_TranspScaleCalcType       as _TranspScaleCalcType           on $projection.TranspRateScaleRefCalcType = _TranspScaleCalcType.TransportationCalculationType
  association [1..1] to I_TransportationScaleType_2 as _TranspScaleType               on $projection.TranspRateScaleRefScaleType = _TranspScaleType.TransportationScaleType
  association [1..1] to I_TranspCalculationBase     as _TransportationCalculationBase on $projection.TransportationCalculationBase = _TransportationCalculationBase.TransportationCalculationBase
  association [0..1] to I_UnitOfMeasure             as _TranspRateScaleRefQtyUnit     on $projection.TranspRateScaleRefQtyUnit = _TranspRateScaleRefQtyUnit.UnitOfMeasure
  association [0..1] to I_Currency                  as _TranspRateScaleRefCurrency    on $projection.TranspRateScaleRefCurrency = _TranspRateScaleRefCurrency.Currency
{
  key cast( db_key  as /scmtms/transpratescalref_uuid preserving type)       as TranspRateScaleRefUUID,
      @ObjectModel.foreignKey.association: '_TransportationRate'
      cast ( ( parent_key ) as /scmtms/transpratetable_uuid preserving type) as TransportationRateUUID,
      cast(uuid030 as /scmtms/vdm_rate_scale_uuid preserving type)           as TransportationScaleUUID,
      @ObjectModel.foreignKey.association: '_TransportationCalculationBase'
      calc_base                                                              as TransportationCalculationBase,
      minval_supported                                                       as TranspRateScaleRefMinValIsSupp,
      maxval_supported                                                       as TranspRateScaleRefMaxValIsSupp,
      rel_for_wgtbrk                                                         as TranspRateScRefIsRlvtForBrkWgt,
      @ObjectModel.foreignKey.association: '_TranspScaleType'
      scatyp                                                                 as TranspRateScaleRefScaleType,
      @ObjectModel.foreignKey.association: '_TranspRateScaleRefQtyUnit'
      scale_uom                                                              as TranspRateScaleRefQtyUnit,
      @ObjectModel.foreignKey.association: '_TranspRateScaleRefCurrency'
      scale_curr                                                             as TranspRateScaleRefCurrency,
      @ObjectModel.foreignKey.association: '_TranspScaleCalcType'
      calc_typ                                                               as TranspRateScaleRefCalcType,
      dimension_indx                                                         as TranspRateDimensionIndex,

      initval_support                                                        as TranspRateScaleRefNoValIsAllwd,
      cast(stcts as /scmtms/stcts preserving type)                           as TranspCmmdtyCodeNmbrngSchm,

      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _TransportationRate,

      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TransportationScale,

      _TranspScaleType,
      _TranspScaleCalcType,
      _TranspRateScaleRefQtyUnit,
      _TranspRateScaleRefCurrency,
      _TransportationCalculationBase
}
```
