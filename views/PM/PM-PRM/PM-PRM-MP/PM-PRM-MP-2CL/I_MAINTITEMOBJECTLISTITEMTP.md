---
name: I_MAINTITEMOBJECTLISTITEMTP
description: Maintitemobjectlistitemtp
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
  - item-level
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTITEMOBJECTLISTITEMTP

**Maintitemobjectlistitemtp**

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
| `MaintenanceItemObjectList` | ✓ | |  |  |  |  |
| `MaintenanceObjectListItem` | ✓ | |  |  |  |  |
| `MaintenanceObjectListUsageCode` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  |  |  |  |
| `FunctionalLocationLabelName` |  | |  |  |  |  |
| `TechObjIsEquipOrFuncnlLoc` |  | |  |  |  |  |
| `TechnicalObject` |  | |  |  |  |  |
| `TechnicalObjectLabel` |  | |  |  |  |  |
| `TechnicalObjectDescription` |  | |  |  |  |  |
| `MaintenanceNotification` |  | |  |  |  |  |
| `Assembly` |  | |  |  |  |  |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `UniqueItemIdentifier` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `MaintObjectListItemSequence` |  | |  |  |  |  |
| `MaintObjListEntryIsProcessed` |  | |  |  |  |  |
| `ServiceReferenceProduct` |  | |  |  |  |  |
| `MaintenancePlanCallObject` |  | |  |  |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `MaintenancePlannerGroup` |  | |  |  |  |  |
| `MaintenancePlant` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_MaintenanceItemTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Maintenance Item Object List Item - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintenanceItem' , 'MaintenanceItemObjectList', 'MaintenanceObjectListItem']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_MaintItemObjectListItemTP
  as projection on R_MaintItemObjectListItemTP as MaintItemObjectListItemTP
{
  key MaintenanceItem,
  key MaintenanceItemObjectList,
  key MaintenanceObjectListItem,
      MaintenanceObjectListUsageCode,
      Equipment,
      FunctionalLocation,
      FunctionalLocationLabelName,
      TechObjIsEquipOrFuncnlLoc,
      TechnicalObject,
      TechnicalObjectLabel,
      @Semantics.text: true
      TechnicalObjectDescription,
      MaintenanceNotification,
      Assembly,
      MaintObjectLocAcctAssgmtNmbr,
      Material,
      SerialNumber,
      UniqueItemIdentifier,
      CreationDate,
      MaintObjectListItemSequence,
      MaintObjListEntryIsProcessed,
      -- Service Field
      ServiceReferenceProduct,
      /* Needed for authorization */
      MaintenancePlanCallObject,
      MaintenancePlanningPlant,
      MaintenancePlannerGroup,
      MaintenancePlant,
      ControllingArea,
      CostCenter,

      /* Local Association */
      _Equipment,
      _FunctionalLocation,
      _MaintenanceItemTP : redirected to parent I_MaintenanceItemTP_2

}
```
