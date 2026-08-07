---
name: I_BPTAXCOMPLIANCESTATUSTEXT
description: "Tax Compliance Status of BP - Text"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCESTATUSTEXT')/$value
semantic_en: "Tax Compliance Status of BP - Text"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
  - metadata-only
---
# I_BPTAXCOMPLIANCESTATUSTEXT

**Tax Compliance Status of BP - Text**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCESTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `BPTaxComplianceStatus` |  | |  |  | `CHAR(1)` | Tax Compliance Status |
| `BPTaxComplianceStatusDesc` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
