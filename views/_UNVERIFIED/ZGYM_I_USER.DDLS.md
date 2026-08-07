---
name: ZGYM_I_USER.DDLS
description: cds view for users
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/alexliviustefanescu/gym_project/blob/15db5e59ef0c4ca4cad80d40a6816953e13a3e8d/src/zgym_i_user.ddls.asddls
semantic_en: cds view for users — CDS view based on zgym_user.
semantic_vi: cds view for users — CDS view dựa trên zgym_user.
keywords:
  - for
  - users
  - role
  - name
---
# ZGYM_I_USER.DDLS

**cds view for users**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/alexliviustefanescu/gym_project/blob/15db5e59ef0c4ca4cad80d40a6816953e13a3e8d/src/zgym_i_user.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Id` | ✓ | |  | `id` |
| `Ssn` | ✓ | |  | `ssn` |
| `Role` |  | |  | `role` |
| `Name` |  | |  | `name` |
| `Dob` |  | |  | `dob` |
| `Email` |  | |  | `email` |
| `CountryCode` |  | |  | `country_code` |
| `PhoneNumber` |  | |  | `phone_number` |
| `Createdby` |  | |  | `createdby` |
| `Createdat` |  | |  | `createdat` |
| `Lastchangedby` |  | |  | `lastchangedby` |
| `Lastchangedat` |  | |  | `lastchangedat` |
| `Locallastchanged` |  | |  | `locallastchanged` |
| `_Membership` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Membership` | `ZGYM_I_MEM` | [1..*] |

## Source Code

*Source: [https://github.com/alexliviustefanescu/gym_project/blob/15db5e59ef0c4ca4cad80d40a6816953e13a3e8d/src/zgym_i_user.ddls.asddls](https://github.com/alexliviustefanescu/gym_project/blob/15db5e59ef0c4ca4cad80d40a6816953e13a3e8d/src/zgym_i_user.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'cds view for users'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #S,
  dataClass: #MIXED
}
define root view entity ZGYM_I_USER
  as select from zgym_user
  association [1..*] to ZGYM_I_MEM as _Membership
  on $projection.Id = _Membership.UserId
{
  key   id               as Id,
  key   ssn              as Ssn,
        @Consumption.valueHelpDefinition: [{ entity: {
          name: 'ZGYM_I_ROLES',
          element: 'Role'
        }}]
        role             as Role,
        name             as Name,
        dob              as Dob,
        email            as Email,
        @Consumption.valueHelpDefinition: [{ entity: {
          name: 'ZGYM_I_CNTRY_CODE',
          element: 'Ccode'
        }}]
        country_code     as CountryCode,
        phone_number     as PhoneNumber,
        createdby        as Createdby,
        createdat        as Createdat,
        lastchangedby    as Lastchangedby,
        lastchangedat    as Lastchangedat,
        locallastchanged as Locallastchanged,
        _Membership

}
```
