---
name: I_PRODSTRUCLOGACCMUSERAUTHZN
description: Product Structure User Authorization
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMUSERAUTHZN')/$value
semantic_en: Product Structure User Authorization
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
  - metadata-only
---
# I_PRODSTRUCLOGACCMUSERAUTHZN

**Product Structure User Authorization**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCLOGACCMUSERAUTHZN')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `LogAccMObjectID` | `CHAR(90)` | Internal Key |
| `LogAccMActivitySecureID` | `RAW(16)` | Secure ID |
| `LogAccMActivityRoleID` | `CHAR(30)` | Role ID |
| `LogAccMUserAuthznObject` | `CHAR(10)` | Authorization Object |
| `LogAccMUserAuthznField` | `CHAR(10)` | Authorization Field |
| `LogAccMUserAuthznFrom` | `CHAR(40)` | Authorization Value |
| `LogAccMUserEntityType` | `CHAR(10)` | User Entity Type |
| `LogAccMUserEntityID` | `CHAR(32)` | User Entity ID |
| `UserID` | `CHAR(12)` | User ID |
| `LogAccMReadActivityIsEnabled` | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
| `LogAccMObjectType` | `CHAR(10)` | Object Type |
