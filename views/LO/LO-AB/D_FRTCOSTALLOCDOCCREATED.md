---
name: D_FRTCOSTALLOCDOCCREATED
description: D Frtcostallocdoccreated
app_component: LO-AB
software_component: SAPSCORE
release_state: released
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

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SettlmtProcessType` |  | |  | `wlf_settlmt_process_type` |
| `SettlmtDocType` |  | |  | `wlf_settlmt_doc_type` |
| `SettlmtDocCat` |  | |  | `wlf_settlmt_doc_cat` |
| `CompanyCode` |  | |  | `bukrs` |
| `PurchasingOrganization` |  | |  | `ekorg` |
| `PurchasingGroup` |  | |  | `ekgrp` |
| `SalesOrganization` |  | |  | `vkorg` |
| `DistributionChannel` |  | |  | `vtweg` |
| `Division` |  | |  | `spart` |

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
