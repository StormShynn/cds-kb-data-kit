---
name: I_MAINTORDEROBJECTLISTITEMTP
description: Maintorderobjectlistitemtp
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
  - item-level
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDEROBJECTLISTITEMTP

**Maintorderobjectlistitemtp**

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
| `MaintenanceOrderObjectList` | ✓ | |  |  |
| `MaintenanceObjectListItem` | ✓ | |  |  |
| `Equipment` |  | |  |  |
| `MaintenanceNotification` |  | |  |  |
| `Assembly` |  | |  |  |
| `Material` |  | |  |  |
| `SerialNumber` |  | |  |  |
| `UniqueItemIdentifier` |  | |  |  |
| `FunctionalLocation` |  | |  |  |
| `MaintObjectListItemSequence` |  | |  |  |
| `_MaintenanceOrder` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Maint Ord Obj List Item Projection - TP'
@AccessControl: { authorizationCheck: #CHECK, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL }
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
define view entity I_MaintOrderObjectListItemTP
  as projection on R_MaintOrdObjectListItemTP as _MaintOrderObjectListItemTP
{
  key MaintenanceOrder,
  key MaintenanceOrderObjectList,
  key MaintenanceObjectListItem,
      Equipment,
      MaintenanceNotification,
      Assembly,
      Material,
      SerialNumber,
      UniqueItemIdentifier,
      FunctionalLocation,
      MaintObjectListItemSequence,
      
      _MaintenanceOrder          : redirected to parent I_MaintenanceOrderTP
}
```
