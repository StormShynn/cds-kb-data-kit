---
name: I_EMLTMPLCUSTOMERDOWNPAYMENT
description: "Email Template Customer Down Payment"
app_component: FI-LOC-FI-CZ
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTOMERDOWNPAYMENT')/$value
semantic_en: "Email Template Customer Down Payment"
semantic_vi: "Email Template Customer Down Payment — CDS view giao diện dựa trên P_FinCorrCustomerDownPayment."
keywords:
  - "email"
  - "template"
  - "customer"
  - "down"
  - "payment"
  - "company"
  - "code"
  - "accounting"
  - "document"
  - "fiscal"
  - "year"
  - "official"
  - "number"
tags:
  - FI
  - bo:businesspartner
  - component:FI-LOC-FI-CZ
  - customer
  - FI-LOC
  - FI-LOC-FI
  - FI-LOC-FI-CZ
  - interface-view
  - lob:finance
  - lob:logistics general
  - payment
---
# I_EMLTMPLCUSTOMERDOWNPAYMENT

**Email Template Customer Down Payment**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-CZ` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTOMERDOWNPAYMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `OfficialDocumentNumber` |  | |  |  | `CHAR(200)` | DEPRECATED: ODN Value (200 Characters) |
| `_CompanyCode` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTOMERDOWNPAYMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EMLTMPLCUSTOMERDOWNPAYMENT')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Email Template Customer Down Payment'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.supportedCapabilities: [#OUTPUT_EMAIL_DATA_PROVIDER]
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@VDM.viewType: #COMPOSITE

define view entity I_EmlTmplCustomerDownPayment

  as select from P_FinCorrCustomerDownPayment

{
  key CompanyCode,
  key AccountingDocument,
  key FiscalYear,

      OfficialDocumentNumber,
      _CompanyCode
}
```
