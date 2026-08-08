---
name: I_RU_ASSETDEPRECIATIONGROUPT
description: "RU Assetdepreciationgroupt"
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
# I_RU_ASSETDEPRECIATIONGROUPT

**RU Assetdepreciationgroupt**

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
| `Language` | ✓ | |  | `sprsl` |  |  |
| `RU_AssetDepreciationGroupDesc` |  | |  | `description` |  |  |
| `_Country` | | ✓ | | | | |
| `_RU_AssetOKOF` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_RU_AssetOKOF` | `I_RU_AssetOKOF` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..*] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Russia Asset Depreciation Group - Text'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IRUASSETDEPRGRT'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: false
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'RU_AssetDepreciationGroup'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
define view I_RU_AssetDepreciationGroupT
  as select from j_3rokof16_dgrt

  association [0..1] to I_Country                    as _Country      on  $projection.Country = _Country.Country

  association [1..1] to I_RU_AssetOKOF               as _RU_AssetOKOF on  $projection.RU_AssetOKOF = _RU_AssetOKOF.RU_AssetOKOF
                                                                      and $projection.Country      = _RU_AssetOKOF.Country

  association [0..*] to I_CompanyCode as _CompanyCode on $projection.Country = _CompanyCode.Country

  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Country'
  key land1                                                 as Country,
      @ObjectModel.foreignKey.association: '_RU_AssetOKOF'
  key okof                                                  as RU_AssetOKOF,
  key depr_group                                            as RU_AssetDepreciationGroup,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key sprsl                                                 as Language,
      @Semantics.text
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
      description                                           as RU_AssetDepreciationGroupDesc,

      _Country,
      _RU_AssetOKOF,
      _CompanyCode,
      _Language
}
```
