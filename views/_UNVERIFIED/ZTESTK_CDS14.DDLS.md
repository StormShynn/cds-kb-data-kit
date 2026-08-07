---
name: ZTESTK_CDS14.DDLS
description: CDSVIEW14
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/MK-MOMO/momo-public/blob/ff8ce512775cce08de1a25b980223bad08cc608a/src/ztestk_cds14.ddls.asddls
semantic_en: CDSVIEW14 — CDS view based on vbak.
semantic_vi: CDSVIEW14 — CDS view dựa trên vbak.
keywords:
  - cdsview14
  - vbeln
  - posnr
  - kunnr
  - matnr
tags:
  - bo:salesorder
---
# ZTESTK_CDS14.DDLS

**CDSVIEW14**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/MK-MOMO/momo-public/blob/ff8ce512775cce08de1a25b980223bad08cc608a/src/ztestk_cds14.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `vbeln` | ✓ | | `_vbak` | `vbeln` |
| `posnr` |  | | `_vbap` | `posnr` |
| `kunnr` |  | | `_vbak` | `kunnr` |
| `matnr` |  | | `_vbap` | `matnr` |

## Source Code

*Source: [https://github.com/MK-MOMO/momo-public/blob/ff8ce512775cce08de1a25b980223bad08cc608a/src/ztestk_cds14.ddls.asddls](https://github.com/MK-MOMO/momo-public/blob/ff8ce512775cce08de1a25b980223bad08cc608a/src/ztestk_cds14.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'ZTESTKCDS14'
// マスタ参照のBASICビュー
@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
//
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDSVIEW14'
define view ZTESTK_CDS14 as select from vbak as _vbak
                                   inner join vbap as _vbap
                                      on _vbap.vbeln = _vbak.vbeln
{
 key _vbak.vbeln,
     _vbap.posnr,
     _vbak.kunnr,
     _vbap.matnr
}
```
