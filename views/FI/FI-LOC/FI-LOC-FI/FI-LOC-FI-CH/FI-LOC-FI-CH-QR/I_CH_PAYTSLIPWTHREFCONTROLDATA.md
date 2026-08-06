---
name: I_CH_PAYTSLIPWTHREFCONTROLDATA
description: CH Paytslipwthrefcontroldata
app_component: FI-LOC-FI-CH-QR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - component:FI-LOC-FI-CH-QR
  - lob:Finance
---
# I_CH_PAYTSLIPWTHREFCONTROLDATA

**CH Paytslipwthrefcontroldata**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-CH-QR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PaytSlipWthRefSubscriber` | `teiln` |
| key `Customer` | `kunid` |
| key `CompanyCode` | `bukrs` |
| `IsLeadingCompanyCode` | `buflg` |
| `AcctDetnFreeDefinedAttribute` | `sakoz` |
| `AccountingDocumentNumberOffset` | `ofset` |
| `AccountingDocumentNumberLength` | `lblnr` |
| `CustomerNumberOffset` | `ofknd` |
| `CustomerNumberLength` | `lkdnr` |
| `SalesOrganization` | `vkorg` |
| `Bank` | `bankl` |
| `PaytSlipWthRefIsNotPrinted` | `notakt` |
| `PaytSlipWthRefProcedure` | `verfa` |
| `DunningNoticeIsPrinted` | `xmesr` |
| `OriginApplication` | `applk` |
| `_Customer` | *Association* |
| `_CompanyCode` | *Association* |
| `_SalesOrganization` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Switzerland Control Data for ISR'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE]

define view entity I_CH_PaytSlipWthRefControlData

  as select from t049e

  association [0..1] to I_Customer          as _Customer          on $projection.Customer = _Customer.Customer

  association [0..1] to I_CompanyCode       as _CompanyCode       on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_SalesOrganization as _SalesOrganization on $projection.SalesOrganization = _SalesOrganization.SalesOrganization

{
  key teiln  as PaytSlipWthRefSubscriber,
      @ObjectModel.foreignKey.association: '_Customer'
  key kunid  as Customer,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs  as CompanyCode,
      buflg  as IsLeadingCompanyCode,
      sakoz  as AcctDetnFreeDefinedAttribute,
      //sakov,
      //blart,
      ofset  as AccountingDocumentNumberOffset,
      lblnr  as AccountingDocumentNumberLength,
      ofknd  as CustomerNumberOffset,
      lkdnr  as CustomerNumberLength,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      vkorg  as SalesOrganization,
      bankl  as Bank,
      notakt as PaytSlipWthRefIsNotPrinted,
      verfa  as PaytSlipWthRefProcedure,
      xmesr  as DunningNoticeIsPrinted,
      applk  as OriginApplication,

      _Customer,
      _CompanyCode,
      _SalesOrganization
}
```
