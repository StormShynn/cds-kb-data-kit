---
name: I_DOCUMENTINFORECORDUAUTHACCM
description: "Documentinforecorduauthaccm"
app_component: CA-DMS
software_component: SAPSCORE
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
  - CA
  - CA-DMS
  - interface-view
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDUAUTHACCM

**Documentinforecorduauthaccm**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogAccMObjectID` |  | |  |  |  |  |
| `LogAccMActivitySecureID` |  | |  |  |  |  |
| `LogAccMActivityRoleID` |  | |  |  |  |  |
| `LogAccMUserAuthznObject` |  | |  |  |  |  |
| `LogAccMUserAuthznField` |  | |  |  |  |  |
| `LogAccMUserAuthznFrom` |  | |  |  |  |  |
| `LogAccMUserEntityType` |  | |  |  |  |  |
| `LogAccMUserEntityID` |  | |  |  |  |  |
| `LogAccMObjectType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `UserID` |  | |  |  |  |  |
| `LogAccMReadActivityIsEnabled` |  | |  |  |  |  |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_LogAccMActvActyGrpProfile` | | ✓ | | | | |
| `_LogAccMObjSecureIDAssgmt` | | ✓ | | | | |
| `_LogAccMUsrGroupUsrAssgmt` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCUAUTH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Document Info Record User Authorization'
define view I_DocumentInfoRecordUAuthAccM as select distinct from I_LogAccMObjectUserAuthzn
{
  LogAccMObjectID,
  LogAccMActivitySecureID,
  LogAccMActivityRoleID,

  LogAccMUserAuthznObject,
  LogAccMUserAuthznField,
  LogAccMUserAuthznFrom,

  LogAccMUserEntityType,
  LogAccMUserEntityID,
  LogAccMObjectType,
  CreatedByUser,
  CreationDateTime,
  LastChangedByUser,
  LastChangeDateTime,
  UserID,
  LogAccMReadActivityIsEnabled,
  _CreatedByUser,
  _LastChangedByUser,
  _LogAccMActvActyGrpProfile,
  _LogAccMObjSecureIDAssgmt,
  _LogAccMUsrGroupUsrAssgmt
}
```
