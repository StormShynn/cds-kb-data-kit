---
name: I_JITINBCALLACTIONLOG
description: "Jitinbcallactionlog"
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
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
# I_JITINBCALLACTIONLOG

**Jitinbcallactionlog**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallActionLogUUID` | ✓ | |  | `db_key` |  |  |
| `JITHeaderUUID` |  | |  | `root_key` |  |  |
| `JITCallCompGrpUUID` |  | |  | `parent_key` |  |  |
| `ApplicationLogObject` |  | |  | `object` |  |  |
| `ApplicationLogSubobject` |  | |  | `subobject` |  |  |
| `JITCallProcessingLogID` |  | |  | `lognumber` |  |  |
| `JITFioriApplicationName` |  | |  | `fiori_application_name` |  |  |
| `JITCallActionSource` |  | |  | `action_source` |  |  |
| `JITAction` |  | |  | `action_code` |  |  |
| `JITCallActionStatus` |  | |  | `action_status` |  |  |
| `TriggeredByUser` |  | |  | `aluser` |  |  |
| `CreationDateTime` |  | |  | `crea_date_time` |  |  |
| `JITFioriID` |  | |  | `jitfioriid` |  |  |
| `JITApplicationLogHandle` |  | |  | `jitapplicationloghandle` |  |  |
| `JITApplicationLogSeverity` |  | |  | `jitapplicationlogseverity` |  |  |
| `JITActionLogAdditionalNote` |  | |  | `jitactionlogadditionalnote` |  |  |
| `JITPreIntProcessingStatus` |  | |  | `jitpreintprocessingstatus` |  |  |
| `JITPostIntProcessingStatus` |  | |  | `jitpostintprocessingstatus` |  |  |
| `JITFrameAction` |  | |  | `jitframeaction` |  |  |
| `_JITInboundCall` | | ✓ | | | | |
| `_ProcessedByUser` | | ✓ | | | | |
| `_JITAction` | | ✓ | | | | |
| `_JITFrameAction` | | ✓ | | | | |
| `_JITCallActionSource` | | ✓ | | | | |
| `_JITCallActionStatus` | | ✓ | | | | |
| `_JITApplicationID` | | ✓ | | | | |
| `_JITPreInternalStatus` | | ✓ | | | | |
| `_JITPostInternalStatus` | | ✓ | | | | |
| `_JITApplicationLog` | | ✓ | | | | |
| `_JITApplicationLogObject` | | ✓ | | | | |
| `_JITApplicationLogSubobject` | | ✓ | | | | |
| `_JITInbCallComponentGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITInboundCall` | `I_JITInboundCall` | [1..1] |
| `_ProcessedByUser` | `I_UserContactCard` | [0..1] |
| `_JITAction` | `I_JITAction` | [0..1] |
| `_JITFrameAction` | `I_JITAction` | [0..1] |
| `_JITCallActionSource` | `I_JITCallActionSource` | [0..1] |
| `_JITCallActionStatus` | `I_JITCallActionStatus` | [0..1] |
| `_JITApplicationID` | `I_JITApplicationID` | [0..1] |
| `_JITPreInternalStatus` | `I_JITInternalStatus` | [0..1] |
| `_JITPostInternalStatus` | `I_JITInternalStatus` | [0..1] |
| `_JITApplicationLog` | `I_JITApplicationLog` | [0..1] |
| `_JITApplicationLogObject` | `I_JITApplicationLogObject` | [0..1] |
| `_JITApplicationLogSubobject` | `I_JITApplicationLogSubObject` | [0..1] |

## Source Code

```abap
@AccessControl                          : { authorizationCheck      : #MANDATORY,
                                            personalData.blocking   : #REQUIRED }
@Analytics                              : { dataCategory              : #DIMENSION,
                                            internalName              : #LOCAL }
@EndUserText.label                      : 'JIT Inbound Call Action Log'
@Metadata.allowExtensions               : true
@Metadata.ignorePropagatedAnnotations   : true
@ObjectModel                            : { modelingPattern           : #ANALYTICAL_DIMENSION,
                                            representativeKey         : 'JITCallActionLogUUID',
                                            sapObjectNodeType.name    : 'JITInbCallActionLog',
                                            supportedCapabilities     : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                            usageType                 : { dataClass       : #TRANSACTIONAL,
                                                                          serviceQuality  : #A,
                                                                          sizeCategory    : #XXL }
                                          }
@VDM.viewType                           : #BASIC
define view entity I_JITInbCallActionLog
  as select from njit_call_d_alog

  association        to parent I_JITInbCallComponentGroup as _JITInbCallComponentGroup   on  $projection.JITCallCompGrpUUID = _JITInbCallComponentGroup.JITCallCompGrpUUID
  association [1..1] to I_JITInboundCall                  as _JITInboundCall             on  $projection.JITHeaderUUID = _JITInboundCall.JITHeaderUUID
  association [0..1] to I_UserContactCard                 as _ProcessedByUser            on  $projection.TriggeredByUser = _ProcessedByUser.ContactCardID
  association [0..1] to I_JITAction                       as _JITAction                  on  $projection.JITAction = _JITAction.JITAction
  association [0..1] to I_JITAction                       as _JITFrameAction             on  $projection.JITFrameAction = _JITFrameAction.JITAction
  association [0..1] to I_JITCallActionSource             as _JITCallActionSource        on  $projection.JITCallActionSource = _JITCallActionSource.JITCallActionSource
  association [0..1] to I_JITCallActionStatus             as _JITCallActionStatus        on  $projection.JITCallActionStatus = _JITCallActionStatus.JITCallActionStatus
  association [0..1] to I_JITApplicationID                as _JITApplicationID           on  $projection.JITFioriID = _JITApplicationID.JITFioriID
  association [0..1] to I_JITInternalStatus               as _JITPreInternalStatus       on  $projection.JITPreIntProcessingStatus = _JITPreInternalStatus.JITIntProcessingStatus
  association [0..1] to I_JITInternalStatus               as _JITPostInternalStatus      on  $projection.JITPostIntProcessingStatus = _JITPostInternalStatus.JITIntProcessingStatus
  association [0..1] to I_JITApplicationLog               as _JITApplicationLog          on  $projection.JITApplicationLogHandle = _JITApplicationLog.LogHandle
  association [0..1] to I_JITApplicationLogObject         as _JITApplicationLogObject    on  $projection.ApplicationLogObject = _JITApplicationLogObject.ApplicationLogObject
  association [0..1] to I_JITApplicationLogSubObject      as _JITApplicationLogSubobject on  $projection.ApplicationLogObject    = _JITApplicationLogSubobject.ApplicationLogObject
                                                                                         and $projection.ApplicationLogSubobject = _JITApplicationLogSubobject.ApplicationLogSubobject
{
  key db_key                     as JITCallActionLogUUID,
      @ObjectModel.foreignKey.association : '_JITInboundCall'
      root_key                   as JITHeaderUUID,
      @ObjectModel.foreignKey.association : '_JITInbCallComponentGroup'
      parent_key                 as JITCallCompGrpUUID,
      @ObjectModel.foreignKey.association : '_JITApplicationLogObject'
      object                     as ApplicationLogObject,
      @ObjectModel.foreignKey.association : '_JITApplicationLogSubobject'
      subobject                  as ApplicationLogSubobject,
      lognumber                  as JITCallProcessingLogID,
      fiori_application_name     as JITFioriApplicationName,
      @ObjectModel.foreignKey.association : '_JITCallActionSource'
      action_source              as JITCallActionSource,
      @ObjectModel.foreignKey.association : '_JITAction'
      action_code                as JITAction,
      @ObjectModel.foreignKey.association : '_JITCallActionStatus'
      action_status              as JITCallActionStatus,
      @ObjectModel.foreignKey.association : '_ProcessedByUser'
      aluser                     as TriggeredByUser,
      crea_date_time             as CreationDateTime,
      @ObjectModel.foreignKey.association : '_JITApplicationID'
      jitfioriid                 as JITFioriID,
      @ObjectModel.foreignKey.association : '_JITApplicationLog'
      jitapplicationloghandle    as JITApplicationLogHandle,
      jitapplicationlogseverity  as JITApplicationLogSeverity,
      jitactionlogadditionalnote as JITActionLogAdditionalNote,
      @ObjectModel.foreignKey.association : '_JITPreInternalStatus'
      jitpreintprocessingstatus  as JITPreIntProcessingStatus,
      @ObjectModel.foreignKey.association : '_JITPostInternalStatus'
      jitpostintprocessingstatus as JITPostIntProcessingStatus,
      @ObjectModel.foreignKey.association : '_JITFrameAction'
      jitframeaction             as JITFrameAction,

      //Associations//
      _JITInbCallComponentGroup,
      _JITInboundCall,
      _ProcessedByUser,
      _JITAction,
      _JITFrameAction,
      _JITCallActionSource,
      _JITCallActionStatus,
      _JITApplicationID,
      _JITPreInternalStatus,
      _JITPostInternalStatus,
      _JITApplicationLog,
      _JITApplicationLogObject,
      _JITApplicationLogSubobject
}
where
  _JITInboundCall.JITScenario = '1'
```
