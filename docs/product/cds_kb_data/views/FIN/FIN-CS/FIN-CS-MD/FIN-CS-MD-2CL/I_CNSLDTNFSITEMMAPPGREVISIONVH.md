---
name: I_CNSLDTNFSITEMMAPPGREVISIONVH
description: "Cnsldtnfsitemmappgrevisionvh"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMMAPPGREVISIONVH

**Cnsldtnfsitemmappgrevisionvh**

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
| `CnsldtnFSItemMapping` | ✓ | | `_Source` | `CnsldtnFSItemMapping` |  |  |
| `CnsldtnFSItemMappingRevision` | ✓ | | `_Source` | `CnsldtnFSItemMappingRevision` |  |  |
| `CnsldtnFSItemMappgRevisionText` |  | |  | `cast( _Source._Text[1: Language=$session.system_language].CnsldtnFSItemMappgRevisionText as fincs_description_text_60 preserving type )` |  |  |

## Source Code

```abap
@Analytics: {
//  dataExtraction.enabled: true,
  technicalName: 'ICSFSITEMMAPPGREVISIONVH'
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
  representativeKey: 'CnsldtnFSItemMappingRevision',
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@Consumption.ranked:true
@EndUserText.label: 'Consolidation FS Item Mapping Revision'
define view entity I_CnsldtnFSItemMappgRevisionVH
  as select from I_CnsldtnFSItemMappingRevision as _Source

{

      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnChartOfAccountsVH',
          element: 'ConsolidationChartOfAccounts'
        }
      }]
  key _Source.ConsolidationChartOfAccounts,

      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_ChartOfAccountsStdVH', // official value help from accounting
          element: 'ChartOfAccounts'
        }
      }]
  key _Source.ChartOfAccounts,

      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFSItemMappingVH',
          element: 'CnsldtnFSItemMapping'
        }
      }]
  key _Source.CnsldtnFSItemMapping,

      @ObjectModel.text.element: ['CnsldtnFSItemMappgRevisionText']
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key _Source.CnsldtnFSItemMappingRevision,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      cast( _Source._Text[1: Language=$session.system_language].CnsldtnFSItemMappgRevisionText as fincs_description_text_60 preserving type ) as CnsldtnFSItemMappgRevisionText

}
```
