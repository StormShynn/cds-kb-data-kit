---
name: I_DOCINFORECORDACCMSECIDASGT
description: Docinforecordaccmsecidasgt
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LogAccMObjectID` | ✓ | |  |  |
| `LogAccMSecureID` | ✓ | |  |  |
| `LogAccMObjectType` | ✓ | |  |  |
| `LogAccMObjectAssignmentType` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_LogAccMUsrSecureIDAssgmt` | | ✓ | | |
| `_LogAccMSecureIDRepository` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_LastChangedByUser` | | ✓ | | |

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
