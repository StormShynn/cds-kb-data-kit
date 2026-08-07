---
name: I_FIXEDASSETNATLCLFNTEXT
description: Fixed AssetNATLCLFNTEXT
app_component: FI-LOC-AA
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
  - fixed-asset
  - text
  - component:FI-LOC-AA
  - lob:Finance
  - bo:Asset
---
# I_FIXEDASSETNATLCLFNTEXT

**Fixed AssetNATLCLFNTEXT**

| Property | Value |
|---|---|
| App Component | `FI-LOC-AA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Country` | ✓ | |  | `land` |
| `Language` | ✓ | |  | `spras` |
| `NationalClassification` | ✓ | |  | `glo_natl_clfn_code` |
| `NationalClassificationDesc` |  | |  | `glo_natl_clfn_code_text` |
| `_Country` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIASTNATLCLFNT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'National Classification Code - Text'
@VDM.viewType: #BASIC
@ObjectModel: { representativeKey: 'NationalClassification',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING }
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]                
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_FixedAssetNatlClfnText
  as select from glofaanclcodet
  association [1]    to I_Country  as _Country  on $projection.Country = _Country.Country
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Country'
  key land                    as Country,
      @Semantics.language: true
  key spras                   as Language,
  key glo_natl_clfn_code      as NationalClassification,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      glo_natl_clfn_code_text as NationalClassificationDesc,

      _Country,
      _Language
}
```
