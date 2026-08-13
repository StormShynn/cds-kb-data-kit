---
name: D_SUPLRQTANCRTEFRMRFQITEMP
description: "D Suplrqtancrtefrmrfqitemp"
semantic_vi: "View này hiển thị dữ liệu đơn đặt hàng của nhà cung cấp cho yêu cầu đặt hàng, bao gồm chi tiết và thông tin giá cả của từng mặt hàng. Nó được sử dụng để truy cập và thao tác dữ liệu đơn đặt hàng của nhà cung cấp trong thành phần MM-PUR-RFQ-2CL."
keywords:
  - "supplier quotation"
  - "đơn đặt hàng nhà cung cấp"
  - "request for quotation"
  - "yêu cầu đặt hàng"
  - "item data"
  - "dữ liệu mặt hàng"
  - "mm-pur-rfq-2cl"
  - "sourcing & procurement"
  - "lob:sourcing & procurement"
  - "purchase order"
  - "đơn mua hàng"
  - "ekko"
semantic_en: "This view exposes supplier quotation item data for a request for quotation, including item details and pricing information. It is used to access and manipulate supplier quotation item data in the MM-PUR-RFQ-2CL component."
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - item-level
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRQTANCRTEFRMRFQITEMP

**D Suplrqtancrtefrmrfqitemp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequestForQuotationItem` |  | |  | `vdm_requestforquotationitem` |  |  |
| `OrderQuantity` |  | |  | `etmen` |  |  |
| `NetPriceAmount` |  | |  | `netpr` |  |  |
| `DocumentCurrency` |  | |  | `waers` |  |  |
| `NetPriceQuantity` |  | |  | `vdm_price_unit` |  |  |
| `SupplierMaterialNumber` |  | |  | `idnlf` |  |  |
| `Manufacturer` |  | |  | `mfrnr` |  |  |
| `ManufacturerPartNmbr` |  | |  | `mfrpn` |  |  |
| `OrderQuantityUnit` |  | |  | `bstme` |  |  |
| `D_SuplrQtanCrteFrmRFQPrcgItmP` |  | |  | `_PricingItems : composition [0..*] of D_SuplrQtanCrteFrmRFQPrcgItmP` |  |  |
| `_DummyAssociation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Supplr Qtn Crte from RFQ Item Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_SuplrQtanCrteFrmRFQItemP
{
  
      RequestForQuotationItem : vdm_requestforquotationitem;

      @Semantics.quantity.unitOfMeasure:'OrderQuantityUnit'
      OrderQuantity           : etmen;
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount          : netpr;
      DocumentCurrency        : waers;
      @Semantics.quantity.unitOfMeasure:'OrderQuantityUnit'
      NetPriceQuantity        : vdm_price_unit;
      SupplierMaterialNumber  : idnlf;
      Manufacturer            : mfrnr;
      ManufacturerPartNmbr    : mfrpn;
      @Semantics.unitOfMeasure: true
      OrderQuantityUnit       : bstme;
      _PricingItems           : composition [0..*] of D_SuplrQtanCrteFrmRFQPrcgItmP;

//      _DummyAssociation       : association to parent D_SuplrQtanCrteFrmRFQP on $projection.DummyKey = _DummyAssociation.DummyKey;
       _DummyAssociation : association to parent D_SuplrQtanCrteFrmRFQP;
}
```
