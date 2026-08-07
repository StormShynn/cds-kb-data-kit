---
name: I_CITCLASSFCTNCONFIGURATION
description: CIT Classification Configiration
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITCLASSFCTNCONFIGURATION')/$value
semantic_en: CIT Classification Configiration
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-CIT
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_CITCLASSFCTNCONFIGURATION

**CIT Classification Configiration**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITCLASSFCTNCONFIGURATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CorporateIncomeTaxHierarchy` |  | |  |  | `CHAR(42)` | Hierarchy ID |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Source Ledger |
| `CITReportingDateType` |  | |  |  | `CHAR(1)` | CIT Reporting Date Selection |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency Type |
| `CITClfnDuringPostingIsActive` |  | |  |  | `CHAR(1)` | Classification During Document Posting |
