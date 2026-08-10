---
name: I_CRDTDECISIONDOCUMENTCATEGORY
description: "This CDS view is designed to provide language-dependent text descriptions for categories of credit decision documents. It links credit decision document categories with their respective text descriptions in different languages, facilitating multilingual support for credit decision documentation. This CDS view provides the data to answer the following business questions: What are the text descriptions for different categories of credit decision documents in various languages? How can I retrieve the language-specific name for a given credit decision document category? Which languages are supported for the text descriptions of credit decision document categories? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDECISIONDOCUMENTCATEGORY')/$value
semantic_en: "This CDS view is designed to provide language-dependent text descriptions for categories of credit decision documents. It links credit decision document categories with their respective text descriptions in different languages, facilitating multilingual support for credit decision documentation. This CDS view provides the data to answer the following business questions: What are the text descriptions for different categories of credit decision documents in various languages? How can I retrieve the language-specific name for a given credit decision document category? Which languages are supported for the text descriptions of credit decision document categories? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CRDTDECISIONDOCUMENTCATEGORY

**This CDS view is designed to provide language-dependent text descriptions for categories of credit decision documents. It links credit decision document categories with their respective text descriptions in different languages, facilitating multilingual support for credit decision documentation. This CDS view provides the data to answer the following business questions: What are the text descriptions for different categories of credit decision documents in various languages? How can I retrieve the language-specific name for a given credit decision document category? Which languages are supported for the text descriptions of credit decision document categories? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDECISIONDOCUMENTCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditDecisionDocumentCategory` |  | |  |  | `CHAR(4)` | Category of the Documented Credit Decision |
