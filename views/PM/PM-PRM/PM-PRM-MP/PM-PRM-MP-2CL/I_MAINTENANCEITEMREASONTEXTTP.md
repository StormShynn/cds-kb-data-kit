---
name: I_MAINTENANCEITEMREASONTEXTTP
description: Maintenanceitemreasontexttp
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - transactional-processing
  - text
  - item-level
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCEITEMREASONTEXTTP

**Maintenanceitemreasontexttp**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintenanceItem` | ✓ | |  |  |
| `NmbrOfMaintComplianceItems` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `TextObjectKey` |  | |  |  |
| `TextObjectCategory` |  | |  |  |
| `TextObjectType` |  | |  |  |
| `PlainLongText` |  | |  |  |
| `_MaintenanceItem` | | ✓ | | |
| `_MaintenanceItemReason` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Maintenance Item Reason Long Text - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   dataCategory: #TEXT, 
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintenanceItem' , 'NmbrOfMaintComplianceItems', 'Language']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_MaintenanceItemReasonTextTP
  as projection on R_MaintenanceItemReasonTextTP as MaintenanceItemReasonText{
  key  MaintenanceItem,
  key  NmbrOfMaintComplianceItems,
       @Semantics.language: true
  key  Language,

       TextObjectKey,
       TextObjectCategory,
       TextObjectType,
       @Semantics.text: true
       PlainLongText,

       -- Associations --
       _MaintenanceItem       : redirected to  I_MaintenanceItemTP_2, 
       _MaintenanceItemReason : redirected to parent I_MaintenanceItemReasonTP
 }
```
