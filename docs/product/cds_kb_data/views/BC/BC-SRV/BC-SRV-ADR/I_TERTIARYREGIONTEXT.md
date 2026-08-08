---
name: I_TERTIARYREGIONTEXT
description: "Tertiaryregiontext"
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
# I_TERTIARYREGIONTEXT

**Tertiaryregiontext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `Country` | ✓ | |  | `country` | `CHAR(3)` | Country/Region Key |
| `Region` | ✓ | |  | `region` | `CHAR(3)` | Region (State, Province, County) |
| `SecondaryRegion` | ✓ | |  | `county_code` | `CHAR(8)` | County code for county |
| `TertiaryRegion` | ✓ | |  | `township_code` | `CHAR(8)` | Township code for Township |
| `TertiaryRegionName` |  | |  | `township` | `CHAR(40)` | Township |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_SecondaryRegion` | | ✓ | | | | |
| `_TertiaryRegion` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_Region` | `I_Region` | [1..1] |
| `_SecondaryRegion` | `I_SecondaryRegion` | [1..1] |
| `_TertiaryRegion` | `I_TertiaryRegion` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITERTIARYRGNTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Description of Tertiary Region'
@ObjectModel.representativeKey: 'TertiaryRegion'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
@Search.searchable: true
@VDM.viewType: #BASIC
define view I_TertiaryRegionText
  as select from adrtownshipt
  association [1..1] to I_Country         as _Country         on  $projection.Country = _Country.Country

  association [1..1] to I_Region          as _Region          on  $projection.Region  = _Region.Region
                                                              and $projection.Country = _Region.Country

  association [1..1] to I_SecondaryRegion as _SecondaryRegion on  $projection.Country         = _SecondaryRegion.Country
                                                              and $projection.Region          = _SecondaryRegion.Region
                                                              and $projection.SecondaryRegion = _SecondaryRegion.SecondaryRegion

  association [1..1] to I_TertiaryRegion  as _TertiaryRegion  on  $projection.Country         = _TertiaryRegion.Country
                                                              and $projection.Region          = _TertiaryRegion.Region
                                                              and $projection.SecondaryRegion = _TertiaryRegion.SecondaryRegion
                                                              and $projection.TertiaryRegion  = _TertiaryRegion.TertiaryRegion
{
      @Semantics.language: true
  key langu         as Language,
      @ObjectModel.foreignKey.association: '_Country'
  key country       as Country,
      @ObjectModel.foreignKey.association: '_Region'
  key region        as Region,
      @ObjectModel.foreignKey.association: '_SecondaryRegion'
  key county_code   as SecondaryRegion,
  key township_code as TertiaryRegion,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      township      as TertiaryRegionName,
      _Country,
      _Region,
      _SecondaryRegion,
      _TertiaryRegion
}
```
