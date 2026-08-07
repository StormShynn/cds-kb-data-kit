---
name: I_SLCMGMTQNAIREPURGCATAPI01
description: Slcmgmtqnairepurgcatapi 01
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
# I_SLCMGMTQNAIREPURGCATAPI01

**Slcmgmtqnairepurgcatapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SLCQnaireUUID` | ✓ | |  | `SLCQnairePurgCategoryUUID` |  |  |
| `SLCQnairePurgCategoryUUID` |  | |  | `SLCQnaireUUID` |  |  |
| `PurgCatUUID` |  | |  |  |  |  |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Purchasing Category of Questionnaire'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.semanticKey: ['SLCQnaireUUID', 'PurgCatUUID']
@AbapCatalog.sqlViewName: 'ISLCQNRPUCAPI01'

define view I_SLCMgmtQnairePurgCatAPI01
  as select from I_SLCQnairePurgCat
{
  key SLCQnairePurgCategoryUUID as SLCQnaireUUID,  //fix wrong mapping in underlying views, adapt if underlying view is corrected
     SLCQnaireUUID as SLCQnairePurgCategoryUUID,    //fix wrong mapping in underlying views, adapt if underlying view is corrected
    PurgCatUUID
}
```
