---
name: Z_KS_ATTACH.DDLS
description: "Attachment CDS"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/sivaprasad88860/RAPABAPGIT/blob/e4caf7479a742b39013e5907c5016a2154302df5/src/z_ks_attach.ddls.asddls
semantic_en: "Attachment CDS — CDS view based on zks_attachment."
semantic_vi: "Attachment CDS — CDS view dựa trên zks_attachment."
keywords:
  - "attachment"
  - "travel"
  - "commt"
  - "attach"
  - "filename"
tags:
  - AC
  - component:AC
---
# Z_KS_ATTACH.DDLS

**Attachment CDS**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/sivaprasad88860/RAPABAPGIT/blob/e4caf7479a742b39013e5907c5016a2154302df5/src/z_ks_attach.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TravelId` | ✓ | |  | `travel_id` |  |  |
| `Id` | ✓ | |  | `id` |  |  |
| `Commt` |  | |  | `commt` |  |  |
| `Attach` |  | |  | `attach` |  |  |
| `Filename` |  | |  | `filename` |  |  |
| `Filetype` |  | |  | `filetype` |  |  |
| `CreatedBy` |  | |  | `created_by` |  |  |
| `CreatedAt` |  | |  | `created_at` |  |  |
| `LastChangedBy` |  | |  | `last_changed_by` |  |  |
| `LastChangedAt` |  | |  | `last_changed_at` |  |  |
| `_Travel` | | ✓ | | | | |

## Source Code

*Source: [https://github.com/sivaprasad88860/RAPABAPGIT/blob/e4caf7479a742b39013e5907c5016a2154302df5/src/z_ks_attach.ddls.asddls](https://github.com/sivaprasad88860/RAPABAPGIT/blob/e4caf7479a742b39013e5907c5016a2154302df5/src/z_ks_attach.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Attachment CDS'
@Metadata.ignorePropagatedAnnotations: true
define view entity z_ks_attach as select from zks_attachment
association to parent z_ks_travel as _Travel on 
                   $projection.TravelId = _Travel.TravelId
{
      key travel_id as TravelId,
    key id as Id,
    @EndUserText.label: 'Comments'
    commt as Commt,
    @Semantics.largeObject : {
     mimeType: 'Filetype',
     fileName: 'Filename',
     contentDispositionPreference: #INLINE
    }
    @EndUserText.label: 'Attachment'
    attach as Attach,
    @EndUserText.label: 'File Name'
    filename as Filename,
    @Semantics.mimeType: true
    @EndUserText.label: 'File Type'
    filetype as Filetype,
     @Semantics.user.createdBy: true
    created_by as CreatedBy,
     @Semantics.systemDateTime.createdAt: true
    created_at as CreatedAt,
    @Semantics.user.lastChangedBy: true
    last_changed_by as LastChangedBy,
    @Semantics.systemDateTime.lastChangedAt: true
    last_changed_at as LastChangedAt,
    _Travel
}
```
