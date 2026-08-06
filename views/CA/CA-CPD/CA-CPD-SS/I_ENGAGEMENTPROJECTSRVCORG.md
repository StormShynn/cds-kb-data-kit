---
name: I_ENGAGEMENTPROJECTSRVCORG
description: This CDS view provides information about a service organization.
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSRVCORG')/$value
semantic_en: This CDS view provides information about a service organization.
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
# I_ENGAGEMENTPROJECTSRVCORG

**This CDS view provides information about a service organization.**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSRVCORG')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EngagementProjectServiceOrg` | `CHAR(5)` | Service Organization |
| `EngmtProjServiceOrgIsSales` | `CHAR(1)` | Sales Org |
| `EngmtProjServiceOrgIsDelivery` | `CHAR(1)` | Delivery Organization |
| `TimePostingIsRestricted` | `CHAR(1)` | Restrict Unstaffed Posting |
| `RestrictedTimePosting` | `CHAR(1)` | Restrict Unstaffed Posting |
