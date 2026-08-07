---
name: I_INVOICELISTENHANCEDFIELDS
description: Invoicelistenhancedfields
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
# I_INVOICELISTENHANCEDFIELDS

**Invoicelistenhancedfields**

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
| `TotalGrossAmount` |  | |  | `cast(InvoiceList.TotalTaxAmount + InvoiceList.TotalNetAmount + _Remuneration.TotalRemunerationNetAmount + _Remuneration.TotalRemunerationTaxAmount as sum_rl)` |  |  |
| `_InvoiceList` | | ✓ | | | | |
| `_Remuneration` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InvoiceList` | `I_InvoiceList` | [1..1] |
| `_Remuneration` | `I_InvoiceListRemuneration` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.technicalName: 'ISDINVLSTENHFLD'

@EndUserText.label: 'Invoice List Enhanced Fields'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'InvoiceList'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #C, sizeCategory: #L }

@VDM.viewType: #COMPOSITE

define view entity I_InvoiceListEnhancedFields
  as select from I_InvoiceList as InvoiceList

  association [1..1] to I_InvoiceList             as _InvoiceList  on $projection.InvoiceList = _InvoiceList.InvoiceList
  association [0..1] to I_InvoiceListRemuneration as _Remuneration on $projection.InvoiceList = _Remuneration.InvoiceList

{
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InvoiceListStdVH', element: 'InvoiceList' } } ]
  key InvoiceList.InvoiceList,

      InvoiceList.TransactionCurrency                           as TransactionCurrency,

      @DefaultAggregation: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast(InvoiceList.TotalTaxAmount +
           InvoiceList.TotalNetAmount +
           _Remuneration.TotalRemunerationNetAmount +
           _Remuneration.TotalRemunerationTaxAmount  as sum_rl) as TotalGrossAmount,

      _Remuneration,
      _TransactionCurrency,

      // Needed for DCL
      @Consumption.hidden: true
      _InvoiceList
}
```
