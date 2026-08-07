---
name: ZMEALS.DDLS
description: "Meals"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/SatheesP/mcbc_sap_odata/blob/1055c21fee1e495917f4be330e4704df9b1fb6d6/src/zmeals.ddls.asddls
semantic_en: "Meals — CDS view based on smeal."
semantic_vi: "Meals — CDS view dựa trên smeal."
keywords:
  - "meals"
  - "airline"
  - "meal"
  - "number"
  - "type"
  - "text"
---
# ZMEALS.DDLS

**Meals**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/SatheesP/mcbc_sap_odata/blob/1055c21fee1e495917f4be330e4704df9b1fb6d6/src/zmeals.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AirlineID` | ✓ | |  | `carrid` |  |  |
| `MealNumber` | ✓ | |  | `mealnumber` |  |  |
| `MealType` |  | |  | `mealtype` |  |  |
| `Text` |  | |  | `coalesce( _lgText.Text, _slText.Text )` |  |  |
| `_airline` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_airline` | `ZAirline` | [1] |

## Source Code

*Source: [https://github.com/SatheesP/mcbc_sap_odata/blob/1055c21fee1e495917f4be330e4704df9b1fb6d6/src/zmeals.ddls.asddls](https://github.com/SatheesP/mcbc_sap_odata/blob/1055c21fee1e495917f4be330e4704df9b1fb6d6/src/zmeals.ddls.asddls)*

```abap
@AbapCatalog.sqlViewName: 'zvmeals'
@AbapCatalog.compiler.CompareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Meals'

define view ZMeals 
  with parameters 
    p_logon_langu : abap.lang,
    p_suppl_langu : abap.lang
    
  as select from smeal
    left outer join ZMeal_Text as _lgText
       on smeal.carrid      = _lgText.AirlineID
      and smeal.mealnumber  = _lgText.MealNumber
      and _lgText.Langu     = :p_logon_langu
       
    left outer join ZMeal_Text as _slText
       on smeal.carrid      = _slText.AirlineID
      and smeal.mealnumber  = _slText.MealNumber
      and _slText.Langu     = :p_suppl_langu 

    association [1] to ZAirline as _airline
      on $projection.AirlineID = _airline.AirlineID 
{
  key smeal.carrid      as AirlineID,
  key smeal.mealnumber  as MealNumber,
      smeal.mealtype    as MealType,
      coalesce( _lgText.Text, _slText.Text ) as Text,
      
      _airline  // Make association public
}
```
