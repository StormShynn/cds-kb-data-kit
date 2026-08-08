---
name: I_CN_TAXINVCTYPET
description: "CN Taxinvctypet"
app_component: FI-LOC-TIM-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-TIM
  - interface-view
  - tax
  - component:FI-LOC-TIM-CN
  - lob:Finance
---
# I_CN_TAXINVCTYPET

**CN Taxinvctypet**

| Property | Value |
|---|---|
| App Component | `FI-LOC-TIM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CN_TaxInvcType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `CN_TaxInvcTypeTxt` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |
| `_TaxInvcType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_TaxInvcType` | `I_CN_TaxInvcType` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ICNTXITYPET'
@AbapCatalog.compiler.compareFilter: true
@VDM: { viewType: #BASIC }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'CN Tax Invoice Type - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CN_TaxInvcType',
  usageType: {
    sizeCategory: #S,
    dataClass:  #CUSTOMIZING,
    serviceQuality: #A
  }
}

define view I_CN_TaxInvcTypeT
  as select from P_CN_TaxInvcTypeT as typet
  association [0..1] to I_Language       as _Language    on $projection.Language = _Language.Language
  association [1..1] to I_CN_TaxInvcType as _TaxInvcType on $projection.CN_TaxInvcType = _TaxInvcType.CN_TaxInvcType
{
      @ObjectModel.foreignKey.association: '_TaxInvcType'
  key typet.CN_TaxInvcType,
      _TaxInvcType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key typet.Language,
      _Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      typet.CN_TaxInvcTypeTxt
}
```
