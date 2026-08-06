---
name: I_INSPPLNMATLASSGMTVERSION_2
description: Inspplnmatlassgmtversion 2
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPPLNMATLASSGMTVERSION_2

**Inspplnmatlassgmtversion 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Material` | `I_BOOMaterialAssgmtChangeState.Material` |
| key `Plant` | `I_BOOMaterialAssgmtChangeState.Plant` |
| key `InspectionPlanGroup` | `I_BOOMaterialAssgmtChangeState.BillOfOperationsGroup` |
| key `InspectionPlan` | `I_BOOMaterialAssgmtChangeState.BillOfOperationsVariant` |
| key `InspPlanMatlAssignment` | `I_BOOMaterialAssgmtChangeState.BOOToMaterialInternalID` |
| key `InspPlanMatlAssgmtIntVersion` | `I_BOOMaterialAssgmtChangeState.BOOMatlInternalVersionCounter` |
| `BillOfOperationsType` | `I_BOOMaterialAssgmtChangeState.BillOfOperationsType` |
| `ValidityStartDate` | `I_BOOMaterialAssgmtChangeState.ValidityStartDate` |
| `ValidityEndDate` | `I_BOOMaterialAssgmtChangeState.ValidityEndDate` |
| `ChangeNumber` | `I_BOOMaterialAssgmtChangeState.ChangeNumber` |
| `CreationDate` | `I_BOOMaterialAssgmtChangeState.CreationDate` |
| `CreatedByUser` | `I_BOOMaterialAssgmtChangeState.CreatedByUser` |
| `LastChangeDate` | `I_BOOMaterialAssgmtChangeState.LastChangeDate` |
| `LastChangedByUser` | `I_BOOMaterialAssgmtChangeState.LastChangedByUser` |
| `IsDeleted` | `I_BOOMaterialAssgmtChangeState.IsDeleted` |
| `IsImplicitlyDeleted` | `I_BOOMaterialAssgmtChangeState.IsImplicitlyDeleted` |
| `Supplier` | `I_BOOMaterialAssgmtChangeState.Supplier` |
| `Customer` | `I_BOOMaterialAssgmtChangeState.Customer` |
| `BOOSearchText` | `I_BOOMaterialAssgmtChangeState.BOOSearchText` |
| `_BillOfOperationsType` | *Association* |
| `_BillOfOperationsGroup` | *Association* |
| `_InspectionPlanVersion` | *Association* |
| `_Supplier` | *Association* |
| `_Customer` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [1..1] |
| `_InspectionPlanVersion` | `I_InspectionPlanVersion` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Version of Material Assgmt in Insp Plan'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER }
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
    
// This CDS is similar to I_InspPlnMatlAssgmtVersion but C1 released
define view entity I_InspPlnMatlAssgmtVersion_2 
  as select from I_BOOMaterialAssgmtChangeState

  association [1..1] to I_BillOfOperationsType  as _BillOfOperationsType  on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
     
  association [1..1] to I_BillOfOperationsGroup as _BillOfOperationsGroup on  $projection.BillOfOperationsType = _BillOfOperationsGroup.BillOfOperationsType
                                                                          and $projection.InspectionPlanGroup  = _BillOfOperationsGroup.BillOfOperationsGroup
  /*+[hideWarning] { "IDS" :  [ "CARDINALITY_CHECK" ] } */
  association [1..1] to I_InspectionPlanVersion as _InspectionPlanVersion on  $projection.InspectionPlanGroup  =  _InspectionPlanVersion.InspectionPlanGroup
                                                                          and $projection.InspectionPlan       =  _InspectionPlanVersion.InspectionPlan
                                                                          and $projection.ValidityStartDate   >= _InspectionPlanVersion.ValidityStartDate
                                                                          and $projection.ValidityStartDate   <= _InspectionPlanVersion.ValidityEndDate
  association [0..1] to I_Supplier              as _Supplier              on  $projection.Supplier             = _Supplier.Supplier
  association [0..1] to I_Customer              as _Customer              on  $projection.Customer             = _Customer.Customer
{
  key I_BOOMaterialAssgmtChangeState.Material,
  key I_BOOMaterialAssgmtChangeState.Plant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key I_BOOMaterialAssgmtChangeState.BillOfOperationsGroup         as InspectionPlanGroup,
  key I_BOOMaterialAssgmtChangeState.BillOfOperationsVariant       as InspectionPlan,
  key I_BOOMaterialAssgmtChangeState.BOOToMaterialInternalID       as InspPlanMatlAssignment,
  key I_BOOMaterialAssgmtChangeState.BOOMatlInternalVersionCounter as InspPlanMatlAssgmtIntVersion,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      I_BOOMaterialAssgmtChangeState.BillOfOperationsType,
      I_BOOMaterialAssgmtChangeState.ValidityStartDate,
      I_BOOMaterialAssgmtChangeState.ValidityEndDate,
      I_BOOMaterialAssgmtChangeState.ChangeNumber,   
      I_BOOMaterialAssgmtChangeState.CreationDate,
      I_BOOMaterialAssgmtChangeState.CreatedByUser,
      I_BOOMaterialAssgmtChangeState.LastChangeDate,
      I_BOOMaterialAssgmtChangeState.LastChangedByUser,
      I_BOOMaterialAssgmtChangeState.IsDeleted, 
      I_BOOMaterialAssgmtChangeState.IsImplicitlyDeleted,
      I_BOOMaterialAssgmtChangeState.Supplier, 
      I_BOOMaterialAssgmtChangeState.Customer,
      I_BOOMaterialAssgmtChangeState.BOOSearchText,
      
//     Associations
      _BillOfOperationsGroup,
      _BillOfOperationsType,
      _InspectionPlanVersion,
      _Supplier,
      _Customer
}
where
  BillOfOperationsType = 'Q'
```
