---
name: ZTT_I_USERS.DDLS
description: Users
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/jrodriguez-rc/abap-tasks-tracker/blob/4cf4b91e60a2d456968474ddaed3d870f4d5382f/src/ztt_i_users.ddls.asddls
semantic_en: Users — CDS view based on usr02.
semantic_vi: Users — CDS view dựa trên usr02.
keywords:
  - users
  - usr21
  - user
  - type
  - cost
  - center
  - address
  - person
  - number
---
# ZTT_I_USERS.DDLS

**Users**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/jrodriguez-rc/abap-tasks-tracker/blob/4cf4b91e60a2d456968474ddaed3d870f4d5382f/src/ztt_i_users.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `client` | ✓ | |  | `mandt` |
| `userName` | ✓ | |  | `bname` |
| `userType` |  | |  | `ustyp` |
| `costCenter` |  | |  | `kostl` |
| `addressType` |  | |  | `idadtype` |
| `personNumber` |  | |  | `persnumber` |
| `addressNumber` |  | |  | `addrnumber` |
| `BPGUID` |  | |  | `bpperson` |
| `technicalUserDescription` |  | |  | `techdesc` |
| `_userInfo` | | ✓ | | |
| `_businessAddress` | | ✓ | | |
| `_uscompany` | | ✓ | | |
| `_companyAddress` | | ✓ | | |
| `_emailAddress` | | ✓ | | |
| `_bpGeneral` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_userInfo` | `adrp` | [0..1] |
| `_businessAddress` | `adcp` | [0..1] |
| `_uscompany` | `uscompany` | [0..1] |
| `_companyAddress` | `adrc` | [0..1] |
| `_emailAddress` | `adr6` | [0..1] |
| `_bpGeneral` | `but000` | [0..1] |

## Source Code

*Source: [https://github.com/jrodriguez-rc/abap-tasks-tracker/blob/4cf4b91e60a2d456968474ddaed3d870f4d5382f/src/ztt_i_users.ddls.asddls](https://github.com/jrodriguez-rc/abap-tasks-tracker/blob/4cf4b91e60a2d456968474ddaed3d870f4d5382f/src/ztt_i_users.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'ZTTIUSERS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Users'
define view ZTT_I_USERS
  as select from usr02
    inner join   usr21 on usr02.bname = usr21.bname
  association [0..1] to adrp      as _userInfo on  _userInfo.persnumber = usr21.persnumber
                                               and _userInfo.nation     = ''
                                               and _userInfo.date_from  = '00010101'
  association [0..1] to adcp      as _businessAddress on  _businessAddress.persnumber = usr21.persnumber
                                                      and _businessAddress.addrnumber = usr21.addrnumber
                                                      and _businessAddress.nation     = ''
                                                      and _businessAddress.date_from  = '00010101'
  association [0..1] to uscompany as _uscompany on  _uscompany.addrnumber = usr21.addrnumber
  association [0..1] to adrc      as _companyAddress on  _companyAddress.addrnumber = usr21.addrnumber
                                                     and _companyAddress.nation     = ''
                                                     and _companyAddress.date_from  = '00010101'
  association [0..1] to adr6      as _emailAddress on  _emailAddress.persnumber = usr21.persnumber
                                                   and _emailAddress.addrnumber = usr21.addrnumber
                                                   and _emailAddress.date_from  = '00010101'
                                                   and _emailAddress.flgdefault = 'X'
  association [0..1] to but000    as _bpGeneral on  _bpGeneral.persnumber   = usr21.persnumber
                                                and _bpGeneral.partner_guid = usr21.bpperson
{
  key usr21.mandt as client,
  key usr21.bname as userName,
      usr02.ustyp as userType,
      usr21.kostl as costCenter,
      usr21.idadtype as addressType,
      usr21.persnumber as personNumber,
      usr21.addrnumber as addressNumber,
      usr21.bpperson as BPGUID,
      usr21.techdesc as technicalUserDescription,
      _userInfo,
      _businessAddress,
      _uscompany,
      _companyAddress,
      _emailAddress,
      _bpGeneral
}
```
