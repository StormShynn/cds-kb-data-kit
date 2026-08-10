---
name: I_IAMBUSINESSUSERLOGONDETAILS
description: "Iambusinessuserlogondetails"
app_component: BC-SRV-APS-IAM
software_component: SAP_CLOUD
release_state: released
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
# I_IAMBUSINESSUSERLOGONDETAILS

**Iambusinessuserlogondetails**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-IAM` |
| Software Component | `SAP_CLOUD` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UserID` | ✓ | |  |  | `CHAR(12)` | User ID |
| `UserName` |  | |  |  | `CHAR(40)` | Internet user alias |
| `UserGroup` |  | |  |  | `CHAR(12)` | User Group |
| `UserValidFrom` |  | |  | `ValidFrom` | `DATS(8)` | User valid from |
| `UserValidTo` |  | |  | `ValidTo` | `DATS(8)` | User valid to |
| `UserIsLocked` |  | |  | `IsLocked` | `CHAR(1)` |  |
| `UserLockStatus` |  | |  | `LockStatus` | `INT1(3)` | User Lock Status |
| `UserLogonLanguage` |  | |  | `LogonLanguage` | `LANG(1)` | Logon Language |
| `UserDecimalFormat` |  | |  | `DecimalFormat` | `CHAR(1)` | Decimal Format |
| `UserDateFormat` |  | |  | `DateFormat` | `CHAR(1)` | Date format |
| `UserTimeFormat` |  | |  | `TimeFormat` | `CHAR(1)` | Time Format (12-/24-Hour Specification) |
| `UserLocalTimeZone` |  | |  | `LocalTimeZone` | `CHAR(6)` | Time Zone |
| `UserLastLogonDate` |  | |  | `LastLogonDate` | `DATS(8)` | Last Logon Date |
| `UserLastLogonTime` |  | |  | `LastLogonTime` | `TIMS(6)` | Last Logon Time |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Creator of the User Master Record |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Creation Date of User Master (System Time Stamp) |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `LastChangedDate` |  | |  |  | `DATS(8)` | Modification date |
| `LastChangedTime` |  | |  |  | `TIMS(6)` | Modification time |
| `_BusinessUser` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_TimeZone` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessUser` | `I_BusinessUserBasic` | [1..1] |
| `_Language` | `I_Language` | [1..1] |
| `_TimeZone` | `I_TimeZone` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business User Logon Details'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  }       UserID is not key of I_BusinessUser*/
define view entity I_IAMBusinessUserLogonDetails
  as select from p_aps_iam_business_user
  association [1..1] to I_BusinessUserBasic as _BusinessUser on _BusinessUser.UserID = $projection.UserID
  association [1..1] to I_Language          as _Language     on _Language.Language = $projection.UserLogonLanguage
  association [1..1] to I_TimeZone          as _TimeZone     on _TimeZone.TimeZoneID = $projection.UserLocalTimeZone
{
  key UserID,
      UserName,
      UserGroup,
      ValidFrom     as UserValidFrom,
      ValidTo       as UserValidTo,
      IsLocked      as UserIsLocked,
      LockStatus    as UserLockStatus,
      LogonLanguage as UserLogonLanguage,
      DecimalFormat as UserDecimalFormat,
      DateFormat    as UserDateFormat,
      TimeFormat    as UserTimeFormat,
      LocalTimeZone as UserLocalTimeZone,
      LastLogonDate as UserLastLogonDate,
      LastLogonTime as UserLastLogonTime,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangedDate,
      LastChangedTime,
      _BusinessUser,
      _Language,
      _TimeZone
}
```
