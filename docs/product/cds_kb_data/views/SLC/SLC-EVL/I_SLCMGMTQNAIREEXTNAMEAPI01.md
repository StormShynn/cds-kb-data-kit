---
name: I_SLCMGMTQNAIREEXTNAMEAPI01
description: "Slcmgmtqnaireextnameapi 01"
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_SLCMGMTQNAIREEXTNAMEAPI01

**Slcmgmtqnaireextnameapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SLCQnaireExternalNameUUID` | ✓ | |  |  |  |  |
| `SLCQnaireUUID` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `SLCQnaireExternalName` |  | |  |  |  |  |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'External Name of Questionnaire'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'SLCQnaireExternalNameUUID'
@AbapCatalog.sqlViewName: 'ISLCQNREXTNAPI01'

define view I_SLCMgmtQnaireExtNameAPI01
  as select from I_SLCQnaireExtName
{
  key  SLCQnaireExternalNameUUID,
       SLCQnaireUUID,
       Language,
       SLCQnaireExternalName
}
```
