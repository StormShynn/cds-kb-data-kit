---
name: D_FRTCOSTALLOCDOCCREATED
description: "D Frtcostallocdoccreated"
semantic_vi: "View D_FRTCOSTALLOCDOCCREATED hiển thị dữ liệu phân bổ tài liệu thanh toán, được sử dụng khi tạo tài liệu thanh toán trong logistics."
keywords:
  - "settlement document"
  - "phân bổ tài liệu thanh toán"
  - "logistics"
  - "lo"
  - "lo-ab"
  - "ekko"
  - "purchase order"
  - "đơn mua hàng"
  - "cost allocation"
  - "tài liệu thanh toán"
semantic_en: "The D_FRTCOSTALLOCDOCCREATED view exposes settlement document allocation data, which is used when creating settlement documents in logistics."
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
# D_FRTCOSTALLOCDOCCREATED

**D Frtcostallocdoccreated**

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
@EndUserText.label: 'Freight Cost Allocation Document Created'
@ObjectModel.sapObjectNodeType.name: 'FreightCostAllocationDocument'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_FrtCostAllocDocCreated
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
