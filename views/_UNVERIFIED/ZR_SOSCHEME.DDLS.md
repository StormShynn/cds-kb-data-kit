---
name: ZR_SOSCHEME.DDLS
description: "SO Scheme View"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Sadda-SAP-AAho/ABAP-BONN-ZSCHEMEAPPLICATION/blob/1bbb4c514a82d4e66adf7ff682690ea9895c930b/src/zr_soscheme.ddls.asddls
semantic_en: "SO Scheme View — CDS view based on zsoscheme."
semantic_vi: "SO Scheme View — CDS view dựa trên zsoscheme."
keywords:
  - "scheme"
  - "bukrs"
  - "salesorder"
  - "schemecode"
  - "schemegroupcode"
  - "schemecheckcode"
tags:
  - bo:salesorder
---
# ZR_SOSCHEME.DDLS

**SO Scheme View**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Sadda-SAP-AAho/ABAP-BONN-ZSCHEMEAPPLICATION/blob/1bbb4c514a82d4e66adf7ff682690ea9895c930b/src/zr_soscheme.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Bukrs` | ✓ | |  | `bukrs` |  |  |
| `Salesorder` | ✓ | |  | `salesorder` |  |  |
| `Schemecode` | ✓ | |  | `schemecode` |  |  |
| `Schemegroupcode` | ✓ | |  | `schemegroupcode` |  |  |
| `Schemecheckcode` |  | |  | `schemecheckcode` |  |  |
| `Orderqty` |  | |  | `orderqty` |  |  |
| `Freeqty` |  | |  | `freeqty` |  |  |
| `Appliedqty` |  | |  | `appliedqty` |  |  |
| `CreatedBy` |  | |  | `created_by` |  |  |
| `CreatedAt` |  | |  | `created_at` |  |  |
| `LastChangedBy` |  | |  | `last_changed_by` |  |  |
| `LastChangedAt` |  | |  | `last_changed_at` |  |  |
| `LocalLastChangedAt` |  | |  | `local_last_changed_at` |  |  |

## Source Code

*Source: [https://github.com/Sadda-SAP-AAho/ABAP-BONN-ZSCHEMEAPPLICATION/blob/1bbb4c514a82d4e66adf7ff682690ea9895c930b/src/zr_soscheme.ddls.asddls](https://github.com/Sadda-SAP-AAho/ABAP-BONN-ZSCHEMEAPPLICATION/blob/1bbb4c514a82d4e66adf7ff682690ea9895c930b/src/zr_soscheme.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'SO Scheme View'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
define view entity ZR_SOSCHEME as select from zsoscheme
{
    key bukrs as Bukrs,
    key salesorder as Salesorder,
    key schemecode as Schemecode,
    key schemegroupcode as Schemegroupcode,
    schemecheckcode as Schemecheckcode,
    orderqty as Orderqty,
    freeqty as Freeqty,
    appliedqty as Appliedqty,
    created_by as CreatedBy,
    created_at as CreatedAt,
    last_changed_by as LastChangedBy,
    last_changed_at as LastChangedAt,
    local_last_changed_at as LocalLastChangedAt
}
```
