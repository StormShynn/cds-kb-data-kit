---
name: I_EXPNSETTLMTSTDVH
description: "Expense Settlement"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTSTDVH')/$value
semantic_en: "Expense Settlement"
semantic_vi: "Expense Settlement — CDS view giao diện dựa trên I_ExpnSettlmt."
keywords:
  - "expense"
  - "settlement"
  - "expn"
  - "settlmt"
  - "bill"
  - "party"
  - "cust"
  - "company"
  - "code"
  - "payer"
  - "distribution"
  - "channel"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_EXPNSETTLMTSTDVH

**Expense Settlement**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExpnSettlmt` | ✓ | |  |  | `CHAR(10)` | Document Number of Expense Settlement |
| `BillToParty` |  | |  |  | `CHAR(10)` | Customer in Settlement Management |
| `CustSettlmtCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `_BillToParty` | | ✓ | | | | |
| `_BillToPartyCompany` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_PayerPartyCompany` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFEXPNSMT_SVH'
@ObjectModel.representativeKey: 'ExpnSettlmt'
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XXL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.internalName: #LOCAL

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Expense Settlement'
define view entity I_ExpnSettlmtStdVH
  as select from I_ExpnSettlmt
{
  key ExpnSettlmt,

      @Consumption.hidden: true
      BillToParty,
      @Consumption.hidden: true
      CustSettlmtCompanyCode,
      @Consumption.hidden: true
      PayerParty,
      @Consumption.hidden: true
      DistributionChannel,
      @Consumption.hidden: true
      Division,
      @Consumption.hidden: true
      SalesOrganization,
      @Consumption.hidden: true
      SettlmtDocType,

      @Consumption.hidden: true
      _BillToParty,
      @Consumption.hidden: true
      _BillToPartyCompany,
      @Consumption.hidden: true
      _PayerParty,
      @Consumption.hidden: true
      _PayerPartyCompany
}
```
