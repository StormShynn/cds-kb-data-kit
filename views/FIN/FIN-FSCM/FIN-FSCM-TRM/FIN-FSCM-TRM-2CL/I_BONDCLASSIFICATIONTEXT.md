---
name: I_BONDCLASSIFICATIONTEXT
description: Bondclassificationtext
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
  - text-view
  - classification
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_BONDCLASSIFICATIONTEXT

**Bondclassificationtext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `BondClassification` | ✓ | |  | `swpklass` |  |  |
| `BondClassificationName` |  | |  | `cast (xlangbez as ftr_gen_bond_classifi_name preserving type)` |  |  |
| `_BondClassification` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BondClassification` | `I_BondClassification` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true  
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'IBONDCLASTXT'  
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Bond Classification - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory: #TEXT 
@ObjectModel.representativeKey: 'BondClassification'
@ObjectModel.usageType.dataClass: #MASTER 
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC

define view I_BondClassificationText
  as select from tw01t
  association [0..1] to I_BondClassification as _BondClassification on $projection.BondClassification = _BondClassification.BondClassification
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                      as Language,
  key swpklass                                                   as BondClassification,
      @Semantics.text: true
      cast (xlangbez as ftr_gen_bond_classifi_name preserving type) as BondClassificationName,
      _BondClassification,
      _Language      
}
```
