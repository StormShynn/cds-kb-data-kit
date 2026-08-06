---
name: I_INCIDENTINVOLVEDPERSON
description: This CDS view retrieves information about the persons that are involved in an incident. This CDS view provides the data to answer the following business questions: How many persons are involved in an incident? Has a person been involved in more than one incident? How many of the involved persons in an incident are with a restricted access to the person information? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINVOLVEDPERSON')/$value
semantic_en: This CDS view retrieves information about the persons that are involved in an incident. This CDS view provides the data to answer the following business questions: How many persons are involved in an incident? Has a person been involved in more than one incident? How many of the involved persons in an incident are with a restricted access to the person information? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Involved Person in an Incident
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTINVOLVEDPERSON

**This CDS view retrieves information about the persons that are involved in an incident. This CDS view provides the data to answer the following business questions: How many persons are involved in an incident? Has a person been involved in more than one incident? How many of the involved persons in an incident are with a restricted access to the person information? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTINVOLVEDPERSON')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `InvolvedPersonUUID` | `RAW(16)` | Involved Person UUID |
| `IncidentUUID` | `RAW(16)` | Incident UUID |
| `CreationDateTime` | `DEC(15)` | Object Created On/At |
| `CreatedByUser` | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` | `CHAR(12)` | Object Changed By |
| `PersonFullName` | `CHAR(80)` | Name of Involved Person |
| `EHSCombinedBusinessPartner` | `CHAR(13)` | Involved Person |
| `EHSPersonPositionDesc` | `CHAR(40)` | Description of Involved Person's Position |
| `EHSPersonGroup` | `CHAR(21)` | Person Group of Person |
| `PersonInfoHasAccRestriction` | `CHAR(1)` | Restricted Access to Person Information |
