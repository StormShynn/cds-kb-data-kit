---
name: C_SUPLRINVCEMAILPARAMETER
description: "This CDS view is used in the context of the output management of a supplier invoice via email. To send an email with an attached invoice document, a template for the email message is required. The template can be dynamically filled with some of the detail information of the attached supplier invoice. This CDS view provides the fields that can be used in the template for the email message body. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRINVCEMAILPARAMETER')/$value
semantic_en: "This CDS view is used in the context of the output management of a supplier invoice via email. To send an email with an attached invoice document, a template for the email message is required. The template can be dynamically filled with some of the detail information of the attached supplier invoice. This CDS view provides the fields that can be used in the template for the email message body. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Parameters for Supplier Invoice Email Template — CDS view tiêu dùng dựa trên I_SuplrInvcEmailParameter."
keywords:
  - "parameters"
  - "for"
  - "supplier"
  - "invoice"
  - "email"
  - "template"
  - "fiscal"
  - "year"
  - "company"
  - "code"
  - "name"
  - "document"
  - "date"
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
---
# C_SUPLRINVCEMAILPARAMETER

**This CDS view is used in the context of the output management of a supplier invoice via email. To send an email with an attached invoice document, a template for the email message is required. The template can be dynamically filled with some of the detail information of the attached supplier invoice. This CDS view provides the fields that can be used in the template for the email message body. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRINVCEMAILPARAMETER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoice` | ✓ | |  |  | `CHAR(10)` | Document Number of an Invoice Document |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `DocumentDate` |  | |  |  | `DATS(8)` | Invoice Date in Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `SupplierInvoiceIDByInvcgParty` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Different Invoicing Party |
| `BPSupplierName` |  | |  |  | `CHAR(81)` | Supplier Name |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `InvoiceGrossAmount` |  | |  |  | `CURR(13)` | Gross Invoice Amount in Document Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRINVCEMAILPARAMETER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLRINVCEMAILPARAMETER')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Parameters for Supplier Invoice Email Template'
@VDM.viewType: #CONSUMPTION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.semanticKey:['SupplierInvoice', 'FiscalYear']
@ObjectModel.sapObjectNodeType.name: 'SupplierInvoice'
@ObjectModel.supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]
@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true 

define view entity C_SuplrInvcEmailParameter as select from I_SuplrInvcEmailParameter 
{
      //Key
  key SupplierInvoice,
  key FiscalYear,
  
      CompanyCode,
      CompanyCodeName,
      DocumentDate,
      CreationDate, 
      SupplierInvoiceIDByInvcgParty,
      InvoicingParty,
      BPSupplierName,
      DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      InvoiceGrossAmount
}
```
