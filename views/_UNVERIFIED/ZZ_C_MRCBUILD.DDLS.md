---
name: ZZ_C_MRCBUILD.DDLS
description: Projection View for MRC Build
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/dvontress73/zmrc/blob/261a59dbe6a48b0d58d235f1284f5505aa3bc105/src/zz_c_mrcbuild.ddls.asddls
semantic_en: Projection View for MRC Build — CDS view.
semantic_vi: Projection View for MRC Build — CDS view dựa trên Projection View for MRC Build.
keywords:
  - projection
  - for
  - mrc
  - build
  - sequence
  - code
  - reply
  - table
tags:
  - bo:project
  - project
---
# ZZ_C_MRCBUILD.DDLS

**Projection View for MRC Build**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/dvontress73/zmrc/blob/261a59dbe6a48b0d58d235f1284f5505aa3bc105/src/zz_c_mrcbuild.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRCBuildUUID` | ✓ | |  |  |  |  |
| `Sequence` |  | |  |  |  |  |
| `MRCUUID` |  | |  |  |  |  |
| `MRCCode` |  | |  |  |  |  |
| `ReplyTableUUID` |  | |  |  |  |  |
| `ReplyTable` |  | | `_Reply_Table` | `ReplyTable` |  |  |
| `Description` |  | | `_Reply_Table` | `Description` |  |  |
| `ReplyCodeSize` |  | | `_Reply_Table` | `ReplyCodeSize` |  |  |
| `IsTemporary` |  | |  |  |  |  |
| `CreatedBy` |  | |  |  |  |  |
| `CreatedAt` |  | |  |  |  |  |
| `LastChangedAt` |  | |  |  |  |  |
| `LastChangedBy` |  | |  |  |  |  |
| `LocalLastChanged` |  | |  |  |  |  |
| `_mrc` | | ✓ | | | | |
| `_Reply_Table` | | ✓ | | | | |
| `_Reply_Code` | | ✓ | | | | |

## Source Code

*Source: [https://github.com/dvontress73/zmrc/blob/261a59dbe6a48b0d58d235f1284f5505aa3bc105/src/zz_c_mrcbuild.ddls.asddls](https://github.com/dvontress73/zmrc/blob/261a59dbe6a48b0d58d235f1284f5505aa3bc105/src/zz_c_mrcbuild.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.allowExtensions: true
@EndUserText.label: 'Projection View for MRC Build'
//@Search.searchable: true
define view entity ZZ_C_MRCBUILD
  as projection on ZZ_R_MRCBUILD
{
  key MRCBuildUUID,
      Sequence,
      MRCUUID,
      MRCCode,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZZ_I_REPLYTABLE', element: 'ReplyTableUUID'} }]
      @ObjectModel.text.element: ['ReplyTable']
      ReplyTableUUID,
      @Search.defaultSearchElement: true
      _Reply_Table.ReplyTable as ReplyTable,
      _Reply_Table.Description,
      _Reply_Table.ReplyCodeSize,


      IsTemporary,
      CreatedBy,
      CreatedAt,
      LastChangedAt,
      LastChangedBy,
      LocalLastChanged,
      /* Associations */
      _mrc : redirected to parent ZZ_C_MRC,
      _Reply_Table,
      _Reply_Code


}
```
