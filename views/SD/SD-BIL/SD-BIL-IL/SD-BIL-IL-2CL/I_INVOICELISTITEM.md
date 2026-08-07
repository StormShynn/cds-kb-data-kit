---
name: I_INVOICELISTITEM
description: Invoicelistitem
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
  - item-level
  - component:SD-BIL-IL-2CL
  - lob:Sales & Distribution
---
# I_INVOICELISTITEM

**Invoicelistitem**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InvoiceList` | ✓ | |  | `vbeln` |
| `InvoiceListItem` | ✓ | |  | `posnr` |
| `BillingDocument` |  | |  | `vbeln_vf` |
| `NetAmount` |  | |  | `netwr` |
| `TaxAmount` |  | |  | `mwsbp` |
| `GrossAmount` |  | |  | `cast(netwr + mwsbp + kwert_rl + mwsbp_rl as brtwert_rl)` |
| `RemunerationNetAmount` |  | |  | `kwert_rl` |
| `RemunerationTaxAmount` |  | |  | `mwsbp_rl` |
| `TransactionCurrency` |  | | `_BillingDocument` | `TransactionCurrency` |
| `PricingIsIncomplete` |  | |  | `uvprs` |
| `SoldToParty` |  | |  | `kunag` |
| `LogicalSystem` |  | |  | `logsys` |
| `_InvoiceList` | | ✓ | | |
| `_BillingDocument` | | ✓ | | |
| `_TransactionCurrency` | | ✓ | | |
| `_SoldToParty` | | ✓ | | |
| `_LogicalSystem` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InvoiceList` | `I_InvoiceList` | [1..1] |
| `_BillingDocument` | `I_BillingDocument` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_LogicalSystem` | `I_LogicalSystem` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.dataCategory: #DIMENSION

@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.mapping: [ { table: 'vbrl',
                                                                  role: #MAIN,
                                                                  viewElement: [ 'InvoiceList', 'InvoiceListItem' ],
                                                                  tableElement: [ 'vbeln', 'posnr' ] } ] }

@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'ISDINVOICELISTIT'

@EndUserText.label: 'Invoice List Item'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'InvoiceListItem'
@ObjectModel.sapObjectNodeType.name: 'InvoiceListItem'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]

@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #L }

@VDM.viewType: #BASIC

define view entity I_InvoiceListItem
  as select from vbrl

  /* start suppress warning calculated_field_check */
  association [1..1] to I_InvoiceList     as _InvoiceList         on $projection.InvoiceList = _InvoiceList.InvoiceList
  /* end suppress warning calculated_field_check */

  association [0..1] to I_BillingDocument as _BillingDocument     on $projection.BillingDocument = _BillingDocument.BillingDocument

  association [0..1] to I_Currency        as _TransactionCurrency on $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_Customer        as _SoldToParty         on $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_LogicalSystem   as _LogicalSystem       on $projection.LogicalSystem = _LogicalSystem.LogicalSystem

{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InvoiceListStdVH', element: 'InvoiceList' } } ]
      @ObjectModel.foreignKey.association: '_InvoiceList'
  key vbeln                                                   as InvoiceList,

  key posnr                                                   as InvoiceListItem,

      // Billing
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillingDocumentStdVH', element: 'BillingDocument' } } ]
      @ObjectModel.foreignKey.association: '_BillingDocument'
      vbeln_vf                                                as BillingDocument,

      // Pricing
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      netwr                                                   as NetAmount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      mwsbp                                                   as TaxAmount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast(netwr + mwsbp + kwert_rl + mwsbp_rl as brtwert_rl) as GrossAmount,


      @Semantics.amount.currencyCode: 'TransactionCurrency'
      kwert_rl                                                as RemunerationNetAmount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      mwsbp_rl                                                as RemunerationTaxAmount,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      _BillingDocument.TransactionCurrency                    as TransactionCurrency,

      uvprs                                                   as PricingIsIncomplete,

      // Sales
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_SoldToParty'
      kunag                                                   as SoldToParty,

      // Admin
      @ObjectModel.foreignKey.association: '_LogicalSystem'
      logsys                                                  as LogicalSystem,

      // Association
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _InvoiceList,

      _BillingDocument,
      _TransactionCurrency,
      _SoldToParty,
      _LogicalSystem
}
```
