---
name: I_SAFETYOBSERVATIONGROUPCODET
description: "This CDS view enables you to access and analyze safety observation group codes. You can use this view to categorize and group safety observations for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: Which safety observation groups are actively configured in the system? How are safety observations categorized across different group codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SAFETYOBSERVATIONGROUPCODET')/$value
semantic_en: "This CDS view enables you to access and analyze safety observation group codes. You can use this view to categorize and group safety observations for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: Which safety observation groups are actively configured in the system? How are safety observations categorized across different group codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_SAFETYOBSERVATIONGROUPCODET

**This CDS view enables you to access and analyze safety observation group codes. You can use this view to categorize and group safety observations for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: Which safety observation groups are actively configured in the system? How are safety observations categorized across different group codes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SAFETYOBSERVATIONGROUPCODET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SafetyObservationGroupCode` |  | |  |  | `CHAR(21)` | Safety Observation Group |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SafetyObservationGroupCodeName` |  | |  |  | `CHAR(132)` | Description (Long) |
