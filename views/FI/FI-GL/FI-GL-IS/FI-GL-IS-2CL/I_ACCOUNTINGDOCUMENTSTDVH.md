---
name: I_ACCOUNTINGDOCUMENTSTDVH
description: This CDS view is designed to provide a value help for accounting documents, allowing users to easily search and select accounting documents based on key attributes such as company code, fiscal year, and the accounting document number. It serves as a utility for applications that require users to input or select accounting documents. This view provides value help for AccountingDocument . This view should be used for value help purposes only. If you intend to select the entire business data, use the view instead. This CDS view provides the data to answer the following business questions: What are the available accounting documents for a specific company code? How can I find accounting documents for a particular fiscal year? What is the accounting document number for a given company code and fiscal year? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACCOUNTINGDOCUMENTSTDVH')/$value
semantic_en: This CDS view is designed to provide a value help for accounting documents, allowing users to easily search and select accounting documents based on key attributes such as company code, fiscal year, and the accounting document number. It serves as a utility for applications that require users to input or select accounting documents. This view provides value help for AccountingDocument . This view should be used for value help purposes only. If you intend to select the entire business data, use the view instead. This CDS view provides the data to answer the following business questions: What are the available accounting documents for a specific company code? How can I find accounting documents for a particular fiscal year? What is the accounting document number for a given company code and fiscal year? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-GL-IS-2CL
  - document
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_ACCOUNTINGDOCUMENTSTDVH

**This CDS view is designed to provide a value help for accounting documents, allowing users to easily search and select accounting documents based on key attributes such as company code, fiscal year, and the accounting document number. It serves as a utility for applications that require users to input or select accounting documents. This view provides value help for AccountingDocument . This view should be used for value help purposes only. If you intend to select the entire business data, use the view instead. This CDS view provides the data to answer the following business questions: What are the available accounting documents for a specific company code? How can I find accounting documents for a particular fiscal year? What is the accounting document number for a given company code and fiscal year? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACCOUNTINGDOCUMENTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
