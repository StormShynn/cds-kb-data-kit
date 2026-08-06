---
name: I_CNSLDTNFSITEMDATACOLLVH
description: Cnsldtnfsitemdatacollvh
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
# I_CNSLDTNFSITEMDATACOLLVH

**Cnsldtnfsitemdatacollvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CnsldtnFSItemDataCollection` | `_CnsldtnFSItemDataCollection.CnsldtnFSItemDataCollection` |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSIDATCOLVH',
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
    representativeKey: 'CnsldtnFSItemDataCollection',
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
@EndUserText.label: 'FS Item Data Collection Selection'

define view I_CnsldtnFSItemDataCollVH
  as select from I_CnsldtnFSItemDataColl as _CnsldtnFSItemDataCollection

{

      @ObjectModel.text.element: 'CnsldtnFSItemDataCollText'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key _CnsldtnFSItemDataCollection.CnsldtnFSItemDataCollection,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _CnsldtnFSItemDataCollection._Text[1: Language=$session.system_language].CnsldtnFSItemDataCollText,

      @Semantics.text
      _CnsldtnFSItemDataCollection._Text[1: Language=$session.system_language].CnsldtnFSItemDataCollLongText

}
```
