---
name: I_SUPLRSETTLMTSTDVH
description: "Supplier Settlement"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTSTDVH')/$value
semantic_en: "Supplier Settlement"
semantic_vi: "Supplier Settlement — CDS view giao diện dựa trên I_SuplrSettlmt."
keywords:
  - "supplier"
  - "settlement"
  - "suplr"
  - "settlmt"
  - "alternative"
  - "invoicing"
  - "party"
  - "company"
  - "code"
  - "payee"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRSETTLMTSTDVH

**Supplier Settlement**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmt` | ✓ | |  |  | `CHAR(10)` | Supplier Settlement |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFSUPLRSMT_SVH'
@ObjectModel.representativeKey: 'SuplrSettlmt'
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XXL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.internalName: #LOCAL

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Supplier Settlement'

define view entity I_SuplrSettlmtStdVH
  as select from I_SuplrSettlmt
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
  key SuplrSettlmt,

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
