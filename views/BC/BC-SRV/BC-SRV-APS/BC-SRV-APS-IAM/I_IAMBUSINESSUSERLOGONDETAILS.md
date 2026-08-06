---
name: I_IAMBUSINESSUSERLOGONDETAILS
description: Iambusinessuserlogondetails
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

| Field | Data Source |
|---|---|
| key `UserID` | `UserID` |
| `UserName` | `UserName` |
| `UserGroup` | `UserGroup` |
| `UserValidFrom` | `ValidFrom` |
| `UserValidTo` | `ValidTo` |
| `UserIsLocked` | `IsLocked` |
| `UserLockStatus` | `LockStatus` |
| `UserLogonLanguage` | `LogonLanguage` |
| `UserDecimalFormat` | `DecimalFormat` |
| `UserDateFormat` | `DateFormat` |
| `UserTimeFormat` | `TimeFormat` |
| `UserLocalTimeZone` | `LocalTimeZone` |
| `UserLastLogonDate` | `LastLogonDate` |
| `UserLastLogonTime` | `LastLogonTime` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangedDate` | `LastChangedDate` |
| `LastChangedTime` | `LastChangedTime` |
| `_BusinessUser` | *Association* |
| `_Language` | *Association* |
| `_TimeZone` | *Association* |

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
