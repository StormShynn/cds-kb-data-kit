---
name: I_CUSTSETTLMTITEMSTDVH
description: "Customer Settlement Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEMSTDVH')/$value
semantic_en: "Customer Settlement Item"
semantic_vi: "Customer Settlement Item — CDS view tổng hợp dựa trên I_CustSettlmtItem."
keywords:
  - "customer"
  - "settlement"
  - "item"
  - "cust"
  - "settlmt"
  - "recipient"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTSETTLMTITEMSTDVH

**Customer Settlement Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmt` | ✓ | |  |  | `CHAR(10)` | Customer Settlement |
| `CustSettlmtItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `CustomerSettlmtRecipient` |  | |  |  | `CHAR(10)` | Customer Settlement Recipient |
| `_CustSettlmt` | | ✓ | | | | |
| `_CustomerSettlmtRecipient` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEMSTDVH')/$value)*

```abap
@VDM: {
  viewType: #COMPOSITE  ,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFCSTSMTIT_SVH'
@ObjectModel.representativeKey: 'CustSettlmtItem'
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

@EndUserText.label: 'Customer Settlement Item'
define view entity I_CustSettlmtItemStdVH
  as select from I_CustSettlmtItem
{
      @ObjectModel.foreignKey.association: '_CustSettlmt'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
  key CustSettlmt,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #MEDIUM
  key CustSettlmtItem,

      @Consumption.hidden: true
      CustomerSettlmtRecipient,

      @Consumption.hidden: true
      _CustSettlmt,
      @Consumption.hidden: true
      _CustomerSettlmtRecipient
}
```
