---
name: I_EMLTMPLCUSTOMERDOWNPAYMENT
description: "Email Template Customer Down Payment"
app_component: FI-LOC-FI-CZ
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
