---
name: I_RU_ASSETOKOFTEXT
description: RU Assetokoftext
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
  - text-view
  - text
  - component:FI-LOC-AA-RU
  - lob:Finance
  - bo:Asset
---
# I_RU_ASSETOKOFTEXT

**RU Assetokoftext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-AA-RU` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Country` | ✓ | |  | `land1` |
| `Language` | ✓ | |  | `sprsl` |
| `RU_AssetOKOF` | ✓ | |  | `okof` |
| `RU_AssetOKOFDesc` |  | |  | `okof_text` |
| `_Country` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Russia Asset OKOF Code - Text'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IRUASSETOKOFT'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: false
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'RU_AssetOKOF'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
define view I_RU_AssetOKOFText
  as select from j_3rokof16t

  association [0..1] to I_Country  as _Country  on $projection.Country = _Country.Country

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Country'
  key land1                                                     as Country,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key sprsl                                                     as Language,
  key okof                                                      as RU_AssetOKOF,
      @Semantics.text
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
      okof_text                                                 as RU_AssetOKOFDesc,

      _Country,
      _Language
}
```
