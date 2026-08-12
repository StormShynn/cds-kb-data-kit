---
name: I_PURGCATMEMBERAPI01
description: "Purgcatmemberapi 01"
app_component: SLC-CAT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-CAT
  - interface-view
  - component:SLC-CAT-2CL
  - lob:Other
---
# I_PURGCATMEMBERAPI01

**Purgcatmemberapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-CAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgCatPartyUUID` | ✓ | |  |  |  |  |
| `PurgCatUUID` |  | |  |  |  |  |
| `UserID` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
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
| `BusinessPartner` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPUCMEMBERPI01'
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Team Member for Purchasing Category'
@AbapCatalog.compiler.compareFilter: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_PurgCatMemberAPI01
  as select from I_PurgCatMember
{

  key PurgCatPartyUUID,
      PurgCatUUID,
      UserID,
      IsBusinessPurposeCompleted,
      AuthorizationGroup,
      
      @Consumption.hidden:true
      @UI.hidden:true
      DataControllerSet,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController1,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController2,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController3,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController4,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController5,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController6,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController7,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController8,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController9,
      @Consumption.hidden:true
      @UI.hidden:true
      DataController10,
      @Consumption.hidden:true
      @UI.hidden:true
      BusinessPartner
     
}
```
