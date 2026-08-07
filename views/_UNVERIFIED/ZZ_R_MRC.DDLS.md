---
name: ZZ_R_MRC.DDLS
description: Root View For MRC
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/dvontress73/zmrc/blob/261a59dbe6a48b0d58d235f1284f5505aa3bc105/src/zz_r_mrc.ddls.asddls
semantic_en: Root View For MRC — CDS view based on zzmrc.
semantic_vi: Root View For MRC — CDS view dựa trên zzmrc.
keywords:
  - root
  - for
  - mrc
  - code
  - description
  - long
  - multiple
  - iterations
---
# ZZ_R_MRC.DDLS

**Root View For MRC**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/dvontress73/zmrc/blob/261a59dbe6a48b0d58d235f1284f5505aa3bc105/src/zz_r_mrc.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MRCUUID` | ✓ | |  | `mrc_uuid` |
| `MRCCode` |  | |  | `mrc_code` |
| `Description` |  | |  | `description` |
| `LongDescription` |  | |  | `long_description` |
| `MultipleIterations` |  | |  | `multiple_iterations` |
| `FFFRelated` |  | |  | `fff_related` |
| `ModeCode` |  | |  | `mode_code` |
| `IsTemporary` |  | |  | `is_temporary` |
| `CreatedBy` |  | |  | `created_by` |
| `CreatedAt` |  | |  | `created_at` |
| `LastChangedAt` |  | |  | `last_changed_at` |
| `LastChangedBy` |  | |  | `last_changed_by` |
| `LocalLastChanged` |  | |  | `local_last_changed` |
| `_mrc_build` | | ✓ | | |

## Source Code

*Source: [https://github.com/dvontress73/zmrc/blob/261a59dbe6a48b0d58d235f1284f5505aa3bc105/src/zz_r_mrc.ddls.asddls](https://github.com/dvontress73/zmrc/blob/261a59dbe6a48b0d58d235f1284f5505aa3bc105/src/zz_r_mrc.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Root View For MRC'
define root view entity ZZ_R_MRC as select from zzmrc
  composition  [0..*] of ZZ_R_MRCBUILD  as _mrc_build
  
{
key mrc_uuid as MRCUUID,
mrc_code as MRCCode,
description as Description,
long_description as LongDescription,
multiple_iterations as MultipleIterations,
fff_related as FFFRelated,
mode_code as ModeCode,
is_temporary as IsTemporary,
@Semantics.user.createdBy: true
created_by as CreatedBy,
@Semantics.systemDateTime.createdAt: true
created_at as CreatedAt,
@Semantics.systemDateTime.lastChangedAt: true
last_changed_at as LastChangedAt,
@Semantics.user.lastChangedBy: true
last_changed_by as LastChangedBy,
@Semantics.systemDateTime.localInstanceLastChangedAt: true
local_last_changed as LocalLastChanged,
_mrc_build
}
```
