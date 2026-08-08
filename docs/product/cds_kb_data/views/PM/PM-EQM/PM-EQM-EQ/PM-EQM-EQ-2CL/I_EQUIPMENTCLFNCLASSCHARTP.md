---
name: I_EQUIPMENTCLFNCLASSCHARTP
description: "Equipmentclfnclasschartp"
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
# I_EQUIPMENTCLFNCLASSCHARTP

**Equipmentclfnclasschartp**

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
| `ClassInternalID` | ✓ | |  |  |  |  |
| `CharcInternalID` | ✓ | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `Characteristic` |  | |  |  |  |  |
| `CharcDataType` |  | |  |  |  |  |
| `KeyDate` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ClassType` |  | |  |  |  |  |
| `ClassMaintAuthGrp` |  | |  |  |  |  |
| `ClassClassfctnAuthGrp` |  | |  |  |  |  |
| `CharcMaintAuthGrp` |  | |  |  |  |  |
| `Class` |  | |  |  |  |  |
| `_Value` | | ✓ | | | | |
| `_EquipmentClass` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Equipment Clfn Class Character - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
   },
   semanticKey: ['Equipment']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_EquipmentClfnClassCharTP as projection on R_EquipmentClfnClassCharTP
{
 key Equipment,
 key  ClassInternalID,
 key  CharcInternalID,
 @Consumption.hidden: true 
 ValidityEndDate, 
 Characteristic,
 CharcDataType,
  @EndUserText.label: 'Key Date'
 KeyDate,
 ChangeNumber,
 ClassType,
 @Consumption.hidden: true
 ClassMaintAuthGrp,
 @Consumption.hidden: true
 ClassClassfctnAuthGrp,
 @Consumption.hidden: true
 CharcMaintAuthGrp,
 Class,
      
 _Value: redirected to composition child I_EquipmentClfnCharValueTP,
 _EquipmentClass : redirected to parent I_EquipmentClfnClassTP,
 _Equipment : redirected to I_EquipmentTP
  
}
```
