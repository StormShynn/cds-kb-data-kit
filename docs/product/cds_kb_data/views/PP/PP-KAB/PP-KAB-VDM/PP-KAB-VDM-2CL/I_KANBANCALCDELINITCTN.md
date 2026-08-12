---
name: I_KANBANCALCDELINITCTN
description: "Kanbancalcdelinitctn"
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
# I_KANBANCALCDELINITCTN

**Kanbancalcdelinitctn**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanCalcDelInitCtns` | ✓ | |  | `cast ( right(domvalue_l, 1) as loewn preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KanbanCalcDelInitCtnTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCLCDELINIT'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Calculation Delete Initial Containers'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanCalcDelInitCtns'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'KanbanCalcDelInitCtns'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanCalcDelInitCtn
  as select from dd07l

  association [0..*] to I_KanbanCalcDelInitCtnTxt as _Text on $projection.KanbanCalcDelInitCtns = _Text.KanbanCalcDelInitCtns

{
      @ObjectModel.text.association: '_Text'
  key cast ( right(domvalue_l, 1) as loewn preserving type) as KanbanCalcDelInitCtns,
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,
      _Text
}
where
      domname  = 'LOEWN'
  and as4local = 'A'
```
