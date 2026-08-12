---
name: I_CNSLDTNFSITEMSCOPEVH
description: "Cnsldtnfsitemscopevh"
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
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMSCOPEVH

**Cnsldtnfsitemscopevh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnFSItemScope` | ✓ | | `_CnsldtnFSItemScope` | `CnsldtnFSItemScope` |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSISCOPEVH',
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
    representativeKey: 'CnsldtnFSItemScope',
    modelingPattern: #VALUE_HELP_PROVIDER,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'FS Item Scope Selection'

define view I_CnsldtnFSItemScopeVH
  as select from I_CnsldtnFSItemScope as _CnsldtnFSItemScope

{

      @ObjectModel.text.element: 'CnsldtnFSItemScopeText'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key _CnsldtnFSItemScope.CnsldtnFSItemScope,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _CnsldtnFSItemScope._Text[1: Language=$session.system_language].CnsldtnFSItemScopeText,

      @Semantics.text
      _CnsldtnFSItemScope._Text[1: Language=$session.system_language].CnsldtnFSItemScopeLongText

}
```
