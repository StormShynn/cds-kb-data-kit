---
name: I_KANBANCALCDELLOCKEDCTN
description: "Kanbancalcdellockedctn"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_KANBANCALCDELLOCKEDCTN

**Kanbancalcdellockedctn**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanCalcDelLockedCtns` | ✓ | |  | `cast ( right(domvalue_l, 1) as loewg preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KanbanCalcDelLockedCtnTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCLCDLLCKCTN'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Calculation Delete Locked Containers'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanCalcDelLockedCtns'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'KanbanCalcDelLockedCtns'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanCalcDelLockedCtn
  as select from dd07l

  association [0..*] to I_KanbanCalcDelLockedCtnTxt as _Text on $projection.KanbanCalcDelLockedCtns = _Text.KanbanCalcDelLockedCtns

{
      @ObjectModel.text.association: '_Text'
  key cast ( right(domvalue_l, 1) as loewg preserving type) as KanbanCalcDelLockedCtns,
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,
      _Text
}
where
      domname  = 'LOEWG'
  and as4local = 'A'
```
