---
name: I_TRANSPRATEDIMENSION10
description: Transpratedimension 10
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
# I_TRANSPRATEDIMENSION10

**Transpratedimension 10**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspRateDimensionUUID` | `cast(db_key as /scmtms/transprate_dim_uuid preserving type)` |
| `TranspRateValidityUUID` | `cast(parent_key as /scmtms/transprate_val_uuid preserving type)` |
| `TransportationRateUUID` | `cast(root_key as /scmtms/transpratetable_uuid preserving type)` |
| `TranspRateDimnScaleItem01UUID` | `cast(scale_item_key01 as /scmtms/vdm_sc_item_01_uuid preserving type)` |
| `TranspRateDimnScaleItem02UUID` | `cast(scale_item_key02 as /scmtms/vdm_sc_item_02_uuid preserving type)` |
| `TranspRateDimnScaleItem03UUID` | `cast(scale_item_key03 as /scmtms/vdm_sc_item_03_uuid preserving type)` |
| `TranspRateDimnScaleItem04UUID` | `cast(scale_item_key04 as /scmtms/vdm_sc_item_04_uuid preserving type)` |
| `TranspRateDimnScaleItem05UUID` | `cast(scale_item_key05 as /scmtms/vdm_sc_item_05_uuid preserving type)` |
| `TranspRateDimnScaleItem06UUID` | `cast(scale_item_key06 as /scmtms/vdm_sc_item_06_uuid preserving type)` |
| `TranspRateDimnScaleItem07UUID` | `cast(scale_item_key07 as /scmtms/vdm_sc_item_07_uuid preserving type)` |
| `TranspRateDimnScaleItem08UUID` | `cast(scale_item_key08 as /scmtms/vdm_sc_item_08_uuid preserving type)` |
| `TranspRateDimnScaleItem09UUID` | `cast(scale_item_key09 as /scmtms/vdm_sc_item_09_uuid preserving type)` |
| `TranspRateDimnScaleItem10UUID` | `cast(scale_item_key10 as /scmtms/vdm_sc_item_10_uuid preserving type)` |
| `TransportationRateCurrency` | `rate_curr` |
| `TranspRateAmountInRateCrcy` | `cast(cast( rate as abap.dec(31,6) ) * 10000 as /scmtms/vdm_rt_amt_in_rt_curr)` |
| `_TransportationRateCurrency` | *Association* |
| `_TransportationRate` | *Association* |
| `_TransportationRateValidity` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationRateCurrency` | `I_Currency` | [1..1] |
| `_TransportationRate` | `I_TransportationRate` | [1..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA'),
                 privilegedAssociations: ['_TransportationRateValidity'] }
@Analytics.technicalName: 'IRATEDIMN10'
@EndUserText: {label: 'Rate Table 10 Dimensional Rates'}
@ObjectModel: {sapObjectNodeType.name: 'TranspRateTableDimension10',
               representativeKey: 'TranspRateDimensionUUID',
               usageType: { serviceQuality: #A,
                            sizeCategory: #L,
                            dataClass: #TRANSACTIONAL},
               supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@Metadata.ignorePropagatedAnnotations: true
@VDM: {viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspRateDimension10
  as select from /scmtms/d_tcr10d as TranspRateDimn
  /* Business Object related Node Associations*/
  association        to parent I_TransportationRateValidity_2 as _TransportationRateValidity on $projection.TranspRateValidityUUID = _TransportationRateValidity.TranspRateValidityUUID
  
  /* Foreign Key and Text Associations */
  association [1..1] to I_Currency                     as _TransportationRateCurrency on $projection.TransportationRateCurrency = _TransportationRateCurrency.Currency
  
  //Association for Lock and Auth
  association [1..1] to I_TransportationRate           as _TransportationRate         on $projection.TransportationRateUUID = _TransportationRate.TransportationRateUUID
{
  key cast(db_key as /scmtms/transprate_dim_uuid preserving type)                   as TranspRateDimensionUUID,
      @ObjectModel.foreignKey.association: '_TransportationRateValidity'
      cast(parent_key as /scmtms/transprate_val_uuid preserving type)               as TranspRateValidityUUID,
      @ObjectModel.foreignKey.association: '_TransportationRate'
      cast(root_key as /scmtms/transpratetable_uuid preserving type)                as TransportationRateUUID,
      cast(scale_item_key01 as /scmtms/vdm_sc_item_01_uuid preserving type)         as TranspRateDimnScaleItem01UUID,
      cast(scale_item_key02 as /scmtms/vdm_sc_item_02_uuid preserving type)         as TranspRateDimnScaleItem02UUID,
      cast(scale_item_key03 as /scmtms/vdm_sc_item_03_uuid preserving type)         as TranspRateDimnScaleItem03UUID,
      cast(scale_item_key04 as /scmtms/vdm_sc_item_04_uuid preserving type)         as TranspRateDimnScaleItem04UUID,
      cast(scale_item_key05 as /scmtms/vdm_sc_item_05_uuid preserving type)         as TranspRateDimnScaleItem05UUID,
      cast(scale_item_key06 as /scmtms/vdm_sc_item_06_uuid preserving type)         as TranspRateDimnScaleItem06UUID,
      cast(scale_item_key07 as /scmtms/vdm_sc_item_07_uuid preserving type)         as TranspRateDimnScaleItem07UUID,
      cast(scale_item_key08 as /scmtms/vdm_sc_item_08_uuid preserving type)         as TranspRateDimnScaleItem08UUID,
      cast(scale_item_key09 as /scmtms/vdm_sc_item_09_uuid preserving type)         as TranspRateDimnScaleItem09UUID,
      cast(scale_item_key10 as /scmtms/vdm_sc_item_10_uuid preserving type)         as TranspRateDimnScaleItem10UUID,
      @ObjectModel.foreignKey.association: '_TransportationRateCurrency'
      rate_curr                                                                     as TransportationRateCurrency,
      @Semantics.amount.currencyCode: 'TransportationRateCurrency'
      cast(cast( rate as abap.dec(31,6) ) * 10000 as /scmtms/vdm_rt_amt_in_rt_curr) as TranspRateAmountInRateCrcy,

      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TransportationRateValidity,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationRate,
      
      _TransportationRateCurrency
}
```
