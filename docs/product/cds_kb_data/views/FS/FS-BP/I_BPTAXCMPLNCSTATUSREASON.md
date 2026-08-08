---
name: I_BPTAXCMPLNCSTATUSREASON
description: "Tax Compliance Status Reasons"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCMPLNCSTATUSREASON')/$value
semantic_en: "Tax Compliance Status Reasons"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
  - metadata-only
---
# I_BPTAXCMPLNCSTATUSREASON

**Tax Compliance Status Reasons**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCMPLNCSTATUSREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPTaxComplianceType` |  | |  |  | `CHAR(6)` | Tax Compliance Type |
| `BPTaxComplianceStatus` |  | |  |  | `CHAR(1)` | Tax Compliance Status |
| `BPTaxComplianceStatusReason` |  | |  |  | `CHAR(2)` | Tax Compliance: Reason for Status |
