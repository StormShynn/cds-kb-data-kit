---
name: I_EQUIPMENTCLFNCLASSTP
description: Equipmentclfnclasstp
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
# I_EQUIPMENTCLFNCLASSTP

**Equipmentclfnclasstp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Equipment` | ✓ | |  |  |
| `ClassInternalID` | ✓ | |  |  |
| `ClassType` | ✓ | |  |  |
| `KeyDate` |  | |  |  |
| `ChangeNumber` |  | |  |  |
| `ClfnStatus` |  | |  |  |
| `ClassPositionNumber` |  | |  |  |
| `ClassIsStandardClass` |  | |  |  |
| `ClfnObjectInternalID` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `EquipmentValidityEndDate` |  | |  |  |
| `ClassMaintAuthGrp` |  | |  |  |
| `ClassClassfctnAuthGrp` |  | |  |  |
| `Class` |  | |  |  |
| `_Characteristic` | | ✓ | | |
| `_Equipment` | | ✓ | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Equipment Classification Class - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #MIXED
   },
   semanticKey: ['Equipment']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_EquipmentClfnClassTP as projection on R_EquipmentClfnClassTP {
   key Equipment,  
    key  ClassInternalID,
    key  ClassType,
     @EndUserText.label: 'Key Date'
    KeyDate,
     ChangeNumber,
     ClfnStatus,
     ClassPositionNumber,
     @Semantics.booleanIndicator : true
     ClassIsStandardClass,
     ClfnObjectInternalID,
     ValidityEndDate,
    @Consumption.hidden: true 
    EquipmentValidityEndDate,
    @Consumption.hidden: true 
      ClassMaintAuthGrp,
    @Consumption.hidden: true 
      ClassClassfctnAuthGrp,
      Class,
    _Characteristic: redirected to composition child I_EquipmentClfnClassCharTP,
   _Equipment  : redirected to parent I_EquipmentTP
}
```
