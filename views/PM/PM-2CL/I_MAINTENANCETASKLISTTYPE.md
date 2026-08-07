---
name: I_MAINTENANCETASKLISTTYPE
description: "Maintenancetasklisttype"
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
# I_MAINTENANCETASKLISTTYPE

**Maintenancetasklisttype**

| Property | Value |
|---|---|
| App Component | `PM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaskListType` | ✓ | |  | `BillOfOperationsType` |  |  |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IMNTTSKLISTTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Maintenance Task List Type'
@ObjectModel.representativeKey: 'TaskListType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:   #NONE
@ObjectModel.supportedCapabilities:     [ #CDS_MODELING_DATA_SOURCE , #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'MaintenanceTaskListType'
@Analytics.dataExtraction.enabled

define view I_MaintenanceTaskListType
  as select from I_BillOfOperationsType
{
  key I_BillOfOperationsType.BillOfOperationsType as TaskListType,

      /* Associations */
      I_BillOfOperationsType._Text
}
where
  I_BillOfOperationsType.BillOfOperationsApplication = 'I'
```
