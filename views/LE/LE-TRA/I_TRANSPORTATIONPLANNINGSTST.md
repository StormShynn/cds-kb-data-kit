---
name: I_TRANSPORTATIONPLANNINGSTST
description: Transportationplanningstst
app_component: LE-TRA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-TRA
  - interface-view
  - transport
  - component:LE-TRA
  - lob:Logistics Execution
---
# I_TRANSPORTATIONPLANNINGSTST

**Transportationplanningstst**

| Property | Value |
|---|---|
| App Component | `LE-TRA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TransportationPlanningStatus` | `statu` |
| key `Language` | `spras` |
| `TransportationPlanningStsDesc` | `bezei` |
| `_TransportationPlanningSts` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TransportationPlanningSts` | `I_TransportationPlanningSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TransportationPlanningStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY ]
@EndUserText.label: 'Transportation Planning Status Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDTRSPTPLNGSTST'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_TransportationPlanningStsT
  as select from tvbst

  association [0..1] to I_TransportationPlanningSts as _TransportationPlanningSts on $projection.TransportationPlanningStatus = _TransportationPlanningSts.TransportationPlanningStatus
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TransportationPlanningSts'
      @ObjectModel.text.element: ['TransportationPlanningStsDesc']
  key statu as TransportationPlanningStatus,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      bezei as TransportationPlanningStsDesc,

      //Associations
      _TransportationPlanningSts,
      _Language
}
where
      tvbst.tbnam = 'LIKP'
  and tvbst.fdnam = 'TRSTA'
```
