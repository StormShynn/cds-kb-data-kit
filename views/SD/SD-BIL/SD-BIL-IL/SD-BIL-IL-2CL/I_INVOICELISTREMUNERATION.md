---
name: I_INVOICELISTREMUNERATION
description: "Invoicelistremuneration"
app_component: SD-BIL-IL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IL
  - interface-view
  - component:SD-BIL-IL-2CL
  - lob:Sales & Distribution
---
# I_INVOICELISTREMUNERATION

**Invoicelistremuneration**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoiceList` | ✓ | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `TotalRemunerationNetAmount` |  | |  | `cast(sum(InvoiceListItem.RemunerationNetAmount) as kwert_rl preserving type)` |  |  |
| `TotalRemunerationTaxAmount` |  | |  | `cast(sum(InvoiceListItem.RemunerationTaxAmount) as mwsbp_rl preserving type)` |  |  |
| `_InvoiceList` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InvoiceList` | `I_InvoiceList` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.technicalName: 'ISDINVOICELSTRMN'

@EndUserText.label: 'Invoice List Remuneration'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'InvoiceList'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #C, sizeCategory: #L }

@VDM.viewType: #COMPOSITE

define view entity I_InvoiceListRemuneration
  as select from I_InvoiceListItem as InvoiceListItem

  association [1..1] to I_InvoiceList as _InvoiceList on $projection.InvoiceList = _InvoiceList.InvoiceList

{
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InvoiceListStdVH', element: 'InvoiceList' } } ]
  key InvoiceListItem.InvoiceList,

      InvoiceListItem.TransactionCurrency,

      @DefaultAggregation: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast(sum(InvoiceListItem.RemunerationNetAmount) as kwert_rl preserving type) as TotalRemunerationNetAmount,

      @DefaultAggregation: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast(sum(InvoiceListItem.RemunerationTaxAmount) as mwsbp_rl preserving type) as TotalRemunerationTaxAmount,

      _TransactionCurrency,

      // Needed for DCL
      @Consumption.hidden: true
      _InvoiceList
}

group by InvoiceListItem.InvoiceList,
         InvoiceListItem.TransactionCurrency
```
