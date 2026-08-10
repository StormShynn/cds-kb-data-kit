---
name: I_CNSLDTNFREETEXTANSWER
description: "This CDS view provides access to the consolidation free text answers. A consolidation free text answer is a free text response to a consolidation question. It is used in the context of the formal process for collecting disclosures and non-financial data by questions where the response options are not predefined. It serves as an analytical dimension that can be used for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: What are the available free text answers in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFREETEXTANSWER')/$value
semantic_en: "This CDS view provides access to the consolidation free text answers. A consolidation free text answer is a free text response to a consolidation question. It is used in the context of the formal process for collecting disclosures and non-financial data by questions where the response options are not predefined. It serves as an analytical dimension that can be used for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: What are the available free text answers in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CNSLDTNFREETEXTANSWER

**This CDS view provides access to the consolidation free text answers. A consolidation free text answer is a free text response to a consolidation question. It is used in the context of the formal process for collecting disclosures and non-financial data by questions where the response options are not predefined. It serves as an analytical dimension that can be used for reporting and analysis purposes. This CDS view provides the data to answer the following business questions: What are the available free text answers in the system? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNFREETEXTANSWER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationReportedAnswer` |  | |  |  | `CHAR(32)` | Reported Answer |
