---
name: I_KNBNCTRLCYCLIFECYCSTSTXT
description: Knbnctrlcyclifecycststxt
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
# I_KNBNCTRLCYCLIFECYCSTSTXT

**Knbnctrlcyclifecycststxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanCtrlCycleLifeCycleStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as vdm_lcm_status preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |  |  |
| `KnbnCtrlCycLifeCycStsText` |  | |  | `cast(ddtext as vdm_lcm_status_text preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_KnbnControlCycLifeCycSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KnbnControlCycLifeCycSts` | `I_KnbnControlCycLifeCycSts` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNCCLFSTSTX'
@EndUserText.label: 'Kanban Control Cycle Life Cycle Status - Text'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanCtrlCycleLifeCycleStatus'
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #S, dataClass: #META}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

@Search.searchable: true

define view I_KnbnCtrlCycLifeCycStsTxt
  as select from dd07t
  association [1..1] to I_KnbnControlCycLifeCycSts as _KnbnControlCycLifeCycSts on $projection.KanbanCtrlCycleLifeCycleStatus = _KnbnControlCycLifeCycSts.KanbanCtrlCycleLifeCycleStatus

  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language


{
      @ObjectModel.foreignKey.association: '_KnbnControlCycLifeCycSts'
  key cast(substring(domvalue_l, 1, 1) as vdm_lcm_status preserving type) as KanbanCtrlCycleLifeCycleStatus,
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type)                           as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast(ddtext as vdm_lcm_status_text preserving type)                 as KnbnCtrlCycLifeCycStsText,
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,
      
      _KnbnControlCycLifeCycSts,
      _Language

}
where
      domname  = 'LCM_STATUS'
  and as4local = 'A';
```
