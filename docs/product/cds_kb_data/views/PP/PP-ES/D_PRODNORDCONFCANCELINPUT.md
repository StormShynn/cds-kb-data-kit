---
name: D_PRODNORDCONFCANCELINPUT
description: "D Prodnordconfcancelinput"
semantic_vi: "Cung cấp dữ liệu đầu vào để hủy xác nhận sản xuất trong thành phần PP-ES, bao gồm ngày đăng ký, nội dung xác nhận và xác nhận hệ thống bên ngoài."
keywords:
  - "production confirmation"
  - "hủy xác nhận sản xuất"
  - "posting date"
  - "ngày đăng ký"
  - "confirmation text"
  - "nội dung xác nhận"
  - "external system confirmation"
  - "xác nhận hệ thống bên ngoài"
  - "pp-es"
  - "sản xuất"
semantic_en: "Provides input data for cancelling production confirmation in the PP-ES component, including posting date, confirmation text, and external system confirmation."
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
# D_PRODNORDCONFCANCELINPUT

**D Prodnordconfcancelinput**

| Property | Value |
|---|---|
| App Component | `PP-ES` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingDate` |  | |  | `pph_budat` |  |  |
| `ConfirmationText` |  | |  | `pph_rtext` |  |  |
| `ExternalSystemConfirmation` |  | |  | `ru_extid` |  |  |

## Source Code

```abap
//Optional Parameters are relevant for the cancel function since CE1905. 
//For further information see also RAP Behavior Definition A_ProductionOrderConf_2 
@EndUserText.label: 'Cancel action opt. param. for ProdConf'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ProdnOrdConfCancelInput 
{
  PostingDate                : pph_budat;
  ConfirmationText           : pph_rtext;
  ExternalSystemConfirmation : ru_extid;
}
```
