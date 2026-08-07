---
name: I_KANBANSTATUS
description: Kanbanstatus
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
  - status
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANSTATUS

**Kanbanstatus**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `KanbanStatus` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 1) as pkbst preserving type)` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KanbanStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKANBANSTS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Status Code'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanStatus'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations:true

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_KanbanStatus
  as select from dd07l as l
  association [0..*] to I_KanbanStatusText as _Text on $projection.KanbanStatus = _Text.KanbanStatus
{
      @ObjectModel.text.association: '_Text'
      // cast to data element
  key cast(substring(l.domvalue_l, 1, 1) as pkbst preserving type) as KanbanStatus,

      // Associations
      _Text
}
where
      l.domname  = 'PKBST'
  and l.as4local = 'A';
```
