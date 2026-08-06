---
name: I_INCIDENTGROUP
description: Incident Group
app_component: EHS-SUS-IM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUP')/$value
semantic_en: Incident Group
tags:
  - EHS
  - component:EHS-SUS-IM
  - EHS-SUS
  - EHS-SUS-IM
  - interface-view
  - metadata-only
---
# I_INCIDENTGROUP

**Incident Group**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-IM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INCIDENTGROUP')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `IncidentGroupUUID` | `RAW(16)` | NodeID |
| `IncidentUUID` | `RAW(16)` | NodeID |
| `CreationDateTime` | `DEC(15)` | Object Created On/At |
| `CreatedByUser` | `CHAR(12)` | Object Created By |
| `LastChangeDateTime` | `DEC(15)` | Object Changed On/At |
| `LastChangedByUser` | `CHAR(12)` | Object Changed By |
| `IncidentGroupCode` | `CHAR(21)` | Incident Group |
| `NearMissGroupCode` | `CHAR(21)` | Near Miss Group |
| `SafetyObservationGroupCode` | `CHAR(21)` | Safety Observation Group |
| `EHSIncidentGroupSeverity` | `CHAR(21)` | Severity Level Code |
