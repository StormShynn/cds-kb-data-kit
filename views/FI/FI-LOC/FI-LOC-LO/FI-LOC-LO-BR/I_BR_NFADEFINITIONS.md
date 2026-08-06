---
name: I_BR_NFADEFINITIONS
description: This CDS view provides you the definitions used to identify an electronic single nota fiscal, such as the series range defined for the CNPJ of the Sefaz of a specific region. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADEFINITIONS')/$value
semantic_en: This CDS view provides you the definitions used to identify an electronic single nota fiscal, such as the series range defined for the CNPJ of the Sefaz of a specific region. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
# I_BR_NFADEFINITIONS

**This CDS view provides you the definitions used to identify an electronic single nota fiscal, such as the series range defined for the CNPJ of the Sefaz of a specific region. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADEFINITIONS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `RegionName` | `CHAR(20)` | Description |
| `BR_CNPJ` | `NUMC(14)` | [DEPRECATED] CNPJ Numeric |
| `BR_CNPJ_2` | `CHAR(14)` | National Registry of Legal Entities (CNPJ) |
| `BR_NFeSeriesRangeFrom` | `CHAR(3)` | Initial Series |
| `BR_NFeSeriesRangeTo` | `CHAR(3)` | Final Series |
