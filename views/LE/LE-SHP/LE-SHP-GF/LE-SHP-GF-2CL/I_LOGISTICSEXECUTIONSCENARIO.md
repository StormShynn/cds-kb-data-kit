---
name: I_LOGISTICSEXECUTIONSCENARIO
description: Logisticsexecutionscenario
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
# I_LOGISTICSEXECUTIONSCENARIO

**Logisticsexecutionscenario**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LogisticsExecutionScenario` | ✓ | |  | `cast( dd07l.domvalue_l as /spe/le_scenario)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILESCENARIO'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: false
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Logistics Execution Scenario'
@Metadata.ignorePropagatedAnnotations: true
//@ObjectModel.alternativeKey: [ { id : 'Domain',
//                                 uniqueness: #UNIQUE,
//                                 element: ['DomainValue'] } ]
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'LogisticsExecutionScenario'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                   //  #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_LogisticsExecutionScenario
  as select from dd07l
  composition [0..*] of I_LogisticsExecutionScenarioT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as /spe/le_scenario) as LogisticsExecutionScenario,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                as DomainValue,

      _Text
}
where
      dd07l.domname  = '/SPE/LE_SCENARIO'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000';
```
