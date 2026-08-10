---
name: I_FSCLYRINTVLDRVTNFORCOMPRNDTE
description: "This CDS view derives fiscal year intervals for comparison date ranges by mapping posting date periods to their corresponding fiscal years. It accepts two sets of posting date ranges (a primary range and a comparison range) and determines the minimum and maximum fiscal years that span both periods for each company code, ledger, and fiscal year variant combination. The view serves as a derivation function to support comparative financial analysis across different time periods. This CDS view provides the data to answer the following business questions: What fiscal years are covered when comparing financial data between two different posting date ranges for a specific company code and ledger? What is the earliest and latest fiscal year needed to retrieve financial data for both the current period and comparison period in a financial report? Which fiscal year variant applies to a given company code and ledger combination when performing period-over-period analysis? What is the complete fiscal year span required to support year-over-year or period-over-period financial comparisons across different posting date intervals? How do posting date ranges translate into fiscal year boundaries for multi-period financial analysis within a specific accounting ledger? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORCOMPRNDTE')/$value
semantic_en: "This CDS view derives fiscal year intervals for comparison date ranges by mapping posting date periods to their corresponding fiscal years. It accepts two sets of posting date ranges (a primary range and a comparison range) and determines the minimum and maximum fiscal years that span both periods for each company code, ledger, and fiscal year variant combination. The view serves as a derivation function to support comparative financial analysis across different time periods. This CDS view provides the data to answer the following business questions: What fiscal years are covered when comparing financial data between two different posting date ranges for a specific company code and ledger? What is the earliest and latest fiscal year needed to retrieve financial data for both the current period and comparison period in a financial report? Which fiscal year variant applies to a given company code and ledger combination when performing period-over-period analysis? What is the complete fiscal year span required to support year-over-year or period-over-period financial comparisons across different posting date intervals? How do posting date ranges translate into fiscal year boundaries for multi-period financial analysis within a specific accounting ledger? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-GL-GL-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_FSCLYRINTVLDRVTNFORCOMPRNDTE

**This CDS view derives fiscal year intervals for comparison date ranges by mapping posting date periods to their corresponding fiscal years. It accepts two sets of posting date ranges (a primary range and a comparison range) and determines the minimum and maximum fiscal years that span both periods for each company code, ledger, and fiscal year variant combination. The view serves as a derivation function to support comparative financial analysis across different time periods. This CDS view provides the data to answer the following business questions: What fiscal years are covered when comparing financial data between two different posting date ranges for a specific company code and ledger? What is the earliest and latest fiscal year needed to retrieve financial data for both the current period and comparison period in a financial report? Which fiscal year variant applies to a given company code and ledger combination when performing period-over-period analysis? What is the complete fiscal year span required to support year-over-year or period-over-period financial comparisons across different posting date intervals? How do posting date ranges translate into fiscal year boundaries for multi-period financial analysis within a specific accounting ledger? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLYRINTVLDRVTNFORCOMPRNDTE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FromFiscalYear` |  | |  |  | `NUMC(4)` |  |
| `ToFiscalYear` |  | |  |  | `NUMC(4)` |  |
