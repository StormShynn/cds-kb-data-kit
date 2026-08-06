---
name: I_STREET
description: Street
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
# I_STREET

**Street**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Country` | `country` |
| key `Street` | `strt_code` |
| `CityNumber` | `city_code` |
| `_Country` | *Association* |
| `_Text` | *Association* |
| `_PostalCity` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_Text` | `I_StreetText` | [0..*] |
| `_PostalCity` | `I_PostalCity` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Street'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.representativeKey: 'Street'
@Analytics.technicalName: 'ISTREET'
@ObjectModel.sapObjectNodeType.name: 'Street'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@VDM.viewType: #BASIC
define view entity I_Street
  as select from adrstreet
  association [1..1] to I_Country    as _Country on $projection.Country = _Country.Country
  
  association [0..*] to I_StreetText as _Text    on $projection.Street  = _Text.Street
  
  association [1..1] to I_PostalCity as _PostalCity on  $projection.Country    = _PostalCity.Country
                                                    and $projection.CityNumber = _PostalCity.CityNumber
{
      @ObjectModel.foreignKey.association: '_Country'
  key country   as Country,
      @ObjectModel.text.association: '_Text'
  key strt_code as Street,
      @ObjectModel.foreignKey.association: '_PostalCity'
      city_code as CityNumber,
      _Country,
      _Text,
      _PostalCity
}
```
