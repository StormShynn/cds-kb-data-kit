---
name: I_VARCNFHISTLCONSTRAINTTP
description: "Varcnfhistlconstrainttp"
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
# I_VARCNFHISTLCONSTRAINTTP

**Varcnfhistlconstrainttp**

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
| `VarCnfConstraintName` | ✓ | |  |  |  |  |
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
| `LocalLastChangeDateTime` |  | |  |  |  |  |
| `_Constraint` | | ✓ | | | | |
| `_ConstraintNet` | | ✓ | | | | |
| `_HistoricalText` | | ✓ | | | | |
| `_SourceCode` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'VC Historical Constraint - TP'
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
  }
}
define view entity I_VarCnfHistlConstraintTP
  as projection on R_VarCnfHistlConstraintTP
{
  key VarCnfConstraintNetName,
  key VarCnfConstraintName,
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
      LocalLastChangeDateTime,

      /* Associations */
      _Constraint     : redirected to parent I_VarCnfConstraintTP,
      _ConstraintNet  : redirected to I_VarCnfConstraintNetTP,
      _HistoricalText : redirected to I_VarCnfHistlCstrtTextTP,
      _SourceCode     : redirected to I_VarCnfCstrtSourceCodeTP
}
```
