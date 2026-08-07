---
name: I_JITSUPPLYCONTROLTOLLVL
description: This CDS view provides tolerance settings for JIT supply control configurations. It defines alarm and warning offsets based on tolerance date types, enabling monitoring and alerting based on delivery timing variances. This CDS view provides the data to answer the following business questions: What are the alarm offset settings for a supply control? What are the warning offset settings for a supply control? What tolerance date types are configured for a supply control? How many days/hours before an event should warnings be triggered? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLTOLLVL')/$value
semantic_en: This CDS view provides tolerance settings for JIT supply control configurations. It defines alarm and warning offsets based on tolerance date types, enabling monitoring and alerting based on delivery timing variances. This CDS view provides the data to answer the following business questions: What are the alarm offset settings for a supply control? What are the warning offset settings for a supply control? What tolerance date types are configured for a supply control? How many days/hours before an event should warnings be triggered? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_JITSUPPLYCONTROLTOLLVL

**This CDS view provides tolerance settings for JIT supply control configurations. It defines alarm and warning offsets based on tolerance date types, enabling monitoring and alerting based on delivery timing variances. This CDS view provides the data to answer the following business questions: What are the alarm offset settings for a supply control? What are the warning offset settings for a supply control? What tolerance date types are configured for a supply control? How many days/hours before an event should warnings be triggered? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITSUPPLYCONTROLTOLLVL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyControlToleranceUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITToleranceDateType` |  | |  |  | `CHAR(1)` | NJIT : Date Type for Tolerance determination |
| `SupplyControlUUID` |  | |  |  | `RAW(16)` | NodeID |
| `SupplyControlID` |  | |  |  | `CHAR(10)` | Supply Control |
| `AlarmOffsetInDays` |  | |  |  | `INT1(3)` | Second Reminder Offset In Days |
| `AlarmOffsetInHours` |  | |  |  | `TIMS(6)` | Second Reminder Offset In Hours |
| `WarningOffsetInDays` |  | |  |  | `INT1(3)` | First Reminder Offset In Days |
| `WarningOffsetInHours` |  | |  |  | `TIMS(6)` | First Reminder Offset In Hours |
