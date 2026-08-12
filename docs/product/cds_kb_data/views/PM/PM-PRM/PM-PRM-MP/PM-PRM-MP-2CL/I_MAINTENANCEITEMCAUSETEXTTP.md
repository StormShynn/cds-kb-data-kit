---
name: I_MAINTENANCEITEMCAUSETEXTTP
description: "Maintenanceitemcausetexttp"
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_MAINTENANCEITEMCAUSETEXTTP

**Maintenanceitemcausetexttp**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceItem` | ✓ | |  |  |  |  |
| `NmbrOfMaintComplianceItems` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `TextObjectKey` |  | |  |  |  |  |
| `TextObjectCategory` |  | |  |  |  |  |
| `TextObjectType` |  | |  |  |  |  |
| `PlainLongText` |  | |  |  |  |  |
| `_MaintenanceItem` | | ✓ | | | | |
| `_MaintenanceItemCause` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Maintenance Item Cause Long Text - TP'
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
  
define view entity I_MaintenanceItemCauseTextTP
 as projection on R_MaintenanceItemCauseTextTP as MaintenanceItemCauseText {

  key  MaintenanceItem,
  key  NmbrOfMaintComplianceItems,
       @Semantics.language:true
  key  Language,
       TextObjectKey,
       TextObjectCategory,
       TextObjectType,
       @Semantics.text: true
       PlainLongText,


       /* Local Association */
       _MaintenanceItem      : redirected to I_MaintenanceItemTP_2,
       _MaintenanceItemCause : redirected to parent I_MaintenanceItemCauseTP
}
```
