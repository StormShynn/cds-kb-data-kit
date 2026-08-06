---
name: I_SUPLREVALTMPLPURRRESPAPI01
description: Suplrevaltmplpurrrespapi 01
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
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
# I_SUPLREVALTMPLPURRRESPAPI01

**Suplrevaltmplpurrrespapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrEvalTemplatePartyUUID` | `SuplrEvalTemplatePartyUUID` |
| `SuplrEvalTemplateUUID` | `SuplrEvalTemplateUUID` |
| `UserID` | `UserID` |
| `EmailAddress` | `EmailAddress` |
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
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Purchaser Resp for Eval Template'
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISEVTEMPRSPAPI01'
define view I_SuplrEvalTmplPurrRespAPI01
  as select from I_SuplrEvalTmplPurchResp
{
  key SuplrEvalTemplatePartyUUID,
      SuplrEvalTemplateUUID,
      UserID,
      EmailAddress,
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
