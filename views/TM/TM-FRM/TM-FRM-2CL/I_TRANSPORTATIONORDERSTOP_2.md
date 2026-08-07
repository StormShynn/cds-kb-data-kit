---
name: I_TRANSPORTATIONORDERSTOP_2
description: Transportationorderstop 2
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - interface-view
  - transport
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORTATIONORDERSTOP_2

**Transportationorderstop 2**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderStopUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_tor_stop_db_key preserving type )` |  |  |
| `TransportationOrderUUID` |  | |  | `cast(parent_key as /scmtms/vdm_tor_db_key preserving type)` |  |  |
| `TransportationOrderStop` |  | |  | `cast(stop_id as /scmtms/vdm_tor_stop_id preserving type )` |  |  |
| `TranspOrdStopCategory` |  | |  | `stop_cat` |  |  |
| `TranspOrdStopRole` |  | |  | `stop_role` |  |  |
| `LocationAdditionalUUID` |  | |  | `cast(log_loc_uuid as /scmtms/vdm_location_adtl_uuid preserving type)` |  |  |
| `LocationId` |  | |  | `log_locid` |  |  |
| `LocationUNCode` |  | |  | `log_locun` |  |  |
| `LocationAirportCode` |  | |  | `cast(log_lociata as /scmtms/vdm_loc_airportcode preserving type )` |  |  |
| `TranspOrdStopAccptblStrtDteTme` |  | |  | `cast(acc_start as /scmtms/vdm_tor_stop_acc_start preserving type)` |  |  |
| `TranspOrdStopReqStartDteTme` |  | |  | `cast(req_start as /scmtms/vdm_tor_stop_req_start preserving type)` |  |  |
| `TranspOrdStopAccptblEndDteTme` |  | |  | `cast(acc_end as /scmtms/vdm_tor_stop_acc_end preserving type)` |  |  |
| `TranspOrdStopReqEndDteTme` |  | |  | `cast(req_end as /scmtms/vdm_tor_stop_req_end preserving type)` |  |  |
| `TranspOrdStopPlanTranspDteTme` |  | |  | `cast(plan_trans_time as /scmtms/vdm_tor_stop_plan_dt preserving type)` |  |  |
| `TranspOrdStopApptStrtDteTme` |  | |  | `cast(appointment_start as /scmtms/vdm_tor_stp_appt_s_dt preserving type)` |  |  |
| `TranspOrdStopApptEndDteTme` |  | |  | `cast(appointment_end as /scmtms/vdm_tor_stp_appt_e_dt preserving type)` |  |  |
| `TranspStopCarrConfStrtDteTme` |  | |  | `cast(carr_conf_start as /scmtms/vdm_tor_stp_ca_co_s_dt preserving type)` |  |  |
| `TranspStopCarrConfEndDteTme` |  | |  | `cast(carr_conf_end as /scmtms/vdm_tor_stp_ca_co_e_dt preserving type)` |  |  |
| `TranspOrdStopDocCutOffDateTime` |  | |  | `cast(cutoff_doc as /scmtms/vdm_doc_cutoff_dt preserving type )` |  |  |
| `TranspOrdStopCrgoCutOffDteTme` |  | |  | `cast(cutoff_cargo as /scmtms/vdm_cargo_cutoff_dt preserving type )` |  |  |
| `TranspOrdStopVGMCutOffDateTime` |  | |  | `cast(cutoff_carr_vgm as /scmtms/vdm_vgm_cutoff_dt preserving type )` |  |  |
| `TranspOrdStopLoadStartDateTime` |  | |  | `cast(aggr_assgn_start_l as /scmtms/vdm_tor_stp_load_s_dt preserving type)` |  |  |
| `TranspOrdStopLoadEndDateTime` |  | |  | `cast(aggr_assgn_end_l as /scmtms/vdm_tor_stp_load_e_dt preserving type)` |  |  |
| `TranspOrdStopSequencePosition` |  | |  | `stop_seq_pos` |  |  |
| `TranspOrdCapacityStopUUID` |  | |  | `cast(assgn_stop_key as /scmtms/vdm_tor_capa_stop_key preserving type )` |  |  |
| `TranspOrdStopCapacityItemUUID` |  | |  | `cast(assgn_item_key as /scmtms/vdm_tor_stp_cp_itm_key preserving type )` |  |  |
| `TranspOrdStopHndlgExecStatus` |  | |  | `cast(handling_exec as /scmtms/vdm_tor_stp_hdl_exe_st preserving type )` |  |  |
| `TranspOrdStopExecIsBlocked` |  | |  | `cast(blk_exec as /scmtms/vdm_block_execution preserving type )` |  |  |
| `_CapacityStop` | | ✓ | | | | |
| `_Location` | | ✓ | | | | |
| `_TranspOrdStopCategory` | | ✓ | | | | |
| `_TranspOrdStopRole` | | ✓ | | | | |
| `_TranspHndlgExecStatus` | | ✓ | | | | |
| `_TranspOrdStpExecIsBlocked` | | ✓ | | | | |
| `_TransportationOrder` | | ✓ | | | | |
| `_TransportationOrderStage` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CapacityStop` | `I_TransportationOrderStop_2` | [0..1] |
| `_Location` | `I_LocationBasic_2` | [0..1] |
| `_TranspOrdStopCategory` | `I_TranspOrdStopCategory_2` | [0..1] |
| `_TranspOrdStopRole` | `I_TranspOrdStopRole_2` | [0..1] |
| `_TranspHndlgExecStatus` | `I_TranspStopHndlgExecStatus` | [0..1] |
| `_TranspOrdStpExecIsBlocked` | `I_TranspOrdExecutionIsBlocked` | [0..1] |

## Source Code

```abap
@EndUserText:   { label:                  'Transportation Order Stop'}
@ObjectModel:   { sapObjectNodeType.name: 'TransportationOrderStop',
                  representativeKey:      'TransportationOrderStopUUID',
                  usageType:              {   serviceQuality: #A,
                                              sizeCategory:   #XL,
                                              dataClass:      #TRANSACTIONAL},
                  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
                  modelingPattern: #ANALYTICAL_DIMENSION }
@VDM:           { viewType:           #BASIC,
                  lifecycle.contract.type: #PUBLIC_LOCAL_API}
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA') }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_TransportationOrderStop_2
  as select from /scmtms/d_torstp as stop
  /* Business Object related Node Associations*/
  association        to parent I_TransportationOrder_2 as _TransportationOrder       on $projection.TransportationOrderUUID = _TransportationOrder.TransportationOrderUUID

  composition [0..*] of I_TransportationOrderStage_2   as _TransportationOrderStage

  association [0..1] to I_TransportationOrderStop_2    as _CapacityStop              on $projection.TranspOrdCapacityStopUUID = _CapacityStop.TransportationOrderStopUUID
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_LocationBasic_2              as _Location                  on $projection.LocationAdditionalUUID = _Location.LocationAdditionalUUID

  association [0..1] to I_TranspOrdStopCategory_2      as _TranspOrdStopCategory     on $projection.TranspOrdStopCategory = _TranspOrdStopCategory.TranspOrdStopCategory
  association [0..1] to I_TranspOrdStopRole_2          as _TranspOrdStopRole         on $projection.TranspOrdStopRole = _TranspOrdStopRole.TranspOrdStopRole
  association [0..1] to I_TranspStopHndlgExecStatus    as _TranspHndlgExecStatus     on $projection.TranspOrdStopHndlgExecStatus = _TranspHndlgExecStatus.TranspOrdStopHndlgExecStatus
  association [0..1] to I_TranspOrdExecutionIsBlocked  as _TranspOrdStpExecIsBlocked on $projection.TranspOrdStopExecIsBlocked = _TranspOrdStpExecIsBlocked.TranspOrdExecutionIsBlocked
{
      // Identification
      @ObjectModel.text.element:  [ 'TransportationOrderStop' ]
  key cast(db_key as /scmtms/vdm_tor_stop_db_key preserving type )               as TransportationOrderStopUUID,
      @ObjectModel.foreignKey.association: '_TransportationOrder'
      cast(parent_key as /scmtms/vdm_tor_db_key preserving type)                 as TransportationOrderUUID,
      @Semantics.text: true
      cast(stop_id as /scmtms/vdm_tor_stop_id preserving type )                  as TransportationOrderStop,

      // Key Characteristics
      @ObjectModel.foreignKey.association: '_TranspOrdStopCategory'
      stop_cat                                                                   as TranspOrdStopCategory,
      @ObjectModel.foreignKey.association: '_TranspOrdStopRole'
      stop_role                                                                  as TranspOrdStopRole,

      // Location
      cast(log_loc_uuid as /scmtms/vdm_location_adtl_uuid preserving type)       as LocationAdditionalUUID,

      log_locid                                                                  as LocationId,
      log_locun                                                                  as LocationUNCode,
      cast(log_lociata as /scmtms/vdm_loc_airportcode preserving type )          as LocationAirportCode,

      // Dates and Times

      cast(acc_start as /scmtms/vdm_tor_stop_acc_start preserving type)          as TranspOrdStopAccptblStrtDteTme,
      cast(req_start as /scmtms/vdm_tor_stop_req_start preserving type)          as TranspOrdStopReqStartDteTme,
      cast(acc_end   as /scmtms/vdm_tor_stop_acc_end preserving type)            as TranspOrdStopAccptblEndDteTme,
      cast(req_end   as /scmtms/vdm_tor_stop_req_end preserving type)            as TranspOrdStopReqEndDteTme,

      cast(plan_trans_time as /scmtms/vdm_tor_stop_plan_dt preserving type)      as TranspOrdStopPlanTranspDteTme,

      cast(appointment_start  as /scmtms/vdm_tor_stp_appt_s_dt preserving type)  as TranspOrdStopApptStrtDteTme,
      cast(appointment_end    as /scmtms/vdm_tor_stp_appt_e_dt preserving type)  as TranspOrdStopApptEndDteTme,

      cast(carr_conf_start    as /scmtms/vdm_tor_stp_ca_co_s_dt preserving type) as TranspStopCarrConfStrtDteTme,
      cast(carr_conf_end      as /scmtms/vdm_tor_stp_ca_co_e_dt preserving type) as TranspStopCarrConfEndDteTme,

      cast(cutoff_doc         as /scmtms/vdm_doc_cutoff_dt preserving type )     as TranspOrdStopDocCutOffDateTime,
      cast(cutoff_cargo       as /scmtms/vdm_cargo_cutoff_dt preserving type )   as TranspOrdStopCrgoCutOffDteTme,
      cast(cutoff_carr_vgm    as /scmtms/vdm_vgm_cutoff_dt preserving type )     as TranspOrdStopVGMCutOffDateTime,

      cast(aggr_assgn_start_l as /scmtms/vdm_tor_stp_load_s_dt preserving type)  as TranspOrdStopLoadStartDateTime,
      cast(aggr_assgn_end_l   as /scmtms/vdm_tor_stp_load_e_dt preserving type)  as TranspOrdStopLoadEndDateTime,

      // Further Attributes
      stop_seq_pos                                                               as TranspOrdStopSequencePosition,

      // References to Capacity Documents
      cast(assgn_stop_key as /scmtms/vdm_tor_capa_stop_key preserving type )     as TranspOrdCapacityStopUUID,
      cast(assgn_item_key as /scmtms/vdm_tor_stp_cp_itm_key preserving type )    as TranspOrdStopCapacityItemUUID,

      // Status
      @ObjectModel.foreignKey.association: '_TranspHndlgExecStatus'
      cast(handling_exec as /scmtms/vdm_tor_stp_hdl_exe_st preserving type )     as TranspOrdStopHndlgExecStatus,
      @Semantics.booleanIndicator: true
      @ObjectModel.foreignKey.association: '_TranspOrdStpExecIsBlocked'
      cast(blk_exec as /scmtms/vdm_block_execution preserving type )             as TranspOrdStopExecIsBlocked,

      /* Associations */

      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _TransportationOrder,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_CHILD ]
      _TransportationOrderStage,
      _CapacityStop,
      _TranspOrdStopCategory,
      _TranspOrdStopRole,
      _TranspHndlgExecStatus,
      _TranspOrdStpExecIsBlocked,
      _Location
}
```
