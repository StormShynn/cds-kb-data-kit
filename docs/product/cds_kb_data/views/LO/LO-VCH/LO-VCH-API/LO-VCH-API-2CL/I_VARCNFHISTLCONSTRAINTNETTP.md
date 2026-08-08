---
name: I_VARCNFHISTLCONSTRAINTNETTP
description: "Varcnfhistlconstraintnettp"
app_component: LO-VCH-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-VCH
  - LO-VCH-API
  - interface-view
  - transactional-processing
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# I_VARCNFHISTLCONSTRAINTNETTP

**Varcnfhistlconstraintnettp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VarCnfConstraintNetName` | ✓ | |  |  |  |  |
| `ChangeNumber` | ✓ | |  |  |  |  |
| `ObjectDependencyStatus` |  | |  |  |  |  |
| `ObjectDependencyGroup` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `_ConstraintNet` | | ✓ | | | | |
| `_HistoricalConstraint` | | ✓ | | | | |
| `_HistoricalText` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'VC Historical Constraint Net - TP'
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  }
}
define view entity I_VarCnfHistlConstraintNetTP
  as projection on R_VarCnfHistlConstraintNetTP
{
  key VarCnfConstraintNetName,
  key ChangeNumber,

      ObjectDependencyStatus,
      ObjectDependencyGroup,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      ValidityStartDate,
      ValidityEndDate,
      IsDeleted,

      /* Associations */
      _ConstraintNet        : redirected to parent I_VarCnfConstraintNetTP,
      _HistoricalConstraint : redirected to I_VarCnfHistlConstraintTP,
      _HistoricalText       : redirected to I_VarCnfHistlCstrtNetTextTP
}
```
