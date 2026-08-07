---
name: I_CNSLDTNFSITEMMAPPINGASSGMT
description: "Cnsldtnfsitemmappingassgmt"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMMAPPINGASSGMT

**Cnsldtnfsitemmappingassgmt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | | `_Source` | `ConsolidationChartOfAccounts` |  |  |
| `ChartOfAccounts` | ✓ | | `_Source` | `ChartOfAccounts` |  |  |
| `ConsolidationVersion` | ✓ | | `_Source` | `ConsolidationVersion` |  |  |
| `FromFiscalYearPeriod` | ✓ | | `_Source` | `FromFiscalYearPeriod` |  |  |
| `ToFiscalYearPeriod` |  | | `_Source` | `ToFiscalYearPeriod` |  |  |
| `CnsldtnFSItemMapping` |  | | `_Source` | `CnsldtnFSItemMapping` |  |  |
| `CnsldtnFSItemMappingRevision` |  | | `_Source` | `CnsldtnFSItemMappingRevision` |  |  |
| `ETag` |  | | `_Source` | `ETag` |  |  |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  },
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
  sapObjectNodeType.name: 'CnsldtnFSItemMappingAssgmt'
}
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation FS Item Mapping Assignment'
define view entity I_CnsldtnFSItemMappingAssgmt
  as select from P_CnsldtnFSItemMappingAssgmt as _Source

{

      @ObjectModel.foreignKey.association: '_CnsldtnChartOfAccounts'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnChartOfAccountsVH',
          element: 'ConsolidationChartOfAccounts'
        }
      }]
  key _Source.ConsolidationChartOfAccounts,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_ChartOfAccountsStdVH', // official value help from accounting
          element: 'ChartOfAccounts'
        }
      }]
  key _Source.ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_CnsldtnVersion'
      @Search:{
        defaultSearchElement: true,
        ranking: #MEDIUM,
        fuzzinessThreshold: 0.8
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnVersionVH',
          element: 'ConsolidationVersion'
        }
      }]
  key _Source.ConsolidationVersion,

      @Semantics.fiscal.yearPeriod: true
  key _Source.FromFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
      _Source.ToFiscalYearPeriod,

      @ObjectModel.foreignKey.association: '_CnsldtnFSItemMapping'
      @Consumption.valueHelpDefinition: [{
       entity: {
         name: 'I_CnsldtnFSItemMappingVH',
         element: 'CnsldtnFSItemMapping'
       }
      }]
      _Source.CnsldtnFSItemMapping,

      @ObjectModel.foreignKey.association: '_CnsldtnFSItemMappingRevision'
      @Consumption.valueHelpDefinition: [{
       entity: {
         name: 'I_CnsldtnFSItemMappgRevisionVH',
         element: 'CnsldtnFSItemMappingRevision'
       },
       additionalBinding: [
         {
           localElement: 'ConsolidationChartOfAccounts',
           element: 'ConsolidationChartOfAccounts',
           usage: #FILTER_AND_RESULT
         },
         {
           localElement: 'ChartOfAccounts',
           element: 'ChartOfAccounts',
           usage: #FILTER_AND_RESULT
         },
         {
           localElement: 'CnsldtnFSItemMapping',
           element: 'CnsldtnFSItemMapping',
           usage: #FILTER_AND_RESULT
         }
       ]
      }]
      _Source.CnsldtnFSItemMappingRevision,
      
      @UI.hidden: true
      _Source.ETag,


      /* Associations */
      _Source._CnsldtnChartOfAccounts,
      _Source._ChartOfAccounts,
      _Source._CnsldtnVersion,
      _Source._CnsldtnFSItemMapping,
      _Source._CnsldtnFSItemMappingRevision

}
```
