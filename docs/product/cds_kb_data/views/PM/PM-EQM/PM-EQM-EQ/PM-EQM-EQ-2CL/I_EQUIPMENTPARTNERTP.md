---
name: I_EQUIPMENTPARTNERTP
description: "Equipmentpartnertp"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
  - partner
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_EQUIPMENTPARTNERTP

**Equipmentpartnertp**

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
| `PartnerFunction` | ✓ | |  |  |  |  |
| `EquipmentPartnerObjectNmbr` | ✓ | |  |  |  |  |
| `EquipmentPartner` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `MaintObjectInternalID` |  | |  |  |  |  |
| `PartnerFunctionType` |  | |  |  |  |  |
| `CntctPersnIsBusPrpsCompleted` |  | |  |  |  |  |
| `CntctPersnCustomerAccountGroup` |  | |  |  |  |  |
| `CntctPersnCustomerAuthznGroup` |  | |  |  |  |  |
| `CntctPersnSupplierAccountGroup` |  | |  |  |  |  |
| `CntctPersnSupplierAuthznGroup` |  | |  |  |  |  |
| `CustomerIsBusPrpsCmpltd` |  | |  |  |  |  |
| `CustomerAccountGroup` |  | |  |  |  |  |
| `CustomerAuthznGrp` |  | |  |  |  |  |
| `EmployeeIsBusPrpsCmpltd` |  | |  |  |  |  |
| `EmployeeAuthznGroup` |  | |  |  |  |  |
| `SupplierIsBusPrpsCmpltd` |  | |  |  |  |  |
| `SupplierAccountGroup` |  | |  |  |  |  |
| `SupplierAuthznGrp` |  | |  |  |  |  |
| `_Equipment` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Equipment Partner - TP'
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
define view entity I_EquipmentPartnerTP as projection on R_EquipmentPartnerTP {
 key Equipment,
      key PartnerFunction,
      key EquipmentPartnerObjectNmbr,
       EquipmentPartner,
       CreatedByUser,
       CreationDate, 
      @Consumption.hidden: true
       CreationTime,
      @Consumption.hidden: true
       LastChangedByUser,
      @Consumption.hidden: true
       LastChangeTime,
      @Consumption.hidden: true
       LastChangeDate,
        @Consumption.hidden: true
      ValidityEndDate,  
        @Consumption.hidden: true          
       MaintObjectInternalID,
      @Consumption.hidden: true
       PartnerFunctionType,
      @Consumption.hidden: true
      @Semantics.booleanIndicator : true
       CntctPersnIsBusPrpsCompleted,
      @Consumption.hidden: true
       CntctPersnCustomerAccountGroup,
      @Consumption.hidden: true
      CntctPersnCustomerAuthznGroup,
      @Consumption.hidden: true
      CntctPersnSupplierAccountGroup,
      @Consumption.hidden: true
      CntctPersnSupplierAuthznGroup,
      @Consumption.hidden: true
      @Semantics.booleanIndicator : true
      CustomerIsBusPrpsCmpltd,
      @Consumption.hidden: true
      CustomerAccountGroup,
      @Consumption.hidden: true
     CustomerAuthznGrp,
      @Consumption.hidden: true
      @Semantics.booleanIndicator : true
      EmployeeIsBusPrpsCmpltd,
      @Consumption.hidden: true
       EmployeeAuthznGroup,
      @Consumption.hidden: true
      @Semantics.booleanIndicator : true
        SupplierIsBusPrpsCmpltd,
      @Consumption.hidden: true
       SupplierAccountGroup,
      @Consumption.hidden: true
       SupplierAuthznGrp, 
      _Equipment  : redirected to parent I_EquipmentTP
  
}
```
