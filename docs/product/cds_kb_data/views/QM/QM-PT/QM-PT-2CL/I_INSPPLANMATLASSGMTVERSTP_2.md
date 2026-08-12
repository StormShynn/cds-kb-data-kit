---
name: I_INSPPLANMATLASSGMTVERSTP_2
description: "Inspplanmatlassgmtverstp 2"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - transactional-processing
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPPLANMATLASSGMTVERSTP_2

**Inspplanmatlassgmtverstp 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `InspectionPlanGroup` | ✓ | |  |  |  |  |
| `InspectionPlan` | ✓ | |  |  |  |  |
| `InspPlanMatlAssignment` | ✓ | |  |  |  |  |
| `InspPlanMatlAssgmtIntVersion` | ✓ | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `MultipleSpecificationObject` |  | |  |  |  |  |
| `MultipleSpecificationObjType` |  | |  |  |  |  |
| `BOOSearchText` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_InspPlan` | | ✓ | | | | |
| `_InspectionPlanVersion` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Inspection Plan Material Assignment Version - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MASTER
}
@ObjectModel.sapObjectNodeType: { name: 'InspPlanMaterialAssignment' }
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@Metadata.ignorePropagatedAnnotations: true
@VDM: { viewType: #TRANSACTIONAL }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view entity I_InspPlanMatlAssgmtVersTP_2 as projection on R_InspPlanMatlAssgmtVersionTP
{
  key Material,
  key Plant,
  key InspectionPlanGroup,
  key InspectionPlan,
  key InspPlanMatlAssignment,
  key InspPlanMatlAssgmtIntVersion,
  
  ValidityStartDate,
  ValidityEndDate,
  
  ChangeNumber,
  CreationDate,
  CreatedByUser,
  LastChangeDate,
  LastChangedByUser,
  IsDeleted,
  Supplier,
  Customer,
  MultipleSpecificationObject,
  MultipleSpecificationObjType,
  BOOSearchText,
  ChangedDateTime,
  // for ETag handling
  //_InspPlan.ChangedDateTime,  
  _Customer,
  _Supplier,
  
  _InspPlan : redirected to parent I_InspectionPlanTP_2,
  @Semantics.valueRange.maximum: '1'
  _InspectionPlanVersion : redirected to I_InspectionPlanVersionTP_2
}
```
