---
name: D_PRODNORDCONFGETGDSMVTPRPSLP
description: "D Prodnordconfgetgdsmvtprpslp"
semantic_vi: "View D_PRODNORDCONFGETGDSMVTPRPSLP hiển thị dữ liệu xác nhận sản xuất cho các chuyển động hàng hóa, bao gồm các nhóm xác nhận sản xuất, ID đơn hàng và lượng sản phẩm thu được. Nó được sử dụng để lấy dữ liệu xác nhận sản xuất cho các đơn hàng và hoạt động cụ thể."
keywords:
  - "production confirmation"
  - "xác nhận sản xuất"
  - "goods movement"
  - "chuyển động hàng hóa"
  - "order confirmation"
  - "xác nhận đơn hàng"
  - "sap pp-es"
  - "pp-es"
  - "manufacturing"
  - "sản xuất"
semantic_en: "The D_PRODNORDCONFGETGDSMVTPRPSLP view exposes production confirmation data for goods movements, including confirmation groups, order IDs, and yield quantities. It is used to retrieve production confirmation records for specific orders and operations."
app_component: PP-ES
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-ES
  - component:PP-ES
  - lob:Manufacturing
---
# D_PRODNORDCONFGETGDSMVTPRPSLP

**D Prodnordconfgetgdsmvtprpslp**

| Property | Value |
|---|---|
| App Component | `PP-ES` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConfirmationGroup` |  | |  | `pph_rueck` |  |  |
| `OrderID` |  | |  | `manufacturingorder` |  |  |
| `OrderOperation` |  | |  | `vdm_vornr` |  |  |
| `Sequence` |  | |  | `manufacturingordersequence` |  |  |
| `OrderSuboperation` |  | |  | `vdm_uvorn` |  |  |
| `OrderConfirmationRecordType` |  | |  | `co_satza` |  |  |
| `ConfirmationUnit` |  | |  | `meinh` |  |  |
| `ConfirmationUnitISOCode` |  | |  | `isocd_unit` |  |  |
| `ConfirmationUnitSAPCode` |  | |  | `meinsint` |  |  |
| `ConfirmationYieldQuantity` |  | |  | `ru_lmnga` |  |  |
| `ConfirmationScrapQuantity` |  | |  | `ru_xmnga` |  |  |
| `ConfirmationReworkQuantity` |  | |  | `ru_rmnga` |  |  |
| `QuantityIsToBeProposed` |  | |  | `vssmg` |  |  |
| `ActivityIsToBeProposed` |  | |  | `vssle` |  |  |
| `DateAndTimeIsToBeProposed` |  | |  | `vsszt` |  |  |
| `PersonnelIsToBeProposed` |  | |  | `vsszu` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameter for Action to Propose Goodsmovement Data'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ProdnOrdConfGetGdsMvtPrpslP 
{
    ConfirmationGroup               : pph_rueck; 
    OrderID                         : manufacturingorder;
    OrderOperation                  : vdm_vornr;
    Sequence                        : manufacturingordersequence;
    OrderSuboperation               : vdm_uvorn;
    OrderConfirmationRecordType     : co_satza;
    @Semantics.unitOfMeasure: true
    ConfirmationUnit                : meinh;
    ConfirmationUnitISOCode         : isocd_unit;
    ConfirmationUnitSAPCode         : meinsint;
    @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'    
    ConfirmationYieldQuantity       : ru_lmnga;
    @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'    
    ConfirmationScrapQuantity       : ru_xmnga;
    @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'    
    ConfirmationReworkQuantity      : ru_rmnga;
    QuantityIsToBeProposed          : vssmg;
    ActivityIsToBeProposed          : vssle;
    DateAndTimeIsToBeProposed       : vsszt;
    PersonnelIsToBeProposed         : vsszu;
}
```
