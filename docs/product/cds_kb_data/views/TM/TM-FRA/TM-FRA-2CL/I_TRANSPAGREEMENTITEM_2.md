---
name: I_TRANSPAGREEMENTITEM_2
description: "Transpagreementitem 2"
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
# I_TRANSPAGREEMENTITEM_2

**Transpagreementitem 2**

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
| `TranspAgreementItemUUID` | ✓ | |  | `cast(db_key as /scmtms/transpagrmt_itm_uuid preserving type)` |  |  |
| `TransportationAgreementItem` |  | |  | `item_no` |  |  |
| `TransportationAgreementUUID` |  | |  | `cast(parent_key as /scmtms/transpagrmt_uuid preserving type)` |  |  |
| `TranspCalculationSheetUUID` |  | |  | `cast(tccs_uuid as /scmtms/transpcalcsheet_uuid preserving type)` |  |  |
| `TransportationStageCategory` |  | |  | `stage_cat` |  |  |
| `TranspChargeCalculationSheet` |  | |  | `cast(tccs_id as /scmtms/vdm_fag_calc_sheet preserving type)` |  |  |
| `TranspChargeItemIsHeaderCharge` |  | |  | `cast(is_header_charge as /scmtms/vdm_tcc_item_is_header preserving type)` |  |  |
| `_TransportationStageCategory` | | ✓ | | | | |
| `_TransportationAgreement` | | ✓ | | | | |
| `_TranspAgrmtPaymentTerm` | | ✓ | | | | |
| `_TranspChargeCalcSheet` | | ✓ | | | | |
| `_TranspAgrmtItemDescription` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationStageCategory` | `I_TranspOrdStageCategory` | [0..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking:#('TRANSACTIONAL_DATA'),
                  privilegedAssociations: ['_TransportationAgreement',
                                           '_TranspAgrmtPaymentTerm',
                                           '_TranspChargeCalcSheet']}
@EndUserText:   { label:              'Transportation Agreement Item'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   { sapObjectNodeType.name: 'FreightAgreementItem',
                  representativeKey:  'TranspAgreementItemUUID',
                  semanticKey: ['TransportationAgreementItem'],
                  usageType:          {serviceQuality: #A,
                                      sizeCategory:   #M,
                                      dataClass:      #TRANSACTIONAL},
                  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@VDM:           { viewType:           #BASIC,
                  lifecycle.contract.type: #PUBLIC_LOCAL_API}

define view entity I_TranspAgreementItem_2
  as select from /scmtms/d_fagitm
  /* Business Object related Node Associations*/
  association        to parent I_TransportationAgreement as _TransportationAgreement     on $projection.TransportationAgreementUUID = _TransportationAgreement.TransportationAgreementUUID

  composition [0..1] of I_TranspAgrmtPaymentTerm         as _TranspAgrmtPaymentTerm
  composition [0..1] of I_TranspAgrmtItemDescription_2   as _TranspAgrmtItemDescription
  composition [0..1] of I_TranspChrgCalculationSheet_2   as _TranspChargeCalcSheet

  /* Foreign Key Associations */
  association [0..1] to I_TranspOrdStageCategory         as _TransportationStageCategory on $projection.TransportationStageCategory = _TransportationStageCategory.TranspOrdStageCategory
{
  key cast(db_key  as /scmtms/transpagrmt_itm_uuid preserving type)            as TranspAgreementItemUUID,
      item_no                                                                  as TransportationAgreementItem,
      @ObjectModel.foreignKey.association: '_TransportationAgreement'
      cast(parent_key  as /scmtms/transpagrmt_uuid preserving type)            as TransportationAgreementUUID,
      cast(tccs_uuid  as /scmtms/transpcalcsheet_uuid preserving type)         as TranspCalculationSheetUUID,
      @ObjectModel.foreignKey.association: '_TransportationStageCategory'
      stage_cat                                                                as TransportationStageCategory,
      cast(tccs_id as /scmtms/vdm_fag_calc_sheet preserving type)              as TranspChargeCalculationSheet,
      cast(is_header_charge as /scmtms/vdm_tcc_item_is_header preserving type) as TranspChargeItemIsHeaderCharge,

      //Associations//
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _TransportationAgreement,

      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspAgrmtPaymentTerm,

      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      @Semantics.valueRange.maximum: '1'
      _TranspChargeCalcSheet,
      _TransportationStageCategory,
      _TranspAgrmtItemDescription
}
```
