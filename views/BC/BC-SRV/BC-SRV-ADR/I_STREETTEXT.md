---
name: I_STREETTEXT
description: "Streettext"
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
# I_STREETTEXT

**Streettext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `Country` | ✓ | |  | `country` |  |  |
| `Street` | ✓ | |  | `strt_code` |  |  |
| `CityNumber` |  | |  | `city_code` |  |  |
| `StreetName` |  | |  | `street` |  |  |
| `_Country` | | ✓ | | | | |
| `_Street` | | ✓ | | | | |
| `_PostalCity` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_Street` | `I_Street` | [1..1] |
| `_PostalCity` | `I_PostalCity` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Street - Text'
@ObjectModel.representativeKey: 'Street'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ISTREETTEXT'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_StreetText
  as select from adrstreett
  association [1..1] to I_Country    as _Country    on  $projection.Country = _Country.Country

  association [1..1] to I_Street     as _Street     on  $projection.Country = _Street.Country
                                                    and $projection.Street  = _Street.Street

  association [1..1] to I_PostalCity as _PostalCity on  $projection.Country    = _PostalCity.Country
                                                    and $projection.CityNumber = _PostalCity.CityNumber
{
      @Semantics.language: true
  key langu     as Language,
      @ObjectModel.foreignKey.association: '_Country'
  key country   as Country,
  key strt_code as Street,
      @ObjectModel.foreignKey.association: '_PostalCity'
      city_code as CityNumber,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      street    as StreetName,
      _Country,
      _Street,
      _PostalCity
}
```
