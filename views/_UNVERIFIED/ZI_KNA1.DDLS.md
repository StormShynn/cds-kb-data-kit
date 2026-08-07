---
name: ZI_KNA1.DDLS
description: Kna1
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/strikeprice/abaprap/blob/4b88f9f01f95d0678815214e7a494198eb64b273/src/zi_kna1.ddls.asddls
semantic_en: Kna1 — CDS view based on zkna1.
semantic_vi: Kna1 — CDS view dựa trên zkna1.
keywords:
  - kna1
  - customer
  - number
  - name
  - country
tags:
  - bo:customer
---
# ZI_KNA1.DDLS

**Kna1**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/strikeprice/abaprap/blob/4b88f9f01f95d0678815214e7a494198eb64b273/src/zi_kna1.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CustomerNumber` | ✓ | |  | `kunnr` |
| `Name` |  | |  | `name1` |
| `Country` |  | |  | `land1` |

## Source Code

*Source: [https://github.com/strikeprice/abaprap/blob/4b88f9f01f95d0678815214e7a494198eb64b273/src/zi_kna1.ddls.asddls](https://github.com/strikeprice/abaprap/blob/4b88f9f01f95d0678815214e7a494198eb64b273/src/zi_kna1.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Kna1'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
define view entity zi_kna1 as select from zkna1
{
    key kunnr as CustomerNumber,
    name1 as Name,
    land1 as Country
}
```
