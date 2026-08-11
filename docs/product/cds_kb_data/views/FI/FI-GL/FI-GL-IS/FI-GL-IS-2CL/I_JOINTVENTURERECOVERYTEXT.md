---
name: I_JOINTVENTURERECOVERYTEXT
description: "This CDS view provides the prerequisites for answering the following business questions: How many joint venture recovery codes are defined?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERYTEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many joint venture recovery codes are defined?"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_JOINTVENTURERECOVERYTEXT

**This CDS view provides the prerequisites for answering the following business questions: How many joint venture recovery codes are defined?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTURERECOVERYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `JointVentureRecoveryCode` |  | |  |  | `CHAR(2)` | Recovery Indicator |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `JointVentureRecoveryCodeName` |  | |  |  | `CHAR(35)` | Recovery Indicator Description |
