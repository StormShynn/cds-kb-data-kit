---
name: I_INCIDENTCOMBAUTHFIELDS
description: Incident Authorization Fields
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTCOMBAUTHFIELDS')/$value
semantic_en: Incident Authorization Fields
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTCOMBAUTHFIELDS

**Incident Authorization Fields**

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
