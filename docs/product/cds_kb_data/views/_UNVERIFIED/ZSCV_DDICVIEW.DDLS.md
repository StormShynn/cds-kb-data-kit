---
name: ZSCV_DDICVIEW.DDLS
description: "DDic View"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/alwinvandeput/zscv_search_cds_views/blob/bc7197a3c1b03cfa42769be7c35e54cc2774318b/src/zscv_ddicview.ddls.asddls
semantic_en: "DDic View — CDS view based on tadir."
semantic_vi: "DDic View — CDS view dựa trên tadir."
keywords:
  - "ddic"
  - "view"
  - "name"
  - "dd25l"
  - "abap"
  - "type"
  - "source"
---
# ZSCV_DDICVIEW.DDLS

**DDic View**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/alwinvandeput/zscv_search_cds_views/blob/bc7197a3c1b03cfa42769be7c35e54cc2774318b/src/zscv_ddicview.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ViewName` |  | |  | `obj_name` |  |  |
| `Dd25lViewName` |  | |  | `viewname` |  |  |
| `CdsViewInd` |  | |  | `case when CdsView.ddlsourcename is not null then 'X' else '' end` |  |  |
| `AbapViewType` |  | |  | `case when CdsView.ddlsourcename is not null then 'DDic CDS' else 'DDic View' end` |  |  |
| `DdlSourceName` |  | |  | `ddlsourcename` |  |  |

## Source Code

*Source: [https://github.com/alwinvandeput/zscv_search_cds_views/blob/bc7197a3c1b03cfa42769be7c35e54cc2774318b/src/zscv_ddicview.ddls.asddls](https://github.com/alwinvandeput/zscv_search_cds_views/blob/bc7197a3c1b03cfa42769be7c35e54cc2774318b/src/zscv_ddicview.ddls.asddls)*

```abap
@EndUserText.label: 'DDic View'
@AbapCatalog.sqlViewName: 'ZSCV_DDVW'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

define view ZSCV_DdicView
  as select from    tadir      as DdicView
    left outer join dd25l                 on dd25l.viewname = DdicView.obj_name
    left outer join cdssqlview as CdsView on CdsView.sqlviewname = DdicView.obj_name
{
  DdicView.obj_name     as ViewName,

  dd25l.viewname        as Dd25lViewName,

  case
    when CdsView.ddlsourcename is not null then 'X'
    else ''
    end                 as CdsViewInd,
    
  case
    when CdsView.ddlsourcename is not null 
      then 'DDic CDS'
    else 'DDic View'
    end                 as AbapViewType,

  CdsView.ddlsourcename as DdlSourceName

}
where
      DdicView.pgmid  = 'R3TR'
  and DdicView.object = 'VIEW'
```