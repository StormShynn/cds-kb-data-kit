---
name: I_PERSSETTLMTDOCITEMSTDVH
description: Perssettlmtdocitemstdvh
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - value-help
  - standard-value-help
  - item-level
  - component:LO-AB
  - lob:Logistics General
---
# I_PERSSETTLMTDOCITEMSTDVH

**Perssettlmtdocitemstdvh**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonnelSettlementDocument` | ✓ | |  |  |  |  |
| `PersSettlmtDocItem` | ✓ | |  |  |  |  |
| `_PersSettlmtDoc` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Personnel Settlement Document Item'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   dataCategory: #VALUE_HELP,
   representativeKey: 'PersSettlmtDocItem',
   modelingPattern:       #VALUE_HELP_PROVIDER,
   supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XXL
   }
}
@Search.searchable: true
@Analytics: {
    internalName: #LOCAL
} 
@Metadata.ignorePropagatedAnnotations: true

define view entity I_PersSettlmtDocItemStdVH 
  as select from I_PersSettlmtDocItem
{
      @ObjectModel.foreignKey.association: '_PersSettlmtDoc'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key PersonnelSettlementDocument,

  key PersSettlmtDocItem,

      @Consumption.hidden: true
      _PersSettlmtDoc
}
```
