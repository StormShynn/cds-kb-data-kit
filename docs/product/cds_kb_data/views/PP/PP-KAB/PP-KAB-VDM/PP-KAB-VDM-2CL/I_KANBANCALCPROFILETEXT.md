---
name: I_KANBANCALCPROFILETEXT
description: "Kanbancalcprofiletext"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
