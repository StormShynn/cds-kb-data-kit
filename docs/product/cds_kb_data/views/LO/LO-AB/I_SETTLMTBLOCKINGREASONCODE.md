---
name: I_SETTLMTBLOCKINGREASONCODE
description: "This CDS view is used to select the settlement blocking reason code."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBLOCKINGREASONCODE')/$value
semantic_en: "This CDS view is used to select the settlement blocking reason code."
tags:
  - LO
  - bo:salesorder
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTBLOCKINGREASONCODE

**This CDS view is used to select the settlement blocking reason code.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTBLOCKINGREASONCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtBlockingReason` |  | |  |  | `CHAR(2)` | Reason for Settlement Block |
