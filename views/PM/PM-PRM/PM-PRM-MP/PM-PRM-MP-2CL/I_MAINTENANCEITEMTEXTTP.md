---
name: I_MAINTENANCEITEMTEXTTP
description: Maintenanceitemtexttp
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
# I_MAINTENANCEITEMTEXTTP

**Maintenanceitemtexttp**

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
| `Language` | ✓ | |  |  |
| `TextObjectKey` |  | |  |  |
| `TextObjectCategory` |  | |  |  |
| `TextObjectType` |  | |  |  |
| `MaintenanceItemLongText` |  | |  |  |
| `_Language` | | ✓ | | |
| `_LongText` | | ✓ | | |
| `_TextObjectCategory` | | ✓ | | |
| `_TextObjectType` | | ✓ | | |
| `_MaintenanceItem` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Maintenance Item Long Text - TP'
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
   semanticKey: ['MaintenanceItem' , 'Language']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_MaintenanceItemTextTP
  as projection on R_MaintenanceItemTextTP as MaintenanceItemText {
  key MaintenanceItem,
      @Semantics.language: true
  key Language,
      TextObjectKey,
      TextObjectCategory,
      TextObjectType,
      @Semantics.text: true
      MaintenanceItemLongText,

      /* Associations */
      _Language,
      _LongText,
      _TextObjectCategory,
      _TextObjectType,
      /* Local Associations */
      _MaintenanceItem : redirected to parent I_MaintenanceItemTP_2

}
```
