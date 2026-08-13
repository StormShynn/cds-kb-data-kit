---
name: D_PERSSETTLMTDOCRELEASED
description: "D Perssettlmtdocreleased"
semantic_vi: "Chứa thông tin về quá trình thanh toán và tài liệu cho logistics tổng thể, được sử dụng để phân tích và quản lý quá trình thanh toán."
keywords:
  - "settlement process"
  - "logistics general"
  - "lo-ab"
  - "lease"
  - "đơn thanh toán"
  - "quá trình thanh toán"
  - "lo-gi"
  - "lo-gi tổng thể"
  - "leasing"
semantic_en: "Exposes settlement process and document information for logistics general, used to analyze and manage settlement processes."
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
  - lease
  - component:LO-AB
  - lob:Logistics General
---
# D_PERSSETTLMTDOCRELEASED

**D Perssettlmtdocreleased**

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
@EndUserText.label: 'Personnel Settlement Document Released'
@ObjectModel.sapObjectNodeType.name: 'PersonnelSettlementDocument'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_PersSettlmtDocReleased
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
