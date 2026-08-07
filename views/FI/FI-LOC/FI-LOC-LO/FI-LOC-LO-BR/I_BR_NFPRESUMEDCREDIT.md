---
name: I_BR_NFPRESUMEDCREDIT
description: Brazil Nota Fiscal Presumed Credit
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPRESUMEDCREDIT')/$value
semantic_en: Brazil Nota Fiscal Presumed Credit
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
# I_BR_NFPRESUMEDCREDIT

**Brazil Nota Fiscal Presumed Credit**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPRESUMEDCREDIT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` |  | |  |  | `NUMC(10)` | Document Number |
| `BR_NotaFiscalItem` |  | |  |  | `NUMC(6)` | Document Item Number |
| `BR_NFPrsmdCreditSequenceNumber` |  | |  |  | `NUMC(4)` | Counter |
| `BR_FsclBnftCodePresumedCredit` |  | |  |  | `CHAR(10)` | State Fiscal Benefit Code of Presumed Credit |
| `BR_PresumedCreditPercent` |  | |  |  | `DEC(7)` | Presumed Credit Percentage |
| `BR_PresumedCreditAmount` |  | |  |  | `CURR(15)` | Presumed Credit Amount |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
