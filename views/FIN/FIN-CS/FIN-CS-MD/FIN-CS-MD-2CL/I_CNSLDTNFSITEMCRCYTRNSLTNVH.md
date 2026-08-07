---
name: I_CNSLDTNFSITEMCRCYTRNSLTNVH
description: Cnsldtnfsitemcrcytrnsltnvh
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
# I_CNSLDTNFSITEMCRCYTRNSLTNVH

**Cnsldtnfsitemcrcytrnsltnvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CnsldtnFSItemCrcyTranslation` | ✓ | | `_CnsldtnFSItemCrcyTrnsltn` | `CnsldtnFSItemCrcyTranslation` |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSICTVH',
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
    representativeKey: 'CnsldtnFSItemCrcyTranslation',
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
@EndUserText.label: 'FS Item Currency Translation Selection'

define view I_CnsldtnFSItemCrcyTrnsltnVH
  as select from I_CnsldtnFSItemCrcyTrnsltn as _CnsldtnFSItemCrcyTrnsltn

{

      @ObjectModel.text.element: ['CnsldtnFSItemCrcyTrnsltnText']
      @Search:{ defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key _CnsldtnFSItemCrcyTrnsltn.CnsldtnFSItemCrcyTranslation,

      @Semantics.text
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      _CnsldtnFSItemCrcyTrnsltn._Text[1: Language=$session.system_language].CnsldtnFSItemCrcyTrnsltnText,

      @Semantics.text
      _CnsldtnFSItemCrcyTrnsltn._Text[1: Language=$session.system_language].CnsldtnFSItmCrcyTrnsltnLongTxt

}
```
