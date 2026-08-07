---
name: ZPK_DDL_CW12.DDLS
description: "Sample CDS View"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Pozell71638/EasySAPABAP/blob/057043e1cccb89c8f1434aaabe525b950bf51322/src/zpk_ddl_cw12.ddls.asddls
semantic_en: "Sample CDS View — CDS view based on scarr."
semantic_vi: "Sample CDS View — CDS view dựa trên scarr."
keywords:
  - "sample"
  - "airline_id"
  - "airline_name"
  - "curr_code"
  - "website"
tags:
  - CA
  - component:CA
  - lob:cross_application components
---
# ZPK_DDL_CW12.DDLS

**Sample CDS View**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Pozell71638/EasySAPABAP/blob/057043e1cccb89c8f1434aaabe525b950bf51322/src/zpk_ddl_cw12.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `airline_id` | ✓ | |  | `carrid` |  |  |
| `airline_name` |  | |  | `carrname` |  |  |
| `curr_code` |  | |  | `currcode` |  |  |
| `website` |  | |  | `url` |  |  |

## Source Code

*Source: [https://github.com/Pozell71638/EasySAPABAP/blob/057043e1cccb89c8f1434aaabe525b950bf51322/src/zpk_ddl_cw12.ddls.asddls](https://github.com/Pozell71638/EasySAPABAP/blob/057043e1cccb89c8f1434aaabe525b950bf51322/src/zpk_ddl_cw12.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'ZPK_SQL_CW12'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Sample CDS View'
define view ZPK_DDL_CW12 as select from scarr
{
    key carrid as airline_id ,
    carrname as airline_name ,
    currcode as curr_code,
    url as website
}
```
