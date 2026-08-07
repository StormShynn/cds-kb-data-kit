---
name: I_TAXDEPRECIATIONGROUP
description: Taxdepreciationgroup
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
  - tax
  - component:FI-LOC-AA
  - lob:Finance
---
# I_TAXDEPRECIATIONGROUP

**Taxdepreciationgroup**

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
| `TaxDepreciationGroup` | ✓ | |  | `glo_tax_depr_grp` |
| `_Country` | | ✓ | | |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1] |
| `_Text` | `I_TaxDepreciationGroupText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITAXDEPRGRP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Tax Depreciation Group'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION 
@Analytics.internalName: #LOCAL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'TaxDepreciationGroup',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING }
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #UI_PROVIDER_PROJECTION_SOURCE ]                
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_TaxDepreciationGroup 
  as select from glofaataxdepgrp 
  association [1]    to I_Country                  as _Country on $projection.Country = _Country.Country
  association [0..*] to I_TaxDepreciationGroupText as _Text    on $projection.Country = _Text.Country 
                                                              and $projection.TaxDepreciationGroup = _Text.TaxDepreciationGroup
  {
      @ObjectModel.foreignKey.association: '_Country'
      @Search.defaultSearchElement: true
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_Country', element: 'Country' }, useAsTemplate: true }]
  key land                    as Country,
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key glo_tax_depr_grp        as TaxDepreciationGroup,
      _Country,
      _Text  
  }
```
