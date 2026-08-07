---
name: I_INCIDENTINJUREDPERSONINFO
description: "This CDS view information about injured persons in incidents. This CDS view provides the data to answer the following business questions: How many of the reported incidents has a fatality? How many of the incidents in the system need to be reported to an authority? Which injury/illness is most common in my organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJUREDPERSONINFO')/$value
semantic_en: "This CDS view information about injured persons in incidents. This CDS view provides the data to answer the following business questions: How many of the reported incidents has a fatality? How many of the incidents in the system need to be reported to an authority? Which injury/illness is most common in my organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTINJUREDPERSONINFO

**This CDS view information about injured persons in incidents. This CDS view provides the data to answer the following business questions: How many of the reported incidents has a fatality? How many of the incidents in the system need to be reported to an authority? Which injury/illness is most common in my organization? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJUREDPERSONINFO')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InjuredPersonInfoUUID` |  | |  |  | `RAW(16)` | Injured Person Information UUID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `InvolvedPersonUUID` |  | |  |  | `RAW(16)` | Involved Person UUID |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Object Changed By |
| `IncidentType` |  | |  |  | `CHAR(21)` | Incident Type |
| `InjuryIllnessIsFatal` |  | |  |  | `CHAR(1)` | Fatal Injury / Illness |
| `InjuryIllnessCaseIsRecordable` |  | |  |  | `CHAR(1)` | Reporting Required |
| `PersnHasTrtmtBeyond1stAid` |  | |  |  | `CHAR(1)` | Treatment Beyond First Aid |
| `PersnIsTreatedInEmgyRoom` |  | |  |  | `CHAR(1)` | Emergency Room Treatment |
| `PersonIsInpatientOvernight` |  | |  |  | `CHAR(1)` | Inpatient Treatment Overnight |
| `PersonHasReceivedFirstAid` |  | |  |  | `CHAR(1)` | First Aid Treatment |
