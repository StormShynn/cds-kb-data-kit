---
name: I_EQUIPMENTWRNTYASSGMTTP
description: "Equipmentwrntyassgmttp"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - transactional-processing
  - equipment
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_EQUIPMENTWRNTYASSGMTTP

**Equipmentwrntyassgmttp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Equipment` | ✓ | |  |  |  |  |
| `WarrantyType` | ✓ | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `MasterWarranty` |  | |  |  |  |  |
| `WarrantyStartDate` |  | |  |  |  |  |
| `WarrantyEndDate` |  | |  |  |  |  |
| `WrntyIsInhtdFromSuperiorObject` |  | |  |  |  |  |
| `WrntyIsPassedOnToChildObject` |  | |  |  |  |  |
| `_Equipment` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Equipment Warranty Assignment - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #MIXED
   },
   semanticKey: ['Equipment']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_EquipmentWrntyAssgmtTP as projection on R_EquipmentWrntyAssgmtTP {
  
    key Equipment,
  key WarrantyType,
     @Consumption.hidden: true
     ValidityEndDate,
     MasterWarranty,
     WarrantyStartDate,
     WarrantyEndDate,
     @Semantics.booleanIndicator : true
     WrntyIsInhtdFromSuperiorObject,
     @Semantics.booleanIndicator : true
     WrntyIsPassedOnToChildObject,
      _Equipment  : redirected to parent I_EquipmentTP
}
```
