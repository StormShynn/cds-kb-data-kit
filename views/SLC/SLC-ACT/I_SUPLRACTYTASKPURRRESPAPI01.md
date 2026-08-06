---
name: I_SUPLRACTYTASKPURRRESPAPI01
description: Suplractytaskpurrrespapi 01
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
  - component:SLC-ACT
  - lob:Other
---
# I_SUPLRACTYTASKPURRRESPAPI01

**Suplractytaskpurrrespapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrActyTaskPartyUUID` | `SuplrActyTaskPartyUUID` |
| `SuplrActyTaskUUID` | `SuplrActyTaskUUID` |
| `UserID` | `UserID` |
| `IsBusinessPurposeCompleted` | `IsBusinessPurposeCompleted` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `DataController1` | `DataController1` |
| `DataController2` | `DataController2` |
| `DataController3` | `DataController3` |
| `DataController4` | `DataController4` |
| `DataController5` | `DataController5` |
| `DataController6` | `DataController6` |
| `DataController7` | `DataController7` |
| `DataController8` | `DataController8` |
| `DataController9` | `DataController9` |
| `DataController10` | `DataController10` |
| `DataControllerSet` | `DataControllerSet` |

## Source Code

```abap
@EndUserText.label: 'Purchaser Resp for Supplier Acty Task'
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ITSKPRSPAPI01'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
define view I_SuplrActyTaskPurrRespAPI01 as select from I_SuplrActyTskPurchaserResp {

key SuplrActyTaskPartyUUID, 
SuplrActyTaskUUID, 
UserID, 
IsBusinessPurposeCompleted, 
AuthorizationGroup,

@Consumption.hidden: true
@UI.hidden: true
DataController1,
@Consumption.hidden: true
@UI.hidden: true
DataController2,
@Consumption.hidden: true
@UI.hidden: true
DataController3,
@Consumption.hidden: true
@UI.hidden: true
DataController4,
@Consumption.hidden: true
@UI.hidden: true
DataController5,
@Consumption.hidden: true
@UI.hidden: true
DataController6,
@Consumption.hidden: true
@UI.hidden: true
DataController7,
@Consumption.hidden: true
@UI.hidden: true
DataController8,
@Consumption.hidden: true
@UI.hidden: true
DataController9,
@Consumption.hidden: true
@UI.hidden: true
DataController10,
@Consumption.hidden: true
@UI.hidden: true
DataControllerSet


}
```
