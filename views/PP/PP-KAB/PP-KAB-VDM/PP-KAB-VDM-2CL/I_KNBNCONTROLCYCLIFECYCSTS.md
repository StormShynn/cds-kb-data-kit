---
name: I_KNBNCONTROLCYCLIFECYCSTS
description: Knbncontrolcyclifecycsts
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
# I_KNBNCONTROLCYCLIFECYCSTS

**Knbncontrolcyclifecycsts**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanCtrlCycleLifeCycleStatus` | ✓ | |  | `cast ( right(domvalue_l, 1) as vdm_lcm_status preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KnbnCtrlCycLifeCycStsTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNCCLFSTS'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Control Cycle Life Cycle Status'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanCtrlCycleLifeCycleStatus'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #S, dataClass: #META}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'KanbanCtrlCycleLifeCycleStatus'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.internalName: #LOCAL 
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true

@Search.searchable: true

define view I_KnbnControlCycLifeCycSts
  as select from dd07l

  association [0..*] to I_KnbnCtrlCycLifeCycStsTxt as _Text on $projection.KanbanCtrlCycleLifeCycleStatus = _Text.KanbanCtrlCycleLifeCycleStatus

{
      @ObjectModel.text.association: '_Text'
  key cast ( right(domvalue_l, 1) as vdm_lcm_status preserving type) as KanbanCtrlCycleLifeCycleStatus,
      @Search: {defaultSearchElement: true, ranking: #HIGH}
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,
      
      _Text
}
where
      domname  = 'LCM_STATUS'
  and as4local = 'A'
```
