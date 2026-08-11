---
name: I_CHANGEMSTRLOGACCMUSERAUTHZN
description: "This CDS view retrieves which users have the authorization to display which changer numbers through access control management (ACM). Information is determined by the content of ACTVT field through the PLM_ECN authorization obejct. This CDS view provides the prerequisites for answering the following business questions: Which change numbers can a certain user display through the authorizations provided by ACM? Which users have display rights for a certain change number through the authorizations provided by ACM?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTRLOGACCMUSERAUTHZN')/$value
semantic_en: "This CDS view retrieves which users have the authorization to display which changer numbers through access control management (ACM). Information is determined by the content of ACTVT field through the PLM_ECN authorization obejct. This CDS view provides the prerequisites for answering the following business questions: Which change numbers can a certain user display through the authorizations provided by ACM? Which users have display rights for a certain change number through the authorizations provided by ACM?"
semantic_vi: "Change Number LogAccM User Authorization — CDS view giao diện dựa trên Change Number LogAccM User Authorization."
keywords:
  - "change"
  - "number"
  - "logaccm"
  - "user"
  - "authorization"
  - "object"
  - "activity"
  - "secure"
  - "role"
  - "authzn"
  - "field"
tags:
  - PLM
  - bo:companycode
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMSTRLOGACCMUSERAUTHZN

**This CDS view retrieves which users have the authorization to display which changer numbers through access control management (ACM). Information is determined by the content of ACTVT field through the PLM_ECN authorization obejct. This CDS view provides the prerequisites for answering the following business questions: Which change numbers can a certain user display through the authorizations provided by ACM? Which users have display rights for a certain change number through the authorizations provided by ACM?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTRLOGACCMUSERAUTHZN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogAccMObjectID` | ✓ | |  |  | `CHAR(90)` | Internal Key |
| `LogAccMActivitySecureID` | ✓ | |  |  | `RAW(16)` | Secure ID |
| `LogAccMActivityRoleID` | ✓ | |  |  | `CHAR(30)` | Role ID |
| `LogAccMUserAuthznObject` | ✓ | |  |  | `CHAR(10)` | Authorization Object |
| `LogAccMUserAuthznField` | ✓ | |  |  | `CHAR(10)` | Authorization Field |
| `LogAccMUserAuthznFrom` | ✓ | |  |  | `CHAR(40)` | Authorization Value |
| `LogAccMUserEntityType` | ✓ | |  |  | `CHAR(10)` | User Entity Type |
| `LogAccMUserEntityID` | ✓ | |  |  | `CHAR(32)` | User Entity ID |
| `UserID` |  | |  |  | `CHAR(12)` | User ID |
| `LogAccMReadActivityIsEnabled` |  | |  |  | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTRLOGACCMUSERAUTHZN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMSTRLOGACCMUSERAUTHZN')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@EndUserText.label: 'Change Number LogAccM User Authorization'
define view entity I_ChangeMstrLogAccMUserAuthzn
  as select distinct from I_LogAccMObjectUserAuthzn
{
  key LogAccMObjectID,
  key LogAccMActivitySecureID,
  key LogAccMActivityRoleID,

  key LogAccMUserAuthznObject,
  key LogAccMUserAuthznField,
  key LogAccMUserAuthznFrom,

  key LogAccMUserEntityType,
  key LogAccMUserEntityID,

      UserID,
      LogAccMReadActivityIsEnabled
}
where
      LogAccMObjectType       = 'PLM_ECN'
  and LogAccMUserAuthznObject = 'PLM_ECN'
```
