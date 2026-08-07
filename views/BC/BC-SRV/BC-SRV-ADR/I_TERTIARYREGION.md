---
name: I_TERTIARYREGION
description: Tertiaryregion
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
# I_TERTIARYREGION

**Tertiaryregion**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `country` |  |  |
| `Region` | ✓ | |  | `region` |  |  |
| `SecondaryRegion` | ✓ | |  | `county_code` |  |  |
| `TertiaryRegion` | ✓ | |  | `township_code` |  |  |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_SecondaryRegion` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_Region` | `I_Region` | [1..1] |
| `_SecondaryRegion` | `I_SecondaryRegion` | [1..1] |
| `_Text` | `I_TertiaryRegionText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Tertiary Region'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.representativeKey: 'TertiaryRegion'
@Analytics.technicalName: 'ITERTIARYREGION'
@ObjectModel.sapObjectNodeType.name: 'TertiaryRegion'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.viewType: #BASIC
define view entity I_TertiaryRegion
  as select from adrtownship
  association [1..1] to I_Country            as _Country         on  $projection.Country = _Country.Country

  association [1..1] to I_Region             as _Region          on  $projection.Region  = _Region.Region
                                                                 and $projection.Country = _Region.Country

  association [1..1] to I_SecondaryRegion    as _SecondaryRegion on  $projection.Country         = _SecondaryRegion.Country
                                                                 and $projection.Region          = _SecondaryRegion.Region
                                                                 and $projection.SecondaryRegion = _SecondaryRegion.SecondaryRegion

  association [0..*] to I_TertiaryRegionText as _Text            on  $projection.Country         = _Text.Country
                                                                 and $projection.Region          = _Text.Region
                                                                 and $projection.SecondaryRegion = _Text.SecondaryRegion
                                                                 and $projection.TertiaryRegion  = _Text.TertiaryRegion
{
      @ObjectModel.foreignKey.association: '_Country'
  key country       as Country,
      @ObjectModel.foreignKey.association: '_Region'
  key region        as Region,
      @ObjectModel.foreignKey.association: '_SecondaryRegion'
  key county_code   as SecondaryRegion,
      @ObjectModel.text.association: '_Text'
  key township_code as TertiaryRegion,
      _Country,
      _Region,
      _SecondaryRegion,
      _Text
}
```
