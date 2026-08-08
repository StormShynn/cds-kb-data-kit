---
name: I_CNSLDTNVERSIONVH
description: "Cnsldtnversionvh"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNVERSIONVH

**Cnsldtnversionvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationVersion` | ✓ | | `_CnsldtnVersion` | `ConsolidationVersion` |  |  |
| `ConsolidationVersionText` |  | |  | `cast(_CnsldtnVersion._Text[1: Language=$session.system_language].ConsolidationVersionText as fincs_description_text_30 preserving type )` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSVERSVH',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #VALUE_HELP,
    representativeKey: 'ConsolidationVersion',
    modelingPattern: #VALUE_HELP_PROVIDER,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Version'

define view I_CnsldtnVersionVH
  as select from I_CnsldtnVersion as _CnsldtnVersion

{

      @ObjectModel.text.element: [ 'ConsolidationVersionText' ]
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key _CnsldtnVersion.ConsolidationVersion,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      cast(_CnsldtnVersion._Text[1: Language=$session.system_language].ConsolidationVersionText as fincs_description_text_30   preserving type ) as ConsolidationVersionText

}
```
