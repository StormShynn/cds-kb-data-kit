---
name: YI_PRODBOM.DDLS
description: Product Bom Interface
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Aashish28/RAPAOC24/blob/82a125ae101f49e8718339f004d44ce720c8e939/src/yi_prodbom.ddls.asddls
semantic_en: Product Bom Interface — CDS view.
semantic_vi: Product Bom Interface — CDS view dựa trên Product Bom Interface.
keywords:
  - product
  - bom
  - interface
  - productid
  - bomid
  - bomname
  - last
  - changed
  - created
tags:
  - AC
  - bo:material
  - component:AC
  - product
---
# YI_PRODBOM.DDLS

**Product Bom Interface**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Aashish28/RAPAOC24/blob/82a125ae101f49e8718339f004d44ce720c8e939/src/yi_prodbom.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Productid` | ✓ | |  |  |  |  |
| `Bomid` | ✓ | |  |  |  |  |
| `Bomname` |  | |  |  |  |  |
| `LastChangedAt` |  | |  |  |  |  |
| `CreatedBy` |  | |  |  |  |  |
| `CreatedAt` |  | |  |  |  |  |
| `LocalLastChangedBy` |  | |  |  |  |  |
| `LastChangedBy` |  | |  |  |  |  |
| `LocalLastChangedAt` |  | |  |  |  |  |
| `_prod` | | ✓ | | | | |

## Source Code

*Source: [https://github.com/Aashish28/RAPAOC24/blob/82a125ae101f49e8718339f004d44ce720c8e939/src/yi_prodbom.ddls.asddls](https://github.com/Aashish28/RAPAOC24/blob/82a125ae101f49e8718339f004d44ce720c8e939/src/yi_prodbom.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Bom Interface'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
define view entity YI_PRODBOM
  as projection on YR_PRODBOM as yztprodbom

{
    key Productid,
    key Bomid,
    Bomname,
    LastChangedAt,
    CreatedBy,
    CreatedAt,
    LocalLastChangedBy,
    LastChangedBy,
    LocalLastChangedAt,
    /* Associations */
    _prod: redirected to parent YI_YR_PRODUCTTP
}
```
