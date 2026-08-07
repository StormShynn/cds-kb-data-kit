---
name: I_PROJMARGPLANNINGCATEGORY
description: "Projmargplanningcategory"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - interface-view
  - component:CO-FIO-PA-2CL
  - lob:Controlling
---
# I_PROJMARGPLANNINGCATEGORY

**Projmargplanningcategory**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlanningCategoryText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Planning Category of Project Margin'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'PlanningCategory'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                      #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, 
                                      #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@VDM.viewType: #BASIC

@Analytics: { dataCategory: #DIMENSION }

@Analytics.internalName:#LOCAL



define view entity I_ProjMargPlanningCategory as select from P_ProjMargPlanningCategory

association [0..*] to I_PlanningCategoryText as _Text on $projection.PlanningCategory = _Text.PlanningCategory
{
  @ObjectModel.text.association: '_Text'
  key PlanningCategory,
  _Text
}
```
