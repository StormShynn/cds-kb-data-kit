---
name: D_PERSSETTLMTDOCCREATED
description: "D Perssettlmtdoccreated"
semantic_vi: "View này hiển thị dữ liệu tạo tài liệu thanh toán cho logistics tổng thể, cung cấp thông tin về loại và loại tài liệu thanh toán. Nó có thể được sử dụng để phân tích và báo cáo về việc tạo tài liệu thanh toán trong logistics tổng thể."
keywords:
  - "settlement document"
  - "dữ liệu tạo tài liệu thanh toán"
  - "logistics general"
  - "lo"
  - "lo-ab"
  - "settlement process"
  - "tài liệu thanh toán"
  - "lo-ekko"
  - "settlement document creation"
  - "tạo tài liệu thanh toán"
semantic_en: "This view exposes settlement document creation data for logistics general, providing information on settlement process types, document types, and categories. It can be used to analyze and report on settlement document creation in logistics general."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - component:LO-AB
  - lob:Logistics General
---
# D_PERSSETTLMTDOCCREATED

**D Perssettlmtdoccreated**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtProcessType` |  | |  | `wlf_settlmt_process_type` |  |  |
| `SettlmtDocType` |  | |  | `wlf_settlmt_doc_type` |  |  |
| `SettlmtDocCat` |  | |  | `wlf_settlmt_doc_cat` |  |  |
| `SettlmtProcessCat` |  | |  | `wlf_settlmt_process_cat` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |

## Source Code

```abap
@EndUserText.label: 'Personnel Settlement Document Created'
@ObjectModel.sapObjectNodeType.name: 'PersonnelSettlementDocument'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_PersSettlmtDocCreated
{
  SettlmtProcessType  : wlf_settlmt_process_type;
  SettlmtDocType      : wlf_settlmt_doc_type;
  SettlmtDocCat       : wlf_settlmt_doc_cat;
  SettlmtProcessCat   : wlf_settlmt_process_cat;
  CompanyCode         : bukrs;
  SalesOrganization   : vkorg;
  DistributionChannel : vtweg;
  Division            : spart; 
}
```
