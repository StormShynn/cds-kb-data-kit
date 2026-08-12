---
name: I_WORKCENTERCATEGORYAPPL
description: "Work CenterCATEGORYAPPL"
app_component: PP-CFS-CE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-CFS
  - PP-CFS-CE
  - interface-view
  - work-center
  - component:PP-CFS-CE-2CL
  - lob:Manufacturing
---
# I_WORKCENTERCATEGORYAPPL

**Work CenterCATEGORYAPPL**

| Property | Value |
|---|---|
| App Component | `PP-CFS-CE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterCategoryCode` | ✓ | |  | `verwe` |  |  |
| `BillOfOperationsApplication` | ✓ | |  | `applc` |  |  |
| `_WrkCtrCat` | | ✓ | | | | |
| `_BOOAppl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WrkCtrCat` | `I_WorkCenterCategory` | [1..1] |
| `_BOOAppl` | `I_BOOApplication` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IWCCATAPPL'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'WorkCenterCategoryCode'
@EndUserText.label: 'Application Assg of Work Center Category'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
define view entity I_WorkCenterCategoryAppl
  as select from tc30a as WrkCtrCatAppl
  association [1..1] to I_WorkCenterCategory as _WrkCtrCat on _WrkCtrCat.WorkCenterCategoryCode = $projection.WorkCenterCategoryCode
  association [1..1] to I_BOOApplication     as _BOOAppl   on _BOOAppl.BillOfOperationsApplication = $projection.BillOfOperationsApplication
{

  key WrkCtrCatAppl.verwe as WorkCenterCategoryCode,
      @ObjectModel.foreignKey.association: '_BOOAppl'
  key WrkCtrCatAppl.applc as BillOfOperationsApplication,

      // Associations
      _WrkCtrCat,
      _BOOAppl
};
```
