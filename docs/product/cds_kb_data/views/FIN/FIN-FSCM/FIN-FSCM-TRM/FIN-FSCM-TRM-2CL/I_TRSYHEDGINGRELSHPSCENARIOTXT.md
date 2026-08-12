---
name: I_TRSYHEDGINGRELSHPSCENARIOTXT
description: "Trsyhedgingrelshpscenariotxt"
app_component: FIN-FSCM-TRM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
