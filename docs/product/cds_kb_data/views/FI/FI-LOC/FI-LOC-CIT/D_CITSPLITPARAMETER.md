---
name: D_CITSPLITPARAMETER
description: "D Citsplitparameter"
semantic_vi: "View D_CITSPLITPARAMETER hiển thị dữ liệu tham số chia cho thuế thành phố, có liên quan khi xử lý giao dịch thuế thành phố. Nó cung cấp các trường khóa chính như mã phân loại, số lượng hàng và tiền tệ."
keywords:
  - "city tax"
  - "thuế thành phố"
  - "split parameter"
  - "tham số chia"
  - "sap fi-loc-cit"
  - "finance"
  - "tài chính"
  - "citi classification code"
  - "mã phân loại thành phố"
semantic_en: "The D_CITSPLITPARAMETER view exposes split parameter data for city tax, which is relevant when processing city tax transactions. It provides key fields such as classification code, item amount, and currency."
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CIT
  - component:FI-LOC-CIT
  - lob:Finance
---
# D_CITSPLITPARAMETER

**D Citsplitparameter**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITClassificationCode` |  | |  | `ficite_clsfcode` |  |  |
| `CITItemAmountInDisplayCurrency` |  | |  | `ficite_amnt` |  |  |
| `Currency` |  | |  | `ficite_curr` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'CIT Split Action Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_CITSplitParameter
{
  CITClassificationCode          : ficite_clsfcode;
  CITItemAmountInDisplayCurrency : ficite_amnt;

  @Semantics.currencyCode        : true
  Currency                       : ficite_curr;
}
```
