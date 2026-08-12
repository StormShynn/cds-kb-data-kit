---
name: I_SUPLRINVCITEMPURORDREFAPI01
description: "Suplrinvcitempurordrefapi 01"
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - item-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVCITEMPURORDREFAPI01

**Suplrinvcitempurordrefapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoice` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `SupplierInvoiceItem` | ✓ | |  |  |  |  |
| `PurchaseOrder` |  | |  |  |  |  |
| `PurchaseOrderItem` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `SupplierInvoiceItemText` |  | |  |  |  |  |
| `PurchaseOrderItemMaterial` |  | |  |  |  |  |
| `PurchaseOrderQuantityUnit` |  | |  |  |  |  |
| `QuantityInPurchaseOrderUnit` |  | |  |  |  |  |
| `PurchaseOrderPriceUnit` |  | |  |  |  |  |
| `QtyInPurchaseOrderPriceUnit` |  | |  |  |  |  |
| `StockUnit` |  | |  |  |  |  |
| `SuplrInvcDeliveryCostCndnType` |  | |  |  |  |  |
| `SuplrInvcDeliveryCostCndnStep` |  | |  |  |  |  |
| `SuplrInvcDeliveryCostCndnCount` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `SupplierInvoiceItemAmount` |  | |  |  |  |  |
| `IsSubsequentDebitCredit` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `ReferenceDocument` |  | |  |  |  |  |
| `ReferenceDocumentFiscalYear` |  | |  |  |  |  |
| `ReferenceDocumentItem` |  | |  |  |  |  |
| `DebitCreditCode` |  | |  |  |  |  |
| `FreightSupplier` |  | |  |  |  |  |
| `IsNotCashDiscountLiable` |  | |  |  |  |  |
| `SuplrInvcItemHasPriceVariance` |  | |  |  |  |  |
| `SuplrInvcItemHasQtyVariance` |  | |  |  |  |  |
| `SuplrInvcItemHasDateVariance` |  | |  |  |  |  |
| `SuplrInvcItemHasOrdPrcQtyVarc` |  | |  |  |  |  |
| `SuplrInvcItemHasOtherVariance` |  | |  |  |  |  |
| `SuplrInvcItemHasAmountOutsdTol` |  | |  |  |  |  |
| `SuplrInvcItmHasQualityVariance` |  | |  |  |  |  |
| `TaxCountry` |  | |  |  |  |  |
| `SuplrInvcItmUnplndDelivCost` |  | |  |  |  |  |
| `IsFinallyInvoiced` |  | |  |  |  |  |
| `_SupplierInvoiceAPI01` | | ✓ | | | | |
| `_SuplrInvcItmAcctAssgmtAPI01` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_PurOrdPriceUnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [1..1] |
| `_SuplrInvcItmAcctAssgmtAPI01` | `I_SuplrInvcItmAcctAssgmtAPI01` | [1..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISIPORDREFAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Purchase Order Ref of Supplier Invoice'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true

define view I_SuplrInvcItemPurOrdRefAPI01
  as select from I_SupplierInvoiceItemPurOrdRef as item
    inner join   I_SupplierInvoiceAPI01 on  item.SupplierInvoice = I_SupplierInvoiceAPI01.SupplierInvoice
                                        and item.FiscalYear      = I_SupplierInvoiceAPI01.FiscalYear
  association [1..1] to I_SupplierInvoiceAPI01        as _SupplierInvoiceAPI01        on  $projection.SupplierInvoice = _SupplierInvoiceAPI01.SupplierInvoice
                                                                                      and $projection.FiscalYear      = _SupplierInvoiceAPI01.FiscalYear
  association [1..*] to I_SuplrInvcItmAcctAssgmtAPI01 as _SuplrInvcItmAcctAssgmtAPI01 on  $projection.SupplierInvoice     = _SuplrInvcItmAcctAssgmtAPI01.SupplierInvoice
                                                                                      and $projection.FiscalYear          = _SuplrInvcItmAcctAssgmtAPI01.FiscalYear
                                                                                      and $projection.SupplierInvoiceItem = _SuplrInvcItmAcctAssgmtAPI01.SupplierInvoiceItem
{
      //Key
  key item.SupplierInvoice,
  key item.FiscalYear,
  key item.SupplierInvoiceItem,

      item.PurchaseOrder,
      item.PurchaseOrderItem,
      item.Plant,
      item.SupplierInvoiceItemText,
      item.PurchaseOrderItemMaterial,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @Semantics.unitOfMeasure: true
      item.PurchaseOrderQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      item.QuantityInPurchaseOrderUnit,
      @ObjectModel.foreignKey.association: '_PurOrdPriceUnitOfMeasure'
      @Semantics.unitOfMeasure: true
      item.PurchaseOrderPriceUnit,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
      item.QtyInPurchaseOrderPriceUnit,
      @Semantics.unitOfMeasure: true
      item.StockUnit,
      item.SuplrInvcDeliveryCostCndnType,
      item.SuplrInvcDeliveryCostCndnStep,
      item.SuplrInvcDeliveryCostCndnCount,
      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      item.DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      item.SupplierInvoiceItemAmount,
      item.IsSubsequentDebitCredit,
      item.TaxCode,
      item.TaxJurisdiction,
      item.ReferenceDocument,
      item.ReferenceDocumentFiscalYear,
      item.ReferenceDocumentItem,
      item.DebitCreditCode,
      item.FreightSupplier,
      item.IsNotCashDiscountLiable,
      item.SuplrInvcItemHasPriceVariance,
      item.SuplrInvcItemHasQtyVariance,
      item.SuplrInvcItemHasDateVariance,
      item.SuplrInvcItemHasOrdPrcQtyVarc,
      item.SuplrInvcItemHasOtherVariance,
      item.SuplrInvcItemHasAmountOutsdTol,
      item.SuplrInvcItmHasQualityVariance,
      item.TaxCountry,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      item.SuplrInvcItmUnplndDelivCost,
      item.IsFinallyInvoiced,

      _SupplierInvoiceAPI01,
      _SuplrInvcItmAcctAssgmtAPI01,
      item._Currency,
      _UnitOfMeasure,
      _PurOrdPriceUnitOfMeasure
}
```
