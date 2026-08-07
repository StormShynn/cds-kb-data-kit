---
name: I_CNDNCONTRPROCVARPURASSGMT
description: This CDS view retrieves the purchasing organizations and company codes assigned to the process variant.
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARPURASSGMT')/$value
semantic_en: This CDS view retrieves the purchasing organizations and company codes assigned to the process variant.
tags:
  - LO
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# I_CNDNCONTRPROCVARPURASSGMT

**This CDS view retrieves the purchasing organizations and company codes assigned to the process variant.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARPURASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrProcVar` |  | |  |  | `CHAR(4)` | Condition Contract Process Variant |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
