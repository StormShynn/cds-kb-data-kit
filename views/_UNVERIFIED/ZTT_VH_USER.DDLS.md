---
name: ZTT_VH_USER.DDLS
description: "Value Help: User"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/jrodriguez-rc/abap-tasks-tracker/blob/4cf4b91e60a2d456968474ddaed3d870f4d5382f/src/ztt_vh_user.ddls.asddls
semantic_en: "Value Help: User — CDS view based on ZTT_I_USERS."
semantic_vi: "Value Help: User — CDS view dựa trên ZTT_I_USERS."
keywords:
  - "value"
  - "help:"
  - "user"
  - "name"
  - "first"
  - "last"
  - "middle"
---
# ZTT_VH_USER.DDLS

**Value Help: User**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/jrodriguez-rc/abap-tasks-tracker/blob/4cf4b91e60a2d456968474ddaed3d870f4d5382f/src/ztt_vh_user.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `userName` | ✓ | |  |  |  |  |
| `name` |  | | `_userInfo` | `name_text` |  |  |
| `firstName` |  | | `_userInfo` | `name_first` |  |  |
| `lastName` |  | | `_userInfo` | `name_last` |  |  |
| `middleName` |  | | `_userInfo` | `namemiddle` |  |  |
| `email` |  | | `_emailAddress` | `smtp_addr` |  |  |
| `telephone` |  | | `_businessAddress` | `tel_number` |  |  |

## Source Code

*Source: [https://github.com/jrodriguez-rc/abap-tasks-tracker/blob/4cf4b91e60a2d456968474ddaed3d870f4d5382f/src/ztt_vh_user.ddls.asddls](https://github.com/jrodriguez-rc/abap-tasks-tracker/blob/4cf4b91e60a2d456968474ddaed3d870f4d5382f/src/ztt_vh_user.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'ZTTVH_USERS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Value Help: User'

@Search.searchable: true

@ObjectModel: {
    representativeKey: 'userName'
}

define view ZTT_VH_USER
    as select from ZTT_I_USERS {

        @ObjectModel.text.element: ['name']
        @Semantics.contact.type: #PERSON
    key userName,
    
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #HIGH
        @Semantics.name.fullName: true
        @Semantics.text: true
        _userInfo.name_text as name,
        
        @Semantics.name.givenName: true
        _userInfo.name_first as firstName,
        
        @Semantics.name.familyName: true
        _userInfo.name_last as lastName,
        
        @Semantics.name.additionalName: true
        _userInfo.namemiddle as middleName,
        
        @Semantics.eMail.type: [#PREF,#WORK]
        _emailAddress.smtp_addr as email,

        @Semantics.telephone.type: [#PREF,#WORK]
        _businessAddress.tel_number as telephone
    
} where userType = 'A' or userType = 'L' or userType = 'C'
```
