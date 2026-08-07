---
name: I_MAINTNOTIFICATIONITEMCAUSETP
description: Maintnotificationitemcausetp
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - transactional-processing
  - item-level
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_MAINTNOTIFICATIONITEMCAUSETP

**Maintnotificationitemcausetp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceNotification` | ✓ | |  |  |  |  |
| `MaintenanceNotificationItem` | ✓ | |  |  |  |  |
| `MaintenanceNotificationCause` | ✓ | |  |  |  |  |
| `MaintNotifCauseText` |  | |  |  |  |  |
| `MaintNotifCauseCodeGroup` |  | |  |  |  |  |
| `MaintNotificationCauseCode` |  | |  |  |  |  |
| `MaintNotifCauseCodeCatalog` |  | |  |  |  |  |
| `MaintNotificationRootCause` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `_MaintNotifCauseCodeGroup` | | ✓ | | | | |
| `_MaintNotificationCauseCode` | | ✓ | | | | |
| `_MaintenanceNotification` | | ✓ | | | | |
| `_MaintNotificationRootCause` | | ✓ | | | | |
| `_Item` | | ✓ | | | | |
| `_Notif` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #A,
     sizeCategory:   #M,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintenanceNotificationCause']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Maintenance Notification Item Cause - TP'
define view entity I_MaintNotificationItemCauseTP as projection on R_MaintNotificationItemCauseTP as MaintNotifItemCause {
//  Maintenance Notification   
    key MaintenanceNotification, 
    
//  Maintenance Notification Item 
    key MaintenanceNotificationItem, 
    
//  Maintenance Notification Cause
    key MaintenanceNotificationCause, 
    
//  Cause Text  
    MaintNotifCauseText, 

//  Cause Code Group
    MaintNotifCauseCodeGroup,
    
//  Cause Code  
    MaintNotificationCauseCode,
    
    
//  Cause Code Catalog  
    @Consumption: { hidden: true }
    MaintNotifCauseCodeCatalog,
    
    MaintNotificationRootCause,
    @Semantics.booleanIndicator: true
    IsDeleted,
    

    // Association 
   _MaintNotifCauseCodeGroup,
   _MaintNotificationCauseCode,
   @Consumption.hidden: true
   _MaintenanceNotification,
   _MaintNotificationRootCause,
   
   _Item: redirected to parent I_MaintNotificationItemTP_2,
   _Notif: redirected to I_MaintenanceNotificationTP_2
  
}
```
