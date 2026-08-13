---
name: D_COSTESTGETBRKDWNBYCOMPVIEWP
description: "D Costestgetbrkdwnbycompviewp"
semantic_vi: "Cung cấp phân tích chi phí theo thành phần, cho phép phân tích và báo cáo về cấu trúc chi phí trong thành phần Kiểm soát."
keywords:
  - "cost estimation"
  - "cost planning"
  - "controlling"
  - "cost breakdown"
  - "component"
  - "cost structure"
  - "đoán chi phí"
  - "kế hoạch chi phí"
  - "kiểm soát"
  - "phân tích chi phí"
  - "thành phần"
semantic_en: "Provides a breakdown of costs by component, enabling analysis and reporting of cost structures within the Controlling component. This view is useful for developers working with cost estimation and planning."
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
# D_COSTESTGETBRKDWNBYCOMPVIEWP

**D Costestgetbrkdwnbycompviewp**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostComponentView` |  | |  | `ck_sicht` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Cost Breakdown by Cost Component View'
define root abstract entity D_CostEstGetBrkdwnByCompViewP
{
    CostComponentView : ck_sicht;
}
```
