---
name: D_SUPLRINVCCREATEPOITEMP
description: "D Suplrinvccreatepoitemp"
semantic_vi: "View D_SUPLRINVCCREATEPOITEMP hiển thị dữ liệu đơn hàng nhà cung cấp liên quan đến đơn đặt hàng mua hàng, được sử dụng khi tạo hoặc cập nhật mục đơn đặt hàng mua hàng."
keywords:
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
  - "supplier invoice"
  - "đơn hàng nhà cung cấp"
  - "create po item"
  - "tạo mục đơn đặt hàng mua hàng"
  - "mm-iv"
  - "sourcing & procurement"
semantic_en: "The D_SUPLRINVCCREATEPOITEMP view exposes supplier invoice item data related to purchase orders, used when creating or updating purchase order items."
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - item-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCREATEPOITEMP

**D Suplrinvccreatepoitemp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoiceItem` |  | |  | `rblgp` |  |  |
| `PurchaseOrder` |  | |  | `ebeln` |  |  |
| `PurchaseOrderItem` |  | |  | `ebelp` |  |  |
| `ReferenceDocument` |  | |  | `lfbnr` |  |  |
| `ReferenceDocumentFiscalYear` |  | |  | `lfgja` |  |  |
| `ReferenceDocumentItem` |  | |  | `lfpos` |  |  |
| `SuplrInvcIsSubsqntDebitCrdt` |  | |  | `tbtkz` |  |  |
| `TaxCode` |  | |  | `mwskz` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `DocumentCurrency` |  | |  | `waers` |  |  |
| `SupplierInvoiceItemAmount` |  | |  | `wrbtr_cs` |  |  |
| `PurchaseOrderQuantityUnit` |  | |  | `bstme` |  |  |
| `QuantityInPurchaseOrderUnit` |  | |  | `menge_d` |  |  |
| `PurchaseOrderPriceUnit` |  | |  | `bprme` |  |  |
| `QtyInPurchaseOrderPriceUnit` |  | |  | `bpmng` |  |  |
| `SuplrInvcDeliveryCostCndnType` |  | |  | `kschl` |  |  |
| `SuplrInvcDeliveryCostCndnStep` |  | |  | `stunr` |  |  |
| `SuplrInvcDeliveryCostCndnCount` |  | |  | `dzaehk` |  |  |
| `FreightSupplier` |  | |  | `lifnr` |  |  |
| `ServiceEntrySheet` |  | |  | `lblni` |  |  |
| `ServiceEntrySheetItem` |  | |  | `extrow` |  |  |
| `SupplierInvoiceItemText` |  | |  | `sgtxt` |  |  |
| `IsNotCashDiscountLiable` |  | |  | `xskrl` |  |  |
| `TaxCountry` |  | |  | `fot_tax_country` |  |  |
| `IsFinallyInvoiced` |  | |  | `erekz` |  |  |
| `D_SuplrInvcCreateAccAssgmtP` |  | |  | `_AccountAssignments : composition [0..*] of D_SuplrInvcCreateAccAssgmtP` |  |  |
| `_SupplierInvoice` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Items with Purchase Order Reference'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@AbapCatalog.extensibility.extensible: true

define abstract entity D_SuplrInvcCreatePOItemP
{
      SupplierInvoiceItem            : rblgp;
      PurchaseOrder                  : ebeln; 
      PurchaseOrderItem              : ebelp;
      ReferenceDocument              : lfbnr; 
      ReferenceDocumentFiscalYear    : lfgja; 
      ReferenceDocumentItem          : lfpos;
      SuplrInvcIsSubsqntDebitCrdt    : tbtkz;
      TaxCode                        : mwskz;
      TaxJurisdiction                : txjcd;
      @Semantics.currencyCode        : true
      DocumentCurrency               : waers; 
      @Semantics                     : { amount : {currencyCode: 'DocumentCurrency'} }
      SupplierInvoiceItemAmount      : wrbtr_cs;
      PurchaseOrderQuantityUnit      : bstme;
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      QuantityInPurchaseOrderUnit    : menge_d;
      @Semantics.unitOfMeasure       : true
      PurchaseOrderPriceUnit         : bprme;
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
      QtyInPurchaseOrderPriceUnit    : bpmng;
      SuplrInvcDeliveryCostCndnType  : kschl;
      SuplrInvcDeliveryCostCndnStep  : stunr;
      SuplrInvcDeliveryCostCndnCount : dzaehk;
      FreightSupplier                : lifnr;
      ServiceEntrySheet              : lblni; 
      ServiceEntrySheetItem          : extrow; 
      SupplierInvoiceItemText        : sgtxt;
      IsNotCashDiscountLiable        : xskrl;
      TaxCountry                     : fot_tax_country;
      IsFinallyInvoiced              : erekz;

      _AccountAssignments            : composition [0..*] of D_SuplrInvcCreateAccAssgmtP;
      _SupplierInvoice               : association to parent D_SuplrInvcCreateP;
}
```
