---
name: D_PROCORDCONFGETCONFPROPOSALP
description: "D Procordconfgetconfproposalp"
semantic_vi: "View D_PROCORDCONFGETCONFPROPOSALP hiển thị dữ liệu xác nhận sản xuất, cụ thể là đề xuất cho các bản ghi xác nhận, có thể được sử dụng để lấy chi tiết xác nhận cho đơn đặt hàng sản xuất."
keywords:
  - "production confirmation"
  - "đơn đặt hàng sản xuất"
  - "xác nhận sản xuất"
  - "proposal"
  - "confirmation record"
  - "sản xuất"
  - "đơn đặt hàng"
  - "ekko"
  - "pp-es"
  - "manufacturing"
  - "lob: manufacturing"
semantic_en: "The D_PROCORDCONFGETCONFPROPOSALP view exposes production confirmation data, specifically proposals for confirmation records, which can be used to retrieve confirmation details for production orders."
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
# D_PROCORDCONFGETCONFPROPOSALP

**D Procordconfgetconfproposalp**

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
| `OrderSuboperation` |  | |  | `vdm_uvorn` |  |  |
| `OrderConfirmationRecordType` |  | |  | `co_satza` |  |  |
| `ConfirmationUnit` |  | |  | `meinh` |  |  |
| `ConfirmationUnitISOCode` |  | |  | `isocd_unit` |  |  |
| `ConfirmationUnitSAPCode` |  | |  | `meinsint` |  |  |
| `ConfirmationYieldQuantity` |  | |  | `ru_lmnga` |  |  |
| `ConfirmationScrapQuantity` |  | |  | `ru_xmnga` |  |  |
| `QuantityIsToBeProposed` |  | |  | `vssmg` |  |  |
| `ActivityIsToBeProposed` |  | |  | `vssle` |  |  |
| `DateAndTimeIsToBeProposed` |  | |  | `vsszt` |  |  |
| `PersonnelIsToBeProposed` |  | |  | `vsszu` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameter for Action Conf Proposal'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ProcOrdConfGetConfProposalP 
{
    ConfirmationGroup               : pph_rueck; 
    OrderID                         : manufacturingorder;
    OrderOperation                  : vdm_vornr;
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
    QuantityIsToBeProposed          : vssmg;
    ActivityIsToBeProposed          : vssle;
    DateAndTimeIsToBeProposed       : vsszt;
    PersonnelIsToBeProposed         : vsszu;
}
```
