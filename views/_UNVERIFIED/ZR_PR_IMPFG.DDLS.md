---
name: ZR_PR_IMPFG.DDLS
description: ###GENERATED Core Data Service Entity
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/rammelbalagtas/zpr_auth_csd/blob/6eb0f1ee7df75900112fac82ad8923c08f754851/src/zr_pr_impfg.ddls.asddls
semantic_en: ###GENERATED Core Data Service Entity — CDS view based on ZPR_IMPFG.
semantic_vi: ###GENERATED Core Data Service Entity — CDS view dựa trên ZPR_IMPFG.
keywords:
  - ###generated
  - core
  - data
  - service
  - entity
  - configmat
  - material
  - localcreatedby
  - localcreatedat
  - locallastchangedby
tags:
  - CO
  - component:CO
  - lob:controlling
---
# ZR_PR_IMPFG.DDLS

**###GENERATED Core Data Service Entity**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/rammelbalagtas/zpr_auth_csd/blob/6eb0f1ee7df75900112fac82ad8923c08f754851/src/zr_pr_impfg.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Configmat` | ✓ | |  | `configmat` |  |  |
| `Material` | ✓ | |  | `material` |  |  |
| `Localcreatedby` |  | |  | `localcreatedby` |  |  |
| `Localcreatedat` |  | |  | `localcreatedat` |  |  |
| `Locallastchangedby` |  | |  | `locallastchangedby` |  |  |
| `Locallastchangedat` |  | |  | `locallastchangedat` |  |  |
| `Lastchangedat` |  | |  | `lastchangedat` |  |  |

## Source Code

*Source: [https://github.com/rammelbalagtas/zpr_auth_csd/blob/6eb0f1ee7df75900112fac82ad8923c08f754851/src/zr_pr_impfg.ddls.asddls](https://github.com/rammelbalagtas/zpr_auth_csd/blob/6eb0f1ee7df75900112fac82ad8923c08f754851/src/zr_pr_impfg.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions: true
@EndUserText.label: '###GENERATED Core Data Service Entity'
define root view entity ZR_PR_IMPFG
  as select from ZPR_IMPFG
{
  key configmat as Configmat,
  key material as Material,
  @Semantics.user.createdBy: true
  localcreatedby as Localcreatedby,
  @Semantics.systemDateTime.createdAt: true
  localcreatedat as Localcreatedat,
  @Semantics.user.localInstanceLastChangedBy: true
  locallastchangedby as Locallastchangedby,
  @Semantics.systemDateTime.localInstanceLastChangedAt: true
  locallastchangedat as Locallastchangedat,
  @Semantics.systemDateTime.lastChangedAt: true
  lastchangedat as Lastchangedat
  
}
```
