---
name: I_WORKCENTERRESPONSIBLE
description: "Work CenterRESPONSIBLE"
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
  - work-center
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERRESPONSIBLE

**Work CenterRESPONSIBLE**

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
| `WorkCenterResponsible` | ✓ | |  | `cast(tc24.veran as ap_veran preserving type)` |  |  |
| `WorkCenterResponsibleName` |  | |  | `cast(tc24.ktext as pph_veranname preserving type)` |  |  |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPWORKCNTRRESP'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'WorkCenterResponsible'
@ObjectModel.semanticKey: ['Plant', 'WorkCenterResponsible']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center Responsible'
@ObjectModel.sapObjectNodeType.name: 'WorkCenterResponsible'
@Analytics.dataExtraction.enabled: true

define view I_WorkCenterResponsible
  as select from tc24 as tc24

  association [1..1] to I_Plant as _Plant on $projection.Plant = _Plant.Plant
{
      // Key
      @ObjectModel.foreignKey.association: '_Plant'
  key tc24.werks                                        as Plant,
      @ObjectModel.text.element: 'WorkCenterResponsibleName'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(tc24.veran as ap_veran preserving type)      as WorkCenterResponsible,

      // Name
      @Semantics.text: true
      cast(tc24.ktext as pph_veranname preserving type) as WorkCenterResponsibleName,

      // Associations
      _Plant
};
```
