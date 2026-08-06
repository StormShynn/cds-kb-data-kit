---
name: I_EQUIPMENTCLFNCHARVALUETP
description: Equipmentclfncharvaluetp
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
# I_EQUIPMENTCLFNCHARVALUETP

**Equipmentclfncharvaluetp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Equipment` | `Equipment` |
| key `ClassType` | `ClassType` |
| key `ClfnCharcValuePositionNumber` | `ClfnCharcValuePositionNumber` |
| key `CharcInternalID` | `CharcInternalID` |
| `Characteristic` | `Characteristic` |
| `CharcDataType` | `CharcDataType` |
| `ClassInternalID` | `ClassInternalID` |
| `KeyDate` | `KeyDate` |
| `ChangeNumber` | `ChangeNumber` |
| `CharcValueIntervalType` | `CharcValueIntervalType` |
| `CharcValue` | `CharcValue` |
| `CharcFromNumericValue` | `CharcFromNumericValue` |
| `CharcFromNumericValueUnit` | `CharcFromNumericValueUnit` |
| `CharcToNumericValue` | `CharcToNumericValue` |
| `CharcToNumericValueUnit` | `CharcToNumericValueUnit` |
| `CharcFromDecimalValue` | `CharcFromDecimalValue` |
| `CharcToDecimalValue` | `CharcToDecimalValue` |
| `CharcFromAmount` | `CharcFromAmount` |
| `CharcToAmount` | `CharcToAmount` |
| `Currency` | `Currency` |
| `CharcFromDate` | `CharcFromDate` |
| `CharcToDate` | `CharcToDate` |
| `CharcFromTime` | `CharcFromTime` |
| `CharcToTime` | `CharcToTime` |
| `ValidityEndDate` | `ValidityEndDate` |
| `CharcMaintAuthGrp` | `CharcMaintAuthGrp` |
| `ClassMaintAuthGrp` | `ClassMaintAuthGrp` |
| `ClassClassfctnAuthGrp` | `ClassClassfctnAuthGrp` |
| `_Characteristic` | *Association* |
| `_Equipment` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Equipment Clfn Class Char Value - TP'
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
define view entity I_EquipmentClfnCharValueTP as projection on R_EquipmentClfnCharValueTP {

key Equipment,  
    key  ClassType,
    key  ClfnCharcValuePositionNumber,
    key  CharcInternalID ,    
   Characteristic,
   CharcDataType,
    ClassInternalID,   
   @EndUserText.label: 'Key Date'
   KeyDate,
     ChangeNumber,
     CharcValueIntervalType,
     CharcValue,
     CharcFromNumericValue,  
     CharcFromNumericValueUnit,
     CharcToNumericValue,     
     CharcToNumericValueUnit,
     CharcFromDecimalValue,
     CharcToDecimalValue,
    @Semantics.amount.currencyCode: 'Currency'
     CharcFromAmount,
    @Semantics.amount.currencyCode: 'Currency'
     CharcToAmount,
     Currency,                           
     CharcFromDate,
     CharcToDate,
     CharcFromTime,
     CharcToTime, 
    @Consumption.hidden: true 
   ValidityEndDate,
    @Consumption.hidden: true
    CharcMaintAuthGrp,
    @Consumption.hidden: true
    ClassMaintAuthGrp,
    @Consumption.hidden: true
   ClassClassfctnAuthGrp, 
    _Characteristic : redirected to parent I_EquipmentClfnClassCharTP,
    _Equipment   : redirected to I_EquipmentTP       
  
}
```
