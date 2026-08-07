---
name: I_TRANSPORTATIONORDERSTAGE_2
description: Transportationorderstage 2
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
# I_TRANSPORTATIONORDERSTAGE_2

**Transportationorderstage 2**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderStageUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_tor_stage_db_key preserving type )` |  |  |
| `TransportationOrderUUID` |  | |  | `cast(root_key as /scmtms/vdm_tor_db_key preserving type)` |  |  |
| `TransportationOrderStage` |  | |  | `cast(successor_id as /scmtms/vdm_stage_id preserving type )` |  |  |
| `TranspOrdStageType` |  | |  | `cast(stage_type as /scmtms/vdm_stage_type preserving type )` |  |  |
| `TranspOrdStageCategory` |  | |  | `cast(stage_cat as /scmtms/vdm_stage_category preserving type )` |  |  |
| `TransportationMode` |  | |  | `cast(mot as /scmtms/vdm_tor_trmodcode preserving type )` |  |  |
| `TransportationModeCategory` |  | |  | `cast(mot_cat as /scmtms/vdm_tor_trmod_cat preserving type )` |  |  |
| `TransportationShippingType` |  | |  | `shipping_type` |  |  |
| `TranspOrdStageVoyage` |  | |  | `cast(voyage_id as /scmtms/vdm_s_voyage_id preserving type )` |  |  |
| `TranspOrdStageVessel` |  | |  | `cast(vessel_id as /scmtms/vdm_s_vessel_id preserving type )` |  |  |
| `TranspOrdStageFlight` |  | |  | `cast(flight_code as /scmtms/vdm_s_flight_code preserving type )` |  |  |
| `TranspOrdStgeInvcgCarrLvl` |  | |  | `stg_pymt_ind` |  |  |
| `CarrierUUID` |  | |  | `cast(tsp_key as /scmtms/vdm_carrier_party_key preserving type )` |  |  |
| `Carrier` |  | |  | `tsp_id` |  |  |
| `TranspOrdStageSCACCode` |  | |  | `cast(tsp_scac as /scmtms/vdm_s_scacd preserving type )` |  |  |
| `TranspOrdStgeInvcgCarrUUID` |  | |  | `cast (tsp_pymt_key as /scmtms/vdm_inv_carr_uuid preserving type )` |  |  |
| `TranspOrdStageInvoicingCarrier` |  | |  | `tsp_pymt_id` |  |  |
| `TranspOrdStgeInvcgSCACCode` |  | |  | `cast(tsp_pymt_scac as /scmtms/vdm_s_pymt_scacd preserving type )` |  |  |
| `TranspOrdStageDistance` |  | |  | `cast(distance_km as /scmtms/vdm_stage_dstnc preserving type)` |  |  |
| `TranspOrdStageDistanceUnit` |  | |  | `cast('KM' as /scmtms/vdm_stage_dstnc_unit)` |  |  |
| `TranspOrdStageNetDuration` |  | |  | `cast(duration_net as /scmtms/vdm_stg_net_duration preserving type )` |  |  |
| `TranspOrdStageSrceStopUUID` |  | |  | `cast(parent_key as /scmtms/vdm_tor_stg_s_stop_key preserving type )` |  |  |
| `TranspOrdStageDestStopUUID` |  | |  | `cast(succ_stop_key as /scmtms/vdm_tor_stg_d_stop_key preserving type )` |  |  |
| `_TransportationOrder` | | ✓ | | | | |
| `_TranspOrdStageSrceStop` | | ✓ | | | | |
| `_TranspOrdStageDestStop` | | ✓ | | | | |
| `_TranspOrdStageType` | | ✓ | | | | |
| `_TranspOrdStageCategory` | | ✓ | | | | |
| `_Carrier` | | ✓ | | | | |
| `_TranspOrdStageInvoicingCarr` | | ✓ | | | | |
| `_TranspSCACCode` | | ✓ | | | | |
| `_TranspOrdStgeInvcgSCACCode` | | ✓ | | | | |
| `_TransportationMode` | | ✓ | | | | |
| `_TransportationModeCategory` | | ✓ | | | | |
| `_TranspOrdStageShippingType` | | ✓ | | | | |
| `_TranspOrdStgeInvcgCarrLvl` | | ✓ | | | | |
| `_TransportationOrderStop` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationOrder` | `I_TransportationOrder_2` | [1..1] |
| `_TranspOrdStageSrceStop` | `I_TransportationOrderStop_2` | [1..1] |
| `_TranspOrdStageDestStop` | `I_TransportationOrderStop_2` | [1..1] |
| `_TranspOrdStageType` | `I_TranspOrdStageType_2` | [0..1] |
| `_TranspOrdStageCategory` | `I_TranspOrdStageCategory_2` | [0..1] |
| `_Carrier` | `I_BusinessPartner` | [0..1] |
| `_TranspOrdStageInvoicingCarr` | `I_BusinessPartner` | [0..1] |
| `_TranspSCACCode` | `I_TranspSCACCode` | [0..1] |
| `_TranspOrdStgeInvcgSCACCode` | `I_TranspSCACCode` | [0..1] |
| `_TransportationMode` | `I_TransportationMode_2` | [0..1] |
| `_TransportationModeCategory` | `I_TransportationModeCategory` | [0..1] |
| `_TranspOrdStageShippingType` | `I_TranspOrdShippingType_2` | [0..1] |
| `_TranspOrdStgeInvcgCarrLvl` | `I_TranspOrdStgeInvcgCarrLvl` | [0..1] |
| `_Extension` | `E_TransportationOrderStage` | [1] |

## Source Code

```abap
@EndUserText.label: 'Transportation Order Stage'
@ObjectModel:       { sapObjectNodeType.name:   'TransportationOrderStage',
                      representativeKey:        'TransportationOrderStageUUID',
                      usageType:                { serviceQuality: #A,
                                                  sizeCategory: #XL,
                                                  dataClass: #TRANSACTIONAL },
                      supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
                      modelingPattern: #ANALYTICAL_DIMENSION }
@AccessControl: {authorizationCheck:  #MANDATORY,
                 personalData.blocking:#('TRANSACTIONAL_DATA')}

@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_TransportationOrderStage_2
  as select from /scmtms/d_torsts
  /* Business Object related Node Associations*/
  association        to parent I_TransportationOrderStop_2 as _TransportationOrderStop     on $projection.TranspOrdStageSrceStopUUID = _TransportationOrderStop.TransportationOrderStopUUID
  association [1..1] to I_TransportationOrder_2            as _TransportationOrder         on $projection.TransportationOrderUUID = _TransportationOrder.TransportationOrderUUID
  association [1..1] to I_TransportationOrderStop_2        as _TranspOrdStageSrceStop      on $projection.TranspOrdStageSrceStopUUID = _TranspOrdStageSrceStop.TransportationOrderStopUUID
  association [1..1] to I_TransportationOrderStop_2        as _TranspOrdStageDestStop      on $projection.TranspOrdStageDestStopUUID = _TranspOrdStageDestStop.TransportationOrderStopUUID
  /* Foreign Key and Text Associations */
  association [0..1] to I_TranspOrdStageType_2             as _TranspOrdStageType          on $projection.TranspOrdStageType = _TranspOrdStageType.TranspOrdStageType
  association [0..1] to I_TranspOrdStageCategory_2         as _TranspOrdStageCategory      on $projection.TranspOrdStageCategory = _TranspOrdStageCategory.TranspOrdStageCategory
  association [0..1] to I_BusinessPartner                  as _Carrier                     on $projection.Carrier = _Carrier.BusinessPartner
  association [0..1] to I_BusinessPartner                  as _TranspOrdStageInvoicingCarr on $projection.TranspOrdStageInvoicingCarrier = _TranspOrdStageInvoicingCarr.BusinessPartner
  association [0..1] to I_TranspSCACCode                   as _TranspSCACCode              on $projection.TranspOrdStageSCACCode = _TranspSCACCode.TranspSCACCode
  association [0..1] to I_TranspSCACCode                   as _TranspOrdStgeInvcgSCACCode  on $projection.TranspOrdStgeInvcgSCACCode = _TranspOrdStgeInvcgSCACCode.TranspSCACCode
  association [0..1] to I_TransportationMode_2             as _TransportationMode          on $projection.TransportationMode = _TransportationMode.TransportationMode
  association [0..1] to I_TransportationModeCategory       as _TransportationModeCategory  on $projection.TransportationModeCategory = _TransportationModeCategory.TransportationModeCategory
  association [0..1] to I_TranspOrdShippingType_2          as _TranspOrdStageShippingType  on $projection.TransportationShippingType = _TranspOrdStageShippingType.TranspOrdShippingType
  association [0..1] to I_TranspOrdStgeInvcgCarrLvl        as _TranspOrdStgeInvcgCarrLvl   on $projection.TranspOrdStgeInvcgCarrLvl = _TranspOrdStgeInvcgCarrLvl.TranspOrdStgeInvcgCarrLvl

  //Extension Association
  association [1]    to E_TransportationOrderStage         as _Extension                   on $projection.TransportationOrderStageUUID = _Extension.TransportationOrderStageUUID

{

      /* Attributes */
      // Identification
      @ObjectModel.text.element:  [ 'TransportationOrderStage' ]
  key cast(db_key as /scmtms/vdm_tor_stage_db_key preserving type )          as TransportationOrderStageUUID,
      @ObjectModel.foreignKey.association: '_TransportationOrder'
      cast(root_key as /scmtms/vdm_tor_db_key preserving type)               as TransportationOrderUUID,
      @Semantics.text: true
      cast(successor_id as /scmtms/vdm_stage_id preserving type )            as TransportationOrderStage,

      // Key Characteristics
      @ObjectModel.foreignKey.association: '_TranspOrdStageType'
      cast(stage_type as /scmtms/vdm_stage_type preserving type )            as TranspOrdStageType,
      @ObjectModel.foreignKey.association: '_TranspOrdStageCategory'
      cast(stage_cat as /scmtms/vdm_stage_category preserving type )         as TranspOrdStageCategory,
      @ObjectModel.foreignKey.association: '_TransportationMode'
      cast(mot as /scmtms/vdm_tor_trmodcode preserving type )                as TransportationMode,
      @ObjectModel.foreignKey.association: '_TransportationModeCategory'
      cast(mot_cat as /scmtms/vdm_tor_trmod_cat preserving type )            as TransportationModeCategory,

      @ObjectModel.foreignKey.association: '_TranspOrdStageShippingType'
      shipping_type                                                          as TransportationShippingType,
      cast(voyage_id as /scmtms/vdm_s_voyage_id preserving type )            as TranspOrdStageVoyage,
      cast(vessel_id as /scmtms/vdm_s_vessel_id preserving type )            as TranspOrdStageVessel,
      cast(flight_code as /scmtms/vdm_s_flight_code preserving type )        as TranspOrdStageFlight,

      // Parties
      @ObjectModel.foreignKey.association: '_TranspOrdStgeInvcgCarrLvl'
      stg_pymt_ind                                                           as TranspOrdStgeInvcgCarrLvl,

      @Semantics.uuid:true
      cast(tsp_key as /scmtms/vdm_carrier_party_key preserving type )        as CarrierUUID,
      @ObjectModel.foreignKey.association: '_Carrier'
      tsp_id                                                                 as Carrier,
      @ObjectModel.foreignKey.association: '_TranspSCACCode'
      cast(tsp_scac as /scmtms/vdm_s_scacd preserving type )                 as TranspOrdStageSCACCode,

      cast (tsp_pymt_key  as /scmtms/vdm_inv_carr_uuid preserving type )     as TranspOrdStgeInvcgCarrUUID,
      @ObjectModel.foreignKey.association: '_TranspOrdStageInvoicingCarr'
      tsp_pymt_id                                                            as TranspOrdStageInvoicingCarrier,
      @ObjectModel.foreignKey.association: '_TranspOrdStgeInvcgSCACCode'
      cast(tsp_pymt_scac as /scmtms/vdm_s_pymt_scacd preserving type )       as TranspOrdStgeInvcgSCACCode,

      // Distance and Duration
      @Semantics.quantity.unitOfMeasure: 'TranspOrdStageDistanceUnit'
      cast(distance_km as /scmtms/vdm_stage_dstnc preserving type)           as TranspOrdStageDistance,
      cast('KM' as /scmtms/vdm_stage_dstnc_unit)                             as TranspOrdStageDistanceUnit,
      cast(duration_net as /scmtms/vdm_stg_net_duration preserving type )    as TranspOrdStageNetDuration,

      @ObjectModel.foreignKey.association: '_TranspOrdStageSrceStop'
      cast(parent_key as /scmtms/vdm_tor_stg_s_stop_key preserving type )    as TranspOrdStageSrceStopUUID,
      @ObjectModel.foreignKey.association: '_TranspOrdStageDestStop'
      cast(succ_stop_key as /scmtms/vdm_tor_stg_d_stop_key preserving type ) as TranspOrdStageDestStopUUID,

      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_ROOT ]
      _TransportationOrder,
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT ]
      _TransportationOrderStop,
      _TranspOrdStageSrceStop,
      _TranspOrdStageDestStop,
      _TranspOrdStageType,
      _TranspOrdStageCategory,
      _Carrier,
      _TranspSCACCode,
      _TransportationMode,
      _TransportationModeCategory,
      _TranspOrdStgeInvcgSCACCode,
      _TranspOrdStageInvoicingCarr,
      _TranspOrdStageShippingType,
      _TranspOrdStgeInvcgCarrLvl
}
```
