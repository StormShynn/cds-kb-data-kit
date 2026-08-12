---
name: I_JITDELIVSQNCGRPSCHEDGACTY
description: "This CDS view provides detailed scheduling activity configurations for delivery sequence groups. It defines duration, calendar, shift, and timezone settings for each scheduling activity. This CDS view provides the data to answer the following business questions: What scheduling activities are configured for a delivery sequence group? What is the duration for each scheduling activity? What timezone is configured for scheduling? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSCHEDGACTY')/$value
semantic_en: "This CDS view provides detailed scheduling activity configurations for delivery sequence groups. It defines duration, calendar, shift, and timezone settings for each scheduling activity. This CDS view provides the data to answer the following business questions: What scheduling activities are configured for a delivery sequence group? What is the duration for each scheduling activity? What timezone is configured for scheduling? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Delivery Sqnc Grp Scheduling Activity — CDS view giao diện dựa trên njit_d_dsg_bpsav."
keywords:
  - "delivery"
  - "sqnc"
  - "grp"
  - "scheduling"
  - "activity"
  - "deliv"
  - "schedg"
  - "acty"
  - "entry"
  - "duration"
  - "days"
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - bo:businesspartner
---
# I_JITDELIVSQNCGRPSCHEDGACTY

**This CDS view provides detailed scheduling activity configurations for delivery sequence groups. It defines duration, calendar, shift, and timezone settings for each scheduling activity. This CDS view provides the data to answer the following business questions: What scheduling activities are configured for a delivery sequence group? What is the duration for each scheduling activity? What timezone is configured for scheduling? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSCHEDGACTY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncGrpSchedgActyUUID` | ✓ | |  | `jitdelivsqncgrpschedgactyuuid` | `RAW(16)` | NodeID |
| `JITDelivSqncGrpSchedgEntryUUID` |  | |  | `jitdelivsqncgrpschedgentryuuid` | `RAW(16)` | NodeID |
| `JITDelivSqncGrpUUID` |  | |  | `jitdelivsqncgrpuuid` | `RAW(16)` | NodeID |
| `SchedulingActivity` |  | |  | `schedulingactivity` | `CHAR(20)` | BPS – Activity |
| `DurationInDays` |  | |  | `durationindays` | `DEC(7)` | BPS - Duration in Days |
| `ActivityDurationTime` |  | |  | `activitydurationtime` | `TIMS(6)` | Activity Duration |
| `DurationInHours` |  | |  | `durationinhours` | `DEC(11)` | BPS - Duration in Hours |
| `SchedulingCalendar` |  | |  | `schedulingcalendar` | `CHAR(2)` | Factory Calendar |
| `JITTimeZone` |  | |  | `jittimezone` | `CHAR(6)` | Time Zone |
| `ShiftGroup` |  | |  | `shiftgroup` | `CHAR(2)` | Grouping for Shift Definitions and Shift Sequences |
| `ShiftSequence` |  | |  | `shiftsequence` | `CHAR(4)` | Key for the Shift Sequence |
| `SchedulingWorkingTimeID` |  | |  | `schedulingworkingtimeid` | `CHAR(10)` | BPS - Working Time |
| `_JITDelivSqncGrpHeaderBasic` | | ✓ | | | | |
| `_SchedulingActivity` | | ✓ | | | | |
| `_JITDelivSqncGrpSchedgEntry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITDelivSqncGrpHeaderBasic` | `I_JITDelivSqncGrpHeaderBasic` | [1..1] |
| `_SchedulingActivity` | `I_SchedulingActivity` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSCHEDGACTY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSCHEDGACTY')/$value)*

```abap
@AccessControl              : { authorizationCheck      : #MANDATORY }
@Analytics                  : { dataCategory            : #DIMENSION,
                                internalName            : #LOCAL
                              }
@EndUserText.label          : 'Delivery Sqnc Grp Scheduling Activity'
@Metadata.allowExtensions   :true
@ObjectModel: {
  modelingPattern           : #ANALYTICAL_DIMENSION,
  representativeKey         : 'JITDelivSqncGrpSchedgActyUUID',
  sapObjectNodeType.name    : 'JITDelivSqncGrpSchedgActy',
  supportedCapabilities     : [ #ANALYTICAL_DIMENSION,
                                #CDS_MODELING_ASSOCIATION_TARGET,
                                #CDS_MODELING_DATA_SOURCE,
                                #SQL_DATA_SOURCE
                              ],
  usageType                 : { dataClass               : #MASTER,
                                serviceQuality          : #A,
                                sizeCategory            : #S
                              }
}
@VDM.viewType               : #BASIC
define view entity I_JITDelivSqncGrpSchedgActy
  as select from njit_d_dsg_bpsav
  association [1..1] to I_JITDelivSqncGrpHeaderBasic        as _JITDelivSqncGrpHeaderBasic on $projection.JITDelivSqncGrpUUID = _JITDelivSqncGrpHeaderBasic.JITDelivSqncGrpUUID
  association        to parent I_JITDelivSqncGrpSchedgEntry as _JITDelivSqncGrpSchedgEntry on $projection.JITDelivSqncGrpSchedgEntryUUID = _JITDelivSqncGrpSchedgEntry.JITDelivSqncGrpSchedgEntryUUID
  association [0..1] to I_SchedulingActivity                as _SchedulingActivity         on $projection.SchedulingActivity = _SchedulingActivity.SchedulingActivity
{
  key jitdelivsqncgrpschedgactyuuid  as JITDelivSqncGrpSchedgActyUUID,
      @ObjectModel.foreignKey.association:'_JITDelivSqncGrpSchedgEntry'
      jitdelivsqncgrpschedgentryuuid as JITDelivSqncGrpSchedgEntryUUID,
      @ObjectModel.foreignKey.association:'_JITDelivSqncGrpHeaderBasic'
      jitdelivsqncgrpuuid            as JITDelivSqncGrpUUID,
      @ObjectModel.foreignKey.association:'_SchedulingActivity'
      schedulingactivity             as SchedulingActivity,
      durationindays                 as DurationInDays,
      activitydurationtime           as ActivityDurationTime,
      durationinhours                as DurationInHours,
      schedulingcalendar             as SchedulingCalendar,
      jittimezone                    as JITTimeZone,
      shiftgroup                     as ShiftGroup,
      shiftsequence                  as ShiftSequence,
      schedulingworkingtimeid        as SchedulingWorkingTimeID,
      _JITDelivSqncGrpHeaderBasic,
      _JITDelivSqncGrpSchedgEntry,
      _SchedulingActivity
}
```
