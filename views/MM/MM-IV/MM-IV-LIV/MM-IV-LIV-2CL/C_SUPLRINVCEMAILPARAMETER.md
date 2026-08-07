---
name: C_SUPLRINVCEMAILPARAMETER
description: This CDS view is used in the context of the output management of a supplier invoice via email. To send an email with an attached invoice document, a template for the email message is required. The template can be dynamically filled with some of the detail information of the attached supplier invoice. This CDS view provides the fields that can be used in the template for the email message body. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRINVCEMAILPARAMETER')/$value
semantic_en: This CDS view is used in the context of the output management of a supplier invoice via email. To send an email with an attached invoice document, a template for the email message is required. The template can be dynamically filled with some of the detail information of the attached supplier invoice. This CDS view provides the fields that can be used in the template for the email message body. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - MM
  - bo:billingdocument
  - component:MM-IV-LIV-2CL
  - consumption-view
  - document
  - invoice
  - lob:sourcing & procurement
  - MM-IV
  - MM-IV-LIV
  - MM-IV-LIV-2CL
  - supplier
  - metadata-only
---
# C_SUPLRINVCEMAILPARAMETER

**This CDS view is used in the context of the output management of a supplier invoice via email. To send an email with an attached invoice document, a template for the email message is required. The template can be dynamically filled with some of the detail information of the attached supplier invoice. This CDS view provides the fields that can be used in the template for the email message body. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRINVCEMAILPARAMETER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoice` |  | |  |  | `CHAR(10)` | Document Number of an Invoice Document |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `DocumentDate` |  | |  |  | `DATS(8)` | Invoice Date in Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `SupplierInvoiceIDByInvcgParty` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Different Invoicing Party |
| `BPSupplierName` |  | |  |  | `CHAR(81)` | Supplier Name |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `InvoiceGrossAmount` |  | |  |  | `CURR(13)` | Gross Invoice Amount in Document Currency |
