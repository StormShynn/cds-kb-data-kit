---
name: I_TRANSPORDEVENTCODE_2
description: Transpordeventcode 2
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDEVENTCODE_2

**Transpordeventcode 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspOrdEventCode` | ✓ | |  | `tor_event` |
| `TranspOrdStopCategory` |  | |  | `stop_cat` |
| `_TranspOrdStopCategory` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdStopCategory` | `I_TranspOrdStopCategory_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transportation Order Event Code'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'TranspOrdEventCode'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'TransportationOrderEventCode'
define root view entity I_TranspOrdEventCode_2
  as select from /scmtms/c_ev_ty
  composition [0..*] of I_TranspOrdEventCodeText_2 as _Text
  association [0..1] to I_TranspOrdStopCategory_2  as _TranspOrdStopCategory on $projection.TranspOrdStopCategory = _TranspOrdStopCategory.TranspOrdStopCategory
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key tor_event as TranspOrdEventCode,
      @ObjectModel.foreignKey.association: '_TranspOrdStopCategory'
      stop_cat  as TranspOrdStopCategory,

      /* Associations */
      _Text,
      _TranspOrdStopCategory
}
where
      event_visibility =  ' '
  and tor_event        <> 'ARRIVAL_DOOR'
  and tor_event        <> 'ARRIV_DEST'
  and tor_event        <> 'BLOCK_FOR_EXEC'
  and tor_event        <> 'CANCEL'
  and tor_event        <> 'CANCEL_EXEC_DOC'
  and tor_event        <> 'CANCEL_STATUS_RESET'
  and tor_event        <> 'CANCEL_UNASSIGN_FUS'
  and tor_event        <> 'CHECK_IN'
  and tor_event        <> 'CHECK_OUT'
  and tor_event        <> 'COUPLING'
  and tor_event        <> 'DECOUPLING'
  and tor_event        <> 'DELAYED'
  and tor_event        <> 'DELAYED_FU'
  and tor_event        <> 'DEPARTURE'
  and tor_event        <> 'DEPARTURE_DOOR'
  and tor_event        <> 'EXPECTED_ARRIVAL'
  and tor_event        <> 'EXPECTED_DEPARTURE'
  and tor_event        <> 'GEN_DISCRP'
  and tor_event        <> 'ITEM_DELIVERY'
  and tor_event        <> 'LOAD_BEGIN'
  and tor_event        <> 'LOAD_END'
  and tor_event        <> 'POD'
  and tor_event        <> 'POPU'
  and tor_event        <> 'READY_FOR_EXECUTION'
  and tor_event        <> 'READY_FOR_WH_PROC'
  and tor_event        <> 'READY_LOAD'
  and tor_event        <> 'READY_UNLOAD'
  and tor_event        <> 'REPORT_EMIVAL_DOC'
  and tor_event        <> 'REPORT_EMIVAL_STAGE'
  and tor_event        <> 'SCHEDULED'
  and tor_event        <> 'UNBLOCK_FOR_EXEC'
  and tor_event        <> 'UNLOAD_BEGIN'
  and tor_event        <> 'UNLOAD_END'
```
