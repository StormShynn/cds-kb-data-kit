---
name: I_CNSLDTNVERSIONRUNMODEVH
description: "Cnsldtnversionrunmodevh"
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
# I_CNSLDTNVERSIONRUNMODEVH

**Cnsldtnversionrunmodevh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnVersionRunMode` | ✓ | | `_CnsldtnVersionRunMode` | `CnsldtnVersionRunMode` |  |  |
| `DomainValue` |  | | `_CnsldtnVersionRunMode` | `DomainValue` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSVERSRMVH',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #VALUE_HELP,
    resultSet.sizeCategory: #XS,
    representativeKey: 'CnsldtnVersionRunMode',
    modelingPattern: #VALUE_HELP_PROVIDER,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Consolidation Version Run Mode'

define view I_CnsldtnVersionRunModeVH
  as select from I_CnsldtnVersionRunMode as _CnsldtnVersionRunMode

{

      @ObjectModel.text.element: [ 'CnsldtnVersionRunModeText' ]
  key _CnsldtnVersionRunMode.CnsldtnVersionRunMode,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _CnsldtnVersionRunMode._Text[1: Language=$session.system_language].CnsldtnVersionRunModeText,


      @Consumption : {
        hidden: true
      }
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      _CnsldtnVersionRunMode.DomainValue // required for search

}
```
