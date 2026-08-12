---
name: I_CNSLDTNVERSIONTYPEVH
description: "Cnsldtnversiontypevh"
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
# I_CNSLDTNVERSIONTYPEVH

**Cnsldtnversiontypevh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnVersionType` | ✓ | | `_CnsldtnVersionType` | `CnsldtnVersionType` |  |  |
| `DomainValue` |  | | `_CnsldtnVersionType` | `DomainValue` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSVERSTYPVH',
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
    representativeKey: 'CnsldtnVersionType',
    modelingPattern: #VALUE_HELP_PROVIDER,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Consolidation Version Type'

define view I_CnsldtnVersionTypeVH
  as select from I_CnsldtnVersionType as _CnsldtnVersionType

{

      @ObjectModel.text.element: [ 'CnsldtnVersionTypeText' ]
  key _CnsldtnVersionType.CnsldtnVersionType,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _CnsldtnVersionType._Text[1: Language=$session.system_language].CnsldtnVersionTypeText,


      @Consumption : {
        hidden: true
      }
      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
      _CnsldtnVersionType.DomainValue // required for search

}
```
