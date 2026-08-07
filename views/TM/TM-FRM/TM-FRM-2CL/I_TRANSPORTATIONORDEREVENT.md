---
name: I_TRANSPORTATIONORDEREVENT
description: "Transportationorderevent"
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
# I_TRANSPORTATIONORDEREVENT

**Transportationorderevent**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderEventUUID` | ✓ | |  | `cast(db_key as /scmtms/vdm_torexe_db_key preserving type )` |  |  |
| `TransportationOrderUUID` |  | |  | `cast(parent_key as /scmtms/vdm_tor_db_key preserving type)` |  |  |
| `TransportationOrderEvent` |  | |  | `cast(execution_id as /scmtms/vdm_event_id preserving type)` |  |  |
| `TranspOrdEventCode` |  | |  | `cast(event_code as /scmtms/vdm_tor_event_code preserving type )` |  |  |
| `TranspOrdEventIsRecalled` |  | |  | `cast(event_revoked as /scmtms/event_revoked preserving type)` |  |  |
| `TranspOrdEvtActualDateTime` |  | |  | `cast(actual_date as /scmtms/vdm_event_actl_dtetme preserving type)` |  |  |
| `TranspOrdEvtActualDateTimeZone` |  | |  | `cast(actual_tzone as /scmtms/vdm_actual_timezone preserving type)` |  |  |
| `TranspOrdEvtEstimatedDateTime` |  | |  | `cast(estimated_date as /scmtms/vdm_estimated_datetime preserving type)` |  |  |
| `LocationAdditionalUUID` |  | |  | `cast (ext_loc_uuid as /scmtms/vdm_location_adtl_uuid preserving type)` |  |  |
| `TransportationOrderStopUUID` |  | |  | `cast(torstopuuid as /scmtms/vdm_tor_stop_db_key preserving type )` |  |  |
| `TransportationOrderItemUUID` |  | |  | `cast(toritmuuid as /scmtms/vdm_tor_item_db_key preserving type )` |  |  |
| `CreatedByUser` |  | |  | `cast(created_by as vdm_createdbyuserid preserving type )` |  |  |
| `CreationDateTime` |  | |  | `cast(created_on as /scmtms/vdm_creation_datetme preserving type)` |  |  |
| `LastChangedByUser` |  | |  | `cast(changed_by as vdm_lastchangedbyuserid preserving type )` |  |  |
| `ChangedDateTime` |  | |  | `cast(changed_on as /scmtms/vdm_changed_datetme preserving type)` |  |  |
| `_TransportationOrderStop` | | ✓ | | | | |
| `_TransportationOrderItem` | | ✓ | | | | |
| `_TranspOrdEventCode` | | ✓ | | | | |
| `_TranspOrdEventIsRecalled` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_TranspOrdEvtActDateTimeZone` | | ✓ | | | | |
| `_TransportationOrder` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationOrderStop` | `I_TransportationOrderStop_2` | [0..1] |
| `_TransportationOrderItem` | `I_TransportationOrderItem_2` | [0..1] |
| `_TranspOrdEventCode` | `I_TranspOrdEventCode_2` | [0..1] |
| `_TranspOrdEventIsRecalled` | `I_TranspOrdEventIsRecalled` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_TranspOrdEvtActDateTimeZone` | `I_TimeZone` | [0..1] |

## Source Code

```abap
@EndUserText:   { label:                  'Transportation Order Event'}
@ObjectModel:   { sapObjectNodeType.name: 'TransportationOrderEvent',
                  representativeKey:      'TransportationOrderEventUUID',
                  usageType:              {   serviceQuality: #A,
                                              sizeCategory:   #XL,
                                              dataClass:      #TRANSACTIONAL},
                  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
                  modelingPattern: #ANALYTICAL_DIMENSION }
@VDM:           { viewType: #BASIC,
                  lifecycle.contract.type: #PUBLIC_LOCAL_API  }
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: {authorizationCheck: #MANDATORY,
                 personalData.blocking: #('TRANSACTIONAL_DATA'),
                 privilegedAssociations:  [ '_CreatedByUser', '_LastChangedByUser' ]}
@Metadata.ignorePropagatedAnnotations:true

define view entity I_TransportationOrderEvent
  as select from /scmtms/d_torexe
  /* VDM-based Associations */
  association        to parent I_TransportationOrder_2 as _TransportationOrder         on $projection.TransportationOrderUUID = _TransportationOrder.TransportationOrderUUID
  association [0..1] to I_TransportationOrderStop_2    as _TransportationOrderStop     on $projection.TransportationOrderStopUUID = _TransportationOrderStop.TransportationOrderStopUUID
  association [0..1] to I_TransportationOrderItem_2    as _TransportationOrderItem     on $projection.TransportationOrderItemUUID = _TransportationOrderItem.TransportationOrderItemUUID
  /* Foreign Key and Text Associations */
  association [0..1] to I_TranspOrdEventCode_2         as _TranspOrdEventCode          on $projection.TranspOrdEventCode = _TranspOrdEventCode.TranspOrdEventCode
  association [0..1] to I_TranspOrdEventIsRecalled     as _TranspOrdEventIsRecalled    on $projection.TranspOrdEventIsRecalled = _TranspOrdEventIsRecalled.TranspOrdEventIsRecalled
  association [0..1] to I_User                         as _CreatedByUser               on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                         as _LastChangedByUser           on $projection.LastChangedByUser = _LastChangedByUser.UserID
  association [0..1] to I_TimeZone                     as _TranspOrdEvtActDateTimeZone on $projection.TranspOrdEvtActualDateTimeZone = _TranspOrdEvtActDateTimeZone.TimeZoneID

{
      // Identification
      @ObjectModel.text.element:  [ 'TransportationOrderEvent' ]
  key cast(db_key as /scmtms/vdm_torexe_db_key preserving type )             as TransportationOrderEventUUID,
      @ObjectModel.foreignKey.association: '_TransportationOrder'
      cast(parent_key as /scmtms/vdm_tor_db_key preserving type)             as TransportationOrderUUID,
      @Semantics.text: true
      cast(execution_id as /scmtms/vdm_event_id preserving type)             as TransportationOrderEvent,
      @ObjectModel.foreignKey.association: '_TranspOrdEventCode'
      cast(event_code  as /scmtms/vdm_tor_event_code preserving type )       as TranspOrdEventCode,
      @ObjectModel.foreignKey.association: '_TranspOrdEventIsRecalled'
      cast(event_revoked as /scmtms/event_revoked preserving type)           as TranspOrdEventIsRecalled,

      // Dates and Times
      cast(actual_date as /scmtms/vdm_event_actl_dtetme preserving type)     as TranspOrdEvtActualDateTime,
      @ObjectModel.foreignKey.association: '_TranspOrdEvtActDateTimeZone'
      cast(actual_tzone as /scmtms/vdm_actual_timezone preserving type)      as TranspOrdEvtActualDateTimeZone,
      cast(estimated_date as /scmtms/vdm_estimated_datetime preserving type) as TranspOrdEvtEstimatedDateTime,

      //Location
      cast (ext_loc_uuid as /scmtms/vdm_location_adtl_uuid preserving type)  as LocationAdditionalUUID,

      // Event References
      @Semantics.uuid:true
      @ObjectModel.foreignKey.association: '_TransportationOrderStop'
      cast(torstopuuid as /scmtms/vdm_tor_stop_db_key preserving type )      as TransportationOrderStopUUID,
      @Semantics.uuid:true
      @ObjectModel.foreignKey.association: '_TransportationOrderItem'
      cast(toritmuuid as /scmtms/vdm_tor_item_db_key preserving type )       as TransportationOrderItemUUID,

      // Administrative Data
      @Semantics.user.createdBy: true
      cast(created_by as vdm_createdbyuserid preserving type )               as CreatedByUser,
      cast(created_on as /scmtms/vdm_creation_datetme preserving type)       as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      cast(changed_by as vdm_lastchangedbyuserid preserving type )           as LastChangedByUser,
      cast(changed_on as /scmtms/vdm_changed_datetme preserving type)        as ChangedDateTime,

      /* Associations */
      @ObjectModel.association.type:  [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _TransportationOrder,
      _TransportationOrderStop,
      _TransportationOrderItem,
      _TranspOrdEventCode,
      _CreatedByUser,
      _LastChangedByUser,
      _TranspOrdEventIsRecalled,
      _TranspOrdEvtActDateTimeZone


}
```
