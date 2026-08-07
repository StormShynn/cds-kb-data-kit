---
name: I_ENGMNTPROJRESOURCETYPETEXT
description: "This CDS view provides descriptions of resource types in supported languages."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETYPETEXT')/$value
semantic_en: "This CDS view provides descriptions of resource types in supported languages."
tags:
  - CA
  - bo:project
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_ENGMNTPROJRESOURCETYPETEXT

**This CDS view provides descriptions of resource types in supported languages.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectResourceType` |  | |  |  | `CHAR(4)` | Resource Type ID |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `EngagementProjResourceTypeText` |  | |  |  | `CHAR(60)` | Resource Type Description |
