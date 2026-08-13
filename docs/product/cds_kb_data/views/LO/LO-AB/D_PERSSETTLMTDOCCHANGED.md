---
name: D_PERSSETTLMTDOCCHANGED
description: "D Perssettlmtdocchanged"
semantic_vi: "View này hiển thị dữ liệu thay đổi tài liệu thanh toán, có thể hữu ích khi phân tích hoặc báo cáo về thay đổi quy trình thanh toán trong logistics."
keywords:
  - "settlement document"
  - "thay đổi tài liệu thanh toán"
  - "logistics"
  - "settlement process"
  - "lo"
  - "lo-ab"
  - "lob:logistics general"
  - "sap logistics"
  - "thay đổi quy trình thanh toán"
semantic_en: "This view exposes settlement document change data, which is useful when analyzing or reporting on settlement process changes in logistics."
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
# D_PERSSETTLMTDOCCHANGED

**D Perssettlmtdocchanged**

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
@EndUserText.label: 'Personnel Settlement Document Changed'
@ObjectModel.sapObjectNodeType.name: 'PersonnelSettlementDocument'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions
define abstract entity D_PersSettlmtDocChanged
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
