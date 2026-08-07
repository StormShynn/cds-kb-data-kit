---
name: I_TAXCLASS
description: "Taxclass"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - tax
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_TAXCLASS

**Taxclass**

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
| `TaxClassification` | ✓ | |  | `taxkm` |  |  |
| `_Text` | | ✓ | | | | |
| `_TaxClassificationCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Taxclasstext` | [0..*] |
| `_TaxClassificationCategory` | `I_PricingConditionType` | [0..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ITAXCLASSVH',
  preserveKey:true,
  compiler.compareFilter:true,
  buffering:{
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 1
  }
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Tax Classification'
@Search.searchable: true
@ObjectModel:{
  usageType:{
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #CUSTOMIZING   
  },
  representativeKey: 'TaxClassification',
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #VALUE_HELP_PROVIDER,
                             #SEARCHABLE_ENTITY                           
  ]
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Consumption.ranked: true 
define view I_Taxclass
  as select from tskm
  association [0..*] to I_Taxclasstext         as _Text                      on  $projection.TaxClassification         = _Text.TaxClassification
                                                                             and $projection.TaxClassificationCategory = _Text.TaxClassificationCategory
  association [0..1] to I_PricingConditionType as _TaxClassificationCategory on  $projection.TaxClassificationCategory           = _TaxClassificationCategory.ConditionType
                                                                             and _TaxClassificationCategory.ConditionApplication = 'V' // Set to V because check table TSKM has value set to V


{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association:'_TaxClassificationCategory'
  key tskm.tatyp as TaxClassificationCategory, //_TaxClassification,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @ObjectModel.text.association: '_Text'
  key tskm.taxkm as TaxClassification,

      _Text,
      _TaxClassificationCategory

}
```
