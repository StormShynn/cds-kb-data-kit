---
name: I_JITINBCALLCOMPMESSAGE
description: "Jitinbcallcompmessage"
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-JIT
  - interface-view
  - component:LE-JIT-S2C
  - lob:Logistics Execution
---
# I_JITINBCALLCOMPMESSAGE

**Jitinbcallcompmessage**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITBackflushUUID` | ✓ | |  | `db_key` |  |  |
| `JITHeaderUUID` |  | |  | `root_key` |  |  |
| `JITCallComponentUUID` |  | |  | `parent_key` |  |  |
| `JITCallCompMatlMessageType` |  | |  | `jitcallcompmatlmessagetype` |  |  |
| `JITCallCompMatlMessageClass` |  | |  | `jitcallcompmatlmessageclass` |  |  |
| `JITCallCompMatlMessageNumber` |  | |  | `jitcallcompmatlmessagenumber` |  |  |
| `JITCallCompMatlMessageValue1` |  | |  | `jitcallcompmatlmessagevalue1` |  |  |
| `JITCallCompMatlMessageValue2` |  | |  | `jitcallcompmatlmessagevalue2` |  |  |
| `JITCallCompMatlMessageValue3` |  | |  | `jitcallcompmatlmessagevalue3` |  |  |
| `JITCallCompMatlMessageValue4` |  | |  | `jitcallcompmatlmessagevalue4` |  |  |
| `_JITInboundCall` | | ✓ | | | | |
| `_JITSystemMessageType` | | ✓ | | | | |
| `_JITInbCallComponent` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITInboundCall` | `I_JITInboundCall` | [1..1] |
| `_JITSystemMessageType` | `I_JITSystemMessageType` | [1..1] |

## Source Code

```abap
@AccessControl                          : { authorizationCheck      : #MANDATORY,
                                            personalData.blocking   : #REQUIRED }
@Analytics                              : { dataCategory            : #DIMENSION,
                                            internalName            : #LOCAL }
@EndUserText.label                      : 'JIT Inbound Call Component Messages'
@Metadata.allowExtensions               : true
@Metadata.ignorePropagatedAnnotations   : true
@ObjectModel                            : { modelingPattern         : #ANALYTICAL_DIMENSION,
                                            representativeKey       : 'JITBackflushUUID',
                                            sapObjectNodeType.name  : 'JITInbCallCompMessage',
                                            supportedCapabilities   : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                            usageType               : { dataClass       : #TRANSACTIONAL,
                                                                        serviceQuality  : #A,
                                                                        sizeCategory    : #XXL }
                                          }
@VDM.viewType                           : #BASIC
define view entity I_JITInbCallCompMessage
  as select from njit_call_d_msgs

  association        to parent I_JITInbCallComponent as _JITInbCallComponent  on $projection.JITCallComponentUUID = _JITInbCallComponent.JITCallComponentUUID
  association [1..1] to I_JITInboundCall             as _JITInboundCall       on $projection.JITHeaderUUID = _JITInboundCall.JITHeaderUUID
  association [1..1] to I_JITSystemMessageType       as _JITSystemMessageType on $projection.JITCallCompMatlMessageType = _JITSystemMessageType.SystemMessageType

{
  key db_key                       as JITBackflushUUID,
      @ObjectModel.foreignKey.association : '_JITInboundCall'
      root_key                     as JITHeaderUUID,
      @ObjectModel.foreignKey.association : '_JITInbCallComponent'
      parent_key                   as JITCallComponentUUID, 
      @ObjectModel.foreignKey.association : '_JITSystemMessageType'
      jitcallcompmatlmessagetype   as JITCallCompMatlMessageType,
      jitcallcompmatlmessageclass  as JITCallCompMatlMessageClass,
      jitcallcompmatlmessagenumber as JITCallCompMatlMessageNumber,
      jitcallcompmatlmessagevalue1 as JITCallCompMatlMessageValue1,
      jitcallcompmatlmessagevalue2 as JITCallCompMatlMessageValue2,
      jitcallcompmatlmessagevalue3 as JITCallCompMatlMessageValue3,
      jitcallcompmatlmessagevalue4 as JITCallCompMatlMessageValue4,
      //Associations
      _JITInbCallComponent,
      _JITInboundCall,
      _JITSystemMessageType
}
where
  _JITInboundCall.JITScenario = '1'
```
