---
name: I_IN_OUTGINVCADDLFSCLDTA
description: "Additional Fiscal Data Outgoing Invoices"
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_OUTGINVCADDLFSCLDTA')/$value
semantic_en: "Additional Fiscal Data Outgoing Invoices"
semantic_vi: "Additional Fiscal Data Outgoing Invoices — CDS view giao diện dựa trên I_IN_AdditionalFiscalData."
keywords:
  - "additional"
  - "fiscal"
  - "data"
  - "outgoing"
  - "invoices"
  - "unique"
  - "document"
  - "key1"
  - "type"
  - "record"
  - "shipping"
  - "bill"
  - "date"
tags:
  - FI
  - bo:billingdocument
  - component:FI-LOC-LO-IN
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-IN
  - interface-view
  - invoice
  - lob:finance
  - lob:logistics general
---
# I_IN_OUTGINVCADDLFSCLDTA

**Additional Fiscal Data Outgoing Invoices**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_OUTGINVCADDLFSCLDTA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AFDFUniqueKeyUUID` | ✓ | |  |  | `RAW(16)` | Globally Unique Identifier |
| `AFDFDocumentKey1` | ✓ | |  |  | `CHAR(32)` | AFD Dynamic 1 |
| `AFDFDocumentType` |  | |  |  | `CHAR(3)` | AFD Document Type |
| `AFDFRecordType` |  | |  |  | `CHAR(20)` | AFD Record Type |
| `IN_ShippingBillDate` |  | |  |  | `DATS(8)` | Shipping Bill Date : Export India |
| `IN_ShippingBillNumber` |  | |  |  | `CHAR(10)` | Shipping Bill Number : Export India |
| `IN_ShippingBillPortNumber` |  | |  |  | `CHAR(10)` | Shipping Bill Port Number : Export India |
| `_BillingDocumentBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocumentBasic` | `I_BillingDocumentBasic` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_OUTGINVCADDLFSCLDTA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_OUTGINVCADDLFSCLDTA')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Additional Fiscal Data Outgoing Invoices'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE  ]
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
define view entity I_IN_OutgInvcAddlFsclDta 
as select from I_IN_AdditionalFiscalData
association [1..1] to I_BillingDocumentBasic  as _BillingDocumentBasic 
on $projection.AFDFDocumentKey1 = _BillingDocumentBasic.BillingDocument
{
  key AFDFUniqueKeyUUID,
  key AFDFDocumentKey1,
  AFDFDocumentType,
  AFDFRecordType,
  IN_ShippingBillDate,
  IN_ShippingBillNumber,
  IN_ShippingBillPortNumber,
  //Association
  _BillingDocumentBasic
  
}
where AFDFDocumentType = 'BDH' and AFDFRecordType = 'IN_DRC_EXP'
```
