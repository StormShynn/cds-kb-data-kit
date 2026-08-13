---
name: I_DOCINFORECORDACCMSECIDASGT
description: "Docinforecordaccmsecidasgt"
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
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCINFORECORDACCMSECIDASGT

**Docinforecordaccmsecidasgt**

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
| `LogAccMObjectID` | ✓ | |  |  | `CHAR(90)` | Internal Key |
| `LogAccMSecureID` | ✓ | |  |  | `RAW(16)` | Secure ID |
| `LogAccMObjectType` | ✓ | |  |  | `CHAR(10)` | Object Type |
| `LogAccMObjectAssignmentType` |  | |  |  | `CHAR(1)` | Type of Object Assignment |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User ID |
| `CreationDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User ID |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `_LogAccMUsrSecureIDAssgmt` | | ✓ | | | | |
| `_LogAccMSecureIDRepository` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCSIDASSGMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE ]
@EndUserText.label: 'Doc Info Record SecureID Assingment'
define view I_DocInfoRecordAccMSecIDAsgt as select from I_LogAccMObjSecureIDAssgmt {
 
  key LogAccMObjectID,
  key LogAccMSecureID,
  key LogAccMObjectType,
  LogAccMObjectAssignmentType,
  CreatedByUser,
  CreationDateTime,
  LastChangedByUser,
  LastChangeDateTime,
  _LogAccMUsrSecureIDAssgmt,
  _LogAccMSecureIDRepository,
  _CreatedByUser,
  _LastChangedByUser
}
```
