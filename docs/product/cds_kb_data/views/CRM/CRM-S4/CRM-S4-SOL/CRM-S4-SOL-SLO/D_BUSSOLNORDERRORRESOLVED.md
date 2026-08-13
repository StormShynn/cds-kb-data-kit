---
name: D_BUSSOLNORDERRORRESOLVED
description: "D Bussolnorderrorresolved"
semantic_vi: "View D_BUSSOLNORDERRORRESOLVED trong cơ sở dữ liệu CDS hiển thị các lỗi giải pháp kinh doanh đã được giải quyết trong hệ thống CRM, cung cấp thông tin về mô tả lỗi và giải pháp. Nó được sử dụng để phân tích và giải quyết các lỗi giải pháp kinh doanh."
keywords:
  - "crm"
  - "business solution error"
  - "lỗi giải pháp kinh doanh"
  - "resolved error"
  - "error resolution"
  - "s4-sol-slo"
  - "sap crm"
  - "đơn vị kinh doanh"
  - "giải pháp kinh doanh"
semantic_en: "The D_BUSSOLNORDERRORRESOLVED CDS view exposes resolved business solution errors in the CRM system, providing information on error descriptions and resolutions. It is used to analyze and resolve business solution errors."
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# D_BUSSOLNORDERRORRESOLVED

**D Bussolnorderrorresolved**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusSolnOrdDescription` |  | |  | `crmt_process_description` |  |  |

## Source Code

```abap
@EndUserText.label: 'Business Solution Order Error Resolved'
@Event: {
   implementedBy: ['ABAP:RAP_EVENT']
}
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrder'
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE] 
define abstract entity D_BusSolnOrdErrorResolved
{
  BusSolnOrdDescription : crmt_process_description;
}
```
