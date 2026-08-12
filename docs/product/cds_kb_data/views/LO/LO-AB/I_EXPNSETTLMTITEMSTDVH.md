---
name: I_EXPNSETTLMTITEMSTDVH
description: "Expense Settlement Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMSTDVH')/$value
semantic_en: "Expense Settlement Item"
semantic_vi: "Expense Settlement Item — CDS view giao diện dựa trên I_ExpnSettlmtItem."
keywords:
  - "expense"
  - "settlement"
  - "item"
  - "expn"
  - "settlmt"
  - "customer"
  - "recipient"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_EXPNSETTLMTITEMSTDVH

**Expense Settlement Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExpnSettlmt` | ✓ | |  |  | `CHAR(10)` | Document Number of Expense Settlement |
| `ExpnSettlmtItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `CustomerSettlmtRecipient` |  | |  |  | `CHAR(10)` | Customer Settlement Recipient |
| `_ExpnSettlmt` | | ✓ | | | | |
| `_CustomerSettlmtRecipient` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFEXPSMTIT_SVH'
@ObjectModel.representativeKey: 'ExpnSettlmtItem'
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XXL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.internalName: #LOCAL

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Expense Settlement Item'
define view entity I_ExpnSettlmtItemStdVH
  as select from I_ExpnSettlmtItem
{
      @ObjectModel.foreignKey.association: '_ExpnSettlmt'
  key ExpnSettlmt,
  key ExpnSettlmtItem,

      @Consumption.hidden: true
      CustomerSettlmtRecipient,

      @Consumption.hidden: true
      _ExpnSettlmt,
      @Consumption.hidden: true
      _CustomerSettlmtRecipient
}
```
