---
name: I_SETTLMTDATEUSAGE
description: This CDS view is used to select the settlement date usage. Domains: WB2_SETTL_DATE_USAGE Values: Standard Document 1 - Retroactive Accruals Update 2 - Standard and Retroactive Accruals Update
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATEUSAGE')/$value
semantic_en: This CDS view is used to select the settlement date usage. Domains: WB2_SETTL_DATE_USAGE Values: Standard Document 1 - Retroactive Accruals Update 2 - Standard and Retroactive Accruals Update
tags:
  - LO
  - component:LO-GT-CHB
  - document
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTDATEUSAGE

**This CDS view is used to select the settlement date usage. Domains: WB2_SETTL_DATE_USAGE Values: Standard Document 1 - Retroactive Accruals Update 2 - Standard and Retroactive Accruals Update**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDATEUSAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDateUsage` |  | |  |  | `CHAR(1)` | Settlement Date Usage |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
