---
name: ABP_BEHV_PAR_SHARE
description: "Abp Behv Par Share"
app_component: BC-ABA-LA
software_component: SAP_BASIS
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-ABA
  - BC-ABA-LA
  - component:BC-ABA-LA
  - lob:Basis Components
---
# ABP_BEHV_PAR_SHARE

**Abp Behv Par Share**

| Property | Value |
|---|---|
| App Component | `BC-ABA-LA` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ShareAll` |  | |  | `abp_behv_draft_share_all_ind` |  |  |
| `IsDeltaUpdate` |  | |  | `abp_behv_draft_delta_upd_ind` |  |  |
| `ABP_BEHV_DRAFT_USER_ACCESS` |  | |  | `Users : composition [1..*] of ABP_BEHV_DRAFT_USER_ACCESS` |  |  |

## Source Code

```abap
@EndUserText.label: 'parameter for draft action Share'
define root abstract entity ABP_BEHV_PAR_SHARE
{
  @Semantics.booleanIndicator: true
  ShareAll       : abp_behv_draft_share_all_ind;

  @Semantics.booleanIndicator: true
  IsDeltaUpdate : abp_behv_draft_delta_upd_ind;
  
  Users : composition [1..*] of ABP_BEHV_DRAFT_USER_ACCESS;
}
```
