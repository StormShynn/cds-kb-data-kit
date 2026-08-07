---
name: I_EQUIPMATLSRLNMBRPRTNTP
description: Equipmatlsrlnmbrprtntp
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
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_EQUIPMATLSRLNMBRPRTNTP

**Equipmatlsrlnmbrprtntp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  |  |  |
| `SerialNumber` | ✓ | |  |  |  |  |
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
| `_EquipmentMaterialSerialNumber` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Partner of Material Serial Number - TP'
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #MASTER
   },
   semanticKey: ['Equipment']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Metadata.ignorePropagatedAnnotations:true
define view entity I_EquipMatlSrlNmbrPrtnTP as projection on R_EquipMatlSrlNmbrPrtnTP {
key Material,
key SerialNumber,
key Equipment,
key PartnerFunction,
key EquipmentPartnerObjectNmbr,
EquipmentPartner,
CreatedByUser,
CreationDate,
CreationTime,
LastChangedByUser,
LastChangeTime,
LastChangeDate,
MaintObjectInternalID,
@Consumption.hidden: true
PartnerFunctionType,
@Semantics.booleanIndicator: true
@Consumption.hidden: true
CntctPersnIsBusPrpsCompleted,
@Consumption.hidden: true
CntctPersnCustomerAccountGroup,
@Consumption.hidden: true
CntctPersnCustomerAuthznGroup,
@Consumption.hidden: true
CntctPersnSupplierAccountGroup,
@Consumption.hidden: true
CntctPersnSupplierAuthznGroup,
@Semantics.booleanIndicator: true
@Consumption.hidden: true
CustomerIsBusPrpsCmpltd,
@Consumption.hidden: true
CustomerAccountGroup,
@Consumption.hidden: true
CustomerAuthznGrp,
@Semantics.booleanIndicator: true
@Consumption.hidden: true
EmployeeIsBusPrpsCmpltd,
@Consumption.hidden: true
EmployeeAuthznGroup,
@Semantics.booleanIndicator: true
@Consumption.hidden: true
SupplierIsBusPrpsCmpltd,
@Consumption.hidden: true
SupplierAccountGroup,
@Consumption.hidden: true
SupplierAuthznGrp,
/* Associations */
_EquipmentMaterialSerialNumber: redirected to parent I_EquipMatlSerialNumberTP
}
```
