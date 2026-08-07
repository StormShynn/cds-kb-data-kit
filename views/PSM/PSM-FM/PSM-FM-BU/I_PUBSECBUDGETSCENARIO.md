---
name: I_PUBSECBUDGETSCENARIO
description: Pubsecbudgetscenario
app_component: PSM-FM-BU
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-BU
  - interface-view
  - component:PSM-FM-BU
  - lob:Other
---
# I_PUBSECBUDGETSCENARIO

**Pubsecbudgetscenario**

| Property | Value |
|---|---|
| App Component | `PSM-FM-BU` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BudgetScenario` | ✓ | |  | `cast( dd07l.domvalue_l as psm_s4c_budget_scenario )` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDSCEN'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.viewType: #BASIC
@Analytics: {
     dataCategory: #DIMENSION,
     dataExtraction.enabled: true,
     internalName: #LOCAL
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #VALUE_HELP,
     sapObjectNodeType.name: 'BudgetScenario',     
     representativeKey: 'BudgetScenario',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     resultSet.sizeCategory: #XS,
     supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

@EndUserText.label: 'Budget Scenario for Public Sector'
define root view I_PubSecBudgetScenario
  as select from dd07l
  composition [0..*] of I_PubSecBudgetScenarioText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as psm_s4c_budget_scenario ) as BudgetScenario,
      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                    as DomainValue,

      _Text

}
where
      domname  = 'PSM_S4C_BUDGET_SCENARIO'
  and as4local = 'A'
```
