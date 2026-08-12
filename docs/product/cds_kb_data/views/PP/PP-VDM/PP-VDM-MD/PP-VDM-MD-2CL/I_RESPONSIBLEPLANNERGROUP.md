---
name: I_RESPONSIBLEPLANNERGROUP
description: "Responsibleplannergroup"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_RESPONSIBLEPLANNERGROUP

**Responsibleplannergroup**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |  |  |
| `ResponsiblePlannerGroup` | ✓ | |  | `cast(t024a.fevor as vagrp preserving type)` |  |  |
| `ResponsiblePlannerGroupName` |  | |  | `cast(t024a.txt as disptxt preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPRESPPLANRGRP'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'ResponsiblePlannerGroup'
@ObjectModel.sapObjectNodeType.name: 'ResponsiblePlannerGroup'
@ObjectModel.semanticKey: ['Plant', 'ResponsiblePlannerGroup']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Responsible Planner Group'

define view I_ResponsiblePlannerGroup
  as select from t024a as t024a
  
  association [1..1] to I_Plant as _Plant on $projection.Plant = _Plant.Plant      
{
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key t024a.werks as Plant,
      @ObjectModel.text.element: ['ResponsiblePlannerGroupName']
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(t024a.fevor as vagrp preserving type) as ResponsiblePlannerGroup,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(t024a.txt as disptxt preserving type) as ResponsiblePlannerGroupName,

      //Associations
      _Plant
};
```
