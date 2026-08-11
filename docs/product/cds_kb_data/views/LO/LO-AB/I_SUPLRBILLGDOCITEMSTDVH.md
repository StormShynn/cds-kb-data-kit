---
name: I_SUPLRBILLGDOCITEMSTDVH
description: "Supplier Billing Document Item"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCITEMSTDVH')/$value
semantic_en: "Supplier Billing Document Item"
semantic_vi: "Supplier Billing Document Item — CDS view giao diện dựa trên I_SuplrBillgDocItem."
keywords:
  - "supplier"
  - "billing"
  - "document"
  - "item"
  - "suplr"
  - "billg"
  - "customer"
  - "settlmt"
  - "recipient"
  - "prior"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRBILLGDOCITEMSTDVH

**Supplier Billing Document Item**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCITEMSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrBillgDoc` | ✓ | |  |  | `CHAR(10)` | Supplier Billing Document Number |
| `SuplrBillgDocItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `CustomerSettlmtRecipient` |  | |  |  | `CHAR(10)` | Customer Settlement Recipient |
| `PriorSupplier` |  | |  |  | `CHAR(10)` | Prior Supplier |
| `_SuplrBillgDoc` | | ✓ | | | | |
| `_CustomerSettlmtRecipient` | | ✓ | | | | |
| `_PriorSupplier` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCITEMSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCITEMSTDVH')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IWLFSLRBGDIT_SVH'
@ObjectModel.representativeKey: 'SuplrBillgDocItem'
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]

@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory: #XXL

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.internalName: #LOCAL 

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Supplier Billing Document Item'
define view entity I_SuplrBillgDocItemStdVH as select from I_SuplrBillgDocItem {
  @ObjectModel.foreignKey.association: '_SuplrBillgDoc'
  key SuplrBillgDoc,
  key SuplrBillgDocItem,

  @Consumption.hidden: true
  CustomerSettlmtRecipient,
  @Consumption.hidden: true
  PriorSupplier,

  @Consumption.hidden: true
  _SuplrBillgDoc,
  @Consumption.hidden: true
  _CustomerSettlmtRecipient,
  @Consumption.hidden: true
  _PriorSupplier
}
```
