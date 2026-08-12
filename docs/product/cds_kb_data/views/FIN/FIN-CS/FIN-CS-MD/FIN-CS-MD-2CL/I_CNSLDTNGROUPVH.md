---
name: I_CNSLDTNGROUPVH
description: "Cnsldtngroupvh"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGROUPVH

**Cnsldtngroupvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationGroup` | ✓ | | `_Source` | `ConsolidationGroup` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCGROUPVH',
  compiler.compareFilter: true,
  preserveKey:true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #S
  },
  representativeKey: 'ConsolidationGroup',
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
@EndUserText.label: 'Consolidation Group'
define view I_CnsldtnGroupVH
  as select from I_CnsldtnGroup_3 as _Source

{

      @ObjectModel.text.element: ['ConsolidationGroupText']
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key _Source.ConsolidationGroup,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _Source._Text[1: Language=$session.system_language].ConsolidationGroupText

}
```
