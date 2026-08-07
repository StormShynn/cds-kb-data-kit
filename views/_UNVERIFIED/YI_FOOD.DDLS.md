---
name: YI_FOOD.DDLS
description: Food union
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/keremkoseoglu/spma-2025-08/blob/05e9b4ffe4da74c8a64c802598dbd378d1666027/src/yi_food.ddls.asddls
semantic_en: Food union — CDS view based on smacourse.
semantic_vi: Food union — CDS view dựa trên smacourse.
keywords:
  - food
  - union
  - smacourse
  - food_category
  - smealt.text
tags:
  - AC
  - component:AC
---
# YI_FOOD.DDLS

**Food union**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/keremkoseoglu/spma-2025-08/blob/05e9b4ffe4da74c8a64c802598dbd378d1666027/src/yi_food.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `carrid` | ✓ | |  |  |  |  |
| `mealnumber` | ✓ | |  |  |  |  |
| `food_category` |  | |  | `'MAIN_COURSE'` |  |  |
| `text` |  | |  |  |  |  |

## Source Code

*Source: [https://github.com/keremkoseoglu/spma-2025-08/blob/05e9b4ffe4da74c8a64c802598dbd378d1666027/src/yi_food.ddls.asddls](https://github.com/keremkoseoglu/spma-2025-08/blob/05e9b4ffe4da74c8a64c802598dbd378d1666027/src/yi_food.ddls.asddls)*

```abap
@AbapCatalog.viewEnhancementCategory: [ #NONE ]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Food union'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: { serviceQuality: #X, sizeCategory: #S, dataClass: #MIXED }

define view entity YI_FOOD
  as select from    smacourse

    left outer join smealt
      on  smealt.carrid     = smacourse.carrid
      and smealt.mealnumber = smacourse.mealnumber
      and smealt.sprache    = $session.system_language

{
  key smacourse.carrid,
  key smacourse.mealnumber,

      'MAIN_COURSE'         as food_category,
      smealt.text
}
union // ALL

select from sdessert
  left outer join smealt on  smealt.carrid     = sdessert.carrid
                         and smealt.mealnumber = sdessert.mealnumber
                         and smealt.sprache    = $session.system_language
{
  key sdessert.carrid,
  key sdessert.mealnumber,
      'DESSERT' as food_category,
      smealt.text
}
```
