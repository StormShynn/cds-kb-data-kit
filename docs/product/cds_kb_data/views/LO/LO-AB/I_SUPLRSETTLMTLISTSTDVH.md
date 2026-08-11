---
name: I_SUPLRSETTLMTLISTSTDVH
description: "Supplier Settlement List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTSTDVH')/$value
semantic_en: "Supplier Settlement List"
semantic_vi: "Supplier Settlement List — CDS view giao diện dựa trên I_SuplrSettlmtList."
keywords:
  - "supplier"
  - "settlement"
  - "list"
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
# I_SUPLRSETTLMTLISTSTDVH

**Supplier Settlement List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrSettlmtList` | ✓ | |  |  | `CHAR(10)` | Supplier Settlement List |
| `AlternativeInvoicingParty` |  | |  |  | `CHAR(10)` | Alternative Supplier |
| `SuplrSettlmtCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Supplier in Settlement Management |
| `PayeeParty` |  | |  |  | `CHAR(10)` | Payee |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `_AlternativeInvoicingParty` | | ✓ | | | | |
| `_AltvInvoicingPartyCompany` | | ✓ | | | | |
| `_InvoicingParty` | | ✓ | | | | |
| `_InvoicingPartyCompany` | | ✓ | | | | |
| `_PayeeParty` | | ✓ | | | | |
| `_PayeePartyCompany` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRSETTLMTLISTSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFSLRSTLST_SVH'
@ObjectModel.representativeKey: 'SuplrSettlmtList'
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
@EndUserText.label: 'Supplier Settlement List'

define view entity I_SuplrSettlmtListStdVH
  as select from I_SuplrSettlmtList
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
  key SuplrSettlmtList,

      @Consumption.hidden: true
      AlternativeInvoicingParty,
      @Consumption.hidden: true
      SuplrSettlmtCompanyCode,
      @Consumption.hidden: true
      InvoicingParty,
      @Consumption.hidden: true
      PayeeParty,
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
      _InvoicingParty,
      @Consumption.hidden: true
      _InvoicingPartyCompany,
      @Consumption.hidden: true
      _PayeeParty,
      @Consumption.hidden: true
      _PayeePartyCompany
}
```
