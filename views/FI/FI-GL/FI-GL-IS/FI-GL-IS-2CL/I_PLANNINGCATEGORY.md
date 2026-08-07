---
name: I_PLANNINGCATEGORY
description: Planningcategory
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
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_PLANNINGCATEGORY

**Planningcategory**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlanningCategory` | ✓ | |  | `category` |  |  |
| `PlngCategoryApplicationType` |  | |  | `application_type` |  |  |
| `ExchangeRateType` |  | |  | `kurst` |  |  |
| `PlanDataUploadIsAllowed` |  | |  | `upload_allowed` |  |  |
| `CopyToPlngCategoryIsAllowed` |  | |  | `copy_allowed` |  |  |
| `PlanDataDeletionIsAllowed` |  | |  | `delete_allowed` |  |  |
| `PlanDataCompressionIsAllowed` |  | |  | `compression_allowed` |  |  |
| `PlanningCategoryUsage` |  | |  | `category_usage` |  |  |
| `PlanningCatIsForAvailyCtrl` |  | |  | `availability_control` |  |  |
| `PlngCatIsCommlProjMgmtBslnPlng` |  | |  | `baseline` |  |  |
| `PlngCatIsCommlProjMgmtOngPlng` |  | |  | `ongoing` |  |  |
| `PlngCatIsForProdnCostOrdPlng` |  | |  | `planord` |  |  |
| `PlngCatIsForProdnCostMatlPlng` |  | |  | `preplanord` |  |  |
| `PlngCatIsForProdnCostSlsPlng` |  | |  | `prediction` |  |  |
| `PlngCatIsForMaintOrdBslnPlng` |  | |  | `pm_order_baseline_planned_cost` |  |  |
| `PlngCatIsForMaintOrdOngPlng` |  | |  | `pm_order_planned_cost` |  |  |
| `PlngCatIsForMaintOrdEstPlng` |  | |  | `pm_order_estimated_cost` |  |  |
| `PlngCatIsForSrvcDocBslnPlng` |  | |  | `sd_baseline` |  |  |
| `PlngCatIsForSrvcDocOngPlng` |  | |  | `sd_ongoing` |  |  |
| `PlngCatIsForApplSpcfcPlngPrps1` |  | |  | `cat_purpose01` |  |  |
| `PlngCatIsForApplSpcfcPlngPrps2` |  | |  | `cat_purpose02` |  |  |
| `PlngCatIsForApplSpcfcPlngPrps3` |  | |  | `cat_purpose03` |  |  |
| `_Text` | | ✓ | | | | |
| `_VirtualPlanningCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PlanningCategoryText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Planning Category'
@Analytics: { dataCategory: #DIMENSION, dataExtraction: { enabled: true,
                                                          delta.changeDataCapture.automatic: true } }
@ObjectModel.representativeKey: 'PlanningCategory'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPLANNINGCAT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'PlanningCategory'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

define view I_PlanningCategory
  as select from fcomc_category

  association [0..*] to I_PlanningCategoryText as _Text on $projection.PlanningCategory = _Text.PlanningCategory
  composition [0..*] of I_VirtualPlanningCategory   as _VirtualPlanningCategory
{
      @ObjectModel.text.association: '_Text'
  key fcomc_category.category                       as PlanningCategory,
      fcomc_category.application_type               as PlngCategoryApplicationType,
      fcomc_category.kurst                          as ExchangeRateType,
      fcomc_category.upload_allowed                 as PlanDataUploadIsAllowed,
      fcomc_category.copy_allowed                   as CopyToPlngCategoryIsAllowed,
      fcomc_category.delete_allowed                 as PlanDataDeletionIsAllowed,
      fcomc_category.compression_allowed            as PlanDataCompressionIsAllowed,
      fcomc_category.category_usage                 as PlanningCategoryUsage,
      fcomc_category.availability_control           as PlanningCatIsForAvailyCtrl,
      fcomc_category.baseline                       as PlngCatIsCommlProjMgmtBslnPlng,
      fcomc_category.ongoing                        as PlngCatIsCommlProjMgmtOngPlng,
      fcomc_category.planord                        as PlngCatIsForProdnCostOrdPlng,
      fcomc_category.preplanord                     as PlngCatIsForProdnCostMatlPlng,
      fcomc_category.prediction                     as PlngCatIsForProdnCostSlsPlng,
      fcomc_category.pm_order_baseline_planned_cost as PlngCatIsForMaintOrdBslnPlng,
      fcomc_category.pm_order_planned_cost          as PlngCatIsForMaintOrdOngPlng,
      fcomc_category.pm_order_estimated_cost        as PlngCatIsForMaintOrdEstPlng,
      fcomc_category.sd_baseline                    as PlngCatIsForSrvcDocBslnPlng,
      fcomc_category.sd_ongoing                     as PlngCatIsForSrvcDocOngPlng,
      fcomc_category.cat_purpose01                  as PlngCatIsForApplSpcfcPlngPrps1,
      fcomc_category.cat_purpose02                  as PlngCatIsForApplSpcfcPlngPrps2,
      fcomc_category.cat_purpose03                  as PlngCatIsForApplSpcfcPlngPrps3,
      _Text,
      _VirtualPlanningCategory
}
```
