---
name: D_CITRECLASSIFYPARAMETER
description: "D Citreclassifyparameter"
semantic_vi: "View D_CITRECLASSIFYPARAMETER hiển thị các tham số phân loại cho citre, được sử dụng trong các giao dịch tài chính. Nó có thể được sử dụng để lấy hoặc cập nhật các tham số này."
keywords:
  - "citre"
  - "classification parameter"
  - "tham số phân loại"
  - "financial transaction"
  - "giao dịch tài chính"
  - "fi-loc-cit"
  - "fi"
  - "fi-loc"
  - "component:fi-loc-cit"
  - "lob:finance"
semantic_en: "The D_CITRECLASSIFYPARAMETER CDS view exposes classification parameters for citre, which are used in financial transactions. It can be used to retrieve or update these parameters."
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
# D_CITRECLASSIFYPARAMETER

**D Citreclassifyparameter**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IsChanged` |  | |  | `abap.char( 1 )` |  |  |

## Source Code

```abap
@EndUserText.label: 'CIT Reclassify Action Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_CITReclassifyParameter
{
  IsChanged : abap.char( 1 );
}
```
