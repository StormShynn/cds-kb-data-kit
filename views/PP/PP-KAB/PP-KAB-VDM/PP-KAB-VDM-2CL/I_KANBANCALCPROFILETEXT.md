---
name: I_KANBANCALCPROFILETEXT
description: Kanbancalcprofiletext
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - text-view
  - text
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KANBANCALCPROFILETEXT

**Kanbancalcprofiletext**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanContainerCalcProfile` | ✓ | |  | `kcprf` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `KanbanContainerCalcProfileName` |  | |  | `kcprt` |  |  |
| `_KanbanCalculationProfile` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KanbanCalculationProfile` | `I_KanbanCalculationProfile` | [1..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCALCPRFLTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Calculation Profile - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.representativeKey: 'KanbanContainerCalcProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanCalcProfileText 
  as select from tpkpt 
   association [1..1] to I_KanbanCalculationProfile as _KanbanCalculationProfile on $projection.KanbanContainerCalcProfile = _KanbanCalculationProfile.KanbanContainerCalcProfile
                                                                                and $projection.Plant                      = _KanbanCalculationProfile.Plant
   association [0..1] to I_Plant                    as _Plant                    on  $projection.Plant = _Plant.Plant
   association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
  @ObjectModel.foreignKey.association: '_KanbanCalculationProfile'
  key kcprf as KanbanContainerCalcProfile,
  @Semantics.language: true
  key spras as Language,
  @ObjectModel.foreignKey.association: '_Plant'
  key werks as Plant,
  @Semantics.text: true
  kcprt as KanbanContainerCalcProfileName,
  
  _KanbanCalculationProfile,
  _Plant,
  _Language
  
}
```
