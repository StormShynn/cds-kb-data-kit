---
name: I_SUPLRBILLGDOCSTDVH
description: "Supplier Billing Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCSTDVH')/$value
semantic_en: "Supplier Billing Document"
semantic_vi: "Supplier Billing Document — CDS view giao diện dựa trên I_SuplrBillgDoc."
keywords:
  - "supplier"
  - "billing"
  - "document"
  - "suplr"
  - "billg"
  - "alternative"
  - "invoicing"
  - "party"
  - "settlmt"
  - "company"
  - "code"
  - "payee"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRBILLGDOCSTDVH

**Supplier Billing Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrBillgDoc` | ✓ | |  |  | `CHAR(10)` | Supplier Billing Document Number |
| `AlternativeInvoicingParty` |  | |  |  | `CHAR(10)` | Alternative Supplier |
| `SuplrSettlmtCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `_AlternativeInvoicingParty` | | ✓ | | | | |
| `_AltvInvoicingPartyCompany` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_InvoicingPartyCompany` | | ✓ | | | | |
| `_PayeeParty` | | ✓ | | | | |
| `_PayeePartyCompany` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFSUPLRBGD_SVH'
@ObjectModel.representativeKey: 'SuplrBillgDoc'
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XXL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.internalName: #LOCAL 

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Supplier Billing Document'
define view entity I_SuplrBillgDocStdVH as select from I_SuplrBillgDoc {
  key SuplrBillgDoc,

  @Consumption.hidden: true
  AlternativeInvoicingParty,
  @Consumption.hidden: true
  SuplrSettlmtCompanyCode,
  @Consumption.hidden: true
  InvoicingParty,
  @Consumption.hidden: true
  PayeeParty,
  @Consumption.hidden: true
  PurchasingGroup,
  @Consumption.hidden: true
  PurchasingOrganization,
  @Consumption.hidden: true
  SettlmtDocType,

  @Consumption.hidden: true
  _AlternativeInvoicingParty,
  @Consumption.hidden: true
  _AltvInvoicingPartyCompany,
  @Consumption.hidden: true
  _InvoicingParty,
  @Consumption.hidden: true
  _InvoicingPartyCompany,
  @Consumption.hidden: true
  _PayeeParty,
  @Consumption.hidden: true
  _PayeePartyCompany
}
```
