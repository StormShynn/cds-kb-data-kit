---
name: I_MAINTENANCEPLANSORTFIELD
description: "Maintenance PlanSORTFIELD"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - maintenance-plan
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCEPLANSORTFIELD

**Maintenance PlanSORTFIELD**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlanSortField` | ✓ | |  | `plan_sort` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaintPlanSortFieldText` | [0..*] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IMNTPLNSORTFIELD'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Maintenance Plan Sort Field'
@Search.searchable: true
@ObjectModel.representativeKey: 'MaintenancePlanSortField'
@ObjectModel: {
   usageType.serviceQuality: #A,
   usageType.sizeCategory: #S,
   usageType.dataClass: #CUSTOMIZING
}
@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern:   #CDS_MODELING_DATA_SOURCE
@ObjectModel.supportedCapabilities:     [ #CDS_MODELING_DATA_SOURCE ]


define view I_MaintenancePlanSortField
  as select from t399g
  association [0..*] to I_MaintPlanSortFieldText as _Text on _Text.MaintenancePlanSortField = $projection.MaintenancePlanSortField
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, ranking: #HIGH }
       @EndUserText.label: 'Sort Field'
  key plan_sort     as MaintenancePlanSortField,

      // Association(s)
      _Text
}
```
