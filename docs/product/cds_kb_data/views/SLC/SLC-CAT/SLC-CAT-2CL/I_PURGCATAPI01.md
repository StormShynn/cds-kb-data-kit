---
name: I_PURGCATAPI01
description: "Purgcatapi 01"
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
# I_PURGCATAPI01

**Purgcatapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-CAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgCatUUID` | ✓ | |  |  |  |  |
| `PurchasingCategory` |  | |  |  |  |  |
| `PurgCatName` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  | `cast(CreatedByUser as /srmsmc/created_by )` |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  | `cast(LastChangedByUser as /srmsmc/last_changed_by )` |  |  |
| `Language` |  | |  |  |  |  |
| `PurgCatIsInactive` |  | |  |  |  |  |
| `PurgCatTranslationOvrlStatus` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPUCAPI01'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Purchasing Category'
define view I_PurgCatAPI01 as select from I_PurchasingCategory {
  key PurgCatUUID, 
  PurchasingCategory,
  PurgCatName, 
  CreationDateTime, 
  cast(CreatedByUser as /srmsmc/created_by ) as CreatedByUser,
  LastChangeDateTime,
  cast(LastChangedByUser as /srmsmc/last_changed_by ) as LastChangedByUser,
  Language,
  PurgCatIsInactive, 
  PurgCatTranslationOvrlStatus

}
```
