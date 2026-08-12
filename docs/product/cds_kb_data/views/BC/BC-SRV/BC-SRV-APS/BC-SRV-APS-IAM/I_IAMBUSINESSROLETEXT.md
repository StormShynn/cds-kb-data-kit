---
name: I_IAMBUSINESSROLETEXT
description: "Iambusinessroletext"
app_component: BC-SRV-APS-IAM
software_component: SAP_CLOUD
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
