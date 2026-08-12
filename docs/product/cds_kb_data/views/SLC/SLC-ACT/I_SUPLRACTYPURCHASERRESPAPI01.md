---
name: I_SUPLRACTYPURCHASERRESPAPI01
description: "Suplractypurchaserrespapi 01"
app_component: SLC-ACT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_SUPLRACTYPURCHASERRESPAPI01

**Suplractypurchaserrespapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrActyPartyUUID` | ✓ | |  |  |  |  |
| `SuplrActyUUID` |  | |  |  |  |  |
| `UserID` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `DataControllerSet` |  | |  |  |  |  |
| `DataController1` |  | |  |  |  |  |
| `DataController2` |  | |  |  |  |  |
| `DataController3` |  | |  |  |  |  |
| `DataController4` |  | |  |  |  |  |
| `DataController5` |  | |  |  |  |  |
| `DataController6` |  | |  |  |  |  |
| `DataController7` |  | |  |  |  |  |
| `DataController8` |  | |  |  |  |  |
| `DataController9` |  | |  |  |  |  |
| `DataController10` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Purchaser Resp for Supplier Activity'
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IACTPURRESPAPI01'
@AbapCatalog.compiler.compareFilter: true
define view I_SuplrActyPurchaserRespAPI01
  as select from I_SupplierActivityPurchResp
{

  key SuplrActyPartyUUID,
      SuplrActyUUID,
      UserID,
      AuthorizationGroup,
      IsBusinessPurposeCompleted,
      
      @Consumption.hidden: true
      @UI.hidden: true
      DataControllerSet,
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
      DataController10
   

} where IsBusinessPurposeCompleted is not null
```
