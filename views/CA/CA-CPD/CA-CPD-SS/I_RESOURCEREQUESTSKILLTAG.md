---
name: I_RESOURCEREQUESTSKILLTAG
description: This CDS view provides a list of skills required to fulfill a resource request. Skills are additional information provided along with the resource request, to enable the assignment or staffing of resources to a request.
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUESTSKILLTAG')/$value
semantic_en: This CDS view provides a list of skills required to fulfill a resource request. Skills are additional information provided along with the resource request, to enable the assignment or staffing of resources to a request.
tags:
  - CA
  - bo:companycode
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - metadata-only
---
# I_RESOURCEREQUESTSKILLTAG

**This CDS view provides a list of skills required to fulfill a resource request. Skills are additional information provided along with the resource request, to enable the assignment or staffing of resources to a request.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RESOURCEREQUESTSKILLTAG')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ResourceRequestSkillTagUUID` | `RAW(16)` | Skill Tag Key |
| `ResourceRequestUUID` | `RAW(16)` | Demand Key |
