---
name: ZR_TA_01_CXN.DDLS
description: ###GENERATED Core Data Service Entity
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/JAMADORCLOUD/ABAP_CLOUD/blob/7f3d51da3348e8e425433f2f203835b3862f6f62/src/zr_ta_01_cxn.ddls.asddls
semantic_en: ###GENERATED Core Data Service Entity — CDS view based on zta_01_cxn.
semantic_vi: ###GENERATED Core Data Service Entity — CDS view dựa trên zta_01_cxn.
keywords:
  - ###generated
  - core
  - data
  - service
  - entity
  - uuid
  - carrid
  - connid
  - airport
  - city
tags:
  - CO
  - component:CO
  - lob:controlling
---
# ZR_TA_01_CXN.DDLS

**###GENERATED Core Data Service Entity**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/JAMADORCLOUD/ABAP_CLOUD/blob/7f3d51da3348e8e425433f2f203835b3862f6f62/src/zr_ta_01_cxn.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `Uuid` | `uuid` |
| `Carrid` | `carrid` |
| `Connid` | `connid` |
| `AirportFrom` | `airport_from` |
| `CityFrom` | `city_from` |
| `CountryFrom` | `country_from` |
| `AirportTo` | `airport_to` |
| `CityTo` | `city_to` |
| `CountryTo` | `country_to` |
| `Price` | `price` |
| `CurrencyCode` | `currency_code` |
| `LocalCreatedBy` | `local_created_by` |
| `LocalCreatedAt` | `local_created_at` |
| `LocalLastChangedBy` | `local_last_changed_by` |
| `LocalLastChangedAt` | `local_last_changed_at` |
| `LastChangedAt` | `last_changed_at` |

## Source Code

*Source: [https://github.com/JAMADORCLOUD/ABAP_CLOUD/blob/7f3d51da3348e8e425433f2f203835b3862f6f62/src/zr_ta_01_cxn.ddls.asddls](https://github.com/JAMADORCLOUD/ABAP_CLOUD/blob/7f3d51da3348e8e425433f2f203835b3862f6f62/src/zr_ta_01_cxn.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions: true
@EndUserText.label: '###GENERATED Core Data Service Entity'
define root view entity ZR_TA_01_CXN
  as select from zta_01_cxn as cnx
{
  key uuid as Uuid,
  carrid as Carrid,
  connid as Connid,
  airport_from as AirportFrom,
  city_from as CityFrom,
  country_from as CountryFrom,
  airport_to as AirportTo,
  city_to as CityTo,
  country_to as CountryTo,
  @Semantics.amount.currencyCode: 'CurrencyCode'
  price as Price,
  @Consumption.valueHelpDefinition: [ {
    entity.name: 'I_CurrencyStdVH', 
    entity.element: 'Currency', 
    useForValidation: true
  } ]
  currency_code as CurrencyCode,  
  @Semantics.user.createdBy: true
  local_created_by as LocalCreatedBy,
  @Semantics.systemDateTime.createdAt: true
  local_created_at as LocalCreatedAt,
  @Semantics.user.localInstanceLastChangedBy: true
  local_last_changed_by as LocalLastChangedBy,
  @Semantics.systemDateTime.localInstanceLastChangedAt: true
  local_last_changed_at as LocalLastChangedAt,
  @Semantics.systemDateTime.lastChangedAt: true
  last_changed_at as LastChangedAt
  
}
```