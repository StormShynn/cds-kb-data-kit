---
name: I_CONSOLIDATIONTASKLOGMESSAGE
description: ConsolidationIONTASKLOGMESSAGE
app_component: FIN-CS-COR-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - consolidation
  - component:FIN-CS-COR-IS-2CL
  - lob:Other
---
# I_CONSOLIDATIONTASKLOGMESSAGE

**ConsolidationIONTASKLOGMESSAGE**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnTaskLogUUID` | ✓ | |  | `cnsldtnlognumber` |  |  |
| `CnsldtnTskLgMsgNmbr` | ✓ | |  | `cnsldtnlogmessageno` |  |  |
| `CnsldtnTaskLogItemUUID` |  | |  | `cnsldtnlogitemnumber` |  |  |
| `SystemMessageType` |  | |  | `msgty` |  |  |
| `SystemMessageIdentification` |  | |  | `msgid` |  |  |
| `SystemMessageNumber` |  | |  | `cast(message.msgno as msgnr)` |  |  |
| `SystemMessageVariable1` |  | |  | `msgv1` |  |  |
| `SystemMessageVariable2` |  | |  | `msgv2` |  |  |
| `SystemMessageVariable3` |  | |  | `msgv3` |  |  |
| `SystemMessageVariable4` |  | |  | `msgv4` |  |  |
| `SortField` |  | |  | `cast(3 as eqfnr)` |  |  |
| `CnsldtnTskLgMsgID` |  | |  | `cast(concat_with_space(message.msgid, message.msgno, 2) as fincs_msg_id preserving type)` |  |  |
| `SystemMessageTypeSortOrder` |  | |  | `case when message.msgty = 'E' then cast(1 as fincs_msg_severity preserving type) when message.msgty = 'W' then cast(2 as fincs_msg_severity preserving type) when message.msgty = 'I' then cast(3 as fincs_msg_severity preserving type) when message.msgty = 'S' then cast(4 as fincs_msg_severity preserving type) else cast(5 as fincs_msg_severity preserving type) end` |  |  |
| `_ConsolidationTaskLog` | | ✓ | | | | |
| `_CnsldtnSystemMessageType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConsolidationTaskLog` | `I_ConsolidationTaskLog` | [1..1] |
| `_CnsldtnSystemMessageType` | `I_CnsldtnSystemMessageType` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Consolidation Task Log Message'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'ConsolidationTaskLogMessage',
                supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass:      #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory:   #XL } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }

define root view entity I_ConsolidationTaskLogMessage
  as select from fincs_log_messag as message

  association [1..1] to I_ConsolidationTaskLog     as _ConsolidationTaskLog     on $projection.CnsldtnTaskLogUUID = _ConsolidationTaskLog.CnsldtnTaskLogUUID

  association [0..1] to I_CnsldtnSystemMessageType as _CnsldtnSystemMessageType on $projection.SystemMessageType = _CnsldtnSystemMessageType.CnsldtnSystemMessageType

{
  key message.cnsldtnlognumber                                                                 as CnsldtnTaskLogUUID,
  key message.cnsldtnlogmessageno                                                              as CnsldtnTskLgMsgNmbr,

      message.cnsldtnlogitemnumber                                                             as CnsldtnTaskLogItemUUID,
      message.msgty                                                                            as SystemMessageType,
      message.msgid                                                                            as SystemMessageIdentification,
      cast(message.msgno as msgnr)                                                             as SystemMessageNumber,
      message.msgv1                                                                            as SystemMessageVariable1,
      message.msgv2                                                                            as SystemMessageVariable2,
      message.msgv3                                                                            as SystemMessageVariable3,
      message.msgv4                                                                            as SystemMessageVariable4,
      cast(3 as eqfnr)                                                                         as SortField,
      cast(concat_with_space(message.msgid, message.msgno, 2) as fincs_msg_id preserving type) as CnsldtnTskLgMsgID,

      case
          when message.msgty = 'E' then cast(1 as fincs_msg_severity preserving type)
          when message.msgty = 'W' then cast(2 as fincs_msg_severity preserving type)
          when message.msgty = 'I' then cast(3 as fincs_msg_severity preserving type)
          when message.msgty = 'S' then cast(4 as fincs_msg_severity preserving type)
          else cast(5 as fincs_msg_severity preserving type)
      end                                                                                      as SystemMessageTypeSortOrder,

      _ConsolidationTaskLog,
      
      _CnsldtnSystemMessageType
}
```
