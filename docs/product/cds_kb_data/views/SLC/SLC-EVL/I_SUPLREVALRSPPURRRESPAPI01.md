---
name: I_SUPLREVALRSPPURRRESPAPI01
description: "Suplrevalrsppurrrespapi 01"
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLREVALRSPPURRRESPAPI01

**Suplrevalrsppurrrespapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalRspPartyUUID` | ✓ | |  |  |  |  |
| `SuplrEvalRspUUID` |  | |  |  |  |  |
| `UserID` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
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
| `DataControllerSet` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISEVRSPPRAPI01'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Purchaser Resp for Suplr Eval Response'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalRspPurrRespAPI01
  as select from I_SupplierEvalRspPurchaserResp
{
  key SuplrEvalRspPartyUUID,
      SuplrEvalRspUUID,
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
