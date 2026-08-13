---
name: D_COSTESTCOSTCOMPONENTR
description: "D Costestcostcomponentr"
semantic_vi: "View này hiển thị dữ liệu về thành phần chi phí, bao gồm tổng và số tiền cố định trong các loại tiền tệ và khu vực kiểm soát khác nhau, có thể được sử dụng để phân tích và báo cáo về thành phần chi phí trong SAP Controlling."
keywords:
  - "cost component"
  - "thành phần chi phí"
  - "sap controlling"
  - "cost component data"
  - "dữ liệu thành phần chi phí"
  - "controlling area"
  - "khu vực kiểm soát"
  - "currency"
  - "tiền tệ"
  - "cost component analysis"
  - "phân tích thành phần chi phí"
semantic_en: "This view exposes cost component data, including total and fixed amounts in different currencies and controlling areas, which can be used to analyze and report on cost components in SAP Controlling."
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# D_COSTESTCOSTCOMPONENTR

**D Costestcostcomponentr**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostComponent` |  | |  | `ck_element` |  |  |
| `CostComponentName` |  | |  | `ck_txele` |  |  |
| `TotalAmountInCoCodeCrcy` |  | |  | `total_amt` |  |  |
| `FixedAmountInCoCodeCrcy` |  | |  | `total_amt` |  |  |
| `TotalAmountInCtrlgAreaCrcy` |  | |  | `total_amt` |  |  |
| `FixedAmountInCtrlgAreaCrcy` |  | |  | `total_amt` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Cost Components'

define root abstract entity D_CostEstCostComponentR
{
    CostComponent     : ck_element;
    CostComponentName : ck_txele;
    
    TotalAmountInCoCodeCrcy : total_amt;
    FixedAmountInCoCodeCrcy : total_amt;
    TotalAmountInCtrlgAreaCrcy : total_amt;
    FixedAmountInCtrlgAreaCrcy : total_amt;
}
```
