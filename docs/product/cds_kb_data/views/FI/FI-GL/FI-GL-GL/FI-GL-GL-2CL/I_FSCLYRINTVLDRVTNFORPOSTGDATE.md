---
name: I_FSCLYRINTVLDRVTNFORPOSTGDATE
description: "This CDS view derives the fiscal year range corresponding to a given posting date interval. It accepts two posting dates as input parameters and returns the associated fiscal years for each company code and ledger combination, taking into account the fiscal year variant configuration. The view serves as a derivation function to translate calendar date ranges into fiscal period ranges for financial reporting and analysis purposes. This CDS view provides the data to answer the following business questions: What fiscal years correspond to a specific range of posting dates for financial document analysis? Which fiscal year periods need to be included when reporting on transactions posted between two calendar dates? How do posting date ranges map to fiscal years across different company codes with varying fiscal year variants? What is the fiscal year span for a given posting date interval when consolidating data across multiple ledgers? Which fiscal years should be considered when filtering financial data by posting date range in a multi-company environment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORPOSTGDATE')/$value
semantic_en: "This CDS view derives the fiscal year range corresponding to a given posting date interval. It accepts two posting dates as input parameters and returns the associated fiscal years for each company code and ledger combination, taking into account the fiscal year variant configuration. The view serves as a derivation function to translate calendar date ranges into fiscal period ranges for financial reporting and analysis purposes. This CDS view provides the data to answer the following business questions: What fiscal years correspond to a specific range of posting dates for financial document analysis? Which fiscal year periods need to be included when reporting on transactions posted between two calendar dates? How do posting date ranges map to fiscal years across different company codes with varying fiscal year variants? What is the fiscal year span for a given posting date interval when consolidating data across multiple ledgers? Which fiscal years should be considered when filtering financial data by posting date range in a multi-company environment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-GL-GL-2CL
  - document
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-2CL
  - interface-view
  - lob:finance
  - transaction
  - metadata-only
---
# I_FSCLYRINTVLDRVTNFORPOSTGDATE

**This CDS view derives the fiscal year range corresponding to a given posting date interval. It accepts two posting dates as input parameters and returns the associated fiscal years for each company code and ledger combination, taking into account the fiscal year variant configuration. The view serves as a derivation function to translate calendar date ranges into fiscal period ranges for financial reporting and analysis purposes. This CDS view provides the data to answer the following business questions: What fiscal years correspond to a specific range of posting dates for financial document analysis? Which fiscal year periods need to be included when reporting on transactions posted between two calendar dates? How do posting date ranges map to fiscal years across different company codes with varying fiscal year variants? What is the fiscal year span for a given posting date interval when consolidating data across multiple ledgers? Which fiscal years should be considered when filtering financial data by posting date range in a multi-company environment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORPOSTGDATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FromFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `ToFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
