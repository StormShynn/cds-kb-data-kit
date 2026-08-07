---
name: I_TRANSPORDEVENTCODETEXT_2
description: "Transpordeventcodetext 2"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - text
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDEVENTCODETEXT_2

**Transpordeventcodetext 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdEventCode` | ✓ | |  | `tor_event` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `TranspOrdEventCodeDesc` |  | |  | `cast ( description_s as /scmtms/vdm_eventcode_desc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdEventCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transportation Order Event Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TranspOrdEventCode'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_TranspOrdEventCodeText_2
  as select from /scmtms/c_ev_tyt
  association        to parent I_TranspOrdEventCode_2 as _TranspOrdEventCode on $projection.TranspOrdEventCode = _TranspOrdEventCode.TranspOrdEventCode
  association [0..1] to I_Language                    as _Language           on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdEventCode'
  key tor_event                                                            as TranspOrdEventCode,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                                as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast ( description_s as /scmtms/vdm_eventcode_desc preserving type ) as TranspOrdEventCodeDesc,

      /* Associations */
      _TranspOrdEventCode,
      _Language
}
where
      tor_event <> 'ARRIVAL_DOOR'
  and tor_event <> 'ARRIV_DEST'
  and tor_event <> 'BLOCK_FOR_EXEC'
  and tor_event <> 'CANCEL'
  and tor_event <> 'CANCEL_EXEC_DOC'
  and tor_event <> 'ANCEL_STATUS_RESET'
  and tor_event <> 'CANCEL_UNASSIGN_FUS'
  and tor_event <> 'CHECK_IN'
  and tor_event <> 'CHECK_OUT'
  and tor_event <> 'COUPLING'
  and tor_event <> 'DECOUPLING'
  and tor_event <> 'DELAYED'
  and tor_event <> 'DELAYED_FU'
  and tor_event <> 'DEPARTURE'
  and tor_event <> 'DEPARTURE_DOOR'
  and tor_event <> 'EP_ARRIVAL'
  and tor_event <> 'EP_CHECK_IN'
  and tor_event <> 'EP_CHECK_OUT'
  and tor_event <> 'EP_DEPARTURE'
  and tor_event <> 'EP_LOAD_BEGIN'
  and tor_event <> 'EP_LOAD_END'
  and tor_event <> 'EP_LOAD_END_ITEM'
  and tor_event <> 'EP_UNLOAD_BEGIN'
  and tor_event <> 'EP_UNLOAD_END'
  and tor_event <> 'EP_UNLOAD_END_ITEM'
  and tor_event <> 'EXPECTED_ARRIVAL'
  and tor_event <> 'EXPECTED_DEPARTURE'
  and tor_event <> 'GEN_DISCRP'
  and tor_event <> 'ITEM_DELIVERY'
  and tor_event <> 'LOAD_BEGIN'
  and tor_event <> 'LOAD_END'
  and tor_event <> 'POD'
  and tor_event <> 'POPU'
  and tor_event <> 'READY_FOR_EXECUTION'
  and tor_event <> 'READY_FOR_WH_PROC'
  and tor_event <> 'READY_LOAD'
  and tor_event <> 'READY_UNLOAD'
  and tor_event <> 'REPORT_EMIVAL_DOC'
  and tor_event <> 'REPORT_EMIVAL_STAGE'
  and tor_event <> 'SCHEDULED'
  and tor_event <> 'UNBLOCK_FOR_EXEC'
  and tor_event <> 'UNLOAD_BEGIN'
  and tor_event <> 'UNLOAD_END'
```
