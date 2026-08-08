---
name: I_REGIONTEXT
description: "Regiontext"
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
# I_REGIONTEXT

**Regiontext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `Region` | ✓ | |  | `bland` | `CHAR(3)` | Region (State, Province, County) |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `RegionName` |  | |  | `bezei` | `CHAR(20)` | Description |
| `_Region` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Region` | `I_Region` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Country` | `I_Country` | [0..1] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT 
@Analytics.technicalName: 'IREGIONTEXT'
@ObjectModel.representativeKey: 'Region'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT]
@EndUserText.label: 'Region - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable:                true

define view entity I_RegionText
  as select from t005u
  association [0..1] to I_Region   as _Region   on  $projection.Region  = _Region.Region
                                                and $projection.Country = _Region.Country
  association [0..1] to I_Language as _Language on  $projection.Language = _Language.Language
  association [0..1] to I_Country  as _Country  on  $projection.Country = _Country.Country
{
      @ObjectModel.foreignKey.association: '_Country'
  key t005u.land1 as Country,
      @ObjectModel.foreignKey.association: '_Region'
  key t005u.bland as Region,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key t005u.spras as Language,
      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW 
      t005u.bezei as RegionName,
      _Region,
      _Language,
      _Country
}
```
