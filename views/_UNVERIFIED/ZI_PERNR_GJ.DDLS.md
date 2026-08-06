---
name: ZI_PERNR_GJ.DDLS
description: PERNR Root View
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Han-ruzi/RAP_FI/blob/75eff5f55a25695cc511748679c9863cd585c6eb/src/zi_pernr_gj.ddls.asddls
semantic_en: PERNR Root View — CDS view based on yfi_ac_pernr_gj.
semantic_vi: PERNR Root View — CDS view dựa trên yfi_ac_pernr_gj.
keywords:
  - pernr
  - root
  - name
  - orgeh
  - code
  - zchp
  - zcorgehname
tags:
  - AC
  - bo:companycode
  - component:AC
---
# ZI_PERNR_GJ.DDLS

**PERNR Root View**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Han-ruzi/RAP_FI/blob/75eff5f55a25695cc511748679c9863cd585c6eb/src/zi_pernr_gj.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `ZcPernrId` | `zc_pernrid` |
| `ZcEmpName` | `zc_emp_name` |
| `ZcOrgehCode` | `zc_orgehcode` |
| `Zchp` | `zc_hp` |
| `zcorgehname` | `_Orgehcode.zcorgehname` |
| `CreatedBy` | `created_by` |
| `CreatedAt` | `created_at` |
| `LastChangedBy` | `last_changed_by` |
| `LastChangedAt` | `last_changed_at` |
| `LocalLastChangedAt` | `local_last_changed_at` |
| `Attachment` | `attachment` |
| `MimeType` | `mime_type` |
| `FileName` | `file_name` |
| `_PERNR_QVIEW` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Orgehcode` | `ZI_COMPANY1_GJ` | [1..1] |
| `_PERNR_QVIEW` | `ZC_PERNR_QVIEW_GJ` | [1..1] |

## Source Code

*Source: [https://github.com/Han-ruzi/RAP_FI/blob/75eff5f55a25695cc511748679c9863cd585c6eb/src/zi_pernr_gj.ddls.asddls](https://github.com/Han-ruzi/RAP_FI/blob/75eff5f55a25695cc511748679c9863cd585c6eb/src/zi_pernr_gj.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'PERNR Root View'


define root view entity ZI_PERNR_GJ
  as select from yfi_ac_pernr_gj

  association [1..1] to ZI_COMPANY1_GJ    as _Orgehcode   on $projection.ZcOrgehCode = _Orgehcode.ZcOrgehCode

  association [1..1] to ZC_PERNR_QVIEW_GJ as _PERNR_QVIEW on $projection.ZcEmpName = _PERNR_QVIEW.zc_emp_name
{

  key   zc_pernrid            as ZcPernrId,

        //        @UI.lineItem:[{ label: 'Zc_Emp_Name', position: 20 , importance: #HIGH }]
        @UI.selectionField: [ { position: 20 } ]
        zc_emp_name           as ZcEmpName,
        zc_orgehcode          as ZcOrgehCode,
        zc_hp                 as Zchp,
        _Orgehcode.zcorgehname,

        @Semantics.user.createdBy: true
        created_by            as CreatedBy,
        @Semantics.systemDateTime.createdAt: true
        created_at            as CreatedAt,
        @Semantics.user.lastChangedBy: true
        last_changed_by       as LastChangedBy,
        @Semantics.systemDateTime.lastChangedAt: true
        last_changed_at       as LastChangedAt,
        @Semantics.systemDateTime.localInstanceLastChangedAt: true
        local_last_changed_at as LocalLastChangedAt,

        @Semantics.largeObject: { mimeType: 'MimeType',   //case-sensitive
                 fileName: 'FileName',   //case-sensitive
                 acceptableMimeTypes: ['image/png', 'image/jpeg'],
                 contentDispositionPreference: #ATTACHMENT }

        attachment            as Attachment,
        @Semantics.mimeType: true
        mime_type             as MimeType,
        file_name             as FileName,
        
        
        
        _PERNR_QVIEW

}
```