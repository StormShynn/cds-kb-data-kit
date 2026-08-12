---
name: I_KANBANCTNCALCTYPETEXT
description: "Kanbanctncalctypetext"
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
  - text-view
  - text
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCTNCALCTYPETEXT

**Kanbanctncalctypetext**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanContainerCalculationType` | ✓ | |  | `cast(substring(txt.domvalue_l, 1, 1) as kcart preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.ddlanguage as spras preserving type)` |  |  |
| `KanbanContainerCalcTypeName` |  | |  | `cast(txt.ddtext as vdm_knbncntncalctypename preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_KanbanCtnCalcType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KanbanCtnCalcType` | `I_KanbanCtnCalcType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNCALCTPTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter:true
@EndUserText.label: 'Kanban Container Calculation Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanContainerCalculationType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

@Search.searchable: true

define view I_KanbanCtnCalcTypeText 
  as select from dd07t as txt
  association [1..1] to I_KanbanCtnCalcType as _KanbanCtnCalcType on $projection.KanbanContainerCalculationType = _KanbanCtnCalcType.KanbanContainerCalculationType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'KanbanContainerCalcTypeName'
  key cast(substring(txt.domvalue_l, 1, 1) as kcart preserving type) as KanbanContainerCalculationType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.ddlanguage as spras preserving type)                      as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast(txt.ddtext as vdm_knbncntncalctypename preserving type)       as KanbanContainerCalcTypeName,
      @Consumption.hidden:true
      @Analytics.hidden:true
      txt.domvalue_l as DomainValue,
      // Associations
      _Language,
      _KanbanCtnCalcType                                      
}
where
      domname  = 'KCART'
  and as4local = 'A';
```
