---
name: I_POSTALCITYTEXT
description: Postalcitytext
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
  - text-view
  - text
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_POSTALCITYTEXT

**Postalcitytext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `langu` |
| key `Country` | `country` |
| key `CityNumber` | `city_code` |
| `CityName` | `city_name` |
| `_Country` | *Association* |
| `_PostalCity` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_PostalCity` | `I_PostalCity` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Description of Postal City'
@ObjectModel.representativeKey: 'CityNumber'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPOSTALCITYTEXT'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_PostalCityText
  as select from adrcityt
  association [1..1] to I_Country    as _Country    on  $projection.Country = _Country.Country

  association [1..1] to I_PostalCity as _PostalCity on  $projection.Country    = _PostalCity.Country
                                                    and $projection.CityNumber = _PostalCity.CityNumber
{
      @Semantics.language: true
  key langu     as Language,
      @ObjectModel.foreignKey.association: '_Country'
  key country   as Country,
  key city_code as CityNumber,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      city_name as CityName,
      _Country,
      _PostalCity
}
```
