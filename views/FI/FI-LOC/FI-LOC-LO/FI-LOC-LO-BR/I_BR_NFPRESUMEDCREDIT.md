---
name: I_BR_NFPRESUMEDCREDIT
description: This CDS view displays the presumed credit for nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPRESUMEDCREDIT')/$value
semantic_en: This CDS view displays the presumed credit for nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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

**This CDS view displays the presumed credit for nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
