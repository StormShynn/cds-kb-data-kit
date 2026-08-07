---
name: I_CITREPORTINGITEM
description: CIT Reporting Item
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGITEM')/$value
semantic_en: CIT Reporting Item
tags:
  - FI
  - bo:purchaseorder
  - component:FI-LOC-CIT
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_CITREPORTINGITEM

**CIT Reporting Item**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITREPORTINGITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITReportVersion` |  | |  |  | `CHAR(30)` | CIT Report Version |
| `CITReportingLine` |  | |  |  | `CHAR(30)` | CIT Report Line |
| `CITReportingItem` |  | |  |  | `CHAR(10)` | CIT Report Item |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CorporateIncomeTaxHierarchy` |  | |  |  | `CHAR(42)` | Corporate Income Tax Hierarchy |
| `CITClassificationCode` |  | |  |  | `CHAR(40)` | CIT Classification Code |
| `BRFApplication` |  | |  |  | `CHAR(30)` | BRFplus Application name |
| `CITSettlementCode` |  | |  |  | `CHAR(30)` | CIT Settlement Code |
| `ItemSignIsReversed` |  | |  |  | `CHAR(1)` | Change Item Sign in Reporting |
