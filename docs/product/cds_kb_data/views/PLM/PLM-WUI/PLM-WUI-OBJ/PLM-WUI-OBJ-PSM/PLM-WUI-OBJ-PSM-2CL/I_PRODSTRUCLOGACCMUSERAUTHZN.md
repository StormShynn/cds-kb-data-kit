---
name: I_PRODSTRUCLOGACCMUSERAUTHZN
description: "Product Structure User Authorization"
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMUSERAUTHZN')/$value
semantic_en: "Product Structure User Authorization"
semantic_vi: "Product Structure User Authorization — CDS view giao diện dựa trên Product Structure User Authorization."
keywords:
  - "product"
  - "structure"
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
  - bo:material
  - component:PLM-WUI-OBJ-PSM-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-PSM
  - PLM-WUI-OBJ-PSM-2CL
  - product
---
# I_PRODSTRUCLOGACCMUSERAUTHZN

**Product Structure User Authorization**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMUSERAUTHZN')/$value) |

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
| `LogAccMObjectType` |  | |  |  | `CHAR(10)` | Object Type |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMUSERAUTHZN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMUSERAUTHZN')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSLOGAUTH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@EndUserText.label: 'Product Structure User Authorization'
define view I_ProdStrucLogAccMUserAuthzn
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
      LogAccMReadActivityIsEnabled,
      LogAccMObjectType
}
where
       (
       LogAccMUserAuthznObject = 'PLM_PPEPF'
    or LogAccMUserAuthznObject = 'PLM_PPEPVW'
    or LogAccMUserAuthznObject = 'PLM_PPEPI'
    or LogAccMUserAuthznObject = 'PLM_PPEPV'
    or LogAccMUserAuthznObject = 'PLM_PPEPIV'
  )
```
