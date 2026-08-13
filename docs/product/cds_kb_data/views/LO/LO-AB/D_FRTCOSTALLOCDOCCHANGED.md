---
name: D_FRTCOSTALLOCDOCCHANGED
description: "D Frtcostallocdocchanged"
semantic_vi: "View này hiển thị lịch sử thay đổi tài liệu thanh toán cho logistics tổng thể, bao gồm loại quá trình thanh toán, loại tài liệu và mã công ty. Nó được sử dụng để theo dõi các thay đổi đối với tài liệu thanh toán trong logistics tổng thể."
keywords:
  - "settlement document"
  - "thay đổi tài liệu thanh toán"
  - "logistics general"
  - "lo"
  - "lo-ab"
  - "ekko"
  - "settlement process"
  - "tài liệu thanh toán"
  - "lo-gi"
  - "thay đổi"
semantic_en: "This view exposes settlement document change history for logistics general, including settlement process type, document type, and company code. It is used to track changes to settlement documents in logistics general."
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
# D_FRTCOSTALLOCDOCCHANGED

**D Frtcostallocdocchanged**

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
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `PurchasingGroup` |  | |  | `ekgrp` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |

## Source Code

```abap
@EndUserText.label: 'Freight Cost Allocation Document Changed'
@ObjectModel.sapObjectNodeType.name: 'FreightCostAllocationDocument'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_FrtCostAllocDocChanged
{
  SettlmtProcessType     : wlf_settlmt_process_type;
  SettlmtDocType         : wlf_settlmt_doc_type;
  SettlmtDocCat          : wlf_settlmt_doc_cat;
  CompanyCode            : bukrs;
  PurchasingOrganization : ekorg;
  PurchasingGroup        : ekgrp;
  SalesOrganization      : vkorg;
  DistributionChannel    : vtweg;
  Division               : spart;
}
```
