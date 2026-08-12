---
name: I_SECONDARYREGION
description: "Secondaryregion"
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
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_SECONDARYREGION

**Secondaryregion**

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
| `Country` | ✓ | |  | `country` | `CHAR(3)` | Country/Region Key |
| `Region` | ✓ | |  | `region` | `CHAR(3)` | Region (State, Province, County) |
| `SecondaryRegion` | ✓ | |  | `county_code` | `CHAR(8)` | County code for county |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_Region` | `I_Region` | [1..1] |
| `_Text` | `I_SecondaryRegionText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISECONDARYREGION'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Secondary Region'
@ObjectModel.representativeKey: 'SecondaryRegion'
@ObjectModel.sapObjectNodeType.name: 'SecondaryRegion'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]

@VDM.viewType: #BASIC
define view I_SecondaryRegion
  as select from adrcounty
  association [1..1] to I_Country             as _Country on  $projection.Country = _Country.Country
  
  association [1..1] to I_Region              as _Region  on  $projection.Region  = _Region.Region
                                                          and $projection.Country = _Region.Country
                                                          
  association [0..*] to I_SecondaryRegionText as _Text    on  $projection.Country         = _Text.Country
                                                          and $projection.Region          = _Text.Region
                                                          and $projection.SecondaryRegion = _Text.SecondaryRegion
{
      @ObjectModel.foreignKey.association: '_Country'
  key country     as Country,
      @ObjectModel.foreignKey.association: '_Region'
  key region      as Region,
      @ObjectModel.text.association: '_Text'
  key county_code as SecondaryRegion,
      _Country,
      _Region,
      _Text
}
```
