---
name: I_VIRTUALPLANNINGCATEGORY
description: "Virtualplanningcategory"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_VIRTUALPLANNINGCATEGORY

**Virtualplanningcategory**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` | ✓ | |  | `cast (fcomc_cat_assgmt.virtual_category as fcom_category preserving type)` |  |  |
| `SourcePlanningCategory` | ✓ | |  | `source_category` |  |  |
| `_Text` | | ✓ | | | | |
| `_SourcePlanningCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlanningCategoryText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Planning Category'
@Analytics: { dataCategory: #DIMENSION, dataExtraction: { enabled: true,
                                                          delta.changeDataCapture.automatic: true } }
                                                          
@Analytics.internalName:#LOCAL 
                                                          
@ObjectModel.representativeKey: 'PlanningCategory'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIVPLANNINGCAT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'VirtualPlanningCategory'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION 

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

define view I_VirtualPlanningCategory as select from fcomc_cat_assgmt
         
association [0..*] to I_PlanningCategoryText as _Text on $projection.PlanningCategory = _Text.PlanningCategory                                                                    
association to parent I_PlanningCategory     as _SourcePlanningCategory     on $projection.SourcePlanningCategory = _SourcePlanningCategory.PlanningCategory 
{   
  @ObjectModel.text.association: '_Text'
  key cast (fcomc_cat_assgmt.virtual_category as fcom_category preserving type) as PlanningCategory,
  @ObjectModel.foreignKey.association: '_SourcePlanningCategory'
  key fcomc_cat_assgmt.source_category  as SourcePlanningCategory,
  _Text,
  _SourcePlanningCategory

}
```
