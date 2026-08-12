---
name: I_PURGCATPURCHASERRESPAPI01
description: "Purgcatpurchaserrespapi 01"
app_component: SLC-CAT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
# I_PURGCATPURCHASERRESPAPI01

**Purgcatpurchaserrespapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-CAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgCatUUID` | ✓ | |  |  |  |  |
| `PurgCatPartyUUID` |  | |  |  |  |  |
| `UserID` |  | |  |  |  |  |
| `EmailAddress` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |
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
| `BusinessPartner` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPUCPURRESPAPI01'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Purchaser Resp Referenced by Purg Cat'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_PurgCatPurchaserRespAPI01 as select from I_PurchasingCategoryPurchResp{
  key PurgCatUUID, 
  PurgCatPartyUUID, 
  UserID, 
  EmailAddress,
  AuthorizationGroup,
  IsBusinessPurposeCompleted,
  
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
  DataControllerSet,
  @Consumption.hidden: true
  @UI.hidden: true
  BusinessPartner
 
}
```
