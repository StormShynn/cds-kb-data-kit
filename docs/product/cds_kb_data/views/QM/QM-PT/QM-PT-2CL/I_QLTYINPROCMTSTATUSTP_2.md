---
name: I_QLTYINPROCMTSTATUSTP_2
description: "Qltyinprocmtstatustp 2"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - transactional-processing
  - status
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_QLTYINPROCMTSTATUSTP_2

**Qltyinprocmtstatustp 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  |  |  |
| `QltyInProcmtIntID` | ✓ | |  |  |  |  |
| `StatusCode` | ✓ | |  |  |  |  |
| `StatusProfile` |  | |  |  |  |  |
| `StatusObject` |  | |  |  |  |  |
| `UserStatusName` |  | |  |  |  |  |
| `_QltyInProcurement` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Qlty Info Record in Procmt Status - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
 modelingPattern: #TRANSACTIONAL_INTERFACE,
 supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
 usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL }
  }
  
@Feature:'SW:QM_SFWS_QALL'
define view entity I_QltyInProcmtStatusTP_2 as projection on R_QltyInProcmtStatusTP {

 key Material,
  key QltyInProcmtIntID,
  key StatusCode,
      StatusProfile,
      StatusObject,
      UserStatusName,
      
      /* Associations */
      _QltyInProcurement : redirected to parent I_QualityInProcurementTP_2      
}
```
