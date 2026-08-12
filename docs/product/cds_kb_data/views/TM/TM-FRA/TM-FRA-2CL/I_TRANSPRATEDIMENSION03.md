---
name: I_TRANSPRATEDIMENSION03
description: "Transpratedimension 03"
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_TRANSPRATEDIMENSION03

**Transpratedimension 03**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateDimensionUUID` | ✓ | |  | `cast(db_key as /scmtms/transprate_dim_uuid preserving type)` |  |  |
| `TranspRateValidityUUID` |  | |  | `cast(parent_key as /scmtms/transprate_val_uuid preserving type)` |  |  |
| `TransportationRateUUID` |  | |  | `cast(root_key as /scmtms/transpratetable_uuid preserving type)` |  |  |
| `TranspRateDimnScaleItem01UUID` |  | |  | `cast(scale_item_key01 as /scmtms/vdm_sc_item_01_uuid preserving type)` |  |  |
| `TranspRateDimnScaleItem02UUID` |  | |  | `cast(scale_item_key02 as /scmtms/vdm_sc_item_02_uuid preserving type)` |  |  |
| `TranspRateDimnScaleItem03UUID` |  | |  | `cast(scale_item_key03 as /scmtms/vdm_sc_item_03_uuid preserving type)` |  |  |
| `TransportationRateCurrency` |  | |  | `rate_curr` |  |  |
| `TranspRateAmountInRateCrcy` |  | |  | `cast(cast( rate as abap.dec(31,6) ) * 10000 as /scmtms/vdm_rt_amt_in_rt_curr)` |  |  |
| `_TransportationRateCurrency` | | ✓ | | | | |
| `_TransportationRate` | | ✓ | | | | |
| `_TransportationRateValidity` | | ✓ | | | | |

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
@Analytics.technicalName: 'IRATEDIMN03'
@EndUserText: {label: 'Rate Table 3 Dimensional Rates'}
@ObjectModel: {sapObjectNodeType.name: 'TranspRateTableDimension03',
               representativeKey: 'TranspRateDimensionUUID',
               usageType: { serviceQuality: #A,
                            sizeCategory: #L,
                            dataClass: #TRANSACTIONAL},
               supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@Metadata.ignorePropagatedAnnotations: true
@VDM: {viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspRateDimension03
  as select from /scmtms/d_tcrt3d as TranspRateDimn
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
