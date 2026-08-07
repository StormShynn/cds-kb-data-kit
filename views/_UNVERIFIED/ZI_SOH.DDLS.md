---
name: ZI_SOH.DDLS
description: SO Header
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Yashavant/ZBC_YASH/blob/04a7bc9fbbaf48a343c202518bfc6ec60f3015d1/src/zi_soh.ddls.asddls
semantic_en: SO Header — CDS view based on zbc_soh.
semantic_vi: SO Header — CDS view dựa trên zbc_soh.
keywords:
  - header
  - vbeln
  - ernam
  - erdat
  - vkorg
  - vtweg
tags:
  - BC
  - bo:salesorder
  - component:BC
  - lob:basis components
---
# ZI_SOH.DDLS

**SO Header**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Yashavant/ZBC_YASH/blob/04a7bc9fbbaf48a343c202518bfc6ec60f3015d1/src/zi_soh.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Vbeln` | ✓ | |  | `vbeln` |  |  |
| `Ernam` |  | |  | `ernam` |  |  |
| `Erdat` |  | |  | `erdat` |  |  |
| `Vkorg` |  | |  | `vkorg` |  |  |
| `Vtweg` |  | |  | `vtweg` |  |  |
| `Spart` |  | |  | `spart` |  |  |
| `Kunnr` |  | |  | `kunnr` |  |  |
| `changed_by` |  | |  |  |  |  |
| `changed_at` |  | |  |  |  |  |
| `_kna1` | | ✓ | | | | |
| `_tvko` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_kna1` | `kna1` | [0..1] |
| `_tvko` | `tvko` | [0..1] |

## Source Code

*Source: [https://github.com/Yashavant/ZBC_YASH/blob/04a7bc9fbbaf48a343c202518bfc6ec60f3015d1/src/zi_soh.ddls.asddls](https://github.com/Yashavant/ZBC_YASH/blob/04a7bc9fbbaf48a343c202518bfc6ec60f3015d1/src/zi_soh.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'ZBC_SOHV'
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'SO Header'
define view ZI_SOH
  as select from zbc_soh as soh
  association [0..1] to kna1 as _kna1 on $projection.Kunnr = _kna1.kunnr
  association [0..1] to tvko as _tvko on $projection.Vkorg = _tvko.vkorg
{
  key vbeln      as Vbeln,
      ernam      as Ernam,
      erdat      as Erdat,
      vkorg      as Vkorg,
      vtweg      as Vtweg,
      spart      as Spart,
      kunnr      as Kunnr,
      @Semantics.user.lastChangedBy: true
      changed_by as changed_by,
      @Semantics.systemDateTime.lastChangedAt: true
      changed_at as changed_at,
      // Make association public
      _kna1,
      _tvko
}
```
