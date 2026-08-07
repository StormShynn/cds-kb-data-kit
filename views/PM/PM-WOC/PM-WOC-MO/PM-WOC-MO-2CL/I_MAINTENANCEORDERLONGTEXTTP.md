---
name: I_MAINTENANCEORDERLONGTEXTTP
description: Maintenance OrderLONGTEXTTP
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - transactional-processing
  - maintenance-order
  - text
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
  - bo:MaintenanceOrder
---
# I_MAINTENANCEORDERLONGTEXTTP

**Maintenance OrderLONGTEXTTP**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  |  |
| `TextObjectType` | ✓ | |  |  |
| `Language` | ✓ | |  |  |
| `MaintenanceOrderLongText` |  | |  |  |
| `_MaintenanceOrder` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Long Text - TP'
@AccessControl: { authorizationCheck: #MANDATORY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED }
@ObjectModel.dataCategory:#TEXT
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_MaintenanceOrderLongTextTP
  as projection on R_MaintenanceOrderLongTextTP

{
  key     MaintenanceOrder,
  key     TextObjectType,
  @Semantics.language: true
  key     Language,
  @Semantics.text:true 
          MaintenanceOrderLongText,
          _MaintenanceOrder          : redirected to parent I_MaintenanceOrderTP    
}
```
