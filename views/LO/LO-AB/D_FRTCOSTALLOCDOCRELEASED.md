---
name: D_FRTCOSTALLOCDOCRELEASED
description: D Frtcostallocdocreleased
app_component: LO-AB
software_component: SAPSCORE
release_state: released
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
# D_FRTCOSTALLOCDOCRELEASED

**D Frtcostallocdocreleased**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SettlmtProcessType` | `wlf_settlmt_process_type` |
| `SettlmtDocType` | `wlf_settlmt_doc_type` |
| `SettlmtDocCat` | `wlf_settlmt_doc_cat` |
| `CompanyCode` | `bukrs` |
| `PurchasingOrganization` | `ekorg` |
| `PurchasingGroup` | `ekgrp` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `Division` | `spart` |

## Source Code

```abap
@EndUserText.label: 'Frt Cost Allocation Document Released'
@ObjectModel.sapObjectNodeType.name: 'FreightCostAllocationDocument'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_FrtCostAllocDocReleased
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
