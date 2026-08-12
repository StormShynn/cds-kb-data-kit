---
name: I_TAXCLASS
description: "Taxclass"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
