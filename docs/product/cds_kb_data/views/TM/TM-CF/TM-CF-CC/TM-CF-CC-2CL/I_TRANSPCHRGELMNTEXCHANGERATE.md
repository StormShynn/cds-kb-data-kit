---
name: I_TRANSPCHRGELMNTEXCHANGERATE
description: "TRANSPCHRGELMNTExchange Rate"
app_component: TM-CF-CC-2CL
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
  - TM-CF
  - TM-CF-CC
  - interface-view
  - exchange-rate
  - component:TM-CF-CC-2CL
  - lob:Other
---
# I_TRANSPCHRGELMNTEXCHANGERATE

**TRANSPCHRGELMNTExchange Rate**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
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
| `TranspChrgExchangeRateUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_tcc_exch_rate_uuid preserving type )` |  |  |
| `TransportationChargeUUID` |  | |  | `cast(root_key as /scmtms/vdm_transpcharge_uuid preserving type )` |  |  |
| `TranspChargeElementUUID` |  | |  | `cast(parent_key as /scmtms/vdm_chrg_element_uuid preserving type )` |  |  |
| `SourceCurrency` |  | |  | `cast(unitcurncy as fcurr_curr preserving type )` |  |  |
| `TargetCurrency` |  | |  | `cast(quotedcurncy as tcurr_curr preserving type )` |  |  |
| `TranspChrgExchangeRate` |  | |  | `rate` |  |  |
| `TranspExchRateIsManuallyChgd` |  | |  | `cast(fixed as transpexchrateismanuallychgd preserving type )` |  |  |
| `TranspChrgExchangeRateType` |  | |  | `exchgratetco05_i` |  |  |
| `ExchangeRateDate` |  | |  | `quotedate` |  |  |
| `TranspExchRateDateIsMnllyChgd` |  | |  | `fix_exchrate_date` |  |  |
| `_TransportationCharge` | | ✓ | | | | |
| `_TranspChrgExchangeRateType` | | ✓ | | | | |
| `_SourceCurrency` | | ✓ | | | | |
| `_TargetCurrency` | | ✓ | | | | |
| `_TransportationChargeElement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationCharge` | `I_TransportationCharge` | [1..1] |
| `_TranspChrgExchangeRateType` | `I_ExchangeRateType` | [1..1] |
| `_SourceCurrency` | `I_Currency` | [1..1] |
| `_TargetCurrency` | `I_Currency` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck:    #PRIVILEGED_ONLY,
                  personalData.blocking:  #('TRANSACTIONAL_DATA'),
                  privilegedAssociations: [ '_TransportationCharge','_TransportationChargeElement' ]}
@Analytics.technicalName: 'ITranspChrgElmntExchangeRate'
@EndUserText:   {label:    'Transp Charge Element Exchange Rate'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TranspChrgExchangeRateUUID',
                 usageType:          { serviceQuality: #A,
                                       sizeCategory:   #XL,
                                       dataClass:      #TRANSACTIONAL},
                 sapObjectNodeType.name: 'TranspChrgElmntExchangeRate',
                 supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
                }
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }
define view entity I_TranspChrgElmntExchangeRate
  as select from /scmtms/d_chxrat
  /* Business Object related Node Associations*/
  association [1..1] to I_TransportationCharge               as _TransportationCharge        on $projection.TransportationChargeUUID = _TransportationCharge.TransportationChargeUUID
  association        to parent I_TransportationChargeElement as _TransportationChargeElement on $projection.TranspChargeElementUUID = _TransportationChargeElement.TranspChargeElementUUID
  association [1..1] to I_ExchangeRateType                   as _TranspChrgExchangeRateType  on $projection.TranspChrgExchangeRateType = _TranspChrgExchangeRateType.ExchangeRateType
  association [1..1] to I_Currency                           as _SourceCurrency              on $projection.SourceCurrency = _SourceCurrency.Currency
  association [1..1] to I_Currency                           as _TargetCurrency              on $projection.TargetCurrency = _TargetCurrency.Currency
{

  key cast(db_key as /scmtms/vdm_tcc_exch_rate_uuid preserving type )          as TranspChrgExchangeRateUUID,
      @ObjectModel.foreignKey.association: '_TransportationCharge'
      cast(root_key as /scmtms/vdm_transpcharge_uuid preserving type )         as TransportationChargeUUID,
      @ObjectModel.foreignKey.association: '_TransportationChargeElement'
      cast(parent_key as /scmtms/vdm_chrg_element_uuid preserving type )       as TranspChargeElementUUID,
      @ObjectModel.foreignKey.association: '_SourceCurrency'
      cast(unitcurncy as fcurr_curr preserving type )                          as SourceCurrency,
      @ObjectModel.foreignKey.association: '_TargetCurrency'
      cast(quotedcurncy as tcurr_curr preserving type )                        as TargetCurrency,
      rate                                                                     as TranspChrgExchangeRate,
      cast(fixed as transpexchrateismanuallychgd preserving type )             as TranspExchRateIsManuallyChgd,
      @ObjectModel.foreignKey.association: '_TranspChrgExchangeRateType'
      exchgratetco05_i                                                         as TranspChrgExchangeRateType,
      quotedate                                                                as ExchangeRateDate,
      fix_exchrate_date                                                        as TranspExchRateDateIsMnllyChgd,

      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationCharge,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT]
      _TransportationChargeElement,
      _SourceCurrency,
      _TargetCurrency,
      _TranspChrgExchangeRateType
}
where
      node_key                                              = hextobin('80215ADE24E41DEFA0E7A25E148A5CC2')
  and _TransportationChargeElement.TranspChrgElmntIsDeleted is initial
```
