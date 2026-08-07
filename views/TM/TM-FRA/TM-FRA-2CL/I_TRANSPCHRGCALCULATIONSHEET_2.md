---
name: I_TRANSPCHRGCALCULATIONSHEET_2
description: Transpchrgcalculationsheet 2
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
# I_TRANSPCHRGCALCULATIONSHEET_2

**Transpchrgcalculationsheet 2**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspCalculationSheetUUID` | ✓ | |  | `cast(db_key as /scmtms/transpcalcsheet_uuid preserving type)` |
| `TransportationAgreementUUID` |  | |  | `cast(owner_key as /scmtms/transpagrmt_uuid preserving type)` |
| `TranspAgreementItemUUID` |  | |  | `cast(agrmt_item_key as /scmtms/transpagrmt_itm_uuid preserving type)` |
| `TranspChargeCalculationSheet` |  | |  | `cast(tccs_id047 as /scmtms/vdm_fag_calc_sheet preserving type)` |
| `_TransportationAgreement` | | ✓ | | |
| `_TranspAgreementItem` | | ✓ | | |
| `_TranspChrgCalcSheetItem` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationAgreement` | `I_TransportationAgreement` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking:#('TRANSACTIONAL_DATA'),
                  privilegedAssociations: ['_TransportationAgreement',
                                           '_TranspChrgCalcSheetItem']}
@Analytics.technicalName: 'ITFAGCALCSHEET'
@EndUserText:   { label:              'Transportation Charge Calculation Sheet'}
@ObjectModel:   { sapObjectNodeType.name: 'FreightAgrmtCalculationSheet',
                  representativeKey:  'TranspCalculationSheetUUID',
                  usageType:          {serviceQuality: #A,
                                      sizeCategory:   #L,
                                      dataClass:      #TRANSACTIONAL},
                  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]}
@Metadata.ignorePropagatedAnnotations: true
@VDM:           { viewType:           #BASIC,
                  lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspChrgCalculationSheet_2
  as select from /scmtms/d_tccsrt
  /* Business Object related Node Associations*/
  composition [1..*] of I_TranspChrgCalcSheetItem as _TranspChrgCalcSheetItem

  association        to parent I_TranspAgreementItem_2   as _TranspAgreementItem on $projection.TranspAgreementItemUUID = _TranspAgreementItem.TranspAgreementItemUUID

  //Association for Lock and Auth
  association [1..1] to I_TransportationAgreement as _TransportationAgreement    on $projection.TransportationAgreementUUID = _TransportationAgreement.TransportationAgreementUUID
{
  key cast(db_key    as  /scmtms/transpcalcsheet_uuid preserving type)      as TranspCalculationSheetUUID,
      @ObjectModel.foreignKey.association: '_TransportationAgreement'
      cast(owner_key  as /scmtms/transpagrmt_uuid preserving type)          as TransportationAgreementUUID,
      @ObjectModel.foreignKey.association: '_TranspAgreementItem'
      cast(agrmt_item_key  as /scmtms/transpagrmt_itm_uuid preserving type) as TranspAgreementItemUUID,
      cast(tccs_id047 as /scmtms/vdm_fag_calc_sheet preserving type)        as TranspChargeCalculationSheet,

      //Associations//
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TranspAgreementItem,

      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TranspChrgCalcSheetItem,
      
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationAgreement
}
```
