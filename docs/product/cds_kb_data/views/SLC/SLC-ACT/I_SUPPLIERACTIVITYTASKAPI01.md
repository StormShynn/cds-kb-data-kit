---
name: I_SUPPLIERACTIVITYTASKAPI01
description: "Supplieractivitytaskapi 01"
app_component: SLC-ACT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-ACT
  - interface-view
  - supplier
  - component:SLC-ACT
  - lob:Other
  - bo:Supplier
---
# I_SUPPLIERACTIVITYTASKAPI01

**Supplieractivitytaskapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrActyTaskUUID` | ✓ | |  |  |  |  |
| `SupplierActivityTask` |  | |  |  |  |  |
| `SuplrActyTaskName` |  | |  |  |  |  |
| `EndDate` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  | `cast(CreatedByUser as /srmsmc/created_by )` |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  | `cast(LastChangedByUser as /srmsmc/last_changed_by )` |  |  |
| `Language` |  | |  |  |  |  |
| `SuplrActyTaskPriority` |  | |  |  |  |  |
| `SuplrActyTaskLifecycleStatus` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Supplier Activity Task'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'IACTTASKAPI01'
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
define view I_SupplierActivityTaskAPI01
  as select from I_SupplierActivityTask
{
      //I_SupplierActivityTask
  key SuplrActyTaskUUID,
      SupplierActivityTask,
      SuplrActyTaskName,
      EndDate,
      CreationDateTime,
      cast(CreatedByUser as /srmsmc/created_by ) as CreatedByUser,
      LastChangeDateTime,
      cast(LastChangedByUser as /srmsmc/last_changed_by ) as LastChangedByUser,
      Language,
      SuplrActyTaskPriority,
      SuplrActyTaskLifecycleStatus

}
```
