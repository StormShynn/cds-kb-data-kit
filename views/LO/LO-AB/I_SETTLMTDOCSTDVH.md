---
name: I_SETTLMTDOCSTDVH
description: Settlmtdocstdvh
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - value-help
  - standard-value-help
  - component:LO-AB
  - lob:Logistics General
---
# I_SETTLMTDOCSTDVH

**Settlmtdocstdvh**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SettlmtDoc` | `SettlmtDoc` |
| `AlternativeInvoicingParty` | `AlternativeInvoicingParty` |
| `SuplrSettlmtCompanyCode` | `SuplrSettlmtCompanyCode` |
| `BillToParty` | `BillToParty` |
| `CustSettlmtCompanyCode` | `CustSettlmtCompanyCode` |
| `InvoicingParty` | `InvoicingParty` |
| `PayeeParty` | `PayeeParty` |
| `PayerParty` | `PayerParty` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `PurchasingGroup` | `PurchasingGroup` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `SalesOrganization` | `SalesOrganization` |
| `SettlmtDocType` | `SettlmtDocType` |
| `SettlmtDocAuthznCat` | `SettlmtDocAuthznCat` |
| `_AlternativeInvoicingParty` | *Association* |
| `_AltvInvoicingPartyCompany` | *Association* |
| `_BillToParty` | *Association* |
| `_BillToPartyCompany` | *Association* |
| `_InvoicingParty` | *Association* |
| `_InvoicingPartyCompany` | *Association* |
| `_PayeeParty` | *Association* |
| `_PayeePartyCompany` | *Association* |
| `_PayerParty` | *Association* |
| `_PayerPartyCompany` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Settlement Document'
@VDM: {  
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtDoc',
   modelingPattern:       #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory:   #XXL
  }
}
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWLFSDOC_SVH'
}
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@Search.searchable: true
@Consumption.ranked: true

define view entity I_SettlmtDocStdVH
  as select from I_SettlmtDoc
{

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key SettlmtDoc,

      @Consumption.hidden: true
      AlternativeInvoicingParty,
      @Consumption.hidden: true
      SuplrSettlmtCompanyCode,
      @Consumption.hidden: true
      BillToParty,
      @Consumption.hidden: true
      CustSettlmtCompanyCode,
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
      SettlmtDocAuthznCat,

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
