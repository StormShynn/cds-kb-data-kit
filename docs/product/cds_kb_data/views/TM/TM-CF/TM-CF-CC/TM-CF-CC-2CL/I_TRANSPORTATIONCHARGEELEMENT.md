---
name: I_TRANSPORTATIONCHARGEELEMENT
description: "Transportationchargeelement"
app_component: TM-CF-CC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-CF
  - TM-CF-CC
  - interface-view
  - transport
  - component:TM-CF-CC-2CL
  - lob:Other
---
# I_TRANSPORTATIONCHARGEELEMENT

**Transportationchargeelement**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeElementUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_chrg_element_uuid preserving type )` |  |  |
| `TransportationChargeUUID` |  | |  | `cast(root_key as /scmtms/vdm_transpcharge_uuid preserving type )` |  |  |
| `TranspChargeItemUUID` |  | |  | `cast(parent_key as /scmtms/vdm_chrg_itm_db_key preserving type )` |  |  |
| `TranspChrgElmntCalcShtLineNo` |  | |  | `linenr` |  |  |
| `TranspChargeInstrnType` |  | |  | `tccalcresins040` |  |  |
| `TranspChargeElementType` |  | |  | `tcet084` |  |  |
| `TranspChrgElmntCalcResBase` |  | |  | `clcresbas036` |  |  |
| `TranspChrgElmntCalcDateType` |  | |  | `calc_date_type` |  |  |
| `TranspChrgElmntCalcDateTime` |  | |  | `calc_date_tstmp` |  |  |
| `TranspChrgElmntIsInactive` |  | |  | `inactive` |  |  |
| `TranspChrgElmntLoglRefDesc` |  | |  | `ref_desc` |  |  |
| `TranspRateAmtIsManuallyChanged` |  | |  | `fixatincod179_i` |  |  |
| `TranspChrgElmntIsMandatory` |  | |  | `mandatory` |  |  |
| `TranspChrgElmntCalcAmount` |  | |  | `cast( cast( calc_amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_calc_amount_ml )` |  |  |
| `TranspChrgElmntCalcAmtCrcy` |  | |  | `cast(calc_amount_curr as /scmtms/vdm_calc_amount_crcy preserving type)` |  |  |
| `TranspChrgElmntInvcdAmount` |  | |  | `cast( cast( invoiced_amt as abap.dec(31,6)) * 10000 as /scmtms/vdm_invc_amount_ml )` |  |  |
| `TranspChrgElmntInvcdAmtCrcy` |  | |  | `cast( invoiced_amt_curr as /scmtms/vdm_invc_amount_crcy preserving type )` |  |  |
| `TranspChrgElmntRateAmount` |  | |  | `cast( cast( rate_amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_rate_amount_ml )` |  |  |
| `TranspChrgElmntRateAmtCrcy` |  | |  | `cast(rate_amount_curr as /scmtms/vdm_rate_amount_crcy preserving type)` |  |  |
| `TranspChrgElmntAmtInDocCrcy` |  | |  | `cast( cast( amount as abap.dec(31,6) ) * 10000 as transpchrgtotalamtindoccrcy )` |  |  |
| `TranspChrgElmntDocCurrency` |  | |  | `cast(currcode016 as /scmtms/doc_currency preserving type)` |  |  |
| `TranspChrgElmntAmtInLoclCrcy` |  | |  | `cast( cast( amountlcl as abap.dec(31,6) ) * 10000 as transpchrgtotalamtinloclcrcy )` |  |  |
| `TranspChrgElmntLoclCurrency` |  | |  | `cast(currcode016lcl as /scmtms/vdm_local_amount_crcy preserving type)` |  |  |
| `TranspChrgElmntLineNumber` |  | |  | `cast(my_tce_linenr as /scmtms/vdm_chrg_el_line_no preserving type)` |  |  |
| `TranspChrgElmntRefFrmLineNmbr` |  | |  | `cast(calc_ref_line_no as /scmtms/vdm_tcc_ref_frm_item preserving type )` |  |  |
| `TranspChrgElmntRefToLineNmbr` |  | |  | `cast(calc_ref_to_no as /scmtms/vdm_tcc_ref_to_item preserving type )` |  |  |
| `TranspChrgElmntIndexBaseDteTme` |  | |  | `index_base_date_ts` |  |  |
| `TranspChrgElmntRndngPrfl` |  | |  | `round_rule` |  |  |
| `TranspDimnWeightProfile` |  | |  | `dim_wt_profile` |  |  |
| `TranspChrgElmntCalcMethName` |  | |  | `calc_meth_name` |  |  |
| `TranspChrgElmntCalcMethType` |  | |  | `calc_meth_code` |  |  |
| `TranspChargeCalcStatus` |  | |  | `cast( case when exceptionind = 'X' then '03' when inactive = 'X' or ( calc_amount is initial and zero_rate is initial and manual_change is initial and manual_entry is initial and amount is initial) or (rate_amount_curr = '%' and tccs_curr = '%' and amount is initial and calc_amount is initial ) then '05' else '02' end as /scmtms/tcc_calc_status )` |  |  |
| `TranspChargePostingStatus` |  | |  | `invoicing` |  |  |
| `TranspChrgElmntRateUUID` |  | |  | `uuid026` |  |  |
| `TranspRateTableID` |  | |  | `rate_id` |  |  |
| `TranspChrgElmntIdxRateTblUUID` |  | |  | `uuid_index_rate` |  |  |
| `TranspChrgElmntRefElmntUUID` |  | |  | `cast(ref_elem_key as /scmtms/vdm_ref_chrg_el_uuid preserving type )` |  |  |
| `TranspChrgElmntIsDeleted` |  | |  | `cast(is_technical as /scmtms/vdm_tcc_el_is_del preserving type )` |  |  |
| `_TransportationCharge` | | ✓ | | | | |
| `_TranspChargeInstrnType` | | ✓ | | | | |
| `_TranspChargeElementType` | | ✓ | | | | |
| `_TranspChargeCalcReslnBase` | | ✓ | | | | |
| `_TranspChrgElmntCalcAmtCrcy` | | ✓ | | | | |
| `_TranspChrgElmntInvcdAmtCrcy` | | ✓ | | | | |
| `_TranspChrgElmntRateAmtCrcy` | | ✓ | | | | |
| `_TranspChrgElmntDocCurrency` | | ✓ | | | | |
| `_TranspChrgElmntLoclCurrency` | | ✓ | | | | |
| `_TranspDimnWeightProfile` | | ✓ | | | | |
| `_TranspChrgElmntCalcMethType` | | ✓ | | | | |
| `_TranspChargePostingStatus` | | ✓ | | | | |
| `_TranspChrgElmntCalcDateType` | | ✓ | | | | |
| `_TranspChrgElmntRate` | | ✓ | | | | |
| `_TranspChargeItem` | | ✓ | | | | |
| `_TranspChargeCalcBase` | | ✓ | | | | |
| `_TranspChargeCalcRule` | | ✓ | | | | |
| `_TranspChargeExchRate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationCharge` | `I_TransportationCharge` | [1..1] |
| `_TranspChargeInstrnType` | `I_TranspChargeInstrnType` | [0..1] |
| `_TranspChargeElementType` | `I_TranspChargeType` | [0..1] |
| `_TranspChargeCalcReslnBase` | `I_TranspChargeCalcReslnBase` | [0..1] |
| `_TranspChrgElmntCalcAmtCrcy` | `I_Currency` | [0..1] |
| `_TranspChrgElmntInvcdAmtCrcy` | `I_Currency` | [0..1] |
| `_TranspChrgElmntRateAmtCrcy` | `I_Currency` | [0..1] |
| `_TranspChrgElmntDocCurrency` | `I_Currency` | [0..1] |
| `_TranspChrgElmntLoclCurrency` | `I_Currency` | [0..1] |
| `_TranspDimnWeightProfile` | `I_TranspDimnWeightProfile` | [0..1] |
| `_TranspChrgElmntCalcMethType` | `I_TranspCalcMethodType` | [0..1] |
| `_TranspChargePostingStatus` | `I_TranspChargePostingStatus` | [0..1] |
| `_TranspChrgElmntCalcDateType` | `I_TranspCalculationDateType` | [0..1] |
| `_TranspChrgElmntRate` | `I_TransportationRate` | [0..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #PRIVILEGED_ONLY,
                  personalData.blocking:  #('TRANSACTIONAL_DATA'),
                  privilegedAssociations:  [ '_TranspChargeCalcBase','_TranspChargeCalcRule','_TranspChrgElmntRate','_TransportationCharge','_TranspChargeExchRate','_TranspChargeItem'  ]}
@Analytics.technicalName: 'ITRANSPCHARGEELEMENT'
@EndUserText.label: 'Transportation Charge Element'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TranspChargeElementUUID',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #XXL,
                                      dataClass:      #TRANSACTIONAL},
                 sapObjectNodeType.name: 'TransportationChargeElement',
                 supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TransportationChargeElement
  as select from /scmtms/d_tchrge
  /*association to Business Object parent node relation*/
  association        to parent I_TranspChargeItem     as _TranspChargeItem            on $projection.TranspChargeItemUUID = _TranspChargeItem.TranspChargeItemUUID
  /*Composition to Business Object Child node*/
  composition [0..*] of I_TranspChargeCalcBase        as _TranspChargeCalcBase
  composition [0..*] of I_TranspChargeCalcRule        as _TranspChargeCalcRule
  composition [0..*] of I_TranspChrgElmntExchangeRate as _TranspChargeExchRate
  /*Association to Business Object Root node*/
  association [1..1] to I_TransportationCharge        as _TransportationCharge        on $projection.TransportationChargeUUID = _TransportationCharge.TransportationChargeUUID

  /*Foreign Key and Text Associations*/
  association [0..1] to I_TranspChargeInstrnType      as _TranspChargeInstrnType      on $projection.TranspChargeInstrnType = _TranspChargeInstrnType.TranspChargeInstrnType
  association [0..1] to I_TranspChargeType            as _TranspChargeElementType     on $projection.TranspChargeElementType = _TranspChargeElementType.TranspChargeType
  association [0..1] to I_TranspChargeCalcReslnBase   as _TranspChargeCalcReslnBase   on $projection.TranspChrgElmntCalcResBase = _TranspChargeCalcReslnBase.TranspChargeCalcReslnBase
  association [0..1] to I_Currency                    as _TranspChrgElmntCalcAmtCrcy  on $projection.TranspChrgElmntCalcAmtCrcy = _TranspChrgElmntCalcAmtCrcy.Currency
  association [0..1] to I_Currency                    as _TranspChrgElmntInvcdAmtCrcy on $projection.TranspChrgElmntInvcdAmtCrcy = _TranspChrgElmntInvcdAmtCrcy.Currency
  association [0..1] to I_Currency                    as _TranspChrgElmntRateAmtCrcy  on $projection.TranspChrgElmntRateAmtCrcy = _TranspChrgElmntRateAmtCrcy.Currency
  association [0..1] to I_Currency                    as _TranspChrgElmntDocCurrency  on $projection.TranspChrgElmntDocCurrency = _TranspChrgElmntDocCurrency.Currency
  association [0..1] to I_Currency                    as _TranspChrgElmntLoclCurrency on $projection.TranspChrgElmntLoclCurrency = _TranspChrgElmntLoclCurrency.Currency
  association [0..1] to I_TranspDimnWeightProfile     as _TranspDimnWeightProfile     on $projection.TranspDimnWeightProfile = _TranspDimnWeightProfile.TranspDimnWeightProfile
  association [0..1] to I_TranspCalcMethodType        as _TranspChrgElmntCalcMethType on $projection.TranspChrgElmntCalcMethType = _TranspChrgElmntCalcMethType.TranspCalculationMethodType
  association [0..1] to I_TranspChargePostingStatus   as _TranspChargePostingStatus   on $projection.TranspChargePostingStatus = _TranspChargePostingStatus.TranspChargePostingStatus
  association [0..1] to I_TranspCalculationDateType   as _TranspChrgElmntCalcDateType on $projection.TranspChrgElmntCalcDateType = _TranspChrgElmntCalcDateType.TranspCalculationDateType
  association [0..1] to I_TransportationRate          as _TranspChrgElmntRate         on $projection.TranspChrgElmntRateUUID = _TranspChrgElmntRate.TransportationRateUUID

{
  key cast(db_key as /scmtms/vdm_chrg_element_uuid preserving type )                      as TranspChargeElementUUID,
      @ObjectModel.foreignKey.association: '_TransportationCharge'
      cast(root_key as /scmtms/vdm_transpcharge_uuid preserving type )                    as TransportationChargeUUID,
      @ObjectModel.foreignKey.association: '_TranspChargeItem'
      cast(parent_key as /scmtms/vdm_chrg_itm_db_key preserving type )                    as TranspChargeItemUUID,
      linenr                                                                              as TranspChrgElmntCalcShtLineNo,
      @ObjectModel.foreignKey.association: '_TranspChargeInstrnType'
      tccalcresins040                                                                     as TranspChargeInstrnType,
      @ObjectModel.foreignKey.association: '_TranspChargeElementType'
      tcet084                                                                             as TranspChargeElementType,

      @ObjectModel.foreignKey.association: '_TranspChargeCalcReslnBase'
      clcresbas036                                                                        as TranspChrgElmntCalcResBase,
      @ObjectModel.foreignKey.association: '_TranspChrgElmntCalcDateType'
      calc_date_type                                                                      as TranspChrgElmntCalcDateType,
      calc_date_tstmp                                                                     as TranspChrgElmntCalcDateTime,
      inactive                                                                            as TranspChrgElmntIsInactive,
      ref_desc                                                                            as TranspChrgElmntLoglRefDesc,
      fixatincod179_i                                                                     as TranspRateAmtIsManuallyChanged,
      mandatory                                                                           as TranspChrgElmntIsMandatory,
      //Calculated Amount
      @Semantics.amount.currencyCode: 'TranspChrgElmntCalcAmtCrcy'
      cast( cast( calc_amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_calc_amount_ml ) as TranspChrgElmntCalcAmount,
      @ObjectModel.foreignKey.association: '_TranspChrgElmntCalcAmtCrcy'
      cast(calc_amount_curr as /scmtms/vdm_calc_amount_crcy preserving type)              as TranspChrgElmntCalcAmtCrcy,
      //Invoiced Amount
      @Semantics.amount.currencyCode: 'TranspChrgElmntInvcdAmtCrcy'
      @Aggregation.default: #SUM
      cast( cast( invoiced_amt as abap.dec(31,6)) * 10000 as /scmtms/vdm_invc_amount_ml ) as TranspChrgElmntInvcdAmount,
      @ObjectModel.foreignKey.association: '_TranspChrgElmntInvcdAmtCrcy'
      cast( invoiced_amt_curr as /scmtms/vdm_invc_amount_crcy preserving type )           as TranspChrgElmntInvcdAmtCrcy,
      //Rate Amount
      @Semantics.amount.currencyCode: 'TranspChrgElmntRateAmtCrcy'
      cast( cast( rate_amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_rate_amount_ml ) as TranspChrgElmntRateAmount,
      @ObjectModel.foreignKey.association: '_TranspChrgElmntRateAmtCrcy'
      cast(rate_amount_curr as /scmtms/vdm_rate_amount_crcy preserving type)              as TranspChrgElmntRateAmtCrcy,
      //Amount in Document Currency
      @Semantics.amount.currencyCode: 'TranspChrgElmntDocCurrency'
      cast( cast( amount as abap.dec(31,6) ) * 10000 as transpchrgtotalamtindoccrcy )     as TranspChrgElmntAmtInDocCrcy,
      @ObjectModel.foreignKey.association: '_TranspChrgElmntDocCurrency'
      cast(currcode016 as /scmtms/doc_currency preserving type)                           as TranspChrgElmntDocCurrency,
      //Amount in Local Currency
      @Semantics.amount.currencyCode: 'TranspChrgElmntLoclCurrency'
      cast( cast( amountlcl as abap.dec(31,6) ) * 10000 as transpchrgtotalamtinloclcrcy ) as TranspChrgElmntAmtInLoclCrcy,
      @ObjectModel.foreignKey.association: '_TranspChrgElmntLoclCurrency'
      cast(currcode016lcl as /scmtms/vdm_local_amount_crcy preserving type)               as TranspChrgElmntLoclCurrency,
      //CE Line nos.
      cast(my_tce_linenr as /scmtms/vdm_chrg_el_line_no preserving type)                  as TranspChrgElmntLineNumber,
      cast(calc_ref_line_no as /scmtms/vdm_tcc_ref_frm_item preserving type )             as TranspChrgElmntRefFrmLineNmbr,
      cast(calc_ref_to_no as /scmtms/vdm_tcc_ref_to_item preserving type )                as TranspChrgElmntRefToLineNmbr,
      index_base_date_ts                                                                  as TranspChrgElmntIndexBaseDteTme,
      round_rule                                                                          as TranspChrgElmntRndngPrfl,
      dim_wt_profile                                                                      as TranspDimnWeightProfile,
      //Calculation Method
      calc_meth_name                                                                      as TranspChrgElmntCalcMethName,
      @ObjectModel.foreignKey.association: '_TranspChrgElmntCalcMethType'
      calc_meth_code                                                                      as TranspChrgElmntCalcMethType,
      //Calculation Status
      cast( case
            when exceptionind = 'X' then '03'
            when inactive = 'X' or
                 ( calc_amount is initial and zero_rate is initial
               and manual_change is initial and manual_entry is initial
               and amount is initial) or
                 (rate_amount_curr = '%' and tccs_curr = '%'
               and amount is initial and calc_amount is initial ) then '05'
              else '02'
            end      as /scmtms/tcc_calc_status )                                         as TranspChargeCalcStatus,
      @ObjectModel.foreignKey.association: '_TranspChargePostingStatus'
      invoicing                                                                           as TranspChargePostingStatus,
      uuid026                                                                             as TranspChrgElmntRateUUID,
      rate_id                                                                             as TranspRateTableID,
      uuid_index_rate                                                                     as TranspChrgElmntIdxRateTblUUID,
      cast(ref_elem_key as /scmtms/vdm_ref_chrg_el_uuid preserving type )                 as TranspChrgElmntRefElmntUUID,
      cast(is_technical as /scmtms/vdm_tcc_el_is_del preserving type )                    as TranspChrgElmntIsDeleted,

      /*Associations*/
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TranspChargeItem,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationCharge,

      _TranspChargeCalcBase,
      _TranspChargeCalcRule,
      _TranspChargeInstrnType,
      _TranspChargeElementType,
      _TranspChargeCalcReslnBase,
      _TranspChrgElmntCalcAmtCrcy,
      _TranspChrgElmntInvcdAmtCrcy,
      _TranspChrgElmntRateAmtCrcy,
      _TranspChrgElmntDocCurrency,
      _TranspChrgElmntLoclCurrency,
      _TranspChargeExchRate,
      _TranspDimnWeightProfile,
      _TranspChrgElmntCalcMethType,
      _TranspChargePostingStatus,
      _TranspChrgElmntCalcDateType,
      _TranspChrgElmntRate
}
where
  is_technical is initial
```
