---
name: I_KANBANSTATUSTEXT
description: "Kanbanstatustext"
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
  - status
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANSTATUSTEXT

**Kanbanstatustext**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanStatus` | ✓ | |  | `cast(substring(txt.domvalue_l, 1, 1) as pkbst preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `KanbanStatusName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKANBANSTSTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Status - Text'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanStatus'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations:true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_KanbanStatusText
  as select from dd07t as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'KanbanStatusName'
  key cast(substring(txt.domvalue_l, 1, 1) as pkbst preserving type) as KanbanStatus,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.ddlanguage as Language,
      @Semantics.text: true
      txt.ddtext     as KanbanStatusName,

      // Associations
      _Language
}
where
      domname  = 'PKBST'
  and as4local = 'A';
```
