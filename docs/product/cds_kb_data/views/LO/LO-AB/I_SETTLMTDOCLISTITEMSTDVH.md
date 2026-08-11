---
name: I_SETTLMTDOCLISTITEMSTDVH
description: "Settlement Document List Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMSTDVH')/$value
semantic_en: "Settlement Document List Item"
semantic_vi: "Settlement Document List Item — CDS view giao diện dựa trên I_SettlmtDocListItem."
keywords:
  - "settlement"
  - "document"
  - "list"
  - "item"
  - "settlmt"
  - "bill"
  - "party"
  - "company"
  - "code"
  - "invoicing"
tags:
  - LO
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTDOCLISTITEMSTDVH

**Settlement Document List Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtDocList` | ✓ | |  |  | `CHAR(10)` | Document Number of Settlement Document List |
| `SettlmtDocListItem` | ✓ | |  |  | `NUMC(6)` | Item in List |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `_SettlmtDocList` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_BillToPartyCompany` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_InvoicingPartyCompany` | | ✓ | | | | |
| `_PayeeParty` | | ✓ | | | | |
| `_PayeePartyCompany` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_PayerPartyCompany` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTDOCLISTITEMSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFSMDCLSIT_SVH'
@ObjectModel.representativeKey: 'SettlmtDocListItem'
@ObjectModel.modelingPattern:       #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.internalName: #LOCAL

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Settlement Document List Item'

define view entity I_SettlmtDocListItemStdVH
  as select from I_SettlmtDocListItem
{
      @ObjectModel.foreignKey.association: '_SettlmtDocList'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
  key SettlmtDocList,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
  key SettlmtDocListItem,

      @Consumption.hidden: true
      BillToParty,
      @Consumption.hidden: true
      CompanyCode,
      @Consumption.hidden: true
      InvoicingParty,
      @Consumption.hidden: true
      PayeeParty,
      @Consumption.hidden: true
      PayerParty,

      @Consumption.hidden: true
      _SettlmtDocList,
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
