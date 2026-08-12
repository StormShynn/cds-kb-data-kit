---
name: I_WORKCENTERCATEGORYAPPL
description: "Work CenterCATEGORYAPPL"
app_component: PP-CFS-CE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
