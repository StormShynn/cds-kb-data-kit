---
name: I_FIXEDASSETNATLCLFNTEXT
description: "Fixed AssetNATLCLFNTEXT"
app_component: FI-LOC-AA
software_component: SAPSCORE
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `NationalClassification` | ✓ | |  | `glo_natl_clfn_code` |  |  |
| `NationalClassificationDesc` |  | |  | `glo_natl_clfn_code_text` |  |  |
| `_Country` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

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
