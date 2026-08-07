---
name: ZC_TA_01_CXN.DDLS
description: "###GENERATED Core Data Service Entity"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/JAMADORCLOUD/ABAP_CLOUD/blob/7f3d51da3348e8e425433f2f203835b3862f6f62/src/zc_ta_01_cxn.ddls.asddls
semantic_en: "###GENERATED Core Data Service Entity — CDS view."
semantic_vi: "###GENERATED Core Data Service Entity — CDS view dựa trên ###GENERATED Core Data Service Entity."
keywords:
  - "###generated"
  - "core"
  - "data"
  - "service"
  - "entity"
  - "uuid"
  - "carrid"
  - "connid"
  - "airport"
  - "city"
tags:
  - CO
  - component:CO
  - lob:controlling
---
# ZC_TA_01_CXN.DDLS

**###GENERATED Core Data Service Entity**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/JAMADORCLOUD/ABAP_CLOUD/blob/7f3d51da3348e8e425433f2f203835b3862f6f62/src/zc_ta_01_cxn.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Uuid` | ✓ | |  |  |  |  |
| `Carrid` |  | |  | `[ { entity:{ element: 'CarrierId' , name: 'ZSH_01_CARRIER_VH' } }] Carrid` |  |  |
| `Connid` |  | |  |  |  |  |
| `AirportFrom` |  | |  |  |  |  |
| `CityFrom` |  | |  |  |  |  |
| `CountryFrom` |  | |  |  |  |  |
| `AirportTo` |  | |  |  |  |  |
| `CityTo` |  | |  |  |  |  |
| `CountryTo` |  | |  |  |  |  |
| `Price` |  | |  |  |  |  |
| `CurrencyCode` |  | |  |  |  |  |
| `LocalCreatedBy` |  | |  |  |  |  |
| `LocalCreatedAt` |  | |  |  |  |  |
| `LocalLastChangedBy` |  | |  |  |  |  |
| `LocalLastChangedAt` |  | |  |  |  |  |
| `LastChangedAt` |  | |  |  |  |  |

## Source Code

*Source: [https://github.com/JAMADORCLOUD/ABAP_CLOUD/blob/7f3d51da3348e8e425433f2f203835b3862f6f62/src/zc_ta_01_cxn.ddls.asddls](https://github.com/JAMADORCLOUD/ABAP_CLOUD/blob/7f3d51da3348e8e425433f2f203835b3862f6f62/src/zc_ta_01_cxn.ddls.asddls)*

```abap
@Metadata.allowExtensions: true
@EndUserText.label: '###GENERATED Core Data Service Entity'
@AccessControl.authorizationCheck: #CHECK
define root view entity ZC_TA_01_CXN
  provider contract transactional_query
  as projection on ZR_TA_01_CXN
{
  key Uuid,
@Consumption.valueHelpDefinition: 
[ { entity:{ element: 'CarrierId' , 
             name: 'ZSH_01_CARRIER_VH'
} }]  
  Carrid,
  Connid,
  AirportFrom,
  CityFrom,
  CountryFrom,
  AirportTo,
  CityTo,
  CountryTo,
  Price,
  @Semantics.currencyCode: true
  CurrencyCode,  
  LocalCreatedBy,
  LocalCreatedAt,
  LocalLastChangedBy,
  LocalLastChangedAt,
  LastChangedAt
  
}
```
