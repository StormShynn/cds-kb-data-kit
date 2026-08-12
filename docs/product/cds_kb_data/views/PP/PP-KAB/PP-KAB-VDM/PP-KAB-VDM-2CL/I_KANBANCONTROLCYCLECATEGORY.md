---
name: I_KANBANCONTROLCYCLECATEGORY
description: "Kanbancontrolcyclecategory"
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
# I_KANBANCONTROLCYCLECATEGORY

**Kanbancontrolcyclecategory**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanControlCycleCategory` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 1) as pph_rksta preserving type)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KanbanControlCycleCatText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKANBANCCCAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Control Cycle Category Code'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanControlCycleCategory'
@ObjectModel.semanticKey: ['KanbanControlCycleCategory']
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #META}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'KanbanControlCycleCategory'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@Metadata.ignorePropagatedAnnotations:true 

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_KanbanControlCycleCategory
  as select from dd07l as l
  association [0..*] to I_KanbanControlCycleCatText as _Text on $projection.KanbanControlCycleCategory = _Text.KanbanControlCycleCategory

  {
      @ObjectModel.text.association: '_Text'
      // cast to data element  
  key cast(substring(l.domvalue_l, 1, 1) as pph_rksta preserving type) as KanbanControlCycleCategory,

      // Associations 
      _Text
  }
  where l.domname = 'RKSTA' and
        l.as4local = 'A';
```
