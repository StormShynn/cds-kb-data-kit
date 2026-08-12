---
name: I_IAMBUSINESSUSERBUSINESSROLE
description: "Iambusinessuserbusinessrole"
app_component: BC-SRV-APS-IAM
software_component: SAP_CLOUD
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-APS
  - interface-view
  - component:BC-SRV-APS-IAM
  - lob:Basis Components
---
# I_IAMBUSINESSUSERBUSINESSROLE

**Iambusinessuserbusinessrole**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-IAM` |
| Software Component | `SAP_CLOUD` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UserID` | ✓ | |  | `cast( bru.user_id as vdm_userid preserving type )` | `CHAR(12)` | User ID |
| `BusinessRoleUUID` | ✓ | |  |  | `RAW(16)` | Global Unique ID for table |
| `BusinessRole` |  | |  |  | `CHAR(40)` | IAM: Business Role ID |
| `BusinessRoleGroup` |  | |  |  | `CHAR(12)` | Role Group |
| `_BusinessUser` | | ✓ | | | | |
| `_BusinessRole` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessUser` | `I_BusinessUserBasic` | [1..1] |
| `_BusinessRole` | `I_IAMBusinessRole` | [1..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business User - Business Role assignment'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  }       UserID is not key of I_BusinessUser*/
define view entity I_IAMBusinessUserBusinessRole
  as select from aps_iam_d_bruax   as bru
    inner join   I_IAMBusinessRole as br on br.BusinessRoleUUID = bru.parent_uuid
  association [1..1] to I_BusinessUserBasic as _BusinessUser on _BusinessUser.UserID = $projection.UserID
  association [1..*] to I_IAMBusinessRole   as _BusinessRole on _BusinessRole.BusinessRoleUUID = $projection.BusinessRoleUUID
{
  key cast( bru.user_id as vdm_userid preserving type ) as UserID,
  key br.BusinessRoleUUID,
      br.BusinessRole,
      br.BusinessRoleGroup,
      _BusinessRole,
      _BusinessUser
}
```
