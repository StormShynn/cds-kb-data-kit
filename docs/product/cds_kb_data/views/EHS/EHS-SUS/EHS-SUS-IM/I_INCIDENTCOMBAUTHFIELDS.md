---
name: I_INCIDENTCOMBAUTHFIELDS
description: "This CDS view combines authorization-relevant fields from incidents and their related investigations. It consolidates authorization data from both incident-level and investigation-level access restrictions to support comprehensive authorization checks in incident management processes. This CDS view provides the data to answer the following business questions: Which incidents and investigations does a user have authorization to access based on their assigned organizational attributes (plant, location, country, region)? What access restrictions are currently applied to specific incidents or investigations, and how do these restrictions differ between the incident level and investigation level? Which incidents are associated with specific plants, locations, or geographic regions for the purpose of enforcing location-based security policies? What is the current status and category of incidents and investigations that a user is authorized to view or modify? How are authorization fields distributed across the combined set of incidents and investigations to support role-based access control in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCOMBAUTHFIELDS')/$value
semantic_en: "This CDS view combines authorization-relevant fields from incidents and their related investigations. It consolidates authorization data from both incident-level and investigation-level access restrictions to support comprehensive authorization checks in incident management processes. This CDS view provides the data to answer the following business questions: Which incidents and investigations does a user have authorization to access based on their assigned organizational attributes (plant, location, country, region)? What access restrictions are currently applied to specific incidents or investigations, and how do these restrictions differ between the incident level and investigation level? Which incidents are associated with specific plants, locations, or geographic regions for the purpose of enforcing location-based security policies? What is the current status and category of incidents and investigations that a user is authorized to view or modify? How are authorization fields distributed across the combined set of incidents and investigations to support role-based access control in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - plan
  - metadata-only
---
# I_INCIDENTCOMBAUTHFIELDS

**This CDS view combines authorization-relevant fields from incidents and their related investigations. It consolidates authorization data from both incident-level and investigation-level access restrictions to support comprehensive authorization checks in incident management processes. This CDS view provides the data to answer the following business questions: Which incidents and investigations does a user have authorization to access based on their assigned organizational attributes (plant, location, country, region)? What access restrictions are currently applied to specific incidents or investigations, and how do these restrictions differ between the incident level and investigation level? Which incidents are associated with specific plants, locations, or geographic regions for the purpose of enforcing location-based security policies? What is the current status and category of incidents and investigations that a user is authorized to view or modify? How are authorization fields distributed across the combined set of incidents and investigations to support role-based access control in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCOMBAUTHFIELDS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSTaskHostObjectInstanceUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `IncidentUUID` |  | |  |  | `RAW(16)` | Incident UUID |
| `InvestigationAccessRestriction` |  | |  |  | `CHAR(1)` |  |
| `IncidentCategory` |  | |  |  | `CHAR(3)` | Incident Category |
| `IncidentStatus` |  | |  |  | `CHAR(2)` | Incident Status |
| `Plant` |  | |  |  | `CHAR(4)` | Plant ID |
| `IncidentID` |  | |  |  | `CHAR(20)` | Incident ID |
| `EHSLocationUUID` |  | |  |  | `RAW(16)` | Location |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region of Incident |
| `Region` |  | |  |  | `CHAR(3)` | Region of Incident |
| `IncidentAccessRestriction` |  | |  |  | `CHAR(1)` | Restricted Access to Incident Record |
