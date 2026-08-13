---
name: D_COSTINGVARIANTEXPLAINWITHAIR
description: "D Costingvariantexplainwithair"
semantic_vi: "Chỉ ra các giải thích về biến thể chi phí với kết quả AI, bao gồm văn bản và ngày tạo. View này được sử dụng để phân tích và hiểu các giải thích về biến thể chi phí."
keywords:
  - "costing variant"
  - "explain"
  - "ai result"
  - "creation date"
  - "controlling"
  - "co-pc"
  - "co-pc-pcp"
  - "component:co-pc-pcp-2cl"
  - "lob:controlling"
  - "costing"
  - "variant"
  - "đơn vị tính toán"
semantic_en: "Exposes costing variant explanations with AI results, including text and creation date. This view is used to analyze and understand costing variant explanations."
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
# D_COSTINGVARIANTEXPLAINWITHAIR

**D Costingvariantexplainwithair**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExplainWithAIResultText` |  | |  | `aifnd_xc_explanation` |  |  |
| `CreationDateTime` |  | |  | `tzntstmps` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Returning entity of AI Explain Request'
define root abstract entity D_CostingVariantExplainWithAIR
{
  ExplainWithAIResultText : aifnd_xc_explanation;
  CreationDateTime    : tzntstmps;
}
```
