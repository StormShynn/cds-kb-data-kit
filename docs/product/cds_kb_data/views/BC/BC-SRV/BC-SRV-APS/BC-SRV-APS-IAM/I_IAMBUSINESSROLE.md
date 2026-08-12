---
name: I_IAMBUSINESSROLE
description: "Iambusinessrole"
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
  - component:BC-SRV-APS-IAM
  - lob:Basis Components
---
# I_IAMBUSINESSROLE

**Iambusinessrole**

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
| `BusinessRoleUUID` | ✓ | |  | `uuid` | `RAW(16)` | Global Unique ID for table |
| `BusinessRole` |  | |  | `id` | `CHAR(40)` | IAM: Business Role ID |
| `BusinessRoleGroup` |  | |  | `brole_group` | `CHAR(12)` | Role Group |
| `BusinessRoleTemplate` |  | |  | `brt_id` | `CHAR(30)` | IAM: Business Role Template ID |
| `CreatedByUser` |  | |  | `creation_user_name` | `CHAR(12)` | User Name |
| `CreationDateTime` |  | |  | `creation_date_time` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  | `last_change_user_name` | `CHAR(12)` | User Name |
| `LastChangeDateTime` |  | |  | `last_change_date_time` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `_User` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_User` | `I_IAMBusinessUserBusinessRole` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory:[#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business Role'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MASTER
}
define root view entity I_IAMBusinessRole
  as select from aps_iam_d_br as br
  composition [0..*] of I_IAMBusinessRoleText         as _Text
  association [0..*] to I_IAMBusinessUserBusinessRole as _User on _User.BusinessRoleUUID = $projection.BusinessRoleUUID
{
            @ObjectModel.text.association: '_Text'
  key       br.uuid                  as BusinessRoleUUID,
            br.id                    as BusinessRole,
            br.brole_group           as BusinessRoleGroup,
            br.brt_id                as BusinessRoleTemplate,
            br.creation_user_name    as CreatedByUser,
            br.creation_date_time    as CreationDateTime,
            br.last_change_user_name as LastChangedByUser,
            br.last_change_date_time as LastChangeDateTime,
            _Text,
            _User
}
```
