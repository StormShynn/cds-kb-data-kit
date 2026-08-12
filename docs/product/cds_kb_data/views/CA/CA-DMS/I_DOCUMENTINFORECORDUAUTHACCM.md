---
name: I_DOCUMENTINFORECORDUAUTHACCM
description: "Documentinforecorduauthaccm"
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
