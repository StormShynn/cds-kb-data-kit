---
name: I_FUNCTIONALLOCATIONPARTNERTP
description: Functionallocationpartnertp
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
  - partner
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_FUNCTIONALLOCATIONPARTNERTP

**Functionallocationpartnertp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FunctionalLocation` | `FunctionalLocation` |
| key `PartnerFunction` | `cast(PartnerFunction as parvw_unv preserving type )` |
| key `FuncnlLocPartnerObjectNmbr` | `FuncnlLocPartnerObjectNmbr` |
| `FunctionalLocationLabelName` | `FunctionalLocationLabelName` |
| `Partner` | `Partner` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeTime` | `LastChangeTime` |
| `LastChangeDate` | `LastChangeDate` |
| `MaintObjectInternalID` | `MaintObjectInternalID` |
| `PartnerFunctionType` | `PartnerFunctionType` |
| `CntctPersnIsBusPrpsCompleted` | `CntctPersnIsBusPrpsCompleted` |
| `CntctPersnCustomerAccountGroup` | `CntctPersnCustomerAccountGroup` |
| `CntctPersnCustomerAuthznGroup` | `CntctPersnCustomerAuthznGroup` |
| `CntctPersnSupplierAccountGroup` | `CntctPersnSupplierAccountGroup` |
| `CntctPersnSupplierAuthznGroup` | `CntctPersnSupplierAuthznGroup` |
| `CustomerIsBusPrpsCmpltd` | `CustomerIsBusPrpsCmpltd` |
| `CustomerAccountGroup` | `CustomerAccountGroup` |
| `CustomerAuthznGrp` | `CustomerAuthznGrp` |
| `EmployeeIsBusPrpsCmpltd` | `EmployeeIsBusPrpsCmpltd` |
| `EmployeeAuthznGroup` | `EmployeeAuthznGroup` |
| `SupplierIsBusPrpsCmpltd` | `SupplierIsBusPrpsCmpltd` |
| `SupplierAccountGroup` | `SupplierAccountGroup` |
| `SupplierAuthznGrp` | `SupplierAuthznGrp` |
| `_FunctionalLocation` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Functional Location Partner - TP'
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #MASTER
   },
   semanticKey: ['FunctionalLocation']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Metadata.ignorePropagatedAnnotations:true
define view entity I_FunctionalLocationPartnerTP as projection on R_FunctionalLocationPartnerTP {
key FunctionalLocation,
key cast(PartnerFunction as parvw_unv preserving type ) as PartnerFunction,
key FuncnlLocPartnerObjectNmbr,
FunctionalLocationLabelName,
Partner,
CreatedByUser,
CreationDate,
CreationTime,
LastChangedByUser,
LastChangeTime,
LastChangeDate,
MaintObjectInternalID,
@Consumption.hidden: true
PartnerFunctionType,
@Consumption.hidden: true
@Semantics.booleanIndicator: true
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
@Semantics.booleanIndicator: true
CustomerIsBusPrpsCmpltd,
@Consumption.hidden: true
CustomerAccountGroup,
@Consumption.hidden: true
CustomerAuthznGrp,
@Consumption.hidden: true
@Semantics.booleanIndicator: true
EmployeeIsBusPrpsCmpltd,
@Consumption.hidden: true
EmployeeAuthznGroup,
@Consumption.hidden: true
@Semantics.booleanIndicator: true
SupplierIsBusPrpsCmpltd,
@Consumption.hidden: true
SupplierAccountGroup,
@Consumption.hidden: true
SupplierAuthznGrp,
_FunctionalLocation : redirected to parent I_FunctionalLocationTP
  
};
```
