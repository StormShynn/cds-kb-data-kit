---
name: I_INVOICELISTREMUNERATION
description: "Invoicelistremuneration"
app_component: SD-BIL-IL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
