---
name: I_ENGAGEMENTPROJECTRESOURCE
description: This CDS view provides a list of resources (such as roles, additional resources, services, or expenses) that can be planned in a customer or internal project.
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTRESOURCE')/$value
semantic_en: This CDS view provides a list of resources (such as roles, additional resources, services, or expenses) that can be planned in a customer or internal project.
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - plan
  - project
  - metadata-only
---
# I_ENGAGEMENTPROJECTRESOURCE

**This CDS view provides a list of resources (such as roles, additional resources, services, or expenses) that can be planned in a customer or internal project.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTRESOURCE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EngagementProjectResourceType` | `CHAR(4)` |  |
| `EngagementProjectResource` | `CHAR(40)` | Resource ID |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
