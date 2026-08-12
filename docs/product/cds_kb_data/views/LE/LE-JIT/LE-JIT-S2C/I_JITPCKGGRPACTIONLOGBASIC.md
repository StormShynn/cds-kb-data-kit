---
name: I_JITPCKGGRPACTIONLOGBASIC
description: "This CDS view provides action log information for packing groups. This view tracks all actions performed on packing groups, including status changes, user actions, and application logs. This CDS view provides the data to answer the following business questions: What actions have been performed on a packing group? Who triggered each action and when? What was the previous status before each action? What application log entries exist for the packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPACTIONLOGBASIC')/$value
semantic_en: "This CDS view provides action log information for packing groups. This view tracks all actions performed on packing groups, including status changes, user actions, and application logs. This CDS view provides the data to answer the following business questions: What actions have been performed on a packing group? Who triggered each action and when? What was the previous status before each action? What application log entries exist for the packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Package Group Action Log — CDS view giao diện (transactional data) dựa trên njit_d_pg_alog."
keywords:
  - "jit"
  - "package"
  - "group"
  - "action"
  - "log"
  - "pckg"
  - "fiori"
  - "application"
  - "name"
  - "call"
  - "source"
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
---
# I_JITPCKGGRPACTIONLOGBASIC

**This CDS view provides action log information for packing groups. This view tracks all actions performed on packing groups, including status changes, user actions, and application logs. This CDS view provides the data to answer the following business questions: What actions have been performed on a packing group? Who triggered each action and when? What was the previous status before each action? What application log entries exist for the packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPACTIONLOGBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpActionLogUUID` | ✓ | |  | `jitpckggrpactionloguuid` | `RAW(16)` | NodeID |
| `JITPckgGrpUUID` |  | |  | `jitpckggrpuuid` | `RAW(16)` | NodeID |
| `JITFioriApplicationName` |  | |  | `jitfioriapplicationname` | `CHAR(60)` | Explanatory Short Text |
| `JITCallActionSource` |  | |  | `jitcallactionsource` | `CHAR(1)` | Action log: Action source |
| `JITAction` |  | |  | `jitaction` | `CHAR(10)` | JIT Action |
| `JITCallActionStatus` |  | |  | `jitcallactionstatus` | `CHAR(1)` | Status Type |
| `TriggeredByUser` |  | |  | `triggeredbyuser` | `CHAR(12)` | Application log: user name |
| `CreationDateTime` |  | |  | `creationdatetime` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `JITApplicationLogHandle` |  | |  | `jitapplicationloghandle` | `CHAR(22)` | Application Log: Log Handle |
| `JITApplicationLogSeverity` |  | |  | `jitapplicationlogseverity` | `INT1(3)` | Indicates severity of the application logs |
| `JITPckgGrpPreviousStatus` |  | |  | `jitpckggrppreviousstatus` | `CHAR(1)` | Package Group Status |
| `JITPckgGrpStatus` |  | |  | `jitpckggrpstatus` | `CHAR(1)` | Package Group Status |
| `JITFioriID` |  | |  | `jitfioriid` | `CHAR(5)` | Fiori ID for Just In Time Application |
| `JITFrameAction` |  | |  | `jitframeaction` | `CHAR(10)` | JIT Action |
| `CreationDate` |  | |  | `tstmp_to_dats( cast (creationdatetime as abap.dec(15,0) ) ,abap_system_timezone( $session.client,'NULL'),$session.client,'NULL')` |  |  |
| `_TriggeredByUser` | | ✓ | | | | |
| `_JITActionText` | | ✓ | | | | |
| `_JITCallActionSource` | | ✓ | | | | |
| `_JITCallActionStatus` | | ✓ | | | | |
| `_JITPckgGrpStatus` | | ✓ | | | | |
| `_JITPckgGrpPreviousStatus` | | ✓ | | | | |
| `_JITApplicationID` | | ✓ | | | | |
| `_JITPckgGrpHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TriggeredByUser` | `I_UserContactCard` | [0..1] |
| `_JITActionText` | `I_JITActionText` | [0..1] |
| `_JITCallActionSource` | `I_JITCallActionSource` | [0..1] |
| `_JITCallActionStatus` | `I_JITCallActionStatus` | [0..1] |
| `_JITPckgGrpStatus` | `I_JITPckgGrpStatus` | [0..1] |
| `_JITPckgGrpPreviousStatus` | `I_JITPckgGrpStatus` | [0..1] |
| `_JITApplicationID` | `I_JITApplicationID` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPACTIONLOGBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPACTIONLOGBASIC')/$value)*

```abap
@AccessControl                      : { authorizationCheck        : #CHECK,
                                        personalData.blocking     : #BLOCKED_DATA_EXCLUDED }
@Analytics                          : { dataCategory              : #DIMENSION,
                                        internalName              : #LOCAL }
@EndUserText.label                  : 'JIT Package Group Action Log'
@Metadata.allowExtensions           : true
@ObjectModel                        : { usageType                 : { dataClass       : #TRANSACTIONAL,
                                                                      serviceQuality  : #A,
                                                                      sizeCategory    : #XL },
                                        modelingPattern             : #ANALYTICAL_DIMENSION,
                                        representativeKey           : 'JITPckgGrpActionLogUUID',
                                        sapObjectNodeType.name      : 'JITPackingGroupActionLog',
                                        supportedCapabilities       : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ] }
@VDM.viewType                       : #BASIC

define view entity I_JITPckgGrpActionLogBasic
  as select from njit_d_pg_alog
  association        to parent I_JITPckgGrpHeader as _JITPckgGrpHeader on $projection.JITPckgGrpUUID = _JITPckgGrpHeader.JITPckgGrpUUID
  association [0..1] to I_UserContactCard     as _TriggeredByUser          on  $projection.TriggeredByUser = _TriggeredByUser.ContactCardID
  association [0..1] to I_JITActionText       as _JITActionText            on  $projection.JITAction   = _JITActionText.JITAction
                                                                           and _JITActionText.Language = $session.system_language
  association [0..1] to I_JITCallActionSource as _JITCallActionSource      on  $projection.JITCallActionSource = _JITCallActionSource.JITCallActionSource
  association [0..1] to I_JITCallActionStatus as _JITCallActionStatus      on  $projection.JITCallActionStatus = _JITCallActionStatus.JITCallActionStatus
  association [0..1] to I_JITPckgGrpStatus    as _JITPckgGrpStatus         on  $projection.JITPckgGrpStatus = _JITPckgGrpStatus.JITPckgGrpStatus
  association [0..1] to I_JITPckgGrpStatus    as _JITPckgGrpPreviousStatus on  $projection.JITPckgGrpPreviousStatus = _JITPckgGrpPreviousStatus.JITPckgGrpStatus
  association [0..1] to I_JITApplicationID    as _JITApplicationID         on  $projection.JITFioriID = _JITApplicationID.JITFioriID
  //association [0..1] to I_JITPckgGrpHeader    as _JITPckgGrpHeader         on  $projection.JITPckgGrpUUID = _JITPckgGrpHeader.JITPckgGrpUUID

{
  key jitpckggrpactionloguuid                                                                                                          as JITPckgGrpActionLogUUID,
      @ObjectModel.foreignKey.association : '_JITPckgGrpHeader'
      jitpckggrpuuid                                                                                                                   as JITPckgGrpUUID,
      jitfioriapplicationname                                                                                                          as JITFioriApplicationName,
      @ObjectModel.foreignKey.association : '_JITCallActionSource'
      jitcallactionsource                                                                                                              as JITCallActionSource,
      jitaction                                                                                                                        as JITAction,
      @ObjectModel.foreignKey.association : '_JITCallActionStatus'
      jitcallactionstatus                                                                                                              as JITCallActionStatus,
      @ObjectModel.foreignKey.association: '_TriggeredByUser'
      @Semantics.user.createdBy: true
      triggeredbyuser                                                                                                                  as TriggeredByUser,
      @Semantics.systemDateTime.createdAt: true
      creationdatetime                                                                                                                 as CreationDateTime,
      jitapplicationloghandle                                                                                                          as JITApplicationLogHandle,
      jitapplicationlogseverity                                                                                                        as JITApplicationLogSeverity,
      @ObjectModel.foreignKey.association : '_JITPckgGrpPreviousStatus'
      jitpckggrppreviousstatus                                                                                                         as JITPckgGrpPreviousStatus,
      @ObjectModel.foreignKey.association : '_JITPckgGrpStatus'
      jitpckggrpstatus                                                                                                                 as JITPckgGrpStatus,
      @ObjectModel.foreignKey.association : '_JITApplicationID'
      jitfioriid                                                                                                                       as JITFioriID,
      jitframeaction                                                                                                                   as JITFrameAction,
      @Semantics.systemDate.createdAt: true
      tstmp_to_dats( cast (creationdatetime as abap.dec(15,0) ) ,abap_system_timezone( $session.client,'NULL'),$session.client,'NULL') as CreationDate,

      //Associations
      _TriggeredByUser,
      _JITActionText,
      _JITCallActionSource,
      _JITCallActionStatus,
      _JITPckgGrpStatus,
      _JITPckgGrpPreviousStatus,
      _JITApplicationID,
      _JITPckgGrpHeader
}
```
