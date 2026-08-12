---
name: I_CUSTSETTLMTLISTSTDVH
description: "Customer Settlement List"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTSTDVH')/$value
semantic_en: "Customer Settlement List"
semantic_vi: "Customer Settlement List — CDS view giao diện dựa trên I_CustSettlmtList."
keywords:
  - "customer"
  - "settlement"
  - "list"
  - "cust"
  - "settlmt"
  - "bill"
  - "party"
  - "company"
  - "code"
  - "payer"
  - "distribution"
  - "channel"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTSETTLMTLISTSTDVH

**Customer Settlement List**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmtList` | ✓ | |  |  | `CHAR(10)` | Settlement Document: Customer Settlement List |
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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFCSTSTLST_SVH'
@ObjectModel.representativeKey: 'CustSettlmtList'
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XXL
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Customer Settlement List'

define view entity I_CustSettlmtListStdVH
  as select from I_CustSettlmtList
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
  key CustSettlmtList,

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
