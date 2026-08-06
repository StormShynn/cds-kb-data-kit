---
name: I_CNSLDTNCOSTCENTERVH
description: CNSLDTNCost CenterVH
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - cost-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:CostCenter
---
# I_CNSLDTNCOSTCENTERVH

**CNSLDTNCost CenterVH**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ControllingArea` | `ControllingArea` |
| key `CostCenter` | `CostCenter` |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCOSTCENTERVH',
  compiler.compareFilter: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'CostCenter',
  semanticKey: ['ControllingArea', 'CostCenter'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Consolidation Cost Center'

define view I_CnsldtnCostCenterVH
  as select from I_CnsldtnCostCenter as _CnsldtnCostCenter

{

      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
      @Search:{ defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      @Consumption.valueHelpDefault.binding.usage:#FILTER_AND_RESULT
  key ControllingArea,

      @ObjectModel.text.element: ['CostCenterName']
      @Search:{ defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Consumption.valueHelpDefault.binding.usage:#FILTER_AND_RESULT
  key CostCenter,

      @Semantics.text
      @Search:{ defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8 }
      _CnsldtnCostCenter._Text[1: Language=$session.system_language].CostCenterName
}
```
