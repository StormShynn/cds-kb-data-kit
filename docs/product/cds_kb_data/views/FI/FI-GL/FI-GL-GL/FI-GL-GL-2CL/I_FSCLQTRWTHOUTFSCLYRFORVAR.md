---
name: I_FSCLQTRWTHOUTFSCLYRFORVAR
description: "This CDS view provides a distinct list of fiscal quarters for each fiscal year variant, independent of specific fiscal years. It serves as an analytical dimension that enables reporting and analysis across fiscal quarters without being tied to particular fiscal year values. The view aggregates fiscal calendar data to create a master list of quarter identifiers that can be used consistently across different fiscal year periods within the same variant structure. This CDS view provides the data to answer the following business questions: What are all the possible fiscal quarters defined for a specific fiscal year variant in our system? Which fiscal quarter identifiers are available for selection when analyzing data across multiple fiscal years using the same fiscal year variant? What is the complete set of fiscal quarters that can be used for comparative analysis across different fiscal years within the same fiscal year variant structure? How can we provide a standardized list of fiscal quarters for dropdown selections or filters in analytical reports that span multiple fiscal years? What fiscal quarter values exist in our fiscal calendar configuration for a given fiscal year variant, regardless of the actual fiscal year periods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLQTRWTHOUTFSCLYRFORVAR')/$value
semantic_en: "This CDS view provides a distinct list of fiscal quarters for each fiscal year variant, independent of specific fiscal years. It serves as an analytical dimension that enables reporting and analysis across fiscal quarters without being tied to particular fiscal year values. The view aggregates fiscal calendar data to create a master list of quarter identifiers that can be used consistently across different fiscal year periods within the same variant structure. This CDS view provides the data to answer the following business questions: What are all the possible fiscal quarters defined for a specific fiscal year variant in our system? Which fiscal quarter identifiers are available for selection when analyzing data across multiple fiscal years using the same fiscal year variant? What is the complete set of fiscal quarters that can be used for comparative analysis across different fiscal years within the same fiscal year variant structure? How can we provide a standardized list of fiscal quarters for dropdown selections or filters in analytical reports that span multiple fiscal years? What fiscal quarter values exist in our fiscal calendar configuration for a given fiscal year variant, regardless of the actual fiscal year periods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_FSCLQTRWTHOUTFSCLYRFORVAR

**This CDS view provides a distinct list of fiscal quarters for each fiscal year variant, independent of specific fiscal years. It serves as an analytical dimension that enables reporting and analysis across fiscal quarters without being tied to particular fiscal year values. The view aggregates fiscal calendar data to create a master list of quarter identifiers that can be used consistently across different fiscal year periods within the same variant structure. This CDS view provides the data to answer the following business questions: What are all the possible fiscal quarters defined for a specific fiscal year variant in our system? Which fiscal quarter identifiers are available for selection when analyzing data across multiple fiscal years using the same fiscal year variant? What is the complete set of fiscal quarters that can be used for comparative analysis across different fiscal years within the same fiscal year variant structure? How can we provide a standardized list of fiscal quarters for dropdown selections or filters in analytical reports that span multiple fiscal years? What fiscal quarter values exist in our fiscal calendar configuration for a given fiscal year variant, regardless of the actual fiscal year periods? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FSCLQTRWTHOUTFSCLYRFORVAR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
