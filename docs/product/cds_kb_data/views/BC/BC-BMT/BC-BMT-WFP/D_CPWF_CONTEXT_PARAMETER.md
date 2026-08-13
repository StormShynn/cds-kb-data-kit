---
name: D_CPWF_CONTEXT_PARAMETER
description: "D Cpwf Context Parameter"
semantic_vi: "View D_CPWF_CONTEXT_PARAMETER hiển thị các tham số ngữ cảnh cho CPWF, một thành phần của Các thành phần cơ bản (BC-BMT-WFP). Nó được sử dụng khi làm việc với chức năng CPWF."
keywords:
  - "cpwf"
  - "basis components"
  - "bc-bmt-wfp"
  - "context parameter"
  - "tham số ngữ cảnh"
  - "các thành phần cơ bản"
semantic_en: "The D_CPWF_CONTEXT_PARAMETER CDS view exposes context parameters for CPWF, a component of the Basis Components (BC-BMT-WFP). It is used when working with CPWF functionality."
app_component: BC-BMT-WFP
software_component: SAP_BASIS
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-BMT
  - BC-BMT-WFP
  - text
  - component:BC-BMT-WFP
  - lob:Basis Components
---
# D_CPWF_CONTEXT_PARAMETER

**D Cpwf Context Parameter**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `string` |  | |  | `key context : abap.string` |  |  |

## Source Code

```abap
@EndUserText.label: 'Parameterfield for workflow context'
define abstract entity D_CPWF_CONTEXT_PARAMETER
{
  key context : abap.string;
}
```
