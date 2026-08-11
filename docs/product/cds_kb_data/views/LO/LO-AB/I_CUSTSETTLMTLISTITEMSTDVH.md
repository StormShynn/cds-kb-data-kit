---
name: I_CUSTSETTLMTLISTITEMSTDVH
description: "Customer Settlement List Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTITEMSTDVH')/$value
semantic_en: "Customer Settlement List Item"
semantic_vi: "Customer Settlement List Item — CDS view giao diện dựa trên I_CustSettlmtListItem."
keywords:
  - "customer"
  - "settlement"
  - "list"
  - "item"
  - "cust"
  - "settlmt"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTSETTLMTLISTITEMSTDVH

**Customer Settlement List Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmtList` | ✓ | |  |  | `CHAR(10)` | Settlement Document: Customer Settlement List |
| `CustSettlmtListItem` | ✓ | |  |  | `NUMC(6)` | Item in List |
| `RefSettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document Number |
| `_CustSettlmtList` | | ✓ | | | | |
| `_RefSettlmtDoc` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTITEMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTITEMSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFCSTLSTIT_SVH'
@ObjectModel.representativeKey: 'CustSettlmtListItem'
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XL
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@EndUserText.label: 'Customer Settlement List Item'

define view entity I_CustSettlmtListItemStdVH
  as select from I_CustSettlmtListItem
{
      @ObjectModel.foreignKey.association: '_CustSettlmtList'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
  key CustSettlmtList,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #MEDIUM
  key CustSettlmtListItem,

      @Consumption.hidden: true
      RefSettlmtDoc,

      @Consumption.hidden: true
      _CustSettlmtList,
      @Consumption.hidden: true
      _RefSettlmtDoc
}
```
