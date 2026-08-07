---
name: ZC_PERNR_GJ.DDLS
description: FI Activity PERNR Projection View
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Han-ruzi/RAP_FI/blob/75eff5f55a25695cc511748679c9863cd585c6eb/src/zc_pernr_gj.ddls.asddls
semantic_en: FI Activity PERNR Projection View — CDS view.
semantic_vi: FI Activity PERNR Projection View — CDS view dựa trên FI Activity PERNR Projection View.
keywords:
  - activity
  - pernr
  - projection
  - name
  - orgeh
  - code
  - zcorgehname
  - zchp
tags:
  - AC
  - bo:companycode
  - component:AC
  - project
---
# ZC_PERNR_GJ.DDLS

**FI Activity PERNR Projection View**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Han-ruzi/RAP_FI/blob/75eff5f55a25695cc511748679c9863cd585c6eb/src/zc_pernr_gj.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ZcPernrId` | ✓ | |  |  |
| `ZcEmpName` |  | |  |  |
| `ZcOrgehCode` |  | |  |  |
| `zcorgehname` |  | |  |  |
| `Zchp` |  | |  |  |
| `CreatedBy` |  | |  |  |
| `CreatedAt` |  | |  |  |
| `LastChangedBy` |  | |  |  |
| `LastChangedAt` |  | |  |  |
| `Attachment` |  | |  |  |
| `MimeType` |  | |  |  |
| `FileName` |  | |  |  |

## Source Code

*Source: [https://github.com/Han-ruzi/RAP_FI/blob/75eff5f55a25695cc511748679c9863cd585c6eb/src/zc_pernr_gj.ddls.asddls](https://github.com/Han-ruzi/RAP_FI/blob/75eff5f55a25695cc511748679c9863cd585c6eb/src/zc_pernr_gj.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'FI Activity PERNR Projection View'
@Metadata.allowExtensions: true
@ObjectModel.semanticKey: [ 'ZcEmpName' ]
@Search.searchable: true


define root view entity ZC_PERNR_GJ
  provider contract transactional_query
  as projection on ZI_PERNR_GJ as PERNR
{

          @EndUserText.label: '담당자 사번'
          @Search.defaultSearchElement: true
          @Search.fuzzinessThreshold: 0.8
  key     ZcPernrId,

          @EndUserText.label: '담당자'
          ZcEmpName,

          @EndUserText.label: '부서코드'
          ZcOrgehCode,

          @EndUserText.label: '부서명'
          zcorgehname,

          @EndUserText.label: '휴대폰 번호'
          Zchp,

          @EndUserText.label: '생성자'
          CreatedBy,

          @EndUserText.label: '생성일'
          CreatedAt,

          @EndUserText.label: '수정자'
          LastChangedBy,

          @EndUserText.label: '수정일'
          LastChangedAt,
          @EndUserText.label: '첨부파일'
          Attachment,
          @EndUserText.label: '타입'
          MimeType,
          @EndUserText.label: '파일명'
          FileName


}
```
