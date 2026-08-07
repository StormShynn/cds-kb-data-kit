---
name: I_INCIDENTINJURYILLNESS
description: "This CDS view retrieves information about injuries and illnesses that is recorded in incidents. This CDS view provides the data to answer the following business questions: How many of the injury/illness cases have a certain classification? How many of the injury/illness cases have a certain type? Which body part is most frequently affected in injury/illness cases? Which side of the body is most frequently affected in injury/illness cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJURYILLNESS')/$value
semantic_en: "This CDS view retrieves information about injuries and illnesses that is recorded in incidents. This CDS view provides the data to answer the following business questions: How many of the injury/illness cases have a certain classification? How many of the injury/illness cases have a certain type? Which body part is most frequently affected in injury/illness cases? Which side of the body is most frequently affected in injury/illness cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTINJURYILLNESS

**This CDS view retrieves information about injuries and illnesses that is recorded in incidents. This CDS view provides the data to answer the following business questions: How many of the injury/illness cases have a certain classification? How many of the injury/illness cases have a certain type? Which body part is most frequently affected in injury/illness cases? Which side of the body is most frequently affected in injury/illness cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINJURYILLNESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InjuryIllnessUUID` |  | |  |  | `RAW(16)` | Injury/Illness Case UUID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `InjuredPersonInfoUUID` |  | |  |  | `RAW(16)` | Injured Person Information UUID |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Object Created On/At |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Object Changed By |
| `InjuryIllnessClassification` |  | |  |  | `CHAR(21)` | Injury/Illness Classification |
| `InjuryIllnessType` |  | |  |  | `CHAR(21)` | Injury/Illness Type |
| `InjuryIllnessIsRecordable` |  | |  |  | `CHAR(1)` | Reporting of Injury/Illness Required |
| `InjuryIllnessIsMainInjury` |  | |  |  | `CHAR(1)` | Main Injury/Illness |
| `IncidentBodyPart` |  | |  |  | `CHAR(21)` | Injured Body Part |
| `IncidentBodySide` |  | |  |  | `CHAR(21)` | Injured Body Side |
