---
name: D_PRODNORDCONFGETCONFPROPOSALP
description: "D Prodnordconfgetconfproposalp"
semantic_vi: "View D_PRODNORDCONFGETCONFPROPOSALP hiển thị dữ liệu xác nhận sản xuất cho đề xuất, có thể được sử dụng khi phân tích hoặc báo cáo về các bản ghi xác nhận sản xuất."
keywords:
  - "production confirmation"
  - "xác nhận sản xuất"
  - "sản xuất"
  - "đề xuất"
  - "hàng hóa"
  - "thị trường"
  - "sản phẩm"
  - "phân tích"
  - "báo cáo"
  - "sap"
  - "pp-es"
  - "manufacturing"
semantic_en: "The D_PRODNORDCONFGETCONFPROPOSALP view exposes production confirmation data for proposals, which can be used when analyzing or reporting on production confirmation records."
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
# D_PRODNORDCONFGETCONFPROPOSALP

**D Prodnordconfgetconfproposalp**

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
@EndUserText.label: 'Parameter for Propose Confirmation Data'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ProdnOrdConfGetConfProposalP   // shared between ODATA API and RAP BO! 
{
    ConfirmationGroup               : pph_rueck; 
    OrderID                         : manufacturingorder;
    OrderOperation                  : vdm_vornr;
    Sequence                        : manufacturingordersequence;
    OrderSuboperation               : vdm_uvorn;
    OrderConfirmationRecordType     : co_satza;      // only relevant for time event 
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
