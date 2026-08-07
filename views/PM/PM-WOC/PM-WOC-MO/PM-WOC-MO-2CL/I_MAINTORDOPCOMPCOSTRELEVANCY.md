---
name: I_MAINTORDOPCOMPCOSTRELEVANCY
description: Maintordopcompcostrelevancy
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDOPCOMPCOSTRELEVANCY

**Maintordopcompcostrelevancy**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrdOpCompCostingRelevancy` | ✓ | |  | `selkz` |  |  |
| `_MaintOrdOpCompCostRelevancyT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintOrdOpCompCostRelevancyT` | `I_MaintOrdOpCompCostRelevancyT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Maint Order Component Costing Relevancy'
@ObjectModel.representativeKey: 'MaintOrdOpCompCostingRelevancy'
@Analytics.technicalName: 'IMORDCOMPCOSTREL'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@ObjectModel.resultSet.sizeCategory: #XS
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

define view entity I_MaintOrdOpCompCostRelevancy
  as select from tck08
  association [0..*] to I_MaintOrdOpCompCostRelevancyT as _MaintOrdOpCompCostRelevancyT on $projection.MaintOrdOpCompCostingRelevancy = _MaintOrdOpCompCostRelevancyT.MaintOrdOpCompCostingRelevancy

{
      @ObjectModel.text.association: '_MaintOrdOpCompCostRelevancyT'
  key selkz as MaintOrdOpCompCostingRelevancy,
      _MaintOrdOpCompCostRelevancyT
}
```
