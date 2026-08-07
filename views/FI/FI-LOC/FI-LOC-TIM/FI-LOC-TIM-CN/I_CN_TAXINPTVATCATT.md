---
name: I_CN_TAXINPTVATCATT
description: CN Taxinptvatcatt
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
# I_CN_TAXINPTVATCATT

**CN Taxinptvatcatt**

| Property | Value |
|---|---|
| App Component | `FI-LOC-TIM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TaxCategory` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `CategoryDescription` |  | |  |  |
| `_Language` | | ✓ | | |
| `_TaxCategory` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_TaxCategory` | `I_CN_TaxInptVATCat` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ICNTXIIPTVATCATT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM: { viewType: #BASIC }
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'China Input VAT Category - Text'
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'TaxCategory',
  usageType: {
    sizeCategory: #S,
    dataClass:  #CUSTOMIZING,
    serviceQuality: #A
  }
}

define view I_CN_TaxInptVATCatT
  as select from P_CN_TaxInptVATCatT as text
  association [0..1] to I_Language         as _Language    on $projection.Language = _Language.Language
  association [1..1] to I_CN_TaxInptVATCat as _TaxCategory on $projection.TaxCategory = _TaxCategory.TaxCategory
{
      @ObjectModel.foreignKey.association: '_TaxCategory'
  key text.TaxCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key text.Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      text.CategoryDescription,
      
      _TaxCategory,
      _Language
}
```
