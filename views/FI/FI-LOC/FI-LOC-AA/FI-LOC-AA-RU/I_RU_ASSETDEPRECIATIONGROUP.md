---
name: I_RU_ASSETDEPRECIATIONGROUP
description: RU Assetdepreciationgroup
app_component: FI-LOC-AA-RU
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-AA
  - interface-view
  - component:FI-LOC-AA-RU
  - lob:Finance
  - bo:Asset
---
# I_RU_ASSETDEPRECIATIONGROUP

**RU Assetdepreciationgroup**

| Property | Value |
|---|---|
| App Component | `FI-LOC-AA-RU` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` |  |  |
| `RU_AssetOKOF` | ✓ | |  | `okof` |  |  |
| `RU_AssetDepreciationGroup` | ✓ | |  | `depr_group` |  |  |
| `_Country` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |
| `_RU_AssetOKOF` | | ✓ | | | | |
| `_RU_AssetOKOFText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_CountryText` | `I_CountryText` | [0..*] |
| `_RU_AssetOKOF` | `I_RU_AssetOKOF` | [1..1] |
| `_RU_AssetOKOFText` | `I_RU_AssetOKOFText` | [0..*] |
| `_Text` | `I_RU_AssetDepreciationGroupT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Russia Asset Depreciation Group'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IRUASSETDEPRGR'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: false
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'RU_AssetDepreciationGroup'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
define view I_RU_AssetDepreciationGroup
  as select from j_3rokof16_dgr

  association [0..1] to I_Country                    as _Country          on  $projection.Country = _Country.Country
  
  association [0..*] to I_CountryText                as _CountryText      on  $projection.Country = _CountryText.Country

  association [1..1] to I_RU_AssetOKOF               as _RU_AssetOKOF     on  $projection.RU_AssetOKOF = _RU_AssetOKOF.RU_AssetOKOF
                                                                          and $projection.Country      = _RU_AssetOKOF.Country

  association [0..*] to I_RU_AssetOKOFText           as _RU_AssetOKOFText on  $projection.RU_AssetOKOF = _RU_AssetOKOFText.RU_AssetOKOF
                                                                          and $projection.Country      = _RU_AssetOKOFText.Country

  association [0..*] to I_RU_AssetDepreciationGroupT as _Text             on  $projection.RU_AssetDepreciationGroup = _Text.RU_AssetDepreciationGroup
                                                                          and $projection.Country                   = _Text.Country
                                                                          and $projection.RU_AssetOKOF              = _Text.RU_AssetOKOF

{
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CountryVH', element: 'Country' }, useAsTemplate: true } ]
      @ObjectModel.text.association: '_CountryText'
      @ObjectModel.foreignKey.association: '_Country'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  key land1      as Country,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_RU_AssetOKOF', element: 'RU_AssetOKOF' }, useAsTemplate: true } ]
      @ObjectModel.text.association: '_RU_AssetOKOFText'
      @ObjectModel.foreignKey.association: '_RU_AssetOKOF'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
  key okof       as RU_AssetOKOF,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_RU_AssetDepreciationGroup', element: 'RU_AssetDepreciationGroup' }, useAsTemplate: true } ]
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key depr_group as RU_AssetDepreciationGroup,

      _Country,
      _CountryText,
      _RU_AssetOKOF,
      _RU_AssetOKOFText,
      _Text
}
```
