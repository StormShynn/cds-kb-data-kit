---
name: I_KNBNCTNREPLNMTTRGGRLOGIC
description: Knbnctnreplnmttrggrlogic
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KNBNCTNREPLNMTTRGGRLOGIC

**Knbnctnreplnmttrggrlogic**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `KanbanCtnReplnmtTriggerLogic` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 1) as pklog preserving type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KnbnCtnReplnmtTrggrLogicText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBNRPLNSHLGC'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter:true
@EndUserText.label: 'Replenishment Trigger Logic'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanCtnReplnmtTriggerLogic'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'KanbanCtnReplnmtTriggerLogic'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@Search.searchable: true

define view I_KnbnCtnReplnmtTrggrLogic 
 as select from dd07l as l
  association [0..*] to I_KnbnCtnReplnmtTrggrLogicText as _Text on $projection.KanbanCtnReplnmtTriggerLogic = _Text.KanbanCtnReplnmtTriggerLogic

  {
      @ObjectModel.text.association: '_Text'
      // cast to data element  
  key cast(substring(l.domvalue_l, 1, 1) as pklog preserving type) as KanbanCtnReplnmtTriggerLogic,
      @Search: {defaultSearchElement: true, ranking: #HIGH}
      @Consumption.hidden:true
      @Analytics.hidden:true
      l.domvalue_l as DomainValue,
      // Associations 
      _Text
  }
  where l.domname = 'PKLOG' and
        l.as4local = 'A';
```
