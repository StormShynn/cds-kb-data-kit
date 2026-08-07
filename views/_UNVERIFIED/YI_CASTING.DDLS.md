---
name: YI_CASTING.DDLS
description: Casting data
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/keremkoseoglu/spma-2025-08/blob/05e9b4ffe4da74c8a64c802598dbd378d1666027/src/yi_casting.ddls.asddls
semantic_en: Casting data — CDS view based on sflight.
semantic_vi: Casting data — CDS view dựa trên sflight.
keywords:
  - casting
  - data
  - carrid
  - connid
  - fldate
  - connid_as_integer
  - price_as_char
tags:
  - CA
  - component:CA
  - lob:cross_application components
---
# YI_CASTING.DDLS

**Casting data**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/keremkoseoglu/spma-2025-08/blob/05e9b4ffe4da74c8a64c802598dbd378d1666027/src/yi_casting.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `carrid` | ✓ | |  |  |
| `connid` | ✓ | |  |  |
| `fldate` | ✓ | |  |  |
| `connid_as_integer` |  | |  | `cast(connid as abap.int4)` |
| `price_as_char` |  | |  | `cast(price as abap.char(20))` |
| `kk_birthday` |  | |  | `cast('19782712' as abap.dats)` |

## Source Code

*Source: [https://github.com/keremkoseoglu/spma-2025-08/blob/05e9b4ffe4da74c8a64c802598dbd378d1666027/src/yi_casting.ddls.asddls](https://github.com/keremkoseoglu/spma-2025-08/blob/05e9b4ffe4da74c8a64c802598dbd378d1666027/src/yi_casting.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [ #NONE ]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Casting data'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: { serviceQuality: #X, sizeCategory: #S, dataClass: #MIXED }

define view entity YI_CASTING
  as select from sflight

{
  key carrid,
  key connid,
  key fldate,

      cast(connid as abap.int4)     as connid_as_integer,
      cast(price as abap.char(20))  as price_as_char,
      cast('19782712' as abap.dats) as kk_birthday
}
```
