---
name: I_BPTAXCMPLNCSTATUSREASONTEXT
description: "Tax Compliance Status Reasons - Text"
app_component: FS-BP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCMPLNCSTATUSREASONTEXT')/$value
semantic_en: "Tax Compliance Status Reasons - Text"
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
  - metadata-only
---
# I_BPTAXCMPLNCSTATUSREASONTEXT

**Tax Compliance Status Reasons - Text**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCMPLNCSTATUSREASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `BPTaxComplianceStatus` |  | |  |  | `CHAR(1)` | Tax Compliance Status |
| `BPTaxComplianceType` |  | |  |  | `CHAR(6)` | Tax Compliance Type |
| `BPTaxComplianceStatusReason` |  | |  |  | `CHAR(2)` | Tax Compliance: Reason for Status |
| `BPTxComplianceStatusReasonDesc` |  | |  |  | `CHAR(40)` | Tax Compliance: Text for Status Reason |
