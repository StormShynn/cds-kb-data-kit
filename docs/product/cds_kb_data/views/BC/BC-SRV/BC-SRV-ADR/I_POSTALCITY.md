---
name: I_POSTALCITY
description: "Postalcity"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_POSTALCITY

**Postalcity**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `country` | `CHAR(3)` | Country/Region Key |
| `CityNumber` | ✓ | |  | `city_code` | `CHAR(12)` | City Code for City/Street File |
| `Region` |  | |  | `region` | `CHAR(3)` | Region (State, Province, County) |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_Region` | `I_Region` | [1..1] |
| `_Text` | `I_PostalCityText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Postal City'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.representativeKey: 'CityNumber'
@Analytics.technicalName: 'IPOSTALCITY'
@ObjectModel.sapObjectNodeType.name: 'CityNumber'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_PostalCity
  as select from adrcity
  association [1..1] to I_Country        as _Country on $projection.Country = _Country.Country
  
  association [1..1] to I_Region         as _Region  on  $projection.Region  = _Region.Region
                                                     and $projection.Country = _Region.Country

  association [0..*] to I_PostalCityText as _Text    on $projection.CityNumber = _Text.CityNumber
{
      @ObjectModel.foreignKey.association: '_Country'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key country   as Country,
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.element: [ '_Text.CityName']   
  key city_code as CityNumber,
      @ObjectModel.text.association: '_Region'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      region as Region,
      _Country,
      _Region,
      _Text
}
```
