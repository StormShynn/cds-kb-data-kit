---
name: I_MAINTNOTIFICATIONITEMTP_2
description: Maintnotificationitemtp 2
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
# I_MAINTNOTIFICATIONITEMTP_2

**Maintnotificationitemtp 2**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenanceNotification` | `MaintenanceNotification` |
| key `MaintenanceNotificationItem` | `MaintenanceNotificationItem` |
| `MaintNotifItemText` | `MaintNotifItemText` |
| `MaintNotifDamageCodeGroup` | `MaintNotifDamageCodeGroup` |
| `MaintNotificationDamageCode` | `MaintNotificationDamageCode` |
| `MaintNotifDamageCodeCatalog` | `MaintNotifDamageCodeCatalog` |
| `MaintNotifObjPrtCodeGroup` | `MaintNotifObjPrtCodeGroup` |
| `MaintNotifObjPrtCode` | `MaintNotifObjPrtCode` |
| `MaintNotifObjPrtCodeCatalog` | `MaintNotifObjPrtCodeCatalog` |
| `IsDeleted` | `IsDeleted` |
| `_MaintNotifDamageCodeGroup` | *Association* |
| `_MaintNotifObjPrtCodeGroup` | *Association* |
| `_MaintNotificationDamageCode` | *Association* |
| `_MaintNotifObjPrtCode` | *Association* |
| `_MaintenanceNotification` | *Association* |
| `_Notif` | *Association* |
| `_ItemCause` | *Association* |
| `_ItemActivity` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Notification Item TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintenanceNotificationItem']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_MaintNotificationItemTP_2 as projection on R_MaintNotificationItemTP as MaintNotifItem 
{
   
//   Maintenance Notification 
   key MaintenanceNotification,
   
//   Maintenance Notification Item 
   key MaintenanceNotificationItem,
   
//   Damage Description
    MaintNotifItemText, 
    
// Damage Code Group
    MaintNotifDamageCodeGroup, 
    
// Damage Code
    MaintNotificationDamageCode, 
    
    
@Consumption: { hidden: true }
//  Damage Code Catalog 
    MaintNotifDamageCodeCatalog,
    
// Object Part Code Group
    MaintNotifObjPrtCodeGroup, 

 
// Object Part Code
   MaintNotifObjPrtCode, 
    
  
@Consumption: { hidden: true }
// Object Part Code Catalog
   MaintNotifObjPrtCodeCatalog,
   @Semantics.booleanIndicator: true
   IsDeleted,
 

// Association
    _MaintNotifDamageCodeGroup,
    _MaintNotifObjPrtCodeGroup,
    _MaintNotificationDamageCode,
    _MaintNotifObjPrtCode,
    _MaintenanceNotification,
   // _IsDeleted,
    //parent
    _Notif : redirected to parent I_MaintenanceNotificationTP_2,
    
    // Child
    _ItemCause : redirected to composition child I_MaintNotificationItemCauseTP,
    _ItemActivity : redirected to composition child I_MaintNotifItemActivityTP
    
    
    
  
}
```
