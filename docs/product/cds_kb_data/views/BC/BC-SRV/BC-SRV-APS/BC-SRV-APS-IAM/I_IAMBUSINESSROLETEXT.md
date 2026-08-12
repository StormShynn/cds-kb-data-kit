---
name: I_IAMBUSINESSROLETEXT
description: "Iambusinessroletext"
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
  - text-view
  - text
  - component:BC-SRV-APS-IAM
  - lob:Basis Components
---
# I_IAMBUSINESSROLETEXT

**Iambusinessroletext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-IAM` |
| Software Component | `SAP_CLOUD` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessRoleUUID` | ✓ | |  | `parent_uuid` | `RAW(16)` | Global Unique ID for table |
| `LanguageCode` | ✓ | |  | `language_code` | `LANG(1)` | Language Key |
| `BusinessRole` |  | |  |  | `CHAR(40)` | IAM: Business Role ID |
| `BusinessRoleGroup` |  | |  |  | `CHAR(12)` | Role Group |
| `Name` |  | |  | `description` | `CHAR(80)` | IAM: Business Role Description |
| `Description` |  | |  | `long_text` | `SSTR(1024)` | IAM: Business Role long text |
| `_BusinessRole` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business Role Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
define view entity I_IAMBusinessRoleText
  as select from aps_iam_d_brt     as brt
    inner join   I_IAMBusinessRole as br on br.BusinessRoleUUID = brt.parent_uuid
  association to parent I_IAMBusinessRole as _BusinessRole on $projection.BusinessRoleUUID = _BusinessRole.BusinessRoleUUID
{
  key brt.parent_uuid   as BusinessRoleUUID,
  key brt.language_code as LanguageCode, // Currently not supported
      br.BusinessRole,
      br.BusinessRoleGroup,
      brt.description   as Name,
      brt.long_text     as Description,
      _BusinessRole
}
// where brt.language_code is initial
```
