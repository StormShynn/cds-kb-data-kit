---
name: I_BR_NFMESSAGE
description: This CDS view provides the prerequisites for answering business questions about relevant aspects of nota fiscal message data.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFMESSAGE')/$value
semantic_en: This CDS view provides the prerequisites for answering business questions about relevant aspects of nota fiscal message data.
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_BR_NFMESSAGE

**This CDS view provides the prerequisites for answering business questions about relevant aspects of nota fiscal message data.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFMESSAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` |  | |  |  | `NUMC(10)` | Document Number |
| `BR_NFMessageSequenceNumber` |  | |  |  | `NUMC(2)` | Sequence number |
| `BR_NFMessageLineNumber` |  | |  |  | `NUMC(2)` | Line Number |
| `BR_NFMessageText` |  | |  |  | `CHAR(72)` | Message |
| `BR_NFMessageIsManual` |  | |  |  | `CHAR(1)` | Manual |
