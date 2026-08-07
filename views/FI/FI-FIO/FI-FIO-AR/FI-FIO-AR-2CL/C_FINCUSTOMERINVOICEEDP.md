---
name: C_FINCUSTOMERINVOICEEDP
description: This CDS view is used as a data source to create email templates for correspondence with the type SAP21 (FI Customer Invoice). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINCUSTOMERINVOICEEDP')/$value
semantic_en: This CDS view is used as a data source to create email templates for correspondence with the type SAP21 (FI Customer Invoice). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: FI Customer Invoice Email Data Provider — CDS view tiêu dùng dựa trên I_JournalEntry.
keywords:
  - customer
  - invoice
  - email
  - data
  - provider
  - company
  - code
  - fiscal
  - year
  - accounting
  - document
  - type
  - date
tags:
  - FI
  - bo:billingdocument
  - component:FI-FIO-AR-2CL
  - consumption-view
  - customer
  - FI-FIO
  - FI-FIO-AR
  - FI-FIO-AR-2CL
  - invoice
  - lob:finance
---
# C_FINCUSTOMERINVOICEEDP

**This CDS view is used as a data source to create email templates for correspondence with the type SAP21 (FI Customer Invoice). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINCUSTOMERINVOICEEDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `UserDescription` |  | | `_User` | `UserDescription` | `CHAR(80)` | User Description |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINCUSTOMERINVOICEEDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FINCUSTOMERINVOICEEDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'FI Customer Invoice Email Data Provider'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.supportedCapabilities: [#OUTPUT_EMAIL_DATA_PROVIDER]
@VDM.viewType: #CONSUMPTION

define view entity C_FinCustomerInvoiceEDP as select from I_JournalEntry as JournalEntry
    inner join   I_CompanyCode          as _CompanyCode on _CompanyCode.CompanyCode = JournalEntry.CompanyCode
    left outer to one join I_User as _User on _User.UserID = $session.user
{
      
  key JournalEntry.CompanyCode as CompanyCode,                
  key JournalEntry.FiscalYear  as FiscalYear,                  
  key JournalEntry.AccountingDocument as AccountingDocument,         
      JournalEntry.AccountingDocumentType,
      JournalEntry.DocumentDate,
      JournalEntry.PostingDate,
      JournalEntry.FiscalPeriod,
      
      _User.UserDescription,
      _CompanyCode.CompanyCodeName     as CompanyCodeName

}
```
