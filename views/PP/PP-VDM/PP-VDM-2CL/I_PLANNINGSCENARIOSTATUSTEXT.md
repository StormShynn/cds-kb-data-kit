---
name: I_PLANNINGSCENARIOSTATUSTEXT
description: "Planningscenariostatustext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - status
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNINGSCENARIOSTATUSTEXT

**Planningscenariostatustext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPPlanningScenarioStatus` | ✓ | |  | `cast( substring(txt.domvalue_l, 1, 1) as psact preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `MRPPlanningScenarioStatusName` |  | |  | `ddtext` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_PlanningScenarioStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PlanningScenarioStatus` | `I_PlanningScenarioStatus` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPPPLNGSCENSTSTX'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'MRPPlanningScenarioStatus'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Planning Scenario Status - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_PlanningScenarioStatusText
  as select from dd07t as txt
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association [1..1] to I_PlanningScenarioStatus as _PlanningScenarioStatus on $projection.MRPPlanningScenarioStatus = _PlanningScenarioStatus.MRPPlanningScenarioStatus
{
      @ObjectModel.foreignKey.association: '_PlanningScenarioStatus'
      @ObjectModel.text.element: ['MRPPlanningScenarioStatusName']
  key cast( substring(txt.domvalue_l, 1, 1) as psact preserving type) as MRPPlanningScenarioStatus,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.ddlanguage as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.ddtext     as MRPPlanningScenarioStatusName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      txt.domvalue_l as DomainValue,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _PlanningScenarioStatus,
      _Language
}
  where txt.domname = 'PSSTA' and
        txt.as4local = 'A' and
        txt.as4vers  = '0000';
```
