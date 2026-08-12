---
name: I_CNSLDTNSUBITEMVH
description: "Cnsldtnsubitemvh"
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
# I_CNSLDTNSUBITEMVH

**Cnsldtnsubitemvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SubItemCategory` | ✓ | |  |  |  |  |
| `SubItem` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSUBITEMVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel : {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  },
  representativeKey: 'SubItem',
  semanticKey: ['SubItem', 'SubItemCategory'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Subitem'

define view I_CnsldtnSubItemVH
  as select from I_CnsldtnSubItem

{
  key SubItemCategory,

      @ObjectModel.text.element:  [ 'SubItemMediumText' ]
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key SubItem,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 }
      _Text[1: Language=$session.system_language].SubItemMediumText
};
```
