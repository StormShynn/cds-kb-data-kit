---
name: I_BONDCLASSIFICATION
description: Bondclassification
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
  - classification
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_BONDCLASSIFICATION

**Bondclassification**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BondClassification` | ✓ | |  | `swpklass` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BondClassificationText` | [0..*] |

## Source Code

```abap
// harmonized annotations
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true // only if required by ATC check
@AbapCatalog.sqlViewName: 'IBONDCLSFCTN'
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Bond Classification'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BondClassification'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'BondClassification'

@Search.searchable: true

define view I_BondClassification
  as select from tw01
  association [0..*] to I_BondClassificationText as _Text on $projection.BondClassification = _Text.BondClassification

{
      @ObjectModel.text.association: '_Text'

      @Search : { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key swpklass as BondClassification,
      _Text
}
```
