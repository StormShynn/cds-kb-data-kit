---
name: I_CNSLDTNFSITEMMAPPINGVH
description: Cnsldtnfsitemmappingvh
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMMAPPINGVH

**Cnsldtnfsitemmappingvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CnsldtnFSItemMapping` | `_Source.CnsldtnFSItemMapping` |
| `CnsldtnFSItemMappingText` | `cast( _Source._Text[1: Language=$session.system_language].CnsldtnFSItemMappingText as fincs_description_text_60 preserving type )` |

## Source Code

```abap
//@Analytics: {
//  dataExtraction.enabled: true
//}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'CnsldtnFSItemMapping',
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
@EndUserText.label: 'Consolidation FS Item Mapping'
define view entity I_CnsldtnFSItemMappingVH
  as select from I_CnsldtnFSItemMapping as _Source

{

      @ObjectModel.text.element: ['CnsldtnFSItemMappingText']
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key _Source.CnsldtnFSItemMapping,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      cast( _Source._Text[1: Language=$session.system_language].CnsldtnFSItemMappingText as fincs_description_text_60 preserving type ) as CnsldtnFSItemMappingText

}
```
