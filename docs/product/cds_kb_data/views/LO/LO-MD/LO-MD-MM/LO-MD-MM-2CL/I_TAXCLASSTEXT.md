---
name: I_TAXCLASSTEXT
description: "Taxclasstext"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text-view
  - tax
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_TAXCLASSTEXT

**Taxclasstext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxClassificationCategory` | ✓ | |  | `tatyp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TaxClassification` | ✓ | |  | `taxkm` |  |  |
| `TaxClassificationName` |  | |  | `vtext` |  |  |
| `_TaxClassificationCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TaxClassificationCategory` | `I_PricingConditionType` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ITAXCLSTXT',
  preserveKey: true,
  compiler.compareFilter: true,
  buffering:{
    status: #ACTIVE,
    type: #FULL
  }
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Tax Classification - Text'
@Search.searchable: true

@ObjectModel:{
  dataCategory: #TEXT,
  representativeKey: 'TaxClassification',
  usageType:{
    serviceQuality: #A,
    sizeCategory : #M,
    dataClass: #CUSTOMIZING
  },
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #LANGUAGE_DEPENDENT_TEXT,
                           #SEARCHABLE_ENTITY
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_Taxclasstext
  as select from tskmt

  association [0..1] to I_PricingConditionType as _TaxClassificationCategory on  $projection.TaxClassificationCategory           = _TaxClassificationCategory.ConditionType
                                                                             and _TaxClassificationCategory.ConditionApplication = 'V' // Set to V because check table TSKM has value set to V



{
      
      @ObjectModel.foreignKey.association:'_TaxClassificationCategory'
  key tskmt.tatyp as  TaxClassificationCategory,

      @Semantics.language: true
  key tskmt.spras as  Language,
      
  key tskmt.taxkm as  TaxClassification,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      vtext       as  TaxClassificationName,
      _TaxClassificationCategory


}
```
