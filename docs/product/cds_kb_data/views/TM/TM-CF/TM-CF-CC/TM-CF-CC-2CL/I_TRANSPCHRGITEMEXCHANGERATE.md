---
name: I_TRANSPCHRGITEMEXCHANGERATE
description: "TRANSPCHRGITEMExchange Rate"
app_component: TM-CF-CC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-CF
  - TM-CF-CC
  - interface-view
  - exchange-rate
  - item-level
  - component:TM-CF-CC-2CL
  - lob:Other
---
# I_TRANSPCHRGITEMEXCHANGERATE

**TRANSPCHRGITEMExchange Rate**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChrgExchangeRateUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_tcc_exch_rate_uuid preserving type )` |  |  |
| `TransportationChargeUUID` |  | |  | `cast(root_key as /scmtms/vdm_transpcharge_uuid preserving type )` |  |  |
| `TranspChargeItemUUID` |  | |  | `cast(parent_key as /scmtms/vdm_chrg_itm_db_key preserving type )` |  |  |
| `SourceCurrency` |  | |  | `cast(unitcurncy as fcurr_curr preserving type )` |  |  |
| `TargetCurrency` |  | |  | `cast(quotedcurncy as tcurr_curr preserving type )` |  |  |
| `TranspChrgExchangeRate` |  | |  | `rate` |  |  |
| `TranspExchRateIsManuallyChgd` |  | |  | `cast(fixed as transpexchrateismanuallychgd preserving type )` |  |  |
| `TranspChrgExchangeRateType` |  | |  | `exchgratetco05_i` |  |  |
| `TranspChrgIsLoclExchRate` |  | |  | `cast(doc_to_lcl_curr as /scmtms/vdm_tcc_exch_rt_is_lcl preserving type )` |  |  |
| `ExchangeRateDate` |  | |  | `quotedate` |  |  |
| `TranspExchRateDateIsMnllyChgd` |  | |  | `fix_exchrate_date` |  |  |
| `_TransportationCharge` | | ✓ | | | | |
| `_TranspChrgExchangeRateType` | | ✓ | | | | |
| `_SourceCurrency` | | ✓ | | | | |
| `_TargetCurrency` | | ✓ | | | | |
| `_TranspChrgItem` | | ✓ | | | | |

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
                  privilegedAssociations: [ '_TransportationCharge','_TranspChrgItem' ]}
@EndUserText:   {label:    'Transportation Charge Item Exchange Rate'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TranspChrgExchangeRateUUID',
                 usageType:          { serviceQuality: #A,
                                       sizeCategory:   #XL,
                                       dataClass:      #TRANSACTIONAL},
                 sapObjectNodeType.name: 'TranspChrgItemExchangeRate',
                 supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
                }
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspChrgItemExchangeRate
  as select from /scmtms/d_chxrat
  /*Business Object related Node Association*/
  association        to parent I_TranspChargeItem as _TranspChrgItem             on $projection.TranspChargeItemUUID = _TranspChrgItem.TranspChargeItemUUID
  association [1..1] to I_TransportationCharge    as _TransportationCharge       on $projection.TransportationChargeUUID = _TransportationCharge.TransportationChargeUUID
  association [1..1] to I_ExchangeRateType        as _TranspChrgExchangeRateType on $projection.TranspChrgExchangeRateType = _TranspChrgExchangeRateType.ExchangeRateType
  association [1..1] to I_Currency                as _SourceCurrency             on $projection.SourceCurrency = _SourceCurrency.Currency
  association [1..1] to I_Currency                as _TargetCurrency             on $projection.TargetCurrency = _TargetCurrency.Currency
{
  key cast(db_key as /scmtms/vdm_tcc_exch_rate_uuid preserving type )          as TranspChrgExchangeRateUUID,
      @ObjectModel.foreignKey.association: '_TransportationCharge'
      cast(root_key as /scmtms/vdm_transpcharge_uuid preserving type )         as TransportationChargeUUID,
      @ObjectModel.foreignKey.association: '_TranspChrgItem'
      cast(parent_key as /scmtms/vdm_chrg_itm_db_key preserving type )         as TranspChargeItemUUID,
      @ObjectModel.foreignKey.association: '_SourceCurrency'
      cast(unitcurncy as fcurr_curr preserving type )                          as SourceCurrency,
      @ObjectModel.foreignKey.association: '_TargetCurrency'
      cast(quotedcurncy as tcurr_curr preserving type )                        as TargetCurrency,
      rate                                                                     as TranspChrgExchangeRate,
      cast(fixed as transpexchrateismanuallychgd preserving type )             as TranspExchRateIsManuallyChgd,
      @ObjectModel.foreignKey.association: '_TranspChrgExchangeRateType'
      exchgratetco05_i                                                         as TranspChrgExchangeRateType,
      cast(doc_to_lcl_curr as /scmtms/vdm_tcc_exch_rt_is_lcl preserving type ) as TranspChrgIsLoclExchRate,
      quotedate                                                                as ExchangeRateDate,
      fix_exchrate_date                                                        as TranspExchRateDateIsMnllyChgd,
      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationCharge,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT]
      _TranspChrgItem,
      _SourceCurrency,
      _TargetCurrency,
      _TranspChrgExchangeRateType
}
where
      node_key        = hextobin('80E0ED0A0DD11DDEADA44CAE24A9879F')
```
