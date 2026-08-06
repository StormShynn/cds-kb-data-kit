---
name: I_COSTCENTERBUDGETPLNGCATEGORY
description: Cost CenterBUDGETPLNGCATEGORY
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - cost-center
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:CostCenter
---
# I_COSTCENTERBUDGETPLNGCATEGORY

**Cost CenterBUDGETPLNGCATEGORY**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PlanningCategory` | `category` |
| `PlanningCatIsForAvailyCtrl` | `availability_control` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlanningCategoryText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFICCBDGTPLNGCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] 
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PlanningCategory'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'CostCenterBudgetPlngCategory' 
@EndUserText.label: 'Cost Center Budget Planning Category'
define view I_CostCenterBudgetPlngCategory
  as select from fcomc_category
  association [0..*] to I_PlanningCategoryText as _Text on $projection.PlanningCategory = _Text.PlanningCategory
{
      @ObjectModel.text.association: '_Text'
  key category             as PlanningCategory,
      availability_control as PlanningCatIsForAvailyCtrl,
      _Text
}
where
  category_usage = '002'
```
