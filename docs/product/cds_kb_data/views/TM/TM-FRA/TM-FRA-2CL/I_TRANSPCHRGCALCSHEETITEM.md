---
name: I_TRANSPCHRGCALCSHEETITEM
description: "Transpchrgcalcsheetitem"
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
  - item-level
  - component:TM-FRA-2CL
  - lob:Other
---
# I_TRANSPCHRGCALCSHEETITEM

**Transpchrgcalcsheetitem**

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
| `TranspCalcSheetItemUUID` | ✓ | |  | `cast(db_key as /scmtms/transpcalcshtitm_uuid preserving type)` |  |  |
| `TranspCalculationSheetUUID` |  | |  | `cast(parent_key as /scmtms/transpcalcsheet_uuid preserving type)` |  |  |
| `TransportationAgreementUUID` |  | | `_TranspChargeCalcSheet` | `TransportationAgreementUUID` |  |  |
| `TranspCalculationSheetItem` |  | |  | `cast(linenr as /scmtms/vdm_tccs_item_number preserving type)` |  |  |
| `TranspChargeType` |  | |  | `tcet084` |  |  |
| `TranspChargeResolutionBase` |  | |  | `cast(clcresbas036 as /scmtms/vdm_tcm_res_base preserving type)` |  |  |
| `TransportationRateUUID` |  | |  | `uuid026` |  |  |
| `TranspCalcSheetItemCurrency` |  | |  | `case when currcode016 = '%' then cast('' as /scmtms/vdm_tccs_item_curr ) else cast(currcode016 as /scmtms/vdm_tccs_item_curr preserving type) end` |  |  |
| `TranspCalcSheetItemAmount` |  | |  | `case when currcode016 = '%' then cast( cast( 0 as abap.dec(31,6) ) * 10000 as /scmtms/vdm_tccs_item_amount ) else cast( cast( amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_tccs_item_amount ) end` |  |  |
| `TranspCalcSheetItemPctUnit` |  | |  | `cast( case when currcode016 = '%' then cast( '%' as abap.char( 3 )) else '' end as /scmtms/vdm_tccs_itm_pct_unit)` |  |  |
| `TranspCalcSheetItemAmountPct` |  | |  | `case when currcode016 = '%' then cast( cast( amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_tccs_itm_amt_pct_q ) else cast( cast( 0 as abap.dec(31,6) ) * 10000 as /scmtms/vdm_tccs_itm_amt_pct_q ) end` |  |  |
| `TranspCalculationMethodType` |  | |  | `calc_meth_code` |  |  |
| `TranspCalculationDateType` |  | |  | `calc_date_type` |  |  |
| `TranspChargeIsMandatory` |  | |  | `mandatory` |  |  |
| `TranspCalcBaselineUUID` |  | |  | `cast( calcbaseline_key as /scmtms/vdm_tccs_baseline_uuid preserving type)` |  |  |
| `TranspCalcSheetItemRefToUUID` |  | |  | `cast( calcbase_to_key as /scmtms/calcshtitm_ref_to_uuid preserving type)` |  |  |
| `TranspDimnWeightProfile` |  | |  | `dim_wt_profile` |  |  |
| `TranspChargeInstrnType` |  | |  | `tccalcresins040` |  |  |
| `TranspIndexRateTableUUID` |  | |  | `cast(uuid_index_rate as /scmtms/vdm_rt_index_uuid preserving type)` |  |  |
| `TranspCalcShtItmIdxBaseDteTime` |  | |  | `index_base_date_ts` |  |  |
| `TranspChargeIsDependent` |  | |  | `dependent_chrge` |  |  |
| `TransportationStageCategory` |  | |  | `stage_cat` |  |  |
| `TranspCalculationMethodName` |  | |  | `cast(calc_meth_name as /scmtms/vdm_tcm_calc_mthd_name preserving type)` |  |  |
| `TranspCalcShtItmIsManualCharge` |  | |  | `cast(manual_entry as /scmtms/vdm_tccs_item_mnl_chrg preserving type)` |  |  |
| `_TransportationRate` | | ✓ | | | | |
| `_TranspCalcSheetItemPctUnit` | | ✓ | | | | |
| `_TranspChrgCalcResolutionBase` | | ✓ | | | | |
| `_TranspChargeType` | | ✓ | | | | |
| `_TranspCalcMethodType` | | ✓ | | | | |
| `_TranspCalcSheetItemCurrency` | | ✓ | | | | |
| `_TransportationAgreement` | | ✓ | | | | |
| `_TranspChargeCalcSheet` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationRate` | `I_TransportationRate` | [0..1] |
| `_TranspCalcSheetItemPctUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TranspChrgCalcResolutionBase` | `I_TranspChargeCalcReslnBase` | [0..1] |
| `_TranspChargeType` | `I_TranspChargeType` | [0..1] |
| `_TranspCalcMethodType` | `I_TranspCalcMethodType` | [1..1] |
| `_TranspCalcSheetItemCurrency` | `I_Currency` | [0..1] |
| `_TransportationAgreement` | `I_TransportationAgreement` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking:#('TRANSACTIONAL_DATA'),
                  privilegedAssociations: ['_TransportationRate',
                                           '_TranspChargeCalcSheet']}
@Analytics.technicalName: 'ITCCSITEM'
@EndUserText:   { label:              'Transp Charge Calculation Sheet Item'}
@ObjectModel:   { sapObjectNodeType.name: 'FrtAgrmtCalcSheetItem',
                  representativeKey:  'TranspCalcSheetItemUUID',
                  usageType:          {serviceQuality: #A,
                                      sizeCategory:   #L,
                                      dataClass:      #TRANSACTIONAL},
                  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@Metadata.ignorePropagatedAnnotations: true
@VDM:           { viewType:           #BASIC,
                  lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspChrgCalcSheetItem
  as select from /scmtms/d_tccsit
  /* Business Object related Node Associations*/
  association        to parent I_TranspChrgCalculationSheet_2 as _TranspChargeCalcSheet        on $projection.TranspCalculationSheetUUID = _TranspChargeCalcSheet.TranspCalculationSheetUUID

  association [0..1] to I_TransportationRate                  as _TransportationRate           on $projection.TransportationRateUUID = _TransportationRate.TransportationRateUUID

  /* Foreign Key Associations */
  association [0..1] to I_UnitOfMeasure                       as _TranspCalcSheetItemPctUnit   on $projection.TranspCalcSheetItemPctUnit = _TranspCalcSheetItemPctUnit.UnitOfMeasure
  association [0..1] to I_TranspChargeCalcReslnBase           as _TranspChrgCalcResolutionBase on $projection.TranspChargeResolutionBase = _TranspChrgCalcResolutionBase.TranspChargeCalcReslnBase
  association [0..1] to I_TranspChargeType                    as _TranspChargeType             on $projection.TranspChargeType = _TranspChargeType.TranspChargeType
  association [1..1] to I_TranspCalcMethodType                as _TranspCalcMethodType         on $projection.TranspCalculationMethodType = _TranspCalcMethodType.TranspCalculationMethodType
  association [0..1] to I_Currency                            as _TranspCalcSheetItemCurrency  on $projection.TranspCalcSheetItemCurrency = _TranspCalcSheetItemCurrency.Currency
  association [1..1] to I_TransportationAgreement             as _TransportationAgreement    on $projection.TransportationAgreementUUID = _TransportationAgreement.TransportationAgreementUUID
{
  key cast(db_key as /scmtms/transpcalcshtitm_uuid preserving type)             as TranspCalcSheetItemUUID,
      cast(parent_key as /scmtms/transpcalcsheet_uuid preserving type)          as TranspCalculationSheetUUID,
      _TranspChargeCalcSheet.TransportationAgreementUUID                        as TransportationAgreementUUID,
      cast(linenr as  /scmtms/vdm_tccs_item_number preserving type)             as TranspCalculationSheetItem,
      @ObjectModel.foreignKey.association: '_TranspChargeType'
      tcet084                                                                   as TranspChargeType,
      @ObjectModel.foreignKey.association:'_TranspChrgCalcResolutionBase'
      cast(clcresbas036 as /scmtms/vdm_tcm_res_base preserving type)            as TranspChargeResolutionBase,
      uuid026                                                                   as TransportationRateUUID,
      @ObjectModel.foreignKey.association: '_TranspCalcSheetItemCurrency'
      case when currcode016 = '%'
      then cast('' as /scmtms/vdm_tccs_item_curr )
      else cast(currcode016 as /scmtms/vdm_tccs_item_curr preserving type)
      end                                                                       as TranspCalcSheetItemCurrency,
      @Semantics.amount.currencyCode: 'TranspCalcSheetItemCurrency'
      case when currcode016 = '%'
      then cast( cast( 0 as abap.dec(31,6) ) * 10000 as /scmtms/vdm_tccs_item_amount )
      else cast( cast( amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_tccs_item_amount )
      end                                                                       as TranspCalcSheetItemAmount,
      @ObjectModel.foreignKey.association: '_TranspCalcSheetItemPctUnit'
      cast( case when currcode016 = '%'
         then cast( '%' as abap.char( 3 ))
         else  ''
      end   as /scmtms/vdm_tccs_itm_pct_unit)                                   as TranspCalcSheetItemPctUnit,
      @Semantics.quantity.unitOfMeasure: 'TranspCalcSheetItemPctUnit'
      case when currcode016 = '%'
          then cast( cast( amount as abap.dec(31,6) ) * 10000 as /scmtms/vdm_tccs_itm_amt_pct_q )
          else cast( cast( 0 as abap.dec(31,6) ) * 10000 as /scmtms/vdm_tccs_itm_amt_pct_q )
      end                                                                       as TranspCalcSheetItemAmountPct,
      @ObjectModel.foreignKey.association: '_TranspCalcMethodType'
      calc_meth_code                                                            as TranspCalculationMethodType,
      calc_date_type                                                            as TranspCalculationDateType,
      mandatory                                                                 as TranspChargeIsMandatory,
      cast( calcbaseline_key as /scmtms/vdm_tccs_baseline_uuid preserving type) as TranspCalcBaselineUUID,
      cast( calcbase_to_key as /scmtms/calcshtitm_ref_to_uuid preserving type)  as TranspCalcSheetItemRefToUUID,
      dim_wt_profile                                                            as TranspDimnWeightProfile,
      tccalcresins040                                                           as TranspChargeInstrnType,
      cast(uuid_index_rate as /scmtms/vdm_rt_index_uuid preserving type)        as TranspIndexRateTableUUID,
      index_base_date_ts                                                        as TranspCalcShtItmIdxBaseDteTime,
      dependent_chrge                                                           as TranspChargeIsDependent,
      stage_cat                                                                 as TransportationStageCategory,
      cast(calc_meth_name as /scmtms/vdm_tcm_calc_mthd_name preserving type)    as TranspCalculationMethodName,
      cast(manual_entry as /scmtms/vdm_tccs_item_mnl_chrg preserving type)      as TranspCalcShtItmIsManualCharge,

      //Associations//
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TranspChargeCalcSheet,
      
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationAgreement,
      
      _TranspCalcSheetItemCurrency,
      _TranspCalcSheetItemPctUnit,
      _TranspChrgCalcResolutionBase,
      _TranspChargeType,
      _TranspCalcMethodType,
      _TransportationRate 
}
```
