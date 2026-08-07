---
name: I_FUNCTIONALLOCATIONPARTNERTP
description: "Functionallocationpartnertp"
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalLocation` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  | `cast(PartnerFunction as parvw_unv preserving type )` |  |  |
| `FuncnlLocPartnerObjectNmbr` | ✓ | |  |  |  |  |
| `FunctionalLocationLabelName` |  | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
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
| `_FunctionalLocation` | | ✓ | | | | |

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
