---
name: I_TRANSPORTATIONRATEVALIDITY_2
description: Transportationratevalidity 2
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
  - transport
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPORTATIONRATEVALIDITY_2

**Transportationratevalidity 2**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateValidityUUID` | ✓ | |  | `cast(db_key as /scmtms/transprate_val_uuid preserving type)` |  |  |
| `TransportationRateUUID` |  | |  | `cast(parent_key as /scmtms/transpratetable_uuid preserving type)` |  |  |
| `TranspRateValidityCurrency` |  | |  | `cast( case when currency = '%' then cast('' as /scmtms/vdm_rt_valdty_curr) else currency end as /scmtms/vdm_rt_valdty_curr)` |  |  |
| `TranspRateTblValidityPctUnit` |  | |  | `cast( case when currency = '%' then cast( '%' as abap.char( 3 )) else '' end as /scmtms/vdm_rt_valdty_pct_unit)` |  |  |
| `TranspRateValidityLfcycStatus` |  | |  | `cast(lifecyclestatus as /scmtms/vdm_rt_valdty_lfcycsts preserving type)` |  |  |
| `TranspRateValidityEndDate` |  | |  | `cast(valid_end_dt as /scmtms/vdm_rt_valdty_end_dt preserving type)` |  |  |
| `TranspRateValidityStartDate` |  | |  | `cast(valid_start_dt as /scmtms/vdm_rt_valdty_strt_dt preserving type)` |  |  |
| `_TranspRateValidityCurrency` | | ✓ | | | | |
| `_TranspRateTableValdtySts` | | ✓ | | | | |
| `_TranspRateValidityPctUnit` | | ✓ | | | | |
| `_TransportationRate` | | ✓ | | | | |
| `_TranspRateCalculationRule` | | ✓ | | | | |
| `_TranspRateDimension01` | | ✓ | | | | |
| `_TranspRateDimension02` | | ✓ | | | | |
| `_TranspRateDimension03` | | ✓ | | | | |
| `_TranspRateDimension04` | | ✓ | | | | |
| `_TranspRateDimension05` | | ✓ | | | | |
| `_TranspRateDimension06` | | ✓ | | | | |
| `_TranspRateDimension07` | | ✓ | | | | |
| `_TranspRateDimension08` | | ✓ | | | | |
| `_TranspRateDimension09` | | ✓ | | | | |
| `_TranspRateDimension10` | | ✓ | | | | |
| `_TranspRateDimension11` | | ✓ | | | | |
| `_TranspRateDimension12` | | ✓ | | | | |
| `_TranspRateDimension13` | | ✓ | | | | |
| `_TranspRateDimension14` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspRateValidityCurrency` | `I_Currency` | [1..1] |
| `_TranspRateTableValdtySts` | `I_TranspRateTableValdtySts` | [0..1] |
| `_TranspRateValidityPctUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA'),
                 privilegedAssociations: ['_TransportationRate',
                                          '_TranspRateCalculationRule',
                                          '_TranspRateDimension01',
                                          '_TranspRateDimension02',
                                          '_TranspRateDimension03',
                                          '_TranspRateDimension04',
                                          '_TranspRateDimension05',
                                          '_TranspRateDimension06',
                                          '_TranspRateDimension07',
                                          '_TranspRateDimension08',
                                          '_TranspRateDimension09',
                                          '_TranspRateDimension10',
                                          '_TranspRateDimension11',
                                          '_TranspRateDimension12',
                                          '_TranspRateDimension13',
                                          '_TranspRateDimension14'] }
@Analytics.technicalName: 'ITRTVALDTY'
@EndUserText: {label: 'Transportation Rate Validity'}
@ObjectModel: {sapObjectNodeType.name: 'TranspRateTableValidity',
               representativeKey: 'TranspRateValidityUUID',
               usageType: { serviceQuality: #A,
                            sizeCategory: #L,
                            dataClass: #TRANSACTIONAL},
               supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@Metadata.ignorePropagatedAnnotations: true
@VDM: {viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TransportationRateValidity_2
  as select from /scmtms/d_tcrtvp as TranspRateValidity
  association        to parent I_TransportationRate as _TransportationRate         on $projection.TransportationRateUUID = _TransportationRate.TransportationRateUUID

  composition [0..1] of I_TranspRateCalcRule        as _TranspRateCalculationRule
  composition [0..*] of I_TranspRateDimension01     as _TranspRateDimension01
  composition [0..*] of I_TranspRateDimension02     as _TranspRateDimension02
  composition [0..*] of I_TranspRateDimension03     as _TranspRateDimension03
  composition [0..*] of I_TranspRateDimension04     as _TranspRateDimension04
  composition [0..*] of I_TranspRateDimension05     as _TranspRateDimension05
  composition [0..*] of I_TranspRateDimension06     as _TranspRateDimension06
  composition [0..*] of I_TranspRateDimension07     as _TranspRateDimension07
  composition [0..*] of I_TranspRateDimension08     as _TranspRateDimension08
  composition [0..*] of I_TranspRateDimension09     as _TranspRateDimension09
  composition [0..*] of I_TranspRateDimension10     as _TranspRateDimension10
  composition [0..*] of I_TranspRateDimension11     as _TranspRateDimension11
  composition [0..*] of I_TranspRateDimension12     as _TranspRateDimension12
  composition [0..*] of I_TranspRateDimension13     as _TranspRateDimension13
  composition [0..*] of I_TranspRateDimension14     as _TranspRateDimension14

  association [1..1] to I_Currency                  as _TranspRateValidityCurrency on $projection.TranspRateValidityCurrency = _TranspRateValidityCurrency.Currency
  association [0..1] to I_TranspRateTableValdtySts  as _TranspRateTableValdtySts   on $projection.TranspRateValidityLfcycStatus = _TranspRateTableValdtySts.TranspRateValidityLfcycStatus
  association [0..1] to I_UnitOfMeasure             as _TranspRateValidityPctUnit  on $projection.TranspRateTblValidityPctUnit = _TranspRateValidityPctUnit.UnitOfMeasure
{
  key  cast(db_key as /scmtms/transprate_val_uuid preserving type)             as TranspRateValidityUUID,
       @ObjectModel.foreignKey.association: '_TransportationRate'
       cast(parent_key as /scmtms/transpratetable_uuid  preserving type)       as TransportationRateUUID,

       @ObjectModel.foreignKey.association: '_TranspRateValidityCurrency'
       cast( case when currency = '%'
       then cast('' as /scmtms/vdm_rt_valdty_curr)
       else currency
       end as /scmtms/vdm_rt_valdty_curr)                                      as TranspRateValidityCurrency,

       @ObjectModel.foreignKey.association: '_TranspRateValidityPctUnit'
       cast( case when currency = '%'
          then cast( '%' as abap.char( 3 ))
          else  ''
       end   as /scmtms/vdm_rt_valdty_pct_unit)                                as TranspRateTblValidityPctUnit,

       @ObjectModel.foreignKey.association: '_TranspRateTableValdtySts'
       cast(lifecyclestatus as /scmtms/vdm_rt_valdty_lfcycsts preserving type) as TranspRateValidityLfcycStatus,
       cast(valid_end_dt as /scmtms/vdm_rt_valdty_end_dt preserving type)      as TranspRateValidityEndDate,
       cast(valid_start_dt as /scmtms/vdm_rt_valdty_strt_dt preserving type)   as TranspRateValidityStartDate,

       /* Associations */
       @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
       _TransportationRate,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateCalculationRule,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension01,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension02,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension03,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension04,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension05,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension06,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension07,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension08,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension09,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension10,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension11,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension12,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension13,
       @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
       _TranspRateDimension14,

       _TranspRateValidityCurrency,
       _TranspRateTableValdtySts,
       _TranspRateValidityPctUnit

}
```
