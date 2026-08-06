---
name: I_TREASURYREFERENCECATEGORY
description: Treasuryreferencecategory
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYREFERENCECATEGORY

**Treasuryreferencecategory**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TreasuryReferenceCategory` | `reftyp` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TreasuryReferenceCategoryT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Treasury Reference Category'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
    usageType : {
        sizeCategory: #S,
        serviceQuality: #A,
        dataClass: #META
    },
    representativeKey:'TreasuryReferenceCategory',
    supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE],
    modelingPattern: #ANALYTICAL_DIMENSION,
    sapObjectNodeType.name: 'TreasuryReferenceCategory'
}
@Analytics: {
    dataExtraction:{
      enabled: true,
      delta.changeDataCapture: {
            automatic: true
      }
    },
    dataCategory: #DIMENSION,
    internalName:#LOCAL
}
@VDM.viewType: #BASIC
@Search.searchable: true
@Consumption.ranked: true

define view entity I_TreasuryReferenceCategory  
  as select from atr1 as TresauryReferenceCategory
  association [0..*] to I_TreasuryReferenceCategoryT as _Text on $projection.TreasuryReferenceCategory = _Text.TreasuryReferenceCategory
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @UI.lineItem:[{ position : 1 }]      
  key reftyp as TreasuryReferenceCategory,
  
  _Text
}
```
