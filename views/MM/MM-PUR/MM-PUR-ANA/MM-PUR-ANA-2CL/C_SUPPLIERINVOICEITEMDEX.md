---
name: C_SUPPLIERINVOICEITEMDEX
description: Supplier InvoiceITEMDEX
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - supplier
  - item-level
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# C_SUPPLIERINVOICEITEMDEX

**Supplier InvoiceITEMDEX**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SupplierInvoice` | ✓ | |  |  |
| `FiscalYear` | ✓ | |  |  |
| `SupplierInvoiceItem` | ✓ | |  |  |
| `QtyInPurchaseOrderPriceUnit` |  | |  |  |
| `PurchaseOrderPriceUnit` |  | |  |  |
| `PurchaseOrderQuantityUnit` |  | |  |  |
| `PurchaseOrder` |  | |  |  |
| `PurchaseOrderItem` |  | |  |  |
| `PrmtHbReferenceDocument` |  | |  | `ReferenceDocument` |
| `PrmtHbReferenceDocumentFsclYr` |  | |  | `ReferenceDocumentFiscalYear` |
| `PrmtHbReferenceDocumentItem` |  | |  | `ReferenceDocumentItem` |
| `PurchaseOrderItemMaterial` |  | |  |  |
| `QuantityInPurchaseOrderUnit` |  | |  |  |
| `SuplrInvcItmHasQualityVariance` |  | |  |  |
| `SuplrInvcItemHasOrdPrcQtyVarc` |  | |  |  |
| `SuplrInvcItemHasQtyVariance` |  | |  |  |
| `SuplrInvcItemHasPriceVariance` |  | |  |  |
| `SuplrInvcItemHasOtherVariance` |  | |  |  |
| `SuplrInvcItemHasAmountOutsdTol` |  | |  |  |
| `SuplrInvcItemHasDateVariance` |  | |  |  |
| `IsSubsequentDebitCredit` |  | |  |  |
| `Plant` |  | |  |  |
| `DocumentCurrency` |  | |  |  |
| `SupplierInvoiceItemAmount` |  | |  |  |
| `SuplrInvcAutomReducedAmount` |  | | `_SupplierInvoiceAPI01` | `SuplrInvcAutomReducedAmount` |
| `UnplannedDeliveryCost` |  | | `_SupplierInvoiceAPI01` | `UnplannedDeliveryCost` |
| `DocumentHeaderText` |  | | `_SupplierInvoiceAPI01` | `DocumentHeaderText` |
| `DocumentDate` |  | | `_SupplierInvoiceAPI01` | `DocumentDate` |
| `PostingDate` |  | | `_SupplierInvoiceAPI01` | `PostingDate` |
| `CompanyCode` |  | | `_SupplierInvoiceAPI01` | `CompanyCode` |
| `SupplierInvoiceOrigin` |  | | `_SupplierInvoiceAPI01` | `SupplierInvoiceOrigin` |
| `InvoicingParty` |  | | `_SupplierInvoiceAPI01` | `InvoicingParty` |
| `UnplannedDeliveryCostTaxCode` |  | | `_SupplierInvoiceAPI01` | `UnplannedDeliveryCostTaxCode` |
| `ReverseDocument` |  | | `_SupplierInvoiceAPI01` | `ReverseDocument` |
| `ReverseDocumentFiscalYear` |  | | `_SupplierInvoiceAPI01` | `ReverseDocumentFiscalYear` |
| `SupplierInvoiceIDByInvcgParty` |  | | `_SupplierInvoiceAPI01` | `SupplierInvoiceIDByInvcgParty` |
| `IsInvoice` |  | | `_SupplierInvoiceAPI01` | `IsInvoice` |
| `SupplierInvoiceStatus` |  | | `_SupplierInvoiceAPI01` | `SupplierInvoiceStatus` |
| `_SupplierInvoiceDEX` | | ✓ | | |
| `_PurchaseOrder` | | ✓ | | |
| `_PurchaseOrderItem` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_DocumentCurrency` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_InvoicingParty` | | ✓ | | |
| `_SupplierInvoiceStatus` | | ✓ | | |
| `_UnitOfMeasure` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OnlineExtension` | `E_OnlineSupplierInvoiceItem` | [0..1] |
| `_SupplierInvoiceDEX` | `C_SupplierInvoiceDEX` | [1..1] |
| `_PurchaseOrder` | `C_PurchaseOrderDEX` | [1..1] |
| `_PurchaseOrderItem` | `C_PurchaseOrderItemDEX` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_DocumentCurrency` | `I_Currency` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_InvoicingParty` | `I_Supplier` | [1..1] |
| `_SupplierInvoiceStatus` | `I_SupplierInvoiceStatusAPI01` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName                : 'CMMSUPINVCITMDEX'
@AbapCatalog.compiler.compareFilter     : true
@AccessControl:{ authorizationCheck     : #CHECK,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@EndUserText.label                      : 'Data Extraction for Supplier Invoice Item'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ]
              }

@VDM.viewType                           : #CONSUMPTION
//@ObjectModel.representativeKey          : [ 'SupplierInvoice', 'FiscalYear', 'SupplierInvoiceItem' ]
@Metadata.ignorePropagatedAnnotations   : true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'rseg', role: #MAIN,
                        viewElement     : ['SupplierInvoice', 'FiscalYear', 'SupplierInvoiceItem'],
                        tableElement    : ['belnr', 'gjahr', 'buzei']
                      },
                      {
                        table           : 'rbkp', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement     : ['SupplierInvoice', 'FiscalYear'],
                        tableElement    : ['belnr', 'gjahr']
                      }
                    ]
        }
    }
}
@ObjectModel.sapObjectNodeType.name: 'SupplierInvoiceItem'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT

define view C_SupplierInvoiceItemDEX
  as select from I_SuplrInvcItemPurOrdRefAPI01

  association [0..1] to E_OnlineSupplierInvoiceItem  as _OnlineExtension       on  $projection.SupplierInvoice     = _OnlineExtension.SupplierInvoice
                                                                               and $projection.FiscalYear          = _OnlineExtension.FiscalYear
                                                                               and $projection.SupplierInvoiceItem = _OnlineExtension.SupplierInvoiceItem

  association [1..1] to C_SupplierInvoiceDEX         as _SupplierInvoiceDEX    on  $projection.SupplierInvoice = _SupplierInvoiceDEX.SupplierInvoice
                                                                               and $projection.FiscalYear      = _SupplierInvoiceDEX.FiscalYear

  association [1..1] to C_PurchaseOrderDEX           as _PurchaseOrder         on $projection.PurchaseOrder = _PurchaseOrder.PurchaseOrder

  association [1..1] to C_PurchaseOrderItemDEX       as _PurchaseOrderItem     on  $projection.PurchaseOrder     = _PurchaseOrderItem.PurchaseOrder
                                                                               and $projection.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem

  association [0..1] to I_Product                    as _Product               on $projection.PurchaseOrderItemMaterial = _Product.Product

  association [0..1] to I_Plant                      as _Plant                 on $projection.Plant = _Plant.Plant

  association [1..1] to I_Currency                   as _DocumentCurrency      on $projection.DocumentCurrency = _DocumentCurrency.Currency

  association [1..1] to I_CompanyCode                as _CompanyCode           on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_Supplier                   as _InvoicingParty        on $projection.InvoicingParty = _InvoicingParty.Supplier

  association [0..1] to I_SupplierInvoiceStatusAPI01 as _SupplierInvoiceStatus on $projection.SupplierInvoiceStatus = _SupplierInvoiceStatus.SupplierInvoiceStatus
{
  key SupplierInvoice                                     as SupplierInvoice,
  
      @Semantics.fiscal.year: true
  key FiscalYear                                          as FiscalYear,

  key SupplierInvoiceItem                                 as SupplierInvoiceItem,

      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
      QtyInPurchaseOrderPriceUnit                         as QtyInPurchaseOrderPriceUnit,

      @ObjectModel.foreignKey.association: '_PurOrdPriceUnitOfMeasure'
      PurchaseOrderPriceUnit                              as PurchaseOrderPriceUnit,
      
      PurchaseOrderQuantityUnit                           as PurchaseOrderQuantityUnit,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseOrder'
      PurchaseOrder                                       as PurchaseOrder,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseOrderItem'
      PurchaseOrderItem                                   as PurchaseOrderItem,

      ReferenceDocument                                   as PrmtHbReferenceDocument,

      @Semantics.fiscal.year: true
      ReferenceDocumentFiscalYear                         as PrmtHbReferenceDocumentFsclYr,

      ReferenceDocumentItem                               as PrmtHbReferenceDocumentItem,

      @ObjectModel.foreignKey.association: '_Product'
      PurchaseOrderItemMaterial                           as PurchaseOrderItemMaterial,

      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
      QuantityInPurchaseOrderUnit                         as QuantityInPurchaseOrderUnit,

      SuplrInvcItmHasQualityVariance                      as SuplrInvcItmHasQualityVariance,

      SuplrInvcItemHasOrdPrcQtyVarc                       as SuplrInvcItemHasOrdPrcQtyVarc,

      SuplrInvcItemHasQtyVariance                         as SuplrInvcItemHasQtyVariance,

      SuplrInvcItemHasPriceVariance                       as SuplrInvcItemHasPriceVariance,

      SuplrInvcItemHasOtherVariance                       as SuplrInvcItemHasOtherVariance,

      SuplrInvcItemHasAmountOutsdTol                      as SuplrInvcItemHasAmountOutsdTol,

      SuplrInvcItemHasDateVariance                        as SuplrInvcItemHasDateVariance,

      @Semantics.booleanIndicator: true
      IsSubsequentDebitCredit                             as IsSubsequentDebitCredit,

      @ObjectModel.foreignKey.association: '_Plant'
      Plant                                               as Plant,

      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      @Semantics.currencyCode: true
      DocumentCurrency                                    as DocumentCurrency,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      SupplierInvoiceItemAmount                           as SupplierInvoiceItemAmount,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      _SupplierInvoiceAPI01.SuplrInvcAutomReducedAmount   as SuplrInvcAutomReducedAmount,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      _SupplierInvoiceAPI01.UnplannedDeliveryCost         as UnplannedDeliveryCost,

      @Semantics.text: true
      _SupplierInvoiceAPI01.DocumentHeaderText            as DocumentHeaderText,

      @Semantics.businessDate.at: true
      _SupplierInvoiceAPI01.DocumentDate                  as DocumentDate,

      @Semantics.businessDate.at: true
      _SupplierInvoiceAPI01.PostingDate                   as PostingDate,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      _SupplierInvoiceAPI01.CompanyCode                   as CompanyCode,

      _SupplierInvoiceAPI01.SupplierInvoiceOrigin         as SupplierInvoiceOrigin,

      @ObjectModel.foreignKey.association: '_InvoicingParty'
      _SupplierInvoiceAPI01.InvoicingParty                as InvoicingParty,

      _SupplierInvoiceAPI01.UnplannedDeliveryCostTaxCode  as UnplannedDeliveryCostTaxCode,

      _SupplierInvoiceAPI01.ReverseDocument               as ReverseDocument,

      @Semantics.fiscal.year: true
      _SupplierInvoiceAPI01.ReverseDocumentFiscalYear     as ReverseDocumentFiscalYear,

      _SupplierInvoiceAPI01.SupplierInvoiceIDByInvcgParty as SupplierInvoiceIDByInvcgParty,

      @Semantics.booleanIndicator: true
      _SupplierInvoiceAPI01.IsInvoice                     as IsInvoice,

      @ObjectModel.foreignKey.association: '_SupplierInvoiceStatus'
      _SupplierInvoiceAPI01.SupplierInvoiceStatus         as SupplierInvoiceStatus,

      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT,
                                       #TO_COMPOSITION_ROOT]
      _SupplierInvoiceDEX,

      I_SuplrInvcItemPurOrdRefAPI01._PurOrdPriceUnitOfMeasure,
      _PurchaseOrder,
      _PurchaseOrderItem,
      _UnitOfMeasure,
      _Product,
      _Plant,
      _DocumentCurrency,
      _CompanyCode,
      _InvoicingParty,
      _SupplierInvoiceStatus
}
```
