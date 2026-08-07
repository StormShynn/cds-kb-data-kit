---
name: I_TAXDEPRECIATIONGROUPTEXT
description: "Taxdepreciationgrouptext"
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
  - tax
  - text
  - component:FI-LOC-AA
  - lob:Finance
---
# I_TAXDEPRECIATIONGROUPTEXT

**Taxdepreciationgrouptext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-AA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `land` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TaxDepreciationGroup` | ✓ | |  | `glo_tax_depr_grp` |  |  |
| `TaxDepreciationGroupDesc` |  | |  | `glo_tax_depr_grp_desc` |  |  |
| `_Country` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITAXDEPRGRPTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Tax Depreciation Group - Text'
@VDM.viewType: #BASIC
@ObjectModel: { representativeKey: 'TaxDepreciationGroup',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING }
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]                          
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_TaxDepreciationGroupText 
  as select from glofaataxdepgrpt 
  association [1]    to I_Country  as _Country  on $projection.Country = _Country.Country
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  {
      @ObjectModel.foreignKey.association: '_Country'
      @Search.defaultSearchElement: true
  key land                    as Country,
      @Semantics.language: true
      @Search.defaultSearchElement: false
  key spras                   as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key glo_tax_depr_grp        as TaxDepreciationGroup,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      glo_tax_depr_grp_desc   as TaxDepreciationGroupDesc,      
      _Country,
      _Language  
}
```
