---
name: I_CONCURDOCACCTGDOCRELATION
description: "Concur Accounting Document Relation"
app_component: BNS-CON-SE-S4-FIN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCACCTGDOCRELATION')/$value
semantic_en: "Concur Accounting Document Relation"
tags:
  - BNS
  - account
  - BNS-CON
  - BNS-CON-SE
  - BNS-CON-SE-S4
  - BNS-CON-SE-S4-FIN
  - bo:journalentry
  - component:BNS-CON-SE-S4-FIN
  - document
  - interface-view
  - metadata-only
---
# I_CONCURDOCACCTGDOCRELATION

**Concur Accounting Document Relation**

| Property | Value |
|---|---|
| App Component | `BNS-CON-SE-S4-FIN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONCURDOCACCTGDOCRELATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConcurSystemKey` |  | |  |  | `INT1(3)` | System Key |
| `ConcurDocumentType` |  | |  |  | `CHAR(2)` | Posting Document Type |
| `ConcurDocumentID` |  | |  |  | `CHAR(32)` | Concur Document ID |
| `ConcurDocumentRevisionNumber` |  | |  |  | `CHAR(3)` | Concur Document Revision Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `JournalEntry` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `AccDocIsPrimaryForConcurDoc` |  | |  |  | `CHAR(1)` | Concur Document - Primary document |
