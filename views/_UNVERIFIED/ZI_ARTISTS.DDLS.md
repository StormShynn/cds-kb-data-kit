---
name: ZI_ARTISTS.DDLS
description: Artists
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/attilaberencsi/rap_managed_transaction/blob/e3e08300f95eff1b3390405ea25e083db965e27e/src/zi_artists.ddls.asddls
semantic_en: Artists — CDS view based on zartists.
semantic_vi: Artists — CDS view dựa trên zartists.
keywords:
  - artists
  - entity
  - name
  - created
  - last
  - changed
tags:
  - IS
  - component:IS
---
# ZI_ARTISTS.DDLS

**Artists**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/attilaberencsi/rap_managed_transaction/blob/e3e08300f95eff1b3390405ea25e083db965e27e/src/zi_artists.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EntityKey` | ✓ | |  | `entity_key` |
| `Name` |  | |  | `name` |
| `CreatedBy` |  | |  | `created_by` |
| `CreatedAt` |  | |  | `created_at` |
| `LastChangedBy` |  | |  | `last_changed_by` |
| `LastChangedAt` |  | |  | `last_changed_at` |
| `LocalLastChangedAt` |  | |  | `local_last_changed_at` |

## Source Code

*Source: [https://github.com/attilaberencsi/rap_managed_transaction/blob/e3e08300f95eff1b3390405ea25e083db965e27e/src/zi_artists.ddls.asddls](https://github.com/attilaberencsi/rap_managed_transaction/blob/e3e08300f95eff1b3390405ea25e083db965e27e/src/zi_artists.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Artists'
@Metadata.ignorePropagatedAnnotations: true
define root view entity ZI_Artists
  as select from zartists

{
  key entity_key            as EntityKey,
      name                  as Name,

      @Semantics.user.createdBy: true
      created_by            as CreatedBy,

      @Semantics.systemDateTime.createdAt: true
      created_at            as CreatedAt,

      @Semantics.user.lastChangedBy: true
      last_changed_by       as LastChangedBy,

      @Semantics.systemDateTime.lastChangedAt: true
      last_changed_at       as LastChangedAt,

      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      local_last_changed_at as LocalLastChangedAt
}
```
