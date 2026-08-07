---
name: ZDATADEFTEST.DDLS
description: test
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/abapGit-tests/SKTD/blob/a7021aaea8a53495a5d096cdfef761c9c6011395/src/zdatadeftest.ddls.asddls
semantic_en: test — CDS view based on t100.
semantic_vi: test — CDS view dựa trên t100.
keywords:
  - test
  - sprsl
  - arbgb
  - msgnr
  - text
tags:
  - FT
  - component:FT
---
# ZDATADEFTEST.DDLS

**test**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/abapGit-tests/SKTD/blob/a7021aaea8a53495a5d096cdfef761c9c6011395/src/zdatadeftest.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Sprsl` | ✓ | |  | `sprsl` |  |  |
| `Arbgb` | ✓ | |  | `arbgb` |  |  |
| `Msgnr` | ✓ | |  | `msgnr` |  |  |
| `Text` |  | |  | `text` |  |  |

## Source Code

*Source: [https://github.com/abapGit-tests/SKTD/blob/a7021aaea8a53495a5d096cdfef761c9c6011395/src/zdatadeftest.ddls.asddls](https://github.com/abapGit-tests/SKTD/blob/a7021aaea8a53495a5d096cdfef761c9c6011395/src/zdatadeftest.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'test'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
define view entity zdatadeftest as select from t100
{
    key sprsl as Sprsl,
    key arbgb as Arbgb,
    key msgnr as Msgnr,
    text as Text
}
```
