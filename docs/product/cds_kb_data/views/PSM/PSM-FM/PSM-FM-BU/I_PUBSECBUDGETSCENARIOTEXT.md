---
name: I_PUBSECBUDGETSCENARIOTEXT
description: "Pubsecbudgetscenariotext"
app_component: PSM-FM-BU
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-BU
  - interface-view
  - text-view
  - text
  - component:PSM-FM-BU
  - lob:Other
---
# I_PUBSECBUDGETSCENARIOTEXT

**Pubsecbudgetscenariotext**

| Property | Value |
|---|---|
| App Component | `PSM-FM-BU` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `BudgetScenario` | ✓ | |  | `cast( dd07t.domvalue_l as psm_s4c_budget_scenario )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `BudgetScenarioText` |  | |  | `cast ( dd07t.ddtext as psm_s4c_budget_scenario_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PubSecBudgetScenario` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDSCENT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'BudgetScenario',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]     
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

@EndUserText.label: 'Budget Scenario for Public Sector - Text'
define view I_PubSecBudgetScenarioText
  as select from dd07t
  association        to parent I_PubSecBudgetScenario as _PubSecBudgetScenario on $projection.BudgetScenario = _PubSecBudgetScenario.BudgetScenario
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                              as Language,
      @ObjectModel.foreignKey.association: '_PubSecBudgetScenario'
      @ObjectModel.text.element: ['BudgetScenarioText']
  key cast( dd07t.domvalue_l as psm_s4c_budget_scenario )                            as BudgetScenario,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                               as DomainValue,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast ( dd07t.ddtext as psm_s4c_budget_scenario_text preserving type )          as BudgetScenarioText,

      _PubSecBudgetScenario,
      _Language

}
where
      domname  = 'PSM_S4C_BUDGET_SCENARIO'
  and as4local = 'A'
```
