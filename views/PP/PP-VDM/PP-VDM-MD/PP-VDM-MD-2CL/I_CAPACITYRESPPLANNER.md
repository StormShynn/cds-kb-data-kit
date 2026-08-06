---
name: I_CAPACITYRESPPLANNER
description: Capacityrespplanner
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_CAPACITYRESPPLANNER

**Capacityrespplanner**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CapacityResponsiblePlanner` | `cast(plnr.planr as kapplaner preserving type)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CapacityRespPlannerText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPCAPRESPPLNR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CapacityResponsiblePlanner'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Ent Rsce Capacity Responsible Planner'
@ObjectModel.sapObjectNodeType.name: 'EntRsceCapResponsiblePlanner'

define view I_CapacityRespPlanner
  as select from tc27 as plnr
  association [0..*] to I_CapacityRespPlannerText as _Text on $projection.CapacityResponsiblePlanner = _Text.CapacityResponsiblePlanner
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}    
  key cast(plnr.planr as kapplaner preserving type) as CapacityResponsiblePlanner,

      // Associations
      _Text
};
```
