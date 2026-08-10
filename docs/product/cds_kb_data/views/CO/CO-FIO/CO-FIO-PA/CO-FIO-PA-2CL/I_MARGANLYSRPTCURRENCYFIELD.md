---
name: I_MARGANLYSRPTCURRENCYFIELD
description: "This CDS view provides a dimension for margin analysis by filtering specific currency fields. It serves as a foundational element in analytical applications where currency differentiation is crucial for financial reporting and analysis. This CDS view provides the data to answer the following business questions: Which currency fields are relevant for margin analysis within the specified criteria? How can financial data be categorized based on specific currency fields such as CCC, GC, and FDC1? What text descriptions (associated with the selected currency fields) lead to better reporting and a better understanding? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSRPTCURRENCYFIELD')/$value
semantic_en: "This CDS view provides a dimension for margin analysis by filtering specific currency fields. It serves as a foundational element in analytical applications where currency differentiation is crucial for financial reporting and analysis. This CDS view provides the data to answer the following business questions: Which currency fields are relevant for margin analysis within the specified criteria? How can financial data be categorized based on specific currency fields such as CCC, GC, and FDC1? What text descriptions (associated with the selected currency fields) lead to better reporting and a better understanding? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - CO
  - bo:companycode
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - metadata-only
---
# I_MARGANLYSRPTCURRENCYFIELD

**This CDS view provides a dimension for margin analysis by filtering specific currency fields. It serves as a foundational element in analytical applications where currency differentiation is crucial for financial reporting and analysis. This CDS view provides the data to answer the following business questions: Which currency fields are relevant for margin analysis within the specified criteria? How can financial data be categorized based on specific currency fields such as CCC, GC, and FDC1? What text descriptions (associated with the selected currency fields) lead to better reporting and a better understanding? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSRPTCURRENCYFIELD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CurrencyField` |  | |  |  | `CHAR(4)` | Currency Role Field |
