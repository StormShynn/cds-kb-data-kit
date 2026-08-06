---
name: I_CASEENTITY
description: Case Entiry
app_component: BC-SRV-CM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEENTITY')/$value
semantic_en: Case Entiry
tags:
  - BC
  - BC-SRV
  - BC-SRV-CM
  - component:BC-SRV-CM
  - interface-view
  - lob:basis components
  - metadata-only
---
# I_CASEENTITY

**Case Entiry**

| Property | Value |
|---|---|
| App Component | `BC-SRV-CM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASEENTITY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CaseUniqueID` | `CHAR(32)` | Technical Case Key (Case GUID) |
| `CaseRecordPersistentID` | `CHAR(32)` | Record POID ID |
| `CaseNotePersistentID` | `CHAR(32)` | Note POID ID |
| `CaseProcessRouteID` | `NUMC(12)` | Process Route ID |
