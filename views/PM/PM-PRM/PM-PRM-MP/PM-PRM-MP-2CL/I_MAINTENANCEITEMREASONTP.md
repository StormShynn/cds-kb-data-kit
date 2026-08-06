---
name: I_MAINTENANCEITEMREASONTP
description: Maintenanceitemreasontp
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
# I_MAINTENANCEITEMREASONTP

**Maintenanceitemreasontp**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenanceItem` | `MaintenanceItem` |
| key `NmbrOfMaintComplianceItems` | `NmbrOfMaintComplianceItems` |
| `MaintenanceComplianceGroupCode` | `MaintenanceComplianceGroupCode` |
| `MaintenanceComplianceCode` | `MaintenanceComplianceCode` |
| `MaintenanceComplianceTypeCode` | `MaintenanceComplianceTypeCode` |
| `MaintComplianceCatalogCode` | `MaintComplianceCatalogCode` |
| `MaintComplianceDescription` | `MaintComplianceDescription` |
| `MaintenancePackage` | `MaintenancePackage` |
| `MaintCmplRqIsLegallyBinding` | `MaintCmplRqIsLegallyBinding` |
| `MaintCmplRqOriginCode` | `MaintCmplRqOriginCode` |
| `MaintComplianceHasLongText` | `MaintComplianceHasLongText` |
| `MaintComplianceSortNumber` | `MaintComplianceSortNumber` |
| `MaintenanceComplianceIsDeleted` | `MaintenanceComplianceIsDeleted` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_MaintenanceItem` | *Association* |
| `_MaintenanceItemReasonText` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Maintenance Item Reason - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #MASTER
   },
   semanticKey: ['MaintenanceItem' , 'NmbrOfMaintComplianceItems']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
  
define view entity I_MaintenanceItemReasonTP
 as projection on R_MaintenanceItemReasonTP as MaintenanceItemReason {

  key MaintenanceItem,

  key NmbrOfMaintComplianceItems,

      MaintenanceComplianceGroupCode,

      MaintenanceComplianceCode,

      MaintenanceComplianceTypeCode,

      MaintComplianceCatalogCode,

      MaintComplianceDescription,

      MaintenancePackage,

      @Semantics.booleanIndicator: true
      MaintCmplRqIsLegallyBinding,

      MaintCmplRqOriginCode,

      @Semantics.booleanIndicator
      MaintComplianceHasLongText,

      MaintComplianceSortNumber,

      @Semantics.booleanIndicator: true
      MaintenanceComplianceIsDeleted,

      @Semantics.user.createdBy: true
      CreatedByUser,

      @Semantics.systemDate.createdAt: true
      CreationDate,

      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      /* Association */
      _MaintenanceItem : redirected to parent I_MaintenanceItemTP_2,

      /* Composition */
      @Semantics.valueRange.maximum: '1'
      _MaintenanceItemReasonText : redirected to composition child I_MaintenanceItemReasonTextTP
     
}
```
