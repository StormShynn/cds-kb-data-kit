---
name: I_PROJECTDEMANDRESOURCETP
description: Projectdemandresourcetp
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
  - project
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDRESOURCETP

**Projectdemandresourcetp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandWorkUUID` | ✓ | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `ProjectUUID` |  | |  |  |  |  |
| `ReferencedObjectUUID` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ActivityType` |  | |  |  |  |  |
| `ProjDmndAssgmtStatus` |  | |  |  |  |  |
| `ProjectElementWorkItem` |  | |  |  |  |  |
| `ProjDmndBillingControlCategory` |  | |  |  |  |  |
| `ProjDmndRequestedDeliveryOrg` |  | |  |  |  |  |
| `_Root` | | ✓ | | | | |
| `_ResourceAssignment` | | ✓ | | | | |
| `_ResourceRequest` | | ✓ | | | | |
| `_CostCenterActType` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CostCenterText` | | ✓ | | | | |
| `_ActivityTypeText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: { modelingPattern       : #TRANSACTIONAL_INTERFACE,
                semanticKey           : ['ActivityType'],
                representativeKey     : 'ProjectDemandWorkUUID',
                supportedCapabilities : [#TRANSACTIONAL_PROVIDER],
                usageType             : { serviceQuality : #B,
                                          dataClass      : #TRANSACTIONAL,
                                          sizeCategory   : #XL } }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Project Demand for Resource - TP'

define view entity I_ProjectDemandResourceTP
  as projection on I_ProjectDemandWorkTP as DemandResource
{
  key ProjectDemandWorkUUID,
      ProjectDemandUUID,
      ProjectUUID,
      ReferencedObjectUUID,
      @ObjectModel: { text.association: null } // ATC error: Use of annotation OBJECTMODEL.TEXT.ASSOCIATION is not allowed for element COSTCENTER
      CostCenter,
      @ObjectModel: { text.association: null } // ATC error: Use of annotation OBJECTMODEL.TEXT.ASSOCIATION is not allowed for element ACTIVITYTYPE
      ActivityType,
      ProjDmndAssgmtStatus,
      ProjectElementWorkItem,
      ProjDmndBillingControlCategory,
      ProjDmndRequestedDeliveryOrg,

      /* Associations */
      _Root               : redirected to parent I_ProjectDemandTP_2,
      _ResourceAssignment : redirected to composition child I_ProjDmndRsceAssignmentTP_2,
      @Semantics.valueRange.maximum: '1'
      _ResourceRequest    : redirected to composition child I_ProjDmndResourceRequestTP,

      _CostCenterActType,
      _CostCenter,
      _CostCenterText,
      _ActivityTypeText
}
```
