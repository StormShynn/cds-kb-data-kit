---
name: Z_VC_ATTACH.DDLS
description: "ATTACH"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/vishnuchalla49/Vishnu-RAP/blob/f8422358881fba0e0d5066f1f9bfe5d8515ef4d7/src/z_vc_attach.ddls.asddls
semantic_en: "ATTACH — CDS view based on zvc_attach."
semantic_vi: "ATTACH — CDS view dựa trên zvc_attach."
keywords:
  - "attach"
  - "travel"
  - "memo"
  - "attachment"
  - "filename"
tags:
  - AC
  - component:AC
---
# Z_VC_ATTACH.DDLS

**ATTACH**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/vishnuchalla49/Vishnu-RAP/blob/f8422358881fba0e0d5066f1f9bfe5d8515ef4d7/src/z_vc_attach.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TravelId` | ✓ | |  | `travel_id` |  |  |
| `Id` | ✓ | |  | `id` |  |  |
| `Memo` |  | |  | `memo` |  |  |
| `Attachment` |  | |  | `{ mimeType:'Filetype', fileName:'Filename', contentDispositionPreference:#INLINE } @EndUserText.label: 'Attachment' attachment` |  |  |
| `Filename` |  | |  | `filename` |  |  |
| `Filetype` |  | |  | `filetype` |  |  |
| `LocalCreatedBy` |  | |  | `local_created_by` |  |  |
| `LocalCreatedAt` |  | |  | `local_created_at` |  |  |
| `LocalLastChangedBy` |  | |  | `local_last_changed_by` |  |  |
| `LocalLastChangedAt` |  | |  | `local_last_changed_at` |  |  |
| `LastChangedAt` |  | |  | `last_changed_at` |  |  |
| `_Travel` | | ✓ | | | | |

## Source Code

*Source: [https://github.com/vishnuchalla49/Vishnu-RAP/blob/f8422358881fba0e0d5066f1f9bfe5d8515ef4d7/src/z_vc_attach.ddls.asddls](https://github.com/vishnuchalla49/Vishnu-RAP/blob/f8422358881fba0e0d5066f1f9bfe5d8515ef4d7/src/z_vc_attach.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'ATTACH'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
@Metadata.allowExtensions: true
define view entity Z_VC_ATTACH
  as select from zvc_attach
  association to parent Z_VC_TRAVEL as _Travel on $projection.TravelId = _Travel.TravelId
{
  key travel_id             as TravelId,
  key id                    as Id,
      memo                  as Memo,
      @Semantics.largeObject:
      {
        mimeType:'Filetype',
        fileName:'Filename',
        contentDispositionPreference:#INLINE
      }
      @EndUserText.label: 'Attachment'
      attachment            as Attachment,
      filename              as Filename,
      @Semantics.mimeType: true
      filetype              as Filetype,
      @Semantics.user.createdBy: true
      local_created_by      as LocalCreatedBy,
      @Semantics.systemDateTime.createdAt: true
      local_created_at      as LocalCreatedAt,
      @Semantics.user.lastChangedBy: true
      local_last_changed_by as LocalLastChangedBy,
      @Semantics.systemDateTime.lastChangedAt: true
      local_last_changed_at as LocalLastChangedAt,
      last_changed_at       as LastChangedAt,
      _Travel
}
```
