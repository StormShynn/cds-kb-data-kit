---
name: I_SETTLMTSUBSQNTDOCCATTEXT
description: This CDS view exposes fixed values of the field Document Category of Follow-On Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Dcoument List 06 Credit Memo List A Journal Entry A1 Main Journal Entry A2 Main Customer Journal Entries A3 Additional Journal Entries A4 Additional Customer Journal Entries
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSUBSQNTDOCCATTEXT')/$value
semantic_en: This CDS view exposes fixed values of the field Document Category of Follow-On Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Dcoument List 06 Credit Memo List A Journal Entry A1 Main Journal Entry A2 Main Customer Journal Entries A3 Additional Journal Entries A4 Additional Customer Journal Entries
tags:
  - LO
  - bo:billingdocument
  - component:LO-AB
  - customer
  - document
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# I_SETTLMTSUBSQNTDOCCATTEXT

**This CDS view exposes fixed values of the field Document Category of Follow-On Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Dcoument List 06 Credit Memo List A Journal Entry A1 Main Journal Entry A2 Main Customer Journal Entries A3 Additional Journal Entries A4 Additional Customer Journal Entries**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSUBSQNTDOCCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtSubsqntDocCat` |  | |  |  | `CHAR(2)` | Document Category of Subsequent Document |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `SettlmtSubsqntDocCatName` |  | |  |  | `CHAR(60)` | Description of Subsequent Document Category |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
