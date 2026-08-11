---
name: I_SETTLMTDOCLISTSTDVH
description: "Settlement Document List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTSTDVH')/$value
semantic_en: "Settlement Document List"
semantic_vi: "Settlement Document List — CDS view giao diện dựa trên I_SettlmtDocList."
keywords:
  - "settlement"
  - "document"
  - "list"
  - "settlmt"
  - "alternative"
  - "invoicing"
  - "party"
  - "company"
  - "code"
  - "bill"
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDOCLISTSTDVH

**Settlement Document List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocList` | ✓ | |  |  | `CHAR(10)` | Document Number of Settlement Document List |
| `AlternativeInvoicingParty` |  | |  |  | `CHAR(10)` | Alternative Supplier |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `_AlternativeInvoicingParty` | | ✓ | | | | |
| `_AltvInvoicingPartyCompany` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_BillToPartyCompany` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_InvoicingPartyCompany` | | ✓ | | | | |
| `_PayeeParty` | | ✓ | | | | |
| `_PayeePartyCompany` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_PayerPartyCompany` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFSMTDCLST_SVH'
@ObjectModel.representativeKey: 'SettlmtDocList'
@ObjectModel.modelingPattern:       #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XXL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.internalName: #LOCAL

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Settlement Document List'

define view entity I_SettlmtDocListStdVH
  as select from I_SettlmtDocList
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
  key SettlmtDocList,

      @Consumption.hidden: true
      AlternativeInvoicingParty,
      @Consumption.hidden: true
      CompanyCode,
      @Consumption.hidden: true
      BillToParty,
      @Consumption.hidden: true
      InvoicingParty,
      @Consumption.hidden: true
      PayeeParty,
      @Consumption.hidden: true
      PayerParty,
      @Consumption.hidden: true
      DistributionChannel,
      @Consumption.hidden: true
      Division,
      @Consumption.hidden: true
      PurchasingGroup,
      @Consumption.hidden: true
      PurchasingOrganization,
      @Consumption.hidden: true
      SalesOrganization,
      @Consumption.hidden: true
      SettlmtDocType,

      @Consumption.hidden: true
      _AlternativeInvoicingParty,
      @Consumption.hidden: true
      _AltvInvoicingPartyCompany,
      @Consumption.hidden: true
      _BillToParty,
      @Consumption.hidden: true
      _BillToPartyCompany,
      @Consumption.hidden: true
      _InvoicingParty,
      @Consumption.hidden: true
      _InvoicingPartyCompany,
      @Consumption.hidden: true
      _PayeeParty,
      @Consumption.hidden: true
      _PayeePartyCompany,
      @Consumption.hidden: true
      _PayerParty,
      @Consumption.hidden: true
      _PayerPartyCompany
}
```
