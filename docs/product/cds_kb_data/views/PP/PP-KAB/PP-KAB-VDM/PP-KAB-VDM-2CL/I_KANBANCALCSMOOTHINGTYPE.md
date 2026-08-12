---
name: I_KANBANCALCSMOOTHINGTYPE
description: "Kanbancalcsmoothingtype"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_KANBANCALCSMOOTHINGTYPE

**Kanbancalcsmoothingtype**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanCalculationSmoothingType` | ✓ | |  | `cast ( right(domvalue_l, 1) as kcgla preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KanbanCalcSmoothingTypeTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCALCSMTHTYP'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Calculation Smoothing Type'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanCalculationSmoothingType'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'KanbanCalculationSmoothingType'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanCalcSmoothingType
  as select from dd07l

  association [0..*] to I_KanbanCalcSmoothingTypeTxt as _Text on $projection.KanbanCalculationSmoothingType = _Text.KanbanCalculationSmoothingType

{
      @ObjectModel.text.association: '_Text'
  key cast ( right(domvalue_l, 1) as kcgla preserving type) as KanbanCalculationSmoothingType,
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,
      _Text
}
where
      domname  = 'KCGLA'
  and as4local = 'A'
```
