---
name: I_PLANNINGSCENARIOSTATUS
description: "Planningscenariostatus"
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
  - status
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_PLANNINGSCENARIOSTATUS

**Planningscenariostatus**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPPlanningScenarioStatus` | ✓ | |  | `cast( substring(l.domvalue_l, 1, 1) as psact preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlanningScenarioStatusText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPPPLNGSCENSTATS'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'MRPPlanningScenarioStatus'
@ObjectModel.sapObjectNodeType.name: 'MRPPlanningScenarioStatus'
@ObjectModel.semanticKey: ['MRPPlanningScenarioStatus']
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Planning Scenario Status'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_PlanningScenarioStatus
  as select from dd07l as l
  association [0..*] to I_PlanningScenarioStatusText as _Text on $projection.MRPPlanningScenarioStatus = _Text.MRPPlanningScenarioStatus
{
      @ObjectModel.text.association: '_Text'
      // cast to data element  
  key cast( substring(l.domvalue_l, 1, 1) as psact preserving type) as MRPPlanningScenarioStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      l.domvalue_l                                                  as DomainValue,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
  where l.domname = 'PSSTA' and
        l.as4local = 'A' and
        l.as4vers  = '0000';
```
