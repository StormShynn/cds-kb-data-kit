---
name: I_KNBNREPLNMTSTRGYTYPETXT
description: "Knbnreplnmtstrgytypetxt"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
# I_KNBNREPLNMTSTRGYTYPETXT

**Knbnreplnmtstrgytypetxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanReplenishmentStrgyType` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as pk_replenishment_type preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |  |  |
| `KanbanReplnmtStrgyTypeText` |  | |  | `cast(ddtext as vdm_repl_strategy_type_text preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_KnbnReplnmtStrgyTypes` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

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
