---
name: I_KANBANCONTROLCYCLECATTEXT
description: "Kanbancontrolcyclecattext"
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
  - text-view
  - text
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCONTROLCYCLECATTEXT

**Kanbancontrolcyclecattext**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanControlCycleCategory` | ✓ | |  | `cast(substring(txt.domvalue_l, 1, 1) as pph_rksta preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(txt.ddlanguage as spras preserving type)` |  |  |
| `KanbanControlCycleCategoryName` |  | |  | `cast(txt.ddtext as controlcyclecategoryname preserving type)` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKANBANCCCATTX'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Control Cycle Category - Text'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanControlCycleCategory'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #META}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations:true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanControlCycleCatText
  as select from dd07t as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'KanbanControlCycleCategoryName'
  key cast(substring(txt.domvalue_l, 1, 1) as pph_rksta preserving type) as KanbanControlCycleCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(txt.ddlanguage as spras preserving type)                      as Language,
      @Semantics.text: true
      cast(txt.ddtext as controlcyclecategoryname preserving type)       as KanbanControlCycleCategoryName,

      // Associations
      _Language
}
where
      domname  = 'RKSTA'
  and as4local = 'A';
```
