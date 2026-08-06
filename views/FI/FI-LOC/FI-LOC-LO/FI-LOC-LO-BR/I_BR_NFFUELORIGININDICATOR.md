---
name: I_BR_NFFUELORIGININDICATOR
description: This CDS view displays the fuel composition and origin indication for nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFFUELORIGININDICATOR')/$value
semantic_en: This CDS view displays the fuel composition and origin indication for nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_BR_NFFUELORIGININDICATOR

**This CDS view displays the fuel composition and origin indication for nota fiscal items. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFFUELORIGININDICATOR')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BR_NotaFiscal` | `NUMC(10)` | Document Number |
| `BR_NotaFiscalItem` | `NUMC(6)` | Document Item Number |
| `BR_NFImportIndicatorFuelOrigin` | `CHAR(1)` | Fuel Origin Import Indicator |
| `BR_NFOriginRegion` | `CHAR(3)` | Origin UF of producer or importer |
| `BR_NFRegionOriginatingPercent` | `DEC(7)` | Originating percentage for the UF |
