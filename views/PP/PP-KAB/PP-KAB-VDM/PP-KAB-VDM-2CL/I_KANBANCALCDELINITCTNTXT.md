---
name: I_KANBANCALCDELINITCTNTXT
description: Kanbancalcdelinitctntxt
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
# I_KANBANCALCDELINITCTNTXT

**Kanbancalcdelinitctntxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `KanbanCalcDelInitCtns` | `cast(substring(domvalue_l, 1, 1) as loewg preserving type)` |
| key `Language` | `cast(ddlanguage as spras preserving type)` |
| `KanbanCalcDelInitCtnsName` | `cast(ddtext as vdm_delinitctns_text preserving type)` |
| `DomainValue` | `domvalue_l` |
| `_KnbnCalcDelInitialCtn` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KnbnCalcDelInitialCtn` | `I_KanbanCalcDelInitCtn` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCLCDELINITTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Calculation Delete Initial Containers - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanCalcDelInitCtns'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

define view I_KanbanCalcDelInitCtnTxt
  as select from dd07t
  association [1..1] to I_KanbanCalcDelInitCtn  as _KnbnCalcDelInitialCtn on $projection.KanbanCalcDelInitCtns = _KnbnCalcDelInitialCtn.KanbanCalcDelInitCtns

  association [0..1] to I_Language                as _Language            on $projection.Language = _Language.Language


{
      @ObjectModel.foreignKey.association: '_KnbnCalcDelInitialCtn'
  key cast(substring(domvalue_l, 1, 1) as loewg preserving type)    as KanbanCalcDelInitCtns,
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type)                     as Language,

      @Semantics.text: true
      cast(ddtext as vdm_delinitctns_text preserving type)          as KanbanCalcDelInitCtnsName,
      
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,

      _KnbnCalcDelInitialCtn,
      _Language

}
where
      domname  = 'LOEWN'
  and as4local = 'A';
```
