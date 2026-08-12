---
name: I_ENTPROJELMNTWORKITEMTP
description: "Entprojelmntworkitemtp"
app_component: PPM-SCL-PRS
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-PRS
  - interface-view
  - transactional-processing
  - item-level
  - component:PPM-SCL-PRS
  - lob:Other
---
# I_ENTPROJELMNTWORKITEMTP

**Entprojelmntworkitemtp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-PRS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EntProjElmntWorkItemUUID` | ✓ | |  |  |  |  |
| `EntProjElmntWorkItem` |  | |  |  |  |  |
| `EntProjElmntWorkItemName` |  | |  |  |  |  |
| `EntProjElmntWorkItemIsInactive` |  | |  |  |  |  |
| `EntProjElmntWorkItemIsCnfgrd` |  | |  |  |  |  |
| `ProjectUUID` |  | |  |  |  |  |
| `ProjectElementUUID` |  | |  |  |  |  |
| `EntProjElmntWrkItmLastUpdtSrce` |  | |  |  |  |  |
| `EntProjElmntWrkItmCrtedByUsr` |  | |  |  |  |  |
| `EntProjElmntWrkItmCrtnDteTme` |  | |  |  |  |  |
| `EntProjElmntWrkItmLstChgByUsr` |  | |  |  |  |  |
| `EntProjElmntWrkItmLstChgDteTme` |  | |  |  |  |  |
| `_EnterpriseProjectElement` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |
| `_EnterpriseProjectForUser` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Work Item of Ent Project Element - TP'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
  serviceQuality: #B,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
  }
}

@VDM.viewType: #TRANSACTIONAL

define view entity I_EntProjElmntWorkItemTP as projection on R_EntProjElmntWorkItemTP
{
    key EntProjElmntWorkItemUUID,
      EntProjElmntWorkItem,
      EntProjElmntWorkItemName,
      @Semantics.booleanIndicator: true
      EntProjElmntWorkItemIsInactive,
      @Semantics.booleanIndicator: true
      EntProjElmntWorkItemIsCnfgrd,
      ProjectUUID,
      ProjectElementUUID,
      EntProjElmntWrkItmLastUpdtSrce,
      EntProjElmntWrkItmCrtedByUsr,
      EntProjElmntWrkItmCrtnDteTme,
      EntProjElmntWrkItmLstChgByUsr,
      EntProjElmntWrkItmLstChgDteTme,
      
      // Associations
    _EnterpriseProjectElement              : redirected to parent I_EnterpriseProjectElementTP_3,
    _EnterpriseProject                     : redirected to I_EnterpriseProjectTP_3,
    _EnterpriseProjectForUser
}
```
