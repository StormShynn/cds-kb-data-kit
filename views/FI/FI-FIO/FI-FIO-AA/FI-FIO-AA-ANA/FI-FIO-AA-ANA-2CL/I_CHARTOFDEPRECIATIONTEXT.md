---
name: I_CHARTOFDEPRECIATIONTEXT
description: "Chartofdepreciationtext"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - text-view
  - text
  - component:FI-FIO-AA-ANA-2CL
  - lob:Finance
---
# I_CHARTOFDEPRECIATIONTEXT

**Chartofdepreciationtext**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfDepreciation` | ✓ | |  | `afapl` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ChartOfDepreciationName` |  | |  | `ktext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'ICHARTOFDEPRT', preserveKey: true}
@EndUserText.label: 'Chart of Depreciation - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED  //No DCL needed! Even if there is the authorization object A_C_AFAPL, which is for customizing only.
@ObjectModel: { representativeKey: 'ChartOfDepreciation',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_ChartOfDepreciationText
  as select from t096t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key afapl as ChartOfDepreciation,
      @Semantics.language
  key spras as Language,

      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      ktext as ChartOfDepreciationName,

      _Language
}
```
