---
name: I_TERTIARYREGIONTEXT
description: "Tertiaryregiontext"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
