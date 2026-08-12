---
name: I_MAINTNOTIFICATIONPARTNERTP
description: "Maintnotificationpartnertp"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - transactional-processing
  - partner
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_MAINTNOTIFICATIONPARTNERTP

**Maintnotificationpartnertp**

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
| `PartnerFunction` | ✓ | |  |  |  |  |
| `NotificationPartnerObjectNmbr` | ✓ | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
| `MaintenancePartner` |  | |  |  |  |  |
| `_ContactPerson` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Employee` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_Notif` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Notification Partner - TP'
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['NotificationPartnerObjectNmbr']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Metadata.ignorePropagatedAnnotations:true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_MaintNotificationPartnerTP as projection on R_MaintNotificationPartnerTP as MaintNotifPartner
{
key MaintenanceNotification,
key PartnerFunction,
key NotificationPartnerObjectNmbr,
    @API.element.releaseState: #DEPRECATED
    @API.element.successor: 'MaintenancePartner'
    Partner,
    MaintenancePartner, 
    @Consumption.hidden: true
    _ContactPerson,
    @Consumption.hidden: true
    _Customer,
    @Consumption.hidden: true
    _Employee,
    @Consumption.hidden: true
    _Supplier,
    @Consumption.hidden: true
    _PartnerFunction,

   
// Parent View
    _Notif : redirected to parent I_MaintenanceNotificationTP_2
    
  
}
```
