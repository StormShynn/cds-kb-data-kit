---
name: D_COSTESTGETBRKDWNBYCOMPVIEWR
description: "D Costestgetbrkdwnbycompviewr"
semantic_vi: "View D_COSTESTGETBRKDWNBYCOMPVIEWR cung cấp ước tính chi phí được phân chia theo công ty và khu vực kiểm soát tài chính, hữu ích cho kế hoạch tài chính và phân tích."
keywords:
  - "cost estimate"
  - "ước tính chi phí"
  - "company"
  - "công ty"
  - "controlling area"
  - "khu vực kiểm soát tài chính"
  - "financial planning"
  - "kế hoạch tài chính"
  - "analysis"
  - "phân tích"
  - "sap controlling"
  - "sap controlling area"
semantic_en: "The D_COSTESTGETBRKDWNBYCOMPVIEWR view provides cost estimates broken down by company and controlling area, useful for financial planning and analysis."
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
# D_COSTESTGETBRKDWNBYCOMPVIEWR

**D Costestgetbrkdwnbycompviewr**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCodeCurrency` |  | |  | `waers` |  |  |
| `ControllingAreaCurrency` |  | |  | `waers` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Cost Breakdown of Cost Estimate'
define root abstract entity D_CostEstGetBrkdwnByCompViewR
{
    CompanyCodeCurrency : waers;
    ControllingAreaCurrency : waers;
    _CostComponents : association [0..*] to D_CostEstCostComponentR on 1=1;
}
```
