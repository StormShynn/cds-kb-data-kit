---
name: I_PRODUCTIONORDERTYPESTDVH
description: "Production OrderTYPESTDVH"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - value-help
  - standard-value-help
  - product
  - production-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERTYPESTDVH

**Production OrderTYPESTDVH**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionOrderType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IPRODNORDTYPESVH'
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'ProductionOrderType'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Production Order Type'

define view entity I_ProductionOrderTypeStdVH
  as select from I_ProductionOrderType

{
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.association: '_Text'
  key ProductionOrderType,

      // Associations
      _Text
};
```
