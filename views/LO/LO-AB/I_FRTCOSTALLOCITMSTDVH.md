---
name: I_FRTCOSTALLOCITMSTDVH
description: Frtcostallocitmstdvh
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
  - component:LO-AB
  - lob:Logistics General
---
# I_FRTCOSTALLOCITMSTDVH

**Frtcostallocitmstdvh**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FreightCostAllocationDocument` | ✓ | |  |  |
| `FrtCostAllocDocumentItem` | ✓ | |  |  |
| `_FrtCostAllocDoc` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Freight Cost Allocation Document Item'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'FrtCostAllocDocumentItem',
  modelingPattern:       #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY], 
  usageType: {
    serviceQuality: #C,
    dataClass:      #TRANSACTIONAL,
    sizeCategory:   #XXL
  }
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_FrtCostAllocItmStdVH
  as select from I_FrtCostAllocItm
 
{
      @ObjectModel.foreignKey.association: '_FrtCostAllocDoc'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key FreightCostAllocationDocument,
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 1.0, ranking: #LOW }
  key FrtCostAllocDocumentItem,

      /* Required for DCL */
      @Consumption.hidden: true
      _FrtCostAllocDoc
}
```
