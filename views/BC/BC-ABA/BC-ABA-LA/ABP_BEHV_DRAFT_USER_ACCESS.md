---
name: ABP_BEHV_DRAFT_USER_ACCESS
description: Abp Behv Draft User Access
app_component: BC-ABA-LA
software_component: SAP_BASIS
release_state: released
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
# ABP_BEHV_DRAFT_USER_ACCESS

**Abp Behv Draft User Access**

| Property | Value |
|---|---|
| App Component | `BC-ABA-LA` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `UserID` |  | |  | `abp_behv_draft_user_name` |
| `UserAccessRole` |  | |  | `abp_behv_draft_user_role` |
| `ABP_BEHV_PAR_SHARE` |  | |  | `toParent : association to parent ABP_BEHV_PAR_SHARE` |

## Source Code

```abap
@EndUserText.label: 'Draft user access'
@Metadata.allowExtensions: true
define abstract entity ABP_BEHV_DRAFT_USER_ACCESS
{
  UserID         : abp_behv_draft_user_name;
  UserAccessRole : abp_behv_draft_user_role;
  toParent       : association to parent ABP_BEHV_PAR_SHARE;
}
```
