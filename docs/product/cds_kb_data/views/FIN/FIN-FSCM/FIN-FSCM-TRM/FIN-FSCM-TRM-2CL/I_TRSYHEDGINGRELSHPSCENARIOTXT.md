---
name: I_TRSYHEDGINGRELSHPSCENARIOTXT
description: "Trsyhedgingrelshpscenariotxt"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRSYHEDGINGRELSHPSCENARIOTXT

**Trsyhedgingrelshpscenariotxt**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrsyHedgingRelshpScenario` | ✓ | |  | `cast(TrsyHedgingRelshpScenarioTxt.hrel_scene_cat as ftr_gen_hrel_scenario preserving type)` |  |  |
| `Language` | ✓ | |  | `lang_id` |  |  |
| `TrsyHedgingRelshpScenarioName` |  | |  | `cast(TrsyHedgingRelshpScenarioTxt.text as ftr_gen_hrel_scenario_name preserving type)` |  |  |
| `_TrsyHedgingRelshpScenario` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrsyHedgingRelshpScenario` | `I_TrsyHedgingRelshpScenario` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AbapCatalog.dataMaintenance: #NOT_ALLOWED
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL
@EndUserText.label: 'Hedging Relationship Scenario - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ITHXTSHDGSCENT'
@ObjectModel.representativeKey: 'TrsyHedgingRelshpScenario'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true // For C1-Release

define view entity I_TrsyHedgingRelshpScenarioTxt as select from thxts_hdg_scen_t as TrsyHedgingRelshpScenarioTxt

association [0..1] to I_TrsyHedgingRelshpScenario as _TrsyHedgingRelshpScenario on $projection.TrsyHedgingRelshpScenario = _TrsyHedgingRelshpScenario.TrsyHedgingRelshpScenario
association [0..1] to I_Language                  as _Language                  on $projection.Language                  = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TrsyHedgingRelshpScenario'
  key cast(TrsyHedgingRelshpScenarioTxt.hrel_scene_cat        as ftr_gen_hrel_scenario      preserving type) as TrsyHedgingRelshpScenario,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key TrsyHedgingRelshpScenarioTxt.lang_id                                                                   as Language,
      @Semantics.text: true
      cast(TrsyHedgingRelshpScenarioTxt.text                  as ftr_gen_hrel_scenario_name preserving type) as TrsyHedgingRelshpScenarioName,
      _TrsyHedgingRelshpScenario,
      _Language
}
```
