---
name: I_KNBNREPLNMTSTRGYTYPETXT
description: Knbnreplnmtstrgytypetxt
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
# I_KNBNREPLNMTSTRGYTYPETXT

**Knbnreplnmtstrgytypetxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `KanbanReplenishmentStrgyType` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as pk_replenishment_type preserving type)` |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |
| `KanbanReplnmtStrgyTypeText` |  | |  | `cast(ddtext as vdm_repl_strategy_type_text preserving type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_KnbnReplnmtStrgyTypes` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KnbnReplnmtStrgyTypes` | `I_KnbnReplnmtStrgyType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNSTRTYPTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Replenishment Strategy Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanReplenishmentStrgyType'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

define view I_KnbnReplnmtStrgyTypeTxt
  as select from dd07t
  association [1..1] to I_KnbnReplnmtStrgyType as _KnbnReplnmtStrgyTypes on $projection.KanbanReplenishmentStrgyType = _KnbnReplnmtStrgyTypes.KanbanReplenishmentStrgyType

  association [0..1] to I_Language             as _Language              on $projection.Language = _Language.Language


{
      @ObjectModel.foreignKey.association: '_KnbnReplnmtStrgyTypes'
  key cast(substring(domvalue_l, 1, 1) as pk_replenishment_type preserving type) as KanbanReplenishmentStrgyType,
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type)                                  as Language,

      @Semantics.text: true
      cast(ddtext as vdm_repl_strategy_type_text preserving type)                as KanbanReplnmtStrgyTypeText,
      
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,

      _KnbnReplnmtStrgyTypes,
      _Language

}
where
      domname  = 'PK_REPLENISHMENT_TYPE'
  and as4local = 'A';
```
