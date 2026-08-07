---
name: I_JITDELIVSQNCGRPSCHEDGACTY
description: This CDS view provides detailed scheduling activity configurations for delivery sequence groups. It defines duration, calendar, shift, and timezone settings for each scheduling activity. This CDS view provides the data to answer the following business questions: What scheduling activities are configured for a delivery sequence group? What is the duration for each scheduling activity? What timezone is configured for scheduling? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSCHEDGACTY')/$value
semantic_en: This CDS view provides detailed scheduling activity configurations for delivery sequence groups. It defines duration, calendar, shift, and timezone settings for each scheduling activity. This CDS view provides the data to answer the following business questions: What scheduling activities are configured for a delivery sequence group? What is the duration for each scheduling activity? What timezone is configured for scheduling? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - metadata-only
---
# I_JITDELIVSQNCGRPSCHEDGACTY

**This CDS view provides detailed scheduling activity configurations for delivery sequence groups. It defines duration, calendar, shift, and timezone settings for each scheduling activity. This CDS view provides the data to answer the following business questions: What scheduling activities are configured for a delivery sequence group? What is the duration for each scheduling activity? What timezone is configured for scheduling? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCGRPSCHEDGACTY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncGrpSchedgActyUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITDelivSqncGrpSchedgEntryUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITDelivSqncGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `SchedulingActivity` |  | |  |  | `CHAR(20)` | BPS – Activity |
| `DurationInDays` |  | |  |  | `DEC(7)` | BPS - Duration in Days |
| `ActivityDurationTime` |  | |  |  | `TIMS(6)` | Activity Duration |
| `DurationInHours` |  | |  |  | `DEC(11)` | BPS - Duration in Hours |
| `SchedulingCalendar` |  | |  |  | `CHAR(2)` | Factory Calendar |
| `JITTimeZone` |  | |  |  | `CHAR(6)` | Time Zone |
| `ShiftGroup` |  | |  |  | `CHAR(2)` | Grouping for Shift Definitions and Shift Sequences |
| `ShiftSequence` |  | |  |  | `CHAR(4)` | Key for the Shift Sequence |
| `SchedulingWorkingTimeID` |  | |  |  | `CHAR(10)` | BPS - Working Time |
