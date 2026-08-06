---
name: I_SUPPLIERACTIVITYAPI01
description: Supplieractivityapi 01
app_component: SLC-ACT
software_component: SAPSCORE
release_state: released
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
# I_SUPPLIERACTIVITYAPI01

**Supplieractivityapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrActyUUID` | `SuplrActyUUID` |
| `SupplierActivity` | `SupplierActivity` |
| `PurgCatUUID` | `PurgCatUUID` |
| `SuplrActyName` | `SuplrActyName` |
| `StartDate` | `StartDate` |
| `EndDate` | `EndDate` |
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `cast(CreatedByUser as /srmsmc/created_by )` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `cast(LastChangedByUser as /srmsmc/last_changed_by )` |
| `Language` | `Language` |
| `SuplrActyPriority` | `SuplrActyPriority` |
| `SuplrActyType` | `SuplrActyType` |
| `SuplrActyLifecycleStatus` | `SuplrActyLifecycleStatus` |

## Source Code

```abap
@EndUserText.label: 'Procurement-Related Activity'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.sqlViewName: 'ISUPLRACTYAPI01'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
define view I_SupplierActivityAPI01
  as select from I_SupplierActivity
{

  key SuplrActyUUID,
      SupplierActivity,
      PurgCatUUID,
      SuplrActyName,
      StartDate,
      EndDate,
      CreationDateTime,
      cast(CreatedByUser as /srmsmc/created_by ) as CreatedByUser,
      LastChangeDateTime,
      cast(LastChangedByUser as /srmsmc/last_changed_by ) as LastChangedByUser,
      Language,
      SuplrActyPriority,
      SuplrActyType,
      SuplrActyLifecycleStatus
}
```
