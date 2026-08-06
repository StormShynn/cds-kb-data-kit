---
name: I_MAINTENANCETASKLISTTYPETXT
description: Maintenancetasklisttypetxt
app_component: PM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - interface-view
  - component:PM-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCETASKLISTTYPETXT

**Maintenancetasklisttypetxt**

| Property | Value |
|---|---|
| App Component | `PM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TaskListType` | `TaskListType` |
| key `Language` | `_Text.Language` |
| `BillOfOperationsTypeName` | `_Text.BillOfOperationsTypeName` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Task List Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.supportedCapabilities:     [ #LANGUAGE_DEPENDENT_TEXT , #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE  
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled

define view entity I_MaintenanceTaskListTypeTxt as select from I_MaintenanceTaskListType {
  key TaskListType,
  @Semantics.language:true
  key _Text.Language,
  @Semantics.text: true
  _Text.BillOfOperationsTypeName  
}
```
