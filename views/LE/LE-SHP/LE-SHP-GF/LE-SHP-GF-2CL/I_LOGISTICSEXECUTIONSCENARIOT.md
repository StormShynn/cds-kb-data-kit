---
name: I_LOGISTICSEXECUTIONSCENARIOT
description: Logisticsexecutionscenariot
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_LOGISTICSEXECUTIONSCENARIOT

**Logisticsexecutionscenariot**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LogisticsExecutionScenario` | ✓ | |  | `cast( dd07t.domvalue_l as /spe/le_scenario )` |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `LogisticsExecutionScenarioName` |  | |  | `cast( dd07t.ddtext as vdm_le_scenario_text preserving type )` |
| `_Language` | | ✓ | | |
| `_LogisticsExecutionScenario` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILESCENARIOT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'LE Scenario - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'LogisticsExecutionScenario'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                    // #EXTRACTION_DATA_SOURCE,//
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_LogisticsExecutionScenarioT
  as select from dd07t
  association        to parent I_LogisticsExecutionScenario as _LogisticsExecutionScenario on $projection.LogisticsExecutionScenario = _LogisticsExecutionScenario.LogisticsExecutionScenario
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_LogisticsExecutionScenario'
      @ObjectModel.text.element: ['LogisticsExecutionScenarioName']
  key cast( dd07t.domvalue_l as /spe/le_scenario )                 as LogisticsExecutionScenario,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )               as Language,


      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as vdm_le_scenario_text preserving type ) as LogisticsExecutionScenarioName,

      //Associations
      _LogisticsExecutionScenario,
      _Language
}
where
      dd07t.domname  = '/SPE/LE_SCENARIO'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000';
```
