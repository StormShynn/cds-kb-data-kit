---
name: I_PROJDMNDRESOURCEREQUESTTP
description: Projdmndresourcerequesttp
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - transactional-processing
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDRESOURCEREQUESTTP

**Projdmndresourcerequesttp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProjDmndResourceRequestUUID` | ✓ | |  |  |
| `ProjectDemandWorkUUID` |  | |  |  |
| `ProjectDemandUUID` |  | |  |  |
| `ProjectUUID` |  | |  |  |
| `ReferencedObjectUUID` |  | |  |  |
| `ProjectDemandRequestedResource` |  | |  |  |
| `ProjDmndStfngInstructionText` |  | |  |  |
| `ProjDmndRsceReqWorkAssgmtOID` |  | |  |  |
| `ProjDmndRsceReqWrkfrcPersonOID` |  | |  |  |
| `ProjDmndRsceReqStartDate` |  | |  |  |
| `ProjDmndRsceReqEndDate` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_Root` | | ✓ | | |
| `_Work` | | ✓ | | |
| `_ProjDmndRsceReqDistr` | | ✓ | | |
| `_EnterpriseProject` | | ✓ | | |
| `_PersonWorkAgrmt` | | ✓ | | |

## Source Code

```abap
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel: { modelingPattern       : #TRANSACTIONAL_INTERFACE,
                representativeKey     : 'ProjDmndResourceRequestUUID',
                supportedCapabilities : [#TRANSACTIONAL_PROVIDER],
                usageType             : { serviceQuality : #A,
                                          dataClass      : #TRANSACTIONAL,
                                          sizeCategory   : #XL  } }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Resource Request for Resource Dmnd - TP'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ] 

define view entity I_ProjDmndResourceRequestTP
  as projection on R_ProjDmndResourceRequestTP as DemandResourceRequest
{
  key ProjDmndResourceRequestUUID,
      ProjectDemandWorkUUID,
      ProjectDemandUUID,
      ProjectUUID,
      ReferencedObjectUUID,
      ProjectDemandRequestedResource,
      ProjDmndStfngInstructionText,
      ProjDmndRsceReqWorkAssgmtOID,
      ProjDmndRsceReqWrkfrcPersonOID,
      ProjDmndRsceReqStartDate,
      ProjDmndRsceReqEndDate,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,

      /* Associations */
      _Root                 : redirected to I_ProjectDemandTP_2,
      _Work                 : redirected to parent I_ProjectDemandResourceTP,
      _ProjDmndRsceReqDistr : redirected to composition child I_ProjDmndRsceReqDistrTP,

      /* External Associations */
      _EnterpriseProject,
      _PersonWorkAgrmt
}
```
